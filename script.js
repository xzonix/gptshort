document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const longUrl = document.getElementById('longUrl').value;
    const shortUrl = generateShortUrl(longUrl);
    displayShortUrl(shortUrl);
});

function generateShortUrl(longUrl) {
    const baseUrl = 'https://fran.is-a.dev/';
    const urlCode = btoa(longUrl).slice(0, 6);
    return `${baseUrl}${urlCode}`;
}

function displayShortUrl(shortUrl) {
    const resultDiv = document.getElementById('result');
    const shortUrlAnchor = document.getElementById('shortUrl');
    shortUrlAnchor.href = shortUrl;
    shortUrlAnchor.textContent = shortUrl;
    resultDiv.classList.remove('hidden');
}
