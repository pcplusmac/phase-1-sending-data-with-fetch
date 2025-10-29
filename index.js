// Add your code here
const init = () => {
    let form = document.querySelector('form') 
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        let nameVal = e.target.name.value
        let emailVal = e.target.email.value
        addData(nameVal,emailVal)
        form.reset()
    } )

}

function addData(nameInput,emailInput) {
    let formObj = {
        name: nameInput,
        email:emailInput
    }
    
    const dataObj = {
        method: "POST",
        Headers: {
            "Content-Type" : "Application/json",
            "Accept":"Application/json",

        },
        body: JSON.stringify(formObj
            )
    }
    fetch("http://localhost:3000/users", dataObj)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => {
            alert("eorror happened")
            console.log(error.mesaage)
        })


}


document.addEventListener("DOMContentLoaded", init )