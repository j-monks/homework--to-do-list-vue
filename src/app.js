import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [],
      newItem: "",
      newItemPriority: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          isPriority: this.newItemPriority
      });
        this.newItem="";
      },

      highPriority: function() {
          this.newItemPriority = true;
      },

      lowPriority: function() {
          this.newItemPriority = false;
      }
    }
  });
});



