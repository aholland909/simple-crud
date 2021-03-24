<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1>Simple CRUD app</h1>
      <v-card style="margin: 10px 0px">
        <v-card-title class="headline"> Create a todo </v-card-title>
        <v-card-actions style="padding: 8px 16px">
          <v-btn color="success" nuxt to="/"> Create </v-btn>
        </v-card-actions>
      </v-card>
      <v-card style="margin: 10px 0px" v-for="t in todos" :key="t.id">
        <v-card-title class="headline">
          <v-checkbox v-model="t.completed"></v-checkbox>
          {{ t.title }}
        </v-card-title>
        <v-card-actions style="padding: 8px 16px">
          <v-btn color="primary" nuxt to="/"> Edit </v-btn>
          <v-btn color="error" nuxt to="/"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  layout: "default",
  data() {
    return {
      isActive: true,
      todos: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        this.todos = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
