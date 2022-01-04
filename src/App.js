import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render(){
    return(
      <Router>
          <PageWrapper>
              <Routes>
                  <Route exact={true} path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
              </Routes>
          </PageWrapper>
      </Router>
    );
  }
}

export default App;