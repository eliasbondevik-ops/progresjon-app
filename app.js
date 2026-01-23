const dayOrder = [
  { key: "mandag", label: "Mandag" },
  { key: "tirsdag", label: "Tirsdag" },
  { key: "onsdag", label: "Onsdag" },
  { key: "torsdag", label: "Torsdag" },
  { key: "fredag", label: "Fredag" },
  { key: "lordag", label: "Lørdag" },
  { key: "sondag", label: "Søndag" }
];

const meals = [
  {
    id: "taco",
    name: "Taco med grønnsaker",
    note: "Klassiker som funker fint fredag eller lørdag.",
    category: "TexMex",
    ingredients: [
      { item: "Kjøttdeig", amount: "400 g" },
      { item: "Tacomiks", amount: "1 pose" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Revet ost", amount: "200 g" },
      { item: "Salsa / rømme", amount: "Etter smak" },
      { item: "Salat, tomat, agurk", amount: "Tilbehør" }
    ]
  },
  {
    id: "spaghetti",
    name: "Spaghetti bolognese",
    note: "Kan lages i større porsjon og fryses.",
    category: "Pasta",
    ingredients: [
      { item: "Kjøttdeig/karbonadedeig", amount: "400 g" },
      { item: "Spaghetti", amount: "400 g" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Løk og hvitløk", amount: "1 løk, 2 fedd" },
      { item: "Gulrot", amount: "1 stk" },
      { item: "Parmesan", amount: "Etter smak" }
    ]
  },
  {
    id: "kylling-ovnsbakt",
    name: "Ovnsbakt kylling og poteter",
    note: "Legg alt på ett brett for enkel hverdagsmiddag.",
    category: "Kylling",
    ingredients: [
      { item: "Kyllinglår/filét", amount: "600 g" },
      { item: "Poteter", amount: "700 g" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Rødløk", amount: "1 stk" },
      { item: "Olivenolje + krydder", amount: "Smak til" }
    ]
  },
  {
    id: "fiskekaker",
    name: "Fiskekaker og råkost",
    category: "Fisk",
    ingredients: [
      { item: "Fiskekaker", amount: "6-8 stk" },
      { item: "Poteter", amount: "600 g" },
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Sitron", amount: "1 stk" },
      { item: "Smør til steking", amount: "1 ss" }
    ]
  },
  {
    id: "curry",
    name: "Kremet kyllingcurry",
    category: "Kylling",
    ingredients: [
      { item: "Kyllingbryst", amount: "500 g" },
      { item: "Rød curry paste", amount: "2 ss" },
      { item: "Kokosmelk", amount: "1 boks" },
      { item: "Ris", amount: "400 g" },
      { item: "Brokkoli", amount: "1 stk" },
      { item: "Sukkererter", amount: "1 pose" }
    ]
  },
  {
    id: "pasta-pesto",
    name: "Pasta med grønn pesto",
    category: "Pasta",
    ingredients: [
      { item: "Pasta", amount: "400 g" },
      { item: "Grønn pesto", amount: "1 glass" },
      { item: "Pinjekjerner", amount: "1 pose" },
      { item: "Cherrytomat", amount: "1 kurv" },
      { item: "Ruccola", amount: "1 pose" }
    ]
  },
  {
    id: "suppe",
    name: "Grønnsakssuppe",
    category: "Suppe",
    ingredients: [
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Poteter", amount: "3 stk" },
      { item: "Sellerirot", amount: "200 g" },
      { item: "Grønnsaksbuljong", amount: "1 liter" },
      { item: "Flatbrød", amount: "1 pakke" }
    ]
  },
  {
    id: "lasagne",
    name: "Klassisk lasagne",
    category: "Pasta",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Lasagneplater", amount: "1 pakke" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Løk", amount: "1 stk" },
      { item: "Hvitløk", amount: "2 fedd" },
      { item: "Revet ost", amount: "200 g" }
    ]
  },
  {
    id: "ovnsbakt-laks",
    name: "Ovnsbakt laks med sitron",
    category: "Fisk",
    ingredients: [
      { item: "Laksefilet", amount: "600 g" },
      { item: "Sitron", amount: "1 stk" },
      { item: "Poteter", amount: "800 g" },
      { item: "Asparges", amount: "1 bunt" },
      { item: "Olivenolje", amount: "2 ss" }
    ]
  },
  {
    id: "kylling-fajitas",
    name: "Kylling fajitas",
    category: "TexMex",
    ingredients: [
      { item: "Kyllingbryst", amount: "500 g" },
      { item: "Paprika", amount: "2 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Fajitakrydder", amount: "1 pose" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Rømme / salsa", amount: "Etter smak" }
    ]
  },
  {
    id: "pizza-margherita",
    name: "Pizza margherita",
    category: "Vegetar",
    ingredients: [
      { item: "Pizzadeig", amount: "1 base" },
      { item: "Pizzasaus", amount: "1 glass" },
      { item: "Mozzarella", amount: "200 g" },
      { item: "Basilikum", amount: "1 bunt" },
      { item: "Olivenolje", amount: "1 ss" }
    ]
  },
  {
    id: "biff-stroganoff",
    name: "Biff stroganoff",
    category: "Kjøtt",
    ingredients: [
      { item: "Biffstrimler", amount: "500 g" },
      { item: "Sopp", amount: "200 g" },
      { item: "Løk", amount: "1 stk" },
      { item: "Matfløte", amount: "2 dl" },
      { item: "Buljong", amount: "1 dl" },
      { item: "Ris eller potetmos", amount: "Til servering" }
    ]
  },
  {
    id: "chili-con-carne",
    name: "Chili con carne",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Kidneybønner", amount: "1 boks" },
      { item: "Mais", amount: "1 boks" },
      { item: "Chili / spisskummen", amount: "Etter smak" },
      { item: "Ris", amount: "400 g" }
    ]
  },
  {
    id: "falafel-pita",
    name: "Falafel i pitabrød",
    category: "Vegetar",
    ingredients: [
      { item: "Falafel", amount: "1 pakke" },
      { item: "Pitabrød", amount: "6 stk" },
      { item: "Yoghurtdressing", amount: "1 beger" },
      { item: "Salat", amount: "1 pose" },
      { item: "Tomat og agurk", amount: "1-2 stk" }
    ]
  },
  {
    id: "risotto-sopp",
    name: "Kremet sopprisotto",
    category: "Vegetar",
    ingredients: [
      { item: "Risottoris", amount: "350 g" },
      { item: "Sopp", amount: "250 g" },
      { item: "Løk", amount: "1 stk" },
      { item: "Grønnsaksbuljong", amount: "1 liter" },
      { item: "Parmesan", amount: "50 g" },
      { item: "Smør", amount: "2 ss" }
    ]
  },
  {
    id: "wok-nudler",
    name: "Wok med nudler",
    category: "Asiatisk",
    ingredients: [
      { item: "Kylling eller tofu", amount: "400 g" },
      { item: "Wokgrønnsaker", amount: "1 pose" },
      { item: "Nudler", amount: "300 g" },
      { item: "Soyasaus", amount: "3 ss" },
      { item: "Sesamolje", amount: "1 ss" }
    ]
  },
  {
    id: "omelett",
    name: "Omelett med grønnsaker",
    category: "Vegetar",
    ingredients: [
      { item: "Egg", amount: "6 stk" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Spinat", amount: "1 pose" },
      { item: "Løk", amount: "1 stk" },
      { item: "Revet ost", amount: "50 g" }
    ]
  },
  {
    id: "pannekaker",
    name: "Pannekaker med blåbær",
    category: "Vegetar",
    ingredients: [
      { item: "Melk", amount: "6 dl" },
      { item: "Hvetemel", amount: "3 dl" },
      { item: "Egg", amount: "3 stk" },
      { item: "Smør til steking", amount: "2 ss" },
      { item: "Blåbærsyltetøy", amount: "1 glass" }
    ]
  },
  {
    id: "laks-pasta",
    name: "Kremet pasta med laks",
    category: "Fisk",
    ingredients: [
      { item: "Pasta", amount: "400 g" },
      { item: "Laksebiter", amount: "400 g" },
      { item: "Fløte eller creme fraiche", amount: "2 dl" },
      { item: "Spinat", amount: "1 pose" },
      { item: "Sitron", amount: "1 stk" }
    ]
  },
  {
    id: "caesarsalat",
    name: "Cæsarsalat med kylling",
    category: "Salat",
    ingredients: [
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Romaine eller hjertesalat", amount: "2 stk" },
      { item: "Krutonger", amount: "1 pose" },
      { item: "Parmesan", amount: "50 g" },
      { item: "Cæsardressing", amount: "1 flaske" }
    ]
  },
  {
    id: "torsk-curry",
    name: "Mild torskecurry",
    category: "Fisk",
    ingredients: [
      { item: "Torskefileter", amount: "500 g" },
      { item: "Kokosmelk", amount: "1 boks" },
      { item: "Rød curry paste", amount: "1-2 ss" },
      { item: "Gulrot", amount: "2 stk" },
      { item: "Ris", amount: "400 g" }
    ]
  },
  {
    id: "pulled-pork-tacos",
    name: "Pulled pork tacos",
    category: "TexMex",
    ingredients: [
      { item: "Pulled pork", amount: "1 pakke" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Rødkål", amount: "1/2 hode" },
      { item: "Mais", amount: "1 boks" },
      { item: "BBQ-saus", amount: "1 dl" }
    ]
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    category: "Vegetar",
    ingredients: [
      { item: "Egg", amount: "4-6 stk" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Krydder (spisskummen, chili)", amount: "Etter smak" }
    ]
  },
  {
    id: "fiskesuppe",
    name: "Kremet fiskesuppe",
    category: "Fisk",
    ingredients: [
      { item: "Hvit fisk", amount: "500 g" },
      { item: "Gulrot", amount: "2 stk" },
      { item: "Sellerirot", amount: "200 g" },
      { item: "Fløte", amount: "2 dl" },
      { item: "Fiskebuljong", amount: "1 liter" }
    ]
  },
  {
    id: "gryterett",
    name: "Enkel kjøttgryte",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Poteter", amount: "600 g" },
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Buljong", amount: "5 dl" }
    ]
  },
  {
    id: "vegetar-taco",
    name: "Vegetar taco med bønner",
    category: "Vegetar",
    ingredients: [
      { item: "Svartbønner", amount: "1 boks" },
      { item: "Mais", amount: "1 boks" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Avokado", amount: "1 stk" }
    ]
  },
  {
    id: "burger",
    name: "Hjemmelagde burgere",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "600 g" },
      { item: "Burgerbrød", amount: "4-6 stk" },
      { item: "Ost", amount: "4-6 skiver" },
      { item: "Salat og tomat", amount: "Til servering" },
      { item: "Dressing", amount: "Etter smak" }
    ]
  },
  {
    id: "pad-thai",
    name: "Pad thai med kylling",
    category: "Asiatisk",
    ingredients: [
      { item: "Risnudler", amount: "300 g" },
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Egg", amount: "2 stk" },
      { item: "Bønnespirer", amount: "1 pose" },
      { item: "Vårløk", amount: "3 stk" },
      { item: "Pad thai-saus", amount: "1 flaske" },
      { item: "Peanøtter", amount: "1 pose" },
      { item: "Lime", amount: "1 stk" }
    ]
  },
  {
    id: "ramen",
    name: "Ramen med svin",
    category: "Asiatisk",
    ingredients: [
      { item: "Ramen-nudler", amount: "4 porsjoner" },
      { item: "Svin strimlet", amount: "400 g" },
      { item: "Grønnsakskraft", amount: "1 liter" },
      { item: "Soyasaus", amount: "3 ss" },
      { item: "Egg", amount: "4 stk" },
      { item: "Pak choi", amount: "2 stk" },
      { item: "Vårløk", amount: "3 stk" }
    ]
  },
  {
    id: "fajita-bowl",
    name: "Fajita bowl",
    category: "TexMex",
    ingredients: [
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Ris", amount: "400 g" },
      { item: "Paprika", amount: "2 stk" },
      { item: "Mais", amount: "1 boks" },
      { item: "Sorte bønner", amount: "1 boks" },
      { item: "Fajitakrydder", amount: "1 pose" },
      { item: "Avokado", amount: "1 stk" },
      { item: "Lime", amount: "1 stk" }
    ]
  },
  {
    id: "fiskeboller-i-karrisaus",
    name: "Fiskeboller i karrisaus",
    category: "Fisk",
    ingredients: [
      { item: "Fiskeboller", amount: "1 boks" },
      { item: "Poteter", amount: "700 g" },
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Smør", amount: "2 ss" },
      { item: "Hvetemel", amount: "2 ss" },
      { item: "Melk", amount: "5 dl" },
      { item: "Karripulver", amount: "1-2 ts" }
    ]
  },
  {
    id: "potetmos-med-kjottkaker",
    name: "Potetmos med kjøttkaker",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttkaker", amount: "8 stk" },
      { item: "Poteter", amount: "800 g" },
      { item: "Melk", amount: "1.5 dl" },
      { item: "Smør", amount: "2 ss" },
      { item: "Erter", amount: "1 pose frosne" },
      { item: "Brun saus", amount: "1 pose" }
    ]
  },
  {
    id: "grillet-cheese",
    name: "Grilled cheese og tomatsuppe",
    category: "Vegetar",
    ingredients: [
      { item: "Brødskiver", amount: "8 stk" },
      { item: "Skivet ost", amount: "8 skiver" },
      { item: "Smør", amount: "2 ss" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Fløte", amount: "1 dl" },
      { item: "Løk", amount: "1 stk" },
      { item: "Hvitløk", amount: "2 fedd" }
    ]
  },
  {
    id: "kremet-brokkolipasta",
    name: "Kremet brokkolipasta",
    category: "Pasta",
    ingredients: [
      { item: "Pasta", amount: "400 g" },
      { item: "Brokkoli", amount: "1 stor" },
      { item: "Fløte eller creme fraiche", amount: "2 dl" },
      { item: "Hvitløk", amount: "2 fedd" },
      { item: "Parmesan", amount: "40 g" },
      { item: "Sitron", amount: "1 stk" }
    ]
  },
  {
    id: "torsk-med-bacon",
    name: "Torsk med bacon og potetmos",
    category: "Fisk",
    ingredients: [
      { item: "Torskefileter", amount: "500 g" },
      { item: "Bacon", amount: "150 g" },
      { item: "Poteter", amount: "800 g" },
      { item: "Melk", amount: "1.5 dl" },
      { item: "Smør", amount: "2 ss" },
      { item: "Gulrøtter", amount: "3 stk" }
    ]
  },
  {
    id: "indisk-daal",
    name: "Indisk daal",
    category: "Vegetar",
    ingredients: [
      { item: "Røde linser", amount: "300 g" },
      { item: "Løk", amount: "1 stk" },
      { item: "Hvitløk", amount: "2 fedd" },
      { item: "Ingefær", amount: "2 cm" },
      { item: "Kokosmelk", amount: "1 boks" },
      { item: "Hakket tomat", amount: "1 boks" },
      { item: "Spisskummen og gurkemeie", amount: "2 ts hver" },
      { item: "Ris", amount: "400 g" }
    ]
  },
  {
    id: "enchiladas",
    name: "Enchiladas med kylling",
    category: "TexMex",
    ingredients: [
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Hakket tomat", amount: "1 boks" },
      { item: "Mais", amount: "1 boks" },
      { item: "Revet ost", amount: "200 g" },
      { item: "Enchiladasaus", amount: "1 glass" }
    ]
  },
  {
    id: "cobb-salat",
    name: "Cobb-salat",
    category: "Salat",
    ingredients: [
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Egg", amount: "3 stk" },
      { item: "Bacon", amount: "150 g" },
      { item: "Avokado", amount: "1 stk" },
      { item: "Tomat", amount: "2 stk" },
      { item: "Romaine/hjertesalat", amount: "2 stk" },
      { item: "Blåmuggost eller feta", amount: "100 g" }
    ]
  }
];

const mealSteps = {
  taco: [
    "Stek kjøttdeig med tacomiks etter pakkeanvisning.",
    "Kutt grønnsaker og varm lefsene.",
    "Fyll lefser med kjøtt, grønnsaker, ost og salsa/rømme."
  ],
  spaghetti: [
    "Stek kjøttdeig med hakket løk og hvitløk.",
    "Tilsett gulrot i terninger og hakket tomat, la småkoke 10-15 min.",
    "Kok spaghetti, bland med sausen og topp med parmesan."
  ],
  "kylling-ovnsbakt": [
    "Forvarm ovnen til 200°C.",
    "Kutt poteter og grønnsaker, vend i olje/krydder på bakebrett.",
    "Legg kylling oppå og stek 25-35 min til alt er gjennomstekt."
  ],
  fiskekaker: [
    "Kok poteter til møre.",
    "Rasp gulrot til råkost, smak til med sitron.",
    "Stek fiskekaker i smør til gylne og server med poteter og råkost."
  ],
  curry: [
    "Stek kyllingbiter lett i olje.",
    "Rør inn curry paste, tilsett kokosmelk og la småkoke 10 min.",
    "Ha i brokkoli og sukkererter mot slutten, server med kokt ris."
  ],
  "pasta-pesto": [
    "Kok pasta al dente.",
    "Rist pinjekjerner lett i panne.",
    "Vend pasta med pesto, topp med tomat, ruccola og pinjekjerner."
  ],
  suppe: [
    "Kutt grønnsaker i terninger.",
    "Kok opp buljong, tilsett grønnsaker og la småkoke til møre (15-20 min).",
    "Smak til med salt/pepper og server med flatbrød."
  ],
  lasagne: [
    "Stek kjøttdeig med løk og hvitløk, tilsett tomat og la småkoke.",
    "Legg lagvis saus, lasagneplater og ost i form.",
    "Stek på 200°C i ca. 30-35 min til gyllen."
  ],
  "ovnsbakt-laks": [
    "Forvarm ovn til 200°C.",
    "Legg laks i form med sitronskiver, salt/pepper.",
    "Bak 15-20 min; stek poteter/asparges ved siden av."
  ],
  "kylling-fajitas": [
    "Stek strimlet kylling med fajitakrydder.",
    "Stek paprika og løk lett i samme panne.",
    "Varm tortillalefser og fyll med kylling og grønnsaker."
  ],
  "pizza-margherita": [
    "Forvarm ovn til maks varme med stekebrett inni.",
    "Smør deig med pizzasaus, legg på mozzarella.",
    "Stek 8-12 min til gyllen; topp med basilikum og olje."
  ],
  "biff-stroganoff": [
    "Brun biffstrimler raskt i varm panne, sett til side.",
    "Stek løk og sopp, tilsett buljong og fløte.",
    "Legg biffen tilbake og la småkoke 5-10 min; server med ris/potetmos."
  ],
  "chili-con-carne": [
    "Stek kjøttdeig med krydder.",
    "Tilsett tomat, bønner og mais; la småkoke 15-20 min.",
    "Server med ris."
  ],
  "falafel-pita": [
    "Varm falafel etter anvisning.",
    "Varm pitabrød og fyll med salat, tomat og dressing.",
    "Legg falafel i pitabrød og server."
  ],
  "risotto-sopp": [
    "Stek løk og sopp i smør.",
    "Rør inn ris og spe med varm buljong litt etter litt til myk (ca. 18-20 min).",
    "Rør inn smør/parmesan mot slutten."
  ],
  "wok-nudler": [
    "Stek kylling/tofu, sett til side.",
    "Wok grønnsaker raskt, tilsett nudler og saus.",
    "Bland inn kylling/tofu og server."
  ],
  omelett: [
    "Pisk egg med litt salt/pepper.",
    "Stek grønnsaker lett i panne, hell over egg.",
    "Stek på lav varme til eggene setter seg; brett og server."
  ],
  pannekaker: [
    "Pisk sammen egg, melk og mel til glatt røre.",
    "La hvile 10 min, stek tynne pannekaker i smør.",
    "Server med syltetøy."
  ],
  "laks-pasta": [
    "Kok pasta al dente.",
    "Stek laksebiter raskt, sett til side.",
    "Kok opp fløte/creme fraiche med sitron og spinat, vend inn pasta og laks."
  ],
  caesarsalat: [
    "Stek kylling og skjær i skiver.",
    "Kutt salat, bland med dressing og krutonger.",
    "Topp med kylling og parmesan."
  ],
  "torsk-curry": [
    "Kok ris.",
    "La curry paste og kokosmelk småkoke, tilsett grønnsaker.",
    "Legg i torsk og trekk til fisken er mør (6-8 min)."
  ],
  "pulled-pork-tacos": [
    "Varm pulled pork med BBQ-saus.",
    "Varm tortillalefser.",
    "Fyll med kjøtt, mais og rødkål."
  ],
  shakshuka: [
    "Stek løk og paprika, tilsett tomat og krydder.",
    "La småkoke 10 min, lag fordypninger og knekk i egg.",
    "Sett på lokk og la eggene stivne."
  ],
  fiskesuppe: [
    "Kutt grønnsaker i terninger, kok i buljong til møre.",
    "Tilsett fløte og fisk, trekk forsiktig i 6-8 min.",
    "Smak til med salt/pepper og dill hvis ønsket."
  ],
  gryterett: [
    "Brun kjøttdeig.",
    "Tilsett potet/gulrot i terninger og løk, hell over buljong.",
    "La småkoke til poteter er møre (20-25 min)."
  ],
  "vegetar-taco": [
    "Skyll bønner og mais, varm med tacokrydder om ønsket.",
    "Varm tortillalefser.",
    "Fyll med bønner, mais, paprika og avokado."
  ],
  burger: [
    "Form burgere av kjøttdeig, krydre og stek til gjennomstekt.",
    "Varm burgerbrød.",
    "Monter med ost, salat/tomat og dressing."
  ],
  "pad-thai": [
    "Bløtlegg eller kok risnudler etter pakke.",
    "Stek kylling, skyv til side og stek egg raskt.",
    "Tilsett saus, nudler, spirer og vårløk; topp med peanøtter og lime."
  ],
  ramen: [
    "Kok kraft med soyasaus.",
    "Stek svinestrimler lett.",
    "Kok nudler i kraften, legg på svin, pak choi og kokt egg, topp med vårløk."
  ],
  "fajita-bowl": [
    "Stek kylling med fajitakrydder.",
    "Kok ris.",
    "Anrett i bolle med ris, kylling, paprika, mais, bønner og avokado/lime."
  ],
  "fiskeboller-i-karrisaus": [
    "Lag hvit saus av smør/mel/melk, smak til med karri.",
    "Ha i fiskeboller og varm gjennom.",
    "Server med kokte poteter og gulrøtter."
  ],
  "potetmos-med-kjottkaker": [
    "Kok poteter og lag mos med melk/smør.",
    "Varm kjøttkaker og erter.",
    "Server med brun saus over."
  ],
  "grillet-cheese": [
    "Smør brødskiver med smør, legg ost mellom to skiver.",
    "Stek i panne til gyllen og osten smelter.",
    "Varm tomatsuppe av løk, tomat og fløte; server sammen."
  ],
  "kremet-brokkolipasta": [
    "Kok pasta, spar litt pastavann.",
    "Kok brokkolibuketter kort, stek hvitløk i olje.",
    "Vend pasta med brokkoli, fløte og sitron; juster med pastavann og parmesan."
  ],
  "torsk-med-bacon": [
    "Kok poteter og lag mos med melk/smør.",
    "Stek bacon sprøtt.",
    "Legg torsk i form, krydre og bak 10-12 min på 200°C; topp med bacon og server med gulrot."
  ],
  "indisk-daal": [
    "Stek løk, hvitløk og ingefær med krydder.",
    "Tilsett linser, tomat og kokosmelk; la småkoke til møre (15-20 min).",
    "Smak til, server med ris."
  ],
  enchiladas: [
    "Stek kylling i strimler, bland med tomat og mais.",
    "Rull i tortillalefser, legg i form.",
    "Hell over saus, topp med ost og bak 15-20 min på 200°C."
  ],
  "cobb-salat": [
    "Stek kylling og bacon, skjær i biter.",
    "Kok egg og del i båter.",
    "Anrett salat med kylling, bacon, egg, avokado, tomat og ost; tilsett dressing."
  ]
};

const mealStepsDetailed = {
  taco: [
    "Finhakk løk for ekstra smak og stek myk i litt olje.",
    "Brun kjøttdeig, ha i tacomiks + en skvett vann, la småkoke 3-4 min.",
    "Varm tortillalefser i ovn (180°C, 4-5 min) eller tørr panne.",
    "Kutt salat, tomat, agurk og evt. rødløk; riv ost om nødvendig.",
    "Sett frem alt på bordet, fyll lefser med kjøtt, grønt, ost, salsa/rømme.",
    "Smak til med lime, jalapeños eller ekstra krydder."
  ],
  spaghetti: [
    "Finhakk løk/hvitløk og gulrot i små terninger.",
    "Brun kjøttdeig, tilsett løk/hvitløk/gulrot og stek 2-3 min.",
    "Ha i hakket tomat og litt vann/kraft, la småkoke 10-15 min, smak til.",
    "Kok spaghetti i godt saltet vann til al dente; spar litt pastavann.",
    "Vend pasta med sausen, juster med pastavann for ønsket konsistens.",
    "Server med parmesan og ev. basilikum/olivenolje."
  ],
  "kylling-ovnsbakt": [
    "Forvarm ovn til 200°C varmluft.",
    "Kutt poteter i terninger/skiver, paprika og rødløk i biter.",
    "Vend poteter/grønnsaker i olje, salt/pepper (og paprikakrydder) på brett.",
    "Legg kylling oppå, krydre lett, stek 25-35 min til kylling er gjennomstekt og poteter møre.",
    "Vend litt på grønnsakene halvveis for jevn steking.",
    "La hvile 3-5 min før servering."
  ],
  fiskekaker: [
    "Kok poteter i saltet vann til møre.",
    "Rasp gulrøtter, smak til råkost med litt sitron, salt og en klype sukker.",
    "Stek fiskekaker i smør på middels varme til gylne og varme.",
    "Server med poteter, råkost og ev. smeltet smør eller remulade.",
    "Press litt sitron over rett før servering."
  ],
  curry: [
    "Skjær kylling i biter, salte/peppre lett.",
    "Brun kylling raskt i olje, ta ut av panna.",
    "Stek curry paste 30 sek, tilsett kokosmelk og rør ut.",
    "Legg kyllingen tilbake, småkok 8-10 min til gjennomkokt.",
    "Ha i brokkoli og sukkererter de siste 3-4 minuttene for sprøhet.",
    "Smak til med lime/soyasaus; server med ris."
  ],
  "pasta-pesto": [
    "Kok pasta i saltet vann til al dente; spar 1-2 dl pastavann.",
    "Rist pinjekjerner tørt i panne til gyllen; avkjøl lett.",
    "Vend varm pasta med pesto og litt pastavann til kremet konsistens.",
    "Tilsett cherrytomat og ruccola rett før servering.",
    "Topp med pinjekjerner og ev. parmesan; smak til med sitron og pepper."
  ],
  suppe: [
    "Skrell/kutt gulrot, potet og sellerirot i små terninger for kort koketid.",
    "Kok opp buljong, tilsett grønnsakene og la småkoke til møre (15-20 min).",
    "Skum av ved behov, smak til med salt/pepper og litt sitron.",
    "Vil du ha den jevnere, stavmiks halvparten; behold biter for tygg.",
    "Server med flatbrød og litt smør."
  ],
  lasagne: [
    "Stek løk/hvitløk myk, brun kjøttdeig, tilsett tomat og småkok 10-15 min.",
    "Lag evt. hvitsaus (smør+mjøl+melk) og rør inn litt ost, eller bruk bare ostelag.",
    "I form: lag med kjøttsaus, lasagneplater, ost/hvitsaus i 3-4 lag.",
    "Topp med ost, stek 30-35 min på 200°C til gyllen og boblete.",
    "La hvile 5-10 min før du skjærer i den."
  ],
  "ovnsbakt-laks": [
    "Forvarm ovn 200°C. Legg laks i form, krydre med salt/pepper og sitron.",
    "Vend poteter/asparges i olje/salt, legg på brett eller i samme form.",
    "Bak 15-20 min til laks flaker og poteter er møre.",
    "Drypp litt sitron/olje over ved servering."
  ],
  "kylling-fajitas": [
    "Skjær kylling, paprika og løk i strimler.",
    "Stek kylling nesten gjennom, tilsett fajitakrydder + litt vann, la koke inn.",
    "Stek paprika/løk kort for litt crunch.",
    "Varm tortillalefser i ovn/panne.",
    "Server med kylling/grønnsaker, rømme og lime."
  ],
  "pizza-margherita": [
    "Forvarm ovn/steinbrett til maks varme (250°C+).",
    "Kjevle deig tynt, legg på bakepapir.",
    "Smør et tynt lag pizzasaus, fordel mozzarella i biter.",
    "Stek 8-12 min til gyllen og sprø.",
    "Topp med basilikum og en skvett olivenolje."
  ],
  "biff-stroganoff": [
    "Tørk biffstrimler, brun raskt på høy varme, sett til side.",
    "Stek løk og sopp til mykt, deglaser med litt vann/buljong.",
    "Tilsett fløte og buljong, småkok 5-7 min.",
    "Legg biffen tilbake, varm raskt.",
    "Smak til med salt/pepper og evt. sennep; server med ris/potetmos."
  ],
  "chili-con-carne": [
    "Brun kjøttdeig med chili/spisskummen.",
    "Tilsett løk/hvitløk om ønsket, stek myk.",
    "Ha i hakket tomat, småkok 10-15 min.",
    "Rør inn bønner og mais, varm 5-7 min.",
    "Smak til med salt/pepper/lime; server med ris."
  ],
  "falafel-pita": [
    "Varm falafel etter anvisning (panne/ovn).",
    "Varm pitabrød.",
    "Rør sammen yoghurtdressing med sitron og hvitløk.",
    "Fyll pita med salat, tomat og falafel.",
    "Topp med dressing og ev. koriander/persille."
  ],
  "risotto-sopp": [
    "Stek sopp gyllen i smør/olje, sett til side.",
    "Stek løk myk i gryte, rør inn ris og varm til blank.",
    "Spe med varm buljong litt av gangen, rør ofte (18-20 min).",
    "Rør inn sopp, smør og parmesan mot slutten.",
    "Smak til med salt/pepper/sitron, la hvile 2 min."
  ],
  "wok-nudler": [
    "Kutt kylling/tofu i biter, grønnsaker i strimler.",
    "Stek kylling/tofu, ta ut.",
    "Wok grønnsaker kort på høy varme.",
    "Tilsett ferdigkokte nudler og saus (soya + sesamolje), bland.",
    "Ha kylling/tofu tilbake, varm opp, smak til med lime/chili."
  ],
  omelett: [
    "Pisk egg med litt melk og salt/pepper.",
    "Stek grønnsaker lett i panne.",
    "Hell i egg, senk varmen, la stå til nesten stivnet.",
    "Dryss ost, brett omeletten, la hvile 1 min."
  ],
  pannekaker: [
    "Pisk egg, melk og mel til glatt røre; la hvile 10-15 min.",
    "Stek tynne pannekaker i smør på middels varme, snu når kantene slipper.",
    "Hold varme i ovn på lav varme, server med syltetøy/sukker."
  ],
  "laks-pasta": [
    "Kok pasta al dente.",
    "Stek laksebiter lett, krydre, sett til side.",
    "Kok opp fløte/creme fraiche med sitron og pepper.",
    "Vend inn spinat til den faller sammen.",
    "Bland pasta og laks inn i sausen, juster med pastavann."
  ],
  caesarsalat: [
    "Stek kylling, la hvile og skjær i skiver.",
    "Riv salat, bland med dressing og krutonger.",
    "Legg på kylling og parmesan.",
    "Tilsett mer dressing/pepper etter smak."
  ],
  "torsk-curry": [
    "Kok ris.",
    "Kok opp kokosmelk med curry paste, smak til med salt.",
    "Tilsett gulrotstaver, kok et par minutter.",
    "Legg i torskebiter, trekk 6-8 min til fisken flaker.",
    "Server med ris, evt. koriander."
  ],
  "pulled-pork-tacos": [
    "Varm pulled pork i panne med BBQ-saus.",
    "Finsnitt rødkål, vend med litt lime/salt.",
    "Varm tortillalefser.",
    "Fyll med kjøtt, mais, rødkål; topp med ekstra saus."
  ],
  shakshuka: [
    "Stek løk/paprika myk i olje.",
    "Tilsett krydder og hakket tomat, småkok 10 min.",
    "Lag fordypninger, knekk i egg.",
    "Dekk til og la egg stivne 5-8 min på lav varme.",
    "Server med brød."
  ],
  fiskesuppe: [
    "Stek grønnsaker i terninger kort i smør/olje.",
    "Tilsett buljong, kok til nesten møre.",
    "Ha i fløte og fisk, trekk 6-8 min uten å koke.",
    "Smak til med sitron, salt, pepper."
  ],
  gryterett: [
    "Brun kjøttdeig, tilsett hakket løk.",
    "Ha i poteter/gulrøtter i terninger, hell på buljong.",
    "La småkoke 20-25 min til poteter er møre.",
    "Smak til med salt/pepper."
  ],
  "vegetar-taco": [
    "Skyll bønner/mais, varm i panne med tacokrydder.",
    "Kutt paprika/avokado.",
    "Varm tortillalefser.",
    "Fyll lefser med bønner, grønnsaker og topp med salsa/ost."
  ],
  burger: [
    "Form burgere, krydre godt, stek/grill til ønsket stekegrad.",
    "Varm burgerbrød.",
    "Monter med dressing, salat/tomat, burger og ost.",
    "Server med ønsket tilbehør."
  ],
  "pad-thai": [
    "Bløtlegg/kok risnudler, skyll i kaldt vann.",
    "Stek kyllingbiter, skyv til side, stek egg raskt.",
    "Tilsett pad thai-saus og nudler, vend godt.",
    "Bland inn bønnespirer og vårløk, varm raskt.",
    "Server med peanøtter og lime."
  ],
  ramen: [
    "Kok kraft med soyasaus; hold varm.",
    "Stek svinestrimler lett.",
    "Kok ramen-nudler i kraften til al dente.",
    "Anrett nudler med kraft, topp med svin, pak choi og kokt egg.",
    "Dryss vårløk over."
  ],
  "fajita-bowl": [
    "Stek kylling med fajitakrydder.",
    "Kok ris.",
    "Kutt paprika og avokado, skyll mais/bønner.",
    "Anrett i bolle med ris, kylling, grønnsaker, bønner og lime."
  ],
  "fiskeboller-i-karrisaus": [
    "Smelt smør, rør inn mel, spe med melk til saus.",
    "Krydre med karri, kok 2-3 min.",
    "Ha i fiskeboller og varm opp.",
    "Server med kokte poteter og gulrøtter."
  ],
  "potetmos-med-kjottkaker": [
    "Kok poteter, mos med melk/smør, smak til.",
    "Varm kjøttkaker og erter.",
    "Varm brun saus etter anvisning.",
    "Server kjøttkaker med mos, erter og saus."
  ],
  "grillet-cheese": [
    "Smør brødskiver med smør på utsiden.",
    "Legg ost mellom to skiver, stek gyllen på begge sider.",
    "Tomatsuppe: stek løk/hvitløk, tilsett tomat og litt fløte, småkok 10 min, smak til.",
    "Server suppe med sandwich ved siden av."
  ],
  "kremet-brokkolipasta": [
    "Kok pasta al dente, spar pastavann.",
    "Kok brokkoli 2-3 min, avkjøl lett.",
    "Stek hvitløk i olje, tilsett fløte/creme fraiche og litt sitron.",
    "Vend inn pasta og brokkoli, juster med pastavann, topp med parmesan."
  ],
  "torsk-med-bacon": [
    "Kok poteter, lag mos med melk/smør.",
    "Stek bacon sprøtt.",
    "Bak torsk på 200°C i 10-12 min med litt olje/salt/pepper.",
    "Server torsk med bacon, gulrøtter og potetmos."
  ],
  "indisk-daal": [
    "Skyll linser. Stek løk, hvitløk, ingefær i olje med spisskummen/gurkemeie.",
    "Tilsett linser, tomat, kokosmelk og litt vann.",
    "Småkok 15-20 min til linsene er myke.",
    "Smak til med salt, pepper, chili og sitron.",
    "Server med ris."
  ],
  enchiladas: [
    "Stek kyllingstrimler, bland med hakket tomat og mais.",
    "Fordel i tortillalefser, rull og legg i form.",
    "Hell over enchiladasaus, topp med ost.",
    "Bak 15-20 min på 200°C til gyllen.",
    "Server med rømme/salsa."
  ],
  "cobb-salat": [
    "Stek kylling og bacon, skjær i biter.",
    "Kok egg til smilende, del i båter.",
    "Kutt avokado og tomat.",
    "Riv salat, anrett med kylling, bacon, egg, avokado, tomat og ost.",
    "Server med dressing ved siden av."
  ]
};

const storageKeys = {
  plan: "progresjon.weeklyPlanner.plan",
  list: "progresjon.weeklyPlanner.shoppingList",
  reminders: "progresjon.weeklyPlanner.reminders",
  budget: "progresjon.weeklyPlanner.budget"
};
const defaultServings = 4;

const restSuggestionMap = {
  agurk: ["falafel-pita", "caesarsalat", "vegetar-taco"],
  paprika: ["kylling-fajitas", "wok-nudler", "shakshuka"],
  rømme: ["taco", "pulled-pork-tacos"],
  pesto: ["pasta-pesto", "laks-pasta"],
  "revet ost": ["lasagne", "pizza-margherita", "burger"],
  spinat: ["omelett", "laks-pasta", "wok-nudler"],
  sitron: ["ovnsbakt-laks", "laks-pasta", "fiskesuppe"],
  tortillalefser: ["taco", "vegetar-taco", "pulled-pork-tacos"],
  mais: ["chili-con-carne", "pulled-pork-tacos", "vegetar-taco"]
};

const dayGrid = document.getElementById("day-grid");
const shoppingListEl = document.getElementById("shopping-list");
const clearListButton = document.getElementById("clear-list");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const daySelector = document.getElementById("day-selector");
const mealDaySelector = document.getElementById("meal-day-selector");
const dayMealEl = document.getElementById("day-meal");
const reminderListEl = document.getElementById("reminder-list");
const reminderForm = document.getElementById("reminder-form");
const reminderInput = document.getElementById("reminder-input");
const stepsOverlay = document.getElementById("steps-overlay");
const stepsTitleEl = document.getElementById("steps-title");
const stepsSubtitleEl = document.getElementById("steps-subtitle");
const stepsBodyEl = document.getElementById("steps-body");
const budgetMonthLabel = document.getElementById("budget-month-label");
const budgetMonthSelector = document.getElementById("budget-month-selector");
const budgetUsedEl = document.getElementById("budget-used");
const budgetGoalLabelEl = document.getElementById("budget-goal-label");
const donutValue = document.getElementById("donut-value");
const budgetSummaryEl = document.getElementById("budget-summary");
const budgetCategoriesEl = document.getElementById("budget-categories");
const budgetExpensesEl = document.getElementById("budget-expenses");
const budgetSetGoalBtn = document.getElementById("budget-set-goal");
const expenseForm = document.getElementById("expense-form");
const expenseAmount = document.getElementById("expense-amount");
const expenseDate = document.getElementById("expense-date");
const expenseCategory = document.getElementById("expense-category");
const expenseNote = document.getElementById("expense-note");
const budgetReceiptsEl = document.getElementById("budget-receipts");
const receiptForm = document.getElementById("receipt-form");
const receiptFile = document.getElementById("receipt-file");
const receiptPreview = document.getElementById("receipt-preview");
const receiptViewCurrent = document.getElementById("receipt-view-current");
const receiptAmount = document.getElementById("receipt-amount");
const receiptDate = document.getElementById("receipt-date");
const receiptCategory = document.getElementById("receipt-category");
const receiptNote = document.getElementById("receipt-note");
const receiptStatus = document.getElementById("receipt-status");
const receiptAnalyze = document.getElementById("receipt-analyze");
const receiptOverlay = document.getElementById("receipt-overlay");
const receiptOverlayImg = document.getElementById("receipt-overlay-img");
const receiptOverlayEmbed = document.getElementById("receipt-overlay-embed");
const receiptOverlayTitle = document.getElementById("receipt-overlay-title");
const receiptOverlaySubtitle = document.getElementById("receipt-overlay-subtitle");
let activeTab = "middagsplan";
let activeDayPlan = dayOrder[0].key;
let activeMealDay = dayOrder[0].key;

let planState = migratePlanState(loadState(storageKeys.plan, {}));
let shoppingList = loadState(storageKeys.list, []);
let remindersState = loadState(storageKeys.reminders, {});
const mealFilters = {};
const mealCategoryFilters = {};
let budgetState = migrateBudgetState(
  loadState(storageKeys.budget, {
    months: {
      [currentMonthKey()]: { goal: 4000, expenses: [] }
    }
  })
);
let receiptState = [];
let currentReceiptDataUrl = "";
let activeBudgetMonth = currentMonthKey();

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.error("Kunne ikke laste lagret data", err);
    return fallback;
  }
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Kunne ikke lagre data", err);
  }
}

