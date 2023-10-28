//variable to store h2 tag
let countShow = document.getElementById("countel")
//variable for count
let count = 0
function increment(){
    count++
    countShow.textContent= count //display count
}
//variable to store entries Display
let saveEl = document.getElementById("entriesDisplay")

//function onclick of save button
function save(){
     let finalDis = count + " - "
     saveEl.textContent += finalDis
     count = 0 //resetting count to zero after function runs
     countShow.textContent = 0 //resetting countShow to zero after function runs
}




