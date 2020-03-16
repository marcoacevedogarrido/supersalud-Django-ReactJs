<template>
  <div class='container'>
    <h2>Tabla Apiux</h2>
    <table id='Table' class="table table-striped table-bordered table-hover text-center">
       <thead class="thead-dark">
         <tr>
           <th>Id</th>
           <th>Nombre</th>
           <th>Apellido Paterno</th>
           <th>Apellido Materno</th>
           <th>fecha de Nacimiento</th>
           <th>Telefono</th>
           <th>rut</th>
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
</template>

<script>
import axios from 'axios'

const Listarpath = 'http://localhost:8000/api/afectados/'

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
