<script setup>
import DataTableBooksComponent from '@/components/DataTableBooksComponent.vue';
</script>

<template>
    <v-card-text class="my-10">
        <h2 class="my-2">Listado de Libros</h2>
        <v-container>
            <DataTableBooksComponent/>
        </v-container>
    </v-card-text>
</template>