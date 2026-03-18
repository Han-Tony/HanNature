const galleryData = [
  {
    title_en: "Savannah Sunset",
    title_fr: "Coucher de soleil en savane",
    location: "Africa",
    img: "https://source.unsplash.com/400x300/?savannah"
  },
  {
    title_en: "Alps Mountains",
    title_fr: "Montagnes des Alpes",
    location: "Europe",
    img: "https://source.unsplash.com/400x300/?alps"
  },
  {
    title_en: "Asian Forest",
    title_fr: "Forêt asiatique",
    location: "Asia",
    img: "https://source.unsplash.com/400x300/?forest"
  },
  {
    title_en: "African Elephant",
    title_fr: "Éléphant africain",
    location: "Africa",
    img: "https://source.unsplash.com/400x300/?elephant"
  }
];

const gallery = document.getElementById("gallery");
const locationFilter = document.getElementById("locationFilter");
const languageSelect = document.getElementById("languageSelect");

function renderGallery() {
  const selectedLocation = locationFilter.value;
  const lang = languageSelect.value;

  gallery.innerHTML = "";

  galleryData
    .filter(item => selectedLocation === "all" || item.location === selectedLocation)
    .forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.img}">
        <div class="card-content">
          <h3>${lang === "fr" ? item.title_fr : item.title_en}</h3>
          <p>${item.location}</p>
        </div>
      `;

      gallery.appendChild(card);
    });
}

function updateLanguage() {
  const lang = languageSelect.value;
  const navLinks = document.querySelectorAll("nav a");

  navLinks[0].textContent = lang === "fr" ? "Accueil" : "Home";
  navLinks[1].textContent = lang === "fr" ? "À propos" : "About";
  navLinks[2].textContent = lang === "fr" ? "Blog" : "Blog";
  navLinks[3].textContent = lang === "fr" ? "Contact" : "Contact";
  navLinks[4].textContent = lang === "fr" ? "Paysages" : "Landscape";
  navLinks[5].textContent = lang === "fr" ? "Animaux" : "Animals";
  navLinks[6].textContent = lang === "fr" ? "Plantes" : "Plants";

  document.getElementById("footerText").textContent =
    lang === "fr"
      ? "© 2026 HanNature. Tous droits réservés."
      : "© 2026 HanNature. All rights reserved.";

  renderGallery();
}

locationFilter.addEventListener("change", renderGallery);
languageSelect.addEventListener("change", updateLanguage);

renderGallery();
