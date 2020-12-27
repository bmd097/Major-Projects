{
    let footer=document.querySelector('footer');
    let footerId;
    let sectionLast=document.querySelector('#last-div');
    document.addEventListener('mousemove',()=>{
        footer.style.height='120px';
        footer.style.opacity='1';
        sectionLast.style.marginBottom='120px';
        document.querySelector('aside').style.paddingBottom='120px';
        if(footerId!=null) clearTimeout(footerId);
        footerId=setTimeout(()=>{
            footer.style.height='0px';
            footer.style.opacity='0';
            document.querySelector('aside').style.paddingBottom='0px';
            sectionLast.style.marginBottom='0px';
        },1500);
    });
}
{
    let openAside=document.querySelector('.openAside');
    let aside=document.querySelector('aside');
    openAside.addEventListener('click',function(){
        this.style.display='none';
        if(window.innerWidth<800) aside.style.width='100%';
        else aside.style.width='70%';
        aside.style.opacity='1';
    });
    document.querySelector('aside h5').addEventListener('click',()=>{
        aside.style.width='0%';
        aside.style.opacity='0';
        openAside.style.display='flex';
        document.querySelectorAll('section').forEach(section=>{
            section.style.width='100%';
            section.style.height='400px';
        });
    });
}