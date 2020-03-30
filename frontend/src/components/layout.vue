<template>
  <v-app id="sandbox">
      <v-navigation-drawer v-model="primaryDrawer.model" app overflow>
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-content>
              <div v-for="repo in img" :key="repo.name">
                <img :src="repo.src" />
              </div>

            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list nav dense>
          <v-divider></v-divider>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>PERFILES</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-document-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>SOLICITUDES</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-table</v-icon>
              </v-list-item-icon>
              <v-list-item-title>TABLEROS</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-chart-bar</v-icon>
              </v-list-item-icon>
              <v-list-item-title>REPORTES</v-list-item-title>
            </v-list-item>
            <div  class='redes'>
              <v-btn icon><a href='http://www.gmail.com/'><v-icon>mdi-email-outline</v-icon></a>
              </v-btn>
              <v-btn icon><a href='http://www.facebook.com/'><v-icon>mdi-facebook</v-icon></a>
              </v-btn>
              <v-btn icon><a href='tweater.com'><v-icon>mdi-twitter</v-icon></a>
              </v-btn>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="primaryDrawer.clipped" app height='81px'>
        <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"/>
        <!-- <v-toolbar-title>Menu</v-toolbar-title> -->
        <div  class='settings'>
          <v-btn icon>
            <v-icon>
              mdi-settings
            </v-icon>
          </v-btn>
          <v-btn icon>
            <router-link :to="{ name: 'logout' }">
              <v-icon>
                mdi-logout-variant
              </v-icon>
            </router-link>
          </v-btn>
        </div>
      </v-app-bar>
      <v-content>
        <div class='tabla'>
          <Table></Table>
        </div>
      </v-content>
  </v-app>
</template>

<script>
import Table from '../components/dashboard/Table'

  export default {
    components: {
      Table
    },
    data: () => ({
      drawer: true,
      img: [
        { name: 'test1', src: require('../assets/logo.png') }
      ],
      drawers: ['Default (no property)'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)'
      },
      footer: {
        inset: true
      }
    })
  }
</script>

<style>

.theme--light.v-navigation-drawer {
    background-color: #FAFAFA!important;
    color: #E8E8E8 !important;
    text-align:left!important;
}

.theme--light.v-list {
    background-color: #F3F3F3 !important;
    color: #D4D4D4!important;
}

.v-list--dense .v-list-item .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list-item--dense .v-list-item__title {
    font-size: 100% !important;
    line-height: 1rem;
    color:#525F7F;
    margin-left:10%;
}

.theme--light.v-icon {
    color: #525f7f!important;
}

.v-item-group {
    margin-top:20%!important;
}

.v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child), .v-list--nav .v-list-item--dense:not(:last-child):not(:only-child), .v-list--rounded.v-list--dense .v-list-item:not(:last-child):not(:only-child), .v-list--rounded .v-list-item--dense:not(:last-child):not(:only-child) {
    margin-bottom: 9%!important;
    margin-left:10%;
}

.v-divider  {
  color: #E4E4E4!important;
  border-color: #E4E4E4!important;
  margin-top:0%!important;
}

.v-navigation-drawer .v-list {
    padding-top: 0%;
}

.redes {
  padding-top: 215%;
  margin-left:25%;
}

.redes a {
  text-decoration:none!important;
}

.theme--light.v-list {
    background: #fff!important;
    color: #5E5E5E!important;
}

.settings {
  position: absolute;
  right: 15px;
}

.settings a {
  color:#5E5E5E!important;
  text-decoration:none!important;
}

.v-overlay__scrim {
  background-color:transparent!important;
}

img {
  height:80px;
  width:100%;
}

.v-list-item img{
  padding-left:0px!important;
}

.v-list-item {
  padding-top:0%!important;
  padding-left:3%!important;
  padding-bottom:0%!important;
  padding-right:3%!important;
}

.v-list-item__content {
  padding-bottom:0%!important;
  padding-top:0%!important;
}

v-navigation-drawer__prepend {
  background-color:transparent!important;
}

.v-list--dense .v-list-item .v-list-item__icon, .v-list-item--dense .v-list-item__icon {
    margin-right:10%!important;
}

.theme--light.v-navigation-drawer {
    background-color: #5E5E5E;
}

.v-toolbar {
 -webkit-box-shadow: none!important;
 box-shadow: none!important;
}

.v-list-item__title {
  margin-left:0%!important;
}

.tabla {
  margin-left:5%;
  margin-right:5%;
  margin-top:3%;
}

</style>
