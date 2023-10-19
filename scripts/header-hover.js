
(function() {
    var objects = document.querySelectorAll('li');

    objects.forEach(function(item) {
        console.log(item);
        item.addEventListener('mouseover', function() {
            item.classList.add('hover');
          });
        
        item.addEventListener('mouseout', function() {
            item.classList.remove('hover');
        });
      });
    
  })();
  