<template>
  <q-layout>
    <q-page-container>
      <q-page>
      <section class="user overlay">
        <div class="user_options-container">
          <div class="user_options-text">
            <div class="user_options-unregistered text-center">
              <img alt="Logo App" src="~assets/novaLogo.png" width="40%">
              <p class="user_unregistered-text">OLÁ! SEJA BEM VINDO AO PAINEL DE DADOS DO MINDER</p>
            </div>
          </div>
          <div class="user_options-forms" id="user_options-forms">
            <div class="user_forms-login">
              <h2 class="forms_title">Painel de dados</h2>
                  <div class="row row-input">
                    <q-input class="input" v-model="identificador" type="text" inverted float-label="E-mail ou nome do usuário do paciente" :before="[{icon: 'mail', handler () {}}]"/>
                  </div>
                <div class="forms_buttons">
                  <q-btn class="full-width botao" size="md" label="Entrar" @click="login()"/>
                </div>
            </div>
          </div>
        </div>
      </section>
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      identificador: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.identificador)
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
* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: 1em;
}
.row-input {
  border-bottom: 1px solid white;
}
.input {
  background-color: transparent;
  box-shadow: none;
}
.botao {
  background-color: white;
  color: rgb(72, 44, 191);
}
.bg-primary {
  background: transparent !important;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("~assets/medico.jpeg") no-repeat center top fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.angle,
.overlay {
    position: relative;
    z-index: 1;
}
.overlay:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    opacity: 0.8;
    z-index: -2;
}

.angle:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0) -webkit-linear-gradient(left bottom, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) -webkit-gradient(linear, left bottom, right top, color-stop(50%, #ffffff), color-stop(50%, transparent)) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) -o-linear-gradient(left bottom, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) linear-gradient(to right top, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    z-index: -1;
}

.user_options-container {
  position: relative;
  width: 80%;
}
.user_options-text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  border-radius: 3px;
}
.user_options-registered,
.user_options-unregistered {
  width: 50%;
  padding: 75px 45px;
  color: #472cbf93;
}

.user_registered-title,
.user_unregistered-title {
  margin-bottom: 15px;
  font-size: 1.66rem;
  line-height: 1em;
}

.user_unregistered-text,
.user_registered-text {
  font-size: 0.83rem;
  line-height: 1.4em;
  font-weight: bold;
}

.user_options-forms {
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 420px;
  background: linear-gradient(0deg, rgb(98, 172, 227, 1) 0%, rgba(72, 44, 191, 1) 100%);
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  -webkit-transform: translate3d(100%, -50%, 0);
          transform: translate3d(100%, -50%, 0);
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
}
.user_options-forms .user_forms-login {
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}
.user_options-forms .forms_title {
  margin-bottom: 45px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.1rem;
}
.user_options-forms .forms_buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
}
.user_options-forms .forms_buttons-action {
  background-color: #3e50ad;
  border-radius: 3px;
  padding: 10px 35px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: background-color 0.2s ease-in-out;
}
.user_options-forms .forms_buttons-action:hover {
  background-color: #3e50ad;
}
.user_options-forms .user_forms-signup,
.user_options-forms .user_forms-login {
  position: absolute;
  top: 70px;
  left: 40px;
  width: calc(100% - 80px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, -webkit-transform 0.5s ease-in-out;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
}
.user_options-forms .user_forms-signup {
  -webkit-transform: translate3d(120px, 0, 0);
          transform: translate3d(120px, 0, 0);
}
.user_options-forms .user_forms-signup .forms_buttons {
  justify-content: flex-end;
}
.user_options-forms .user_forms-login {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  opacity: 1;
  visibility: visible;
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 60%;
  z-index: 1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 17s;
          animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
          animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
          animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}

</style>
