<template>
  <div class="nav-drawer">
    <v-btn class="button-menu" fab small flat @click.stop="drawer = true">
      <v-icon medium>menu</v-icon>
    </v-btn>
    <v-navigation-drawer class="blue lighten-3" v-model="drawer" absolute temporary>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="goTo(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "Clock", icon: "alarm" },
        { title: "Counter", icon: "question_answer" },
        { title: "Mobile", icon: "mobile_screen_share" },
        { title: "User", icon: "face" },
        { title: "Calculator", icon: "drag_indicator" },
        { title: "ShuffleCards", icon: "games" },
      ],
      right: null,
      drawer: false
    };
  },
  methods: {
    goTo(item) {
      this.$router.push(item.title);
    }
  }
};
</script>
