let sentencesByCase = {
  nominative: [
{ text: "Der alt___ Mann ist Zuhause.", blanks: [1], correctEndings: ["e"] },
{ text: "Das neu___ Auto ist schnell.", blanks: [1], correctEndings: ["e"] },
{ text: "Die klein___ Katze schläft.", blanks: [1], correctEndings: ["e"] },
{ text: "Das groß___ Haus ist leer.", blanks: [1], correctEndings: ["e"] },
{ text: "Die jung___ Frau ist Ärztin.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein dunkel___ Himmel kündigt Regen an.", blanks: [1], correctEndings: ["er"] },
{ text: "Die bunt___ Blumen duften schön.", blanks: [1], correctEndings: ["en"] },
{ text: "Der klein___ Hund bellt.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein alt___ Baum steht im Garten.", blanks: [1], correctEndings: ["er"] },
{ text: "Die rund___ Uhr hängt an der Wand.", blanks: [1], correctEndings: ["e"] },
{ text: "Der grün___ Apfel ist sauer.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein schnell___ Pferd galoppiert über das Feld.", blanks: [1], correctEndings: ["es"] },
{ text: "Kalt___ Wasser erfrischt im Sommer.", blanks: [1], correctEndings: ["es"] },
{ text: "Die leis___ Musik klingt beruhigend.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein fröhlich___ Vogel singt am Morgen.", blanks: [1], correctEndings: ["er"] },
{ text: "Das weit___ Meer ist beeindruckend.", blanks: [1], correctEndings: ["e"] },
{ text: "Schön___ Blumen wachsen im Garten.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein klug___ Schüler beantwortet die Frage.", blanks: [1], correctEndings: ["er"] },
{ text: "Warm___ Sonnenstrahlen wärmen das Gesicht.", blanks: [1], correctEndings: ["e"] },
{ text: "Die hell___ Lampe erleuchtet das Zimmer.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein interessant___ Buch liegt auf dem Tisch.", blanks: [1], correctEndings: ["es"] },
{ text: "Klein___ Kinder spielen im Park.", blanks: [1], correctEndings: ["e"] },
{ text: "Das kalt___ Eis schmilzt schnell.", blanks: [1], correctEndings: ["e"] },
{ text: "Eine müd___ Katze gähnt.", blanks: [1], correctEndings: ["e"] },
{ text: "Frisch___ Brot duftet köstlich.", blanks: [1], correctEndings: ["es"] },
{ text: "Der laut___ Lärm stört die Nachbarn.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein neu___ Jahr beginnt bald.", blanks: [1], correctEndings: ["es"] },
{ text: "Dunkl___ Wolken verdecken die Sonne.", blanks: [1], correctEndings: ["e"] },
{ text: "Die heiß___ Suppe dampft in der Schüssel.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein talentiert___ Künstler malt ein Bild.", blanks: [1], correctEndings: ["er"] },
{ text: "Rot___ Äpfel hängen am Baum.", blanks: [1], correctEndings: ["e"] },
{ text: "Das modern___ Gebäude fasziniert die Besucher.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein lustig___ Witz bringt alle zum Lachen.", blanks: [1], correctEndings: ["er"] },
{ text: "Still___ Straßen liegen im Mondlicht.", blanks: [1], correctEndings: ["e"] },
{ text: "Die weiß___ Schokolade schmeckt süß.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein kreativ___ Gedanke kommt unerwartet.", blanks: [1], correctEndings: ["er"] },
{ text: "Glücklich___ Kinder lachen beim Spielen.", blanks: [1], correctEndings: ["e"] },
{ text: "Das tief___ Meer birgt viele Geheimnisse.", blanks: [1], correctEndings: ["e"] },
{ text: "Eine klar___ Nacht zeigt viele Sterne.", blanks: [1], correctEndings: ["e"] },
{ text: "Breit___ Straßen führen durch die Stadt.", blanks: [1], correctEndings: ["e"] },
{ text: "Der langsam___ Fluss fließt durch das Tal.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein farbenfroh___ Bild hängt an der Wand.", blanks: [1], correctEndings: ["es"] },
{ text: "Saub___ Fenster glänzen in der Sonne.", blanks: [1], correctEndings: ["ere"] },
{ text: "Die kalt___ Luft belebt die Sinne.", blanks: [1], correctEndings: ["e"] },
{ text: "Ein stark___ Wind weht über das Land.", blanks: [1], correctEndings: ["er"] }
  // ... more nominative sentences
  ],
  accusative: [
{ text: "Ich sehe den alt___ Mann.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich kenne einen gut___ Freund.", blanks: [1], correctEndings: ["en"] },
{ text: "Kannst du das neu___ Auto sehen?", blanks: [1], correctEndings: ["e"] },
{ text: "Wir haben einen interessant___ Film gesehen.", blanks: [1], correctEndings: ["en"] },
{ text: "Er liest ein spannend___ Buch.", blanks: [1], correctEndings: ["es"] },
{ text: "Sie trägt ein schön___ Kleid.", blanks: [1], correctEndings: ["es"] },
{ text: "Ich möchte einen frisch___ Salat bestellen.", blanks: [1], correctEndings: ["en"] },
{ text: "Er hat einen lang___ Brief geschrieben.", blanks: [1], correctEndings: ["en"] },
{ text: "Kann ich bitte das groß___ Glas Wasser haben?", blanks: [1], correctEndings: ["e"] },
{ text: "Sie sucht einen neu___ Job.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir besuchen unseren alt___ Lehrer.", blanks: [1], correctEndings: ["en"] },
{ text: "Er hat einen teuer___ Mantel gekauft.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich trinke gern frisch___ Orangensaft.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie hat ein bunt___ Kleid an.", blanks: [1], correctEndings: ["es"] },
{ text: "Ich brauche einen stark___ Kaffee.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie hat einen alt___ Hund adoptiert.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich esse einen belegt___ Bagel zum Frühstück.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie liebt ihre neu___ Schuhe.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir hören einen laut___ Knall.", blanks: [1], correctEndings: ["en"] },
{ text: "Kannst du mir das klein___ Messer geben?", blanks: [1], correctEndings: ["e"] },
{ text: "Er fährt einen schnell___ Sportwagen.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich kaufe das rot___ Buch.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie findet einen interessant___ Artikel.", blanks: [1], correctEndings: ["en"] },
{ text: "Er sieht einen groß___ Vogel.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir bestellen eine kalt___ Limonade.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie trägt die schön___ Kette.", blanks: [1], correctEndings: ["e"] },
{ text: "Ich lese einen spannend___ Roman.", blanks: [1], correctEndings: ["en"] },
{ text: "Er kauft ein neu___ Hemd.", blanks: [1], correctEndings: ["es"] },
{ text: "Wir bewundern das modern___ Gemälde.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie probiert einen lecker___ Kuchen.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich trage einen warm___ Mantel.", blanks: [1], correctEndings: ["en"] },
{ text: "Er fährt das schnell___ Motorrad.", blanks: [1], correctEndings: ["e"] },
{ text: "Wir sehen einen alt___ Film.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie liebt ihren klein___ Hund.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich esse den frisch___ Apfel.", blanks: [1], correctEndings: ["en"] },
{ text: "Er trägt den schwer___ Rucksack.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir genießen das gut___ Essen.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie kauft eine teuer___ Uhr.", blanks: [1], correctEndings: ["e"] },
{ text: "Ich benutze das scharf___ Messer.", blanks: [1], correctEndings: ["e"] },
{ text: "Er träumt von einem lang___ Urlaub.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir hören das laut___ Konzert.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie liest eine interessant___ Zeitschrift.", blanks: [1], correctEndings: ["e"] },
{ text: "Ich trinke den heiß___ Tee.", blanks: [1], correctEndings: ["en"] },
{ text: "Er öffnet ein neu___ Fenster.", blanks: [1], correctEndings: ["es"] },
{ text: "Wir besichtigen das alt___ Schloss.", blanks: [1], correctEndings: ["e"] },
{ text: "Sie schenkt ihm ein wertvoll___ Geschenk.", blanks: [1], correctEndings: ["es"] }
    // ... more accusative sentences
  ],
  dative: [
{ text: "Ich gebe dem alt___ Mann ein Buch.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich helfe dem jung___ Mann über die Straße.", blanks: [1], correctEndings: ["en"] },
{ text: "Er antwortet dem neu___ Mitarbeiter.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie gibt dem alt___ Hund zu essen.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir stehen dem verärgert___ Chef gegenüber.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich danke dem freundlich___ Kellner.", blanks: [1], correctEndings: ["en"] },
{ text: "Er folgt dem langsam___ Auto vor ihm.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie schreibt dem bekannt___ Autor einen Brief.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir schenken dem glücklich___ Paar einen Blumenstrauß.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich leihe dem aufgeregt___ Studenten mein Buch.", blanks: [1], correctEndings: ["en"] },
{ text: "Er widerspricht dem ernst___ Professor.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie hilft dem fleißig___ Praktikanten.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich stehe neben dem groß___ Gebäude.", blanks: [1], correctEndings: ["en"] },
{ text: "Er kommt aus dem klein___ Dorf.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie vertraut dem erfahren___ Berater.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir lauschen dem spannend___ Vortrag.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich gratuliere dem alt___ Jubilar zum Geburtstag.", blanks: [1], correctEndings: ["en"] },
{ text: "Er entnimmt dem kochend___ Topf die Nudeln.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie widmet dem krank___ Kind mehr Aufmerksamkeit.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir folgen der hübsch___ Melodie.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich schulde dem geduldig___ Lehrer Dank.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich gebe dem klein___ Kind einen Ball.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir antworten dem freundlich___ Kunden.", blanks: [1], correctEndings: ["en"] },
{ text: "Er hilft dem alt___ Nachbarn mit den Einkäufen.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie erzählt dem interessiert___ Publikum eine Geschichte.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich schenke dem glücklich___ Gewinner einen Preis.", blanks: [1], correctEndings: ["en"] },
{ text: "Er zeigt dem verwirrt___ Touristen den Weg.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir folgen dem erfahren___ Führer durch den Wald.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie dankt dem aufmerksam___ Zuhörer.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich überreiche dem erfolgreich___ Athleten eine Medaille.", blanks: [1], correctEndings: ["en"] },
{ text: "Er widmet dem talentiert___ Musiker Applaus.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir helfen dem müd___ Wanderer.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie steht neben dem riesig___ Baum.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich bringe dem hungrig___ Hund Futter.", blanks: [1], correctEndings: ["en"] },
{ text: "Er leiht dem jung___ Kollegen ein Buch.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir vertrauen dem sachkundig___ Experten.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie zeigt dem neugierig___ Kind die Sterne.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich erkläre dem verwundert___ Schüler das Problem.", blanks: [1], correctEndings: ["en"] },
{ text: "Er gibt dem durstig___ Sportler Wasser.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir lauschen dem berühmt___ Sänger.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie unterstützt den traurig___ Freund.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich folge dem schnell___ Läufer.", blanks: [1], correctEndings: ["en"] },
{ text: "Er übergibt dem gewissenhaft___ Mitarbeiter die Dokumente.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir danken dem großzügig___ Spender.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie bringt dem fröhlich___ Jubilar Blumen.", blanks: [1], correctEndings: ["en"] },
{ text: "Ich empfehle dem interessiert___ Leser ein Buch.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir helfen bedürftig___ Kind.", blanks: [1], correctEndings: ["em"] },
{ text: "Sie folgt fremd___ Mann.", blanks: [1], correctEndings: ["em"] },
{ text: "Er steht gegenüber alt___ Gebäude.", blanks: [1], correctEndings: ["em"] },
{ text: "Sie lauscht leis___ Musik.", blanks: [1], correctEndings: ["er"] },
{ text: "Er entnimmt warm___ Wasser die Hände.", blanks: [1], correctEndings: ["em"] },
{ text: "Ich helfe krank___ Menschen.", blanks: [1], correctEndings: ["en"] },
{ text: "Er spricht mit alt___ Bekannten.", blanks: [1], correctEndings: ["en"] },
{ text: "Wir spielen mit klein___ Kindern.", blanks: [1], correctEndings: ["en"] },
{ text: "Sie arbeitet für gut___ Zwecke.", blanks: [1], correctEndings: ["e"] },
{ text: "Er schreibt an bekannt___ Autoren.", blanks: [1], correctEndings: ["en"] }
    // ... more dative sentences
  ],
  genitive: [
{ text: "Die Tasche des alt___ Mannes ist schwer.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Farbe des neu___ Autos gefällt mir nicht.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Aufgaben des jung___ Praktikanten sind leicht.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Arbeit des erfahren___ Handwerkers ist qualitativ hochwertig.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Wohnung des alt___ Paares muss renoviert werden.", blanks: [1], correctEndings: ["en"] },
{ text: "Das Verhalten des klein___ Kindes war vorbildlich.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Rat des weis___ Professors war sehr hilfreich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Geschichte des mutig___ Ritters ist legendär.", blanks: [1], correctEndings: ["en"] },
{ text: "Das Ergebnis des letzten groß___ Turniers war überraschend.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Lieder des berühmt___ Sängers sind weltweit bekannt.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Kleidung des reich___ Kaufmanns war sehr elegant.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Zeichnungen des talentiert___ Künstlers sind atemberaubend.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Bücher des bekannt___ Autors sind Bestseller.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Entscheidung des neu___ Direktors war unerwartet.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Hilfe des freundlich___ Nachbarn war sehr willkommen.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Gedichte des jung___ Dichters berühren die Herzen.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Geschmack des frisch___ Kaffees ist unvergleichlich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Meinung des angesehen___ Experten wird oft angefragt.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Ausstellung des modern___ Künstlers ist sehr populär.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Reparaturen des alt___ Hauses waren teurer als erwartet.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Kontrolle des qualifiziert___ Personals ist gründlich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Planung des groß___ Events nimmt viel Zeit in Anspruch.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Erfolg des jung___ Unternehmens überraschte viele.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Blätter des alt___ Baumes bedecken den Garten.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Inhalt des letz___ Kapitels des spannend___ Romans ist fesselnd.", blanks: [1, 2], correctEndings: ["en", "en"] },
{ text: "Die Qualität des teur___ Weines ist unbestreitbar.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Zustand des verlassen___ Hauses wirkt mysteriös.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Aussicht von der Spitze des hoch___ Berges ist atemberaubend.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Atmosphäre des gemütlich___ Cafés zieht viele Besucher an.", blanks: [1], correctEndings: ["en"] },
{ text: "Das Lob des geschätz___ Lehrers motiviert die Schüler.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Stimmung in der Nähe des ruhig___ Sees ist friedlich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Verantwortung des neu___ Managers ist enorm.", blanks: [1], correctEndings: ["en"] },
{ text: "In der Mitte des alt___ Marktplatzes steht eine Statue des berühmt___ Künstlers.", blanks: [1, 2], correctEndings: ["en", "en"] },
{ text: "Die Techniken des erfahren___ Handwerkers sind beeindruckend.", blanks: [1], correctEndings: ["en"] },
{ text: "Das Verständnis komplexer Themen erfordert die Hilfe des kundig___ Professors.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Erzählungen des alt___ Seemanns sind voller Abenteuer.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Pflege des schön___ Gartens ist zeitaufwendig.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Verlust des alt___ Schmuckstücks war bedauerlich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Restaurierung des historisch___ Gebäudes dauert Jahre.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Geschmack des selbstgemacht___ Kuchens ist unvergleichbar.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Rinde des alt___ Baumes fühlt sich rau an.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Kritik des erfahren___ Redakteurs war hilfreich.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Farben des herbstlich___ Waldes sind atemberaubend.", blanks: [1], correctEndings: ["en"] },
{ text: "Der Geruch des frisch___ Kaffees weckt Erinnerungen.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Sammlung des leidenschaftlich___ Philatelisten ist beeindruckend.", blanks: [1], correctEndings: ["en"] },
{ text: "Die Entwicklung des jung___ Unternehmens verläuft erfolgreich.", blanks: [1], correctEndings: ["en"] }
    // ... more genitive sentences
  ]
};