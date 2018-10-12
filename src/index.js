import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
