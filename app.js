const FooApp = {
  data () {
    return {
      todos: []
    }
  },
  watch: {
    todos: {
      handler: function () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  mounted: function() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem: function () {
      this.todos.push(this.newItem)
      this.newItem = ''
    },
    deleteItem: function (index) {
      if (confirm('Are you sure?')) {
        this.todos.splice(index, 1)
      }
      this.newItem = ''
    },
  },
  computed: {
    remaining: function () {
      return this.todos.length
    }
  }
}

Vue.createApp(FooApp).mount('#app')
