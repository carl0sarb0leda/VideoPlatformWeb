import React from 'react'; //divide in components or react elements
import { render } from 'react-dom'; //this is for render the components
import Playl from './src/playlist/components/playlist';
import dataaa from './src/api.json';

const app = document.getElementById('app');


//ReactDOM.render(what i am going to render, where i am going to render)
//ReactDOM.render(hi,app);
render(<Playl dataq={dataaa}/>, app);

