



let newscall = ((search="general") => {

    apikey = ['3b6b1edd12790ccd9235eb73d22359ac','0a53d58fb2c827bdaffe1e237ac4ed04'];
    url = `https://gnews.io/api/v4/top-headlines?category=${search}&max=10&apikey=${apikey[1]}`;
  console.log(search)
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
     var articles=data.articles
     console.log(data)
       
for(var i=0; i<articles.length; i++){
    const {image,title,description,publishedAt}=articles[i]    
    console.log(articles[i]);

let news=document.getElementById("news")


news.innerHTML +=`  <div class="card mb-2" style="width: 18rem;">
<img src="${image}" class="news-image card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title.slice(0,20)}...</h5>
  <p class="card-text">${description.slice(0,50)}...</p>
  <span class="badge text-bg-info">${moment(publishedAt).fromNow()}</span>
</div>
</div>
`
}    
       })
       .catch((err)=>{
console.log("error:"+err)
       });
  });
 
 
  newscall()


var  btnsearch=(()=>{
  news.innerHTML="" 
  let search=document.getElementById("searchvalue")
console.log(search.value)
   newscall(search.value)

})