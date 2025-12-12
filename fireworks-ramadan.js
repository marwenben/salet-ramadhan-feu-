/* ============================================
   🎆 FEUX D'ARTIFICE AU CHARGEMENT DE LA PAGE
   Compte à rebours pour le Ramadan 1446
   ============================================ */

// Date du début du Ramadan 1446 H (28 février 2025)
const ramadanStartDate = new Date('2025-02-28');

// Fonction pour calculer les jours restants
function getDaysUntilRamadan() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    ramadanStartDate.setHours(0, 0, 0, 0);
    
    const diffTime = ramadanStartDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Créer le modal de feux d'artifice
function createFireworksModal() {
    const daysLeft = getDaysUntilRamadan();
    
    // Ne pas afficher si le Ramadan est déjà commencé
    if (daysLeft < 0) {
        return;
    }
    
    // Créer le conteneur
    const modal = document.createElement('div');
    modal.id = 'fireworks-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a1628 0%, #1a2642 50%, #0a1628 100%);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s ease-in;
    `;
    
    // Canvas pour les feux d'artifice
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    `;
    
    // Message de compte à rebours
    const message = document.createElement('div');
    message.style.cssText = `
        position: relative;
        z-index: 10001;
        text-align: center;
        color: white;
        padding: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: slideDown 0.8s ease-out;
    `;
    
    let messageText = '';
    if (daysLeft === 0) {
        messageText = `
            <div style="font-size: 3em; margin-bottom: 20px;">🌙</div>
            <h1 style="font-size: 2.5em; margin: 0; font-family: 'Amiri', serif; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">
                رَمَضَان مُبَارَك
            </h1>
            <h2 style="font-size: 2em; margin: 10px 0; text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);">
                Ramadan Moubarak !
            </h2>
            <p style="font-size: 1.3em; margin: 20px 0 0 0; opacity: 0.9;">
                Le mois béni commence aujourd'hui ! 🤲
            </p>
        `;
    } else if (daysLeft === 1) {
        messageText = `
            <div style="font-size: 3em; margin-bottom: 20px;">🌙✨</div>
            <h1 style="font-size: 2.5em; margin: 0; font-family: 'Amiri', serif; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">
                غداً رَمَضَان !
            </h1>
            <h2 style="font-size: 2em; margin: 10px 0; text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);">
                Demain c'est Ramadan !
            </h2>
            <p style="font-size: 1.3em; margin: 20px 0 0 0; opacity: 0.9;">
                Préparez vos cœurs pour le mois béni 🤲
            </p>
        `;
    } else if (daysLeft <= 7) {
        messageText = `
            <div style="font-size: 3em; margin-bottom: 20px;">🌙✨</div>
            <h1 style="font-size: 3em; margin: 0; color: #FFD700; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">
                ${daysLeft} jours
            </h1>
            <h2 style="font-size: 2em; margin: 10px 0; text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);">
                avant Ramadan 1446 !
            </h2>
            <p style="font-size: 1.2em; margin: 20px 0 0 0; opacity: 0.9; font-family: 'Amiri', serif;">
                رَمَضَان قريب جداً 🤲
            </p>
        `;
    } else {
        messageText = `
            <div style="font-size: 3em; margin-bottom: 20px;">🌙</div>
            <h1 style="font-size: 3em; margin: 0; color: #FFD700; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">
                ${daysLeft} jours
            </h1>
            <h2 style="font-size: 2em; margin: 10px 0; text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);">
                jusqu'au Ramadan 1446
            </h2>
            <p style="font-size: 1.2em; margin: 20px 0 0 0; opacity: 0.9;">
                28 février 2025 • رَمَضَان ١٤٤٦
            </p>
        `;
    }
    
    message.innerHTML = messageText;
    
    // Bouton fermer
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕ Fermer';
    closeBtn.style.cssText = `
        position: relative;
        z-index: 10002;
        margin-top: 30px;
        padding: 15px 40px;
        font-size: 1.2em;
        font-weight: bold;
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        color: #000;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
    });
    
    closeBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 500);
    });
    
    // Ajouter les éléments
    modal.appendChild(canvas);
    modal.appendChild(message);
    message.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Démarrer l'animation des feux d'artifice
    startFireworks(canvas);
    
    // Auto-fermer après 10 secondes
    setTimeout(() => {
        if (document.getElementById('fireworks-modal')) {
            closeBtn.click();
        }
    }, 10000);
}

// Animation des feux d'artifice
function startFireworks(canvas) {
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            };
            this.alpha = 1;
            this.decay = Math.random() * 0.015 + 0.015;
            this.size = Math.random() * 3 + 2;
        }
        
        update() {
            this.velocity.y += 0.1; // Gravité
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= this.decay;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Effet de traînée
            ctx.globalAlpha = this.alpha * 0.5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6 + 50;
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particleCount = 50 + Math.random() * 50;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, color));
        }
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(10, 22, 40, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            }
        });
        
        // Créer de nouveaux feux d'artifice
        if (Math.random() < 0.05) {
            createFirework();
        }
        
        if (document.getElementById('fireworks-modal')) {
            requestAnimationFrame(animate);
        }
    }
    
    // Lancer plusieurs feux d'artifice au début
    for (let i = 0; i < 3; i++) {
        setTimeout(createFirework, i * 200);
    }
    
    animate();
}

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Afficher les feux d'artifice au chargement de la page
window.addEventListener('load', function() {
    // Attendre 1 seconde pour que la page se charge complètement
    setTimeout(createFireworksModal, 1000);
});

console.log('🎆 Module feux d\'artifice chargé !');
