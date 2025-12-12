// =============================================
// APPLICATION HORAIRES DE PRIÈRE
// Version Finale avec Notifications
// =============================================

// Base de données des villes avec leurs informations
const citiesDatabase = {
    'montreal-ca': {
        name: 'Montréal',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.5017,
        longitude: -73.5673,
        displayName: { fr: '🇨🇦 Montréal, Canada', ar: '🇨🇦 مونتريال، كندا' }
    },
    'tunis-tn': {
        name: 'Tunis',
        country: 'TN',
        method: 5,
        timezone: 'Africa/Tunis',
        latitude: 36.8065,
        longitude: 10.1815,
        displayName: { fr: '🇹🇳 Tunis, Tunisie', ar: '🇹🇳 تونس، تونس' }
    },
    'algiers-dz': {
        name: 'Algiers',
        country: 'DZ',
        method: 5,
        timezone: 'Africa/Algiers',
        latitude: 36.7538,
        longitude: 3.0588,
        displayName: { fr: '🇩🇿 Alger, Algérie', ar: '🇩🇿 الجزائر، الجزائر' }
    },
    'mecca-sa': {
        name: 'Mecca',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.4225,
        longitude: 39.8262,
        displayName: { fr: '🇸🇦 La Mecque, Arabie Saoudite', ar: '🇸🇦 مكة المكرمة، السعودية' }
    },
    'medina-sa': {
        name: 'Medina',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.5247,
        longitude: 39.5692,
        displayName: { fr: '🇸🇦 Médine, Arabie Saoudite', ar: '🇸🇦 المدينة المنورة، السعودية' }
    },
    'riyadh-sa': {
        name: 'Riyadh',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.7136,
        longitude: 46.6753,
        displayName: { fr: '🇸🇦 Riyad, Arabie Saoudite', ar: '🇸🇦 الرياض، السعودية' }
    },
    'jeddah-sa': {
        name: 'Jeddah',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.5433,
        longitude: 39.1728,
        displayName: { fr: '🇸🇦 Jeddah, Arabie Saoudite', ar: '🇸🇦 جدة، السعودية' }
    },
    'cairo-eg': {
        name: 'Cairo',
        country: 'EG',
        method: 5,
        timezone: 'Africa/Cairo',
        latitude: 30.0444,
        longitude: 31.2357,
        displayName: { fr: '🇪🇬 Le Caire, Égypte', ar: '🇪🇬 القاهرة، مصر' }
    },
    'dubai-ae': {
        name: 'Dubai',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 25.2048,
        longitude: 55.2708,
        displayName: { fr: '🇦🇪 Dubaï, Émirats Arabes Unis', ar: '🇦🇪 دبي، الإمارات' }
    },
    'abudhabi-ae': {
        name: 'Abu Dhabi',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 24.4539,
        longitude: 54.3773,
        displayName: { fr: '🇦🇪 Abu Dhabi, Émirats Arabes Unis', ar: '🇦🇪 أبو ظبي، الإمارات' }
    },
    'doha-qa': {
        name: 'Doha',
        country: 'QA',
        method: 4,
        timezone: 'Asia/Qatar',
        latitude: 25.2854,
        longitude: 51.531,
        displayName: { fr: '🇶🇦 Doha, Qatar', ar: '🇶🇦 الدوحة، قطر' }
    },
    'kuwait-kw': {
        name: 'Kuwait City',
        country: 'KW',
        method: 4,
        timezone: 'Asia/Kuwait',
        latitude: 29.3759,
        longitude: 47.9774,
        displayName: { fr: '🇰🇼 Koweït, Koweït', ar: '🇰🇼 الكويت، الكويت' }
    },
    'casablanca-ma': {
        name: 'Casablanca',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 33.5731,
        longitude: -7.5898,
        displayName: { fr: '🇲🇦 Casablanca, Maroc', ar: '🇲🇦 الدار البيضاء، المغرب' }
    },
    'rabat-ma': {
        name: 'Rabat',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 34.0209,
        longitude: -6.8416,
        displayName: { fr: '🇲🇦 Rabat, Maroc', ar: '🇲🇦 الرباط، المغرب' }
    },
    'istanbul-tr': {
        name: 'Istanbul',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 41.0082,
        longitude: 28.9784,
        displayName: { fr: '🇹🇷 Istanbul, Turquie', ar: '🇹🇷 إسطنبول، تركيا' }
    },
    'ankara-tr': {
        name: 'Ankara',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 39.9334,
        longitude: 32.8597,
        displayName: { fr: '🇹🇷 Ankara, Turquie', ar: '🇹🇷 أنقرة، تركيا' }
    },
    'paris-fr': {
        name: 'Paris',
        country: 'FR',
        method: 2,
        timezone: 'Europe/Paris',
        latitude: 48.8566,
        longitude: 2.3522,
        displayName: { fr: '🇫🇷 Paris, France', ar: '🇫🇷 باريس، فرنسا' }
    },
    'london-gb': {
        name: 'London',
        country: 'GB',
        method: 2,
        timezone: 'Europe/London',
        latitude: 51.5074,
        longitude: -0.1278,
        displayName: { fr: '🇬🇧 Londres, Royaume-Uni', ar: '🇬🇧 لندن، بريطانيا' }
    },
    'newyork-us': {
        name: 'New York',
        country: 'US',
        method: 2,
        timezone: 'America/New_York',
        latitude: 40.7128,
        longitude: -74.006,
        displayName: { fr: '🇺🇸 New York, États-Unis', ar: '🇺🇸 نيويورك، أمريكا' }
    },
    'toronto-ca': {
        name: 'Toronto',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 43.6532,
        longitude: -79.3832,
        displayName: { fr: '🇨🇦 Toronto, Canada', ar: '🇨🇦 تورونتو، كندا' }
    },
    'ottawa-ca': {
        name: 'Ottawa',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.4215,
        longitude: -75.6972,
        displayName: { fr: '🇨🇦 Ottawa, Canada', ar: '🇨🇦 أوتاوا، كندا' }
    },
    'jakarta-id': {
        name: 'Jakarta',
        country: 'ID',
        method: 1,
        timezone: 'Asia/Jakarta',
        latitude: -6.2088,
        longitude: 106.8456,
        displayName: { fr: '🇮🇩 Jakarta, Indonésie', ar: '🇮🇩 جاكرتا، إندونيسيا' }
    },
    'kualalumpur-my': {
        name: 'Kuala Lumpur',
        country: 'MY',
        method: 1,
        timezone: 'Asia/Kuala_Lumpur',
        latitude: 3.139,
        longitude: 101.6869,
        displayName: { fr: '🇲🇾 Kuala Lumpur, Malaisie', ar: '🇲🇾 كوالالمبور، ماليزيا' }
    },
    'karachi-pk': {
        name: 'Karachi',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 24.8607,
        longitude: 67.0011,
        displayName: { fr: '🇵🇰 Karachi, Pakistan', ar: '🇵🇰 كراتشي، باكستان' }
    },
    'lahore-pk': {
        name: 'Lahore',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 31.5497,
        longitude: 74.3436,
        displayName: { fr: '🇵🇰 Lahore, Pakistan', ar: '🇵🇰 لاهور، باكستان' }
    },
    'dhaka-bd': {
        name: 'Dhaka',
        country: 'BD',
        method: 1,
        timezone: 'Asia/Dhaka',
        latitude: 23.8103,
        longitude: 90.4125,
        displayName: { fr: '🇧🇩 Dhaka, Bangladesh', ar: '🇧🇩 دكا، بنغلاديش' }
    }
};

