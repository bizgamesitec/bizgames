$(function() {

  /* ===== FALTAM ===== */
  if (typeof firstDate != 'undefined') {
    var s = document.getElementsByClassName('timer');
    var oneDay = 24 * 60 * 60 * 1000;
    var days = (firstDate.getTime() - secondDate.getTime()) / (oneDay);
    var hrs = (days - Math.floor(days)) * 24;
    var min = (hrs - Math.floor(hrs)) * 60;
    $('#day').html(Math.floor(days));
    $('#hrs').html(Math.floor(hrs));
    $('#min').html(Math.floor(min));
    $('#sec').html(Math.floor((min - Math.floor(min)) * 60));
    var i = setInterval(function() {n()}, 1000)
    function f(d, x) {s[d].innerHTML = x; s[d - 1].innerHTML = Number(s[d - 1].innerHTML) - 1;}
    function n() {s[3].innerHTML = Number(s[3].innerHTML) - 1;
    if ($('#sec').html() == -1) {f(3, 59)
    if ($('#min').html() == -1) {f(2, 59)
    if ($('#hrs').html() == -1) {f(1, 23)
    }}}if($('#day').html() <= -1) {clearInterval(i);document.getElementsByTagName('div')[0].innerHTML='<h2>The event is over.</h2>'}}
  }

  /* ===== Rellax ===== */
  var rellax = new Rellax('.rellax', {
    // center: true
  });

  // MENU
  $('li.home a').prepend('<i class="fa fa-fa" aria-hidden="true"></i> ');
  $('li.sobre a').prepend('<i class="fa fa-resistance" aria-hidden="true"></i> ');
  $('li.jogos a').prepend('<i class="fa fa-gamepad" aria-hidden="true"></i> ');
  $('li.rodape a').prepend('<i class="fa fa-reddit-alien" aria-hidden="true"></i> ');

  $('#telefone').mask('(00) 0000-00000');

  $('.owl-carousel').owlCarousel({
    autoWidth: false,
    autoHeight: false,
    loop:true,
    margin:10,
    autoplay:true,
    nav: false,
    responsive: {
       0: {
         items: 1
       },
       600: {
         items: 2
       },
       1000: {
         items: 4
       }
    }
  });

  // $('.clientes').owlCarousel({
  //   autoWidth: false,
  //   height: 100,
  //   autoplay:true,
  //   responsive: {
  //       0: {
  //         items: 1,
  //         nav: false
  //       },
  //       600: {
  //         items: 2,
  //         nav: true
  //       },
  //       1000: {
  //         items: 3,
  //         nav: true
  //       }
  //   },
  //   loop:true,
  //   margin:10,
  //   navText: ['<i class="large material-icons">keyboard_arrow_left</i>','<i class="large material-icons">keyboard_arrow_right</i>']
  // });

  // $('#fcontato').submit(function (e) {
  //   e.preventDefault();
  //
  //   if (!valida_form()) return;
  //
  //   var btnText = $('#fcontato :submit').text();
  //   $.ajax({
  //     beforeSend: function() {
  //       $('#fcontato :submit').toggleClass('disabled');
  //       $('#fcontato :submit').text('Enviando...');
  //     },
  //     type: 'POST',
  //     url: 'mail.php',
  //     data: $('#fcontato').serialize(),
  //     success: function () {
  //       // Materialize.toast('Contato enviado. Aguarde nosso representante entrar em contato!', 5000, 'rounded');
  //     }
  //   }).done(function(data) {
  //     $('#fcontato :submit').toggleClass('disabled');
  //     $('#fcontato :submit').text(btnText);
  //
  //     console.log(data);
  //     var retorno = JSON.parse(data.toString());
  //     Materialize.toast(retorno.title, 5000, retorno.class + ' rounded');
  //
  //     if (retorno.class == 'green')
  //       $('#fcontato').trigger("reset");
  //   });
  // });

  $('a[href^="#"]').on('click', function(event) {
      // alert('ok');
      var target = $(this.getAttribute('href'));

      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top-50
          }, 1000);
      }

  });

});

var valida_form = function valida_form() {
    if($('#nome').val() == "") {
        Materialize.toast('Preencha o nome.', 5000, 'rounded');
        $('#nome').focus();
        return false;
    } else if($('#telefone').val() == "") {
        Materialize.toast('Preencha o telefone.', 5000, 'rounded');
        $('#telefone').focus();
        return false;
    } else if($('#email').val() == "") {
        Materialize.toast('Preencha o e-mail.', 5000, 'rounded');
        $('#email').focus();
        return false;
    } else if( document.getElementById("email").value.indexOf('@')==-1 || document.getElementById("email").value.indexOf('.')==-1 ) {
        Materialize.toast('E-mail incorreto.', 5000, 'rounded');
        $('#email').focus();
        return false;
    } else {
        return true;
    }
}
