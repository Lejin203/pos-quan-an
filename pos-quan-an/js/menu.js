let menu=Storage.getMenu()

function draw(){

let div=document.getElementById("list")

div.innerHTML=""

menu.forEach((m,i)=>{

let d=document.createElement("div")

d.innerHTML=
m.name+
" "+m.price+
" <button onclick='del("+i+")'>Xóa</button>"

div.appendChild(d)

})

}

function add(){

let name=document.getElementById("name").value

let price=parseInt(document.getElementById("price").value)

menu.push({
name,
price
})

Storage.saveMenu(menu)

draw()

}

function del(i){

menu.splice(i,1)

Storage.saveMenu(menu)

draw()

}

draw()