const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function(){
    alert('Sabia que ibas a decir que sí uwu')
    alert('Me haces muy feliz ')
    alert('no discutamos')
});

const nobtn = document.querySelector('#nobtn')
nobtn.addEventListener('mouseover', function(){

 const randomX = parseInt(Math.random()*100);
 const randomY = parseInt(Math.random()*100);


nobtn.style.setProperty('top',randomX+'%');
nobtn.style.setProperty('left',randomY+'%');
nobtn.style.setProperty('transform','traslate(-${randomX}%, -${randomY}%)');
})                    

