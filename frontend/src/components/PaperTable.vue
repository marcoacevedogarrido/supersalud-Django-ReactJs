<template>
<card>
  <div slot="raw-content" class="table-responsive">
    <table id='Table' class="table table-striped text-center" :class="tableClass">
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
         <tr v-for="item in documentos">
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
import axios from 'axios'

const Listarpath = 'http://127.0.0.1:8000/api/afectados/'

export default {
  name: 'paper-table',
  data () {
    return {
      id:'',
      nombre:'',
      apellido_paterno:'',
      apellido_materno:'',
      fecha_nac:'',
      telefono1:'',
      rut:'',
      documentos: []
    }
  },
  methods: {
    getLinea () {
      axios.get(Listarpath).then((response) => {
        this.documentos = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
  created () {
    this.getLinea()
  }
}
</script>
