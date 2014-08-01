var buttons = document.querySelectorAll('.btn');
var display = document.querySelector('#inputSuccess1');

var result=0;//wynik kalkulatora
var tmp=0;//zmianna pomocnicza do działań
var memory=0;//pamięć

function write(cyfra){//odpowiada za modyfikację tmp
    tmp=10*tmp + cyfra;
    display.value = tmp;
}
//--------------------------------Zdarzenia przycisków
buttons[0].onclick = function(){
    //=    
};
buttons[1].onclick = function(){
    write(7);
};
buttons[2].onclick = function(){
    write(8);
};
buttons[3].onclick = function(){
    write(9);
};
buttons[4].onclick = function(){
    //    /
};
buttons[5].onclick = function(){
    write(4);
};
buttons[6].onclick = function(){
    write(5);
};
buttons[7].onclick = function(){
    write(6);
};
buttons[8].onclick = function(){
    // *
};
buttons[9].onclick = function(){
    write(1);
};
buttons[10].onclick = function(){
    write(2);
};
buttons[11].onclick = function(){
    write(3);
};
buttons[12].onclick = function(){
    //-
};
buttons[13].onclick = function(){
    write(0);
};
buttons[14].onclick = function(){
    // ,
};
buttons[15].onclick = function(){
    // +
};

//--------------------------Obsługa klawiatury
function klawisz(e) {
    if (!e) var e = window.event;
    if (e.keyCode) return e.keyCode;           
}
 
document.onkeydown = function(e) {
    
    switch(klawisz(e)) {
    case 48:
    case 96:
        write(0);
        break;
        
    case 49:
    case 97:
        write(1);
        break;
    
    case 50:
    case 98:
        write(2);
        break;
    
    case 51:
    case 99:
        write(3);
        break;
    
    case 52:
    case 100:
        write(4);
        break;
    
    case 53:
    case 101:
        write(5);
        break;
    
    case 54:
    case 102:
        write(6);
        break;
    
    case 55:
    case 103:
        write(7);
        break;
    
    case 56:
    case 104:
        write(8);
        break;
    
    case 57:
    case 105:
        write(9);
        break;
   
    } 
    //alert(klawisz(e));
    e.preventDefault();
}

