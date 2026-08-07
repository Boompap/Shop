const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=%CE%A1%CE%99%CE%96%CE%9F%CE%A3%20%CE%92%CE%91%CE%A3%CE%99%CE%9B%CE%95%CE%99%CE%9F%CE%A3%20%CE%95%CE%9B%CE%95%CE%A5%CE%98%CE%95%CE%A1%CE%99%CE%9F%CE%A3%20%CE%9B%CE%B5%CF%89%CF%86.%20%CE%9A%CF%81%CF%85%CE%BF%CE%BD%CE%B5%CF%81%CE%AF%CE%BF%CF%85%2017%20%CE%86%CE%B3.%20%CE%A3%CF%84%CE%AD%CF%86%CE%B1%CE%BD%CE%BF%CF%82%20145%2065";
const facebookUrl = "https://www.facebook.com/profile.php?id=100063526604702";
const listingUrl =
  "https://www.xrysietairia.eu/company/rizos-basileios-eleutherios-335874";

const products = [
  {
    greekTitle: "Μπουγάτσα",
    greekText: "Κλασική επιλογή για πρωινό, γλυκό διάλειμμα ή κάτι γρήγορο στον δρόμο.",
    englishTitle: "Bougatsa",
    englishText: "A classic choice for breakfast, a sweet break, or something quick on the go.",
  },
  {
    greekTitle: "Πίτες & σφολιάτες",
    greekText: "Αλμυρές επιλογές για κάθε ώρα, από τυρόπιτες μέχρι καθημερινές σφολιάτες.",
    englishTitle: "Pies & pastries",
    englishText: "Savory choices for any hour, from cheese pies to everyday pastries.",
  },
  {
    greekTitle: "Καφές & πρωινό",
    greekText: "Καφές και συνοδευτικά για γρήγορη στάση πριν τη δουλειά ή στη διαδρομή.",
    englishTitle: "Coffee & breakfast",
    englishText: "Coffee and breakfast picks for a quick stop before work or on the road.",
  },
];

const highlights = [
  { greek: "Ανοιχτά 24 ώρες", english: "Open 24 hours" },
  { greek: "Λεωφ. Κρυονερίου 17", english: "17 Kryoneriou Ave." },
  { greek: "Άγιος Στέφανος", english: "Agios Stefanos" },
  { greek: "Τηλέφωνο: 21 0814 1388", english: "Phone: 21 0814 1388" },
];

const imageSlots = [
  { greek: "Κεντρική φωτογραφία καταστήματος", english: "Main shop photo" },
  { greek: "Βιτρίνα προϊόντων", english: "Product display" },
  { greek: "Καφές και πρωινό", english: "Coffee and breakfast" },
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

      <section className="hero" id="top">
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

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">
              <span className="el">Άγιος Στέφανος · ανοιχτά όλο το 24ωρο</span>
              <span className="en">Agios Stefanos · open 24 hours</span>
            </p>
            <h1>
              <span className="el">Ζεστή μπουγάτσα και γρήγορο πρωινό, κάθε ώρα.</span>
              <span className="en">Warm bougatsa and quick breakfast, any hour.</span>
            </h1>
            <p className="intro">
              <span className="el">
                Ένα καθαρό σημείο προβολής για το ΡΙΖΟΣ, με έμφαση στην τοποθεσία,
                το 24ωρο ωράριο και τα προϊόντα που θα προστεθούν με φωτογραφίες στη συνέχεια.
              </span>
              <span className="en">
                A clean promotional page for RIZOS, focused on location, 24-hour service,
                and the products that will get photos added next.
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

          <div className="heroPlaceholder" aria-label="Κενός χώρος για κεντρική φωτογραφία">
            <div className="placeholderFrame">
              <span className="placeholderMark">+</span>
              <p>
                <span className="el">Χώρος για κεντρική φωτογραφία</span>
                <span className="en">Space for main photo</span>
              </p>
            </div>
          </div>
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

      <section className="section products" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">
            <span className="el">Τι θα βρεις</span>
            <span className="en">What you will find</span>
          </p>
          <h2>
            <span className="el">Τα βασικά προϊόντα μπροστά, χωρίς περιττό θόρυβο.</span>
            <span className="en">The core products up front, without visual noise.</span>
          </h2>
        </div>
        <div className="featureGrid">
          {products.map((product, index) => (
            <article className="featureCard" key={product.greekTitle}>
              <div className="miniSlot" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
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

      <section className="section slotsSection" aria-label="Χώροι φωτογραφιών">
        <div className="sectionHeader">
          <p className="eyebrow">
            <span className="el">Φωτογραφίες αργότερα</span>
            <span className="en">Photos later</span>
          </p>
          <h2>
            <span className="el">Άφησα καθαρές θέσεις για τις εικόνες που θα διαλέξεις.</span>
            <span className="en">I left clean spaces for the images you choose later.</span>
          </h2>
        </div>
        <div className="slotGrid">
          {imageSlots.map((slot) => (
            <div className="imageSlot" key={slot.greek}>
              <span></span>
              <p>
                <span className="el">{slot.greek}</span>
                <span className="en">{slot.english}</span>
              </p>
            </div>
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
              Πέρασε για μπουγάτσα, πίτες και καφέ οποιαδήποτε στιγμή της ημέρας.
              Το κατάστημα λειτουργεί 24 ώρες.
            </span>
            <span className="en">
              Stop by for bougatsa, pies, and coffee at any time of day. The shop is open 24 hours.
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
