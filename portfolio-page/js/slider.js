const techItems = [
    {
        image: "./img/html.png",
        description: "Rozumiem oraz stosuję zgodnie ze standardami znaczniki semantyczne, listy, tabele, formularze, nagłówki oraz wiele innych elementów odpowiedzialnych za strukturę strony internetowej.",
        class: "html"
    },
    {
        image: "./img/css.png",
        description: "Wygląd struktury definiuję poprzez kaskadowe arkusze styli. Nie są obce mi podstawowe właściwości css, media queries czy tworzenie animacji. Poznałem flexbox, metodologię BEM, preprocesor SASS.",
        class: "css"
    },
    {
        image: "./img/js.png",
        description: "W swoich projektach wykorzystuję JavaScript, aby wprowadzać dynamikę w interfejsie użytkownika. Poznałem podstawowe funkcje języka oraz rozumiem paradygmat obiektowy.",
        class: "js"
    },
    {
        image: "./img/react.png",
        description: "Obecnie swoją uwagę skupiam na nauce reacta, aby móc tworzyć znacznie bardziej zaawansowane interfejsy użytkownika. Poznałem podstawy, rozumiem ideę wykorzystywania biblioteki.",
        class:"react"
    },
    {
        image: "./img/github.png",
        description: 'Oczywiście korzystam z Githuba, zapraszam do sprawdzenia moich projektów, którę będę sukcesywnie umieszczać w repozytorium pod adresem <a class="technology__link" href="https://github.com/domblacha">github.com/domblacha</a>',
        class: 'git'
    },

]

const image = document.querySelector('.technology__image');
const description = document.querySelector('.technology__description');
const next = document.querySelector('.technology__next');
const prev = document.querySelector('.technology__prev');

let index = 0;

const slider = () =>{
    const indexInterval = setInterval(() =>{
        if(index < techItems.length){
            index++;
            image.classList.remove(techItems[index-1].class);
        } 
        if(index === techItems.length){
            index = 0;
            image.classList.remove(techItems[techItems.length-1].class);
        } 
        image.setAttribute("src",techItems[index].image);  
        image.classList.add(techItems[index].class);
        description.innerHTML = techItems[index].description; 
        
    }, 5000);
     
    return indexInterval;
}
let indexInterval = slider();

next.addEventListener('click', () =>{
    clearInterval(indexInterval);
    index++;
    if(index !== techItems.length){
        image.setAttribute("src",techItems[index].image);
        image.classList.remove(techItems[index-1].class);
        image.classList.add(techItems[index].class);
        description.innerHTML = techItems[index].description;
    } else {
        index = 0;
        image.setAttribute("src",techItems[index].image);
        image.classList.remove(techItems[techItems.length-1].class);
        image.classList.add(techItems[index].class);  
        description.innerHTML = techItems[index].description;
    }
    indexInterval = slider();

})

prev.addEventListener('click', () =>{
    clearInterval(indexInterval);
    index--;
    if(index < 0){
        console.log("if: " + index)
        index = techItems.length -1;
        image.classList.remove(techItems[index-index].class);
        image.classList.add(techItems[index].class);
        image.setAttribute("src",techItems[index].image);
        description.innerHTML = techItems[index].description;
    } else {
        console.log("else: " + index)
        image.classList.remove(techItems[index + 1].class);
        image.classList.add(techItems[index].class);
        image.setAttribute("src",techItems[index].image);
        description.innerHTML = techItems[index].description;
    }
    indexInterval = slider();
})



