'use strict';

import { sayHi } from './greet';

const showHello = (divName: string, name: string) => {
    const ele = document.getElementById(divName);
    ele.innerText = sayHi(name);
};

showHello('greeting', 'Bruna');