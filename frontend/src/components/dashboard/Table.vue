<template>
<div>
  <v-responsive :aspect-ratio="16/9">
      <v-toolbar-title>Registros</v-toolbar-title>
      <v-row>
        <v-col cols="6" md="4">
            <div class='search'>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar Registros"
                outlined
                dense
              ></v-text-field>
            </div>
        </v-col>
        <v-col cols="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Desde"
                prepend-icon="mdi-calendar-check"
                readonly
                v-on="on"
                outlined
                dense
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Hasta"
                prepend-icon="mdi-calendar-check"
                readonly
                v-on="on"
                outlined
                dense
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    <v-data-table :headers="headers" :items="tableData" class="elevation-1" :search='search' hide-default-footer></v-data-table>
  </v-responsive>
</div>
</template>

<script>

export default {
  data () {
      return {
          date: new Date().toISOString().substr(0, 7),
          menu: false,
          menu1: false,
          modal: false,
          search: '',
          headers: [
              { text: 'Nombre', value: 'nombre' },
              { text: 'Apellido Paterno', value: 'apellido_paterno' },
              { text: 'Apellido Materno', value: 'apellido_materno' },
              { text: 'Fecha de Nacimiento', value: 'fecha_nac' }
          ],
          columnas: ['nombre', 'apellido_paterno', 'apellido_materno', 'fecha_nac', 'rut', 'telefono1', 'comuna'],
          tableData: []
      }
  },
  mounted () {
      this.axios.get('http://127.0.0.1:8000/api/afectados/').then(res => {
          this.tableData = res.data.results
      })
  }
}
</script>

<style>

.search {
  border-color: #525f7f!important;
}

.v-input__slot {
  border-color:#525f7f!important;
}

thead {
  background-color:#E8E8E8!important;
}

.v-toolbar__title {
  text-align:left!important;
  margin-bottom:2%;
}

.v-data-table th {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 90%!important;
    height: 48px;
}

</style>
