jQuery(document).ready(function($) {

  $('#exerciseBtn').click(function() {
    $.post(
      'methods/foo',
      { foo: 'FOO', bar: 'BAR' },
      function (data) {
        console.log(data);
      },
      'json'
    );
  });
});