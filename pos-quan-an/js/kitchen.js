function draw(){

let orders=Storage.getKitchen()

let div=document.getElementById("orders")

div.innerHTML=""

orders.forEach((o,i)=>{

let d=document.createElement("div")

let html="<h3>Bàn "+o.table+"</h3>"

o.foods.forEach(f=>{
html+=f.name+"<br>"
})

html+="<button onclick='done("+i+")'>Xong</button>"

d.innerHTML=html

div.appendChild(d)

})

}

function done(i){

let orders=Storage.getKitchen()

orders.splice(i,1)

Storage.saveKitchen(orders)

draw()

}

draw()

setInterval(draw,2000)