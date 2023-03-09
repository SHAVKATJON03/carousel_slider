const next=document.querySelector('#send');
const before=document.querySelector("#before");
const carusel_container=document.querySelector(".carusel_container")
const images=document.querySelectorAll('.carusel_container img')

console.log(images);
let result=0

function changeimg(){
    if(result>images.length-1){
        result=0
    }else if(result<0){
       result= images.length-1
    }
    carusel_container.style.transform=`translateX(${-result*400}px)`;

}


next.addEventListener("click", function change(){
   result++
   changeimg()
});
before.addEventListener("click", function change(){
    result--
    changeimg()
 });

