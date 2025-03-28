import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Gallery from './components/Gallery/Gallery';
import Achievers from './components/Achievers/Achievers';
import Contact from './components/Contact/Contact';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/achievers" component={Achievers} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/application" component={ApplicationForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;