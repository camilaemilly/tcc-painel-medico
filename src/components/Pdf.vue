<template>
  <div class="row">
    <q-btn round color="orange" class="fixed" icon="assignment" style="right: 18px; bottom: 18px;" @click="exportPdf"/>
  </div>
</template>

<script>
/* eslint new-cap: ["error", { "newIsCap": false }] */
var jsPDF = require('jspdf')
require('jspdf-autotable')

export default {
  name: 'app',
  data () {
    return {}
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
  },
  methods: {
    validar (valor) {
      if (valor === 1) {
        return 'Sim'
      }
      return 'Não'
    },
    exportPdf () {
      let endereco = []
      endereco.push(
        {peso: this.getUsuario.peso,
          altura: this.getUsuario.altura,
          sexo: this.getUsuario.sexo,
          cep: this.getUsuario.cep,
          telefone: this.getUsuario.telefone,
          cidade: this.getUsuario.cidade,
          estado: this.getUsuario.estado})

      let consulta = []
      this.getConsulta.forEach(function (value) {
        consulta.push({local: value.local,
          medico: value.medico,
          motivo: value.motivo,
          data: value.data,
          horario: value.horario})
      })

      let remedio = []
      this.getRemedio.forEach(function (value) {
        remedio.push({nome: value.nome,
          dataFim: value.dataFim,
          dataInicio: value.dataInicio,
          periodicidade: value.periodicidade,
          horario: value.horario})
      })

      var columnsEndereco = [
        {title: 'Peso', dataKey: 'peso'},
        {title: 'Altura', dataKey: 'altura'},
        {title: 'Sexo', dataKey: 'sexo'},
        {title: 'CEP', dataKey: 'cep'},
        {title: 'Telefone', dataKey: 'telefone'},
        {title: 'Cidade', dataKey: 'cidade'},
        {title: 'Estado', dataKey: 'estado'}]

      var columnsConsulta = [
        {title: 'Local', dataKey: 'local'},
        {title: 'Médico', dataKey: 'medico'},
        {title: 'Motivo', dataKey: 'motivo'},
        {title: 'Data', dataKey: 'data'},
        {title: 'Horário', dataKey: 'horario'}]

      var columnsRemedio = [
        {title: 'Nome', dataKey: 'nome'},
        {title: 'Data Fim', dataKey: 'dataFim'},
        {title: 'Data Início', dataKey: 'dataInicio'},
        {title: 'Periodicidade', dataKey: 'periodicidade'},
        {title: 'Horário', dataKey: 'horario'}]

      var doc = new jsPDF('p', 'pt')

      doc.text(200, 40, '' + this.getUsuario.nomeCompleto)
      doc.setFontSize(16)
      doc.autoTable(columnsEndereco, endereco, {
        startY: 70,
        margin: {horizontal: 40},
        theme: 'plain'
      })
      doc.setFontSize(12)
      doc.text('Consultas', 40, doc.autoTable.previous.finalY + 20)
      doc.autoTable(columnsConsulta, consulta, {
        startY: doc.autoTableEndPosY() + 30,
        margin: {horizontal: 40}
      })
      doc.text('Remédios', 40, doc.autoTable.previous.finalY + 30)
      doc.autoTable(columnsRemedio, remedio, {
        startY: doc.autoTableEndPosY() + 40,
        margin: {horizontal: 40}
      })
      doc.save('info.pdf')
    }
  }
}
</script>
