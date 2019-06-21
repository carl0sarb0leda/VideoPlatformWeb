import React from 'react'; //divide in components or react elements
import { render } from 'react-dom'; //this is for render the components
import Medi from './src/playlist/components/media.js';
import Playl from './src/playlist/components/playlist';
import dataaa from './src/api.json';

//console.log('Hiii ;)');
const app = document.getElementById('app');
const hi = <h1>Helloooo</h1>;

//ReactDOM.render(what i am going to render, where i am going to render)
//ReactDOM.render(hi,app);
render(<Playl type="video"
                 title="What is responsive design?"
                 author="Carlos A"
                 image="./images/covers/responsive.jpg"/>, app);
