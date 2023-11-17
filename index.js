// Add your code here
// function submitData(name,email) {
    
    
//     const obj = {
//         method: "POST",
//         Headers: {
//             "Content-Type" : "Application/json",
//             "Accept":"Application/json",

//         },
//         body: JSON.stringify({
//             name:name,
//             email:email,

//         })
//     }
//     fetch("http://localhost:3000/users", obj)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => {
//             alert("eorror happened")
//             console.log(error.mesaage)
//         })


// }

// submitData("aa","bb")

const form = document.querySelector("form")
form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault();
    console.log(document.querySelector("#name").ariaValueMin)
    console.log(form.querySelector("#name").value)
    console.log(event.target.name.value)
    console.log(form.name.value)
    
    console.log()
}

