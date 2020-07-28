import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      todos: [],
      newTodo: {
        name: "",
        priority: null
      },
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push(this.newTodo);
        this.newTodo = {
          name: "",
          priority: null
        };
      },
    }
  });
});

