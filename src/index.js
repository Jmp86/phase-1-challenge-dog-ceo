console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
const imageContainer = document.getElementById("dog-image-container")
const dogBreeds = document.getElementById("dog-breeds")
const dropdown = document.getElementById("breed-dropdown")

fetch(imgUrl)
.then((res) => res.json())
.then((dogPic) => {
    dogPic.message.forEach(dog => {
        renderDogPic(dog)
    })
})

function renderDogPic (dogPic) {
    const imgTag = document.createElement('img');
    imgTag.src = dogPic
    imageContainer.appendChild(imgTag);    
}

fetch(breedUrl)
.then((res) => res.json())
.then((breeds) => {   
   allBreeds = Object.keys(breeds.message)
    renderAllBreeds(allBreeds)           

})

let allBreeds = []

function renderBreed (breed) {
    const li = document.createElement('li');
    li.innerText = breed;
    dogBreeds.appendChild(li);  
    li.addEventListener('click', () => {
    li.style.color = "red";
    })  
}

function renderAllBreeds (breeds){
    dogBreeds.innerText = ""
    breeds.forEach(breed => {
        renderBreed(breed)        
       })
}

dropdown.addEventListener('change', (event) => {
    event.target.value
    const filteredBreeds = allBreeds.filter(word => word[0] === event.target.value)
    renderAllBreeds(filteredBreeds)
})

})

