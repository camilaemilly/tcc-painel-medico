<template>
  <q-layout>
    <q-page-container>
      <q-page id="main">
        <div class="box-logo shadow-3">
          <img src="../assets/logo.png" height="130vh" width="190vw">
          <span style="color: #6699ff; padding-top: 5%; font-size: 24px"><b>PAINEL DO MÉDICO</b></span>
        </div>
        <div class="form">
          <div class="row-input">
            <q-input class="input" inverted v-model="identificador" type="text" float-label="Nome de usuário do paciente" :before="[{icon: 'mail', handler () {}}]"/>
          </div>
          <q-btn class="btn" @click="login()">Entrar</q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      identificador: ''
    }
  },
  methods: {
    login () {
      let json = {
        identificador: this.identificador
      }
      this.$store.dispatch('login', json)
    }
  },
  created () {
    window.localStorage.clear('token')
  },
  computed: {
    getLogin () {
      return this.$store.getters.getLogin
    }
  }
}
</script>

<style scoped>
#main{
  background: linear-gradient(120deg, #8fc9e4 0%, #7199da 100%);
}
.row-input {
  border-bottom: 1px solid white;
}
.box-logo{
  padding-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vh;
  background: white;
}
.form{
  margin: 5vh 30vw 0vw 30vw;
}
.btn{
  margin-top: 5vh;
  background-color: #4481e4;
  color: white;
  width: 100%;
}
.password{
  margin-top: 2vh;
}
.footer{
  color: white;
  margin-bottom: 2vh;
}
.q-if-label, .q-if-addon, .q-if-control {
  color: white;
}
.input {
  box-shadow: none;
}
.bg-primary {
  background: transparent !important;
}
</style>
