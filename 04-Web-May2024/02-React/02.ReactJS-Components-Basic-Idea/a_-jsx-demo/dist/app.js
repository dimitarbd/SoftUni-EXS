import React from 'react';
import ReactDOM from 'babel-preset-react-app';

// Gett root HTML Element
var rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initilize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var headingReactSectionElement = React.createElement(
    'header',
    { className: 'navigation', id: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello JSX from React'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is Awesome'
    ),
    React.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, corrupti?'
    )
);

function Main() {
    return React.createElement('main', {}, React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of steel')));
}

var siteContent = React.createElement('div', {}, headingReactSectionElement, React.createElement(Main, {}));

// Render content
rootReactElement.render(siteContent);