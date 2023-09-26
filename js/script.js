// Mendapatkan elemen navbar
const navbarNav = document.querySelector(".navbar-nav");

// Menambahkan event listener untuk klik pada hamburger menu
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  // Mengubah kelas navbar saat hamburger menu diklik
  navbarNav.classList.toggle("active");

  // Jika shopping cart sedang aktif, nonaktifkan
  if (cartNav.classList.contains("active")) {
    cartNav.classList.remove("active");
  }
};

// shopping cart button
const cartButton = document.getElementById("shopping-cart-button");
const cartNav = document.querySelector(".shopping-cart");

cartButton.onclick = (e) => {
  e.preventDefault();
  cartNav.classList.toggle("active");

  // Jika hamburger menu sedang aktif, nonaktifkan
  if (navbarNav.classList.contains("active")) {
    navbarNav.classList.remove("active");
  }
};

// Mendapatkan elemen hamburger menu dan search icon
const hamburger = document.querySelector("#hamburger-menu");
const searchIcon = document.getElementById("search-icon");

// Mendapatkan elemen form pencarian
const searchForm = document.querySelector(".search");

// Mendapatkan elemen lainnya yang diperlukan
const navbarExtra = document.querySelector(".navbar-extra");
const navbar = document.querySelector(".navbar");
const logo = document.getElementById("navbar-logo");
const searchInput = document.getElementById("search-input");

// Menambahkan event listener untuk klik di mana saja di dokumen
document.addEventListener("click", function (event) {
  // Jika klik bukan pada hamburger atau navbar, hapus kelas 'active' dari navbar
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }

  if (!cartButton.contains(event.target) && !cartNav.contains(event.target)) {
    cartNav.classList.remove("active");
  }

  // Jika klik bukan pada search icon atau search form, sembunyikan input pencarian
  if (!searchIcon.contains(event.target) && !searchForm.contains(event.target)) {
    searchInput.classList.remove("visible");
    searchInput.classList.add("hidden");
  }
});

// Menambahkan event listener untuk klik pada search icon
searchIcon.addEventListener("click", function (e) {
  // Mencegah aksi default dari event
  e.preventDefault();

  // Mendapatkan lebar jendela
  const windowWidth = window.innerWidth;

  // Jika lebar jendela kurang dari atau sama dengan 450 piksel, lakukan penyesuaian tampilan
  if (windowWidth <= 450) {
    const searchInputIsHidden = searchInput.classList.contains("hidden");
    const logoIsHidden = logo.style.display === "none";

    // Jika input bar tersembunyi dan logo terlihat, tampilkan input bar dan sembunyikan logo
    if (searchInputIsHidden && !logoIsHidden) {
      searchInput.classList.toggle("hidden");
      searchInput.classList.toggle("visible");
      searchInput.focus();

      logo.style.display = "none";

      navbar.style.display = "flex";
      navbar.style.justifyContent = "center";
    } else {
      // Jika input bar terlihat dan logo tersembunyi, sembunyikan input bar dan tampilkan logo
      searchInput.classList.toggle("visible");
      searchInput.classList.toggle("hidden");

      logo.style.display = "flex";

      navbar.style.justifyContent = "flex-end";
    }
  } else {
    // Jika lebar jendela lebih dari 450 piksel, hanya tampilkan input bar
    searchInput.classList.toggle("visible");
    searchInput.classList.toggle("hidden");
    searchInput.focus();
  }
});

// Modal Button

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((button) => {
  button.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    itemDetailModal.style.top = "0";
    setTimeout(() => (itemDetailModal.style.opacity = "1"), 50);
    e.preventDefault();
  };
});

// close modal
const closeButton = document.querySelector(".close-icon");

closeButton.onclick = (e) => {
  itemDetailModal.style.opacity = "0";
  itemDetailModal.style.top = "-300px";
  setTimeout(() => (itemDetailModal.style.display = "none"), 500);
  e.preventDefault();
};

const modal = document.querySelector("#item-detail-modal");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// stars
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    if (this.style.fill === "var(--primary)") {
      this.style.fill = "none";
    } else {
      this.style.fill = "var(--primary)";
    }
  });
});



