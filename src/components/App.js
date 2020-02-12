import React from 'react';
import {Route} from 'react-router-dom';
import AboutPage from './about/About';
import HomePage from './home/HomePage';

function App()  {
    return (
        <div className="container-fluid">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
        </div>
    );
}

export default App;