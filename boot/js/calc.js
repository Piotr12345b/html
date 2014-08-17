var buttons = document.querySelectorAll('.btn');
var display = document.querySelector('#inputSuccess1');

var result=0;//wynik kalkulatora
var tmp=0;//zmianna pomocnicza do działań
var tmp_old=null;//ostatnia zmienna pomocnicza
var przecinek=0;//liczba cyfr po przecinku
var memory=0;//pamięć
var dzialanie=0;//przechowuje rodzaj działania matematycznego jakie ma zostać wykonane po wciśnięciu '='; 0 - brak działania
var dzialanie_old = null;//przechowuje poprzednie działanie ---------- ma być statyczną zmienną w policz!

function pokaz(){//czyści tmp, wyświetla 0 na wyświetlaczu
    tmp_old=tmp;
    tmp=null;
    przecinek=0;
    display.value = 0;
}

function write(cyfra){//odpowiada za modyfikację tmp
      
    if(!przecinek)tmp=10*tmp + cyfra;
    else {
        for(i=0;i<przecinek;i++) tmp*=10;
        tmp+=cyfra;
        for(i=0;i<przecinek;i++) tmp/=10;
        przecinek++;
    }
    
    if(dzialanie===0)result=tmp;
    display.value = tmp;
}
function policz(){
    if((dzialanie===0)&&(tmp===null))//obsługa wielokrotnego powtarzania tego samego działania np. po wprowadzeniu "8+2==" otrzymamy 12, bo 8+2+2=12
    {
        tmp=tmp_old;
        dzialanie=dzialanie_old;
    }
    
    if(tmp===null)tmp=result;//obsługa mnożeniaprzez samą siebie itp. np. po wprowadzeniu "8+=" wynik będzie 16
     
    switch(dzialanie){//rozróżnianie działań
        case 1:
            result/=tmp;
            break;
        case 2:
            result*=tmp;
            break;
        case 3:
            result-=tmp;
            break;
        case 4:
            result+=tmp;
            break;        
    }
    pokaz();
    display.value = result;
    
    dzialanie_old = dzialanie;
    dzialanie=0;
}

//--------------------------------Zdarzenia przycisków
buttons[0].onclick = function(){
    policz(); 
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
    dzialanie=1;//dzielenie
    pokaz();
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
    dzialanie=2;//mnożenie
    pokaz();
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
    dzialanie=3;//odejmowanie
    pokaz();
};
buttons[13].onclick = function(){
    write(0);
};
buttons[14].onclick = function(){
    przecinek++;
};
buttons[15].onclick = function(){
    dzialanie=4;//dodawanie
    pokaz();
};
buttons[16].onclick = function(){
    tmp=memory;//MR
    display.value = tmp;
};
buttons[17].onclick = function(){
    memory=tmp;//MS
    pokaz();
};
buttons[18].onclick = function(){
    memory+=tmp;//M+
    display.value = tmp;
};
buttons[19].onclick = function(){
    memory-=tmp;//M-
    display.value = tmp;
};
buttons[20].onclick = function(){//cofnij
    //====================================================================TODO
};
buttons[21].onclick = function(){//CE
    tmp=0;
    result=0;
    memory=0;
    dzialanie=0;
    dzialanie_old=0;
    tmp_old=0;
    display.value = 0;
};
buttons[22].onclick = function(){//C
    if(dzialanie===0)result=0;
    tmp=0;
    display.value = 0; 
};
buttons[23].onclick = function(){// +/-
    if(dzialanie===0)
    {
        result*= -1;
        display.value = result;
    }
     else
     {
         tmp*= -1;
         display.value=tmp;
     } 
};
buttons[24].onclick = function(){//sqrt
    
};
buttons[25].onclick = function(){//procent
    
};
buttons[26].onclick = function(){//odwrotnosc
    
};
buttons[27].onclick = function(){//silnia
    
};
buttons[28].onclick = function(){//pierwiasrek stopnia
    
};
buttons[29].onclick = function(){//potega
    
};
buttons[30].onclick = function(){//10 do x
    
};
buttons[31].onclick = function(){//kwadrat
    
};

//--------------------------Obsługa klawiatury
function klawisz(e) {
    if (!e) var e = window.event;
    if (e.keyCode) return e.keyCode;           
}
 
document.onkeydown = function(e) {
    
    switch(klawisz(e)) {
        //--------Cyfry
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
        
        //----------Dzialania podstawowe
    case 111:
        dzialanie=1;//dzielenie
        pokaz();
        break;  
    case 106:
        dzialanie=2;//mnożenie
        pokaz();
        break;
    case 109:
        dzialanie=3;//odejmowanie
        pokaz();
        break;
    case 107:
        dzialanie=4;//dodawanie
        pokaz();
        break;
    case 13:
        policz();//         =
        break;
        
        case 108:
            przecinek++;
            break;
   
    } 
    //alert("Kod wciśniętego klawisza, to: "+klawisz(e));
    e.preventDefault();
}

