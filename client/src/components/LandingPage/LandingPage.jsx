import React from 'react';

function LandingPage() {
    return(
        <div className='landingPage__jumbotron'>
            <h1>Gotta catch'em all!</h1>
            <p>Do you want to be the next Pokemon Master?</p>
            <Link to='/Home'>
                <button className='landingPage__btn'>Let's go</button>
            </Link>
        </div>
    );
}

export default LandingPage;