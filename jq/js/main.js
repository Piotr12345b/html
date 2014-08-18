$(function() {
//Dobra zacznijmy. funkcja ta oczekuje aż zakończy się wczytywanie DOM, zabezpiecza to przed odwołaniem do nieistniejących elementów

    $("#ukryj").click(function(){//Pobrałem sobie element o id ukryj, dodałem funkcję do zdarzenia click tego elementu
        $("#ukryj_box").fadeOut(2000);// a niech znika ! Ogółem pobieranie elementów ma składnie zbliżoną do selektorów CSS - świetne rozwiązanie
    });
    
    $("#pokaz").click(function(){//Pobrałem sobie element o id ukryj, dodałem funkcję do zdarzenia click tego elementu
        $("#ukryj_box").fadeIn(500);// a niech znika ! Ogółem pobieranie elementów ma składnie zbliżoną do selektorów CSS - świetne rozwiązanie
    });
});

$(window).load(function() {
//Ta funkcja natomiast czeka aż cała zawartośc strony zostanie wczytana, ważne gdy zależy nam na operacjach np. z dużymi zdjęciami


    $("#toggle").click(function(){
        $("#toggle_box").toggleClass('alert alert-info');
    });
    
    $("#css").click(function(){
        $("#toggle_box").css({
            'border': '1px solid green',
            'color': 'red'
        });
    });

});