// Villes actuellement sélectionnées
let selectedCities = {
    city1: 'montreal-ca',
    city2: 'tunis-tn'
};

// Traductions
const translations = {
    fr: {
        nextPrayer: 'Prochaine prière',
        at: 'à',
        in: 'dans',
        hours: 'h',
        minutes: 'min',
        ramadanBefore: 'Ramadan commence dans',
        ramadanDuring: 'Nous sommes en Ramadan!',
        ramadanAfter: 'Ramadan est terminé',
        days: 'jours',
        day: 'jour',
        localTime: 'Heure locale:'
    },
    ar: {
        nextPrayer: 'الصلاة القادمة',
        at: 'في',
        in: 'بعد',
        hours: 'س',
        minutes: 'د',
        ramadanBefore: 'رمضان يبدأ بعد',
        ramadanDuring: 'رمضان كريم! 🌙',
        ramadanAfter: 'انتهى رمضان',
        days: 'أيام',
        day: 'يوم',
        localTime: 'الوقت المحلي:'
    }
};

// Noms des mois islamiques
const islamicMonths = {
    fr: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 
         'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 
         'Dhul-Qi\'dah', 'Dhul-Hijjah'],
    ar: ['مُحَرَّم', 'صَفَر', 'رَبِيع ٱلْأَوَّل', 'رَبِيع ٱلثَّانِي', 'جُمَادَىٰ ٱلْأُولَىٰ',
         'جُمَادَىٰ ٱلثَّانِيَة', 'رَجَب', 'شَعْبَان', 'رَمَضَان', 'شَوَّال',
         'ذُو ٱلْقَعْدَة', 'ذُو ٱلْحِجَّة']
};

// Langue actuelle
let currentLang = 'fr';

// =============================================
// SYSTÈME DE NOTIFICATIONS
// =============================================

// Configuration des notifications
const notificationConfig = {
    enabled: false,
    prayers: {
        Fajr: false,
        Dhuhr: false,
        Asr: false,
        Maghrib: false,
        Isha: false
    },
    volume: 0.8,
    lastNotified: {}
};

// Charger la configuration sauvegardée
function loadNotificationConfig() {
    const saved = localStorage.getItem('prayerNotifications');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(notificationConfig, parsed);
        } catch (e) {
            console.error('Erreur chargement config:', e);
        }
    }
    
    // Appliquer à l'interface
    Object.keys(notificationConfig.prayers).forEach(prayer => {
        const checkbox = document.getElementById(`notify-${prayer.toLowerCase()}`);
        if (checkbox) {
            checkbox.checked = notificationConfig.prayers[prayer];
        }
    });
    
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    if (volumeSlider && volumeValue) {
        volumeSlider.value = notificationConfig.volume * 100;
        volumeValue.textContent = Math.round(notificationConfig.volume * 100) + '%';
    }
}

// Sauvegarder la configuration
function saveNotificationConfig() {
    localStorage.setItem('prayerNotifications', JSON.stringify(notificationConfig));
}

// Demander la permission pour les notifications
async function requestNotificationPermission() {
    if (!("Notification" in window)) {
        alert("Votre navigateur ne supporte pas les notifications.");
        return false;
    }
    
    if (Notification.permission === "granted") {
        notificationConfig.enabled = true;
        saveNotificationConfig();
        showNotificationSuccess("Notifications activées !");
        return true;
    }
    
    if (Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            notificationConfig.enabled = true;
            saveNotificationConfig();
            showNotificationSuccess("Notifications activées !");
            return true;
        }
    }
    
    if (Notification.permission === "denied") {
        alert("Les notifications ont été bloquées. Veuillez les autoriser dans les paramètres de votre navigateur.");
    }
    
    return false;
}

// Afficher message de succès
function showNotificationSuccess(message) {
    const btn = document.getElementById('enable-browser-notifications');
    if (btn) {
        btn.innerHTML = `<span>✅ ${message}</span>`;
        btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
        btn.style.opacity = '0.95';
        console.log('✅ Bouton notification mis en vert et désactivé');
        // PAS de setTimeout - le bouton reste vert définitivement !
    }
}

// Jouer l'adhan
function playAdhan() {
    const adhanAudio = document.getElementById('adhan-audio');
    if (adhanAudio) {
        adhanAudio.volume = notificationConfig.volume;
        adhanAudio.currentTime = 0;
        adhanAudio.play().catch(err => {
            console.log("Erreur lecture adhan:", err);
        });
    }
}

// Envoyer une notification
function sendPrayerNotification(prayerName) {
    const today = new Date().toDateString();
    const notificationKey = `${prayerName}-${today}`;
    
    if (notificationConfig.lastNotified[notificationKey]) {
        return;
    }
    
    if (!notificationConfig.enabled || !notificationConfig.prayers[prayerName]) {
        return;
    }
    
    const prayerEmojis = {
        Fajr: '🌅',
        Dhuhr: '☀️',
        Asr: '🌤️',
        Maghrib: '🌆',
        Isha: '🌙'
    };
    
    const prayerNamesArabic = {
        Fajr: 'الفجر',
        Dhuhr: 'الظهر',
        Asr: 'العصر',
        Maghrib: 'المغرب',
        Isha: 'العشاء'
    };
    
    const title = currentLang === 'ar' 
        ? `${prayerEmojis[prayerName]} حان وقت صلاة ${prayerNamesArabic[prayerName]}` 
        : `${prayerEmojis[prayerName]} C'est l'heure de ${prayerName}`;
    
    const body = currentLang === 'ar' 
        ? 'حان الآن وقت الصلاة. اللهم تقبل منا.' 
        : "C'est l'heure de la prière. Qu'Allah accepte nos prières.";
    
    if (Notification.permission === "granted") {
        const notification = new Notification(title, {
            body: body,
            icon: '/app-Salet/icon-512.png',
            badge: '/app-Salet/icon-192.png',
            tag: prayerName,
            requireInteraction: true
        });
        
        notification.onclick = function() {
            window.focus();
            notification.close();
        };
    }
    
    playAdhan();
    
    notificationConfig.lastNotified[notificationKey] = true;
    saveNotificationConfig();
    
    createVisualNotification(title, body);
}

