const updateOne = document.querySelector("#updateBtn1")
const updateTwo = document.querySelector("#updateBtn2")

updateOne.addEventListener("click", _ => {
    fetch("/updateMessage", {
        method: "put",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: document.getElementById("usernamePut").value,
            message: document.getElementById("messagePut").value
        })
    })
})

updateTwo.addEventListener("click", _ => {
    fetch("/updateMessage", {
        method: "put",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: "hi",
            message: "bothersome"
        })
    })
})