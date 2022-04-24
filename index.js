let commodore=document.getElementById("commode")
const restroom=document.getElementById("restroom")
const butt=document.getElementById("butt")
let butc=0
let restrc=0
let comodc=0
let total=0
let newarr=[]
let xy=document.getElementById("amount")
xy.textContent=total
commodore.addEventListener("click", function(){
    if(comodc===0){
        newarr.push("Commode")
//        console.log(newarr)
        comodc=1
        document.getElementById("com").innerHTML+=` Wash Commode
        `    
        document.getElementById("10").innerHTML+=`<span id="dolla">$</span>10`
        total+=10
        xy.textContent=total
    
    }
        

    })
restroom.addEventListener("click", function(){
    
    if (restrc===0){
        console.log("clicked")
        newarr.push("Restroom")
//        console.log(newarr)
        restrc=1
        document.getElementById("res").innerHTML+=` Wash Restroom
        `
        document.getElementById("20").innerHTML+=`<span id="dolla">$</span>20`
        total+=20
        xy.textContent=total

    }
})
butt.addEventListener("click", function(){
    if (butc===0){
        newarr.push("Butt")
//        console.log(newarr)
        butc=1
        document.getElementById("but").innerHTML+=` Wash Butt
        `

        document.getElementById("50").innerHTML+=`<span id="dolla">$</span>50`
        total+=50
        xy.textContent=total
    }
})

function notefunc(){
    document.getElementById("note").textContent="We accept cash, credit card and ass"
}

function reset(){
    window.alert("Ye toh very nice ho gaya ye toh meri pasand ka ho gaya")

    document.getElementById("but").innerHTML=` `

    document.getElementById("50").innerHTML=``
    
    document.getElementById("com").innerHTML=``
    document.getElementById("10").innerHTML=``
    document.getElementById("res").innerHTML=``
    document.getElementById("20").innerHTML=``
    xy.textContent=0
    document.getElementById("note").textContent=""
    butc=0
    restrc=0
    comodc=0
    total=0
    newarr=[]
}