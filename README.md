/******* Command to create the ReactJS application. *********/
npx create-react-app sample-react-application

/****Let's go through the project and explore important files. ****/

index.html: Inside the public folder we can see the index.html. Only the HTML file of the entire ReactJS application. It contained a 'div' element whose 'id' value is 'root', inside of this element all ReactJS components get rendered.

index.js: Entry javascript file for ReactJS. It helps paint 'App' component content in 'index.html'.

App.js: The 'App.js' react component. It returns the 'JSX'(Javascript XML) content(JSX means writing HTML code inside of javascript directly).

/***Install ReactJS Bootstrap:***/

ReactJS Bootstrap is just built on Bootstrap. So that all UI components are straightforward to integrate into the ReactJS application.

Command to install the ReactJS Bootstrap.

npm install react-bootstrap bootstrap

/*****Now import the bootstrap CSS node module file reference on the 'index.js'*******/
src/index.js:
![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/e2e7c4bf-8806-48a5-b0aa-8595273389aa)

[Line: 5] Added the bootstrap CSS file reference.
Here removed existing default codes like 'reportWebVitals' and 'React.StrictMode'(react component) which we won't require for the local learners.

/**Add React Bootstrap Menu:**/
The 'Menu' is shared content for all the pages in any application. So let's create separate components like 'Layout.js' inside of a new folder path like 'components/shared'.
src/components/shared/Layout.js:
![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/8302d2e5-03ab-419d-bd80-fe3bef4af233)
Here 'Layout' is our component function's entire logic is added inside of it and this function returns JSX content. The 'Layout' function has input params like 'props' which gives access to the either custom or default properties.
(Line: 1&2) Imported the react-bootstrap component like 'Container' & 'Navbar'.
(Line: 13) The 'Layout' function must be reander as custom tag like '<Layout></Layout>'. So to read the content inside of the 'Layout' element we have to use 'props.children' and to render content we have to ReactJS expression like '{}'(this can render plain text, HTML, even execute logic expression)


