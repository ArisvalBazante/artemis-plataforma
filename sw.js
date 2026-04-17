self.addEventListener('install', (e) => {
    console.log('[Ártemis] Service Worker Instalado - Pronto para PWA');
});

self.addEventListener('fetch', (e) => {
    // Mantém a aplicação viva mesmo quando a internet cai no terreno
});