import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MapComponent from './components/Map';

const reactRoot = document.createElement('div');
document.body.appendChild(reactRoot);

ReactDOM.render(<MapComponent />, reactRoot);
