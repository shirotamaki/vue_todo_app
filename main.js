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
    addItem () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    setItems () {
      if (this.editIndex === -1) {
        this.todos.push(this.text)
      } else {
        this.todos.splice(this.editIndex, 1, this.text)
      }
      this.cancel()
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
    }
  },
  computed: {
    totalNumber: function () {
      return this.todos.length
    },
    changeButtonText () {
      return this.editIndex === -1 ? '追加' : '編集'
    }
  }
})

main.mount('#app')
