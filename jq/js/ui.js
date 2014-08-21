$(function() {

    $("button.a").click(function(){
        $("div.a").addClass( "alert alert-warning", 1000, "easeOutBounce" );
    });
    
    $("button.b").click(function(){
        $("div.b").toggle("blind");
    });
    
    $("button.c").click(function(){
        $("div.c").toggle("bounce", { times: 3 }, "slow");
    });
    
    $("button.d").click(function(){
        $("div.d").toggle("clip");
    });
    
    $("button.e").click(function(){
        $("div.e").animate({
            "color": "red",
            "backgroundColor": "rgba(30,30,30,0.5)"
        });
    });
    
    $("button.f").click(function(){
        $("div.f").toggle("drop", {direction: "right"}, "slow");
    });
    
    $("button.g").click(function(){
        $("div.g").animate({
            "color": "red",
            "backgroundColor": "rgba(30,30,30,0.5)"
        });
        $("div.g").effect("explode",{pieces:25, easing:"easeInOutBounce"},5000);
    });
    
    $("button.h").click(function(){
        $("div.h").toggle("fold", {horizFirst:true}, 2000);
    });
    
    $("button.i").click(function(){
        $("div.i").effect("highlight",{color:"#a2b3c4"},2000);
    });
    
    $("button.j").click(function(){
        $("div.j").effect("puff",{percent:250},2000);
    });
    
    $("button.k").click(function(){
        $("div.k").css("backgroundColor" , "red");
        $("div.k").effect("pulsate",{times:4});
    });
    
    $("button.l").click(function(){
        $("div.l").effect("shake",{times:20, distance: 30}, 2000);
    });
    
});

