function trocaImg(){
    const telapequena = window.matchMedia("(max-width: 412px)");
    if(telapequena.matches){
        document.querySelector('.banner').style.display = 'none';
        console.log('igor');
    }
    else{
        // document.querySelector('.banner[src="banner-1.jpg"]').style.display = '';
        // document.querySelector('.banner[src="banner-2.jpg"]').style.display = '';
    }
}
window.addEventListener("resize", trocaImg());
// console.log('igor');