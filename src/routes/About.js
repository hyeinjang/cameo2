import React from 'react';
import './About.css';

function About(props){
    console.log(props)
    return(
        <div className="about">
            <h4>Jang Hye In</h4>
            <p>Nomad Coder Reactjs 강좌를 바탕으로 제작된<br></br> web-application 입니다.</p>
        </div>
    )
}

export default About;