function migratePlanState(state) {
  const migrated = {};
  Object.entries(state || {}).forEach(([dayKey, value]) => {
    if (typeof value === "string") {
      migrated[dayKey] = { meal: value, servings: defaultServings, restSource: null };
    } else if (value && typeof value === "object") {
      migrated[dayKey] = {
        meal: value.meal || "",
        servings: value.servings || defaultServings,
        restSource: value.restSource || null
      };
    }
  });
  return migrated;
}

function migrateBudgetState(state) {
  // Legacy format: { month, goal, expenses }
  if (state && state.month && Array.isArray(state.expenses)) {
    return {
      months: {
        [state.month]: { goal: state.goal || 4000, expenses: state.expenses || [] }
      }
    };
  }
  if (!state || !state.months) {
    return {
      months: {
        [currentMonthKey()]: { goal: 4000, expenses: [] }
      }
    };
  }
  return state;
}

function setActiveTab(name) {
  activeTab = name;
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === name);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === name);
  });

  if (name === "kvitteringer") {
    renderBudget();
    buildBudgetMonthSelector();
  }
}

function buildDaySelector() {
  if (!daySelector) return;
  daySelector.innerHTML = dayOrder
    .map(
      (day) => `
      <button class="day-chip ${activeDayPlan === day.key ? "is-active" : ""}" data-day-select="${day.key}">
        ${day.label}
      </button>`
    )
    .join("");
}