// Créer notification visuelle
function createVisualNotification(title, body) {
    const notification = document.createElement('div');
    notification.className = 'visual-notification';
    notification.innerHTML = `
        <div class="visual-notification-content">
            <h3>${title}</h3>
            <p>${body}</p>
            <button class="close-visual-notification">✕</button>
        </div>
    `;
    
    if (!document.getElementById('visual-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'visual-notification-styles';
        styles.textContent = `
            .visual-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                padding: 20px 25px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
                z-index: 10000;
                animation: slideInRight 0.5s ease-out;
                max-width: 350px;
            }
            
            @keyframes slideInRight {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            .visual-notification-content {
                position: relative;
            }
            
            .visual-notification h3 {
                color: white;
                margin-bottom: 10px;
                font-size: 1.3em;
            }
            
            .visual-notification p {
                color: rgba(255, 255, 255, 0.95);
                font-size: 1em;
                line-height: 1.5;
            }
            
            .close-visual-notification {
                position: absolute;
                top: -10px;
                right: -10px;
                background: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 1.2em;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            }
            
            .close-visual-notification:hover {
                transform: scale(1.1);
                background: #fee2e2;
                color: #dc2626;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    const closeBtn = notification.querySelector('.close-visual-notification');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
}

// Vérifier les heures de prière
let currentPrayerTimings = null;

function checkPrayerTimes() {
    if (!currentPrayerTimings) return;
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayerName => {
        if (!currentPrayerTimings[prayerName]) return;
        
        const [hours, minutes] = currentPrayerTimings[prayerName].split(':').map(Number);
        const prayerTimeInMinutes = hours * 60 + minutes;
        
        if (Math.abs(currentTime - prayerTimeInMinutes) <= 1) {
            sendPrayerNotification(prayerName);
        }
    });
}

// Nettoyer les anciennes notifications
setInterval(() => {
    const today = new Date().toDateString();
    const keys = Object.keys(notificationConfig.lastNotified);
    keys.forEach(key => {
        if (!key.includes(today)) {
            delete notificationConfig.lastNotified[key];
        }
    });
    saveNotificationConfig();
}, 3600000);

// =============================================
// FIN SYSTÈME DE NOTIFICATIONS
// =============================================

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.classList.remove('arabic');
        document.documentElement.setAttribute('lang', 'fr');
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    displayIslamicDate();
    displayRamadanCountdown();
    loadAllPrayerTimes();
}

// Écouteurs d'événements pour les boutons de langue
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));

// Écouteurs d'événements pour les sélecteurs de villes
document.getElementById('city1-select').addEventListener('change', (e) => {
    selectedCities.city1 = e.target.value;
    updateCityDisplay('city1');
});

document.getElementById('city2-select').addEventListener('change', (e) => {
    selectedCities.city2 = e.target.value;
    updateCityDisplay('city2');
});

// Fonction pour mettre à jour l'affichage d'une ville
async function updateCityDisplay(cityKey) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    
    document.getElementById(`${cityKey}-name`).textContent = cityData.displayName[currentLang];
    
    const timings = await getPrayerTimesForCity(cityId);
    if (timings) {
        displayPrayerTimes(cityKey, timings);
        if (cityKey === 'city1') {
            currentPrayerTimings = timings;
        }
    }
}

// Fonction pour formater la date
function formatDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const date = new Date();
    const locale = currentLang === 'ar' ? 'ar-TN' : 'fr-FR';
    return date.toLocaleDateString(locale, options);
}

// Fonction pour obtenir la date islamique
async function getIslamicDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la date islamique');
        }

        const data = await response.json();
        return data.data.hijri;
    } catch (error) {
        console.error('Erreur date islamique:', error);
        return null;
    }
}

// Fonction pour afficher la date islamique
async function displayIslamicDate() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const monthName = islamicMonths[currentLang][hijriDate.month.number - 1];
    const day = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.day) : hijriDate.day;
    const year = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.year) : hijriDate.year;
    
    const islamicDateElement = document.getElementById('islamic-date');
    if (currentLang === 'ar') {
        islamicDateElement.textContent = `${day} ${monthName} ${year} هـ`;
    } else {
        islamicDateElement.textContent = `${day} ${monthName} ${year} H`;
    }
}

// Fonction pour convertir les chiffres en numéraux arabes
function convertToArabicNumerals(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// Fonction pour calculer le compte à rebours du Ramadan
async function displayRamadanCountdown() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const currentMonth = hijriDate.month.number;
    const currentDay = parseInt(hijriDate.day);
    const currentYear = parseInt(hijriDate.year);

    const ramadanCountdownElement = document.getElementById('ramadan-countdown');
    const ramadanTextElement = document.getElementById('ramadan-text');
    const t = translations[currentLang];

    if (currentMonth === 9) {
        ramadanCountdownElement.classList.add('during-ramadan');
        const daysRemaining = 30 - currentDay;
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysRemaining);
            ramadanTextElement.textContent = `${t.ramadanDuring} - متبقي ${daysArabic} ${daysRemaining > 1 ? t.days : t.day}`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanDuring} - ${daysRemaining} ${daysRemaining > 1 ? t.days : t.day} restants`;
        }
    } else if (currentMonth < 9) {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const daysInMonths = [30, 29, 30, 29, 30, 29, 30, 29];
        let daysUntilRamadan = 0;
        
        for (let i = currentMonth - 1; i < 8; i++) {
            if (i === currentMonth - 1) {
                daysUntilRamadan += daysInMonths[i] - currentDay;
            } else {
                daysUntilRamadan += daysInMonths[i];
            }
        }

        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilRamadan);
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysArabic} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysUntilRamadan} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        }
    } else {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const nextRamadanYear = currentYear + 1;
        const daysUntilNextRamadan = 365 - ((currentMonth - 9) * 30 + currentDay);
        
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilNextRamadan);
            ramadanTextElement.textContent = `رمضان القادم بعد ${daysArabic} ${t.days} تقريباً`;
        } else {
            ramadanTextElement.textContent = `Prochain Ramadan dans environ ${daysUntilNextRamadan} ${t.days}`;
        }
    }
}

// Fonction pour afficher l'heure locale
function displayLocalTime() {
    const city1Id = selectedCities.city1;
    const city1Data = citiesDatabase[city1Id];
    if (city1Data) {
        const city1Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city1Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city1-time').textContent = city1Time;
    }
    
    const city2Id = selectedCities.city2;
    const city2Data = citiesDatabase[city2Id];
    if (city2Data) {
        const city2Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city2Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city2-time').textContent = city2Time;
    }
}

// Fonction pour obtenir les heures de prière
async function getPrayerTimes(cityKey) {
    const cityId = selectedCities[cityKey];
    return await getPrayerTimesForCity(cityId);
}

async function getPrayerTimesForCity(cityId) {
    const city = citiesDatabase[cityId];
    if (!city) return null;
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city.name}&country=${city.country}&method=${city.method}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        return data.data.timings;
    } catch (error) {
        console.error(`Erreur pour ${city.name}:`, error);
        return null;
    }
}

// Fonction pour afficher les heures de prière
function displayPrayerTimes(cityKey, timings) {
    if (!timings) return;

    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayer => {
        const elementId = `${cityKey}-${prayer.toLowerCase()}`;
        const element = document.getElementById(elementId);
        if (element && timings[prayer]) {
            element.textContent = timings[prayer];
        }
    });

    highlightCurrentPrayer(cityKey, timings);
}

// Fonction pour mettre en évidence la prière actuelle
function highlightCurrentPrayer(cityKey, timings) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    if (!cityData) return;
    
    const timezone = cityData.timezone;
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const currentTime = cityTime.getHours() * 60 + cityTime.getMinutes();
    
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let currentPrayer = null;
    let nextPrayer = null;

    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = timings[prayer].split(':').map(Number);
        return {
            name: prayer,
            time: hours * 60 + minutes,
            display: timings[prayer]
        };
    });

    for (let i = 0; i < prayerTimes.length; i++) {
        const prayerItem = document.querySelector(`#${cityKey}-${prayerTimes[i].name.toLowerCase()}`).parentElement;
        prayerItem.classList.remove('current');

        if (currentTime >= prayerTimes[i].time) {
            currentPrayer = prayerTimes[i];
            if (i < prayerTimes.length - 1) {
                nextPrayer = prayerTimes[i + 1];
            } else {
                nextPrayer = prayerTimes[0];
            }
        }
    }

    const cityCard = document.getElementById(`${cityKey}-card`);
    cityCard.classList.remove('current-prayer-fajr', 'current-prayer-dhuhr', 'current-prayer-asr', 'current-prayer-maghrib', 'current-prayer-isha');

    if (!currentPrayer) {
        nextPrayer = prayerTimes[0];
        cityCard.classList.add('current-prayer-isha');
    } else {
        cityCard.classList.add(`current-prayer-${currentPrayer.name.toLowerCase()}`);
    }

    if (currentPrayer) {
        const currentElement = document.querySelector(`#${cityKey}-${currentPrayer.name.toLowerCase()}`).parentElement;
        currentElement.classList.add('current');
    }

    if (nextPrayer) {
        const nextElement = document.getElementById(`${cityKey}-next`);
        
        if (!nextElement) return;
        
        const timeUntil = calculateTimeUntil(nextPrayer.time, currentTime);
        const t = translations[currentLang];
        
        let prayerName = nextPrayer.name;
        if (currentLang === 'ar') {
            const arabicNames = {
                'Fajr': 'الفجر',
                'Dhuhr': 'الظهر',
                'Asr': 'العصر',
                'Maghrib': 'المغرب',
                'Isha': 'العشاء'
            };
            prayerName = arabicNames[nextPrayer.name];
        }
        
        const nextText = `${t.nextPrayer}: ${prayerName} ${t.at} ${nextPrayer.display} (${t.in} ${timeUntil})`;
        nextElement.textContent = nextText;
    }
}

