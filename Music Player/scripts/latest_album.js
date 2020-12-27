{
    fetch('data.txt').then(res=>res.json()).then(data=>{
        load(data);
    });
    let cards=document.querySelectorAll('.latest_album_card');
    function load(data){
        let i=0;
        for(let x=0;x<data.length;x++){
            let d=data[x]['music'];
            for(let y=0;y<d.length;y++){
                if(d[y]['status']==='latest'){
                    cards[i].children[0].src=d[y]['pic'];
                    cards[i].children[1].children[0].innerText=data[x]['name'];
                    cards[i].children[1].children[1].innerText='Pop';
                    i++;
                    break;
                }
            }
        }
    }
    let menuBar=document.querySelector('.latest_albums_menu');
    let menuShow=false;
    document.querySelectorAll('.latest_album_card > p').forEach(menu=>{
        menu.addEventListener('click',(e)=>{
            e.stopPropagation();
            menuShow=!menuShow;
            if(menuShow){
                menuBar.style.display='none';
                menuBar.style.opacity='0';
                menuBar.style.transform='scale(0.9)';
                menuBar.style.display='flex';
                menuBar.style.top=e.clientY-300+'px';
                menuBar.style.left=e.clientX-180+'px';
                setTimeout(()=>{
                    menuBar.style.opacity='1';
                    menuBar.style.transform='scale(1)';
                },100);
            }else{
                menuBar.style.opacity='0';
                menuBar.style.transform='scale(0.9)';
                setTimeout(()=>{
                    menuBar.style.display='none';
                },500);
            }
        });
    });
    document.querySelectorAll('.latest_album_card').forEach(card=>{
        card.addEventListener('click',()=>{
            if(menuShow){
                menuShow=false;
                menuBar.style.opacity='0';
                menuBar.style.transform='scale(0.9)';
                setTimeout(()=>{
                    menuBar.style.display='none';
                },500);
            }
        });
    });
}