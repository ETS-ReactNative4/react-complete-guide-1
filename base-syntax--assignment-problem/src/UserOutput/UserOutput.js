import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username = {props.username}</p>
            <p>Donec non odio eget eros mollis iaculis.</p>
        </div>
    )
}

export default userOutput;