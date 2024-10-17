async function fetchGif() {
    let query = document.getElementById('searchQuery').value;
    let apiKey = "4Z9kGU8mBpBcofSeOwQw6zuBmQEnYNN9";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=g&limit=50`;

        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
        let img = document.getElementById('gifDisplay');
        if (result.data.length > 0) {
            let gifUrl = result.data[Math.floor(Math.random()*50)].images.original.url;
            
            img.src = gifUrl;
        } else {
            img.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDY3YXk2YXE0eTJ4d2xndTFhNWM3eGw3ZHVjNG55M3F2OG5sbDE2dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/epwOXUhkr9jTd01EST/200.webp"
            console.log('No GIF found for this query');
        }
   
}
