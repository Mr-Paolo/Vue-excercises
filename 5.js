startMovement() {
    this.timeout = setInterval( () => {
        // this function will be exectued every half second
        console.log("Make tigne move!")

    },500)
}



//To stop the timeout: 
// clearInterval(this.timeout)