// $("span").on("click", function(){

//     $(this).css("color","red");
// });

$("#input1").keypress(function(event){

    if(event.which === 13){
         x = $(this).val();
         $("#input1").val("");
         
         $("#delete1").append("<li id='joe'><span></span> "+ x +"</li>");
    }
 });

 $("#input2").keypress(function(event){

    if(event.which === 13){
         x = $(this).val();
         $("input").val("");
         
         $("#ul2").append("<li id='d1'><span></span> "+ x +"</li>");
    }
 });

 $("#input3").keypress(function(event){

    if(event.which === 13){
         x = $(this).val();
         $("input").val("");
         
         $("#ul3").append("<li id='d1'><span></span> "+ x +"</li>");
    }
 });

 $("#input4").keypress(function(event){

    if(event.which === 13){
         x = $(this).val();
         $("input").val("");
         
         $("#ul4").append("<li id='d1'><span></span> "+ x +"</li>");
    }
 });

 $("#input5").keypress(function(event){

    if(event.which === 13){
         x = $(this).val();
         $("input").val("");
         
         $("#ul5").append("<li id='d1'><span></span> "+ x +"</li>");
    }
 });
 $("li").on("click","#color1", function(){


    $(this).toggleClass("cut"); 
});

// $("ul").on("click","li", function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation()
// });

$("ul").on("click","#joe", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation()
});

