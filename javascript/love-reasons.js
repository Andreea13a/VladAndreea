// love-reasons.js

// Lista de motive pentru care te iubesc (128 de motive fără numerotare)
const loveReasons = [
  "Mă asculți mereu, tot ce povestesc, asculțî nu numai auzi",
  "Nu mai fumezi așa des țigări",
  "Pentru toată cafeaua pe care o beau cu tine, chiar dacă știi că nu am voie",
  "Pentru că nu ai lăsat pe nimeni să zică ceva de rău de mine sau să vorbească urât",
  "Pentru toate mesele pe care le-ai plătit",
  "Pentru că pot să-ți povestesc orice",
  "Pentru că atunci când am început să vorbim și eu nu voiam nimic, ai spus că o să mă aștepți",
  "Pentru că nu ai grăbit nimic, mi-ai dat timp să mă acomodez",
  "Pentru că mă simt în siguranță, mă simt bine când sunt cu tine",
  "Pentru că ți-am povestit chestii pe care nu le știe nimeni practic",
  "Pentru momentele când ne jucăm împreună",
  "Pentru că atunci când sunt supărată, nu mă lași să stau așa",
  "Pentru că dacă te întreb, îmi explici",
  "Pentru că o dată când am plătit o rochie, mi-ai pus banii în portofel",
  "Pentru că atunci când nu știai ce să-mi iei să mănânc, mi-ai luat două feluri să te asiguri",
  "Pentru că știi tot ce îmi place și nu",
  "Pentru că vorbești numai cu iubire, iubirea mea chiar și dacă ești supărat",
  "Pentru că ești prima persoană care nu îmi spunea 'păpușă', 'prințesă' dar mi-ai spus 'copilaș'",
  "Pentru că ții cu tine mereu cartonașul ăla pe care l-am făcut",
  "Pentru că nu ai pus prietenii vreodată mai presus ca mine, niciodată",
  "Pentru că mi-ai dat singur fără probleme IG-ul tău, are aceeași parolă ca și mine și poză cu noi de fundal",
  "Pentru că ți-ai cerut scuze chiar și când nu ai fost vinovat",
  "Pentru că tot vine așa de natural cu tine",
  "Pentru că ți-am spus că mai devreme de 17 ani și până ce nu aș fi împreună mai mult timp, nu vreau nimic, și ai zis că mă aștepți până aș fi eu gata",
  "Pentru că nu mi-ai judecat deciziile vreodată",
  "Pentru că mi-ai spus că sunt bravo, atunci când eu nu m-am simțit de fapt așa",
  "Pentru toate dățile când veneai miercuri la ed. fizică să stai cu mine",
  "Pentru dățile când am ieșit la cafea înainte și după colegiu",
  "Pentru emoțiile pe care mi le dădeau anumite interacțiuni când încă nu eram împreună și după tot",
  "Pentru că ai fost prima și unica persoană căreia am vrut să-i spun 'te iubesc'",
  "Pentru că ai spus că nu te duci la sală, de atâta că nu ai avea așa mult timp să ieși cu mine, pentru că eu sunt prioritatea ta",
  "Pentru că m-ai așteptat 4h să ies de la examen ca să mergem după în CT",
  "Pentru toate dățile când terminai mai repede și mă așteptai sau te duceai de la o pereche ca să mergem undeva sau pur și simplu împreună acasă",
  "Pentru că atunci când a trebuit să mă asemăn cu o băutură mi-ai spus că sunt ca vodka, tare deodată, dar cu cât bei mai mult, cu atât te înmoaie mai tare",
  "Pentru că atunci când a trebuit să mă asemăn cu o mâncare, m-ai asemănat cu un ecler, nu de atâta că e desertul meu preferat, dar de atâta că cel mai dulce e înăuntru, în cazul meu sufletul",
  "Pentru că spui 'te sun să vorbim măcar și 15 min'",
  "Pentru că ai zis 'vin să te văd și 10 min măcar'",
  "Pentru că ai spus că cel mai tare îți place când mă uit la tine și privirea mea îți ridică dispoziția",
  "Pentru că atunci când m-am supărat o dată și vedeai că nu îți răspund la 'te iubesc', ai încercat să spui cum te învățasem în spaniolă ('te amo mi amore')",
  "Pentru că atunci când am început a plânge, mă rugai să nu plâng că te doare pe tine și ai început să faci ca diferite animale ca să încep a râde",
  "Pentru că i-ai spus lu' Vasea că eu sunt una și pentru totdeauna",
  "Pentru că singur m-ai întrebat ce pastile îmi trebuie ca să te duci să-mi iei când ți-am zis că iar am alergie",
  "Pentru că ești prima persoană care am vrut să mă atingă și nu s-a simțit întrăitură după",
  "Pentru că m-ai întrebat după dacă tot normal și dacă nu m-am supărat",
  "Iubesc cum râzi, anume sunetul",
  "Te iubesc pentru glumele celea proastești pe care le faci și eu mă supăr",
  "Pentru că o dată când ne plimbam, era unu' bătut în fața noastră și ai văzut că m-am oprit din povestit, l-ai observat și deodată m-ai mutat în partea cealaltă",
  "Pentru că chiar dacă erai supărat pe mine nu ai lăsat pe altcineva să zică ceva de rău de mine sau să facă ceva",
  "Pentru că am simțit de la tine o căldură pe care nu am mai simțit de la nimeni",
  "Pentru că ai apărut fix când nu voiam nimic și m-ai făcut să-mi schimb părerea total",
  "Pentru că atunci când ți-a căzut mesajul ăla sub sticla de Tymbark te-ai dus și ai mai cumpărat până a căzut unu' normal ('Fericirea este aproape')",
  "Pentru că ai spus că abia aștepți momentul când aș fi scris în telefon 'Acasă'",
  "Pentru că ai devenit într-un timp așa de scurt persoana mea preferată",
  "Pentru că atunci când mă simt rău îmi spui că nu mă duc nicăieri azi, nici la sală și să mă duc acasă să mă odihnesc",
  "Pentru că ai purtat și hanoracul și husa pe care ți le-am dat",
  "Pentru că atunci când eram la Naringi și am zis că aș mânca un ecler, ai luat 2",
  "Pentru că m-ai sunat să mă întrebi dacă mi-e foame, ți-am spus că nu, dar îmi luasei de-am mâncare",
  "Pentru momentele când mă pupi pe cap și îmi spui că mă iubești",
  "Iubesc ochii tăi, pentru că nu mi-au plăcut niciodată ochii albaștri, până i-am văzut pe ai tăi",
  "Iubesc gropița aia din barbă, care ție nu îți place",
  "Pentru că ai răbdare cu mine",
  "Iubesc fața ta conturată și nasul, ai nas frumos",
  "Pentru că ești prima persoană cu care am putut să-i spun mereu ce mă deranjează, fără să mă simt vinovată",
  "Iubesc cum mă poți face mereu să rad",
  "Atunci când îmi sufli în păr și mă enervez",
  "Iubesc când încerci să-mi pocnești degetele și nu îți dau voie",
  "Iubesc felul tău de a fi bun cu toți, mereu",
  "Iubesc modul cum mă acoperi și tot se simte bine iar",
  "Iubesc cât de mică se vede mâna mea în a ta",
  "Te iubesc, pentru că atunci când așteptam la kebab și te-ai tăiat, eu îți țineam servetelul și te-ai uitat așa la mine (mai diferit atunci) și mi-ai spus că mă iubești",
  "Pentru că atunci când am ieșit cu Teo ai luat toate chestiile care îmi plac, eclere, croissant cu cocos și ciocolată cu mentă",
  "Pentru că în septembrie când trebuia să merg vineri la Soroca, ai așteptat cu mine până au venit părinții mei",
  "Pentru că ești prima persoană care a observat că mă joc cu unghiile sau inelele când am emoții sau ceva nu îmi place",
  "Iubesc modul cum te uiți la mine, într-un mod în care parcă chiar mă vezi, nu doar te uiți",
  "Pur simplu pentru că ești",
  "Pentru că m-ai sunat peste 10 min să îmi spui că ai uitat să îmi zici la urmă 'te-am pupat și te iubesc'",
  "Pentru toate florile pe care le-ai luat",
  "Pentru că nu ai insistat și nu ai făcut nimic ce nu am vrut și te-ai asigurat că tot normal și că nu mă simt întrăitură sau nu îmi place ceva",
  "Pentru că atunci când ți-am spus că nu, ai spus că bine și nu a fost nimic",
  "Pentru că ai venit oricum pe 10, când nu ai putut pe 8 martie",
  "Pentru că mi-ai luat colierul ăla drăguț de ziua mea",
  "Pentru că o dată mi-ai spus că am un coș pe nas (nu cu rău) și m-ai pupat special acolo",
  "Pentru că mi-ai rupt 3 floricele mi le-ai dat și ai spus 'Na 3 flori și nu te enerva iubirea mea'",
  "Pentru că nu te cerți în rând cu mine sau să te superi tot tu dar asculți ce îți spun și îți ceri scuze deodată",
  "Pentru că ai mers cu mine după analize și înapoi acasă când am avut o urgență",
  "Pentru că te-am auzit azi prima oară chiar să vorbești deschis deschis cu mine și mi-ai povestit pentru prima oară anumite chestii",
  "Pentru că ți-am spus o dată când nu ai deschis ușa și de-am vii și din alt capăt să o deschizi numai",
  "Pentru că atunci când te-am sunat din baie când se întâmplase ceva și începusem să plâng mi-ai zis să mergem acasă și aș fi tot bine numai să nu plâng",
  "Te iubesc pentru că datorită ție am început să iubesc lucruri la mine care nu m-aș fi gândit vreodată că o să îmi placă măcar",
  "Pentru că mă simt mult mai bine, mai simplă și așa cum sunt eu când sunt cu tine",
  "Pentru că atunci când m-am lovit o dată sub buză, mă pupai întruna acolo ca să îmi treacă",
  "Pentru că te-ai pus în fața mea special ca să nu mă bată vântul",
  "Pentru că ți-am spus o dată că de ce nu te-ai gândit tu să rupi o crenguță cu flori, dar Vasile da și azi când am ieșit ai rupt singur de la 3 copaci crenguțe cu flori",
  "Pentru că ai dat SINGUR idee de TikTok",
  "Pentru că întrebi mereu când... 'tot normal?'",
  "Pentru că ești prima persoană cu care mă simt pur simplu normal, relaxată, fără să trebuiască să mă gândesc la ceva când sunt cu tine",
  "Pentru că de fiecare dată când îmi iei ceva, măcar și o cafea și îți spun mulțumesc te uiți așa la mine și râzi/zâmbești parcă nu e cine știe ce",
  "Pentru că rupi tot timpul flori și azi ai rupt o crenguță de flori roz și era numai un copac roz printre toți restul cafenii și ai spus 'iată tu ești copacul ăla roz printre restul'",
  "Pentru că mi-ai spus că mă iubești într-un moment mai aparte",
  "Pentru că tot timpul spui 'da mânuța'",
  "Și dacă nu dau mâna normal, mi-o iei oricum în a ta și îmi închizi degetele să te țin normal de mână",
  "Pentru că mi-ai spus să mă îmbrac în haina ta să nu îmi fie frig și la urmă mi-ai spus să o păstrez că așa o iau altă dată de-am",
  "Pentru că nu m-am așezat niciodată pe rece, ori te puneai tu și îmi spuneai să mă așez la tine în brațe sau mă sculai ca să îmi pui haina ta",
  "Pentru că am vrut să deschid ușa o dată și ai spus că 'nu, tu pe asta nu trebuie să pui mâna'",
  "Pentru că o dată când ai văzut că pur simplu sunt tristă și n-am dispoziție mi-ai zis 'nu fi tristă frumusețea me, gândește-te că te iubesc tare tare taree și mi-e dor de tine'",
  "Și când a auzit că am plâns a spus că i s-a stricat dispoziția că 'nu îmi place deloc când plângi'",
  "Pentru că mă întreabi dacă precis nu mă supăr când se culcă și o dată ai spus 'precis nu te superi, că dacă ceva eu mă dau cu capul de perete și nu adorm'",
  "Pentru că ai stat să-mi cureți ieri miez numai ca să nu mănânc răsărita cu coarjă",
  "Pentru că atunci la Vasea ai spus 'Nu știu pe mine nu mă băgați în tema voastră, dar eu sunt de acord cu Andreea, eu tot timpul sunt de acord cu dânsa'",
  "Pentru momentele când te întreb de ce te uiți la mine și spui 'pur simplu îmi place să mă uit la tine'",
  "Pentru faptul că ai spus că 'îmi place tot la tine, în special caracterul ăsta al tău'",
  "Pentru că ieri mi-ai spus... 'îmi place și nu numai de corp vorbesc, dar în general tu și tot la tine îmi place'",
  "Pentru că îmi întinzi mâna când ies din mașină",
  "Pentru că ai scos tu carnea de pe os ieri când ai văzut că nu vreau să mănânc cu mâna",
  "Pentru că mereu când vezi că mă joc cu unghiile sau inelele când ceva nu îmi place și am emoții, pui mâna la mine pe picior sau îmi iei mâna în mâna ta",
  "Cînd ai spus:Te iubesc în toate modurile posibile",
  "Pentru că mereu întrebi:Ce vrea să beie și să mănânce prințesa mea?",
  "'- Ești alintată tu. - Și asta a cui problemă e, a mea sau a ta? - Da cine a spus că asta e o problemă?'",
  "Pentru momentul când ai spus:Ție ți se pare că nu e așa de atâta că nu țin minte tot timpul tot, dar tu n-ai idee ce tare te iubesc",
  "Pentru că îți spusesem zilele trecute că aș mânca sushi și azi când am ieșit ai comandat",
  "Pentru că ai mai multă grijă de mine decât de tine",
  "Pentru că m-ai strâns în brațe când am început a plânge ('scuza-mă te rog și nu plânge')",
  "'Te iubesc. - Eu mai tare. - Până la cer și înapoi, mai departe de atât nu-i. - Eu o să găsesc'",
  "Pentru că mi-ai luat jucăriile celea două și chiar dacă mi-am ales numai una ai luat-o și pe cealaltă",
  "Pentru că ți-am spus pur simplu într-o seara la o bucată de noapte că aș mânca niște paste și ai spus că 'Mâine, prințesa mea când as ieșim o să mânânci paste'"
];

