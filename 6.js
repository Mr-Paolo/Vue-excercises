Vue.createApp({
    data() {
        return {
            todos: [
                "Do the 6th exercices",
                "Get ready for the 7th",
            ],
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo)
        },
        markTodoAsDone(todo) {
            console.log('You want to complete the todo - '+ todo)
        }
    }
}).mount("#app");