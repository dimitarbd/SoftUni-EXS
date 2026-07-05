// Gett root HTML Element
var rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initilize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
var secondHeadingReactElement = React.createElement('h2', null, 'JSX is Awesome');

var headingReactSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);

// Render content
rootReactElement.render(headingReactSectionElement);