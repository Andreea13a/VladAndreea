// photo-generator.js - Generatorul de poze cu mesaje

// Lista de poze cu mesaje aferente (38 de poze cu mesaje personale)
const photoMemories = [
  {
    image: "poze/poza1.jpg",
    description: "Prima dată când te-ai lăsat cu capul pe mine 💕 .Ți-am pus și steluța ceea imi păr și acum țin minte ca mă temeam dacă o să o vrei sau nu."
  },
  {
    image: "poze/poza2.jpg",
    description: "Prima dată când eu am pus capul pe tine și ca deobicei o trebuit o poză in care să ies minunat.😂❤️ "
  },
  {
    image: "poze/poza3.jpg",
    description: "Prima noastra poză impreună 🌸 Tot în ziua asta m-ai sărutat prima dată și mi-ai zis că maiubești(eu tot te iubesc).🫶"
  },
  {
    image: "poze/poza4.jpg", 
    description: "Balul Bobocilor 🐣 M-am simțit așa de în siguranță in ziua ceea și era așa de cald lângă tine, cald în toate modurile posibile...❤️‍🩹"
  },
  {
    image: "poze/poza5.jpg",
    description: "Ziua Ionelei.Amintiri la balcon.🔒"
  },
  {
    image: "poze/poza6.jpg",
    description: "Când am ieșit cu Teo, am fost la magazin, ai cumpărat o grămadă de prostii care imi plac și am mâncat toți. 🍽️Și când eram in doi, lângă scaun atunci și îl strigai pe Teo să nu se ducă departe.😂"
  },
  {
    image: "poze/poza7.jpg",
    description: "Când eram la canapele și ne jucam și ai inceput să mă gâdili intrunaaa😄 Ionela ne făcuse pozele."
  },
  {
    image: "poze/poza8.jpg",
    description: "Asta ii poza normală📸 În celelalte te strâmbase-i special, pentru că te pusesem să faci poza.💜"
  },
  {
    image: "poze/poza9.jpg",
    description: "Doamneee, aici cînd venisei la mine de dimineață și ne pornisem la colegiu, eu aveam probleme atunci și când am vazut la baie în centru că mă pătasem, am început a plânge în baie, m-ai liniștit și am mers iar acasă să mă schimb...îți trebuia nota la chimie, dar ai mers oricum cu mine înapoi acasă...❤️"
  },
  {
    image: "poze/poza10.jpg",
    description: "Aici când te apucasei de lucru deam și ieșeam după lucru și țin minte cum mă supărasem o dată că nu ți-o dat singur în cap să rupi crenguțe și aici imi rupsesei una singur și așa taree mi-o plăcut...🥰🥰🥰"
  },
  {
    image: "poze/poza11.jpg",
    description: "Când ne certam in hol(în glumă) și ne arătam fuck you și după pur simplu m-ai tras și m-ai sărutat.💏❤️"
  },
  {
    image: "poze/poza12.jpg",
    description: "Aici ieșisem pe 31 mai toți in centru, nimic deosebit, doar imi place poza taree cum te uitai la mine și ce față ai făcut.😄"
  },
  {
    image: "poze/poza13.jpg",
    description: "31 mai, ai venit din spate când îmi făcea Ionela poze mie și ai vrut sa facem împreunăă.🥰🥰🥰"
  },
  {
    image: "poze/poza14.jpg",
    description: "Aici nu mai știai unde să mergem (ca deobicei) și am zis eu de Amor Amar.❤️"
  },
  {
    image: "poze/poza15.jpg",
    description: "Daaa primul picnic.Ai comandat sushi și am stat împreună in parc(la film nu ne-am mai uitat).💏😂"
  },
  {
    image: "poze/poza16.jpg",
    description: "La pozele astea nici nu am descriere..Iubesc cum te uiți la mine...💕"
  },
  {
    image: "poze/poza17.jpg",
    description: "Vibe de picnic..💫"
  },
  {
    image: "poze/poza18.jpg",
    description: "Aici iar la picnic, preferatele noastre erau deam.Luasem și cartea de colorat si o grămadă de mâncare de care nici nu ne-am atins.😂Sucurile in schimb..😍"
  },
  {
    image: "poze/poza19.jpg",
    description: "Gentelmen.❤️"
  },
  {
    image: "poze/poza20.jpg",
    description: "Tu uitându-te la cartea de colorat la care tipa 'Ei hai, nu colorez eu, nu am ce face sau ce?.'  și cine până la urmă colorase numa?😂❤️"
  },
  {
    image: "poze/poza21.jpg",
    description: "Florile mele preferate de la tine și singurele care ți s-au primit ca surpriză chiar.💕"
  },
  {
    image: "poze/poza22.jpg",
    description: "Cum te uitai la mine, când ți-am spus că nu îmi plac sprâncenele mele.😭"
  },
  {
    image: "poze/poza23.jpg",
    description: "Tu după ce mă enervezi și vii să mă împaci.Da mi-o placut kinderulll taree și era cu Stella, zâna mea preferată.😭❤️"
  },
  {
    image: "poze/poza24.jpg",
    description: "Prima dată când ai avut dreptate.Nu vroiam să incerc, dar mi-am luat pentru că sushi nu mai era și o fost așa bunee că după numa deaistea mai vroiam.🍣"
  },
  {
    image: "poze/poza25.jpg",
    description: "Picnic iar.Sushi-Noi-Film(a treia parte terminat de data asta).😅"
  },
  {
    image: "poze/poza26.jpg",
    description: "Ai venit la mine după ce mâncasem la Corso și ne-am uitat la un film(jumate), tot în ziua asta mă supărasem ca credeam că nu îți mai place de mine.😂❤️"
  },
  {
    image: "poze/poza27.jpg",
    description: "Pozele de la aniversarea de un an...💑"
  },
  {
    image: "poze/poza28.jpg",
    description: "Corso.😍😍😍"
  },
  {
    image: "poze/poza29.jpg",
    description: "Poza mea preferată de la colegiu...👀💜"
  },
  {
    image: "poze/poza30.jpg",
    description: "Tu foarte bucuros la cumpărături, când ți-am zis zâmbește oleacă.😂"
  },
  {
    image: "poze/poza31.jpg",
    description: "Ziua ta.Ador poza asta.💞"
  },
  {
    image: "poze/poza32.jpg",
    description: "Când ai venit la mine și te jucai cu Luca în play stacion.✨"
  },
  {
    image: "poze/poza33.jpg",
    description: "Poze făcute de Alexandra la colegiu.💞"
  },
  {
    image: "poze/poza35.jpg",
    description: "Summerfest 🍹 Mereu as țin minte videoul cela cu tine și Alina.😂"
  },
  {
    image: "poze/poza36.jpg",
    description: "Noi după ce ne-am certat 1h și deam tăt ii bine.Te iubesc.💗"
  },
  {
    image: "poze/poza37.jpg",
    description: "Poză foarte drăguță de la scaunu nostru, pe care l-o scos...și câte amintiri sunt acolo...🥹🥹🥹"
  },
  {
    image: "poze/poza38.jpg",
    description: "Parcul cela unde umblasem toatî vara...💗"
  }
];

