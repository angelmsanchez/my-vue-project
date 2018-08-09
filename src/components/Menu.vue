<template>
    <v-navigation-drawer width="250" class="blue-grey darken-4" dark clipped persistent fixed app>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Menu
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-divider></v-divider>

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
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "Clock", icon: "question_answer" },
        { title: "Counter", icon: "question_answer" },
        { title: "Mobile", icon: "question_answer" },
        { title: "User", icon: "question_answer" }
      ],
      right: null
    };
  },
  methods: {
    goTo(item) {
      console.log("goTo ", item);
      this.$router.push(item.title);
    }
  }
};
</script>
