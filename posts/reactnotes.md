---
title: "The React framework"
subtitle: "Setting up + making your first component"
date: 4-1-2024
---

# What is react?
- React is a JavaScript library that's used to easily build and arrange user interfaces for web applications by using components.  
- Think of a component like a LEGO piece that's a re-usable piece of code  
which makes applications easily scalable.
- React uses JSX, which allows you to write HTML-like code  
in your JavaScript files.
- Uses the Virtual DOM, which can apply only speficic changes without having  
to reload the entire webpage.
- To use React, you must be familiar with HTML, CSS, and JavaScript.

# How do I install React?
1. To use React, first we need to [==download Node.js==](https://nodejs.org/en/download), which is a backend  
JavaScript runtime environment, and executes JavaScript code outside of a web  
browser. We really just want the npm (node package manager)
2. Within our terminal in the folder we want to create our project in, type:  

```
npm create vite@latest
```

### hey what's vite?
- Vite is a powerful server environment used by developers to  
build, test, and improve their software before it's pushed into production.

3. Next, give your application a name. In this case, I'll be calling it:  

```
my-react-app
```

4. Next, select the framework you'd like to use. In our case, we'll be using React.
5. Next, select the variant you'd like to use. In our case, we'll be using JavaScript.
6. Next, run these 3 commands to start or restart the development server:  

```
cd my-react-app
npm install
npm run dev
```

Congratulations! If everything has worked properly, you should see a tab open with a boiler plate website  
ready for us to make components.

---

# Now, that I'm set up, how do I make my own component in React?
1. First, let's create a file in your src folder calling it `Header.jsx`
2. Make an empty function named "Header" like so including the export statement.  
this allows us to use this component in our application.

``` jsx
const Header = () => {
    return (
        //we'll be adding jsx here
    );
}
export default Header
```

3. Within our function, we can return a combination of HTML and JavaScript. in this  
example, we'll just be returning some HTML.

``` jsx
const Header = () => {
  return (
    &lt;header className="header">
      &lt;div className="container">
        &lt;div className="logo-wrapper">
          &lt;div className="logo">
            &lt;span>Final Project</span>
          &lt;/div>
          &lt;span>Home</span>
          &lt;span>Blogs</span>
          &lt;span>Contact</span>
        &lt;/div>
      &lt;/div>
    &lt;/header>
  );
};
export default Header
```

## ==Important: In React, `class` is a reserved keyword, so any .class styling must be done with the keyword `className`.==

4. In our app component, first import the component you would like to use and create an empty app component: 

``` jsx
import Header from './Header.jsx'
const App = () => {
    return (
        //header component goes here
    );
}
```

5. Finally, all we need to do is add the component by either giving it open and closing tag, or
giving it a self closing tag if you don't want to nest anything inside of it.

``` jsx
//syntax option 1
<Header></Header>
//syntax option 2
<Header />
```

There you go! You've successfully made your first re-usable React component.




