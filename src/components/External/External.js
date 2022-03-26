import React from 'react';

const External = () => {
    return (
        <div className='my-4'>
            <h3>How does React Work?</h3>
            <p>
            First I'll give a little background about what React is - React is a Javascript library that was created by Facebook (in around 2013) to create dynamic user interfaces for the web.

            The key word here is dynamic, which means content on the page can change dynamically while you interact with it. In other words, the page doesn't render just static HTML.

            For the sake of completeness, I thought I'd write a layman explanation and a more technical explanation of how React works.
            </p>
            <h3>How does React Work?</h3>
                <h3>State</h3>
            <p> 
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly
            </p>
            <h3>Props</h3>
          <p> 
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component
            </p>
        </div>
    );
};

export default External;