function buildMealDaySelector() {
  if (!mealDaySelector) return;
  mealDaySelector.innerHTML = dayOrder
    .map(
      (day) => `
      <button class="day-chip ${activeMealDay === day.key ? "is-active" : ""}" data-meal-day="${day.key}">
        ${day.label}
      </button>`
    )
    .join("");
}

function buildBudgetMonthSelector() {
  if (!budgetMonthSelector) return;
  budgetMonthSelector.innerHTML = monthLabels()
    .map(
      (m) => `
      <button class="day-chip ${activeBudgetMonth === m.key ? "is-active" : ""}" data-budget-month="${m.key}">
        ${m.label}
      </button>`
    )
    .join("");
}

function buildPlanner() {
  dayGrid.innerHTML = "";
  const day = dayOrder.find((d) => d.key === activeMealDay) || dayOrder[0];
  const card = document.createElement("article");
  card.className = "day-card";
  card.dataset.day = day.key;

  const dayState = planState[day.key] || { meal: "", servings: defaultServings };
  const selected = dayState.meal || "";
  const filterValue = mealFilters[day.key] || "";
  const filterCategory = mealCategoryFilters[day.key] || "";

  card.innerHTML = `
    <div class="day-card__header">
      <span class="day-card__dot"></span>
      <div class="day-card__title">${day.label}</div>
    </div>
    <div class="input-grid">
      <div class="input-row">
        <label class="input-label" for="select-${day.key}">Velg middag</label>
        <input class="input" type="text" placeholder="Søk etter rett" value="${filterValue}" data-day-filter="${day.key}" aria-label="Søk etter rett for ${day.label}">
        <div class="input-with-action">
          <select class="select" id="select-${day.key}" data-day="${day.key}">
            ${renderMealOptions(filterValue, selected, filterCategory)}
          </select>
          <button class="button button--ghost button--icon" data-action="clear-meal" data-day="${day.key}" aria-label="Fjern valgt rett">−</button>
        </div>
        <div class="input-row">
          <label class="input-label" for="category-${day.key}">Kategori</label>
          <select class="select" id="category-${day.key}" data-day-category="${day.key}">
            ${renderCategoryOptions(filterCategory)}
          </select>
        </div>
        <div class="meal-results" data-results="${day.key}">
          ${renderMealResults(filterValue, selected, day.key, filterCategory)}
        </div>
      </div>
      <div class="input-row">
        <label class="input-label" for="servings-${day.key}">Antall personer</label>
        <div class="servings-counter" data-servings="${day.key}">
          <button class="button button--ghost button--icon" type="button" data-action="servings-dec" data-day="${day.key}" aria-label="Færre personer">−</button>
          <div class="servings-value" aria-live="polite">${dayState.servings || defaultServings}</div>
          <button class="button button--ghost button--icon" type="button" data-action="servings-inc" data-day="${day.key}" aria-label="Flere personer">+</button>
        </div>
      </div>
    </div>
    <div class="ingredients" data-ingredients="${day.key}">${renderIngredientsContent(
      selected,
      day.key,
      dayState.servings
    )}</div>
  `;

  dayGrid.appendChild(card);
}

