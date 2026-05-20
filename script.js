const body = document.querySelector("body");
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'indigo'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'dodgerblue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'hotpink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'indianred'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'midnightblue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id;
        }
    })
});