<script setup>
import { useStore } from 'vuex';
const store = useStore();

const eliminar = async () => {
    await store.dispatch('books/deleteLibro', props.libro.id); 
    emit('cerrarDialogDel', false)
}
const props = defineProps({
    libro: Object
})
const emit = defineEmits([
    'cerrarDialogDel'
])
</script>
<template>
    <v-card>
        <v-toolbar  color="error"> 
            <div class="d-flex justify-center align-center mt-5 ms-3">
              <h2 class="ml-4 text-uppercase text">Eliminar</h2>
            </div>
            </v-toolbar>
        <v-card-text>
            <p>
                Estas seguro de eliminar {{ props.libro.title }}
            </p>

        </v-card-text>
        <v-card-actions class="d-flex justify-end">
            <v-btn @click="emit('cerrarDialogDel', false)" color="gray" variant="outlined">
                Cerrar                
            </v-btn>
            <v-btn  @click="eliminar" color="error" variant="outlined">
                Confirmar
            </v-btn>
        </v-card-actions>
        
    </v-card>
</template>