// Fonction pour calculer le temps restant
function calculateTimeUntil(prayerTime, currentTime) {
    let diff = prayerTime - currentTime;
    
    if (diff < 0) {
        diff += 24 * 60;
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    
    const t = translations[currentLang];

    if (hours > 0) {
        return `${hours}${t.hours} ${minutes}${t.minutes}`;
    } else {
        return `${minutes}${t.minutes}`;
    }
}

// Fonction pour mettre à jour l'heure de dernière mise à jour
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update-time').textContent = timeString;
}

// Fonction principale pour charger toutes les données
async function loadAllPrayerTimes() {
    document.getElementById('current-date').textContent = formatDate();
    
    const city1Timings = await getPrayerTimes('city1');
    displayPrayerTimes('city1', city1Timings);
    currentPrayerTimings = city1Timings;
    
    const city2Timings = await getPrayerTimes('city2');
    displayPrayerTimes('city2', city2Timings);
    
    await displayIslamicDate();
    await displayRamadanCountdown();
    
    displayLocalTime();
    
    updateLastUpdateTime();
}

// Charger les données au démarrage
loadAllPrayerTimes();

// Mettre à jour l'heure locale toutes les secondes
setInterval(() => {
    displayLocalTime();
}, 1000);

// Mettre à jour toutes les minutes
setInterval(() => {
    loadAllPrayerTimes();
}, 60000);

// Mettre à jour l'affichage de la prière actuelle toutes les 10 secondes
setInterval(async () => {
    const city1Timings = await getPrayerTimes('city1');
    if (city1Timings) {
        highlightCurrentPrayer('city1', city1Timings);
    }
    
    const city2Timings = await getPrayerTimes('city2');
    if (city2Timings) {
        highlightCurrentPrayer('city2', city2Timings);
    }
}, 10000);

// Vérifier les notifications toutes les 30 secondes
setInterval(checkPrayerTimes, 30000);

// =============================================
// GESTION DU CORAN
// =============================================

document.getElementById('quran-btn').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.add('active');
});

document.getElementById('close-quran').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.remove('active');
});

document.getElementById('quran-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quran-modal') {
        document.getElementById('quran-modal').classList.remove('active');
    }
});

document.getElementById('load-surah-btn').addEventListener('click', async () => {
    const surahNumber = document.getElementById('surah-select').value;
    const quranTextDiv = document.getElementById('quran-text');
    
    quranTextDiv.innerHTML = '<p class="quran-info">⏳ Chargement du Coran...</p>';
    
    try {
        const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const infoData = await infoResponse.json();
        
        const textResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
        const textData = await textResponse.json();
        
        if (infoData.status === 'OK' && textData.status === 'OK') {
            const surahInfo = infoData.data;
            const surahText = textData.data;
            
            let html = `<h3 style="text-align: center; color: #1e3c72; margin-bottom: 20px;">
                سورة ${surahInfo.name} - ${surahInfo.englishName}
                <br><span style="font-size: 0.7em; color: #6c757d;">${surahInfo.numberOfAyahs} آيات - ${surahInfo.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
            </h3>`;
            
            if (surahNumber !== '9' && surahNumber !== '1') {
                html += `<p style="text-align: center; font-size: 1.3em; color: #2a5298; margin-bottom: 25px; padding: 15px; background: rgba(42, 82, 152, 0.1); border-radius: 10px;">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>`;
            }
            
            surahText.ayahs.forEach(ayah => {
                html += `<div class="ayah">
                    <span class="ayah-number">﴿${convertToArabicNumber(ayah.numberInSurah)}﴾</span>
                    <span style="font-size: 1.1em; line-height: 2.2;">${ayah.text}</span>
                </div>`;
            });
            
            quranTextDiv.innerHTML = html;
            quranTextDiv.scrollTop = 0;
        } else {
            throw new Error('Erreur API');
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        quranTextDiv.innerHTML = '<p class="quran-info" style="color: #dc3545;">❌ Erreur de chargement. Veuillez réessayer.</p>';
    }
});

function convertToArabicNumber(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// =============================================
// GESTION DU TASBIH
// =============================================

let tasbihCount = 0;
let tasbihTarget = 0;
let currentTasbihPhrase = 'سُبْحَانَ ٱللَّٰهِ';

document.getElementById('tasbih-btn').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.add('active');
});

document.getElementById('close-tasbih').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.remove('active');
});

document.getElementById('tasbih-modal').addEventListener('click', (e) => {
    if (e.target.id === 'tasbih-modal') {
        document.getElementById('tasbih-modal').classList.remove('active');
    }
});

document.getElementById('tasbih-increment').addEventListener('click', () => {
    tasbihCount++;
    updateTasbihDisplay();
    
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    const btn = document.getElementById('tasbih-increment');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
    
    if (tasbihTarget > 0 && tasbihCount === tasbihTarget) {
        showTasbihGoalReached();
    }
});

document.getElementById('tasbih-reset').addEventListener('click', () => {
    if (confirm(currentLang === 'ar' ? 'هل تريد إعادة تعيين العداد؟' : 'Réinitialiser le compteur?')) {
        tasbihCount = 0;
        tasbihTarget = 0;
        updateTasbihDisplay();
        document.getElementById('tasbih-goal').classList.remove('active');
    }
});

document.getElementById('tasbih-target-33').addEventListener('click', () => {
    tasbihTarget = 33;
    updateTasbihGoal();
});

document.getElementById('tasbih-target-99').addEventListener('click', () => {
    tasbihTarget = 99;
    updateTasbihGoal();
});

document.querySelectorAll('.phrase-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.phrase-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTasbihPhrase = btn.dataset.phrase;
        document.getElementById('current-phrase').textContent = currentTasbihPhrase;
    });
});

function updateTasbihDisplay() {
    document.getElementById('tasbih-count').textContent = tasbihCount;
}

function updateTasbihGoal() {
    const goalDiv = document.getElementById('tasbih-goal');
    const remaining = tasbihTarget - tasbihCount;
    
    if (remaining > 0) {
        if (currentLang === 'ar') {
            goalDiv.textContent = `الهدف: ${tasbihTarget} - متبقي: ${remaining}`;
        } else {
            goalDiv.textContent = `Objectif: ${tasbihTarget} - Reste: ${remaining}`;
        }
        goalDiv.classList.add('active');
    } else {
        goalDiv.classList.remove('active');
    }
}

function showTasbihGoalReached() {
    const goalDiv = document.getElementById('tasbih-goal');
    if (currentLang === 'ar') {
        goalDiv.textContent = '🎉 ما شاء الله! تم إكمال الهدف! 🎉';
    } else {
        goalDiv.textContent = '🎉 MashAllah! Objectif atteint! 🎉';
    }
    goalDiv.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
    goalDiv.style.color = 'white';
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
    
    setTimeout(() => {
        goalDiv.style.background = '#fff3cd';
        goalDiv.style.color = '#856404';
    }, 3000);
}

