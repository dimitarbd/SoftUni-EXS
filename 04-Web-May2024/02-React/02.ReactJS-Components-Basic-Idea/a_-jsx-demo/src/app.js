import React from 'react';
import ReactDOM from 'babel-preset-react-app';

// Gett root HTML Element
const rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initilize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
const headingReactSectionElement = (
    <header className="navigation" id="site-header">
        <h1>Hello JSX from React</h1>
        <h2>JSX is Awesome</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, corrupti?</p>
    </header>
);

function Main() {
    return React.createElement(
        'main',
        {},
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix',
            ),
            React.createElement(
                'li',
                {},
                'Man of steel'
            )
        )
    );
}

const siteContent = React.createElement(
    'div',
    {},
    headingReactSectionElement,
    React.createElement(
        Main,
        {},
    ),
);

// Render content
rootReactElement.render(siteContent);





