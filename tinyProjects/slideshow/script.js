slideshow = (function(){
    
    const slider = document.querySelector('.slideshow');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');
    let count = 0;
    let items = slider.querySelectorAll('ol li');
    let amount = items.length;
    let current = items[0];
    slider.classList.add('active');

    
    function navigate(direction) {
      current.classList.remove('current');
      count = count + direction;
      if (direction === -1 && 
          count < 0) { 
        count = amount - 1; 
      }
      if (direction === 1 && 
          !items[count]) { 
        count = 0;
      }
      current = items[count];
      current.classList.add('current');
    }
 
    next.addEventListener('click', function(event) {
      navigate(1);
    });
    prev.addEventListener('click', function(event) {
      navigate(-1);
    });
    navigate(0);
  })();