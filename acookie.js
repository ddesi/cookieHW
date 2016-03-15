$(document).ready(function() {

// INCREASE VALUE OF COOKIES, DECREASE, RESET

  $(function(){

    $("#add_choco").click(function(){
      $(":text[name='totalChoco']").val( Number($(":text[name='totalChoco']").val()) + 1 );
    });

    $("#clear_choco").on("click", function(){
        $(":text[name='totalChoco']").val("");
    });

  });

  $(function(){

    $("#add_lemon").click(function(){
      $(":text[name='totalLemon']").val( Number($(":text[name='totalLemon']").val()) + 1 );
    });

    $("#clear_lemon").on("click", function(){
        $(":text[name='totalLemon']").val("");
    });

  });

  $(function(){

    $("#add_sugar").click(function(){
      $(":text[name='totalSugar']").val( Number($(":text[name='totalSugar']").val()) + 1 );
    });

    $("#clear_sugar").on("click", function(){
        $(":text[name='totalSugar']").val("");
    });

  });

  

    
});

