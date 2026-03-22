const Storage={

getMenu(){
return JSON.parse(localStorage.getItem("menu"))||[

// LẨU
{name:"Lẩu mắm cá tra",price:230000,cat:"Lẩu"},
{name:"Lẩu mắm cá lóc",price:230000,cat:"Lẩu"},
{name:"Lẩu bắp trâu nhúng mẻ",price:200000,cat:"Lẩu"},
{name:"Lẩu vịt nấu chao",price:350000,cat:"Lẩu"},
{name:"Lẩu canh chua cá lóc",price:220000,cat:"Lẩu"},
{name:"Lẩu canh chua cá tra",price:220000,cat:"Lẩu"},
{name:"Lẩu cua đồng",price:380000,cat:"Lẩu"},
{name:"Lẩu gà ớt hiểm",price:400000,cat:"Lẩu"},
{name:"Lẩu gà lá giang",price:400000,cat:"Lẩu"},

// GỎI
{name:"Gỏi tép đu đủ điên điển",price:100000,cat:"Gỏi"},
{name:"Gỏi đu đủ ba khía",price:100000,cat:"Gỏi"},
{name:"Gỏi ốc đắng bắp chuối",price:100000,cat:"Gỏi"},
{name:"Gỏi khô",price:100000,cat:"Gỏi"},

// CHUỘT
{name:"Chuột chiên nước mắm",price:35000,cat:"Chuột"},
{name:"Chuột chiên nước nướng",price:35000,cat:"Chuột"},
{name:"Chuột khìa rau răm",price:40000,cat:"Chuột"},
{name:"Chuột xào rau răm",price:40000,cat:"Chuột"},
{name:"Chuột xào củ kiệu",price:45000,cat:"Chuột"},

// GÀ
{name:"Gà hấp mắm nhĩ + gỏi",price:400000,cat:"Gà"},
{name:"Gà rang muối sả + gỏi",price:400000,cat:"Gà"},

// MÓN CHÍNH
{name:"Cá chiên xù",price:220000,cat:"Món chính"},
{name:"Cá lóc nướng",price:220000,cat:"Món chính"},
{name:"Cá kho tiêu",price:60000,cat:"Món chính"},
{name:"Thịt ba rọi kho tiêu",price:60000,cat:"Món chính"},
{name:"Cá lóc hấp bầu",price:120000,cat:"Món chính"},
{name:"Cua đồng rang me",price:145000,cat:"Món chính"},
{name:"Mắm chưng kèm chuối rau sống",price:55000,cat:"Món chính"},
{name:"Hến xào hành cuốn bánh tráng",price:120000,cat:"Món chính"},
{name:"Ốc hấp sả",price:180000,cat:"Món chính"},
{name:"Ốc hấp tiêu",price:180000,cat:"Món chính"},
{name:"Rau luộc thập cẩm",price:25000,cat:"Món chính"},
{name:"Rau muống xào tỏi",price:35000,cat:"Món chính"},
{name:"Gân bò cà pháo mắm tôm",price:190000,cat:"Món chính"},
{name:"Heo Gia Lai luộc cà pháo mắm tôm",price:250000,cat:"Món chính"},

// CƠM
{name:"Cơm cháy",price:40000,cat:"Cơm"},
{name:"Cơm chiên tỏi",price:40000,cat:"Cơm"},
{name:"Cơm chiên trứng",price:50000,cat:"Cơm"},
{name:"Cơm trắng nhỏ",price:25000,cat:"Cơm"},
{name:"Cơm trắng vừa",price:35000,cat:"Cơm"},
{name:"Cơm trắng lớn",price:45000,cat:"Cơm"},

// THỨC UỐNG
{name:"Heineken bạc thùng",price:250000,cat:"Bia"},
{name:"Heineken bạc lon",price:24000,cat:"Bia"},
{name:"Tiger nâu",price:21000,cat:"Bia"},
{name:"Tiger bạc",price:22000,cat:"Bia"},
{name:"Nước ngọt",price:15000,cat:"Nước"},
{name:"Nước suối",price:10000,cat:"Nước"},
{name:"Khăn lạnh",price:3000,cat:"Khác"},
{name:"Rượu ngâm các loại",price:90000,cat:"Rượu"},
{name:"Kem ống",price:7000,cat:"Tráng miệng"}

]
},

saveMenu(m){
localStorage.setItem("menu",JSON.stringify(m))
},

getTables(){
return JSON.parse(localStorage.getItem("tables"))||{}
},

saveTables(t){
localStorage.setItem("tables",JSON.stringify(t))
},

getKitchen(){
return JSON.parse(localStorage.getItem("kitchen"))||[]
},

saveKitchen(k){
localStorage.setItem("kitchen",JSON.stringify(k))
},

getHistory(){
return JSON.parse(localStorage.getItem("history"))||[]
},

saveHistory(h){
localStorage.setItem("history",JSON.stringify(h))
}

}