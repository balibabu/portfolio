// import './style.css'
import Navbar from './components/html/Navbar.html?raw';
import HeroSection from './components/html/HeroSection.html?raw';
import About from './components/html/About.html?raw';
import Skill from './components/html/Skill.html?raw';
import Experience from './components/html/Experience.html?raw';
import Project from './components/html/Project.html?raw';
import Contact from './components/html/Contact.html?raw';
import Footer from './components/html/Footer.html?raw';
import { Portfolio } from './components/js/portfolio.js'

document.querySelector('#app').innerHTML = `
${Navbar}
${HeroSection}
${About}
${Skill}
${Experience}
${Project}
${Contact}
${Footer}
`

Portfolio();