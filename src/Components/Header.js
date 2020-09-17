// Functional Component

import React from 'react';
// functional components need to be passed props as an argument, you need to place a props parameter to make props work properly, if you only have one paramter - you can delete the parenthesis

const Header = props => {
    console.log(props)

    return (
        <header className='main-header'>
            <h1>{props.username} says {props.greeting}</h1>
            <button onClick={props.usernameFn}>Change Username</button>
            <button onClick={props.secondUsernameFn}>Change Username Again</button>
        </header>
    )
}

export default Header;