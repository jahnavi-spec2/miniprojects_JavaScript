const clock= document.getElementById('clock');
setInterval(function (){
    let date= new Date();
    clock.innerHTML= date.toLocaleTimeString();
},100);
// so basically ye set interval ek aisa event listener type ka fnvc hai jo ki 100 ms tk chlte rahega...ab chahe timem tko 
// console kro to console pe run hota rahega ya fir clock button ke ander update dikhe