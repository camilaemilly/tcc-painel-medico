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
    this.$store.dispatch('getEmergenciaPdf')
  },
  computed: {
    getEmergenciaPdf () {
      return this.$store.getters.getEmergenciasPdf
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
        {rua: this.getEmergenciaPdf.endereco.rua,
          numero: this.getEmergenciaPdf.endereco.numero,
          bairro: this.getEmergenciaPdf.endereco.bairro,
          complemento: this.getEmergenciaPdf.endereco.complemento,
          cidade: this.getEmergenciaPdf.endereco.cidade,
          estado: this.getEmergenciaPdf.endereco.estado})

      let problemasCardiacos = []
      problemasCardiacos.push(
        {problemasCardiacos: this.getEmergenciaPdf.problemasCardiacos})

      let emergencia = []
      emergencia.push(
        {ataqueConvulsivos: this.validar(this.getEmergenciaPdf.ataqueConvulsivos),
          doadorDeOrgaos: this.validar(this.getEmergenciaPdf.doadorDeOrgaos),
          hipertensao: this.validar(this.getEmergenciaPdf.hipertensao),
          diabetes: this.validar(this.getEmergenciaPdf.diabetes),
          tipoSanguineo: this.getEmergenciaPdf.tipoSanguineo.tipoSanguineo})

      function arrumarMedicamentos (array) {
        let nomesMedicamentos = ''
        array.forEach(function (value) {
          if (nomesMedicamentos === '') {
            nomesMedicamentos = value.nomeMedicamento
          } else {
            nomesMedicamentos = nomesMedicamentos + ', ' + value.nomeMedicamento
          }
        })
        return nomesMedicamentos
      }

      let alergia = []
      this.getEmergenciaPdf.alergias.forEach(function (value) {
        alergia.push({tipoAlergia: value.tipoAlergia,
          localAfetado: value.localAfetado,
          dataDescoberta: value.dataDescoberta,
          efeitos: value.efeitos,
          medicamentos: arrumarMedicamentos(value.medicamentos)})
      })

      let cirurgia = []
      this.getEmergenciaPdf.cirurgias.forEach(function (value) {
        cirurgia.push({tipoCirurgia: value.tipoCirurgia,
          clinicaResponsavel: value.clinicaResponsavel,
          dataDescoberta: value.dataDescoberta,
          medicoResponsavel: value.medicoResponsavel,
          medicamentos: arrumarMedicamentos(value.medicamentos)})
      })

      let doenca = []
      this.getEmergenciaPdf.doencas.forEach(function (value) {
        doenca.push({nomeDoenca: value.nomeDoenca,
          dataDescoberta: value.dataDescoberta,
          medicamentos: arrumarMedicamentos(value.medicamentos)})
      })

      var columnsEndereco = [
        {title: 'Rua', dataKey: 'rua'},
        {title: 'Número', dataKey: 'numero'},
        {title: 'Bairro', dataKey: 'bairro'},
        {title: 'Complemento', dataKey: 'complemento'},
        {title: 'Cidade', dataKey: 'cidade'},
        {title: 'Estado', dataKey: 'estado'}]

      var columnsProblemasCardiacos = [
        {title: 'Problemas Cardíacos', dataKey: 'problemasCardiacos'}]

      var columnsEmergencia = [
        {title: 'Ataques convulsivos', dataKey: 'ataqueConvulsivos'},
        {title: 'Doador de orgãos', dataKey: 'doadorDeOrgaos'},
        {title: 'Hipertensão', dataKey: 'hipertensao'},
        {title: 'Diabetes', dataKey: 'diabetes'},
        {title: 'Tipo sanguíneo', dataKey: 'tipoSanguineo'}]

      var columnsAlergia = [
        {title: 'Tipo da alergia', dataKey: 'tipoAlergia'},
        {title: 'Local afetado', dataKey: 'localAfetado'},
        {title: 'Data da descoberta', dataKey: 'dataDescoberta'},
        {title: 'efeitos', dataKey: 'efeitos'},
        {title: 'Medicamentos', dataKey: 'medicamentos'}]

      var columnsCirurgia = [
        {title: 'Tipo da cirurgia', dataKey: 'tipoCirurgia'},
        {title: 'Clínica responsável', dataKey: 'clinicaResponsavel'},
        {title: 'Data da descoberta', dataKey: 'dataDescoberta'},
        {title: 'Médico responsável', dataKey: 'medicoResponsavel'},
        {title: 'Medicamentos', dataKey: 'medicamentos'}]

      var columnsDoenca = [
        {title: 'Nome da doença', dataKey: 'nomeDoenca'},
        {title: 'Data da descoberta', dataKey: 'dataDescoberta'},
        {title: 'Medicamentos', dataKey: 'medicamentos'}]

      var doc = new jsPDF('p', 'pt')

      doc.text(200, 40, '' + this.getEmergenciaPdf.nomeDoUsuario)
      doc.setFontSize(16)
      doc.autoTable(columnsEndereco, endereco, {
        startY: 70,
        margin: {horizontal: 40},
        theme: 'plain'
      })
      doc.setFontSize(12)
      doc.text('Informações gerais de saúde', 42, doc.autoTable.previous.finalY + 30)
      doc.autoTable(columnsEmergencia, emergencia, {
        startY: doc.autoTableEndPosY() + 40,
        margin: {horizontal: 40},
        theme: 'plain'
      })
      doc.autoTable(columnsProblemasCardiacos, problemasCardiacos, {
        startY: doc.autoTableEndPosY() + 5,
        margin: {horizontal: 40},
        theme: 'plain'
      })
      doc.text('Alergias', 40, doc.autoTable.previous.finalY + 20)
      doc.autoTable(columnsAlergia, alergia, {
        startY: doc.autoTableEndPosY() + 30,
        margin: {horizontal: 40}
      })
      doc.text('Cirurgias', 40, doc.autoTable.previous.finalY + 30)
      doc.autoTable(columnsCirurgia, cirurgia, {
        startY: doc.autoTableEndPosY() + 40,
        margin: {horizontal: 40}
      })
      doc.text('Doenças', 40, doc.autoTable.previous.finalY + 30)
      doc.autoTable(columnsDoenca, doenca, {
        startY: doc.autoTableEndPosY() + 40,
        margin: {horizontal: 40}
      })
        doc.save('info.pdf')
    }
  }
}
</script>
