const updateOne = document.querySelector("#updateBtn1")
const updateTwo = document.querySelector("#updateBtn2")

function usernameCheck() {
    var uname = document.getElementById('usernameCreate').value;
    if(uname == ""){
        return false;    // in failure case
    }        
    return true;    // in success case
}

updateOne.addEventListener("click", _ => {

    var user = document.getElementById("usernamePut")
    var msg = document.getElementById("msgPut")

    fetch("/updateMessage", {
        method: "put",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: user.value,
            message: msg.value
        })
    })

    user.value = "";
    msg.value = "";
})

updateTwo.addEventListener("click", _ => {
    console.log("test")
    fetch("/updateMessage", {
        method: "put",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: "hi",
            message: "bothersome"
        })
    })
})