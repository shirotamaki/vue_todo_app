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
    }
  }
}

Vue.createApp(FooApp).mount('#app')