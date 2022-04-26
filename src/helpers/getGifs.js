export const getGifs = async( category ) => {
    const apiKey = "&api_key=nBlThqfuZoKKfRqOM8K8XSkfBOVK8J36";
    const url    = "https://api.giphy.com/v1/gifs/search?";
    const limit  = "&limit=10";
    const categorySearch ="q="+category;
    const search=url+categorySearch+limit+apiKey;

   //console.log(search);

    const response = await fetch(search);

    const { data } = await response.json();

   //console.log("data");
   //console.log( data );

    const gifs = data.map( img => {
        return {
            id:    img.id,
            title: img.title,
            url:   img.images.downsized_medium.url
        }
    })

    return gifs;
}


//getGifs();