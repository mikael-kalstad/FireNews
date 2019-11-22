A community news site project in the subject TDAT2003 Systemutvikling 2 med web-applikasjoner (2019)

<br/>

## Technologies used in this project
- MongoDB (noSQL database)
- Express.js (Node.js API module)
- Mongoose (MongoDB modeling tool)
- React.js
- Jest (for js) and supertest (for API)
<br/>


## How to launch website
1. Clone project and install dependencies
```terminal
git clone https://gitlab.stud.iie.ntnu.no/mikaek/firenews
npm install
```

2. Start API server (from command line)
```terminal
cd api 
node start.js
```
3. Start react server (from command line)
````terminal
npm start
````
<br/>

## Structure 
### Layout
The website uses the same layout around the content for all pages, expect the 404 page not found page. Therefore I made a layout component which includes:
- Side-navigation
- Newsfeed
- Floating action button (mobile only)
- Top navigation (desktop only)

This component also switches between mobile- and desktop-layout if the width of the page goes under/over a certain breakpoint. 

The benefit of using a layout is that you only have to declare it once in the top application, and then render all children (content) inside it. 
<br/><br/>


### Page routing
I used **react-router** for loading components on different urls on the site. Some routes use the layout component, therefore I made a **RouteWithLayout** component which integrates both components into one. This is necessary since wrapping the layout component with the router component will render the layout around all routes on the site.
````javascript
<RouteWithLayout 
    path='/article/:id' 
    render={(props) => <Article {...props} data={articleData} />}
/>
````
In the example above, the article component will only be rendered if the url-path is /article/some-id. The layout component will also be rendered around the content in the article component. 

Note: if the article is not found with the given id in the database, the page will redirect to the 404 page not found page using the **Redirect** component from react-router.
````javascript
// Redirect to 404 page is article does not exist
if (props.data && article === null) 
    return <Redirect to='/404' />
````
<br/>

### Styling components
Instead of using seperate .css files, I chose to use the **styled-components** package. The great thing with styled-components is that you can have the styling in the same file as the jsx (works best for smaller components). Styled-components also allows javascript inline with css, which can be used for more dynamic and complex styling. 

Props can also be passed, in almost the same way as a normal react component.

*Example from project:*

**1. Create styled component**
````javascript
const WarningText = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #EB7C74;
    display: ${props => props.show ? 'block' : 'none'};
`;
````

**2. Use in component jsx**
````javascript
<WarningText show={props.inputs['title'].warning}>
    Title is required
</WarningText>
````
<br/>

### Lazy loading, please wait...



### React Hooks!
I decided to use one of the new features recently (nov. 2019) introduced in React, called hooks. I did not create any custom hooks for the project due to limited time, but I used the some of the hooks provided with React.

**useState hook** allows previously 'stateless' components to have a state. Therefore a class is not required to create a component with a state. 
````javascript
// Current category
const [category, setCategory] = useState('Main');

// States that hold data
const [articleData, setArticleData] = useState([]);
const [categoryData, setCategoryData] = useState([]);
````

**useEffect hook** from React.js [documentation](https://reactjs.org/docs/hooks-effect.html): 
>  If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
````javascript
// Fetch data when component mounts
useEffect(() => {
  fetchData();
}, []);
````
<br/>

## Screenshots/gifs
### Main pages/features
NB! The lag when loading new pages is because of the screen capture software
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/frontPage.gif' width='75%' alt="Main page features gif"/>

### 404 page
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/404.PNG' width='75%' alt="404 page screenshot"/>

### Article publish
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/publish.PNG' width='75%' alt="Publish aricle page screenshot"/>

### Input validation
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/input.gif' width='75%' alt="Input validation gif"/>

### Edit article & delte confirmation
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/delete.gif' width='75%' alt="Edit article and delete validation gif" />