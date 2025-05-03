import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Menu } from '../components/menu/menu';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const navButton = document.querySelector('.nav-btn');
navButton.addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});

const rolloutButton = document.querySelector('.rollout-nav');
rolloutButton.addEventListener('click', () => {
  rolloutButton.classList.add('nav-closed');
});
