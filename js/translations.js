/* Vertalingen voor de gastenhandleiding: Nederlands (nl), Engels (en), Duits (de).
   Namen, adressen, telefoonnummers en het wifi-netwerk blijven bewust
   ongewijzigd buiten dit bestand (in index.html), zodat feitelijke
   gegevens nooit per ongeluk verschillen tussen talen. */
const TRANSLATIONS = {

  nl: {
    meta: {
      title: "Gastenhandleiding — Schuine Hondsbosschelaan 7, Heiloo",
      description: "Gastenhandleiding voor Schuine Hondsbosschelaan 7 in Heiloo — alles wat je moet weten over je verblijf."
    },
    skip: { tekst: "Ga naar de inhoud" },
    header: { brand: "Ons huis in Heiloo", menuOpenLabel: "Menu openen" },
    langSwitcher: { ariaLabel: "Taal kiezen" },
    nav: {
      ariaLabel: "Secties in de handleiding",
      welkom: "Welkom",
      aankomst: "Aankomst &amp; sleutels",
      checkin: "Check-in &amp; check-out",
      wifi: "Wifi &amp; elektronica",
      keuken: "Keuken &amp; apparatuur",
      badkamer: "Badkamer",
      verwarming: "Verwarming &amp; ventilatie",
      tuin: "Tuin &amp; buiten",
      praktisch: "Praktisch &amp; huishoudelijk",
      afval: "Afval &amp; recycling",
      huisregels: "Huisregels",
      vervoer: "Vervoer &amp; omgeving",
      buurt: "Buurt tips",
      noodcontacten: "Noodcontacten"
    },
    search: {
      label: "Zoek in de handleiding",
      placeholder: "Zoek een woord, bv. wifi...",
      resultsFound: "{n} resultaat/resultaten gevonden",
      noResults: "Geen resultaten gevonden"
    },
    hero: { alt: "De tuin van Schuine Hondsbosschelaan 7" },
    closing: { alt: "De woonkamer van Schuine Hondsbosschelaan 7" },
    backToTop: { label: "Terug naar boven" },
    footer: { tekst: "Met liefde gemaakt door Familie van Tuijl &middot; Schuine Hondsbosschelaan 7, Heiloo" },

    welkom: {
      p1: "Welkom in ons huis! Een plek waar wij zelf heel fijn wonen, en we hopen dat jullie hier ook net zo van kunnen genieten. Voel je thuis en geniet van de omgeving!",
      p2: "In deze handleiding vind je alle praktische zaken over ons huis. Daarnaast hebben we ook onze favoriete plekken en activiteiten in de buurt voor je opgeschreven, zodat je het meeste uit je verblijf kunt halen.",
      p3: "Kom je er ergens niet uit, bel of app ons gerust. We helpen jullie graag.",
      p4: "Veel plezier en geniet ervan!<br><strong>Familie van Tuijl</strong>",
      adresLabel: "Adres",
      gastheerLabel: "Gastheer",
      telefoonLabel: "Telefoon",
      emailLabel: "E-mail"
    },

    aankomst: {
      p1: "Bij aankomst loop je door de poortdeur aan de rechterkant van het huis, waar je de sleutelkluis vindt. De precieze locatie en toegangscode van de sleutelkluis ontvang je apart en persoonlijk van ons, kort voor je aankomst.",
      p2: "In de sleutelkluis vind je de sleutel van de achterdeur. Dit is de ingang die wij zelf altijd gebruiken. Dezelfde sleutel werkt ook voor de twee klapdeuren vanuit de woonkamer naar de tuin. Bij binnenkomst ligt er op tafel nog een tweede sleutel als reserve.",
      p3: "In de straat kun je gratis parkeren. Zijn alle plekken bezet, wat vooral 's avonds kan voorkomen? Dan parkeren wij zelf op de grote parkeerplaats aan het einde van de straat, rechts vóór het spoor. Daar vind je ook meerdere oplaadpunten voor elektrische auto's."
    },

    checkin: {
      p1: "De standaard check-in tijd is <strong>15:00 uur</strong>. Wil je eerder inchecken? Stem dit dan even van tevoren met ons af, dan kijken we graag wat er mogelijk is.",
      p2: "De standaard check-out tijd is <strong>11:00 uur</strong>. Wil je later uitchecken? Ook dan stemmen we dit graag van tevoren met je af.",
      p3: "<strong>Vertrek checklist</strong> — voor je vertrekt vragen we je om:",
      li1: "Ramen te sluiten",
      li2: "De verwarming op 18 graden te zetten",
      li3: "Gebruikt beddengoed en handdoeken in de wasmachine te doen op 60 graden (met wasverzachter erbij) en de wasmachine aan te zetten — wij doen de rest",
      li4: "De vaatwasser leeg te ruimen: bestek en servies weer netjes op zijn plek in de kasten",
      li5: "De reservesleutel terug te leggen op tafel",
      li6: "De fietssleutels terug te leggen op tafel",
      li7: "De sleutel terug te hangen in de sleutelbox",
      li8: "Het vuilnis te legen in de buitenbakken (zie Afval &amp; recycling)",
      p4: "Laat gerust een review achter in het boekje — we zijn altijd benieuwd hoe je het verblijf bij ons hebt ervaren!"
    },

    wifi: {
      naamLabel: "Wifi naam",
      wachtwoordLabel: "Wifi wachtwoord",
      wachtwoordWaarde: "Ontvang je apart en persoonlijk van ons",
      p1: "<strong>TV (Samsung Frame)</strong> — het kastje van de tv staat in de kast rechts van de tv; richt de afstandsbediening daar naartoe. De afstandsbediening is eenvoudig en wijst zichzelf. Onderin het scherm zie je de iconen van Netflix, Disney+ en Ziggo. Netflix en Disney+ zijn vrij te gebruiken, voor live tv klik je op het Ziggo-icoon.",
      p2: "<strong>SONOS</strong> — in de woonkamer staan een SONOS speaker en subwoofer gekoppeld aan de tv. Daarnaast hangt er een losse SONOS speaker linksboven de paarse kast. Je kunt de speakers op twee manieren bedienen:",
      li1: "Heb je een iPhone, iPad of Mac? Verbind je apparaat met onze wifi, open je muziekapp (Spotify, Apple Music of een andere app), tik op het AirPlay-icoon en kies de gewenste speaker. Geen app of account nodig.",
      li2: "Heb je een Android telefoon? Download dan de gratis Sonos-app, verbind met onze wifi en je hebt direct toegang tot de speakers.",
      p3: "Het volume regel je via de app."
    },

    keuken: {
      p1: "<strong>Vaatwasser</strong> — wij gebruiken altijd de eco-stand, die standaard geselecteerd is en ongeveer 3,5 uur duurt. Wil je een sneller programma? Druk dan op de derde knop van links, je ziet de tijd direct aanpassen. Vaatwastabletten liggen in de bovenste schuiflade onder de wasbak.",
      p2: "<strong>Oven</strong> — heeft twee standen die wij het meest gebruiken. De stand op de positie van 15:00 uur is de heteluchtstand, handig voor gerechten die rustig en gelijkmatig moeten garen. De stand op de positie van 19:00 uur geeft direct bovenwarmte, handig om iets snel af te bakken zoals een pizza. Let op: dit gaat sneller dan je gewend bent, houd het goed in de gaten.",
      p3: "<strong>Kookplaat</strong> — gasfornuis met 5 pitten.",
      p4: "<strong>Koelkast &amp; vriezer</strong> — in de keuken vind je links een koelkast voor dagelijks gebruik. Een tweede, grotere koelkast en vriezer staan in de schuur.",
      p5: "<strong>Nespresso</strong> — vul het waterreservoir aan de achterkant en zet het apparaat aan. Wacht tot de lampjes stoppen met knipperen. Klap de hendel omhoog, plaats een capsule en klap de hendel weer dicht. Zet een kopje eronder en druk op de kleine knop voor espresso of de grote knop voor lungo — het apparaat stopt automatisch. Gebruikte capsules vallen vanzelf in het opvangbakje. Bij aankomst liggen er capsules naast het apparaat; voel je vrij om zelf extra aan te schaffen als je meer nodig hebt. Wil je een cappuccino maken? Er is ook een melkschuimer aanwezig.",
      p6: "<strong>Overige apparaten</strong> — er is een waterkoker aanwezig, deze wijst zichzelf.",
      p7: "<strong>Waar vind je alles?</strong> In de ladekast rechts van de koelkast vind je pannen en deksels onderin, ontbijtbordjes/glazen/bekers/kinderservies in de tweede la, en bestek en koksmessen in de derde en vierde la. In de linker kast van het kookeiland liggen extra borden. In de paarse kast vind je wijn-, bier- en waterglazen, onderin de ovenschalen, rechtsonder de vaat-, thee- en keukendoeken, en in de la placemats en tafellakens. In de schuiflade onder de oven liggen de grote pandeksels, de keukenrasp en de maatbeker.",
      p8: "<strong>Wat mag je gebruiken?</strong> Alle kasten mogen worden geopend en alles wat je erin vindt mag je vrij gebruiken. We weten zelf hoe fijn het is om voor een vakantie niet alles opnieuw te hoeven inslaan. Is iets op of de laatste? We stellen het op prijs als je het vervangt."
    },

    badkamer: {
      p1: "<strong>Douche</strong> — heeft twee standen. Draai de linkerkraan omhoog voor de regendouche (het duurt even voordat het water warm is) of omlaag voor de handdouche. Met de rechterkraan stel je de watertemperatuur in. Er hangt een trekker in de douche om de wanden na het douchen droog te maken.",
      p2: "<strong>Bad</strong> — heeft twee kranen. Met de bovenste kraan zet je het water aan en kies je tussen de badkraan en de douchekop door hem naar links of rechts te draaien. Met de onderste kraan stel je de watertemperatuur in.",
      p3: "<strong>Handdoeken &amp; extra's</strong> — extra handdoeken vind je in een mand in de badkamer: kleine en grote handdoeken, washandjes en strandhanddoeken. Speciaal voor kinderen is er Zwitsal body wash en shampoo, en badspeelgoed. Voor volwassenen is er een fijne body foam. Handwash en crème vind je zowel in de badkamer als in de keuken. Er is ook een föhn aanwezig in de la van de badkamer, met ruimte voor je eigen toiletspullen.",
      p4: "Extra toiletrolletjes liggen op de wc in de kastjes links en rechts boven het toilet — open deze met de zwarte handvatten. Voor de kleintjes hebben we in de schuur een brilverkleiner en een wc-opstapje. Vieze luiers mag je in een afgesloten zakje direct in de grijze bak aan de zijkant van het huis doen."
    },

    verwarming: {
      p1: "<strong>Thermostaat</strong> — hangt in de woonkamer, rechts van de schuifdeuren. De temperatuur lees je af op het display en stel je in met de pijltjestoetsen.",
      p2: "<strong>Ventilatoren</strong> — op elke slaapkamer staat een ventilator. Op de kinderkamers vind je er een met vier knoppen achterop voor aan/uit en de verschillende standen.",
      p3: "In de master bedroom staat een <strong>Duux Whisper 3</strong>. Deze bedien je via de knoppen op de voet of via de afstandsbediening op het nachtkastje. Hij heeft 26 snelheidsstanden (instelbaar via de draaiknop op de voet), een natuurlijke windstand die een buitenbries nabootst, en een timerfunctie tot 12 uur. De ventilator kan zowel horizontaal als verticaal draaien voor een optimale luchtverdeling."
    },

    tuin: {
      p1: "<strong>Planten</strong> — zie je dat een plant water nodig heeft, geef gerust water. Er staat een gieter in of naast de schuur. De bamboe rechtsachterin kan altijd wel wat water gebruiken. Geef je geen water? Ook geen probleem.",
      p2: "<strong>Buitenverlichting</strong> — de verlichting aan de zijkant van het huis, bij de voordeur en op de schuur werkt automatisch en schakelt vanzelf in en uit. De sfeerverlichting langs de tuin bedien je zelf: in de schuur, direct links bij de ingang, steek je de stekker in het stopcontact om de verlichting aan te doen en trek je hem eruit om hem uit te doen.",
      p3: "<strong>Tuinmeubilair</strong> — op de veranda vind je een volledige eethoek om ook buiten te eten, en een witte bank om in de avondzon te genieten, met kussens en dekentjes voor buiten. Bij slecht weer blijft alles droog, dus je hoeft niets af te halen. We vragen je de witte bank op zijn plek te laten staan; komt er een vlek op, behandel deze dan snel met de vlekkenmiddelen uit de keuken. Het overige tuinmeubilair mag je vrij verplaatsen en gebruiken. De tuin heeft ook een kinderhuisje met extra speelgoed.",
      p4: "<strong>Fietsen</strong> — alle fietsen zijn beschikbaar, de sleutels liggen op tafel bij binnenkomst. Er is een elektrische damesfiets met kinderzitje achterop: activeer hem met de knop rechtsboven op het bedieningspaneel en stel met de + en - knoppen het ondersteuningsniveau in. De actieradius is ongeveer 15–20 km, dus laad de batterij op voor vertrek (de oplader ligt rechts op het werkblad in de schuur — sluit hem het liefst een avond van tevoren aan, want hij laadt langzaam). Verder zijn er een gewone damesfiets, een herenfiets, een mountainbike voor kinderen van 7–12 jaar en een meisjesfiets voor kinderen van 5–7 jaar."
    },

    praktisch: {
      p1: "<strong>Meterkast</strong> — bevindt zich in de hal, rechts van de voordeur, in de witte kast. Is er een stop doorgeslagen? Dan staat de betreffende zwarte schakelaar naar beneden — klik hem omhoog om de groep te herstellen.",
      p2: "<strong>Schoonmaakspullen</strong> — staan in de keuken (middelste la, onderop): schoonmaakmiddel voor vloer, keuken en wc, en stoffer/blik. Gebruik vooral wat je nodig hebt. In de kelder vind je emmer en dweil.",
      p3: "<strong>Gereedschap</strong> — in de schuur vind je rechts een groot werkblad met lades. In de bovenste rechterlade ligt een set basisgereedschap.",
      p4: "<strong>Speelgoed &amp; strandspullen</strong> — op de kinderslaapkamers, in het speelhuisje en in de schuur (duplo en knutselspullen) vind je genoeg speelgoed en boekjes. In de schuur ligt ook buitenspeelgoed en strandspullen: thermopakjes voor het zwemmen in zee (twee maten), een strandkleed, parasol en windscherm. Pak vooral wat je fijn en handig vindt!"
    },

    afval: {
      p1: "In Heiloo scheiden we al het afval. In de grote beige prullenbak in de keuken zitten twee bakken: één voor grijs restafval en één voor plastic verpakkingen en blikken. Naast de prullenbak staat een kleinere bak voor groente- en fruitafval. Vuilniszakken liggen in de bovenste lade onder de wasbak.",
      p2: "Is een bak vol? Gooi hem dan leeg in de grote buitenbakken links van het huis: sta je voor het huis, loop dan naar links richting de ingang van de buren — de bakken staan daar rechts tegen ons huis. Elke bak heeft een gekleurd deksel:",
      li1: "<strong>Grijs</strong> = restafval",
      li2: "<strong>Oranje</strong> = plastic, verpakkingen en blikken",
      li3: "<strong>Groen</strong> = groente en fruitafval",
      p3: "De bakken worden op vaste dagen aan de straat gezet voor lediging. Omdat dit per week verschilt, stemmen we dit voor je verblijf met je af. Papier leg je apart in de schuur, dat nemen wij mee als we terug zijn. Glas kun je kwijt in de glasbakken bij het winkelcentrum in de buurt."
    },

    huisregels: {
      p1: "<strong>Roken</strong> — is nergens in en om het huis toegestaan.",
      p2: "<strong>Huisdieren</strong> — zijn helaas niet toegestaan.",
      p3: "<strong>Overige regels</strong> — wees lief voor onze buren :)"
    },

    vervoer: {
      p1: "<strong>Parkeren</strong> — in de straat kun je gratis parkeren. Zijn alle plekken bezet, wat vooral 's avonds kan voorkomen? Dan parkeren wij zelf op de grote parkeerplaats aan het einde van de straat, rechts vóór het spoor, waar ook meerdere oplaadpunten voor elektrische auto's zijn.",
      p2: "<strong>Openbaar vervoer</strong> — NS Station Heiloo ligt op ongeveer 10 minuten lopen van het huis. Vanaf hier reis je in 30 minuten direct naar Amsterdam Centraal en in 5 minuten naar Alkmaar. Reistijden en tickets vind je op <strong>ns.nl</strong>; tickets zijn ook te koop bij de automaat op het station, rechts voor het perron."
    },

    buurt: {
      p1: "Bij binnenkomst vind je ook een blaadje met tips voor de omgeving. Hieronder alvast onze favorieten.",
      p2: "<strong>Boodschappen</strong> — wij gaan zelf altijd naar de Albert Heijn in winkelcentrum 't Loo, op 5 minuten loopafstand. In hetzelfde winkelcentrum vind je ook een fijne bakker, slager, kaaswinkel en viswinkel.",
      p3: "<strong>Restaurant Nieuw Westert</strong> — een aanrader, zeker voor gezinnen. Ligt prachtig in de duinen, met een groot terras en een leuke speeltuin voor de kinderen. Combineer het met een duinwandeling voor een mooie dag uit. Op de fiets ben je er in 20–25 minuten, en er is ruim parkeergelegenheid.",
      p4: "<strong>IJssalon Fiorentina</strong> — mag je tijdens je verblijf niet overslaan. Op een paar minuten lopen vind je een van de lekkerste ijssalons van Nederland. Er staat vaak een rijtje, maar dat schuift snel op en is meer dan de moeite waard.",
      p5: "<strong>Club Zand &amp; Strand Deining (Castricum)</strong> — het strand van Castricum is een aanrader, met een grote parkeerplaats en fijn strand. Hier vind je ook twee van onze favoriete strandtenten: goed eten en een heerlijk terras.",
      p6: "<strong>Zwembad Baafje</strong> — een heel fijn buitenzwembad op fietsafstand, met twee kinderbaden en een groot sportbad met duikplanken, omringd door grasvelden en een speeltuin.",
      p7: "<strong>Klimduin Schoorl</strong> — in het natuurgebied van Schoorl kun je heerlijk wandelen en fietsen. Deze klimduin is bijzonder om te zien voor kinderen, en nog leuker om vanaf te rennen. Onderaan vind je verschillende restaurants met terrassen.",
      p8: "<strong>Kaboutertocht (4–6 jaar)</strong> — ga als een echte kabouter op pad in het Noordhollands Duinreservaat. Deze korte wandeling (2 km) voor kinderen van 4 tot 6 jaar start bij Bezoekerscentrum De Hoep. Rode bordjes met kaboutermutsjes wijzen de weg."
    },

    noodcontacten: {
      contact2Label: "Alternatief contact — Deanie",
      alarmLabel: "Alarmnummer",
      ziekenhuisLabel: "Ziekenhuis",
      apotheekLabel: "Apotheek",
      p1: "Kom je er ergens niet uit? Bel of app ons gerust, we helpen je graag verder."
    }
  },

  en: {
    meta: {
      title: "Guest Guide — Schuine Hondsbosschelaan 7, Heiloo",
      description: "Guest guide for Schuine Hondsbosschelaan 7 in Heiloo — everything you need to know about your stay."
    },
    skip: { tekst: "Skip to content" },
    header: { brand: "Our home in Heiloo", menuOpenLabel: "Open menu" },
    langSwitcher: { ariaLabel: "Choose language" },
    nav: {
      ariaLabel: "Sections in the guide",
      welkom: "Welcome",
      aankomst: "Arrival &amp; keys",
      checkin: "Check-in &amp; check-out",
      wifi: "Wifi &amp; electronics",
      keuken: "Kitchen &amp; appliances",
      badkamer: "Bathroom",
      verwarming: "Heating &amp; ventilation",
      tuin: "Garden &amp; outdoors",
      praktisch: "Practical &amp; household",
      afval: "Waste &amp; recycling",
      huisregels: "House rules",
      vervoer: "Transport &amp; area",
      buurt: "Neighbourhood tips",
      noodcontacten: "Emergency contacts"
    },
    search: {
      label: "Search the guide",
      placeholder: "Search a word, e.g. wifi...",
      resultsFound: "{n} result(s) found",
      noResults: "No results found"
    },
    hero: { alt: "The garden at Schuine Hondsbosschelaan 7" },
    closing: { alt: "The living room at Schuine Hondsbosschelaan 7" },
    backToTop: { label: "Back to top" },
    footer: { tekst: "Made with love by the van Tuijl family &middot; Schuine Hondsbosschelaan 7, Heiloo" },

    welkom: {
      p1: "Welcome to our home! A place where we ourselves love living, and we hope you'll enjoy it here just as much. Make yourself at home and enjoy the surroundings!",
      p2: "In this guide you'll find all the practical details about our house. We've also written down our favourite spots and activities in the area, so you can get the most out of your stay.",
      p3: "If you ever get stuck, just call or message us. We're happy to help.",
      p4: "Have a wonderful time and enjoy!<br><strong>The van Tuijl family</strong>",
      adresLabel: "Address",
      gastheerLabel: "Host",
      telefoonLabel: "Phone",
      emailLabel: "Email"
    },

    aankomst: {
      p1: "When you arrive, walk through the gate on the right-hand side of the house, where you'll find the key safe. You'll receive the exact location and access code for the key safe separately and personally from us, shortly before your arrival.",
      p2: "Inside the key safe you'll find the key to the back door. This is the entrance we ourselves always use. The same key also works for the two French doors leading from the living room to the garden. When you arrive, you'll find a second, spare key on the table.",
      p3: "You can park for free in the street. If all the spots are taken, which mostly happens in the evening, we ourselves park in the large car park at the end of the street, on the right just before the railway. You'll also find several electric car charging points there."
    },

    checkin: {
      p1: "The standard check-in time is <strong>15:00</strong>. Would you like to check in earlier? Just let us know in advance and we'll gladly see what's possible.",
      p2: "The standard check-out time is <strong>11:00</strong>. Would you like to check out later? We're happy to arrange this with you in advance too.",
      p3: "<strong>Departure checklist</strong> — before you leave, please:",
      li1: "Close the windows",
      li2: "Set the heating to 18 degrees",
      li3: "Put used bedding and towels in the washing machine at 60 degrees (with fabric softener) and start the machine — we'll take care of the rest",
      li4: "Empty the dishwasher: put cutlery and dishes neatly back in their place in the cupboards",
      li5: "Put the spare key back on the table",
      li6: "Put the bike keys back on the table",
      li7: "Hang the key back in the key safe",
      li8: "Empty the rubbish into the outdoor bins (see Waste &amp; recycling)",
      p4: "Feel free to leave a review in the guestbook — we're always curious to hear how you experienced your stay with us!"
    },

    wifi: {
      naamLabel: "Wifi name",
      wachtwoordLabel: "Wifi password",
      wachtwoordWaarde: "Sent to you separately and personally by us",
      p1: "<strong>TV (Samsung Frame)</strong> — the TV box is in the cabinet to the right of the TV; point the remote in that direction. The remote is simple and self-explanatory. At the bottom of the screen you'll see the icons for Netflix, Disney+ and Ziggo. Netflix and Disney+ are free to use; for live TV click on the Ziggo icon.",
      p2: "<strong>SONOS</strong> — in the living room there's a SONOS speaker and subwoofer connected to the TV. There's also a separate SONOS speaker mounted above the purple cabinet on the left. You can control the speakers in two ways:",
      li1: "Have an iPhone, iPad or Mac? Connect your device to our wifi, open your music app (Spotify, Apple Music or another app), tap the AirPlay icon and choose the speaker you want. No app or account needed.",
      li2: "Have an Android phone? Download the free Sonos app, connect to our wifi and you'll have direct access to the speakers.",
      p3: "You control the volume through the app."
    },

    keuken: {
      p1: "<strong>Dishwasher</strong> — we always use the eco setting, which is selected by default and takes about 3.5 hours. Want a faster programme? Press the third button from the left and you'll see the time adjust immediately. Dishwasher tablets are in the top drawer under the sink.",
      p2: "<strong>Oven</strong> — has two settings we use most. The setting at the 15:00 position is the fan-oven setting, handy for dishes that need to cook slowly and evenly. The setting at the 19:00 position gives direct top heat, handy for quickly finishing something like a pizza. Note: this works faster than you might be used to, so keep an eye on it.",
      p3: "<strong>Hob</strong> — gas hob with 5 burners.",
      p4: "<strong>Fridge &amp; freezer</strong> — in the kitchen, on the left, you'll find a fridge for everyday use. A second, larger fridge and freezer are in the shed.",
      p5: "<strong>Nespresso</strong> — fill the water tank at the back and switch the machine on. Wait until the lights stop flashing. Lift the lever up, insert a capsule and close the lever again. Place a cup underneath and press the small button for an espresso or the large button for a lungo — the machine stops automatically. Used capsules drop into the collection tray by themselves. On arrival you'll find capsules next to the machine; feel free to buy extra ones yourself if you need more. Want to make a cappuccino? There's also a milk frother available.",
      p6: "<strong>Other appliances</strong> — there's a kettle available, it's self-explanatory.",
      p7: "<strong>Where to find everything?</strong> In the drawer unit to the right of the fridge you'll find pots and lids at the bottom, breakfast plates/glasses/mugs/children's tableware in the second drawer, and cutlery and kitchen knives in the third and fourth drawers. Extra plates are in the left-hand cabinet of the kitchen island. In the purple cabinet you'll find wine, beer and water glasses, oven dishes at the bottom, dish/tea/kitchen towels on the bottom right, and placemats and tablecloths in the drawer. In the drawer under the oven you'll find the large pan lids, the kitchen grater and the measuring jug.",
      p8: "<strong>What can you use?</strong> All the cupboards may be opened, and you're welcome to freely use anything you find in them. We know ourselves how nice it is not having to buy everything again for a holiday. If something runs out or you use the last of it, we'd appreciate it if you replaced it."
    },

    badkamer: {
      p1: "<strong>Shower</strong> — has two settings. Turn the left tap up for the rain shower (it takes a moment for the water to warm up) or down for the handheld shower. Use the right tap to set the water temperature. There's a squeegee in the shower to dry the walls after showering.",
      p2: "<strong>Bath</strong> — has two taps. The top tap turns the water on and lets you choose between the bath tap and the shower head by turning it left or right. The bottom tap sets the water temperature.",
      p3: "<strong>Towels &amp; extras</strong> — extra towels are in a basket in the bathroom: small and large towels, washcloths and beach towels. Especially for children there's Zwitsal body wash and shampoo, and bath toys. For adults there's a lovely body foam. Hand soap and cream can be found in both the bathroom and the kitchen. There's also a hairdryer in the bathroom drawer, with space for your own toiletries.",
      p4: "Extra toilet rolls are on the toilet, in the little cabinets to the left and right above it — open these with the black handles. For little ones we have a toilet seat reducer and a step stool in the shed. Dirty nappies can go in a sealed bag straight into the grey bin at the side of the house."
    },

    verwarming: {
      p1: "<strong>Thermostat</strong> — hangs in the living room, to the right of the sliding doors. You can read the temperature on the display and adjust it with the arrow keys.",
      p2: "<strong>Fans</strong> — every bedroom has a fan. In the children's rooms you'll find one with four buttons on the back for on/off and the different settings.",
      p3: "In the master bedroom there's a <strong>Duux Whisper 3</strong>. You can control it using the buttons on the base or the remote control on the bedside table. It has 26 speed settings (adjustable via the dial on the base), a natural wind mode that mimics an outdoor breeze, and a timer function of up to 12 hours. The fan can rotate both horizontally and vertically for optimal air distribution."
    },

    tuin: {
      p1: "<strong>Plants</strong> — if you notice a plant needs water, feel free to water it. There's a watering can in or next to the shed. The bamboo at the back right can always use a bit of water. Don't get around to watering? No problem at all.",
      p2: "<strong>Outdoor lighting</strong> — the lights on the side of the house, by the front door and on the shed work automatically and switch on and off by themselves. You control the ambient lighting along the garden yourself: in the shed, right next to the entrance on the left, plug it into the socket to turn the lights on and unplug it to turn them off.",
      p3: "<strong>Garden furniture</strong> — on the veranda you'll find a full dining set for eating outside, and a white sofa to enjoy the evening sun, with cushions and blankets for outdoor use. In bad weather everything stays dry, so you don't need to bring anything in. We do ask you to leave the white sofa in its place; if it gets a stain, please treat it quickly with the stain remover from the kitchen. You're free to move and use the rest of the garden furniture. The garden also has a playhouse with extra toys for children.",
      p4: "<strong>Bikes</strong> — all the bikes are available, the keys are on the table when you arrive. There's an electric women's bike with a child seat on the back: activate it with the button on the top right of the control panel and set the assistance level with the + and - buttons. The range is around 15–20 km, so charge the battery before you leave (the charger is on the right on the workbench in the shed — it's best to plug it in the evening before, as it charges slowly). There's also a regular women's bike, a men's bike, a mountain bike for children aged 7–12, and a girl's bike for children aged 5–7."
    },

    praktisch: {
      p1: "<strong>Fuse box</strong> — located in the hallway, to the right of the front door, in the white cabinet. Has a fuse tripped? The relevant black switch will be down — flip it back up to restore power to that circuit.",
      p2: "<strong>Cleaning supplies</strong> — are in the kitchen (middle drawer, at the bottom): cleaning products for the floor, kitchen and toilet, and a dustpan and brush. Please use whatever you need. You'll find a bucket and mop in the cellar.",
      p3: "<strong>Tools</strong> — in the shed, on the right, you'll find a large workbench with drawers. The top right-hand drawer holds a basic tool set.",
      p4: "<strong>Toys &amp; beach gear</strong> — in the children's bedrooms, in the playhouse and in the shed (duplo and craft supplies) you'll find plenty of toys and books. The shed also has outdoor toys and beach gear: wetsuits for swimming in the sea (two sizes), a beach mat, parasol and windbreak. Feel free to take whatever you find useful and fun!"
    },

    afval: {
      p1: "In Heiloo we sort all our waste. In the large beige bin in the kitchen there are two compartments: one for grey general waste and one for plastic packaging and cans. Next to the bin is a smaller bin for vegetable and fruit waste. Bin bags are in the top drawer under the sink.",
      p2: "Is a bin full? Empty it into the large outdoor bins to the left of the house: standing in front of the house, walk left towards the neighbours' entrance — the bins are there, against our house on the right. Each bin has a coloured lid:",
      li1: "<strong>Grey</strong> = general waste",
      li2: "<strong>Orange</strong> = plastic, packaging and cans",
      li3: "<strong>Green</strong> = fruit and vegetable waste",
      p3: "The bins are put out on the street for collection on fixed days. Since this varies week to week, we'll let you know the schedule for your stay. Paper goes separately in the shed, we take it with us when we're back. Glass can be dropped off at the bottle banks near the shopping centre nearby."
    },

    huisregels: {
      p1: "<strong>Smoking</strong> — is not allowed anywhere in or around the house.",
      p2: "<strong>Pets</strong> — are unfortunately not allowed.",
      p3: "<strong>Other rules</strong> — please be kind to our neighbours :)"
    },

    vervoer: {
      p1: "<strong>Parking</strong> — you can park for free in the street. If all the spots are taken, which mostly happens in the evening, we ourselves park in the large car park at the end of the street, on the right just before the railway, where there are also several electric car charging points.",
      p2: "<strong>Public transport</strong> — NS Station Heiloo is about a 10-minute walk from the house. From there you can travel direct to Amsterdam Centraal in 30 minutes and to Alkmaar in 5 minutes. You'll find travel times and tickets at <strong>ns.nl</strong>; tickets can also be bought at the machine at the station, on the right before the platform."
    },

    buurt: {
      p1: "When you arrive you'll also find a sheet with tips about the area. Below are a few of our favourites.",
      p2: "<strong>Groceries</strong> — we ourselves always go to the Albert Heijn in the 't Loo shopping centre, a 5-minute walk away. In the same shopping centre you'll also find a lovely bakery, butcher, cheese shop and fishmonger.",
      p3: "<strong>Restaurant Nieuw Westert</strong> — highly recommended, especially for families. Beautifully located in the dunes, with a large terrace and a fun playground for the kids. Combine it with a walk through the dunes for a lovely day out. By bike it's 20–25 minutes away, and there's plenty of parking.",
      p4: "<strong>IJssalon Fiorentina</strong> — not to be missed during your stay. A few minutes' walk away you'll find one of the tastiest ice cream parlours in the Netherlands. There's often a queue, but it moves quickly and is well worth it.",
      p5: "<strong>Club Zand &amp; Strand Deining (Castricum)</strong> — the beach at Castricum is well worth a visit, with a large car park and a lovely beach. Here you'll also find two of our favourite beach clubs: good food and a wonderful terrace.",
      p6: "<strong>Zwembad Baafje</strong> — a lovely outdoor swimming pool within cycling distance, with two children's pools and a large sports pool with diving boards, surrounded by grass fields and a playground.",
      p7: "<strong>Klimduin Schoorl</strong> — in the Schoorl nature reserve you can enjoy lovely walks and bike rides. This climbing dune is special for children to see, and even more fun to run down. At the bottom you'll find several restaurants with terraces.",
      p8: "<strong>Kaboutertocht (Gnome Trail, ages 4–6)</strong> — set off like a real gnome in the Noordhollands Duinreservaat. This short walk (2 km) for children aged 4 to 6 starts at the De Hoep visitor centre. Red signs with little gnome hats show the way."
    },

    noodcontacten: {
      contact2Label: "Alternative contact — Deanie",
      alarmLabel: "Emergency number",
      ziekenhuisLabel: "Hospital",
      apotheekLabel: "Pharmacy",
      p1: "If you ever get stuck, just call or message us, we're happy to help further."
    }
  },

  de: {
    meta: {
      title: "Gästehandbuch — Schuine Hondsbosschelaan 7, Heiloo",
      description: "Gästehandbuch für die Schuine Hondsbosschelaan 7 in Heiloo — alles, was du über deinen Aufenthalt wissen musst."
    },
    skip: { tekst: "Zum Inhalt springen" },
    header: { brand: "Unser Haus in Heiloo", menuOpenLabel: "Menü öffnen" },
    langSwitcher: { ariaLabel: "Sprache wählen" },
    nav: {
      ariaLabel: "Abschnitte der Anleitung",
      welkom: "Willkommen",
      aankomst: "Ankunft &amp; Schlüssel",
      checkin: "Check-in &amp; Check-out",
      wifi: "WLAN &amp; Elektronik",
      keuken: "Küche &amp; Geräte",
      badkamer: "Badezimmer",
      verwarming: "Heizung &amp; Lüftung",
      tuin: "Garten &amp; draußen",
      praktisch: "Praktisches &amp; Haushalt",
      afval: "Abfall &amp; Recycling",
      huisregels: "Hausregeln",
      vervoer: "Verkehr &amp; Umgebung",
      buurt: "Tipps für die Umgebung",
      noodcontacten: "Notfallkontakte"
    },
    search: {
      label: "In der Anleitung suchen",
      placeholder: "Suche ein Wort, z. B. WLAN...",
      resultsFound: "{n} Ergebnis(se) gefunden",
      noResults: "Keine Ergebnisse gefunden"
    },
    hero: { alt: "Der Garten der Schuine Hondsbosschelaan 7" },
    closing: { alt: "Das Wohnzimmer der Schuine Hondsbosschelaan 7" },
    backToTop: { label: "Nach oben" },
    footer: { tekst: "Mit Liebe gemacht von Familie van Tuijl &middot; Schuine Hondsbosschelaan 7, Heiloo" },

    welkom: {
      p1: "Willkommen in unserem Haus! Ein Ort, an dem wir selbst sehr gerne wohnen, und wir hoffen, dass ihr euch hier genauso wohlfühlt. Fühl dich wie zu Hause und genieße die Umgebung!",
      p2: "In dieser Anleitung findest du alle praktischen Informationen über unser Haus. Außerdem haben wir unsere liebsten Orte und Aktivitäten in der Umgebung für dich aufgeschrieben, damit du das Beste aus deinem Aufenthalt herausholen kannst.",
      p3: "Falls du mal nicht weiterweißt, ruf uns einfach an oder schreib uns. Wir helfen dir gerne.",
      p4: "Viel Spaß und genieß deinen Aufenthalt!<br><strong>Familie van Tuijl</strong>",
      adresLabel: "Adresse",
      gastheerLabel: "Gastgeber",
      telefoonLabel: "Telefon",
      emailLabel: "E-Mail"
    },

    aankomst: {
      p1: "Bei deiner Ankunft gehst du durch die Tordurchfahrt an der rechten Seite des Hauses, dort findest du den Schlüsseltresor. Den genauen Standort und den Zugangscode des Schlüsseltresors bekommst du separat und persönlich von uns, kurz vor deiner Ankunft.",
      p2: "Im Schlüsseltresor findest du den Schlüssel für die Hintertür. Das ist der Eingang, den wir selbst immer benutzen. Derselbe Schlüssel passt auch auf die beiden Terrassentüren vom Wohnzimmer zum Garten. Bei deiner Ankunft liegt auf dem Tisch außerdem ein zweiter Ersatzschlüssel.",
      p3: "In der Straße kannst du kostenlos parken. Sollten alle Plätze belegt sein, was vor allem abends vorkommen kann, parken wir selbst immer auf dem großen Parkplatz am Ende der Straße, rechts vor der Bahnstrecke. Dort findest du auch mehrere Ladepunkte für Elektroautos."
    },

    checkin: {
      p1: "Die reguläre Check-in-Zeit ist <strong>15:00 Uhr</strong>. Möchtest du früher einchecken? Sprich das einfach vorher kurz mit uns ab, dann schauen wir gerne, was möglich ist.",
      p2: "Die reguläre Check-out-Zeit ist <strong>11:00 Uhr</strong>. Möchtest du später auschecken? Auch das sprechen wir gerne vorher mit dir ab.",
      p3: "<strong>Checkliste für die Abreise</strong> — bevor du abreist, bitten wir dich:",
      li1: "Fenster zu schließen",
      li2: "Die Heizung auf 18 Grad zu stellen",
      li3: "Benutzte Bettwäsche und Handtücher bei 60 Grad (mit Weichspüler) in die Waschmaschine zu geben und die Maschine zu starten — den Rest übernehmen wir",
      li4: "Die Spülmaschine auszuräumen: Besteck und Geschirr wieder ordentlich an seinen Platz in den Schränken zu legen",
      li5: "Den Ersatzschlüssel wieder auf den Tisch zu legen",
      li6: "Die Fahrradschlüssel wieder auf den Tisch zu legen",
      li7: "Den Schlüssel wieder in den Schlüsseltresor zu hängen",
      li8: "Den Müll in die Außentonnen zu bringen (siehe Abfall &amp; Recycling)",
      p4: "Lass gerne eine Bewertung im Gästebuch da — wir sind immer gespannt, wie du deinen Aufenthalt bei uns erlebt hast!"
    },

    wifi: {
      naamLabel: "WLAN-Name",
      wachtwoordLabel: "WLAN-Passwort",
      wachtwoordWaarde: "Bekommst du separat und persönlich von uns",
      p1: "<strong>Fernseher (Samsung Frame)</strong> — die Box des Fernsehers steht im Schrank rechts vom TV; richte die Fernbedienung dorthin. Die Fernbedienung ist einfach und selbsterklärend. Unten im Bild siehst du die Symbole von Netflix, Disney+ und Ziggo. Netflix und Disney+ kannst du frei nutzen, für Live-TV klickst du auf das Ziggo-Symbol.",
      p2: "<strong>SONOS</strong> — im Wohnzimmer stehen ein SONOS-Lautsprecher und ein Subwoofer, die mit dem Fernseher verbunden sind. Außerdem hängt links oberhalb des lila Schranks ein einzelner SONOS-Lautsprecher. Die Lautsprecher kannst du auf zwei Arten bedienen:",
      li1: "Hast du ein iPhone, iPad oder einen Mac? Verbinde dein Gerät mit unserem WLAN, öffne deine Musik-App (Spotify, Apple Music oder eine andere App), tippe auf das AirPlay-Symbol und wähle den gewünschten Lautsprecher aus. Keine App oder Konto nötig.",
      li2: "Hast du ein Android-Handy? Lade dir die kostenlose Sonos-App herunter, verbinde dich mit unserem WLAN und du hast direkten Zugriff auf die Lautsprecher.",
      p3: "Die Lautstärke regelst du über die App."
    },

    keuken: {
      p1: "<strong>Spülmaschine</strong> — wir verwenden immer das Eco-Programm, das standardmäßig ausgewählt ist und etwa 3,5 Stunden dauert. Möchtest du ein schnelleres Programm? Drücke dann die dritte Taste von links, die Zeit passt sich sofort an. Spülmaschinentabs liegen in der obersten Schublade unter dem Spülbecken.",
      p2: "<strong>Backofen</strong> — hat zwei Einstellungen, die wir am meisten nutzen. Die Einstellung auf der 15:00-Uhr-Position ist die Heißluft-Stufe, praktisch für Gerichte, die ruhig und gleichmäßig garen sollen. Die Einstellung auf der 19:00-Uhr-Position gibt direkte Oberhitze, praktisch, um etwas schnell zu überbacken, wie zum Beispiel eine Pizza. Achtung: Das geht schneller als du vielleicht gewohnt bist, behalte es also gut im Auge.",
      p3: "<strong>Kochfeld</strong> — Gasherd mit 5 Flammen.",
      p4: "<strong>Kühlschrank &amp; Gefrierschrank</strong> — in der Küche findest du links einen Kühlschrank für den täglichen Gebrauch. Ein zweiter, größerer Kühl- und Gefrierschrank steht im Schuppen.",
      p5: "<strong>Nespresso</strong> — fülle den Wassertank an der Rückseite auf und schalte das Gerät ein. Warte, bis die Lämpchen aufhören zu blinken. Klappe den Hebel hoch, lege eine Kapsel ein und klappe den Hebel wieder herunter. Stelle eine Tasse darunter und drücke die kleine Taste für einen Espresso oder die große Taste für einen Lungo — das Gerät stoppt automatisch. Gebrauchte Kapseln fallen von selbst in den Auffangbehälter. Bei deiner Ankunft liegen Kapseln neben dem Gerät; du darfst gerne selbst welche nachkaufen, falls du mehr brauchst. Möchtest du einen Cappuccino machen? Es ist auch ein Milchaufschäumer vorhanden.",
      p6: "<strong>Weitere Geräte</strong> — ein Wasserkocher ist vorhanden, er erklärt sich von selbst.",
      p7: "<strong>Wo findest du alles?</strong> Im Schubladenschrank rechts vom Kühlschrank findest du unten Töpfe und Deckel, in der zweiten Schublade Frühstücksteller/Gläser/Becher/Kindergeschirr und in der dritten und vierten Schublade Besteck und Kochmesser. Im linken Schrank der Kochinsel liegen zusätzliche Teller. Im lila Schrank findest du Wein-, Bier- und Wassergläser, unten die Auflaufformen, rechts unten Geschirr-, Tee- und Küchentücher und in der Schublade Platzsets und Tischdecken. In der Schublade unter dem Backofen liegen die großen Topfdeckel, die Küchenreibe und der Messbecher.",
      p8: "<strong>Was darfst du benutzen?</strong> Alle Schränke dürfen geöffnet werden, und alles, was du darin findest, darfst du frei benutzen. Wir wissen selbst, wie schön es ist, für einen Urlaub nicht alles neu einkaufen zu müssen. Ist etwas leer oder der letzte Rest? Wir freuen uns, wenn du es ersetzt."
    },

    badkamer: {
      p1: "<strong>Dusche</strong> — hat zwei Einstellungen. Drehe den linken Hahn nach oben für die Regendusche (es dauert einen Moment, bis das Wasser warm ist) oder nach unten für die Handbrause. Mit dem rechten Hahn stellst du die Wassertemperatur ein. In der Dusche hängt ein Abzieher, um die Wände nach dem Duschen trocken zu wischen.",
      p2: "<strong>Badewanne</strong> — hat zwei Hähne. Mit dem oberen Hahn stellst du das Wasser an und wählst durch Drehen nach links oder rechts zwischen Wannenauslauf und Duschkopf. Mit dem unteren Hahn stellst du die Wassertemperatur ein.",
      p3: "<strong>Handtücher &amp; Extras</strong> — extra Handtücher findest du in einem Korb im Badezimmer: kleine und große Handtücher, Waschlappen und Strandtücher. Speziell für Kinder gibt es Zwitsal-Duschgel und -Shampoo sowie Badespielzeug. Für Erwachsene gibt es einen schönen Duschschaum. Handseife und Creme findest du sowohl im Badezimmer als auch in der Küche. Im Badezimmerschrank liegt außerdem ein Föhn, mit Platz für deine eigenen Toilettenartikel.",
      p4: "Zusätzliches Toilettenpapier liegt auf der Toilette, in den Schränkchen links und rechts über dem WC — öffne diese mit den schwarzen Griffen. Für die Kleinen haben wir im Schuppen einen WC-Sitzverkleinerer und einen Toilettenhocker. Volle Windeln kannst du in einer verschlossenen Tüte direkt in die graue Tonne an der Seite des Hauses werfen."
    },

    verwarming: {
      p1: "<strong>Thermostat</strong> — hängt im Wohnzimmer, rechts von den Schiebetüren. Die Temperatur liest du am Display ab und stellst sie mit den Pfeiltasten ein.",
      p2: "<strong>Ventilatoren</strong> — in jedem Schlafzimmer steht ein Ventilator. In den Kinderzimmern findest du einen mit vier Tasten auf der Rückseite für an/aus und die verschiedenen Stufen.",
      p3: "Im Master-Schlafzimmer steht ein <strong>Duux Whisper 3</strong>. Diesen bedienst du über die Tasten am Fuß oder über die Fernbedienung auf dem Nachttisch. Er hat 26 Geschwindigkeitsstufen (einstellbar über den Drehregler am Fuß), eine natürliche Windstufe, die eine Brise im Freien nachahmt, und eine Timerfunktion bis zu 12 Stunden. Der Ventilator kann sich sowohl horizontal als auch vertikal drehen, für eine optimale Luftverteilung."
    },

    tuin: {
      p1: "<strong>Pflanzen</strong> — wenn du siehst, dass eine Pflanze Wasser braucht, gieße sie gerne. Im oder neben dem Schuppen steht eine Gießkanne. Der Bambus hinten rechts kann immer etwas Wasser gebrauchen. Gießt du nicht? Auch kein Problem.",
      p2: "<strong>Außenbeleuchtung</strong> — die Beleuchtung an der Seite des Hauses, bei der Haustür und am Schuppen funktioniert automatisch und schaltet sich von selbst ein und aus. Die Stimmungsbeleuchtung entlang des Gartens bedienst du selbst: im Schuppen, direkt links am Eingang, steckst du den Stecker in die Steckdose, um das Licht anzuschalten, und ziehst ihn heraus, um es auszuschalten.",
      p3: "<strong>Gartenmöbel</strong> — auf der Veranda findest du eine vollständige Sitzecke, um auch draußen zu essen, sowie ein weißes Sofa, um die Abendsonne zu genießen, mit Kissen und Decken für draußen. Bei schlechtem Wetter bleibt alles trocken, du musst also nichts hereinholen. Wir bitten dich, das weiße Sofa an seinem Platz zu lassen; sollte ein Fleck entstehen, behandle ihn bitte schnell mit dem Fleckenmittel aus der Küche. Die übrigen Gartenmöbel darfst du frei verschieben und benutzen. Der Garten hat außerdem ein Spielhaus mit zusätzlichem Spielzeug für Kinder.",
      p4: "<strong>Fahrräder</strong> — alle Fahrräder stehen zur Verfügung, die Schlüssel liegen bei deiner Ankunft auf dem Tisch. Es gibt ein elektrisches Damenrad mit Kindersitz hinten: Aktiviere es mit dem Knopf oben rechts am Bedienfeld und stelle mit den + und - Tasten die Unterstützungsstufe ein. Die Reichweite beträgt etwa 15–20 km, lade den Akku also vor der Abreise auf (das Ladegerät liegt rechts auf der Werkbank im Schuppen — schließe es am besten schon einen Abend vorher an, da es langsam lädt). Außerdem gibt es ein normales Damenrad, ein Herrenrad, ein Mountainbike für Kinder von 7–12 Jahren und ein Mädchenrad für Kinder von 5–7 Jahren."
    },

    praktisch: {
      p1: "<strong>Sicherungskasten</strong> — befindet sich im Flur, rechts von der Haustür, im weißen Schrank. Ist eine Sicherung herausgesprungen? Dann steht der betreffende schwarze Schalter unten — klick ihn nach oben, um die Gruppe wiederherzustellen.",
      p2: "<strong>Putzmittel</strong> — stehen in der Küche (mittlere Schublade, ganz unten): Reinigungsmittel für Boden, Küche und WC sowie Kehrblech und Handfeger. Benutze einfach, was du brauchst. Im Keller findest du Eimer und Wischmopp.",
      p3: "<strong>Werkzeug</strong> — im Schuppen findest du rechts eine große Werkbank mit Schubladen. In der obersten rechten Schublade liegt ein einfaches Werkzeug-Set.",
      p4: "<strong>Spielzeug &amp; Strandsachen</strong> — in den Kinderzimmern, im Spielhaus und im Schuppen (Duplo und Bastelsachen) findest du genug Spielzeug und Bücher. Im Schuppen liegen außerdem Außenspielzeug und Strandsachen: Neoprenanzüge zum Schwimmen im Meer (zwei Größen), eine Strandmatte, ein Sonnenschirm und ein Windschutz. Nimm einfach mit, was du praktisch und schön findest!"
    },

    afval: {
      p1: "In Heiloo trennen wir den gesamten Müll. In der großen beigen Mülltonne in der Küche befinden sich zwei Fächer: eines für grauen Restmüll und eines für Plastikverpackungen und Dosen. Neben der Mülltonne steht ein kleinerer Behälter für Obst- und Gemüseabfälle. Müllbeutel liegen in der obersten Schublade unter dem Spülbecken.",
      p2: "Ist eine Tonne voll? Leere sie dann in die großen Außentonnen links vom Haus: Wenn du vor dem Haus stehst, gehe nach links Richtung Eingang der Nachbarn — die Tonnen stehen dort rechts an unserem Haus. Jede Tonne hat einen farbigen Deckel:",
      li1: "<strong>Grau</strong> = Restmüll",
      li2: "<strong>Orange</strong> = Plastik, Verpackungen und Dosen",
      li3: "<strong>Grün</strong> = Obst- und Gemüseabfälle",
      p3: "Die Tonnen werden an festen Tagen zur Straße gestellt, um geleert zu werden. Da dies wöchentlich unterschiedlich ist, stimmen wir das für deinen Aufenthalt mit dir ab. Papier legst du separat in den Schuppen, das nehmen wir mit, wenn wir zurück sind. Glas kannst du in den Glascontainern beim nahegelegenen Einkaufszentrum entsorgen."
    },

    huisregels: {
      p1: "<strong>Rauchen</strong> — ist im und um das Haus herum nicht erlaubt.",
      p2: "<strong>Haustiere</strong> — sind leider nicht erlaubt.",
      p3: "<strong>Weitere Regeln</strong> — sei bitte nett zu unseren Nachbarn :)"
    },

    vervoer: {
      p1: "<strong>Parken</strong> — in der Straße kannst du kostenlos parken. Sollten alle Plätze belegt sein, was vor allem abends vorkommen kann, parken wir selbst immer auf dem großen Parkplatz am Ende der Straße, rechts vor der Bahnstrecke, wo es auch mehrere Ladepunkte für Elektroautos gibt.",
      p2: "<strong>Öffentliche Verkehrsmittel</strong> — der Bahnhof NS Station Heiloo liegt etwa 10 Gehminuten vom Haus entfernt. Von dort erreichst du in 30 Minuten direkt Amsterdam Centraal und in 5 Minuten Alkmaar. Fahrzeiten und Tickets findest du auf <strong>ns.nl</strong>; Tickets kannst du auch am Automaten am Bahnhof kaufen, rechts vor dem Bahnsteig."
    },

    buurt: {
      p1: "Bei deiner Ankunft findest du außerdem ein Blatt mit Tipps für die Umgebung. Hier schon einmal unsere Favoriten.",
      p2: "<strong>Einkaufen</strong> — wir selbst gehen immer zum Albert Heijn im Einkaufszentrum 't Loo, 5 Gehminuten entfernt. Im selben Einkaufszentrum findest du außerdem einen schönen Bäcker, Metzger, Käseladen und Fischladen.",
      p3: "<strong>Restaurant Nieuw Westert</strong> — sehr empfehlenswert, besonders für Familien. Liegt wunderschön in den Dünen, mit einer großen Terrasse und einem schönen Spielplatz für die Kinder. Kombiniere es mit einem Spaziergang durch die Dünen für einen schönen Tagesausflug. Mit dem Fahrrad bist du in 20–25 Minuten dort, und es gibt ausreichend Parkplätze.",
      p4: "<strong>IJssalon Fiorentina</strong> — solltest du während deines Aufenthalts nicht verpassen. Ein paar Gehminuten entfernt findest du eine der leckersten Eisdielen der Niederlande. Es steht oft eine Schlange, aber sie geht schnell voran und ist die Wartezeit mehr als wert.",
      p5: "<strong>Club Zand &amp; Strand Deining (Castricum)</strong> — der Strand von Castricum ist einen Besuch wert, mit einem großen Parkplatz und schönem Strand. Hier findest du auch zwei unserer liebsten Strandlokale: gutes Essen und eine herrliche Terrasse.",
      p6: "<strong>Zwembad Baafje</strong> — ein sehr schönes Freibad in Fahrradentfernung, mit zwei Kinderbecken und einem großen Sportbecken mit Sprungbrettern, umgeben von Grünflächen und einem Spielplatz.",
      p7: "<strong>Klimduin Schoorl</strong> — im Naturgebiet von Schoorl kannst du herrlich wandern und Rad fahren. Diese Kletterdüne ist für Kinder besonders sehenswert, und macht noch mehr Spaß zum Herunterlaufen. Unten findest du verschiedene Restaurants mit Terrassen.",
      p8: "<strong>Kaboutertocht (Zwergenpfad, 4–6 Jahre)</strong> — mach dich wie ein echter Zwerg auf den Weg im Noordhollands Duinreservaat. Diese kurze Wanderung (2 km) für Kinder von 4 bis 6 Jahren startet beim Besucherzentrum De Hoep. Rote Schilder mit Zwergenmützen weisen den Weg."
    },

    noodcontacten: {
      contact2Label: "Alternativer Kontakt — Deanie",
      alarmLabel: "Notrufnummer",
      ziekenhuisLabel: "Krankenhaus",
      apotheekLabel: "Apotheke",
      p1: "Falls du mal nicht weiterweißt, ruf uns einfach an oder schreib uns, wir helfen dir gerne weiter."
    }
  }

};
