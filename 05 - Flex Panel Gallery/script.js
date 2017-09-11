var panels = document.querySelectorAll('.panel');

panels.forEach(function(e) {
  e.addEventListener('click', function(){
    if (document.querySelector('.open') && !this.classList.contains('open')) {
      document.querySelector('.open').classList.remove('open');
    }
    this.classList.toggle('open');
  })
})
