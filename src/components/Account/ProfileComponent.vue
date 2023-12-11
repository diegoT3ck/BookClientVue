<style scoped>
.avatar-center-heigth {
  position: absolute;
}

.profile-text-name {
  margin-top: 70px;
}

.sutitles {
  margin: 5px;
  padding: 16px;
}
</style>

<template>
  <div>
    <v-container>
      <v-img
        class=""
        height="200px"
        src="https://picsum.photos/2200/400"
        gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%"
      >
      </v-img>
      <v-row justify="center">
        <v-col
          align-self="start"
          class="d-flex justify-center align-center pa-0"
          cols="12"
        >
          <v-avatar
            class="profile avatar-center-heigth avatar-shadow"
            
            color="grey"
            size="200"
          >
            <v-img min-width="800" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
      </v-row>

      <v-list class="profile-text-name mt-10 ma-2 pt-5">
        <v-list-item>
          <v-list-item-title class="text-h6"> Perfil de usuario </v-list-item-title>
          <v-list-subheader>Dev Engineer</v-list-subheader>
        </v-list-item>
      </v-list>

      <v-card-subtitle>
        <b class="ml-2">Sobre mi</b>
        <v-btn v-on:click="saveBio" icon>
          <v-icon small>{{ bioIcon }}</v-icon>
        </v-btn>
      </v-card-subtitle>

      <p v-if="!editBio" class="pl-6 pr-6 pt-0">
        {{ Bio }}
      </p>
      <v-textarea
        v-model="Bio"
        rows="2"
        v-if="editBio"
        label="Editar minha Bio"
        class="pa-6"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-text-field
        class="pa-6"
        v-model="Phone"
        prepend-icon="mdi-whatsapp"
        label="Phone"
        :disabled="!editBio"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Phone: "00 00000-0000",
      editBio: false,
      Bio: "Esta es informacion acerca de la biografia del usuario",
      bioIcon: "mdi-pencil",
      focus: "",
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
      names: [
        "Meeting",
        "Holiday",
        "PTO",
        "Travel",
        "Event",
        "Birthday",
        "Conference",
        "Party",
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    saveBio() {
      this.editBio = !this.editBio;
      this.bioIcon = "mdi-content-save";
      if (!this.editBio) {
        this.bioIcon = "mdi-pencil";
      }
    },
  },
};
</script>
