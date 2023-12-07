<template>
    <div>
        <v-card-title class="d-flex align-center justify-space-around ga-3 pe-2" v-show="items.length > 0">
            <v-icon icon="mdi-bookmark-check-outline"></v-icon> 
            Encuentra el libro que buscas

            <v-autocomplete
              
              v-model="search"
              :items="items"
              
              
              item-title="title"
              item-value="id"
              prepend-inner-icon="mdi-magnify"
              density="compact"
              label="Buscar"
              single-line
              flat
              hide-details
              variant="solo-filled"
            ></v-autocomplete>
            
            <span>Filtrar por</span>
          </v-card-title>

          <v-divider></v-divider>
        <v-data-table
        v-model:search="search" 
        :loading="loading"
        :items="items"
        :headers="headers"
        >
        
            <template v-slot:item.actions="{ item }">
                <v-btn
                color="blue-darken-3"
                size="small"
                class="me-2" icon
                @click="editar(item)"
                > <v-icon>
                    mdi-pencil
                </v-icon>
                </v-btn>
                <v-btn
                color="error"
                size="small" icon
                @click="eliminar(item)"
                > <v-icon>
                    mdi-delete
                </v-icon>
                </v-btn>
            </template>
        </v-data-table>
        <v-dialog v-model="dialog">


        </v-dialog>
    </div>
</template>

<script>
export default {
    name:'DataTableBooks',
    data: () => ({
            loading: false,
            dialog: false,
            dialogDel: false,
            libro: {},
            search: '',
            items: [
                {
                    id: 1,
                    title: 'Primer libro',
                    autor: 'Diego Teck',
                    public_at: new Date().getUTCDate(),
                    rating: 5,
                    stock: true,
                },
            ],
            headers: [
                { title: 'Nombre de Libro', align: 'start', sortable: false, },
                { title: 'Autor', key: 'autor', align: 'end' },
                { title: 'Publicación', key: 'public_at', align: 'end' },
                { title: 'rating', key: 'rating', align: 'end' },
                { title: 'Acciones', key: 'actions', sortable: false },

            ],
        }),
        methods: {
            editar(item) {
                console.log('editando...', item)
                return
                this.libro = item 
                this.dialog = true
            },
            eliminar(item) {
                console.log('eliminando...', item)

            }
        }
}
</script>