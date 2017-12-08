import React, { Component } from 'react';
import Header from './header';
import requireAuthentication from "./higher_order_components/requre_authentication";

const Resource = () => {
    return (
        <div>
            <h1>Resources</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend ipsum. Fusce vulputate id elit et tincidunt. Nam interdum lorem ut libero mollis, dapibus auctor ligula molestie. Cras tempus ligula nisl, et interdum lorem hendrerit at. Vestibulum maximus sed dolor ut maximus.
            </p>
        </div>
    );
}

export default requireAuthentication(Resource);