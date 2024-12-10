document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    if (query) {
        // Esempio di ricerca usando un'API di terze parti
        fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ''; // Pulire risultati precedenti
                data.results.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = `${item.name} - ${item.location}`;
                    resultsDiv.appendChild(div);
                });
            })
            .catch(err => console.error(err));
    } else {
        alert('Inserisci un termine di ricerca.');
    }
});
