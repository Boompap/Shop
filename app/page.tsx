const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=%CE%A1%CE%99%CE%96%CE%9F%CE%A3%20%CE%92%CE%91%CE%A3%CE%99%CE%9B%CE%95%CE%99%CE%9F%CE%A3%20%CE%95%CE%9B%CE%95%CE%A5%CE%98%CE%95%CE%A1%CE%99%CE%9F%CE%A3%20%CE%9B%CE%B5%CF%89%CF%86.%20%CE%9A%CF%81%CF%85%CE%BF%CE%BD%CE%B5%CF%81%CE%AF%CE%BF%CF%85%2017%20%CE%86%CE%B3.%20%CE%A3%CF%84%CE%AD%CF%86%CE%B1%CE%BD%CE%BF%CF%82%20145%2065";
const facebookUrl = "https://www.facebook.com/profile.php?id=100063526604702";
const listingUrl =
  "https://www.xrysietairia.eu/company/rizos-basileios-eleutherios-335874";

const products = [
  {
    greekTitle: "Μπουγάτσα",
    greekText:
      "Κλασική μπουγάτσα για κάθε ώρα της ημέρας, ζεστή και έτοιμη για το δρόμο.",
    englishTitle: "Bougatsa",
    englishText:
      "Classic bougatsa served warm and ready for any hour of the day.",
    image: "/rizos/gallery-1.jpg",
  },
  {
    greekTitle: "Πίτες & σφολιάτες",
    greekText:
      "Πίτες, τυρόπιτες, κρουασάν και αλμυρές επιλογές για πρωινό ή διάλειμμα.",
    englishTitle: "Pies & croissants",
    englishText:
      "Pies, cheese pies, croissants, and savory choices for breakfast or a break.",
    image: "/rizos/gallery-2.jpg",
  },
  {
    greekTitle: "Καφές & πρωινό",
    greekText:
      "Καφές, γλυκά και καθημερινές επιλογές για να ξεκινήσει καλά η μέρα.",
    englishTitle: "Coffee & breakfast",
    englishText:
      "Coffee, sweets, and everyday picks to start the day properly.",
    image: "/rizos/gallery-3.jpg",
  },
];

const gallery = [
  {
    src: "/rizos/logo.jpg",
    alt: "Η πρόσοψη του Μπουγατσοπωλείου ΡΙΖΟΣ",
    labelGreek: "Το κατάστημα",
    labelEnglish: "The shop",
  },
  {
    src: "/rizos/gallery-1.jpg",
    alt: "Σφολιάτες στο φούρνο",
    labelGreek: "Στο φούρνο",
    labelEnglish: "In the oven",
  },
  {
    src: "/rizos/gallery-2.jpg",
    alt: "Ζεστές σφολιάτες σε ταψί",
    labelGreek: "Ζεστές επιλογές",
    labelEnglish: "Warm choices",
  },
  {
    src: "/rizos/gallery-4.jpg",
    alt: "Αλμυρή πίτα",
    labelGreek: "Αλμυρές πίτες",
    labelEnglish: "Savory pies",
  },
];

