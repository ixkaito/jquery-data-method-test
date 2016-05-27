$(function() {

  var foo;

  $('.js-data').on('click', function() {
    foo = $('.js-foo').data('foo');
    console.log(foo);
    $('.js-foo').data('foo', foo == 'foo' ? 'bar' : 'foo');
  });

  $('.js-attr').on('click', function() {
    foo = $('.js-foo').attr('data-foo');
    console.log(foo);
    $('.js-foo').attr('data-foo', foo == 'foo' ? 'bar' : 'foo');
  });

});