function renderIngredientsContent(mealId, dayKey, servings = defaultServings) {
  if (!mealId) {
    return `<div class="meal-note">Velg en middag for å se ingrediensene.</div>`;
  }

  const meal = meals.find((m) => m.id === mealId);
  if (!meal) {
    return `<div class="meal-note">Fant ikke retten. Velg på nytt.</div>`;
  }

  const list = meal.ingredients
    .map(
      (ingredient, idx) => `
      <li class="ingredient">
        <div class="ingredient__text">
          <span class="ingredient__name">${ingredient.item}</span>
          <span class="ingredient__amount">${formatAmount(ingredient.amount, servings)}</span>
        </div>
        <button class="button pill-button ${isIngredientInList(ingredient, meal.name, dayKey, servings) ? "is-added" : ""}" data-action="add-ingredient" data-day="${dayKey}" data-index="${idx}" aria-label="${isIngredientInList(ingredient, meal.name, dayKey, servings) ? `Fjern ${ingredient.item} fra handlelisten` : `Legg til ${ingredient.item} i handlelisten`}">
          ${isIngredientInList(ingredient, meal.name, dayKey, servings) ? "−" : "+"}
        </button>
      </li>
    `
    )
    .join("");

  return `
    <div class="meal-name">${meal.name}</div>
    ${meal.note ? `<p class="meal-note">${meal.note}</p>` : ""}
    <p class="meal-note">Mengder tilpasset for ${servings} ${servings === 1 ? "person" : "personer"}.</p>
    <ul class="ingredient-list">${list}</ul>
    <button class="button add-all" data-action="add-all" data-day="${dayKey}" type="button">Legg alle i handlelisten</button>
    ${renderRestTips(meal, dayKey)}
  `;
}

