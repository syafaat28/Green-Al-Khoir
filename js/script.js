const userLoggedIn = false;

function toggleMenu() {
  const menu = document.getElementById("menu-options");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  renderMenuOptions();
}

function renderMenuOptions() {
  const menu = document.getElementById("menu-options");
  menu.innerHTML = userLoggedIn
    ? '<a href="#">Mau Logout Nih?</a>'
    : '<a href="#">Yuk Login!</a>';
}

document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu-options");
  const menuContainer = document.querySelector(".menu");
  if (!menuContainer.contains(event.target)) {
    menu.style.display = "none";
  }
});

// ...kode menu, dsb...

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.getElementById("sliderContainer");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const slide = sliderContainer.querySelector(".slide");
  const slideWidth = slide.offsetWidth + parseInt(getComputedStyle(slide).marginRight);

  // Scroll kanan
  nextBtn.addEventListener("click", () => {
    sliderContainer.scrollBy({
      left: slideWidth,
      behavior: "smooth"
    });
  });

  // Scroll kiri
  prevBtn.addEventListener("click", () => {
    sliderContainer.scrollBy({
      left: -slideWidth,
      behavior: "smooth"
    });
  });

  // Tombol aktif/mati otomatis
  function updateArrowState() {
    const scrollLeft = sliderContainer.scrollLeft;
    const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;

    prevBtn.disabled = scrollLeft <= 0;
    nextBtn.disabled = scrollLeft >= maxScrollLeft - 1;
  }

  sliderContainer.addEventListener("scroll", updateArrowState);
  window.addEventListener("resize", updateArrowState);

  // Inisialisasi
  updateArrowState();
});












const bgSlides = document.querySelectorAll('.bg-slide');
let bgIndex = 0;

setInterval(() => {
  bgSlides.forEach(slide => slide.classList.remove('active'));
  bgIndex = (bgIndex + 1) % bgSlides.length;
  bgSlides[bgIndex].classList.add('active');
}, 3000);

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const moreText = document.getElementById('moreText');
  const readMoreBtn = document.getElementById('readMoreBtn');
  const readLessBtn = document.getElementById('readLessBtn');

  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function () {
      if (moreText) {
        moreText.style.display = 'block';
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline-block';
      }
    });
  }

  if (readLessBtn) {
    readLessBtn.addEventListener('click', function () {
      if (moreText) {
        moreText.style.display = 'none';
        readMoreBtn.style.display = 'inline-block';
        readLessBtn.style.display = 'none';
      }
    });
  }

  const sliderEvent = document.getElementById('sliderEvent');
  const eventPrev = document.getElementById('eventPrev');
  const eventNext = document.getElementById('eventNext');
  let currentEventIndex = 0;

  function updateEventSlider() {
    const slide = sliderEvent.querySelector('.event-slide');
    if (!slide) return;

    const slideWidth = slide.offsetWidth + 20;
    sliderEvent.style.transform = `translateX(${-currentEventIndex * slideWidth}px)`;
  }

  if (eventPrev && eventNext) {
    eventPrev.addEventListener('click', () => {
      currentEventIndex = Math.max(0, currentEventIndex - 1);
      updateEventSlider();
    });

    eventNext.addEventListener('click', () => {
      const totalSlides = sliderEvent.querySelectorAll('.event-slide').length;
      const slide = sliderEvent.querySelector('.event-slide');
      if (!slide) return;

      const visibleSlides = Math.floor(sliderEvent.offsetWidth / slide.offsetWidth);
      currentEventIndex = Math.min(totalSlides - visibleSlides, currentEventIndex + 1);
      updateEventSlider();
    });

    window.addEventListener('resize', updateEventSlider);
    updateEventSlider();
  }
});

/* .header.top a.active */
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.header-top a');
    var current = window.location.pathname.split('/').pop(); // nama file halaman sekarang

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && href !== "#" && href.indexOf(current) !== -1) {
            link.classList.add('active');
        }
    });
});

/* Email */
function openGmail(element) {
    const email = element.dataset.email;
    const subject = encodeURIComponent(element.dataset.subject || '');
    const body = encodeURIComponent(element.dataset.body || '');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(url, '_blank');
}
/* WA */
function openWhatsApp(element) {
    const phone = element.dataset.phone;
    const message = encodeURIComponent(element.dataset.message || '');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

