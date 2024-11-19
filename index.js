const content=document.querySelector("#content")

window.addEventListener("load", ()=>{
    getUsers();
})

function getUsers(){
    
    let html=""

    fetch("https://api.sampleapis.com/coffee/hot", {mode: "cors"})
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((data)=>{
        data.foreEach((element)=>{
            html += `<li> ${element.title} ${element.description} </li>`
        })
        content.innerHTML = html
    })
    .catch((error)=>{
        console.log(error)
    })

}