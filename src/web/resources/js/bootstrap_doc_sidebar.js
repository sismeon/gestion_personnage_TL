$('body').scrollspy({
  target: '.bs-docs-sidebar',
  offset: 140
});
$("#sidebar").affix({
  offset: {
    top: 140
  }
});
// add collapse
// $('.navbar-toggle').on('click', function () {
//   if (!$(this).siblings('.navbar-toggle').hasClass('collapsed')) {
//     $(this).siblings('.navbar-toggle').click();
//   }
// });
