
<template>
    <v-card-text>
        <h2 class="my-2">Listado de Libros</h2>
        <v-container>
            <DataTableBooksComponent/>
        </v-container>
    </v-card-text>
</template>
<script>
import DataTableBooksComponent from '@/components/DataTableBooksComponent.vue';
export default {
    name: 'LibrosView',
    components: {
        DataTableBooksComponent,
    },
    data() {
        return {
            
        }
    },
}

</script>