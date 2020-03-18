<template>
<b-card>
  <reclamo-filtros></reclamo-filtros>
  <reclamo-table></reclamo-table>
</b-card>
</template>

<script>
import { ReclamoTable } from "@/components";
import { ReclamoFiltros } from '@/components';

export default {
  components: {
    ReclamoTable,
    ReclamoFiltros,
  }
}
</script>
