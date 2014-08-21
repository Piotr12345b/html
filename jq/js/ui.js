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
});

