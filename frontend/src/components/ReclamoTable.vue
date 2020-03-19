<template>
<card>
  <div slot="raw-content" class="table-responsive">
    <table id='Table' class="table table-striped text-center">
       <thead>
         <tr>
           <td><strong>Nombre</strong></td>
           <td><strong>Apellido Paterno</strong></td>
           <td><strong>Apellido Materno</strong></td>
           <td><strong>fecha de Nacimiento</strong></td>
           <td><strong>Telefono</strong></td>
           <td><strong>rut</strong></td>
         </tr>
       </thead>
       <tbody>
         <tr v-for="item in documentos" :key='item.id'>
           <td>
             {{ item.nombre }}
           </td>
           <td>
             {{ item.apellido_paterno }}
           </td>
           <td>
             {{ item.apellido_materno }}
           </td>
           <td>
             {{ item.fecha_nac }}
           </td>
           <td>
             {{ item.telefono1 }}
           </td>
           <td>
             {{ item.rut }}
           </td>
         </tr>
       </tbody>
    </table>
  </div>
</card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'reclamo-table',
  mounted () {
    this.$store.dispatch('loadDocumentos')
  },
  computed: mapState([
    'documentos'
  ])
}
</script>
