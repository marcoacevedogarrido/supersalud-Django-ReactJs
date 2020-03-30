<template>
 <div class='container-flex'>
   <div class="row">
     <div class="col">
       <div class="login-form">
         <div class='lg'>
           <div class="row">
             <div v-for="repo in img" :key="repo.name">
               <img :src="repo.src" />
             </div>
           </div>
           <form v-on:submit.prevent="loginUser">
             <small id="emailHelp" class="form-text text-muted">Ingrese solamente numeros y letras.</small>
             <input type="text" class='form-control form-control-md' name="username" v-model="username" placeholder="Username" autocomplete="current-username" aria-describedby="emailHelp">
             <small id="passwordHelp" class="form-text text-muted">Password debe tener al menos 4 digitos.</small>
             <input type="password" class='form-control form-control-md' name="password" v-model="password" placeholder="Password" aria-describedby="passwordHelp">
             <b-button class="btn btn-primary btn-md btn-block" square type="submit">Ingresar</b-button>
           </form>
       </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        wrongCred: false,
        img: [
          { name: 'test1', src: require('../assets/logosuper.jpeg') }
        ]
      }
    },
    methods: {
      loginUser () {
        this.$store.dispatch('loginUser', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.wrongCred = false
          this.$router.push({ name: 'tables' })
        })
        .catch(e => {
          Toast.fire({
            icon: 'error',
            title: 'Credenciales invalidas!'
          })
        })
      }
    }
  }
</script>

<style scoped>

.login-form {
  margin: 0;
  padding: 0;
}

.lg {
 background-color: white;
 box-shadow: 1px 0 4px 4px rgba(0, 0, 0, 0.15);
 text-decoration: none;
 width: 350px;
 height: 400px;
 margin: auto auto;
 border-radius:0.7%;
}

.lg form {
 padding-left: 5%;
 padding-right:5%;
 padding-bottom: 1%;
}

.lg button {

}

.container-flex {
  margin-top: 10%;
}

input {
  margin-bottom: 2%;
}

.btn-primary {
  background-color: #0064ac;
  border-color: #005593;
  margin-top: 6%;
  box-shadow: none !important;

}

form {
  margin-top:27%;
  text-align:left;
}

.row h4 {
  margin-top:10%;
}

.row img {
  height:80%;
  width:90%;
  margin-top:5%;
  padding-right:3%;
  padding-left:3%;
}
</style>
