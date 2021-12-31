function HelloButton() {
    return <>

        <button onClick={sayHello}>Say Hello</button>
        <div id = "print"></div>

    </>
}

function sayHello(){
    console.log("hello in the console wowie")
}

export default HelloButton
