// $(document).ready(function(){
//   $('[data-modal=consultation]').on('click', function() {
//      $('.overlay, #consultation').fadeIn('slow');
//   });
//   $(".modal__close").on('click', function() {
//       $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
//   });

//    $('.button_mini').each(function(i) {
//        $(this).on('click', function() {
//           $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
//           $('.overlay, #order').fadeIn('slow');
//        })
//    });

//    function validateForms(form) {
//       $(form).validate({
//           rules: {
//               name: "required",
//               phone: "required",
//               email: {
//                  required: true,
//                  email:true
//               }
//           },
//           messages: {
//              name: "Пожалуйста, введите свое имя",
//              phone: "Пожалуйста, введите свой телефон",
//              email: {
//                required: "Пожалуйста, введите свою почту",
//                email: "Неправельной введен адрес почты,"
//              }
//            }
//       });
//    }
   
//    validateForms ('#consultation-form');
//    validateForms ('#consultation form');
//    validateForms ('#order form');

//    $('input[name=phone]').mask("+7(999) 999-99-99");
// });



$(document).ready(function(){
  // function validateForms('#myForm') {
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
        // max: jQuery.validator.format("Длина имени должна быть не больше 10-ти символов"),
        // min: jQuery.validator.format("Длина имени должна быть больше 2-ти символов")
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

  // function  countCharPass(val){
  //   var leng = val.value.length;
  //   if(leng >= 8){
  //   $('.password-input').addClass('done');
  //   console.log('length done');
  //   }else{
  //   $('.password-input').removeClass('done');
  //   console.log('length error');
  //   }
    
  //   if($('input[name="pass"]').val().trim() === $('input[name="pass2"]').val().trim() ){
  //   $('.password-input2').addClass('done');
  //   console.log('match done');
  //   } else{
  //   $('.password-input2').removeClass('done');
  //   console.log('match error');
  //   }

  //   }
    
  // form.addEventListener('submit', function(){
  //   let p1 = form.querySelector('[name=pass2]') // поля в текущей форме, а не из других
  //   let p2 = form.querySelector('[name=pass]')
  //   if (p1.value !== p2.value) {
  //     // ...
  //   }
  // }); 

  $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});

  $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	// $('.popup-fade').click(function(e) {
	// 	if ($(e.target).closest('.popup').length == 0) {
	// 		$(this).fadeOut();					
	// 	}
  // });
})
  
//     // $('[data-modal=personal]').on('click', function() {
//     //     $('#personal').fadeIn('slow');
//     //  });
//     //  $(".modal__close").on('click', function() {
//     //      $('#personal').fadeOut('slow');
//     //  });
 
//     // //   $('.button').each(function(i) {
//     // //       $(this).on('click', function() {
//     // //          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
//     // //          $('.overlay, #order').fadeIn('slow');
//     // //       })
//     // //   });
 
//     //   function validateForms(form) {
//     //      $(form).validate({
//     //          rules: {
//     //              name: "required",
//     //              phone: "required",
//     //              email: {
//     //                 required: true,
//     //                 email:true
//     //              }
//     //          },
//     //          messages: {
//     //             name: "Пожалуйста, введите свое имя",
//     //             phone: "Пожалуйста, введите свой телефон",
//     //             email: {
//     //               required: "Пожалуйста, введите свою почту",
//     //               email: "Неправельной введен адрес почты,"
//     //             }
//     //           }
//     //      });
//     //   }
      
//     //   validateForms ('#personal');
//     //   validateForms ('#consultation form');
//     //   validateForms ('#order form');
 
//     //   $('input[name=phone]').mask("+7(999) 999-99-99");       
//   }
// });