function renderShoppingList() {
  if (!shoppingList.length) {
    shoppingListEl.innerHTML = `<li class="empty-state">Handlelisten er tom. Trykk + på ingrediensene for å fylle den.</li>`;
    return;
  }

  shoppingListEl.innerHTML = shoppingList
    .map(
      (entry) => `
      <li class="shopping-item ${entry.purchased ? "is-purchased" : ""}">
        <label class="shopping-item__check">
          <input type="checkbox" data-action="toggle-purchased" data-key="${entry.key}" ${entry.purchased ? "checked" : ""} aria-label="Marker ${entry.item} som handlet">
          <span></span>
        </label>
        <div class="shopping-item__text">
          <span class="shopping-item__name">${entry.item}</span>
          <span class="shopping-item__meta">${entry.amount || "Mengde ikke spesifisert"} · ${entry.sources.join(", ")}</span>
        </div>
        <div class="shopping-item__actions">
          <span class="shopping-item__count">x${entry.count}</span>
          <button class="button button--ghost button--icon" data-action="remove-shopping" data-key="${entry.key}" aria-label="Fjern ${entry.item}">−</button>
        </div>
      </li>
    `
    )
    .join("");
}

function renderRestTips(meal, dayKey) {
  const suggestions = getRestSuggestions(meal, dayKey);
  if (!suggestions.length) {
    return "";
  }
  const nextDay = nextDayKey(dayKey);
  return `
    <div class="rest-tips">
      <div class="rest-tips__header">
        <span class="rest-tips__title">Restetips</span>
        <span class="rest-tips__hint">Planlegg til ${labelForDay(nextDay)}</span>
      </div>
      <div class="rest-tips__list">
        ${suggestions
          .map(
            (sugg) => `
              <div class="rest-tip">
                <div class="rest-tip__text">
                  <span class="rest-tip__name">${sugg.name}</span>
                  <span class="rest-tip__tag">${sugg.category || "Uten kategori"}</span>
                </div>
                <button class="button pill-button" data-action="plan-rest" data-day="${dayKey}" data-next="${nextDay}" data-meal="${sugg.id}" aria-label="Planlegg ${sugg.name} til ${labelForDay(nextDay)}">+</button>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMealOptions(filterValue, selected, category) {
  const query = (filterValue || "").trim().toLowerCase();
  let filtered = filterMeals(query, category);
  if (selected && !filtered.find((m) => m.id === selected)) {
    const selectedMeal = meals.find((m) => m.id === selected);
    if (selectedMeal) filtered = [selectedMeal, ...filtered];
  }
  if (!filtered.length) {
    return `<option value="">Ingen treff</option>`;
  }
  const options = filtered
    .map(
      (meal) =>
        `<option value="${meal.id}" ${meal.id === selected ? "selected" : ""}>${meal.name}</option>`
    )
    .join("");
  return `<option value="">- Ingen valgt -</option>${options}`;
}

function renderMealResults(filterValue, selected, dayKey, category) {
  const query = (filterValue || "").trim().toLowerCase();
  if (!query && !category) {
    return `<div class="meal-note">Skriv eller velg kategori for å finne retter.</div>`;
  }
  const filtered = filterMeals(query, category);
  if (!filtered.length) {
    return `<div class="meal-note">Ingen treff.</div>`;
  }
  return filtered
    .slice(0, 8)
    .map(
      (meal) => `
      <button class="meal-result ${meal.id === selected ? "is-active" : ""}" data-action="choose-meal" data-day="${dayKey}" data-meal="${meal.id}">
        ${meal.name}
      </button>`
    )
    .join("");
}

function renderDayPlan() {
  if (!dayMealEl || !reminderListEl) return;
  const dayState = planState[activeDayPlan] || { meal: "", servings: defaultServings };
  const meal = meals.find((m) => m.id === dayState.meal);
  if (meal) {
    const steps = mealSteps[meal.id] || [];
    dayMealEl.innerHTML = `
      <div class="day-plan__meal-title">${meal.name}</div>
      <div class="day-plan__meal-note">${dayState.servings} ${dayState.servings === 1 ? "person" : "personer"} · ${meal.note || "Ingen note"} ${dayState.restSource ? "· planlagt for å bruke rester" : ""}</div>
      ${steps.length ? renderSteps(steps) : ""}
    `;
  } else {
    dayMealEl.innerHTML = `<div class="meal-note">Ingen middag valgt for ${labelForDay(activeDayPlan)} enda.</div>`;
  }

  const list = remindersState[activeDayPlan] || [];
  if (!list.length) {
    reminderListEl.innerHTML = `<li class="empty-state">Ingen påminnelser for ${labelForDay(activeDayPlan)}.</li>`;
    return;
  }

  reminderListEl.innerHTML = list
    .map(
      (item) => `
      <li class="reminder-item">
        <div class="reminder-item__text">${item.text}</div>
        <div class="reminder-actions">
          <button class="button button--ghost button--icon" data-action="remove-reminder" data-id="${item.id}" aria-label="Fjern påminnelse">−</button>
        </div>
      </li>
    `
    )
    .join("");
}

function updateMeal(dayKey, mealId) {
  const current = planState[dayKey] || { servings: defaultServings };
  planState[dayKey] = { meal: mealId, servings: current.servings || defaultServings, restSource: null };
  saveState(storageKeys.plan, planState);
  const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
  if (ingredientsEl) {
    ingredientsEl.innerHTML = renderIngredientsContent(mealId, dayKey, planState[dayKey].servings);
  }
  if (dayKey === activeDayPlan) {
    renderDayPlan();
  }
}

function addIngredient(dayKey, index) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const mealId = dayState.meal;
  if (!mealId) return;

  const meal = meals.find((m) => m.id === mealId);
  if (!meal || !meal.ingredients[index]) return;

  toggleIngredient(dayKey, index);
}

