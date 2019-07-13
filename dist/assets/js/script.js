function windowheight() {
    // var headerH = $('.navbar-default').height();
    $('.login_wrapper').css({ 'height': $(window).height() });
    $(window).resize(function () {
        $('.login_wrapper').css({ 'height': $(window).height() });
    });
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});


$('.replybtn').click(function(){
    $('.chatboxmodel').show();
    $('.chatboxmodel').css({'width':'300px','height':'400px','visibility':'visible'});
    if($('.chatboxmodel').css('display')=='block'){
           $('html').addClass('chatbox');
    }
      });
      $('.chatboxmodel .titlerow .closesbtn button.close').click(function(){
          $('html').removeClass('chatbox');
    $('#sideMenu').css({'width':'0','height':'0','visibility':'hidden'});
  });
    
  $('.livechaticon').click(function(){
  $(".chatsection").scrollTop(99999999999999999999999);
  });