// =============================================
// GESTION DE LA QIBLA
// =============================================

const MECCA = {
    lat: 21.4225,
    lng: 39.8262
};

let userPosition = null;
let qiblaDirection = 0;
let deviceHeading = 0;
let orientationListener = null;

document.getElementById('qibla-btn').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.add('active');
    initQiblaCompass();
});

document.getElementById('close-qibla').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.remove('active');
    stopOrientationTracking();
});

document.getElementById('qibla-modal').addEventListener('click', (e) => {
    if (e.target.id === 'qibla-modal') {
        document.getElementById('qibla-modal').classList.remove('active');
        stopOrientationTracking();
    }
});

function initQiblaCompass() {
    const statusText = document.getElementById('status-text');
    
    qiblaDirection = 0;
    deviceHeading = 0;
    userPosition = null;
    
    if (currentLang === 'ar') {
        statusText.textContent = '🔍 جاري تحديد موقعك...';
    } else {
        statusText.textContent = '🔍 Détection de votre position...';
    }
    statusText.classList.remove('success', 'error');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            onQiblaLocationSuccess,
            onQiblaLocationError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        statusText.classList.add('error');
        if (currentLang === 'ar') {
            statusText.textContent = '❌ الجهاز لا يدعم تحديد الموقع';
        } else {
            statusText.textContent = '❌ Géolocalisation non supportée';
        }
    }
}

function onQiblaLocationSuccess(position) {
    userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    
    qiblaDirection = calculateBearing(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    const distance = calculateDistance(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    const statusText = document.getElementById('status-text');
    statusText.classList.add('success');
    if (currentLang === 'ar') {
        statusText.textContent = '✅ تم تحديد اتجاه القبلة بنجاح!';
    } else {
        statusText.textContent = '✅ Direction de la Qibla détectée avec succès!';
    }
    
    document.getElementById('qibla-angle-value').textContent = Math.round(qiblaDirection) + '°';
    document.getElementById('qibla-distance-value').textContent = Math.round(distance).toLocaleString() + ' km';
    document.getElementById('qibla-position-value').textContent = 
        `${userPosition.lat.toFixed(4)}°, ${userPosition.lng.toFixed(4)}°`;
    
    startOrientationTracking();
    updateCompassRotation();
}

function onQiblaLocationError(error) {
    const statusText = document.getElementById('status-text');
    statusText.classList.add('error');
    
    if (currentLang === 'ar') {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ يرجى السماح بتحديد الموقع';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ الموقع غير متاح';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ انتهت مهلة الانتظار';
                break;
            default:
                statusText.textContent = '❌ خطأ في التحديد';
        }
    } else {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ Veuillez autoriser la géolocalisation';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ Position non disponible';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ Délai d\'attente dépassé';
                break;
            default:
                statusText.textContent = '❌ Erreur lors de la détection';
        }
    }
}

function startOrientationTracking() {
    if (window.DeviceOrientationEvent) {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        attachOrientationListener();
                    }
                })
                .catch(console.error);
        } else {
            attachOrientationListener();
        }
    }
}

function attachOrientationListener() {
    orientationListener = (event) => {
        if (event.alpha !== null) {
            deviceHeading = event.alpha;
            
            if (event.webkitCompassHeading) {
                deviceHeading = event.webkitCompassHeading;
            }
            
            updateCompassRotation();
        }
    };
    
    window.addEventListener('deviceorientation', orientationListener);
}

function stopOrientationTracking() {
    if (orientationListener) {
        window.removeEventListener('deviceorientation', orientationListener);
        orientationListener = null;
    }
}

function updateCompassRotation() {
    if (!userPosition) return;
    
    const compassCircle = document.getElementById('compass-rotating');
    
    let rotation = qiblaDirection - deviceHeading;
    rotation = ((rotation % 360) + 360) % 360;
    
    compassCircle.style.transform = `rotate(${rotation}deg)`;
}

function calculateBearing(lat1, lng1, lat2, lng2) {
    const dLng = toRadians(lng2 - lng1);
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    
    const y = Math.sin(dLng) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
              Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);
    
    let bearing = toDegrees(Math.atan2(y, x));
    bearing = (bearing + 360) % 360;
    
    return bearing;
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// =============================================
// MÉTÉO TEMPS RÉEL
// =============================================

const weatherCache = new Map();
const CACHE_DURATION = 10 * 60 * 1000;

async function fetchRealWeather(cityName, lat, lon, cityIndex) {
    const cacheKey = `${cityName}-${lat}-${lon}`;
    
    const cached = weatherCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
        updateAllPrayersWeather(cityIndex, cached.temp, cached.weatherCode);
        return;
    }
    
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        const temp = Math.round(data.current_weather.temperature);
        const weatherCode = data.current_weather.weathercode;
        
        weatherCache.set(cacheKey, {
            temp: temp,
            weatherCode: weatherCode,
            timestamp: Date.now()
        });
        
        updateAllPrayersWeather(cityIndex, temp, weatherCode);
        
    } catch (error) {
        console.error(`Erreur météo pour ${cityName}:`, error);
        const defaultTemp = getDefaultTempBySeason();
        updateAllPrayersWeather(cityIndex, defaultTemp, 0);
    }
}

function getDefaultTempBySeason() {
    const month = new Date().getMonth() + 1;
    if (month === 12 || month === 1 || month === 2) return -5;
    if (month >= 3 && month <= 5) return 10;
    if (month >= 6 && month <= 8) return 25;
    return 12;
}

function getWeatherIconFromCode(prayer, weatherCode) {
    const isNight = (prayer === 'isha' || prayer === 'fajr');
    
    if (weatherCode === 0) {
        return isNight ? 
            { icon: '🌙', anim: 'clear-night' } : 
            { icon: '☀️', anim: 'sunny' };
    }
    
    if (weatherCode === 1 || weatherCode === 2) {
        return isNight ?
            { icon: '🌙', anim: 'cloudy' } :
            { icon: '🌤️', anim: 'cloudy' };
    }
    
    if (weatherCode === 3) {
        return { icon: '☁️', anim: 'clouds' };
    }
    
    if (weatherCode === 45 || weatherCode === 48) {
        return { icon: '🌫️', anim: 'fog' };
    }
    
    if (weatherCode >= 51 && weatherCode <= 55) {
        return { icon: '🌦️', anim: 'drizzle' };
    }
    
    if (weatherCode >= 61 && weatherCode <= 65) {
        return weatherCode === 65 ?
            { icon: '🌧️', anim: 'heavy-rain' } :
            { icon: '🌧️', anim: 'rain' };
    }
    
    if (weatherCode >= 71 && weatherCode <= 75) {
        return weatherCode === 75 ?
            { icon: '❄️', anim: 'heavy-snow' } :
            { icon: '🌨️', anim: 'snow' };
    }
    
    if (weatherCode === 77) {
        return { icon: '🌨️', anim: 'snow' };
    }
    
    if (weatherCode >= 80 && weatherCode <= 82) {
        return { icon: '🌧️', anim: 'heavy-rain' };
    }
    
    if (weatherCode === 85 || weatherCode === 86) {
        return { icon: '❄️', anim: 'heavy-snow' };
    }
    
    if (weatherCode >= 95 && weatherCode <= 99) {
        return { icon: '⛈️', anim: 'thunderstorm' };
    }
    
    return isNight ?
        { icon: '🌙', anim: 'clear-night' } :
        { icon: '☀️', anim: 'sunny' };
}

