let imgArr = [
    "https://static.dw.com/image/54668044_303.jpg",
    "https://img.fcbayern.com/image/upload/v1601355192/cms/public/images/fcbayern-com/homepage/platzhalter/presseerklaerungen_saison1920.jpg",
    "https://img.fifa.com/image/upload/t_s2/m9qdfmfvqxi2xuehk2x2.jpg",
    "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/17C4F/production/_114595379_whatsubject.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxln4BSU-WCY7Gm_LUZW-CJNH28Pmy8O-xA&usqp=CAU",
    "https://pbs.twimg.com/media/EgJKU46XkAAqGNk.jpg",
];

let button = document.getElementById("changeImg");
let image  = document.getElementById("mainImage");
let span  = document.getElementById("span");


button.onclick = ()=>{
    let randomNum = Math.round(Math.random()*5)


    image.src = imgArr[randomNum]
    span.innerHTML = imgArr[randomNum].length

}