const randomPhoto = document.getElementById('randomPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');
const photoDescription = document.getElementById('photoDescription');
const generatePhotoBtn = document.getElementById('generatePhotoBtn');


// Variabile pentru gestionarea pozelor
let lastPhotoIndex = -1;
let usedPhotos = [];

// Funcție pentru a genera o poză aleatorie
function generateRandomPhoto() {
  // Dacă toate pozele au fost afișate, resetează lista
  if (usedPhotos.length === photoMemories.length) {
    usedPhotos = [];
  }
  
  let randomIndex;
  let attempts = 0;
  
  // Găsește o poză care nu a fost afișată recent
  do {
    randomIndex = Math.floor(Math.random() * photoMemories.length);
    attempts++;
  } while (usedPhotos.includes(randomIndex) && attempts < photoMemories.length * 2);
  
  // Dacă nu găsește una nouă, ia oricare
  if (attempts >= photoMemories.length * 2) {
    randomIndex = Math.floor(Math.random() * photoMemories.length);
  }
  
  // Adaugă poza la lista celor folosite
  if (!usedPhotos.includes(randomIndex)) {
    usedPhotos.push(randomIndex);
  }
  
  const memory = photoMemories[randomIndex];
  
  // Animatie pentru schimbarea pozei
  randomPhoto.style.opacity = '0';
  randomPhoto.style.transform = 'scale(0.9)';
  photoDescription.style.opacity = '0';
  photoDescription.style.transform = 'translateY(10px)';
  
  // Ascunde placeholder și afișează poza
  photoPlaceholder.style.display = 'none';
  randomPhoto.style.display = 'block';
  
  setTimeout(() => {
    // Setează poza și descrierea
    randomPhoto.src = memory.image;
    randomPhoto.alt = memory.description;
    photoDescription.textContent = memory.description;
    
    // Aplică animații
    randomPhoto.style.opacity = '1';
    randomPhoto.style.transform = 'scale(1)';
    photoDescription.style.opacity = '1';
    photoDescription.style.transform = 'translateY(0)';
    randomPhoto.classList.add('loaded');
    
    // Efect special pentru buton
    generatePhotoBtn.innerHTML = '📸 Amintire nouă';
    generatePhotoBtn.style.background = 'linear-gradient(to right, #ff0066, #ff3399)';
    
    // Resetare buton după 2 secunde
    setTimeout(() => {
      generatePhotoBtn.innerHTML = '🔄 Schimbă amintirea';
      generatePhotoBtn.style.background = 'linear-gradient(to right, #3366ff, #6699ff)';
    }, 2000);
    
    // Afișează contorul de poze rămase
    const remaining = photoMemories.length - usedPhotos.length;
    if (remaining === 0) {
      console.log("🎉 Toate pozele au fost afișate! Resetare...");
    }
    
  }, 300);
}

