Vue.createApp({
    data(){
        return {
            firstNumber: 0,
            secondNumber: 0,
            sum:0,
        }
    },
    methods: {
        setFirstNumber(n) {
            this.firstNumber = n
        },
        setSecondNumber(n) {
            this.secondNumber = n
        },
        calculateSum() {
            this.sum = this.firstNumber + this.secondNumber
        }
    },
}).mount(".container");