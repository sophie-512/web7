const time=document.getElementById('time');
const header-text=document.getElementByClassName("header-text");
const header-text1=document.getElementByClassName("header-text1");

let change=true;

time.addEventListener('click',function(){
    change=!change;
    if(change){
        header-text.style.display='block';
        header-text1.style.display='none';
    }else{
        header-text.style.display='none';
        header-text1.style.display='block';
    }
})

