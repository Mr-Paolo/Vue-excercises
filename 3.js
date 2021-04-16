Vue.createApp({
    data() {
        return {
            yellow: 0,
            blue: 0,
            red: 0,
        }
    },
    methods: {
        yellowClick() {
            this.yellow = this.yellow + 1
            // this.yellow++
        },
        blueClick() {
            this.blue = this.blue + 1
            // this.yellow++
        }
    }

}).mount(".container");