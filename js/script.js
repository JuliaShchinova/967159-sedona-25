var button = document.querySelector('.search-btn');

var form = document.querySelector('.search-form-container');

form.classList.add('search-form-container--hidden');

button.addEventListener('click', function (e) {
  e.preventDefault();

  form.classList.toggle('search-form-container--hidden');

});
