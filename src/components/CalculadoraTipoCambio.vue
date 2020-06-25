<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  label="Moneda Origen"
                  type="text"
                  v-model="moneda.origen"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  label="Moneda Destino"
                  type="text"
                  v-model="moneda.destino"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  label="Monto"
                  type="text"
                  v-model="moneda.monto"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm12 md12 v-show="this.flag" class="my-120px">
                <v-text-field
                  label="Monto al Tipo de Cambio"
                  type="text"
                  :prefix="this.moneda.destino"
                  readonly
                  v-model="moneda.valor"
                  color="green"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12 v-show="this.flag">
                <v-text-field
                  label="Tipo de Cambio"
                  type="text"
                  :prefix="this.moneda.destino"
                  readonly
                  v-model="moneda.tipoCambio"
                  color="green"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn @click="cancelar()">Limpiar</v-btn>
          <v-btn rounded dark color="primary" @click="convertir()"
            >Calcular</v-btn
          >
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiService from "@/services/ApiService.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      flag: false,
      moneda: {
        origen: "",
        destino: "",
        monto: 0,
        valor: 0,
        tipoCambio: 0,
      },
    };
  },
  methods: {
    cancelar() {
      //this.inicializarPuesto();
      this.flag = false;
      this.moneda.origen = "";
      this.moneda.destino = "";
      this.moneda.monto = 0;
    },
    convertir() {
      this.flag = true;
      ApiService.convertir(this.moneda)
        .then((result) => {
          this.moneda = result.data;
        })
        .catch(() => {
          console.error("Problemas al realizar el calculo, intente nuevamente");
        });
    },
  },
};
</script>
