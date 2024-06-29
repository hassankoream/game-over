"use strict";
import { ui } from './ui.js';
import { home } from './home.js';
import { details } from './details.js';

const homeInstance = new home();
const uiInstance = new ui();
const detailsInstance = new details();

// uiInstance.displayGameDetails()
homeInstance.loadGames(); 
homeInstance.addGames();  // Add event listeners

uiInstance.test();         // Test UI instance (optional)
homeInstance.test();       // Test home instance (optional)
detailsInstance.test();    // Test details instance (optional)
