const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=%CE%A1%CE%99%CE%96%CE%9F%CE%A3%20%CE%92%CE%91%CE%A3%CE%99%CE%9B%CE%95%CE%99%CE%9F%CE%A3%20%CE%95%CE%9B%CE%95%CE%A5%CE%98%CE%95%CE%A1%CE%99%CE%9F%CE%A3%20%CE%9B%CE%B5%CF%89%CF%86.%20%CE%9A%CF%81%CF%85%CE%BF%CE%BD%CE%B5%CF%81%CE%AF%CE%BF%CF%85%2017%20%CE%86%CE%B3.%20%CE%A3%CF%84%CE%AD%CF%86%CE%B1%CE%BD%CE%BF%CF%82%20145%2065";
const facebookUrl = "https://www.facebook.com/profile.php?id=100063526604702";
const listingUrl =
  "https://www.xrysietairia.eu/company/rizos-basileios-eleutherios-335874";

const heroSlides = [
  {
    greek: "Μπουγάτσα",
    english: "Bougatsa",
    greekText: "Τραγανό φύλλο και γεμάτη γεύση για πρωινό ή γλυκό διάλειμμα.",
    englishText: "Crisp pastry and full flavor for breakfast or a sweet break.",
    image: "/rizos/bougatsa-tray.jpg",
    alt: "Ταψί με μπουγάτσες και πίτες στη βιτρίνα του ΡΙΖΟΣ",
  },
  {
    greek: "Αλμυρές πίτες",
    english: "Savory pies",
    greekText: "Ζεστές επιλογές για κάθε ώρα της ημέρας.",
    englishText: "Warm savory choices for any hour of the day.",
    image: "/rizos/ham-cheese-rolls.jpg",
    alt: "Αλμυρά ρολά με ζαμπόν και τυρί",
  },
  {
    greek: "Γλυκές επιλογές",
    english: "Sweet choices",
    greekText: "Μπουγάτσα και σοκολατένιες επιλογές για κάτι πιο γλυκό.",
    englishText: "Bougatsa and chocolate choices when you want something sweeter.",
    image: "/rizos/sweet-bougatsa.jpg",
    alt: "Γλυκιά μπουγάτσα με σοκολάτα",
  },
];

const showcase = [
  {
    greek: "Το κατάστημα",
    english: "The shop",
    textGreek: "Η βιτρίνα του ΡΙΖΟΣ στον Άγιο Στέφανο.",
    textEnglish: "The RIZOS storefront in Agios Stefanos.",
    image: "/rizos/shop-front.jpg",
    alt: "Πρόσοψη του Μπουγατσοπωλείου ΡΙΖΟΣ",
  },
  {
    greek: "Μπουγάτσα",
    english: "Bougatsa",
    textGreek: "Κλασική, ζεστή και έτοιμη για σερβίρισμα.",
    textEnglish: "Classic, warm, and ready to serve.",
    image: "/rizos/bougatsa-tray.jpg",
    alt: "Μπουγάτσες στη βιτρίνα",
  },
  {
    greek: "Σφολιάτες",
    english: "Pastries",
    textGreek: "Αλμυρές επιλογές για γρήγορο πρωινό ή σνακ.",
    textEnglish: "Savory choices for breakfast or a quick snack.",
    image: "/rizos/pastry-display.jpg",
    alt: "Σφολιάτες και αλμυρές πίτες στη βιτρίνα",
  },
];

const highlights = [
  { greek: "Ανοιχτά 24 ώρες", english: "Open 24 hours" },
  { greek: "Λεωφ. Κρυονερίου 17", english: "17 Kryoneriou Ave." },
  { greek: "Άγιος Στέφανος", english: "Agios Stefanos" },
  { greek: "21 0814 1388", english: "21 0814 1388" },
];