// Elementele DOM
const loveReasonDisplay = document.getElementById('loveReasonDisplay');
const generateLoveReasonBtn = document.getElementById('generateLoveReasonBtn');

// Funcție pentru a genera un motiv aleatoriu
function generateLoveReason() {
  // Alege un motiv aleatoriu din cele 128
  const randomIndex = Math.floor(Math.random() * loveReasons.length);
  const reason = loveReasons[randomIndex];
  
  // Animatie pentru schimbarea mesajului
  loveReasonDisplay.style.opacity = '0';
  loveReasonDisplay.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    loveReasonDisplay.textContent = reason;
    loveReasonDisplay.style.opacity = '1';
    loveReasonDisplay.style.transform = 'translateY(0)';
    
    // Efect special pentru buton
    generateLoveReasonBtn.innerHTML = '✨ Un motiv nou';
    
    // Resetare buton după 2 secunde
    setTimeout(() => {
      generateLoveReasonBtn.innerHTML = '✨ Descoperă motivul';
    }, 2000);
    
  }, 300);
}

// Adaugă evenimentul de click pe buton
generateLoveReasonBtn.addEventListener('click', generateLoveReason);

// Generează un motiv la încărcarea paginii
window.addEventListener('load', () => {
  setTimeout(generateLoveReason, 1000);
});