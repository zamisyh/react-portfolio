import React, { Component } from 'react';
import Header from '../Common/Header';

class Home extends Component {
    render(){
        return(
            <div>
                <Header 
                    title="Welcome To Our Studios"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                 />
            </div>
        );
    }
}

export default Home;