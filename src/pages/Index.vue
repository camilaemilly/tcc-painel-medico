<template>
  <q-page padding>
    <div>
      <div class="row">
        <div class="col-12 col-lg-8 usuario">
          <q-card inline class="full-width" style="width: 330px; background-color: white">
            <q-list separator>
              <q-item>
                <q-item-side>
                  <q-item-tile>
                    <img id="profile-image" v-bind:src="getUsuario.imagem"/>
                  </q-item-tile>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>
                    <div class="row">
                      <div class="col">
                          <span style="color: black; font-size: 24px"><p style="color: gray">Paciente</p>{{getUsuario.nome}}</span>
                          <q-item-tile sublabel>{{getUsuario.endereco.rua}}, {{getUsuario.endereco.numero}} - {{getUsuario.endereco.complemento}} - {{getUsuario.endereco.bairro}}</q-item-tile>
                          <q-item-tile sublabel>{{getUsuario.endereco.cidade}} / {{getUsuario.endereco.estado}}</q-item-tile>
                      </div>
                    </div>
                  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
         <div class="col-12 col-lg-4 emergencia">
            <q-card inline class="full-width" style="width: 330px; background-color: white; padding: 8%">
            <q-list separator>
              <q-item>
                <q-item-side>
                </q-item-side>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col">
                            <div class="col">
                          <div>
                            <p style="color: gray; font-size: 24px">Informações gerais</p>
                            <q-item-tile sublabel>Gênero: {{getUsuario.genero.genero}}</q-item-tile>
                            <q-item-tile sublabel>Diabetes: {{getEmergencia.diabetes}}</q-item-tile>
                            <q-item-tile sublabel>Hipertensão: {{getEmergencia.hipertensao}}</q-item-tile>
                            <q-item-tile sublabel>Doandor de orgãos: {{getEmergencia.doadorDeOrgaos}}</q-item-tile>
                            <q-item-tile sublabel>Ataque Convulsivos: {{getEmergencia.ataqueConvulsivos}}</q-item-tile>
                          </div>
                        </div>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
           </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-3">
          <q-card inline class="full-width card1">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label >
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Tipo sanguíneo do paciente</span>
                            <q-item-tile class="texto_card">{{getUsuario.sangue.tipoSanguineo}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3">
          <q-card inline class="full-width card2">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Quantidade de cirurgias</span>
                            <q-item-tile class="texto_card">{{getCirurgia}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3">
          <q-card inline class="full-width card3">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Quantidade de doenças</span>
                            <q-item-tile class="texto_card">{{getDoenca}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3">
          <q-card inline class="full-width card4">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Quantidade de alergias</span>
                            <q-item-tile class="texto_card">{{getAlergia}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

      <div class="row" style="padding-bottom: 2%;">
        <div class="col-12 col-lg-6">
          <q-card inline class="full-width card5">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card2">Quantidade de cirurgias por ano</span>
                        </div>
                      </div>
                    </q-item-tile>
                  <GChart type="LineChart" :data="chartData" :options="chartOptions"/>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-6">
          <q-card inline class="full-width card5">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card2">Quantidade de doenças por ano</span>
                        </div>
                      </div>
                    </q-item-tile>
                    <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Ano', 'Doença'],
        ['2015', 0],
        ['2016', 0],
        ['2017', 0],
        ['2018', 2]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getUsuario')
    this.$store.dispatch('getEmergencia')
    this.$store.dispatch('getAlergia')
    this.$store.dispatch('getDoenca')
    this.$store.dispatch('getCirurgia')
  },
  computed: {
    getUsuario () {
      return this.$store.getters.getUsuario
    },
    getEmergencia () {
      return this.$store.getters.getEmergencias
    },
    getAlergia () {
      return this.$store.getters.getQuantAlergias
    },
    getDoenca () {
      return this.$store.getters.getQuantDoencas
    },
    getCirurgia () {
      return this.$store.getters.getQuantCirurgias
    }
  }
}
</script>

<style>
#profile-image {
  border-radius: 120px;
  border: none;
  width: 150px;
  height: 150px;
}
.card1 {
  width: 330px;
  background: rgb(88, 60, 211);
}
.card2 {
  width: 330px;
  background: rgb(101, 77, 207);
}
.card3 {
  width: 330px;
  background: rgb(83, 117, 212);
}
.card4 {
  width: 330px;
  background: rgb(97, 169, 223);
}
.card5 {
  width: 330px;
  background:white;
}
.texto-card {
  color: white;
  font-size: 24px
}
.texto_card2 {
  color: gray;
  font-size: 16px
}
.usuario {
  padding-right: 2%;
}
.emergencia {
  margin-bottom: 5%;
}
@media only screen and (max-width: 640px) {
  .usuario {
    margin-bottom: 5%;
  }
  .emergencia {
    margin-bottom: 5%;
  }
}
</style>
