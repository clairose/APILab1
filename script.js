$.get('https://www.reddit.com/r/aww/.json', (data)=>{
        for (i=0;i<11;i++){
        $("h1").after(`<h3 id="${i}"><a href="https://www.reddit.com${data.data.children[i].data.permalink}">${data.data.children[i].data.title}</a></h3>`);
        $(`#${i}`).append( `</br><img src="${data.data.children[i].data.preview.images[0].source.url}">`);
        }
    
})