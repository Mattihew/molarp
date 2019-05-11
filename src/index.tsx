import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Map from './components/Map';

const reactRoot = document.createElement('div');
document.body.appendChild(reactRoot);

ReactDOM.render(<Map />, reactRoot);
