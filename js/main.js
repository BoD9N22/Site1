document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(sidenav);

  var modal = document.querySelectorAll('.modal');
  var instances = M.Modal.init(modal);

  var gallery = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(gallery);
});