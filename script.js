// https://blog.cinlogic.com/2016/03/27/automatically-collapsing-bootstrap-navbar-after-navigation-in-a-single-page-application/

$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
  $(this).parents('.navbar-collapse').collapse('hide');
});