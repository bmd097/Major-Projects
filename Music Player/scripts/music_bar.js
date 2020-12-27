let setSongToBox;
{
    let play=false;
    let audioSource=document.querySelector('.play-box audio');
    document.querySelector('.play-main-controls p:nth-of-type(3)').addEventListener('click',function(){
        play=!play;
        if(play) this.innerHTML=`<i class="fa fa-pause" aria-hidden="true"></i>`;
        else this.innerHTML=`<i class="fa fa-play" aria-hidden="true"></i>`;
        playTrack();
    });
    let playId=null;
    function playTrack(){
        if(play) {
            audioSource.play();
            playId=setInterval(e=>{
                if(audioSource.ended) {
                    clearInterval(playId);
                    return;
                }
                audioSource.currentTime;
                document.querySelector('.play-main-play').children[0].innerText=`${parseInt(audioSource.currentTime/60+" ")}:${parseInt(audioSource.currentTime%60+"")}`;
                document.querySelector('.play-main-play').children[1].value=audioSource.currentTime;
            },800);
        }
        else {
            clearInterval(playId);
            audioSource.pause();
        }
    }
    document.querySelector('.play-controls input').addEventListener('input',(e)=>{
        if(e.target.value<1){
            e.target.parentElement.children[1].innerHTML=`<i class="fa fa-volume-off" aria-hidden="true"></i>`;
        }else if(e.target.value<60){
            e.target.parentElement.children[1].innerHTML=`<i class="fa fa-volume-down" aria-hidden="true"></i>`;
        }else{
            e.target.parentElement.children[1].innerHTML=`<i class="fa fa-volume-up" aria-hidden="true"></i>`;
        }
        audioSource.volume=e.target.value/100;
    });
    let musicInfo=document.querySelector('.play-info-text');
    let musicPic=document.querySelector('.play-info img');
    function loadAudio(musicUrl,musicName,musicPicSrc){
        
        audioSource.src=musicUrl;
        musicInfo.children[0].innerText=musicName.innerText;
        musicPic.src=musicPicSrc;
        setTimeout(e=>{
            document.querySelector('.play-main-play').children[0].innerText='0:00';
            document.querySelector('.play-box input').min=0;
            document.querySelector('.play-main-play').children[2].innerText=`${parseInt(audioSource.duration/60+" ")}:${parseInt(audioSource.duration%60+" ")}`;
            document.querySelector('.play-box input').max=audioSource.duration;
        },100);
    }
    setSongToBox=loadAudio;
    document.querySelector('.play-box input').addEventListener('input',(e)=>{
        e.target.parentElement.children[0].innerText=`${parseInt(e.target.value/60+" ")}:${parseInt(e.target.value%60+" ")}`;
        audioSource.currentTime=e.target.value;
    });
    let audioLoop=false;
    document.querySelector('.play-main-controls').children[4].addEventListener('click',function(){
        audioLoop=!audioLoop;
        audioSource.loop=audioLoop;
        if(audioLoop) this.style.color='rgb(0, 174, 255)';
        else this.style.color='rgb(223, 223, 223)';
    }); 
}