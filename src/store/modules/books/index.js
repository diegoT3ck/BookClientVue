import clienteAxios from "@/store/config/clienteAxios";
import { toast } from 'vue3-toastify';
const toastOptions = {
    position: "top-right",
    timeout: 5000,
}

// store/modules/books.js
const state = {
    books: [],
    book: {},
    pathResource: '/libros',
    loading: false,
    headers: [
        { title: 'Nombre de Libro', align: 'start', sortable: true,  key: 'title' },
        { title: 'Autor', key: 'autor', align: 'end' },
        { title: 'Publicación', key: 'public_at', align: 'end', sortable: false },
        { title: 'Estatus', key: 'status', align: 'start', sortable: false },
        { title: 'Acciones', key: 'actions', sortable: false },
    ]
  };
  
  const mutations = {
    setBooks(state, payload) {
        state.books = [...payload];
    },
    setBook(state, payload) {
        state.book = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    }
  };
  
  const actions = {
    async consultarLibros({state, commit}) {
        await commit ('setLoading', true)
        return clienteAxios.get(state.pathResource)
        .then(({ data }) => {
            commit('setBooks', data.books);
            commit('setLoading', false);
            toast.success('Datos actualizados', toastOptions);
        }).catch((error) => {
            toast.error(`Error API del Servidor: ${error.message}`);
            commit('setLoading', false);
        });
    },
    async storeLibro({commit, state, dispatch}, payload) {
        await commit ('setLoading', true)
        await clienteAxios.post(state.pathResource, payload)
            .then(async res => {
                toast.success(res.data.msg)
            }).catch(error => {
                commit('setLoading', false)
                toast.error(`Error con servidor: ${error.message}`)
                // throw error
            })
        await dispatch('consultarLibros')
    },
    async updateLibro({commit, state, dispatch}, payload) {
        const id = payload.get("id")
        await commit ('setLoading', true)
        await clienteAxios.put(`${state.pathResource}/${id}`, payload)
            .then(res => {
                toast.success(res.data.msg)
            }).catch(error => {
                commit('setLoading', false)
                toast.error(`Error con servidor: ${error.message}`)
                // throw error
            })
        await dispatch('consultarLibros')
    },
    async deleteLibro({commit, state, dispatch}, id) {
        await commit ('setLoading', true)
        await clienteAxios.delete(`${state.pathResource}/${id}`)
        .then(() => {
            toast.success('Libro almacenado correctamente', toastOptions);
            commit('setLoading', false);
            return dispatch('consultarLibros');
        }).catch((error) => {
            commit('setLoading', false)
            toast.error(`Error con servidor: ${error.message}`)
            // throw error
          });
    },
  };
  
  const getters = {
    getBooks: state => state.books,
    getBook: state => state.book,
    getHeaders: state => state.headers,
    getLoading: state => state.loading
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };