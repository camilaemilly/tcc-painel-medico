<template>
  <q-page class="page docs-table">
    <div>
      <span style="color: #7199da; font-size: 24px">Paciente</span>
      <div class="row linha2">
        <span style="color: #7199da; padding-right: 20%">{{getUsuario.nomeCompleto}}</span>
        <span style="color: #7199da;">{{getUsuario.cidade}} / {{getUsuario.estado}}</span>
      </div>
      <div class="row cards">
        <div class="col-12 col-lg-3 col_card1">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label >
                      <div class="row justify-center">
                        <img src="../assets/peso.png">
                      </div>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Peso</span>
                            <q-item-tile>{{getUsuario.peso}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3 col_card">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row justify-center">
                        <img src="../assets/ruler.png">
                      </div>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Altura</span>
                            <q-item-tile>{{getUsuario.altura}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3 col_card">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row justify-center">
                        <img src="../assets/sexo.png">
                      </div>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Gênero</span>
                            <q-item-tile>{{getUsuario.sexo}}</q-item-tile>
                        </div>
                      </div>
                    </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-3 col_card2">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row justify-center">
                        <img src="../assets/icon.png">
                      </div>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card">Telefone</span>
                            <q-item-tile>{{getUsuario.telefone}}</q-item-tile>
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
        <div class="col-12 col-lg-6 col_card1">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card2">Quantidade de consultas por ano</span>
                        </div>
                      </div>
                    </q-item-tile>
                  <GChart type="LineChart" :data="chartData1" :options="chartOptions"/>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-lg-6 col_card2">
          <q-card inline class="full-width card">
            <q-list separator>
              <q-item>
                <q-item-main>
                    <q-item-tile label>
                      <div class="row">
                        <div class="col text-center">
                            <span class="texto_card2">Quantidade de remédios por ano</span>
                        </div>
                      </div>
                    </q-item-tile>
                    <GChart type="ColumnChart" :data="chartData2" :options="chartOptions"/>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 tabela">
          <div class="row linha1">
            <span style="color: #7199da; padding-right: 4%">Remédios</span>
          </div>
          <q-table
            hide-bottom
            :data="getRemedio"
            :columns="columnsRemedio"
            :visible-columns="visibleColumnsRemedio"
            :loading="loadingRemedio"
            class="tabela_dados"
          >
        </q-table>
        </div>
        <div class="col-12 tabela">
          <div class="row linha1">
            <span style="color: #7199da; padding-right: 4%">Consultas</span>
          </div>
          <q-table
            hide-bottom
            :data="getConsulta"
            :columns="columnsConsulta"
            :visible-columns="visibleColumnsConsulta"
            :loading="loadingConsulta"
            class="tabela_dados"
          >
          </q-table>
          </div>
        </div>
    <c-pdf/>
    </div>
  </q-page>
</template>

<script>
import { GChart } from 'vue-google-charts'
import cpdf from '../components/Pdf.vue'

export default {
  components: {
    'c-pdf': cpdf,
    GChart
  },
  data () {
    return {
      loadingRemedio: false,
      loadingConsulta: false,
      columnsRemedio: [
        { name: 'nome', label: 'Nome', field: 'nome' },
        { name: 'periodicidade', label: 'Periodicidade', field: 'periodicidade' },
        { name: 'dataFim', label: 'Data Fim', field: 'dataFim' },
        { name: 'dataInicio', label: 'Data Início', field: 'dataInicio' },
        { name: 'horario', label: 'Horário', field: 'horario' }
      ],
      visibleColumnsRemedio: ['nome', 'composicao', 'periodicidade', 'dataFim', 'dataInicio', 'horario'],
      columnsConsulta: [
        { name: 'local', label: 'Local', field: 'local' },
        { name: 'medico', label: 'Médico', field: 'medico' },
        { name: 'motivo', label: 'Motivo', field: 'motivo' },
        { name: 'data', label: 'Data', field: 'data' },
        { name: 'horario', label: 'Horário', field: 'horario' }
      ],
      visibleColumnsConsulta: ['local', 'medico', 'motivo', 'data', 'horario'],
      chartData1: [
        ['Ano', 'Doença'],
        ['2015', 1],
        ['2016', 2],
        ['2017', 3],
        ['2018', 2]
      ],
      chartData2: [
        ['Ano', 'Doença'],
        ['2015', 3],
        ['2016', 1],
        ['2017', 2],
        ['2018', 1]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        legend: 'none'
      }
    }
  },
  created () {
    this.$store.dispatch('getUsuario')
    this.$store.dispatch('getRemedios')
    this.$store.dispatch('getConsultas')
  },
  computed: {
    getUsuario () {
      return this.$store.getters.getUsuario
    },
    getConsulta () {
      return this.$store.getters.getConsultas
    },
    getRemedio () {
      return this.$store.getters.getRemedios
    }
  }
}
</script>

<style>
.card {
  background: white;
}
.cards {
  padding-top: 3%;
  padding-bottom: 3%;
}
.texto_card2 {
  color: gray;
  font-size: 16px;
  font-weight: bold;
}
.texto_card {
  color: gray;
  font-size: 16px;
  font-weight: bold;
}
.linha1 {
  background: rgba(255, 255, 255, 0.192);
  padding: 1%;
}
.linha2 {
  background: rgba(255, 255, 255, 0.192);
  border-top: 2px solid rgba(255, 255, 255, 0.219);
  padding: 1%;
}
.page {
  padding-left: 5%;
  padding-right: 5%;
}
.col_card1 {
  padding-right: 1%;
}
.col_card2 {
  padding-left: 1%;
}
.col_card {
  padding-left: 1%;
  padding-right: 1%;
}
.tabela {
  padding-top: 3%;
}
.tabela_dados {
  background: white;
}
.text-right {
    text-align: center;
}
</style>