function addAllIngredients(dayKey) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const mealId = dayState.meal;
  const meal = meals.find((m) => m.id === mealId);
  if (!meal) return;
  meal.ingredients.forEach((ingredient) =>
    addToShoppingList(withServings(ingredient, dayState.servings), meal.name, dayKey)
  );
  refreshDayIngredients(dayKey);
}

function addToShoppingList(ingredient, mealName, dayKey) {
  const key = `${ingredient.item.toLowerCase()}|${ingredient.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);

  if (existing) {
    existing.count += 1;
    if (!existing.sources.includes(source)) {
      existing.sources.push(source);
    }
  } else {
    shoppingList.push({
      key,
      item: ingredient.item,
      amount: ingredient.amount,
      count: 1,
      sources: [source],
      purchased: false
    });
  }

  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function removeFromShoppingList(ingredient, mealName, dayKey) {
  const key = `${ingredient.item.toLowerCase()}|${ingredient.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return;

  existing.count -= 1;
  existing.sources = existing.sources.filter((s) => s !== source);

  if (existing.count <= 0) {
    shoppingList = shoppingList.filter((entry) => entry.key !== key);
  }

  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function labelForDay(key) {
  const found = dayOrder.find((day) => day.key === key);
  return found ? found.label : key;
}

function removeByKey(key) {
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return;
  existing.count -= 1;
  if (existing.count <= 0) {
    shoppingList = shoppingList.filter((entry) => entry.key !== key);
  }
  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function togglePurchased(key) {
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return;
  existing.purchased = !existing.purchased;
  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function addExpense({ amount, date, category, note }) {
  const monthKey = date ? date.slice(0, 7) : currentMonthKey();
  ensureMonth(monthKey);
  const id = arguments[0].id || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  budgetState.months[monthKey].expenses.unshift({
    id,
    amount,
    date,
    category,
    note
  });
  saveState(storageKeys.budget, budgetState);
  renderBudget();
}

function renderBudget() {
  if (!budgetMonthLabel) return;
  ensureMonth(activeBudgetMonth);

  const monthBudget = getMonthBudget(activeBudgetMonth);
  const used = monthBudget.expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
  const goal = Number(monthBudget.goal || 0);
  budgetMonthLabel.textContent = activeBudgetMonth;
  budgetUsedEl.textContent = `${Math.round(used)} kr`;
  budgetGoalLabelEl.textContent = goal ? `av ${Math.round(goal)} kr` : "Ingen mål satt";

  const percent = goal ? Math.min(1, used / goal) : 0;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference * (1 - percent);
  if (donutValue) {
    donutValue.style.strokeDasharray = `${circumference}`;
    donutValue.style.strokeDashoffset = `${offset}`;
  }

  budgetSummaryEl.innerHTML = `
    <div>Brukt: ${used.toFixed(0)} kr</div>
    <div>Gjenstår: ${goal ? Math.max(0, goal - used).toFixed(0) : "–"} kr</div>
  `;

  const byCat = monthBudget.expenses.reduce((acc, e) => {
    const key = e.category || "Annet";
    acc[key] = (acc[key] || 0) + Number(e.amount || 0);
    return acc;
  }, {});
  const catEntries = Object.entries(byCat);
  budgetCategoriesEl.innerHTML = catEntries.length
    ? catEntries
        .map(
          ([cat, val]) => `
          <div class="category-chip">
            <div class="category-chip__name"><span class="category-dot"></span>${cat}</div>
            <div class="category-chip__amount">${val.toFixed(0)} kr</div>
          </div>
        `
        )
        .join("")
    : `<div class="empty-state">Ingen utgifter registrert ennå.</div>`;

  budgetExpensesEl.innerHTML = monthBudget.expenses.length
    ? monthBudget.expenses
        .map(
          (e) => `
        <li class="expense-item">
          <div>
            <div class="expense-item__amount">${Number(e.amount).toFixed(0)} kr</div>
            <div class="expense-item__meta">${e.category || "Annet"} · ${e.note || "Ingen notat"}</div>
          </div>
          <div class="expense-item__meta">
            ${e.date}
            <div class="receipt-buttons">
              <button class="button button--ghost button--icon" data-action="edit-expense" data-id="${e.id}" aria-label="Rediger transaksjon">✎</button>
              <button class="button button--ghost button--icon" data-action="delete-expense" data-id="${e.id}" aria-label="Slett transaksjon">🗑</button>
            </div>
          </div>
        </li>
      `
        )
        .join("")
    : `<li class="empty-state">Ingen transaksjoner denne måneden.</li>`;

  renderReceipts();
}

function currentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function ensureMonth(monthKey) {
  if (!budgetState.months) budgetState.months = {};
  if (!budgetState.months[monthKey]) {
    budgetState.months[monthKey] = { goal: budgetState.months[currentMonthKey()]?.goal || 4000, expenses: [] };
  }
}

function getMonthBudget(monthKey) {
  ensureMonth(monthKey);
  return budgetState.months[monthKey];
}

function monthLabels() {
  const months = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), i, 1);
    const key = `${d.getFullYear()}-${String(i + 1).padStart(2, "0")}`;
    const label = d.toLocaleString("nb-NO", { month: "long" });
    months.push({ key, label });
  }
  return months;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function fetchReceipts() {
  try {
    const resp = await fetch("/api/receipts");
    const json = await resp.json();
    receiptState = json.receipts || [];
  } catch (err) {
    console.error("Kunne ikke hente kvitteringer", err);
    receiptState = [];
  }
}

function renderReceipts() {
  if (!budgetReceiptsEl) return;
  const filtered = receiptState.filter((r) => (r.date || "").startsWith(activeBudgetMonth));
  if (!filtered.length) {
    budgetReceiptsEl.innerHTML = `<li class="empty-state">Ingen kvitteringer.</li>`;
    return;
  }
  budgetReceiptsEl.innerHTML = filtered
    .map(
      (r) => `
      <li class="expense-item">
        <div>
          <div class="expense-item__amount">${Number(r.amount || 0).toFixed(0)} kr</div>
          <div class="expense-item__meta">${r.note || r.filename || "Kvittering"}</div>
        </div>
        <div class="expense-item__meta">
          ${r.date || ""} · ${r.category || "Annet"}
          <div class="receipt-buttons">
            ${
              r.imageData
                ? `<button class="button button--ghost button--icon" data-action="view-receipt" data-id="${r.id}" aria-label="Vis kvittering">👁</button>`
                : ""
            }
            <button class="button button--ghost button--icon" data-action="edit-receipt" data-id="${r.id}" aria-label="Rediger">✎</button>
            <button class="button button--ghost button--icon" data-action="delete-receipt" data-id="${r.id}" aria-label="Slett">🗑</button>
          </div>
        </div>
      </li>
    `
    )
    .join("");
}

function filterMeals(query, category) {
  return meals.filter((meal) => {
    const matchesName = meal.name.toLowerCase().includes(query);
    const matchesCategory = !category || meal.category === category;
    return matchesName && matchesCategory;
  });
}

function renderCategoryOptions(selected) {
  const cats = Array.from(new Set(meals.map((m) => m.category).filter(Boolean))).sort();
  const base = `<option value="">Alle kategorier</option>`;
  const opts = cats
    .map((cat) => `<option value="${cat}" ${cat === selected ? "selected" : ""}>${cat}</option>`)
    .join("");
  return base + opts;
}

function renderSteps(steps) {
  return `
    <div class="steps" data-action="view-steps">
      <div class="steps__title">Fremgangsmåte</div>
      <ol class="steps__list">
        ${steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
      <div class="steps__actions">
        <button class="button button--ghost button--icon" type="button" data-action="view-steps">→</button>
      </div>
    </div>
  `;
}

function getRestSuggestions(meal, dayKey) {
  if (!meal) return [];
  const lowerIngredients = (meal.ingredients || []).map((ing) => ing.item.toLowerCase());
  const matches = Object.entries(restSuggestionMap).flatMap(([key, suggestions]) => {
    const hit = lowerIngredients.some((name) => name.includes(key));
    if (!hit) return [];
    return suggestions;
  });
  const unique = Array.from(new Set(matches)).filter((id) => id !== meal.id);
  const suggestions = unique
    .map((id) => meals.find((m) => m.id === id))
    .filter(Boolean)
    .slice(0, 3);
  return suggestions;
}

function nextDayKey(dayKey) {
  const idx = dayOrder.findIndex((d) => d.key === dayKey);
  if (idx === -1) return dayOrder[0].key;
  return dayOrder[(idx + 1) % dayOrder.length].key;
}

function withServings(ingredient, servings) {
  return {
    ...ingredient,
    amount: formatAmount(ingredient.amount, servings)
  };
}

function isIngredientInList(ingredient, mealName, dayKey, servings = defaultServings) {
  const scaled = withServings(ingredient, servings);
  const key = `${scaled.item.toLowerCase()}|${scaled.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return false;
  return existing.sources.includes(source);
}

function formatAmount(amount, servings) {
  if (!amount) return "";
  const factor = servings / defaultServings;
  if (factor === 1) return amount;
  const numberRegex = /(\d+(?:[.,]\d+)?)/g;
  return amount.replace(numberRegex, (match) => {
    const normalized = match.replace(",", ".");
    const numeric = parseFloat(normalized);
    if (Number.isNaN(numeric)) return match;
    const scaled = numeric * factor;
    const formatted = Number.isInteger(scaled) ? String(scaled) : scaled.toFixed(1).replace(/\.0$/, "");
    return formatted;
  });
}

function clearShoppingList() {
  shoppingList = [];
  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function clearMeal(dayKey) {
  const current = planState[dayKey] || { servings: defaultServings };
  planState[dayKey] = { meal: "", servings: current.servings || defaultServings, restSource: null };
  saveState(storageKeys.plan, planState);
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  if (select) {
    select.value = "";
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(mealFilters[dayKey] || "", "", dayKey);
  }
  refreshDayIngredients(dayKey);
}

function refreshDayIngredients(dayKey) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
  if (ingredientsEl) {
    ingredientsEl.innerHTML = renderIngredientsContent(dayState.meal, dayKey, dayState.servings);
  }
  if (dayKey === activeDayPlan) {
    renderDayPlan();
  }
}

function toggleIngredient(dayKey, index) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const meal = meals.find((m) => m.id === dayState.meal);
  if (!meal || !meal.ingredients[index]) return;

  const scaled = withServings(meal.ingredients[index], dayState.servings);
  const already = isIngredientInList(meal.ingredients[index], meal.name, dayKey, dayState.servings);

  if (already) {
    removeFromShoppingList(scaled, meal.name, dayKey);
  } else {
    addToShoppingList(scaled, meal.name, dayKey);
  }
  refreshDayIngredients(dayKey);
}

function addReminder(text) {
  const dayList = remindersState[activeDayPlan] || [];
  const item = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    text: text.trim()
  };
  remindersState = { ...remindersState, [activeDayPlan]: [...dayList, item] };
  saveState(storageKeys.reminders, remindersState);
  renderDayPlan();
}

function planRestSuggestion(fromDay, toDay, mealId) {
  const fromMeal = planState[fromDay]?.meal || "";
  const toState = planState[toDay] || { servings: defaultServings };
  planState[toDay] = {
    meal: mealId,
    servings: toState.servings || defaultServings,
    restSource: { fromDay, fromMeal }
  };
  saveState(storageKeys.plan, planState);
  refreshDayIngredients(toDay);
  buildPlanner();
}

function openStepsOverlay(dayKey) {
  if (!stepsOverlay || !stepsTitleEl || !stepsBodyEl) return;
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const meal = meals.find((m) => m.id === dayState.meal);
  if (!meal) return;
  const steps = mealStepsDetailed[meal.id] || mealSteps[meal.id] || [];
  stepsTitleEl.textContent = meal.name;
  stepsSubtitleEl.textContent = `${dayState.servings} ${dayState.servings === 1 ? "person" : "personer"} · ${meal.category || "Uten kategori"}`;
  stepsBodyEl.innerHTML = `
    <ol>
      ${steps.map((step) => `<li>${step}</li>`).join("")}
    </ol>
  `;
  stepsOverlay.hidden = false;
  stepsOverlay.classList.add("is-open");
}

function closeStepsOverlay() {
  if (!stepsOverlay) return;
  stepsOverlay.classList.remove("is-open");
  stepsOverlay.hidden = true;
}

function closeReceiptOverlay() {
  if (!receiptOverlay) return;
  receiptOverlay.classList.remove("is-open");
  receiptOverlay.hidden = true;
}

async function updateReceipt(id, payload) {
  try {
    await fetch(`/api/receipts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    await fetchReceipts();
    renderReceipts();
  } catch (err) {
    console.error("Kunne ikke oppdatere kvittering", err);
  }
}

async function deleteReceipt(id, silent = false) {
  try {
    await fetch(`/api/receipts/${id}`, { method: "DELETE" });
    await fetchReceipts();
    renderReceipts();
  } catch (err) {
    if (!silent) console.error("Kunne ikke slette kvittering", err);
  }
}

async function updateExpense(monthKey, id, payload) {
  try {
    await fetch(`/api/state/expense`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ month: monthKey, id, ...payload })
    });
    // Oppdater lokalt for rask UI
    const month = getMonthBudget(monthKey);
    const idx = month.expenses.findIndex((e) => e.id === id);
    if (idx !== -1) {
      month.expenses[idx] = { ...month.expenses[idx], ...payload };
      saveState(storageKeys.budget, budgetState);
      renderBudget();
    }
  } catch (err) {
    console.error("Kunne ikke oppdatere transaksjon", err);
  }
}

