const images=[
{src:"Images/misslikemans.png",title:"The Diamond Nuke (or whatever)"},
{src:"Images/nowwhotfisthis.png",title:"Caine from Temu"},
{src:"Images/scaryman.png",title:"..."},
{src:"Images/wecallhimmoonman.png",title:"Moonman"}
]

let currentIndex=0
let isTransitioning=false

function openLightbox(index){
if(isTransitioning)return
currentIndex=index
const lb=document.getElementById("lightbox")
const img=document.getElementById("lightbox-img")
img.src=images[index].src
document.getElementById("lightbox-title").textContent=images[index].title
lb.classList.add("active")
document.body.style.overflow="hidden"
}

function closeLightbox(){
document.getElementById("lightbox").classList.remove("active")
document.body.style.overflow="auto"
}

function changeImage(newIndex){
if(isTransitioning)return
isTransitioning=true
const img=document.getElementById("lightbox-img")
img.style.opacity="0"

setTimeout(()=>{
currentIndex=newIndex
img.src=images[newIndex].src
document.getElementById("lightbox-title").textContent=images[newIndex].title
img.style.opacity="1"
isTransitioning=false
},150)
}

function nextImage(){
changeImage((currentIndex+1)%images.length)
}

function prevImage(){
changeImage((currentIndex-1+images.length)%images.length)
}

document.addEventListener("keydown",(e)=>{
if(!document.getElementById("lightbox").classList.contains("active"))return
if(e.key==="ArrowRight")nextImage()
if(e.key==="ArrowLeft")prevImage()
if(e.key==="Escape")closeLightbox()
})

/* UGC AUTOMATION */

const ugcItems=[
{id:"138379411419622",name:"Steal-a-Tree the purple",price:"20,000",thumb:"https://tr.rbxcdn.com/180DAY-ef6b6266cb757d151704f34a363c13de/420/420/Hat/Webp/noFilter"},
{id:"124218817401048",name:"Robot Hands Blue",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-9efdf2d55de52b95ed0dea60dce99092/420/420/BackAccessory/Webp/noFilter"},
{id:"75326022850707",name:"Secret Document File",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-74fb4ef9e9b967bd0e956345c4a00559/420/420/BackAccessory/Webp/noFilter"},
{id:"80852236401737",name:"GIANT Bfdi Knife",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-68b27ef428c53b1e8b7adbbe50bb77d2/420/420/BackAccessory/Webp/noFilter"},
{id:"109725622550687",name:"Classic Time Bomb OG Explosive Error Original",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-d982cb22f4f2c31c9d05bc525efffe7c/420/420/BackAccessory/Webp/noFilter"},
{id:"112795956237055",name:"Ro-Box-330 big version",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-d91f78883a44d158399969345eec655f/420/420/BackAccessory/Webp/noFilter"},
{id:"99358359785066",name:"Big Grey Head Red Face",price:"90",thumb:"https://tr.rbxcdn.com/180DAY-f4b03d05c0e41900aaeec3cf21939113/420/420/Hat/Webp/noFilter"},
{id:"91753375534290",name:"Jermbo Silliest Cat",price:"90",thumb:"https://tr.rbxcdn.com/180DAY-27e7c28c848dbc3ff5109903c3d47683/420/420/Hat/Webp/noFilter"},
{id:"125625742015652",name:"Half-Censored Bar Red",price:"90",thumb:"https://tr.rbxcdn.com/180DAY-705491b62dbaa7d1783b3744d2110367/420/420/FaceAccessory/Webp/noFilter"},
{id:"83900054607810",name:"Tv Head ANIMATED 1s and 0s",price:"90",thumb:"https://tr.rbxcdn.com/180DAY-9e9d3988fd57069b0fc0ce61a37d1a02/420/420/Hat/Webp/noFilter"},
{id:"134178529946055",name:"Tiny Secret Document Book Attached To Leg",price:"60",thumb:"https://tr.rbxcdn.com/180DAY-fc4790e65deb501de2c3f305f430419c/420/420/WaistAccessory/Webp/noFilter"},
{id:"102517502872652",name:"What's 9+10 Black",price:"50",thumb:"https://tr.rbxcdn.com/180DAY-e28e765a7e8445f7aad8e3047676f6f5/420/420/ShoulderAccessory/Webp/noFilter"},
{id:"83502768467466",name:"One behind you from BFDI BFDIA BFB TPOT IDFB 👀",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-8ea963f5e95cf29e00a1a6942065c79d/420/420/BackAccessory/Webp/noFilter"},
{id:"126111813844811",name:"The Wireless recovery center TPOT ver 1",price:"135",thumb:"https://tr.rbxcdn.com/180DAY-6e207d03fa7991144d37bd56de97e5cd/420/420/BackAccessory/Webp/noFilter"},
{id:"72986534171483",name:"Book as a Pin",price:"50",thumb:"https://tr.rbxcdn.com/180DAY-5f5f2f841bb1f7c43f194f5a16b2f65d/420/420/FrontAccessory/Webp/noFilter"}
]

function loadUGC(){
const container=document.getElementById('ugc-container')
const sorted=[...ugcItems].sort((a,b)=>{
const priceA=parseInt(a.price.replace(/,/g,''))
const priceB=parseInt(b.price.replace(/,/g,''))
return priceB-priceA
})

sorted.forEach(item=>{
const itemUrl=`https://www.roblox.com/catalog/${item.id}/`

const itemHtml=`
<div class="ugc-item">
<a href="${itemUrl}" target="_blank">
<div class="ugc-preview"><img src="${item.thumb}" alt="${item.name}"></div>
<div class="ugc-info">
<div>
<h3>${item.name}</h3>
<span class="ugc-badge">Accessory</span>
<span class="ugc-price">${item.price} Robux</span>
</div>
</div>
</a>
</div>
`
container.innerHTML+=itemHtml
})
}

window.addEventListener('DOMContentLoaded',loadUGC)
