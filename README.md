# DemolizioneDonvito — sito web

Sito statico professionale per **Demolizione auto Donvito** (DemolizioneDonvito): rottamazione auto gratuita su Roma e provincia, ritiro a domicilio, pratiche di demolizione e soccorso stradale 24/7 in tutta Italia.

## Struttura file

```
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── vetrina.jpg            # Hero (carro attrezzi + Ferrari rossa)
│   ├── 1.jpg … 10.jpg         # Servizi, soccorso, galleria, contatti
│   └── originals/             # Copie di backup delle foto
└── README.md
```

Stack: HTML, CSS e JavaScript vanilla. Nessuna dipendenza di build o framework.

## Come visualizzare il sito in locale

### Opzione 1 — doppio clic

1. Apri la cartella del progetto.
2. Fai doppio clic su `index.html`.
3. Il sito si apre nel browser predefinito.

### Opzione 2 — server locale (consigliata)

Da terminale, nella cartella del progetto:

**Python 3**

```bash
python -m http.server 8080
```

Poi apri nel browser: [http://localhost:8080](http://localhost:8080)

**Node.js (npx)**

```bash
npx --yes serve -l 8080
```

Poi apri nel browser: [http://localhost:8080](http://localhost:8080)

> Il sito è pensato per funzionare in locale. Non è pubblicato online da questo progetto.

## Contatti usati nel sito

- Telefono / WhatsApp: `328 468 3363`
- Link telefono: `tel:+393284683363`
- Link WhatsApp: `https://wa.me/393284683363` con messaggio iniziale precompilato
- Indirizzo: Viale di Marino 85, Ciampino (RM)

## Prima della pubblicazione (quando deciderai di metterlo online)

Sostituisci i segnaposto evidenti nel codice:

1. **Canonical e Open Graph URL** in `index.html` (`https://www.esempio-da-sostituire.it/`)
2. **URL in Schema.org** (`LocalBusiness.url`)
3. **Pagine legali** nel footer (Privacy, Cookie, Note legali)
4. Eventuale **og:image** assoluta quando il sito avrà un dominio definitivo

## Scelte di design

- Palette: nero grafite `#101010`, verde lime `#8BD629`, rosso `#E51B23`, bianco `#FFFFFF`
- Tipografia: Barlow Condensed (titoli/brand) + Manrope (testo), caricate da Google Fonts
- Layout mobile-first, contrasto alto, stati hover/focus, skip-link e menu accessibile
- Gratuità di rottamazione e ritiro evidenziata in modo chiaro, senza eccezioni inventate
- Nessuna recensione, certificazione, prezzo extra o dato aziendale inventato
