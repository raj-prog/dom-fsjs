let h3 = document.createElement('h3');
h3.innerText = 'My New FAQ';

let section = document.createElement('section');
section.classList.add('parent');
section.appendChild(h3);

let homepage = document.querySelector('.accordion-homepage');
homepage.appendChild(section);
