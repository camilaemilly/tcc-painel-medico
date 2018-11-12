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
             <img src="~assets/logo.png"  width="85%" height="40%" style="padding-right: 7%">
          </div>
        </q-list-header>
        <q-item to="/home">
          <q-item-side icon="timeline" />
          <q-item-main label="Dashboard" />
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
  background-color: rgba(128, 128, 128, 0.349);
}
.q-layout-drawer {
  background: white;
}
.q-item-main {
  color: gray;
}
</style>
