<template>
    <q-page padding class="docs-table">
        <div separator style="border: none">
          <q-table
            grid
            hide-header
            :data="getAlergia.content"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :loading="loading"
            style="background-color: #f3f1f1;"
          >

            <template slot="top-left" slot-scope="props">
              <q-search
                hide-underline
                color="gray"
                v-model="filter"
              />
            </template>

            <div
              slot="item"
              slot-scope="props"
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 transition-generic"
            >
             <transition appear
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceInLeft"
              >
                <q-card class="transition-generic cursor-pointer" style="background-color: white">
                  <q-card-title class="relative-position">
                    <div class="row">
                      <div class="col">
                          {{ props.row.tipoAlergia }}
                      </div>
                    </div>
                  </q-card-title>
                  <q-card-separator />
                  <q-card-main class="q-pa-none">
                    <q-list no-border>
                      <q-item v-for="col in props.cols.filter(col => col.name !== 'Tipo Alergia')" :key="col.name">
                        <q-item-main>
                          <q-item-tile label>{{ col.label }}</q-item-tile>
                        </q-item-main>
                        <q-item-side right>
                          <q-item-tile class="item">{{ col.value }}</q-item-tile>
                        </q-item-side>
                      </q-item>
                      <q-item>
                        <q-item-main>
                          <q-item-tile label>Medicamentos</q-item-tile>
                        </q-item-main>
                        <q-item-side right>
                          <q-item-tile>
                            <div v-for="medi in props.row.medicamentos" :key="medi.idMedicamento.value">
                              {{ medi.nomeMedicamento }}
                            </div>
                          </q-item-tile>
                        </q-item-side>
                      </q-item>
                    </q-list>
                  </q-card-main>
                </q-card>
              </transition>
            </div>

            <div slot="bottom" slot-scope="props" class="row flex-center fit">
            </div>
          </q-table>
        </div>
    </q-page>
</template>

<script>
import { filter } from 'quasar'

export default {
  data () {
    return {
      loading: true,
      medicamentos: [],
      columns: [
        {
          name: 'Tipo Alergia',
          required: true,
          label: 'Tipo Alergia',
          align: 'left',
          field: 'tipoAlergia',
          sortable: true
        },
        { name: 'efeitos', label: 'Efeitos', field: 'efeitos' },
        { name: 'dataDescoberta', label: 'Data da descoberta', field: 'dataDescoberta' },
        { name: 'localAfetado', label: 'Local afetado', field: 'localAfetado' }
      ],
      filter: '',
      visibleColumns: ['efeitos', 'dataDescoberta', 'localAfetado']
    }
  },
  created () {
    this.$store.dispatch('getAlergia')
    this.$store.dispatch('getMedicamento')
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  computed: {
    getAlergia () {
      return this.$store.getters.getAlergias
    },
    getMedicamento () {
      return this.$store.getters.getMedicamentos
    }
  },
  methods: {
    search (terms, done) {
      done(filter(terms, {field: 'label', list: this.getMedicamento}))
    }
  }
}
</script>

<style scoped>
.q-item-main {
  color: rgba(0, 0, 0, 0.767);
}
.item {
  color: gray;
}
</style>
