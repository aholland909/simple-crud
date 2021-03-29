<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1>Simple CRUD app</h1>
      <v-card style="margin: 10px 0px">
        <v-card-title class="headline"> Create a todo </v-card-title>
        <div v-if="createBoolean" style="padding: 16px">
          <v-text-field
            v-model="newTodoTitle"
            label="Todo"
            placeholder="Title"
          ></v-text-field>
        </div>
        <v-card-actions style="padding: 8px 16px">
          <v-btn color="success" nuxt to="/" @click="openCreateTodo()">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card style="margin: 10px 0px" v-for="t in todos" :key="t.id">
        <v-card-title class="headline">
          <v-checkbox
            v-model="t.completed"
            @click="checkedTodo(t)"
          ></v-checkbox>
          {{ t.title }}
        </v-card-title>
        <v-card-actions style="padding: 8px 16px">
          <v-btn color="primary" nuxt to="/" @click="editTodo(t)"> Edit </v-btn>
          <v-btn color="error" nuxt to="/" @click="deleteTodo(t)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <EditModal
      ref="dlg"
      title="Edit"
      :todoTitle="todoEditMessage"
      :todoID="todoEditID"
    ></EditModal>
  </v-row>
</template>

<script>
import axios from "axios";
import EditModal from "@/components/EditModal";

export default {
  layout: "default",
  data() {
    return {
      newTodoTitle: "",
      isActive: true,
      todos: [],
      createBoolean: false,
      todoEditMessage: "",
      todoEditID: null,
    };
  },
  components: {
    EditModal,
  },
  mounted() {
    this.getAllTodo();
  },
  methods: {
    editTodo(todo, event) {
      this.todoEditMessage = todo.title;
      this.todoEditID = todo.id;
      this.$refs.dlg.open().then((result) => {
        console.log("Result:", result);
      });
    },
    //sort todo list
    sortTodo(data) {
      let sortedData = data;
      sortedData.sort((a, b) => {
        return a.completed - b.completed;
      });

      return sortedData;
    },
    getAllTodo() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
          this.todos = this.sortTodo(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openCreateTodo() {
      if (this.createBoolean == true) {
        //create axios to create a new todo with title
        const config = {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
        const body = { title: this.newTodoTitle, completed: false, userId: 1 };

        axios
          .post("https://jsonplaceholder.typicode.com/todos/", body, config)
          .catch((e) => {
            console.log(e);
          });

        this.newTodoTitle = "";
      }
      this.createBoolean = !this.createBoolean;
    },
    //change to do status
    checkedTodo(todo) {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const body = { completed: !todo.completed };

      axios
        .patch(
          "https://jsonplaceholder.typicode.com/todos/" + todo.id,
          body,
          config
        )
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTodo(todo) {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const body = {};

      axios
        .delete(
          "https://jsonplaceholder.typicode.com/todos/" + todo.id,
          body,
          config
        )
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
