<script setup>
import { ref, onMounted } from "vue";
import { formatFecha } from "@/data/helpers.js";
import { useStore } from "vuex";
import imageDefault from "@/assets/images/book_2.png";
onMounted(async () => {
  cargarDatos();
});
const cargarDatos = () => store.dispatch("books/consultarLibros");
// Vuex
const store = useStore();

// Components
import DialogLibro from "./DialogLibro.vue";
import DialogDel from "./DialogDel.vue";
// vars
const dialog = ref(false);
const dialogDel = ref(false);
const libro = ref({});
const search = ref("");
// Funciones
const nuevoRegistro = () => {
  libro.value = {};
  dialog.value = true;
};
const editar = (item) => {
  libro.value = item;
  dialog.value = true;
};
const eliminar = (item) => {
  libro.value = item;
  dialogDel.value = true;
};
// metodos
const cambiarEstatus = async (libro) => {
  // console.log('libro', libro)
  const { id, status } = { ...libro };
  const data = new FormData();
  data.append("id", id);
  data.append("estatus", status == true ? 1 : 0);
  data.append("_method", "PUT");
  await store.dispatch("books/updateLibro", data);
};
const cerrarDialog = (bool) => (dialog.value = bool);
const cerrarDialogDel = (bool) => (dialogDel.value = bool);
</script>
<template>
  <div>
    <v-card-title
      class="d-flex align-center justify-space-around ga-3 pe-2"
      v-show="store.getters['books/getBooks'].length > 0"
    >
      <v-icon icon="mdi-bookmark-check-outline"></v-icon>
      Busca tu libro
      <v-text-field
        v-model="search"
        item-title="title"
        item-value="id"
        placeholder="Ej. Nombre de Libro, Autor, ISBN"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Ej. Nombre de Libro, Autor, ISBN"
        single-line
        flat
        hide-details
        variant="solo-filled"
      ></v-text-field>
      <v-btn class="ms-10" color="blue-darken-2" @click="nuevoRegistro">
        Nuevo Libro
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table
      v-model:search="search"
      :loading="store.getters['books/getLoading']"
      :items="store.getters['books/getBooks']"
      :headers="store.getters['books/getHeaders']"
      :search="search"
      :items-per-page="5"
    >
      <!-- Titulo -->
      <template v-slot:item.title="{ item }">
        <div class="d-flex align-center ms-5">
          <v-img max-width="50" height="auto" :src="imageDefault" />
          <p class="text-body-1 ms-6">
            {{ item.title }}
          </p>
        </div>
      </template>
      <!-- Autor -->
      <template v-slot:item.autor="{ item }">
        <v-chip class="ma-2" color="primary">
          <v-icon start icon="mdi-account-circle-outline"></v-icon>
          <span class="text-body-2">
            {{ item.autor }}
          </span>
        </v-chip>
      </template>

      <!-- Estatus -->
      <template v-slot:item.status="{ item }">
        <div>
          <v-switch
            v-model="item.status"
            @change="cambiarEstatus(item)"
            :label="item.status ? 'Disponible' : 'Rentado'"
            color="success"
            hide-details
            inset
          ></v-switch>
        </div>
      </template>

      <!-- Acciones -->
      <template v-slot:item.public_at="{ item }">
        <v-chip
          class="ma-2"
          color="brown"
          label
          prepend-icon="mdi-label"
          :model-value="true"
        >
          {{ formatFecha(new Date(item.public_at)) }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn color="blue-darken-3" size="small" class="me-2" icon @click="editar(item)">
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
        <v-btn color="error" size="small" icon @click="eliminar(item)">
          <v-icon> mdi-delete </v-icon>
        </v-btn>
      </template>
      <!-- No data -->
      <template #no-data>
        <p class="text-body-1 my-3">No se encontraron registros</p>
        <v-btn color="primary" class="mb-2" @click="cargarDatos"> Cargar </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" width="500">
      <DialogLibro :libro="libro" @cerrarDialog="cerrarDialog" />
    </v-dialog>
    <v-dialog v-model="dialogDel" width="500">
      <DialogDel :libro="libro" @cerrarDialogDel="cerrarDialogDel" />
    </v-dialog>
  </div>
</template>