// Funcție pentru a încărca o poză de rezervă dacă poza principală nu se încarcă
function handleImageError() {
  randomPhoto.style.display = 'none';
  photoPlaceholder.style.display = 'flex';
  photoPlaceholder.innerHTML = '💖<br><span style="font-size: 16px;">Această amintire<br>e prea specială</span>';
  photoPlaceholder.style.fontSize = '24px';
  photoPlaceholder.style.flexDirection = 'column';
  photoPlaceholder.style.gap = '10px';
  photoPlaceholder.style.alignItems = 'center';
  photoPlaceholder.style.justifyContent = 'center';
  photoPlaceholder.style.textAlign = 'center';
  photoDescription.textContent = "Unele amintiri sunt prea prețioase pentru a fi împărtășite. Această poză rămâne doar în sufletele noastre... 💕";
  photoDescription.style.color = '#ff6699';
  photoDescription.style.fontStyle = 'italic';
  photoDescription.style.textAlign = 'center';
  photoDescription.style.padding = '20px';
}

// Funcție pentru succesul încărcării pozei
function handleImageLoad() {
  randomPhoto.style.display = 'block';
  photoPlaceholder.style.display = 'none';
  photoDescription.style.color = '#333';
  photoDescription.style.fontStyle = 'italic';
  photoDescription.style.textAlign = 'center';
}

// Funcție pentru preîncărcarea imaginilor
function preloadImages() {
  console.log("📦 Preîncărcare imagini...");
  const preloadCount = Math.min(10, photoMemories.length);
  
  for (let i = 0; i < preloadCount; i++) {
    const img = new Image();
    img.src = photoMemories[i].image;
    img.onload = () => {
      console.log(`✅ Poza ${i+1} preîncărcată`);
    };
    img.onerror = () => {
      console.log(`❌ Eroare la preîncărcarea pozei ${i+1}`);
    };
  }
}

// Adaugă evenimentul de click pe buton
generatePhotoBtn.addEventListener('click', generateRandomPhoto);

// Adaugă eveniment pentru taste (spațiu pentru generare rapidă)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    generateRandomPhoto();
  }
});

// Adaugă event listener pentru eroare și succes la încărcarea imaginii
randomPhoto.addEventListener('error', handleImageError);
randomPhoto.addEventListener('load', handleImageLoad);

// Generează o poză la încărcarea paginii
window.addEventListener('load', () => {
  console.log("🚀 Pagina s-a încărcat! Generare prima poză...");
  
  // Preîncarcă imaginile
  preloadImages();
  
  // Generează prima poză după o scurtă întârziere
  setTimeout(() => {
    generateRandomPhoto();
    
    // Adaugă un mesaj special după generarea primei poze
    setTimeout(() => {
      console.log("💝 Generatorul de amintiri este gata! Apasă butonul sau tasta SPACE pentru mai multe.");
    }, 500);
  }, 1500);
});

// Funcție pentru resetarea generatorului (opțional)
function resetPhotoGenerator() {
  usedPhotos = [];
  lastPhotoIndex = -1;
  console.log("🔄 Generatorul de poze a fost resetat!");
  
  // Generează o nouă poză după reset
  setTimeout(generateRandomPhoto, 500);
}

// Adaugă funcția reset la obiectul global pentru debugging (opțional)
window.resetPhotoGenerator = resetPhotoGenerator;

// Adaugă un mesaj de bun venit în consolă
console.log("💖 Generatorul de amintiri vizuale a fost încărcat!");
console.log(`📸 Total poze disponibile: ${photoMemories.length}`);
console.log("🎮 Apasă butonul sau tasta SPACE pentru a genera o nouă amintire!");