function updatePrayerWeather(cityIndex, prayer, temp, weatherCode) {
    const weatherDiv = document.getElementById(`city${cityIndex}-${prayer}-weather`);
    if (!weatherDiv) return;
    
    const iconDiv = weatherDiv.querySelector('.weather-icon');
    const tempSpan = weatherDiv.querySelector('.weather-temp');
    
    if (tempSpan) {
        tempSpan.textContent = temp + '°';
    }
    
    if (iconDiv) {
        const weatherInfo = getWeatherIconFromCode(prayer, weatherCode);
        iconDiv.textContent = weatherInfo.icon;
        iconDiv.setAttribute('data-weather', weatherInfo.anim);
    }
}

function updateAllPrayersWeather(cityIndex, temp, weatherCode) {
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        updatePrayerWeather(cityIndex, prayer, temp, weatherCode);
    });
}

function initRealWeather() {
    const city1Id = selectedCities.city1;
    if (city1Id && citiesDatabase[city1Id]) {
        const city = citiesDatabase[city1Id];
        if (city.latitude && city.longitude) {
            fetchRealWeather(city.name, city.latitude, city.longitude, 1);
        }
    }
    
    const city2Card = document.getElementById('city2-card');
    if (city2Card && city2Card.style.display !== 'none') {
        const city2Id = selectedCities.city2;
        if (city2Id && citiesDatabase[city2Id]) {
            const city = citiesDatabase[city2Id];
            if (city.latitude && city.longitude) {
                fetchRealWeather(city.name, city.latitude, city.longitude, 2);
            }
        }
    }
}

setInterval(initRealWeather, 10 * 60 * 1000);

// =============================================
// CALENDRIER RAMADAN
// =============================================

const ramadanStart = new Date('2025-02-28');
const ramadanDays = 30;

function generateRamadanCalendar() {
    const calendarGrid = document.getElementById('ramadan-calendar-grid');
    if (!calendarGrid) return;
    
    calendarGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const monthNamesFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const monthNamesAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const dayNamesAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    for (let i = 1; i <= ramadanDays; i++) {
        const gregorianDate = new Date(ramadanStart);
        gregorianDate.setDate(gregorianDate.getDate() + (i - 1));
        
        const dayOfWeek = gregorianDate.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const isToday = gregorianDate.getTime() === today.getTime();
        const isSpecialNight = i >= 21;
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        if (isWeekend) {
            dayElement.classList.add('weekend');
        }
        if (isSpecialNight) {
            dayElement.classList.add('special-night');
        }
        
        const ramadanDayNum = document.createElement('span');
        ramadanDayNum.className = 'ramadan-day-num';
        ramadanDayNum.textContent = i;
        
        const gregorianDateSpan = document.createElement('span');
        gregorianDateSpan.className = 'gregorian-date';
        const day = gregorianDate.getDate();
        const month = gregorianDate.getMonth();
        
        if (currentLang === 'ar') {
            gregorianDateSpan.textContent = `${day} ${monthNamesAr[month]}`;
        } else {
            gregorianDateSpan.textContent = `${day} ${monthNamesFr[month]}`;
        }
        
        const dayOfWeekSpan = document.createElement('span');
        dayOfWeekSpan.className = 'day-of-week';
        dayOfWeekSpan.textContent = currentLang === 'ar' ? dayNamesAr[dayOfWeek] : dayNamesFr[dayOfWeek];
        
        dayElement.appendChild(ramadanDayNum);
        dayElement.appendChild(gregorianDateSpan);
        dayElement.appendChild(dayOfWeekSpan);
        
        calendarGrid.appendChild(dayElement);
    }
}

function openRamadanCalendar() {
    const modal = document.getElementById('ramadan-calendar-modal');
    if (!modal) return;
    
    generateRamadanCalendar();
    modal.classList.add('active');
}

function closeRamadanCalendar() {
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function initRamadanCalendarEvents() {
    const ramadanCountdown = document.getElementById('ramadan-countdown');
    if (ramadanCountdown) {
        ramadanCountdown.addEventListener('click', openRamadanCalendar);
    }
    
    const closeBtn = document.getElementById('close-ramadan-calendar');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeRamadanCalendar);
    }
    
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeRamadanCalendar();
            }
        });
    }
}

// =============================================
// INITIALISATION
// =============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        initRealWeather();
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Notifications
        loadNotificationConfig();
        
        // VÉRIFIER SI LES NOTIFICATIONS SONT DÉJÀ AUTORISÉES
        if ("Notification" in window && Notification.permission === "granted") {
            console.log('✅ Notifications déjà autorisées au chargement');
            const btn = document.getElementById('enable-browser-notifications');
            if (btn) {
                btn.innerHTML = '<span>✅ Notifications activées !</span>';
                btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                btn.disabled = true;
                btn.style.cursor = 'not-allowed';
                btn.style.opacity = '0.95';
            }
        }
        
        const enableNotificationsBtn = document.getElementById('enable-browser-notifications');
        if (enableNotificationsBtn) {
            enableNotificationsBtn.addEventListener('click', requestNotificationPermission);
        }
        
        ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach(prayer => {
            const checkbox = document.getElementById(`notify-${prayer}`);
            if (checkbox) {
                checkbox.addEventListener('change', function() {
                    const prayerName = prayer.charAt(0).toUpperCase() + prayer.slice(1);
                    notificationConfig.prayers[prayerName] = this.checked;
                    saveNotificationConfig();
                });
            }
        });
        
        const volumeSlider = document.getElementById('adhan-volume');
        const volumeValue = document.getElementById('volume-value');
        if (volumeSlider && volumeValue) {
            volumeSlider.addEventListener('input', function() {
                notificationConfig.volume = this.value / 100;
                volumeValue.textContent = this.value + '%';
                saveNotificationConfig();
            });
        }
        
        const testBtn = document.getElementById('test-notification');
        if (testBtn) {
            testBtn.addEventListener('click', function() {
                playAdhan();
                createVisualNotification(
                    '🔊 Test de l\'Adhan',
                    'Ceci est un test. L\'adhan devrait maintenant être joué.'
                );
            });
        }
        
        const notificationsBtn = document.getElementById('notifications-btn');
        const notificationsModal = document.getElementById('notifications-modal');
        const closeNotifications = document.getElementById('close-notifications');
        
        if (notificationsBtn && notificationsModal) {
            notificationsBtn.addEventListener('click', function() {
                notificationsModal.style.display = 'flex';
            });
        }
        
        if (closeNotifications && notificationsModal) {
            closeNotifications.addEventListener('click', function() {
                notificationsModal.style.display = 'none';
            });
        }
        
        if (notificationsModal) {
            notificationsModal.addEventListener('click', function(e) {
                if (e.target === notificationsModal) {
                    notificationsModal.style.display = 'none';
                }
            });
        }
        
        checkPrayerTimes();
        
        // Ramadan
        initRamadanCalendarEvents();
        
        // Météo
        setTimeout(initRealWeather, 3000);
        
        const city1Select = document.getElementById('city1-select');
        const city2Select = document.getElementById('city2-select');
        
        if (city1Select) {
            city1Select.addEventListener('change', () => {
                setTimeout(initRealWeather, 500);
            });
        }
        
        if (city2Select) {
            city2Select.addEventListener('change', () => {
                setTimeout(initRealWeather, 500);
            });
        }
    }, 1000);
});

// =============================================
// CORAN BILINGUE (ARABE + FRANÇAIS) - VERSION QUI FONCTIONNE
// =============================================
// Ce code est basé sur test-coran.html qui FONCTIONNE !

