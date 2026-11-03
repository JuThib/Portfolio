document.addEventListener('DOMContentLoaded', () => {
    const bookElement = document.getElementById('book');

    if (bookElement) {
        const pageFlip = new St.PageFlip(bookElement, {
            // width/height = proportions d'UNE page (le livre s'adapte ensuite à l'écran)
            width: 550,
            height: 733,
            size: "stretch",      // le livre remplit l'écran disponible en gardant les proportions
            minWidth: 260,        // en dessous de 2 x minWidth de large : affichage page seule (mobile portrait)
            maxWidth: 1000,
            minHeight: 346,
            maxHeight: 1333,
            showCover: true,

            // Paramètres clés pour atténuer la cassure visuelle au centre :
            maxShadowOpacity: 0.15, // Réduit fortement l'ombre noire au milieu qui "coupe" les dessins
            showShadow: true,

            mobileScrollSupport: true,
            usePortrait: true       // page seule sur petit écran, double page sur écran large
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
