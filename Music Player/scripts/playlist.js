{
    let playlistDisplay=document.querySelector('.playlist-display');
    let i=0;
    function fetcheri(){
        fetch('data.txt').then(res=>res.json()).then(data=>{
            playlistDisplay.innerHTML='';
            for(let j=0;j<data.length;j++){
                playlistDisplay.innerHTML+=
                `<div class="item-song">
                    <div>
                        <div class="dance-div">
                            <p>${i++}</p>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="item-img"> 
                            <p><i class="fa fa-play" aria-hidden="true"></i></p>
                            <img src="${data[j]['music'][0]['pic']}">
                            <h1>${data[j]['music'][0]['url']}</h1>
                        </div>
                        <div class="item-info">
                            <h2>${data[j]['name']}</h2>
                            <p>POP</p>
                        </div>
                    </div>
                    <div class="item-controls">
                        <p><i class="fa fa-heart-o" aria-hidden="true"></i></p>
                        <p style="display: none;"><i class="fa fa-plus" aria-hidden="true"></i></p>
                    </div>
                </div>`;
                
            }
            setTimeout(()=>{
                itemSongPlay();
            },1000);
        });
    }
    fetcheri();
}