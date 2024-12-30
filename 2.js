var typed = new Typed('#element', {
  strings: ['<i> صحة بشرتك ونضارتها</i> ', 'أولويتنا القصوي.'],
  typeSpeed: 70,
  backSpeed: 10,
  backDelay: 1000,
  cursorChar: "|",
  fadeOut: true,
  loop: true,
  loopCount:5
  });

  // ============Custom JavaScript of mySwiper 

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto', // Auto adjust slides per view based on width
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

     const servicesTitle = document.querySelector('.services h3');

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
  });
  document.addEventListener('DOMContentLoaded', function() {
    // تهيئة السلايدرات
    const sliders = document.querySelectorAll('.before-after');
    sliders.forEach(slider => {
        new BeforeAfterSlider(slider, {
            orientation: 'horizontal',  // يمكنك تغييرها حسب الحاجة
            handleColor: '#e62a2a',
            dividerColor: '#34d1a0',
        });
    });

    // إضافة أنيميشن السكرول
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // نسبة ظهور العنصر في الشاشة لبدء الأنيميشن
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // إيقاف المراقبة بعد ظهور العنصر
            }
        });
    }, observerOptions);

    sliders.forEach(slider => {
        observer.observe(slider);
    });
});


// ===========Custom JavaScript of animation portofolio
document.addEventListener('DOMContentLoaded', function () {
    const servicesTitle = document.querySelector('.services h1');
    const serviceCards = document.querySelectorAll('.before-after');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    // Observer callback function
    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }

    const servicesObserver = new IntersectionObserver(handleIntersect, observerOptions);
    const cardObserver = new IntersectionObserver(handleIntersect, observerOptions);

    if (servicesTitle) {
        servicesObserver.observe(servicesTitle);
    }

    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });
});


// ttttttttttttttttttttttttttttttttttttttttttttttttttt
