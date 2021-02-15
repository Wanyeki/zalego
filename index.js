clicked=false;
menu=document.querySelectorAll('.menu-control');
if(menu!=null){
menu.forEach(element=>{
element.addEventListener('click',e=>{
    if(clicked){
        document.querySelector('.nav-right').style.display='none';
        document.querySelector('.menu').style.display='block';
        document.querySelector('.cancel').style.display='none';
        document.querySelector('.nav').style.boxShadow=null;
        clicked=false
    }else{
        document.querySelector('.nav-right').style.display='block';
        document.querySelector('.navbar').style.background='#fff'
        document.querySelector('.menu').style.display='none';
        document.querySelector('.cancel').style.display='block';
        clicked=true;
        document.querySelector('.nav').style.boxShadow='1px 1px 8px #a0afbe';  
    }
        
    });

});}

document.querySelectorAll('.more-port').forEach(btn=>{
    btn.addEventListener('click',e=>{
        let target=btn.getAttribute('id')
        document.querySelector('.'+target).style.display='block'
    })
})

document.querySelectorAll('.close-port').forEach(btn=>{
    btn.addEventListener('click',e=>{
        document.querySelectorAll('.portfolio-more').forEach(tab=>{
            tab.style.display='none'
        })
    })
})

document.querySelector('body').addEventListener('wheel',e=>{
    let sc=window.scrollY
//   if(sc>50){
//     document.querySelector('.navbar').style.background='rgba(255,255,255,0.6)'
//     document.querySelector('.navbar').style.backdropFilter='p'
//     // document.querySelector('.navbar').style.boxShadow='1px 1px 10px #fff'
//   }else if(sc<50){
//     document.querySelector('.navbar').style.background='transparent'
//   }
})

window._ = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    itemWidth: 150,
    draggable: true,
    scrollLock: false,
    dots: '#dots',
    rewind: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 'auto',
                itemWidth: 300,
                slidesToShow: 'auto',
                exactWidth: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: false,
                arrows: false,
                scrollLock: true
            }
        }
    ]
});