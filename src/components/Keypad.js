// Code Keypad Component Here

function Keypad (){

    function handleChange(event) {
        return Boolean(event.target.value) === true ? console.log('Entering password...') : console.warn('Shouldnt get here!')
    }

    return (
        <div><input type="password" onChange={handleChange} placeholder="Type something..." ></input></div>
    )
}

export default Keypad;