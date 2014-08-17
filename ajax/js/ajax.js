
$( "#get" ).click(function() {
    $.get( "test.html", function( data ) {
        $('#get_box').append($(data).filter('.container').html());    
    });    
});

$( "#get2" ).click(function() {
    $.get( "test.php", { imie: "Bożydar", data: "d.m.y" } )
        .done(function( data ) {
            $('#get2_box').append(data);
        });   
    });  
    
$( "#post" ).click(function() {
    $.post( "post.php", { name: "Molibdenowy Mateusz", time: "H : i : s" } )
        .done(function( data ) {
            $('#post_box').append(data);
        });   
    });  
