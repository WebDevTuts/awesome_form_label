$(function(){

  $('.awesome-form .input-group input').focusout(function(){

    var text_val = $(this).val();

    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }

  });

});