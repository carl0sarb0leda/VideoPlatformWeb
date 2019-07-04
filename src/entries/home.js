import React from 'react'; //divide in components or react elements
import { render } from 'react-dom'; //this is for render the components
//import Playl from './src/playlist/components/playlist';
import HomeC from '../pages/containers/home-container';
import dataaa from '../api.json';

const app = document.getElementById('home-container');


//ReactDOM.render(what i am going to render, where i am going to render)
//ReactDOM.render(hi,app);
//render(<Playl dataq={dataaa}/>, app);
render(<HomeC dat={dataaa}/>, app);

