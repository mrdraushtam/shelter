const header = document.querySelector('.header');
const openButton = document.querySelector('.menu-burger');
const shadow = document.createElement('div');

function openMenu() {
    openButton.addEventListener('click', function() {
        header.classList.toggle('open')
        
        shadow.classList.toggle('shadow');
        document.body.appendChild(shadow);
    })
}
openMenu();

function closeMenu() {
    let elements = [...document.querySelectorAll('.start-screen-content-container, .nav-link, .logo, .shadow')];
    elements.forEach(item => { 
        item.addEventListener('click', function() {
           header.classList.remove('open');
           document.documentElement.style.overflow = 'auto';
           shadow.classList.remove('shadow');
        })
    })
}
closeMenu()

shadow.addEventListener('click', closeMenu)

function addScroll() {
    if (header.classList.contains('open')) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'auto';
    }
}

openButton.addEventListener('click', addScroll)

const petsCards = document.querySelectorAll('.pets-card');
const closeButton = document.querySelector('.button-close');
const petSection = document.querySelector('.pets');
const body = document.querySelector('.pets-wrap');
const shadow2 = document.createElement('div');

let html = document.documentElement;
let scrollPosition = window.pageYOffset;

function openPopUp() {
    petSection.classList.add('open');
    document.documentElement.style.overflow = 'hidden';

    shadow2.classList.toggle('shadow2');
    document.body.appendChild(shadow2);
}

function closePopUp() {
    petSection.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
    shadow2.classList.remove('shadow2');
}

petsCards.forEach(function(card) {
  card.addEventListener('click', openPopUp);
});

closeButton.addEventListener('click', closePopUp);
shadow2.addEventListener('click', closePopUp)

const popUpHeading = document.querySelector('.pop-up-heading');
const breed = document.querySelector('.pop-up-subheading');
const petsDescription = document.querySelector('.pets-description');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');
const petImage = document.querySelector('.pop-up-image');

async function getPetKatrine() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[4].name;
    breed.textContent = `${data[4].type} - ${data[4].breed}`
    petsDescription.textContent = data[4].description;
    age.innerHTML = `<b>Age:</b> ${data[4].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[4].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[4].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[4].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/katrine.png')`
}

const petKatrine = document.querySelector('.katrine');
petKatrine.addEventListener('click', getPetKatrine)

async function getPetJennifer() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[0].name;
    breed.textContent = `${data[0].type} - ${data[0].breed}`
    petsDescription.textContent = data[0].description;
    age.innerHTML = `<b>Age:</b> ${data[0].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[0].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[0].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[0].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/jennifer.png')`
}

const petJennifer = document.querySelector('.jennifer');
petJennifer.addEventListener('click', getPetJennifer);

async function getPetWoody() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[2].name;
    breed.textContent = `${data[2].type} - ${data[2].breed}`
    petsDescription.textContent = data[2].description;
    age.innerHTML = `<b>Age:</b> ${data[2].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[2].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[2].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[2].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/woody.png')`
}

const petWoody = document.querySelector('.woody');
petWoody.addEventListener('click', getPetWoody);

async function getPetSophia() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[1].name;
    breed.textContent = `${data[1].type} - ${data[1].breed}`
    petsDescription.textContent = data[1].description;
    age.innerHTML = `<b>Age:</b> ${data[1].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[1].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[1].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[1].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/sophia.png')`
}

const petSophia = document.querySelector('.sophia');
petSophia.addEventListener('click', getPetSophia);

async function getPetTimmy() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[5].name;
    breed.textContent = `${data[5].type} - ${data[5].breed}`
    petsDescription.textContent = data[5].description;
    age.innerHTML = `<b>Age:</b> ${data[5].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[5].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[5].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[5].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/timmy.png')`
}

const petTimmy = document.querySelector('.timmy');
petTimmy.addEventListener('click', getPetTimmy);

async function getPetCharly() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[7].name;
    breed.textContent = `${data[7].type} - ${data[7].breed}`
    petsDescription.textContent = data[7].description;
    age.innerHTML = `<b>Age:</b> ${data[7].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[7].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[7].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[7].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/charly.png')`
}

const petCharly = document.querySelector('.charly');
petCharly.addEventListener('click', getPetCharly);

async function getPetScarlett() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[3].name;
    breed.textContent = `${data[3].type} - ${data[3].breed}`
    petsDescription.textContent = data[3].description;
    age.innerHTML = `<b>Age:</b> ${data[3].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[3].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[3].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[3].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/scarlett.png')`
}

const petScarlett = document.querySelector('.scarlett');
petScarlett.addEventListener('click', getPetScarlett);

async function getPetFreddie() {  
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json(); 
    popUpHeading.textContent = data[6].name;
    breed.textContent = `${data[6].type} - ${data[6].breed}`
    petsDescription.textContent = data[6].description;
    age.innerHTML = `<b>Age:</b> ${data[6].age}`
    inoculations.innerHTML = `<b>Inoculations:</b> ${data[6].inoculations}`
    diseases.innerHTML = `<b>Diseases:</b> ${data[6].diseases}`
    parasites.innerHTML = `<b>Parasites:</b> ${data[6].parasites}`
    petImage.style.backgroundImage = `url('../../assets/png/freddie.png')`
}

const petFreddie = document.querySelector('.freddie');
petFreddie.addEventListener('click', getPetFreddie);