<template>
  <q-layout view="lHh Lpr fff">
    <q-layout-header class="no-shadow">
      <q-btn icon="exit_to_app" flat color="blue" style="left: 95%;" @click="goToLogin()"/>
    </q-layout-header>
    <q-layout-drawer
      v-model="leftDrawerOpen"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>
          <div class="row justify-center" style="padding-top: 10%; padding-bottom: 10%;">
             <img src="~assets/logo_branco.png"  width="85%" height="40%" style="padding-right: 7%">
          </div>
        </q-list-header>
        <q-item to="/home">
          <q-item-side icon="timeline" />
          <q-item-main label="Dashboard" />
        </q-item>
        <q-item to="/alergia">
          <q-item-side icon="scatter_plot" />
          <q-item-main label="Alergias" />
        </q-item>
        <q-item to="/cirurgia">
          <q-item-side icon="healing" />
          <q-item-main label="Cirurgias" />
        </q-item>
        <q-item to="/doenca">
          <q-item-side icon="local_hospital" />
          <q-item-main label="Doenças"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    goToLogin: function () {
      window.localStorage.clear('token')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.q-layout {
  background-color: #f3f1f1;
}
.q-layout-drawer {
  background: linear-gradient(0deg, rgb(98, 172, 227, 1) 0%, rgba(72, 44, 191, 1) 100%);
}
.q-item-main {
  color: white;
}
.q-item-side {
  color: white;
}
</style>
