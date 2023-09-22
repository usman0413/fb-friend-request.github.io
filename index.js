var usman = document.querySelector("h5")

var btn = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var remove = 0


btn.addEventListener("click" , function(){

    if ( remove == 0){
        usman.innerHTML = "Friends"
        usman.style.color = "green"
        btn.innerHTML = "Remove"
        remove = 1;
    } else {
        usman.innerHTML = "currently,You're not friends"
        usman.style.color = "red"
        btn.innerHTML = "Add Friend"
        remove = 0;
    }
})
// removeFriend.addEventListener("click",function(){
//     usman.innerHTML = "currently,You're not friends"
//     usman.style.color = "red"
// })