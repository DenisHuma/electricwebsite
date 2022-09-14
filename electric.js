
window.onload=function(){

    let menuTable = document.querySelector("#menu-table");
    let menuImage = document.querySelector("#menu-image");
    let x = 0;
    let touched = false;
    menuImage.addEventListener('click',moveto);

    function moveto(){
        let timerid = null;
        
        if(!touched){
            touched=true;
            let x = 100;
            let y = 0;
            timerid = setInterval(menuRight,5);
            menuTable.style.display = 'grid';
            menuTable.style.opacity = 0;
            menuTable.style.left=0;
            menuImage.style.background='white';
            function menuRight(){
                if( x<=0){
                    clearInterval(timerid);
                }
                else{
                    x-=4;
                    y+=0.4;
                    menuTable.style.right = x + 'vw';
                    menuTable.style.opacity = y;
                    menuTable.style.filter = `blur(${x/10}px)`;
                }
            }
        }
        else{
            let x = 0;
            let y = 1;
            touched = false;
            menuImage.style.background='yellow';
            timerid = setInterval(menuLeft,5);
            function menuLeft(){
                if(x>=100){
                    clearInterval(timerid);
                }
                else{
                    x+=1;
                    y-=0.1;
                    menuTable.style.right = x + 'vw';
                    menuTable.style.opacity = y;
                    menuTable.style.filter = `blur(${x/10}px)`;
                }
            }
            menuTable.style.display='none';
        }
        
       
    }

}