async function deleteExpense(monthKey, id) {
  try {
    await fetch(`/api/state/expense/${monthKey}/${id}`, { method: "DELETE" });
    const month = getMonthBudget(monthKey);
    month.expenses = month.expenses.filter((e) => e.id !== id);
    // Slett kvittering med samme id hvis finnes
    await deleteReceipt(id, true);
    saveState(storageKeys.budget, budgetState);
    renderBudget();
  } catch (err) {
    console.error("Kunne ikke slette transaksjon", err);
  }
}

function removeReminder(id) {
  const dayList = remindersState[activeDayPlan] || [];
  remindersState = {
    ...remindersState,
    [activeDayPlan]: dayList.filter((item) => item.id !== id)
  };
  saveState(storageKeys.reminders, remindersState);
  renderDayPlan();
}

dayGrid.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("select[data-day]")) {
    const dayKey = target.getAttribute("data-day");
    updateMeal(dayKey, target.value);
  }
});

dayGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (target.dataset.action === "add-ingredient") {
    const dayKey = target.getAttribute("data-day");
    const index = Number(target.getAttribute("data-index"));
    addIngredient(dayKey, index);
  }

  if (target.dataset.action === "add-all") {
    const dayKey = target.getAttribute("data-day");
    addAllIngredients(dayKey);
  }

  if (target.dataset.action === "choose-meal") {
    const dayKey = target.getAttribute("data-day");
    const mealId = target.getAttribute("data-meal");
    const select = document.querySelector(`select[data-day="${dayKey}"]`);
    if (select) {
      select.value = mealId;
    }
    updateMeal(dayKey, mealId);
  }

  if (target.dataset.action === "clear-meal") {
    const dayKey = target.getAttribute("data-day");
    clearMeal(dayKey);
  }

  if (target.dataset.action === "plan-rest") {
    const fromDay = target.getAttribute("data-day");
    const toDay = target.getAttribute("data-next");
    const mealId = target.getAttribute("data-meal");
    planRestSuggestion(fromDay, toDay, mealId);
  }
  if (target.dataset.action === "servings-inc" || target.dataset.action === "servings-dec") {
    return; // handled in separate click listener below
  }
});

document.body.addEventListener("click", (event) => {
  const stepsTrigger = event.target.closest("[data-action='view-steps']");
  if (stepsTrigger) {
    openStepsOverlay(activeDayPlan);
  }

  const closeTrigger = event.target.closest("[data-action='close-steps']");
  if (closeTrigger) {
    closeStepsOverlay();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeStepsOverlay();
    closeReceiptOverlay();
  }
});

budgetSetGoalBtn?.addEventListener("click", () => {
  const current = getMonthBudget(activeBudgetMonth).goal || 0;
  const input = prompt("Sett månedsbudsjett (kr):", String(current));
  if (input === null) return;
  const value = Number(input);
  if (Number.isNaN(value) || value <= 0) return;
  budgetState.months[activeBudgetMonth] = {
    ...getMonthBudget(activeBudgetMonth),
    goal: value
  };
  saveState(storageKeys.budget, budgetState);
  renderBudget();
});

expenseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Number(expenseAmount.value);
  if (Number.isNaN(amount) || amount <= 0) return;
  const date = expenseDate.value || new Date().toISOString().slice(0, 10);
  const category = expenseCategory.value || "Annet";
  const note = expenseNote.value || "";
  addExpense({ amount, date, category, note });
  expenseForm.reset();
  expenseDate.value = date;
});

receiptFile?.addEventListener("change", async () => {
  const file = receiptFile.files?.[0];
  if (!file) {
    receiptPreview.innerHTML = "";
    receiptStatus.textContent = "Ingen kvittering valgt.";
    return;
  }
  const dataUrl = await fileToDataUrl(file);
  if (file.type === "application/pdf" || dataUrl.startsWith("data:application/pdf")) {
    receiptPreview.textContent = `PDF valgt: ${file.name}`;
  } else {
    receiptPreview.innerHTML = `<img src="${dataUrl}" alt="Kvittering">`;
  }
  receiptStatus.textContent = `Valgt: ${file.name}`;
  currentReceiptDataUrl = dataUrl;
});

receiptForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = receiptFile.files?.[0];
  if (!file) {
    receiptStatus.textContent = "Velg et bilde først.";
    return;
  }
  const amount = Number(receiptAmount.value);
  if (Number.isNaN(amount) || amount <= 0) {
    receiptStatus.textContent = "Beløp må fylles ut.";
    return;
  }
  const date = receiptDate.value || new Date().toISOString().slice(0, 10);
  const category = receiptCategory.value || "Annet";
  const note = receiptNote.value || file.name;
  receiptStatus.textContent = "Lagrer kvittering...";
  const imageData = currentReceiptDataUrl || (await fileToDataUrl(file));

  // Oppdater budsjett lokalt med samme id som kvitteringen
  const newId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  addExpense({ id: newId, amount, date, category, note });

  // Forsøk å sende til backend kvitteringslager
  try {
    await fetch("/api/receipts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        date,
        category,
        note,
        id: newId,
        filename: file.name,
        imageData
      })
    });
    receiptStatus.textContent = "Kvittering lagret.";
    await fetchReceipts();
    renderReceipts();
  } catch (err) {
    console.error(err);
    receiptStatus.textContent = "Lagret lokalt (backend ikke tilgjengelig).";
  }

  receiptForm.reset();
  receiptPreview.innerHTML = "";
});

receiptAnalyze?.addEventListener("click", async () => {
  const file = receiptFile.files?.[0];
  if (!file) {
    receiptStatus.textContent = "Velg et bilde først.";
    return;
  }
  receiptStatus.textContent = "Analyserer...";
  const dataUrl = currentReceiptDataUrl || (await fileToDataUrl(file));
  currentReceiptDataUrl = dataUrl;
  try {
    const resp = await fetch("/api/analyze-receipt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageData: dataUrl,
        note: receiptNote.value || file.name,
        amount: receiptAmount.value || undefined
      })
    });
    const json = await resp.json();
    if (json.total) receiptAmount.value = json.total;
    if (json.date) receiptDate.value = json.date;
    if (json.category) receiptCategory.value = json.category;
    receiptStatus.textContent = "Analyse fullført. Rediger og lagre.";
  } catch (err) {
    console.error(err);
    receiptStatus.textContent = "Kunne ikke analysere. Fyll inn manuelt.";
  }
});

receiptViewCurrent?.addEventListener("click", () => {
  if (currentReceiptDataUrl) {
    const isPdf = currentReceiptDataUrl.startsWith("data:application/pdf");
    if (isPdf && receiptOverlayEmbed) {
      receiptOverlayEmbed.hidden = false;
      receiptOverlayImg.hidden = true;
      receiptOverlayEmbed.src = currentReceiptDataUrl;
    } else {
      receiptOverlayEmbed.hidden = true;
      receiptOverlayImg.hidden = false;
      receiptOverlayImg.src = currentReceiptDataUrl;
    }
    receiptOverlayTitle.textContent = receiptNote.value || "Kvittering";
    receiptOverlaySubtitle.textContent = receiptDate.value || "";
    receiptOverlay.hidden = false;
    receiptOverlay.classList.add("is-open");
  } else {
    receiptStatus.textContent = "Ingen kvittering å vise.";
  }
});

dayGrid.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("input[data-day-filter]")) return;
  const dayKey = target.getAttribute("data-day-filter");
  const value = target.value || "";
  mealFilters[dayKey] = value;
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  if (select) {
    select.innerHTML = renderMealOptions(value, dayState.meal, mealCategoryFilters[dayKey] || "");
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(value, dayState.meal, dayKey, mealCategoryFilters[dayKey] || "");
  }
});

dayGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (target.dataset.action === "servings-inc" || target.dataset.action === "servings-dec") {
    const dayKey = target.getAttribute("data-day");
    const current = planState[dayKey] || { meal: "", servings: defaultServings };
    let next = current.servings || defaultServings;
    if (target.dataset.action === "servings-inc") next = Math.min(12, next + 1);
    if (target.dataset.action === "servings-dec") next = Math.max(1, next - 1);
    planState[dayKey] = { meal: current.meal, servings: next, restSource: current.restSource || null };
    saveState(storageKeys.plan, planState);
    const valEl = document.querySelector(`.servings-counter[data-servings="${dayKey}"] .servings-value`);
    if (valEl) valEl.textContent = next;
    const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
    if (ingredientsEl) {
      ingredientsEl.innerHTML = renderIngredientsContent(current.meal, dayKey, next);
    }
    if (dayKey === activeDayPlan) {
      renderDayPlan();
    }
  }
});

dayGrid.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("select[data-day-category]")) return;
  const dayKey = target.getAttribute("data-day-category");
  const category = target.value || "";
  mealCategoryFilters[dayKey] = category;
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  if (select) {
    select.innerHTML = renderMealOptions(mealFilters[dayKey] || "", dayState.meal, category);
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(mealFilters[dayKey] || "", dayState.meal, dayKey, category);
  }
});

clearListButton.addEventListener("click", clearShoppingList);

document.querySelector(".topbar")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  const tabName = button.getAttribute("data-tab");
  if (tabName && tabName !== activeTab) {
    setActiveTab(tabName);
  }
});

shoppingListEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='remove-shopping']");
  if (button) {
    const key = button.getAttribute("data-key");
    if (!key) return;
    removeByKey(key);
    return;
  }

  const checkbox = event.target.closest("[data-action='toggle-purchased']");
  if (checkbox) {
    const key = checkbox.getAttribute("data-key");
    if (!key) return;
    togglePurchased(key);
  }
});

daySelector?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-select]");
  if (!button) return;
  const dayKey = button.getAttribute("data-day-select");
  if (!dayKey) return;
  activeDayPlan = dayKey;
  buildDaySelector();
  renderDayPlan();
});

mealDaySelector?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-meal-day]");
  if (!button) return;
  const dayKey = button.getAttribute("data-meal-day");
  if (!dayKey) return;
  activeMealDay = dayKey;
  buildMealDaySelector();
  buildPlanner();
});

reminderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = reminderInput?.value?.trim();
  if (!text) return;
  addReminder(text);
  reminderInput.value = "";
});

budgetMonthSelector?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-budget-month]");
  if (!button) return;
  const monthKey = button.getAttribute("data-budget-month");
  if (!monthKey) return;
  activeBudgetMonth = monthKey;
  buildBudgetMonthSelector();
  renderBudget();
});

reminderListEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='remove-reminder']");
  if (!button) return;
  const id = button.getAttribute("data-id");
  if (!id) return;
  removeReminder(id);
});

buildPlanner();
renderShoppingList();
setActiveTab(activeTab);
buildDaySelector();
buildMealDaySelector();
renderDayPlan();
fetchReceipts().finally(() => {
  renderBudget();
  buildBudgetMonthSelector();
});
document.body.addEventListener("click", (event) => {
  const viewBtn = event.target.closest("[data-action='view-receipt']");
  if (viewBtn) {
    const id = viewBtn.getAttribute("data-id");
    const receipt = receiptState.find((r) => r.id === id);
    if (receipt && receipt.imageData && receiptOverlay) {
      const isPdf = receipt.imageData.startsWith("data:application/pdf");
      if (isPdf && receiptOverlayEmbed) {
        receiptOverlayEmbed.hidden = false;
        receiptOverlayImg.hidden = true;
        receiptOverlayEmbed.src = receipt.imageData;
      } else {
        receiptOverlayEmbed.hidden = true;
        receiptOverlayImg.hidden = false;
        receiptOverlayImg.src = receipt.imageData;
      }
      receiptOverlayTitle.textContent = receipt.note || receipt.filename || "Kvittering";
      receiptOverlaySubtitle.textContent = `${receipt.date || ""} · ${Number(receipt.amount || 0).toFixed(0)} kr`;
      receiptOverlay.hidden = false;
      receiptOverlay.classList.add("is-open");
    }
  }

  const editBtn = event.target.closest("[data-action='edit-receipt']");
  if (editBtn) {
    const id = editBtn.getAttribute("data-id");
    const receipt = receiptState.find((r) => r.id === id);
    if (!receipt) return;
    const amountInput = prompt("Beløp (kr):", String(receipt.amount || ""));
    if (amountInput === null) return;
    const amount = Number(amountInput);
    if (Number.isNaN(amount) || amount < 0) return;
    const dateInput = prompt("Dato (YYYY-MM-DD):", receipt.date || new Date().toISOString().slice(0, 10));
    if (dateInput === null) return;
    const categoryInput = prompt("Kategori:", receipt.category || "Annet");
    if (categoryInput === null) return;
    const noteInput = prompt("Notat:", receipt.note || "");
    if (noteInput === null) return;
    updateReceipt(id, { amount, date: dateInput, category: categoryInput, note: noteInput, imageData: receipt.imageData });
  }

  const deleteBtn = event.target.closest("[data-action='delete-receipt']");
  if (deleteBtn) {
    const id = deleteBtn.getAttribute("data-id");
    if (!id) return;
    if (!confirm("Slett kvittering?")) return;
    deleteReceipt(id);
  }

  const editExpBtn = event.target.closest("[data-action='edit-expense']");
  if (editExpBtn) {
    const id = editExpBtn.getAttribute("data-id");
    const monthBudget = getMonthBudget(activeBudgetMonth);
    const expense = monthBudget.expenses.find((e) => e.id === id);
    if (!expense) return;
    const amountInput = prompt("Beløp (kr):", String(expense.amount || ""));
    if (amountInput === null) return;
    const amount = Number(amountInput);
    if (Number.isNaN(amount) || amount < 0) return;
    const dateInput = prompt("Dato (YYYY-MM-DD):", expense.date || new Date().toISOString().slice(0, 10));
    if (dateInput === null) return;
    const categoryInput = prompt("Kategori:", expense.category || "Annet");
    if (categoryInput === null) return;
    const noteInput = prompt("Notat:", expense.note || "");
    if (noteInput === null) return;
    updateExpense(activeBudgetMonth, id, { amount, date: dateInput, category: categoryInput, note: noteInput });
  }

  const deleteExpBtn = event.target.closest("[data-action='delete-expense']");
  if (deleteExpBtn) {
    const id = deleteExpBtn.getAttribute("data-id");
    if (!id) return;
    if (!confirm("Slett transaksjon?")) return;
    deleteExpense(activeBudgetMonth, id);
  }

  const closeReceipt = event.target.closest("[data-action='close-receipt']");
  if (closeReceipt) {
    closeReceiptOverlay();
  }
});
