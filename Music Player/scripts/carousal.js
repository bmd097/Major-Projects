{
    let imgUrls=[
        'images/cover1bg.png',
        'images/cover2bg.jpg',
        'images/cover3bg.jpg'
    ];
    let cards=document.querySelectorAll('.__latest_carousal figure');
    let leftCard=cards[0];
    let mainCard=cards[1];
    let rightCard=cards[2];
    leftCard.style.background=`url(${imgUrls[0]}) center no-repeat`;
    leftCard.style.backgroundSize='cover';
    mainCard.style.background=`url(${imgUrls[1]}) center no-repeat`;
    mainCard.style.backgroundSize='cover';
    rightCard.style.background=`url(${imgUrls[2]}) center no-repeat`;
    rightCard.style.backgroundSize='cover';
    cards.forEach(e=>{
        e.addEventListener('click',(e)=>{
            runProcess(e.target);
        });
    });
    function runProcess(e){
        if(e===mainCard) return;
        let temp=mainCard;
        if(e===leftCard){
            leftCard=rightCard;
            mainCard=e;
            rightCard=temp;
            rightCard.className='__right_view'
            mainCard.className='__main_view';
            leftCard.className='__left_view';
        }else{
            rightCard=leftCard;
            mainCard=e;
            leftCard=temp;
            leftCard.className='__left_view';
            mainCard.className='__main_view';
            rightCard.className='__right_view'
        }
    }
}