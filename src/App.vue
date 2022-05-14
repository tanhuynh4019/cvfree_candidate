<template>
  <v-app id="inspire">
    <v-app-bar app color="#004D40" height="70">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-spacer>
        <v-container>
          <v-row>
            <v-col cols="3">
              <img
                src="https://templates.hibootstrap.com/jecto/default/assets/img/logo-three.png"
              />
            </v-col>
            <v-col cols="9"> Menu </v-col>
          </v-row>
        </v-container>
      </v-spacer>

      <v-responsive max-width="300">
        <div>Login/ Signup <v-btn>Tìm ứng viên</v-btn></div>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
