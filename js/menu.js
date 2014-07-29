function Init(){
    var menu = document.getElementById('menu');
    var pozycje = menu.getElementsByTagName('ul')[0].getElementsByTagName('li');
    
    for(element =0;element < pozycje.length;element++)
    {
        if(pozycje[element].getElementsByTagName('ul')[0] != null){
            pozycje[element].onmouseover = function(){
                this.getElementsByTagName('ul')[0].style.visibility = "visible";          
            };
        }
         if(pozycje[element].getElementsByTagName('ul')[0] != null){
            pozycje[element].onmouseout = function(){
                this.getElementsByTagName('ul')[0].style.visibility = "hidden";
            };
       }
    }
}      

window.onload=function(){Init();};
