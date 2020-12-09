console.log("RATO AR AKETEBS ById-s?")


let element = document.getElementById("textBox")
let element2 = [...document.getElementsByTagName("strong")]

let before = [element2[0].style.backgroundColor,element2[0].style.fontSize]



element.onmouseover=()=>{
    element2.forEach(item=>{
        item.style.backgroundColor = "green"
        item.style.fontSize = "30px"
    })
}
element.onmouseout=()=>{
    element2.forEach(item=>{
        item.style.backgroundColor = before[0]
        item.style.fontSize = before[1]
    })
}