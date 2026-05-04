const pdfMapping = {
    // 11. Osztály
    'Hálózatkezelés': 'pdf/halozatkezeles.pdf',
    'Elektronika': 'pdf/elektronika.pdf',
    'Digitális áramkörök': 'pdf/digitalis_aramkorok.pdf',
    'Adatbáziskezelés': 'pdf/adatbaziskezeles.pdf',
    // 12. Osztály
    'Mikrovezérlő programozás': 'pdf/mikrovezerlo.pdf',
    'PLC programozás': 'pdf/plc.pdf',
    'Számítógépes szimuláció': 'pdf/szimulacio.pdf',
    'Programozás alapjai': 'pdf/programozas_alapjai.pdf',
    // 13. Osztály
    'Programfejlesztés': 'pdf/programfejlesztes.pdf',
    'Robottechnika CAD/CAM': 'pdf/robottechnika.pdf',
    'IOT': 'pdf/iot.pdf',
    'Munkavállalói angol': 'pdf/munkavallaloi_angol.pdf'
};

function showSection(title, subjects) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('portfolio-view').style.display = 'block';
    document.getElementById('view-title').innerText = title;
    
    const grid = document.getElementById('grid-content');
    const galleryGrid = document.getElementById('gallery-grid');
    
    grid.style.display = 'grid';
    galleryGrid.style.display = 'none';
    grid.innerHTML = ''; 

    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'portfolio-item';
        card.onclick = () => window.open(pdfMapping[subject] || '#', '_blank');
        card.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📄</div>
            <h4>${subject}</h4>
            <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 10px;">Hadnagy Márk Attila dokumentációja.</p>
            <div style="margin-top: 1.5rem; color: #38bdf8; font-weight: 600;">MEGNYITÁS →</div>
        `;
        grid.appendChild(card);
    });
}

function showGallery() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('portfolio-view').style.display = 'block';
    document.getElementById('view-title').innerText = 'Galéria';
    
    const grid = document.getElementById('grid-content');
    const galleryGrid = document.getElementById('gallery-grid');
    
    grid.style.display = 'none';
    galleryGrid.style.display = 'grid';
    
    // IDE ÍRD BE A KÉPEID NEVEIT A 'kepek' MAPPÁBÓL
    const images = ['kep1.jpg', 'kep2.jpg', 'kep3.jpg'];
    galleryGrid.innerHTML = ''; 

    images.forEach(imgName => {
        const img = document.createElement('img');
        img.src = `kepek/${imgName}`;
        img.className = 'gallery-item';
        img.onclick = () => window.open(img.src, '_blank');
        galleryGrid.appendChild(img);
    });
}

function goHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('portfolio-view').style.display = 'none';
}