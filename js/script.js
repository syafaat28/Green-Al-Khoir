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

(function() {
  const sliderContainer = document.getElementById('sliderContainer');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

// Hitung width slide including margin
function getSlideWidth() {
  const slide = slides[0];
  const style = getComputedStyle(slide);
  const marginRight = parseInt(style.marginRight) || 0;
  const marginLeft = parseInt(style.marginLeft) || 0;
  return slide.offsetWidth + marginLeft + marginRight;
}

// Update posisi slider berdasarkan currentIndex
        function updateSlider() {
            const slideWidth = getSlideWidth();
            const maxIndex = slides.length - visibleSlidesCount();
            if(currentIndex < 0) currentIndex = maxIndex > 0 ? maxIndex : 0;
            if(currentIndex > maxIndex) currentIndex = 0;
            sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
            updateDots();
        }
        // Tentukan berapa banyak slide yang bisa tampil sekaligus sesuai lebar kontainer
        function visibleSlidesCount() {
            const containerWidth = document.querySelector('.slider').offsetWidth;
            const slideWidth = getSlideWidth();
            return Math.floor(containerWidth / slideWidth);
        }

// Buat titik navigasi
        function renderDots() {
            dotsContainer.innerHTML = '';
            for(let i=0; i < slides.length; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.setAttribute('role', 'tab');
                dot.setAttribute('aria-selected', 'false');
                dot.setAttribute('tabindex', '-1');
                dot.setAttribute('aria-label', `Pilih slide produk ${i+1}`);
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
        }

// Perbarui status titik navigasi
        function updateDots() {
            const dots = Array.from(dotsContainer.children);
            dots.forEach(dot => {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
                dot.setAttribute('tabindex', '-1');
            });
            if(dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
                dots[currentIndex].setAttribute('aria-selected', 'true');
                dots[currentIndex].setAttribute('tabindex', '0');
            }
        }

// Navigasi tombol panah
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateSlider();
        });
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateSlider();
        });
        // Responsive update
        window.addEventListener('resize', () => {
            updateSlider();
        });
        // Inisialisasi slider dan titik navigasi
        renderDots();
        updateSlider();
    })();

// Slider background otomatis untuk .bg-slider
const sliderContainer = document.getElementById('sliderContainer');
let slides = sliderContainer.querySelectorAll('.slide');

// Clone semua slide ke ujung untuk seamless loop
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderContainer.appendChild(clone);
});

// Hitung ulang
slides = sliderContainer.querySelectorAll('.slide');

let slideWidth = slides[0].offsetWidth + 16; // width + margin
let currentIndex = 0;

sliderContainer.style.transform = `translateX(0px)`;

// Geser otomatis atau tombol
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    currentIndex++;
    sliderContainer.style.transition = 'transform 0.4s ease-in-out';
    sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    if (currentIndex >= slides.length / 2) {
        setTimeout(() => {
            sliderContainer.style.transition = 'none';
            currentIndex = 0;
            sliderContainer.style.transform = `translateX(0px)`;
        }, 400);
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        sliderContainer.style.transition = 'none';
        currentIndex = slides.length / 2;
        sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }
    currentIndex--;
    setTimeout(() => {
        sliderContainer.style.transition = 'transform 0.4s ease-in-out';
        sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }, 20);
}

let autoSlideInterval = setInterval(nextSlide, 3000); // otomatis geser setiap 3 detik

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Tambahkan resetAutoSlide di tombol
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

const bgSlides = document.querySelectorAll('.bg-slide');
let bgIndex = 0;

setInterval(() => {
    bgSlides.forEach(slide => slide.classList.remove('active'));
    bgIndex = (bgIndex + 1) % bgSlides.length;
    bgSlides[bgIndex].classList.add('active');
}, 3000);

// Tambahkan efek scroll pada header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Tambahkan ini ke script.js, sebaiknya di akhir file

document.addEventListener('DOMContentLoaded', function() {
    const moreText = document.getElementById('moreText');
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readLessBtn = document.getElementById('readLessBtn');

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            if (moreText) {
                moreText.style.display = 'block';
                readMoreBtn.style.display = 'none';
                readLessBtn.style.display = 'inline-block'; // Tampilkan tombol "Baca Lebih Sedikit"
            }
        });
    }

    if (readLessBtn) {
        readLessBtn.addEventListener('click', function() {
            if (moreText) {
                moreText.style.display = 'none';
                readMoreBtn.style.display = 'inline-block'; // Tampilkan tombol "Baca Selengkapnya"
                readLessBtn.style.display = 'none';
            }
        });
    }
});