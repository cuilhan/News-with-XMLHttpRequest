// Url setup
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=48871837d14e4b66af953a3a30852a99';
dataForUI = [];
// Get data from API
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
   if (xhr.readyState == XMLHttpRequest.DONE) {
    const datas = JSON.parse(xhr.responseText);
    dataForUI =datas;
    sendDataToUI(datas,0);
   }
}
xhr.open('GET', url, true);
xhr.send(null);

// Define all UI items
const imageNews = document.querySelector(".card-img-top");
const title = document.querySelector(".card-title");
const content = document.querySelector(".card-text");
const author = document.querySelector(".author");
const source = document.querySelector(".source");
const cardLink = document.querySelector(".card-link");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
let counter = 0;
let count = (function () {
      return function () {
        return counter += 1;
      }
  })();

  let countMinus = (function () {
    return function () {
      return counter -= 1;
    }
})();

  nextButton.addEventListener("click",function(){
    sendDataToUI(dataForUI,count());
    
  })

  previousButton.addEventListener("click",function(){
      sendDataToUI(dataForUI,countMinus());
  })

function sendDataToUI(datas,index){
    console.log(counter);
    console.log(datas.articles);
        imageNews.src = datas.articles[index].urlToImage;
        title.textContent = datas.articles[index].title;
        content.textContent = datas.articles[index].content;
        author.textContent = datas.articles[index].author;
        source.textContent = datas.articles[index].source.name;
        cardLink.href = datas.articles[index].url;
}