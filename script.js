document.addEventListener('DOMContentLoaded', () => {
    const bookElement = document.getElementById('book');

    if (bookElement) {
        const pageFlip = new St.PageFlip(bookElement, {
            width: 550,   // Largeur d'une page individuelle
            height: 733,  // Hauteur d'une page individuelle
            size: "fixed",
            minWidth: 300,
            maxWidth: 1000,
            minHeight: 400,
            maxHeight: 1200,
            showCover: true,
            
            // Paramètres clés pour atténuer la cassure visuelle au centre :
            maxShadowOpacity: 0.15, // Réduit fortement l'ombre noire au milieu qui "coupe" les dessins
            showShadow: true,
            
            mobileScrollSupport: true,
            usePortrait: false      // Force l'affichage double page côte à côte sur écran large
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.page'));

        // Les liens doivent rester cliquables : on empêche le flipbook de capter le geste
        document.querySelectorAll('.lien-experience').forEach(lien => {
            ['mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown'].forEach(evt => {
                lien.addEventListener(evt, e => e.stopPropagation(), { passive: true });
            });
            lien.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                window.open(lien.href, '_blank', 'noopener');
            });
        });
    }
});