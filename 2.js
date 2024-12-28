document.addEventListener('DOMContentLoaded', function () {
    const servicesTitle = document.querySelector('.services h1');
    const serviceCards = document.querySelectorAll('.servcard');
  
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Percentage of the element that must be visible
      };

  //  for h1 animation
  const servicesObserver = new IntersectionObserver(function(entries){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                servicesTitle.classList.add('show');
                servicesObserver.unobserve(servicesTitle); // Stop observing after animation
                
            }
        })
    },observerOptions);
    servicesObserver.observe(servicesTitle);
    //  end h1 animation
  
    // for card animation
    const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        cardObserver.unobserve(entry.target); // Stop observing after animation
      }
    });
    },observerOptions);
  
    serviceCards.forEach(card => {
      cardObserver.observe(card);
    });
    // end card animation
    
  });


  document.addEventListener("DOMContentLoaded", function() {
    // عند تحميل الصفحة بالكامل
    window.onload = function() {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        
        // إخفاء اللودر وعرض المحتوى
        loader.style.display = "none";
        content.style.display = "block";
    };
});
