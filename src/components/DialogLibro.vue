<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

import imageDefault from "@/assets/images/book_2.png";
const store = useStore();
const props = defineProps({
  libro: Object,
});

const emit = defineEmits(["cerrarDialog"]);
const id = ref(props.libro.id ?? 0);
const title = ref(props.libro.title);
const autor = ref(props.libro.autor);
const public_at = ref(
  props.libro.public_at ? new Date(props.libro.public_at) : new Date()
);
const isbn = ref(props.libro.isbn);
const estatus = ref(props.libro.status ?? true);

const validado = ref(false);
const formRef = ref(false)
const menuFecha = ref(false);

// computed
const formattedDate = computed(() => {
  return public_at.value ? public_at.value.toLocaleDateString("es") : "";
});

// Watcher para cerrar el menú cuando public_at cambia
watch(public_at, () => {
  menuFecha.value = false;
});
// Rules
const rules = {
  title: [
    (v) => !!v || "Titulo Requerido",
    (v) => v.length >= 3 || "Debe tener minimo 3 caracteres",
    (v) =>
      /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(v) || "Solo letras y números son permitidos",
  ],
  autor: [
    (v) => !!v || "Autor Requerida",
    (v) => v.length >= 3 || "Debe tener minimo 3 caracteres",
    (v) => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(v) || "Solo letras son permitidas",
  ],
  isbn: [
    (v) => !!v || "ISBN Requerida",
    (v) => v.length >= 3 || "Debe tener minimo 3 caracteres",
    (v) => /^[0-9-]+$/.test(v) || "Solo números y guiones son permitidos",
  ],
  fecha: [
    (v) => !!v || "Fecha Requerida",
    (v) => {
      const selectedDate = new Date(v);
    const currentDate = new Date();

    // Comparar solo el año, el mes y el día
    const isFutureDate =
      selectedDate.getTime() > currentDate.getTime() ||
      (selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getDate() > currentDate.getDate());

    return !isFutureDate || "La fecha no puede ser futura";
    },
  ],
};
// Metodos
const guardar = async () => {
  // validacion
  const { valid } = await formRef.value.validate(); // Usar la referencia asignada
  if (valid) {
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("autor", autor.value);
    formData.append("public_at", public_at.value);
    formData.append("isbn", isbn.value);
    formData.append("estatus", estatus.value ? 1 : 0);
    if (id.value > 0) {
      formData.append("id", id.value);
      formData.append("_method", "PUT");
      await store.dispatch("books/updateLibro", formData);
    } else {
      await store.dispatch("books/storeLibro", formData);
    }
    emit("cerrarDialog", false);
  }
};
</script>
<template>
  <v-card>
    <v-toolbar :color="id ? 'brown-darken-1' : 'blue-darken-2'">
      <div class="d-flex justify-center align-center mt-5 ms-3">
        <h2 class="ml-4 text-uppercase text">
          {{ id > 0 ? `${title}` : "Nuevo Registro" }}
        </h2>
      </div>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="validado" lazy-validation class="mx-2" ref="formRef">
        <v-switch
          v-model="estatus"
          :label="estatus ? 'Disponible' : 'Rentado'"
          color="success"
          inset
          hide-details
        ></v-switch>
        <v-row>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img max-width="150" :src="imageDefault"> </v-img>
          </v-col>
          <!-- datapiker -->
          <v-col cols="12" md="6">
            <v-menu v-model="menuFecha" :close-on-content-click="false">
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-bind="props"
                  :model-value="formattedDate"
                  readonly
                  label="F. de publicación"
                  variant="solo"
                  prepend-inner-icon="mdi-calendar"
                  :rules="rules.fecha"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="public_at"
                offset-y
                show-adjacent-months
                class="elevation-0"
              >
              </v-date-picker>
            </v-menu>
            <!-- ISBN  -->
            <v-text-field
              v-model="isbn"
              label="ISBN"
              placeholder="Ej. 978-84-375-0255-1"
              variant="solo"
              prefix="ISBN-"
              :rules="rules.isbn"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="title"
              label="Titulo de libro"
              placeholder="Ej. El señor de los anillos..."
              variant="solo"
              :rules="rules.title"
            />
            <v-text-field
              v-model="autor"
              label="Autor de libro"
              placeholder="Ej. Paulo Coelho."
              variant="solo"
              :rules="rules.autor"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="emit('cerrarDialog', false)" color="gray" variant="outlined">
        Cerrar
      </v-btn>
      <v-btn
        @click="guardar"
        :disabled="!validado"
        :color="id > 0 ? 'brown-darken-1' : 'info'"
        variant="flat"
      >
        {{ id > 0 ? "Actualizar" : "Guardar" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
