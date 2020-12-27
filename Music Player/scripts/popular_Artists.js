{
    let popularDisplay=document.querySelector('.popular_artists_display');
    fetch('data.txt').then(res=>res.json()).then(data=>{
        // pic name
        popularDisplay.innerHTML='';
        load(data);
    });
    function load(data){
        for(let i=0;i<data.length;i++){
            if(data[i]['status']==='popular')
            popularDisplay.innerHTML+=`<div class="__pop-artist">
                                            <img src="${data[i]['pic']}">
                                            <p>${data[i]['name']}</p>
                                        </div>`;
        }
    }
}