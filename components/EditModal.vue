<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      :width="options.width"
      v-bind:style="{ zIndex: options.zIndex }"
    >
      <template>
        <v-card dark>
          <v-card-title v-show="!!title">{{ title }}</v-card-title>
          <!-- <v-card-text v-show="!!todoTitle">{{ todoTitle }}</v-card-text> -->
          <v-text-field
            style="padding: 24px"
            v-model="newTodo"
            label="Todo title"
            :placeholder="newTodo"
          ></v-text-field>
          <v-card-actions>
            <v-btn @click="edit">Edit</v-btn>
            <v-btn @click="cancel">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dlg-wrapper",
  props: ["title", "todoTitle", "todoID"],
  data() {
    return {
      dialog: false,
      options: {
        width: 400,
        zIndex: 200,
      },
      resolve: null,
      reject: null,
      oldTodo: "",
      newTodo: "",
    };
  },
  watch: {
    dialog(visible) {
      if (visible) {
        this.newTodo = this.todoTitle;
        this.oldTodo = this.todoTitle;
      }
    },
  },
  methods: {
    open(options) {
      this.dialog = true;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    edit() {
      //check if todo is not the same as old one
      if (this.oldTodo != this.newTodo) {
        const config = {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
        const body = { title: this.newTodo };

        axios
          .patch(
            "https://jsonplaceholder.typicode.com/todos/" + this.todoID,
            body,
            config
          )
          .catch((e) => {
            console.log(e);
          });
      }
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },

  provide: function () {
    return { edit: this.edit, cancel: this.cancel };
  },
};
</script>