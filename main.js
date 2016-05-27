$(function() {

  var foo;

  $('.js-data').on('click', function() {
    foo = $('.js-foo').data('foo');
    $('.js-foo').data('foo', foo == 'foo' ? 'bar' : 'foo');
    console.log($('.js-foo').data('foo'));
  });

  $('.js-attr').on('click', function() {
    foo = $('.js-foo').attr('data-foo');
    $('.js-foo').attr('data-foo', foo == 'foo' ? 'bar' : 'foo');
    console.log($('.js-foo').attr('data-foo'));
  });

});
