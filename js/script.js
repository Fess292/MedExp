$(document).ready(function(){
  $("#myForm").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 2,
        maxlength: 10
      },
      phone: {
        required: true,
        // minlength: 11
      },
      pass: {
        required: true,
        // minlength: 5
      },
      pass2: {
        required: true,
        equalTo : "#password-input"
        // minlength: 5
      }
    },
    messages: {
      email: {
        required: "Поле email обязательно для заполнения",
        email: "Введите корректный адрес почты"
        
      },
      name: {
        required: "Поле имя обязательно для заполнения",
        minlength:jQuery.validator.format("Длина имени должна быть больше 2-ти символов"),
        maxlength:jQuery.validator.format("Длина имени должна быть не больше 10-ти символов"),
      },
      phone: "Пожалуйста, введите свой телефон",
      pass: "Введите свой пароль",
      pass2: "Повторите пароль",
    },
     submitHandler: function() {
       alert("Спасибо за ваше обращение");
     }
  
});
  $('input[name=phone]').mask("+7(999) 999-99-99");

  $('body').on('click', '.password-checkbox', function(){
    if ($(this).is(':checked')){
      $('#password-input, #password-input2').attr('type', 'text');
    } else {
      $('#password-input, #password-input2').attr('type', 'password');
    }
  }); 

  $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});

  $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        

  $('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
  }); 
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
})
  