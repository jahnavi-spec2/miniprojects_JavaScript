const buttons= document.querySelectorAll('.button');
const body= document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e) {// e is the object of event
        console.log(e);
        console.log(e.target);// isse hume console ye bhi bta deta konsa button target kiye hai
    
     if(e.target.id=== 'grey'){
       body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'white'){
        body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'blue'){
        body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'yellow'){
        body.style.backgroundColor= e.target.id;
    }
});
});