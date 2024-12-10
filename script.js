document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value.trim();
    
    if (!query) {
        alert('Inserisci un termine di ricerca.');
        return;
    }

    console.log('Query:', query);

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`);

        if (!response.ok) {
            throw new Error('Errore nella richiesta API');
        }

        const data = await response.json();
        console.log('Risultati API:', data);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (data.length === 0) {
            resultsDiv.innerHTML = '<p>Nessun risultato trovato.</p>';
        } else {
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `${item.display_name}`;
                resultsDiv.appendChild(div);
            });
        }
    } catch (error) {
        console.error('Errore durante la richiesta API:', error);
        alert('Errore nel caricamento dei dati. Riprova più tardi.');
    }
});
