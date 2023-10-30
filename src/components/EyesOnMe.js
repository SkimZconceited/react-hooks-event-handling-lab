// Code EyesOnMe Component Here
function EyesOnMe() {

    function handleFocus(event) {
        console.log('Good!')
    }

    function handleBlur(event) {
        console.log('Hey! Eyes on me!')
    }

    return (
        <>
        <input type="submit" value={'Eyes on me'} onFocus={handleFocus} onBlur={handleBlur} ></input>
        </>
    )
}

export default EyesOnMe;