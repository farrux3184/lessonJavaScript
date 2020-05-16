'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'parent-node-prepend-polyfill';
// не тестирован
// import 'validator';
// import 'validate';
// import 'classlist-polyfill';
// import 'remove-polyfill';

import countTimer from './modules/countTimer';
import toogleMenu from './modules/toogleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import command from './modules/command';
import sendForm from './modules/sendForm';
import validator from './modules/validator';

// TIMER
countTimer('18 may 2020');
// MENU
toogleMenu();
// POPUP
togglePopUp();
// TABS
tabs();
// SLIDER
slider();
// CALCULATED
calc(100);
// COMMANDS
command();
sendForm(form1);
sendForm(form2);
sendForm(form3);
validator();
