/*global Vue*/

const main = Vue.createApp({
  data () {
    return {
      text: '',
      editIndex: -1,
      todos: [],
    }
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    setItems () {
      if (this.editIndex === -1) {
        this.todos.push(this.text)
      } else {
        this.todos.splice(this.editIndex, 1, this.text)
      }
      this.cancel()
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    cancel () {
      this.text = ''
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
      this.text = this.todos[index]
      this.$refs.editor.focus()
    },
    remove (index) {
      if (confirm('Are you sure?')) {
        this.todos.splice(index, 1)
      }
      this.text = ''
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    allClear() {
      if (confirm('Are you sure?')) {
        localStorage.clear()
        this.todos = []
      }
    }
  },
  computed: {
    totalNumber: function () {
      return this.todos.length
    },
    changeButtonText () {
      return this.editIndex === -1 ? '追加' : '編集を実行'
    }
  }
})

main.mount('#app')
