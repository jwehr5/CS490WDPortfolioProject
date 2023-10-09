
//Show the homepage by deafult.
$('#home-page').show();
$('#resume-page').hide();
$('#education-page').hide();


$('#home-button').click(function(){
    

    $('#home-page').slideDown(500);
    $('#resume-page').slideUp(500);
    $('#education-page').slideUp(500);

})

$('#resume-button').click(function(){

    $('#resume-page').slideDown(500);
    $('#home-page').slideUp(500);
    $('#education-page').slideUp(500);
    
})

$('#education-button').click(function(){

    $('#education-page').slideDown(500);
    $('#home-page').slideUp(500);
    $('#resume-page').slideUp(500);
    
})

