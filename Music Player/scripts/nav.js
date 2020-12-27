{
    let input=document.querySelector('.nav-search input');
    document.querySelector('.nav-search p').addEventListener('click',()=>{
        if(input.value!==''){
            console.log('HMMMM!');
        }
    });
    let notification=false;
    let notiDisplay=document.querySelector('.nav-notification');
    document.querySelector('.nav-user>p').addEventListener('click',()=>{
        notification=!notification;
        if(notification){
            notiDisplay.style.display='flex';
            setTimeout(()=>{
                notiDisplay.style.opacity='1';
                notiDisplay.style.transform='scale(1)';
            },100);
            if(notiDisplay.innerHTML==='')  notiDisplay.innerHTML=`<p>You got no notifications.</p>`;
        }else{
            notiDisplay.style.opacity='0';
            notiDisplay.style.transform='scale(0.8)';
            setTimeout(()=>{
                notiDisplay.style.display='none';
            },100);
        }
    });
}