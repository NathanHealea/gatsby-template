

import RootElement from './gatsby/wrappers/RootElement';
import PageElement from './gatsby/wrappers/PageElement';

// Fontawesome Imports 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './src/styles/tailwind.css';

// Fontawesome configurations
library.add(fas, far, fab);


// Exports
export const wrapPageElement = PageElement;
export const wrapRootElement = RootElement;
