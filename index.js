// Add your code here
const data = {
    name: "Steve",
    email: "steve@steve.com"
}

const config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(data)
}

function submitData(){
return fetch('http://localhost:3000/users', config)
    .then(res => res.json())
    .then(obj => document.body.textContent = obj.id)
    .catch(error => document.body.textContent = error.message)
}