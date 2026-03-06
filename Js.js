document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const letter = document.getElementById("letter"); // klikana kartka
    const btnOpen = document.getElementById("open");
    const btnclose = document.getElementById("close");
    const modulo = document.getElementById("modulo");

    function openEnvelope(){
        // flap otwiera się, animacja flowers działa
        envelope.classList.add("open");
        envelope.classList.remove("close");
                setTimeout(() => {
        modulo.classList.add("open");
        modulo.classList.remove("close");
        }, 1600);
    }



    function closeEnvelope(){
        // najpierw chowanie kartki
        modulo.classList.remove("open");
        modulo.classList.add("close");

        // po 0.6s zamknięcie koperty
        setTimeout(() => {
            envelope.classList.add("close");
            envelope.classList.remove("open");
        }, 600);
    }

    // Eventy
    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnclose.addEventListener("click", closeEnvelope);

    
});