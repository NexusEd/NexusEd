function publicarOpinion() {
    const textarea = document.getElementById('exampleFormControlInput1');
    const textoOpinion = textarea.value;

    const ratingInputs = document.querySelectorAll('.rating input');
    let puntuacion = 0;

    ratingInputs.forEach(input => {
        if (input.checked) {
            puntuacion = input.value;
        }
    });

    if (textoOpinion.trim() !== '' && puntuacion > 0) {
        const opinion = document.createElement('div');
        opinion.classList.add('card', 'mt-3');
        opinion.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Usuario 1</h5>
                <h6 class="card-subtitle mb-2 text-muted"><small class="text-muted">`+"★".repeat(puntuacion) + '☆'.repeat(5 - puntuacion) + `</small> ${new Date().toLocaleDateString()}</h6>
                <p class="card-text">${textoOpinion}</p>
            </div>
        `;

        const opinionesContainer = document.getElementById('opinionesContainer');
        opinionesContainer.appendChild(opinion);

        // Limpia el contenido del textarea después de publicar la opinión
        textarea.value = '';
        ratingInputs.forEach(input => {
            input.checked = false;
        });
    }
}

