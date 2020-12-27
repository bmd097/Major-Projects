let itemSongPlay;
{
    itemSongPlay=function(){
        let danceBars=document.querySelectorAll('.dance-div div');
        let controls=document.querySelectorAll('.item-controls');
        controls.forEach((e)=>{
            let check=false;
            e.children[0].addEventListener('click',(likeBtn)=>{
                check=!check;
                likeBtn.preventDefault();
                if(check){
                    e.children[0].innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`;
                    e.children[0].style.color='red';
                }else{
                    e.children[0].innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>`;
                    e.children[0].style.color='rgb(255, 255, 255)';
                }
                likeRun(e,check);
            });
        });
        function likeRun(e,check){
            if(check) console.log('You liked this!');
            else console.log('You disliked this!');
        }
        danceBars.forEach(bar=>{
            let i=1;
            let danceId;
            setInterval(()=>{
                if(i%2===0){
                    bar.style.display='flex';
                    dance();
                }else{
                    clearInterval(danceId);
                    bar.style.display='none';
                    bar.parentElement.children[0].style.display='block';
                }
                i++;
            },5000);
            function dance(){
                bar.parentElement.children[0].style.display='none';
                danceId=setInterval(()=>{
                    if(bar.children[0]!=null)
                    bar.children[0].style.height=`${5+Math.random()*15}px`;
                    if(bar.children[1]!=null)
                    bar.children[1].style.height=`${5+Math.random()*15}px`;
                    if(bar.children[2]!=null)
                    bar.children[2].style.height=`${5+Math.random()*15}px`;
                },180);
            }
            dance();
        });
        
        document.querySelectorAll('.item-song').forEach(song=>{
            song.addEventListener('dblclick',()=>{
                setSongToBox(song.children[0].children[1].children[2].innerText,
                    song.children[0].children[2].children[0],
                    song.children[0].children[1].children[1].src);
            });
        });
    }
}