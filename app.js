const FooApp = {
  data() {
    return {
      todos: [
    ]
    }
  },
  methods: {
    addItem: function() {
      this.todos.push(this.newItem)
      this.newItem = ''
    },
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
      this.newItem = ''
    }
  }
}

Vue.createApp(FooApp).mount('#app')