export default function Home() {
  return (
    <main className="pageShell">
      <input
        className="languageInput"
        id="lang-el"
        name="language"
        type="radio"
        defaultChecked
      />
      <input className="languageInput" id="lang-en" name="language" type="radio" />

      <header className="siteHeader" id="top">
        <a className="brand" href="#top" aria-label="Μπουγατσοπωλείο ΡΙΖΟΣ">
          <span className="brandMark">Ρ</span>
          <span>Μπουγατσοπωλείο ΡΙΖΟΣ</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <div className="navLinks">
            <a href="#products">
              <span className="el">Προϊόντα</span>
              <span className="en">Products</span>
            </a>
            <a href="#story">
              <span className="el">Το μαγαζί</span>
              <span className="en">The shop</span>
            </a>
            <a href="#visit">
              <span className="el">Τοποθεσία</span>
              <span className="en">Location</span>
            </a>
            <a href="#contact">
              <span className="el">Επικοινωνία</span>
              <span className="en">Contact</span>
            </a>
          </div>
          <div className="languageToggle" aria-label="Language">
            <label htmlFor="lang-el">EL</label>
            <label htmlFor="lang-en">EN</label>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="heroIntro">
          <p className="eyebrow">
            <span className="el">Άγιος Στέφανος · ανοιχτά όλο το 24ωρο</span>
            <span className="en">Agios Stefanos · open 24 hours</span>
          </p>
          <h1>
            <span className="el">Ζεστή μπουγάτσα, πίτες και καφές κάθε ώρα.</span>
            <span className="en">Warm bougatsa, pies, and coffee at any hour.</span>
          </h1>
          <p className="intro">
            <span className="el">
              Μια μοντέρνα σελίδα για το ΡΙΖΟΣ, με έμφαση στα προϊόντα, την τοποθεσία
              και την καθημερινή εξυπηρέτηση στον Άγιο Στέφανο.
            </span>
            <span className="en">
              A modern page for RIZOS, focused on the products, the location,
              and everyday service in Agios Stefanos.
            </span>
          </p>
        </div>

        <div className="heroSlider" aria-label="Product highlights">
          {heroSlides.map((slide) => (
            <article className="heroPanel" key={slide.greek}>
              <img className="productImage" src={slide.image} alt={slide.alt} />
              <div className="panelCopy">
                <h2>
                  <span className="el">{slide.greek}</span>
                  <span className="en">{slide.english}</span>
                </h2>
                <p>
                  <span className="el">{slide.greekText}</span>
                  <span className="en">{slide.englishText}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="actions centered">
          <a className="button primary" href={mapUrl} rel="noreferrer" target="_blank">
            <span className="el">Δες το στον χάρτη</span>
            <span className="en">View on map</span>
          </a>
          <a className="button secondary" href="tel:+302108141388">
            21 0814 1388
          </a>
        </div>
      </section>

      <section className="highlights" aria-label="Highlights">
        {highlights.map((item) => (
          <span key={item.greek}>
            <span className="el">{item.greek}</span>
            <span className="en">{item.english}</span>
          </span>
        ))}
      </section>

      <section className="section productShowcase" id="products">
        <div className="sectionHeader showcaseHeader">
          <p className="eyebrow">
            <span className="el">Προϊόντα</span>
            <span className="en">Products</span>
          </p>
          <h2>
            <span className="el">Καθημερινές επιλογές, καθαρές εικόνες, ζεστή αίσθηση.</span>
            <span className="en">Everyday choices, clean photos, warm presentation.</span>
          </h2>
          <p>
            <span className="el">
              Η προβολή γίνεται πιο απλή και premium: μεγάλο προϊόν, μικρότερες λεπτομέρειες
              και καθαρή ανάγνωση χωρίς βαριά μαύρα πλαίσια.
            </span>
            <span className="en">
              A simpler, more premium presentation: one large product moment, smaller details,
              and clear reading without heavy black cards.
            </span>
          </p>
        </div>

        <div className="showcaseGrid">
          <article className="featureTile">
            <img src="/rizos/sweet-bougatsa.jpg" alt="Γλυκιά μπουγάτσα με σοκολάτα" />
            <div>
              <span className="kicker">
                <span className="el">Γλυκό highlight</span>
                <span className="en">Sweet highlight</span>
              </span>
              <h3>
                <span className="el">Μπουγάτσα, σφολιάτες και γλυκές επιλογές για κάθε στιγμή.</span>
                <span className="en">Bougatsa, pastries, and sweet choices for every moment.</span>
              </h3>
            </div>
          </article>

          <div className="supportTiles">
            {showcase.map((item) => (
              <article className="supportTile" key={item.greek}>
                <img src={item.image} alt={item.alt} />
                <div>
                  <h3>
                    <span className="el">{item.greek}</span>
                    <span className="en">{item.english}</span>
                  </h3>
                  <p>
                    <span className="el">{item.textGreek}</span>
                    <span className="en">{item.textEnglish}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="storyBand" id="story">
        <p>
          <span className="el">
            Μπουγάτσα, πίτες, καφές και γρήγορο πρωινό στον Άγιο Στέφανο,
            με λειτουργία όλο το 24ωρο.
          </span>
          <span className="en">
            Bougatsa, pies, coffee, and quick breakfast in Agios Stefanos,
            open around the clock.
          </span>
        </p>
      </section>

      <section className="visit" id="visit">
        <div>
          <p className="eyebrow">
            <span className="el">Βρες το κατάστημα</span>
            <span className="en">Find the shop</span>
          </p>
          <h2>
            <span className="el">Λεωφ. Κρυονερίου 17, Άγιος Στέφανος.</span>
            <span className="en">17 Kryoneriou Avenue, Agios Stefanos.</span>
          </h2>
          <p>
            <span className="el">
              Πέρασε για μπουγάτσα, πίτες και καφέ οποιαδήποτε στιγμή της ημέρας.
            </span>
            <span className="en">
              Stop by for bougatsa, pies, and coffee at any time of day.
            </span>
          </p>
          <a className="textLink" href={mapUrl} rel="noreferrer" target="_blank">
            <span className="el">Άνοιγμα οδηγιών στο Google Maps</span>
            <span className="en">Open directions in Google Maps</span>
          </a>
        </div>
        <div className="hours">
          <h3>
            <span className="el">Ωράριο</span>
            <span className="en">Hours</span>
          </h3>
          <p>
            <span className="el">Κάθε μέρα</span>
            <span className="en">Every day</span>
            <strong>24 ώρες / 24 hours</strong>
          </p>
          <p>
            <span className="el">Τηλέφωνο</span>
            <span className="en">Phone</span>
            <strong>21 0814 1388</strong>
          </p>
        </div>
      </section>

      <section className="linksBand" aria-label="Useful links">
        <a href={mapUrl} rel="noreferrer" target="_blank">
          <span className="el">Οδηγίες στο Google Maps</span>
          <span className="en">Directions on Google Maps</span>
        </a>
        <a href={facebookUrl} rel="noreferrer" target="_blank">
          <span className="el">Σελίδα στο Facebook</span>
          <span className="en">Facebook page</span>
        </a>
        <a href={listingUrl} rel="noreferrer" target="_blank">
          <span className="el">Καταχώριση επιχείρησης</span>
          <span className="en">Business listing</span>
        </a>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">
          <span className="el">Επικοινωνία</span>
          <span className="en">Contact</span>
        </p>
        <h2>
          <span className="el">Θες να ρωτήσεις κάτι πριν περάσεις;</span>
          <span className="en">Want to ask something before stopping by?</span>
        </h2>
        <div className="actions centered">
          <a className="button primary" href="tel:+302108141388">
            21 0814 1388
          </a>
          <a className="button secondary" href={mapUrl} rel="noreferrer" target="_blank">
            <span className="el">Τοποθεσία</span>
            <span className="en">Location</span>
          </a>
        </div>
      </section>
    </main>
  );
}
