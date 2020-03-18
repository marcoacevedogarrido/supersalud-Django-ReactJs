<template>
<b-container class="bv-example-row">
  <b-row>
    <b-col sm>logo SupIntSalud</b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Desde" label-for="input-desde">
        <b-form-datepicker id="input-desde" v-model="value" class="mb-2" placeholder=''></b-form-datepicker>
      </b-form-group>
    </b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Hasta" label-for="input-hasta">
        <b-form-datepicker id="input-hasta" v-model="value" class="mb-2" placeholder=''></b-form-datepicker>
      </b-form-group>
    </b-col>
  </b-row>

  <b-row>
    <b-col sm></b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Materia" label-for="input-desde">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-form-group>
    </b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Estado" label-for="input-hasta">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-form-group>
    </b-col>
  </b-row>

  <b-row>
    <b-col sm></b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Folio" label-for="input-desde">
        <b-form-input v-model="text" placeholder=""></b-form-input>
      </b-form-group>
    </b-col>
    <b-col sm>
      <b-form-group id="fieldset-horizontal" label-cols-sm="3" label-cols-lg="4" label="Rut Afectado" label-for="input-hasta">
        <b-form-input v-model="text" placeholder=""></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>

</b-container>
</template>

<script>
  export default {
    name:'reclamo-filtros',
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style>
  .btn {
    color: #000000;
    background-color: transparent;
  }

  .card label {
    color: #000000 !important;
  }
</style>
