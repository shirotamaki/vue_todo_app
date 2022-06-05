const FooApp = {
  data () {
    return {
      text: "",
      editIndex: -1,
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
    // addItem: function () {
    //   this.todos.push(this.newItem)
    //   this.newItem = ''
    // },
    // deleteItem: function (index) {
    //   if (confirm('Are you sure?')) {
    //     this.todos.splice(index, 1)
    //   }
    //   this.newItem = ''
    // },
    //
    // 送信ボタンをクリックしたら以下を実行
    setItems () {
      if (this.editIndex === -1) {
        this.todos.push(this.text)
      } else {
        this.todos.splice(this.editIndex, 1, this.text)
      }
      this.cancel()
    },
    cancel() {
      this.text = ""
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
      this.text = this.todos[index]
      this.$refs.editor.focus()
    },
    remove(index) {
      this.todos.splice(index, 1)
    }
  },

  computed: {
    remaining: function () {
      return this.todos.length
    },
    changeButtonText() {
      return this.editIndex === -1 ? "追加" : "編集"
    }
  }
}

Vue.createApp(FooApp).mount('#app')


