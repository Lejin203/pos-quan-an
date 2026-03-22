function draw(){

let history=Storage.getHistory()

let div=document.getElementById("history")

div.innerHTML=""

history.forEach(h=>{

let d=document.createElement("div")

d.innerHTML=
"Bàn "+h.table+
" - "+h.total+
" - "+h.time

div.appendChild(d)

})

}

draw()