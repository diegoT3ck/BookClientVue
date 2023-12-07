<template>
  <v-app>
    <v-toolbar  color="brown-darken-1"       
      app
      extended
      flat
    > 
    <div class="d-flex justify-center align-center mt-5 ms-3">
      <v-img :src="require('@/assets/images/book.png')" width="50"></v-img>
      <h2 class="ml-4 text-uppercase text">Book Store</h2>
    </div>
    </v-toolbar>
  <main>
    <v-card
    class="mx-auto"
    max-width="70%"
    style="margin-top: -64px;"
    >
      <router-view/>
    </v-card>

  </main>
  <v-footer app color="brown-darken-1" class="text-center">
    <v-col class="text-center" cols="12">
      <p>
        Todos los derechos reservados <strong> {{new Date().getFullYear() }}</strong>
      </p>
    </v-col>
  </v-footer>
</v-app>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>