// Variable globale pour le mode d'affichage
let quranDisplayMode = 'bilingual'; // 'arabic', 'french', 'bilingual'

// Fonction pour mettre à jour le style des boutons
function updateModeButtons() {
    console.log('🎨 Mise à jour style boutons, mode:', quranDisplayMode);
    
    // Réinitialiser tous les boutons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'white';
        btn.style.color = '#1e3c72';
        btn.style.boxShadow = 'none';
    });
    
    // Activer le bouton sélectionné
    let activeBtn;
    if (quranDisplayMode === 'arabic') {
        activeBtn = document.getElementById('mode-arabic');
    } else if (quranDisplayMode === 'french') {
        activeBtn = document.getElementById('mode-french');
    } else {
        activeBtn = document.getElementById('mode-bilingual');
    }
    
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
        activeBtn.style.color = 'white';
        activeBtn.style.boxShadow = '0 4px 12px rgba(30, 60, 114, 0.3)';
    }
}

// Fonction pour convertir les numéros en arabe
function convertToArabicNumber(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(digit => arabicNumerals[digit] || digit).join('');
}

// TOUT LE CODE CORAN DANS DOMContentLoaded (comme test-coran.html)
document.addEventListener('DOMContentLoaded', function() {
    console.log('📖 Initialisation Coran - Version qui fonctionne !');
    
    // Attacher les événements aux boutons de mode
    const arabicBtn = document.getElementById('mode-arabic');
    if (arabicBtn) {
        arabicBtn.addEventListener('click', function() {
            console.log('✅ Mode Arabe sélectionné');
            quranDisplayMode = 'arabic';
            updateModeButtons();
        });
        console.log('✅ Bouton Arabe attaché');
    } else {
        console.error('❌ Bouton mode-arabic introuvable');
    }
    
    const frenchBtn = document.getElementById('mode-french');
    if (frenchBtn) {
        frenchBtn.addEventListener('click', function() {
            console.log('✅ Mode Français sélectionné');
            quranDisplayMode = 'french';
            updateModeButtons();
        });
        console.log('✅ Bouton Français attaché');
    } else {
        console.error('❌ Bouton mode-french introuvable');
    }
    
    const bilingualBtn = document.getElementById('mode-bilingual');
    if (bilingualBtn) {
        bilingualBtn.addEventListener('click', function() {
            console.log('✅ Mode Bilingue sélectionné');
            quranDisplayMode = 'bilingual';
            updateModeButtons();
        });
        console.log('✅ Bouton Bilingue attaché');
    } else {
        console.error('❌ Bouton mode-bilingual introuvable');
    }
    
    // Attacher l'événement au bouton "Charger"
    const loadSurahBtn = document.getElementById('load-surah-btn');
    if (loadSurahBtn) {
        console.log('✅ Bouton load-surah-btn trouvé');
        
        loadSurahBtn.addEventListener('click', async function() {
            console.log('📖 CHARGEMENT SOURATE - Mode actuel:', quranDisplayMode);
            
            const surahNumber = document.getElementById('surah-select').value;
            const quranTextDiv = document.getElementById('quran-text');
            
            if (!surahNumber) {
                console.error('❌ Aucune sourate sélectionnée');
                return;
            }
            
            quranTextDiv.innerHTML = '<p class="quran-info">⏳ Chargement du Coran...</p>';
            
            try {
                console.log(`🔄 Chargement sourate ${surahNumber}...`);
                
                // Charger les informations de la sourate
                const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
                const infoData = await infoResponse.json();
                
                // Charger le texte arabe
                const arabicResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
                const arabicData = await arabicResponse.json();
                
                // Charger la traduction française
                const frenchResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/fr.hamidullah`);
                const frenchData = await frenchResponse.json();
                
                console.log('✅ Données API chargées');
                console.log('Mode actif pour affichage:', quranDisplayMode);
                
                if (infoData.status === 'OK' && arabicData.data && frenchData.data) {
                    const surahInfo = infoData.data;
                    const arabicAyahs = arabicData.data.ayahs;
                    const frenchAyahs = frenchData.data.ayahs;
                    
                    let html = `
                        <div class="surah-header" style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 15px; color: white;">
                            <h2 style="font-size: 1.8em; margin: 10px 0; font-family: 'Amiri', serif;">${surahInfo.name}</h2>
                            <p style="font-size: 1.2em; margin: 5px 0;">${surahInfo.englishName}</p>
                            <p style="font-size: 1em; opacity: 0.9;">${surahInfo.englishNameTranslation} - ${surahInfo.numberOfAyahs} versets</p>
                        </div>
                    `;
                    
                    // Ajouter Bismillah sauf pour sourate 9 et 1
                    if (surahNumber !== '9' && surahNumber !== '1') {
                        html += `<p style="text-align: center; font-size: 1.3em; color: #2a5298; margin-bottom: 25px; padding: 15px; background: rgba(42, 82, 152, 0.1); border-radius: 10px; font-family: 'Amiri', serif;">
                            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                        </p>`;
                    }
                    
                    console.log(`📝 Affichage ${arabicAyahs.length} versets en mode ${quranDisplayMode}`);
                    
                    // Afficher les versets selon le mode
                    for (let i = 0; i < arabicAyahs.length; i++) {
                        const arabicAyah = arabicAyahs[i];
                        const frenchAyah = frenchAyahs[i];
                        
                        if (quranDisplayMode === 'arabic') {
                            // Arabe seul
                            html += `<div class="ayah" style="margin-bottom: 20px; padding: 15px; background: rgba(30, 60, 114, 0.05); border-radius: 10px; border-right: 4px solid #2a5298;">
                                <span class="ayah-number" style="background: #2a5298; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; margin-left: 10px;">﴿${convertToArabicNumber(arabicAyah.numberInSurah)}﴾</span>
                                <span style="font-size: 1.4em; line-height: 2.5; font-family: 'Amiri', serif; direction: rtl; display: block; text-align: right; margin-top: 10px;">${arabicAyah.text}</span>
                            </div>`;
                        } else if (quranDisplayMode === 'french') {
                            // Français seul - COMME DANS test-coran.html
                            html += `<div class="ayah" style="margin-bottom: 20px; padding: 15px; background: rgba(30, 60, 114, 0.05); border-radius: 10px; border-left: 4px solid #2a5298;">
                                <span class="ayah-number" style="background: #2a5298; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; margin-right: 10px;">${arabicAyah.numberInSurah}</span>
                                <span style="font-size: 1.1em; line-height: 1.8; color: #333; display: block; margin-top: 10px;">${frenchAyah.text}</span>
                            </div>`;
                        } else {
                            // Bilingue (Arabe + Français)
                            html += `<div class="ayah" style="margin-bottom: 25px; padding: 20px; background: rgba(30, 60, 114, 0.05); border-radius: 10px; border-left: 4px solid #2a5298;">
                                <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid rgba(42, 82, 152, 0.2);">
                                    <span class="ayah-number" style="background: #2a5298; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; margin-left: 10px;">﴿${convertToArabicNumber(arabicAyah.numberInSurah)}﴾</span>
                                    <span style="font-size: 1.4em; line-height: 2.5; font-family: 'Amiri', serif; direction: rtl; display: block; text-align: right; margin-top: 10px; color: #1e3c72;">${arabicAyah.text}</span>
                                </div>
                                <div>
                                    <span class="ayah-number" style="background: #6c757d; color: white; padding: 3px 8px; border-radius: 10px; font-size: 0.8em; margin-right: 10px;">${arabicAyah.numberInSurah}</span>
                                    <span style="font-size: 1.05em; line-height: 1.8; color: #555; font-style: italic;">${frenchAyah.text}</span>
                                </div>
                            </div>`;
                        }
                    }
                    
                    console.log('✅ HTML généré, affichage dans la page...');
                    quranTextDiv.innerHTML = html;
                    quranTextDiv.scrollTop = 0;
                    console.log('✅ Sourate affichée avec succès !');
                } else {
                    throw new Error('Données API incomplètes');
                }
            } catch (error) {
                console.error('❌ Erreur lors du chargement:', error);
                quranTextDiv.innerHTML = '<p class="quran-info" style="color: #dc3545;">❌ Erreur de chargement. Veuillez réessayer.</p>';
            }
        });
        
        console.log('✅ Événement chargement sourate attaché !');
    } else {
        console.error('❌ Bouton load-surah-btn introuvable !');
    }
    
    console.log('✅ Initialisation Coran terminée !');
});

// =============================================
// NOTES DU CALENDRIER RAMADAN
// =============================================

// Stockage des notes (localStorage)
const RAMADAN_NOTES_KEY = 'ramadan_notes_1446';

// Charger les notes sauvegardées
function loadRamadanNotes() {
    const saved = localStorage.getItem(RAMADAN_NOTES_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erreur chargement notes:', e);
            return {};
        }
    }
    return {};
}

// Sauvegarder les notes
function saveRamadanNotes(notes) {
    try {
        localStorage.setItem(RAMADAN_NOTES_KEY, JSON.stringify(notes));
        return true;
    } catch (e) {
        console.error('Erreur sauvegarde notes:', e);
        return false;
    }
}

// Modifier la fonction de génération du calendrier pour ajouter les notes
const originalGenerateRamadanCalendar = generateRamadanCalendar;
generateRamadanCalendar = function() {
    const calendarGrid = document.getElementById('ramadan-calendar-grid');
    if (!calendarGrid) return;
    
    calendarGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const monthNamesFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const monthNamesAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const dayNamesAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    // Charger les notes existantes
    const ramadanNotes = loadRamadanNotes();
    
    for (let i = 1; i <= ramadanDays; i++) {
        const gregorianDate = new Date(ramadanStart);
        gregorianDate.setDate(gregorianDate.getDate() + (i - 1));
        
        const dayOfWeek = gregorianDate.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const isToday = gregorianDate.getTime() === today.getTime();
        const isSpecialNight = i >= 21;
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.style.cursor = 'pointer';
        dayElement.style.position = 'relative';
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        if (isWeekend) {
            dayElement.classList.add('weekend');
        }
        if (isSpecialNight) {
            dayElement.classList.add('special-night');
        }
        
        // Vérifier si ce jour a une note
        const dayNote = ramadanNotes[i];
        if (dayNote) {
            dayElement.classList.add('has-note');
            dayElement.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)';
            dayElement.style.borderColor = '#22c55e';
        }
        
        const ramadanDayNum = document.createElement('span');
        ramadanDayNum.className = 'ramadan-day-num';
        ramadanDayNum.textContent = i;
        
        const gregorianDateSpan = document.createElement('span');
        gregorianDateSpan.className = 'gregorian-date';
        const day = gregorianDate.getDate();
        const month = gregorianDate.getMonth();
        
        if (currentLang === 'ar') {
            gregorianDateSpan.textContent = `${day} ${monthNamesAr[month]}`;
        } else {
            gregorianDateSpan.textContent = `${day} ${monthNamesFr[month]}`;
        }
        
        const dayOfWeekSpan = document.createElement('span');
        dayOfWeekSpan.className = 'day-of-week';
        dayOfWeekSpan.textContent = currentLang === 'ar' ? dayNamesAr[dayOfWeek] : dayNamesFr[dayOfWeek];
        
        // Indicateur de note
        if (dayNote) {
            const noteIndicator = document.createElement('div');
            noteIndicator.style.cssText = 'position: absolute; top: 5px; right: 5px; background: #22c55e; color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 12px;';
            noteIndicator.textContent = '📝';
            dayElement.appendChild(noteIndicator);
        }
        
        dayElement.appendChild(ramadanDayNum);
        dayElement.appendChild(gregorianDateSpan);
        dayElement.appendChild(dayOfWeekSpan);
        
        // Événement de clic pour ajouter/modifier une note
        dayElement.addEventListener('click', () => openNoteDialog(i, ramadanNotes));
        
        calendarGrid.appendChild(dayElement);
    }
};

// Ouvrir le dialogue de note
function openNoteDialog(dayNumber, notes) {
    const existingNote = notes[dayNumber] || '';
    
    // Créer le modal de note
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        backdrop-filter: blur(5px);
    `;
    
    const noteDialog = document.createElement('div');
    noteDialog.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    noteDialog.innerHTML = `
        <h3 style="color: #1e3c72; margin-bottom: 20px; font-size: 1.5em; text-align: center;">
            ${currentLang === 'ar' ? `ملاحظة اليوم ${dayNumber} من رمضان` : `Note du jour ${dayNumber} de Ramadan`}
        </h3>
        <textarea 
            id="note-textarea" 
            style="width: 100%; min-height: 150px; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1em; resize: vertical; font-family: inherit;"
            placeholder="${currentLang === 'ar' ? 'أضف ملاحظة لهذا اليوم...' : 'Ajoutez une note pour ce jour...'}"
        >${existingNote}</textarea>
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: flex-end;">
            <button id="save-note-btn" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1em;">
                ${currentLang === 'ar' ? '💾 حفظ' : '💾 Sauvegarder'}
            </button>
            ${existingNote ? `<button id="delete-note-btn" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1em;">
                ${currentLang === 'ar' ? '🗑️ حذف' : '🗑️ Supprimer'}
            </button>` : ''}
            <button id="cancel-note-btn" style="background: #e5e7eb; color: #6c757d; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1em;">
                ${currentLang === 'ar' ? 'إلغاء' : 'Annuler'}
            </button>
        </div>
    `;
    
    modal.appendChild(noteDialog);
    document.body.appendChild(modal);
    
    // Focus sur le textarea
    const textarea = document.getElementById('note-textarea');
    textarea.focus();
    
    // Bouton sauvegarder
    document.getElementById('save-note-btn').addEventListener('click', () => {
        const noteText = textarea.value.trim();
        if (noteText) {
            notes[dayNumber] = noteText;
            if (saveRamadanNotes(notes)) {
                showNotificationSuccess(currentLang === 'ar' ? 'تم حفظ الملاحظة!' : 'Note sauvegardée!');
                modal.remove();
                generateRamadanCalendar(); // Régénérer le calendrier
            } else {
                alert(currentLang === 'ar' ? 'خطأ في الحفظ!' : 'Erreur de sauvegarde!');
            }
        } else {
            // Si vide, supprimer la note
            delete notes[dayNumber];
            saveRamadanNotes(notes);
            modal.remove();
            generateRamadanCalendar();
        }
    });
    
    // Bouton supprimer (si existe)
    const deleteBtn = document.getElementById('delete-note-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            if (confirm(currentLang === 'ar' ? 'هل تريد حذف هذه الملاحظة؟' : 'Supprimer cette note?')) {
                delete notes[dayNumber];
                saveRamadanNotes(notes);
                showNotificationSuccess(currentLang === 'ar' ? 'تم حذف الملاحظة!' : 'Note supprimée!');
                modal.remove();
                generateRamadanCalendar();
            }
        });
    }
    
    // Bouton annuler
    document.getElementById('cancel-note-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Fermer en cliquant en dehors
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

console.log('✅ Coran bilingue et notes Ramadan chargés!');
