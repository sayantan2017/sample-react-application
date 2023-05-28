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

(Line: 67) The 'Col' component specified the 'key' property which is recommended to provide unique value for looping items.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/d4606fba-4a43-4ba4-bf54-a7a3004ae431)

/*******************Create 'AddSuperBrand' Component In React App:*******************************/

On the 'pages' folder let's create a new react js component like 'AddSuperBrand'.

Install React Router Package:

We add a 2nd-page component in our application which means page components need to be loaded as per their navigation. So to implement navigation we need to install the React Router library

npm i react-router-dom

Create Form To Consume HTTP Post API Call In React App:

Let's create a form to add the new item with the help of the HTTP Post API call.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/25357ac5-32c6-4045-b544-37f962bb922c)

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/1d552c2f-faa6-4f0d-b04f-c1729872a724)

The 'useRef()' loads from the 'react' library. This variable of type 'useRef' can be mapped with the 'ref' attribute of an HTML tag so that we can access the element values with it. So it is very useful for reading the form data.

(Line: 8-11) Here constant variable is initialized with 'useRef', so all these variables will be mapped with form fields to read the field values.

(Line: 15-28) The 'addSuperBrandHandler' is a function that holds logic to post the form data to the HTTP Post API call. 

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/a0121921-0f91-4085-bbef-91d3bc1ef28b)

(Line: 16-21) API payload object and here we can observe that to read the form filed value we are using eg:'ProductName.current.value' that means we accessing reference of the HTML element to read its value.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/59951464-1095-471c-ba15-6564d777bdd6)


(22-26) Axios post call invocation, on success navigating back to the home page('AddSuperBrand.js component is our home page and routing will be configured in upcoming steps')

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/409724df-0913-41c4-abaf-4e232ae3ac87)

(33-47) Each form field is mapped to the 'ref' attribute to get access of fields.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/d0363cab-99c5-4dcd-94b1-2b26ec44de88)


(51-53) Form submit it click event can be raised using 'onClick'. Here we need to register the 'addSuperBrandHandler' to the 'onClick' event.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/1d17d5bc-fe97-460f-8813-c19588894030)

(Line: 5) Initialized the 'useNavigate()' that loads from the 'react-router-dom' library.

/**************************** Configure The Component Routing Navigation: ****************************************/

In App.js file

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/48d70a48-3f93-44b8-b567-17859bea8f10)


/************************************************ Create A 'UpdateSuperBrand' Component In React App:******************************/

Add Route details in App.js

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/473c4f08-a750-4e89-88e4-420ec686489d)

Add Update details 

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/1792c2fc-3e0b-4b6c-8d68-ac828b30176f)

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/356f330f-41e4-40cd-a4da-1b7d84d7c0bd)

(Line: 8-11) Declared the 'useRef' variables which we use to read the form data.

(Line: 13) Declared 'navigate' variable of type 'useNavigate()'.

(Line: 15) The 'useParams()' loads from the 'react-router-dom' helps to read the dynamic data from the route.

(Line: 17-24) Fetching the record to edit based on the 'id' value. To execute this API call only once we pass an empty array as the second parameter to the 'useEffect()'.

(Line: 26-39) Invoking the HTTP put API call for updating the record.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/50673a20-f2d8-4323-83ab-cb1477ea4b91)


(Line: 63-65) The button click event registered with the 'updateVillainHandler' method.


Let's add the 'Edit' button on to the 'AllBrand' component.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/e4122d49-455f-4b23-b7fb-26ccd2c53d82)


/************************************* Create A Shared React Component Like 'Delete':**********************************************************/

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/2bb29f2f-d0f3-4c68-8956-bd8ea01a42c2)

(Line: 8) The  'show' is the boolean property of the 'Modal' component. The parent component passes its value through 'props.showModal'(here showModal is our custom property name which must be passed by the parent component and its value should be boolean). So if 'show' property receives 'true' then opens up the modal.

(Line: 9-10) The 'onHide' get triggered by the 'x'(close button) on the right-top corner of the modal. Here 'onHide' register with arrow function which internally calls a method of parent component like 'props.hideConfirmDeleteHandler'.

(Line: 15) Dynamic 'props.title' property for the modal title.

(Line: 17) Dynamic 'props.body' property for the modal body.

(Line: 19-26) Close button, click event register with arrow function which internally calls a method parent component like 'props.hideConfirmDeleteHandler'.

(Line: 27-34) Confirm Delete button, click event register with arrow function which internally calls a method of parent component like  'props.ConfirmDeleteHandler'.

/***************** Invoke The 'Delete' Component From The 'AllBrand' Component:**************************/

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/3aee5886-07ee-42d5-831c-6ec7abb32cdb)



(Line: 14) The 'showModal' & 'setShowModal' are useState variables used to show and hide the modal.
(Line: 15) The 'itemToDeleteId' & 'setItemToDeleteid' are useState variables used to maintain id of the record that need to be deleted.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/7ae2edfa-da7f-44ec-ad63-d9202c81bd71)


(Line: 25-34) The function 'confirmDeleteHandler' contains logic to invoke the delete API call. 

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/3caeb433-dd19-4458-a62f-ff22faca8419)


After deleting API success we are updating a few 'useState'. The 'setShowModal' is assigned to false to close the modal. The 'setsuperAllbrand' update to remove the deleted from it. The 'setItemToDeleteId' value assigned to '0'.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/907b767f-9ef5-4441-8e06-686392d5fe05)


(Line: 37-40) The function 'showConfirmDeleteHandler' will invoke by the delete button. It contains logic like 'setShowModal' to true which opens the delete confirmation modal and 'setItemToDeleteId' value contains the record item to be deleted.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/39fbd0ce-9dfc-49b3-a814-b63ffd342654)


(Line: 42-46) The function 'hideConfirmationDeleteHandler' will invoke by the 'cancel' button on modal. It contains logic like 'setShowModal' to true which closes the modal and 'setItemToDelteId' reset to value '0'.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/be3ae492-5916-4085-9b84-f37decc2b40b)


(Line: 46-52) Rendered the 'DeleteConfirmation' component with dynamic input properties like 'showModal', 'title', 'body', 'confirmDeleteHandler', 'hideConfirmDeleteHandler'.

![image](https://github.com/sayantan2017/sample-react-application/assets/26603086/286c2085-2cc6-42c1-96bc-1e1c6472a6d0)


(Line: 92-98) The 'Delete' button clicks the event registered with the arrow function. The logic inside of the arrow function is to invoke the 'showConfirmDelteHandler' by inputting the 'id' of the item to delete.


