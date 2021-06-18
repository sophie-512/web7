var time=document.getElementById('time');

let change=true;

time.addEventListener('click', function(){
    change=!change;
    if(change){
        document.getElementById("header-text").style.display = "block";
        document.getElementById("header-text1").style.display = "none";
    }else{
        document.getElementById("header-text").style.display = "none";
        document.getElementById("header-text1").style.display = "block";
    }
})

