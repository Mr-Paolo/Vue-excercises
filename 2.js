Vue.createApp({
    data(){
        return {
            helloMessage: '',
            name: '',
        }
    },
    methods: {
        sayHello() {
            this.helloMessage = 'hello ' + this.name
        }
    },
}).mount(".container");