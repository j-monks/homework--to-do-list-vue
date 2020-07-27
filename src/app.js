import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        { name: "Buy shopping" },
        { name: "Clean bathroom" },
        { name: "Car's MOT" }
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem
      });
        this.newItem="";
      },
    }
  });
});



