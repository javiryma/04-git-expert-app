export const getGifs = async(category) => {
    const apiKey='rW8OE0gjCmdCFRXbVjosZdBsJn6xEcj0';
    const limit=10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}