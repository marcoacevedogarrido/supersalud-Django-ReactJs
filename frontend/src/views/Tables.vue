<template>
<div>
  <div>
    <Layout></Layout>
  </div>
</div>
</template>

<script>
import Layout from '../components/layout'

export default {
  components: {
    Layout
  }
}
</script>

<style>

.col-md-12 {
  visibility: hidden;
}

.VueTables__search-field {
  visibility: hidden;
}

.VueTables__search-field input{
  visibility: hidden;
}

.VueTables__sortable {
  background:#E4E4E4;
}

.table-responsive {
    border-radius:5px;
    text-align:left;
}

</style>
