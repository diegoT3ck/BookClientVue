<template>
  <v-app>

    <v-toolbar  color="brown-darken-1"       
      app
      extended
      flat
    > 
    <v-btn size="x-large" to="/" variant="plain">
        <template v-slot:prepend>
          <v-img :src="require('@/assets/images/book.png')" width="50">
          </v-img>
        </template>
        <span class="text-bold">
          Book Store
        </span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn size="x-large" to="/perfil" variant="plain">
      Perfil
      <template v-slot:append>
        <v-icon size="x-large">mdi-account</v-icon>
      </template>
    </v-btn>
    </v-toolbar>
  <main>
    <!--  -->
    
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