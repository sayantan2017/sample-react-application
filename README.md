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

Since 'App.js' entry component, so let' encapsulate its content inside or the 'Layout' element tag as follows.

src/App.js:

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/9512b80a-0cd1-47f9-be1f-12247f0040d2)

/*********** Add Brand Details*********************/
Create A 'AllBrand.js' React Component In React Application:

/*********** Install Axios Library In To React Application:**************/

To invoke the HTTP API calls one of the best-recommended third-party libraries is Axios.

npm i axios

/******************* Consume API From 'AllBrand.js' React Component: ******************************/

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/4f50e941-0213-496c-a522-950d74b7e65a)


The 'useState' loads from the 'react' library. In react js application to maintain a state of data we will use the 'useState'. If the value of 'useState' variable changes entire component gets refreshed. The default value can be given while it is initialized. The 'useState' return array of 2 values, where the first value will be the data and the second value will be the function to update the state. 

The 'useEffect' loads from the 'react' library. The 'useEffect(()=> {},[])' contains 2 in parameters where first parameter is arrow function in which we can write logic to executes and second parameter is array to which we can pass 'useState' values. So whenever the second parameter value changes then only the 'useEffect' gets executed. If the second parameter array is empty then the 'useEffect' get executes only once.

(Line: 16-23) Here used the 'useEffect' where we implemented our Axios API call logic. So to execute the logic inside of 'useEffect' only once we passed the second parameter as an empty array.

(Line: 65) The 'superAllbrand' state variable which contains API response is looping to render the data.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/16e7730f-6d0e-4ad7-aec6-ebb494b4e57c)



