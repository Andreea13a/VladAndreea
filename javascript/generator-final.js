// generator-final.js - mesaje direct în cod
const mesaje = [
    "Te iubesc tare tare tareee.💖",
    "Te iubesc până la cer și înapoi.✨",
    "Te iubesc mai tare decât ieri, dar mai puțin decât mâine.💜",
    "Mulțumesc, pentru că datorită ție am început să iubesc părți din mine pe care nu le-aș fi iubit vreodată💗",
    "Culoarea mea preferată o să rămână mereu albastru, pentru că nu mi-au plăcut niciodată ochii albștrii până nu i-am văzut pe ai tăi💙",
    "Într-un fel sau altul o să te iubesc mereu.❤️‍🔥",
    "Ai apărut fix cand nu vroiam nimic și ai devenit tot ce aveam nevoie.❤️‍🩹",
    "Ești singura persoană cu care ma simt in liniște mereu și nu mă gândesc la nimic când îs cu tine.🤍",
    "Mulțumesc că ai mereu grijă de mine, ca de un copil uneori.😘",
    "Când te simți rău, gândește-te că eu as fiu mereu lângă tine și o să te iubesc mereu, oriunde aș fi.💕",
    "Chiar dacă spun uneori că ești lipicios,imi place enorm de tare că ești așa cu mine.🍫",
    "Sper ca Cola ta să fie mereu lângă paharul meu de Icetea.🥤",
    "Sper să rămân mereu, îngerașu, bombonica și iubirica ta.🍬",
    
];

function genereazaMesaj() {
    const display = document.getElementById('messageDisplay');
    if (!display) {
        console.error('Elementul nu există!');
        return;
    }
    
    const index = Math.floor(Math.random() * mesaje.length);
    display.textContent = mesaje[index];
    
    // Animatie
    display.style.opacity = '0.7';
    setTimeout(() => {
        display.style.opacity = '1';
    }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Generator pornit!');
    
    // Verifică elementele
    const display = document.getElementById('messageDisplay');
    const btn = document.getElementById('generateBtn');
    
    if (!display || !btn) {
        console.error('❌ Elemente lipsă!');
        return;
    }
    
    // Primul mesaj
    genereazaMesaj();
    
    // Eveniment buton
    btn.addEventListener('click', genereazaMesaj);
    
    console.log('✅ Generator inițializat cu succes!');
});