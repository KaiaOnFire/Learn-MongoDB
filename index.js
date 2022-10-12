document.getElementById("thing1").onclick = function () { console.log("hello"); };


require('dotenv').config()

const test = process.env.test
document.getElementById("thing").onclick = function () { alert(test); };

//mongodb+srv://Heroku:w7rosgQx3nHmF6hX@resumewebsitedetails.hldsi5v.mongodb.net/ResumeWebsiteDetails?retryWrites=true&w=majority