const highlights = [
  { greek: "Ανοιχτά 24 ώρες", english: "Open 24 hours" },
  { greek: "Άγιος Στέφανος", english: "Agios Stefanos" },
  { greek: "Παραλαβή από το κατάστημα", english: "In-store pickup" },
  { greek: "Οικονομικές επιλογές", english: "Budget friendly" },
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

      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Μπουγατσοπωλείο ΡΙΖΟΣ">
            <span className="brandMark">Ρ</span>
            <span>Μπουγατσοπωλείο ΡΙΖΟΣ</span>
          </a>

          <div className="navCluster">
            <div className="navLinks">
              <a href="#products">
                <span className="el">Προϊόντα</span>
                <span className="en">Products</span>
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
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">
              <span className="el">Αθήνα · Ανοιχτά 24 ώρες</span>
              <span className="en">Athens · Open 24 hours</span>
            </p>
            <h1>
              <span className="el">Ζεστή μπουγάτσα, καφές και πρωινό κάθε στιγμή.</span>
              <span className="en">
                Warm bougatsa, coffee, and breakfast at any hour.
              </span>
            </h1>
            <p className="intro">
              <span className="el">
                Στο Μπουγατσοπωλείο ΡΙΖΟΣ θα βρεις καθημερινές επιλογές για
                γρήγορο πρωινό, σφολιάτες, γλυκά και καφέ, με εύκολη παραλαβή
                από το κατάστημα.
              </span>
              <span className="en">
                At RIZOS Bougatsa Shop you will find everyday choices for a
                quick breakfast, pastries, sweets, and coffee, with easy
                in-store pickup.
              </span>
            </p>
            <div className="actions">
              <a className="button primary" href={mapUrl} rel="noreferrer" target="_blank">
                <span className="el">Δες το στον χάρτη</span>
                <span className="en">View on map</span>
              </a>
            <a className="button secondary" href="tel:+302108141388">
              21 0814 1388
            </a>
            </div>
          </div>

          <div className="photoHero" aria-label="Φωτογραφίες από το κατάστημα">
            <img
              className="mainPhoto"
              src="/rizos/hero.jpg"
              alt="Πίτες και σφολιάτες στη βιτρίνα του Μπουγατσοπωλείου ΡΙΖΟΣ"
            />
            <div className="photoInset">
              <img src="/rizos/logo.jpg" alt="Πρόσοψη του Μπουγατσοπωλείου ΡΙΖΟΣ" />
            </div>
            <div className="visualLabel photoLabel">
              <p>
                <span className="el">Σερβίρουμε όλο το 24ωρο</span>
                <span className="en">Serving around the clock</span>
              </p>
              <strong>
                <span className="el">Μπουγάτσα · Πίτες · Καφές</span>
                <span className="en">Bougatsa · Pies · Coffee</span>
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Highlights">
        {highlights.map((item) => (
          <span key={item.greek}>
            <span className="el">{item.greek}</span>
            <span className="en">{item.english}</span>
          </span>
        ))}
      </section>

      <section className="section" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">
            <span className="el">Τι θα βρεις</span>
            <span className="en">What you will find</span>
          </p>
          <h2>
            <span className="el">Γεύσεις για πρωί, βράδυ και κάθε ενδιάμεση στάση.</span>
            <span className="en">
              Favorites for morning, night, and every stop in between.
            </span>
          </h2>
        </div>
        <div className="featureGrid">
          {products.map((product) => (
            <article className="featureCard" key={product.greekTitle}>
              <img src={product.image} alt="" />
              <h3>
                <span className="el">{product.greekTitle}</span>
                <span className="en">{product.englishTitle}</span>
              </h3>
              <p>
                <span className="el">{product.greekText}</span>
                <span className="en">{product.englishText}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallerySection" aria-label="Φωτογραφίες προϊόντων">
        <div className="sectionHeader">
          <p className="eyebrow">
            <span className="el">Από το μαγαζί</span>
            <span className="en">From the shop</span>
          </p>
          <h2>
            <span className="el">Πραγματικές εικόνες από τα προϊόντα και τον χώρο.</span>
            <span className="en">Real images from the products and the shop.</span>
          </h2>
        </div>
        <div className="galleryGrid">
          {gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>
                <span className="el">{photo.labelGreek}</span>
                <span className="en">{photo.labelEnglish}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="visit" id="visit">
        <div>
          <p className="eyebrow">
            <span className="el">Πού θα μας βρεις</span>
            <span className="en">Where to find us</span>
          </p>
          <h2>
            <span className="el">Λεωφ. Κρυονερίου 17, Άγιος Στέφανος.</span>
            <span className="en">17 Kryoneriou Avenue, Agios Stefanos.</span>
          </h2>
          <p>
            <span className="el">
              Πέρασε για μπουγάτσα, πίτες και καφέ οποιαδήποτε στιγμή της
              ημέρας. Το κατάστημα λειτουργεί 24 ώρες.
            </span>
            <span className="en">
              Stop by for bougatsa, pies, and coffee at any time of day. The
              shop is open 24 hours.
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
        <p>
          <span className="el">
            Κάλεσε το κατάστημα ή άνοιξε τον χάρτη για να έρθεις κατευθείαν.
          </span>
          <span className="en">
            Call the shop or open the map to come straight over.
          </span>
        </p>
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
