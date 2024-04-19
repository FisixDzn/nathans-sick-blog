---
title: "Focus events"
subtitle: "Create events that occur when a textbox is focused on."
date: "2-16-2024"
---

These elements allow you to get elements in and out of focus on a page:
1. **focus**
2. **blur**
3. **focusin**
4. **focusout**

Research Articles:
1. https://www.w3schools.com/jsref/event_onfocus.asp
2. https://www.w3schools.com/jsref/event_onfocusin.asp
3. https://www.w3schools.com/jsref/event_onfocusout.asp

Starter Code:

``` html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Focus Events</title>
        <style>
        </style>
        <script type="text/javascript">
            window.addEventListener("load", () => {
                //we'll be adding code here soon
            });
        </script>
    </head>
    <body>
        <form action="">
            <input type="text" placeholder="username"> &lt;br/>
            <input type="password" placeholder="password">
        </form>
    </body>
    </html>
```

In this example, we have a simple username and password form. The focus and blur elements' job is to
run an event when a form like this is being selected (in focus) or unselected (out of focus.)

First, we need to get a handle of the forms like this:

``` js
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
```

Then, we need to listen for when the object is in focus or not, and in this case simply console log the object.

``` js
usernameInput.addEventListener('focus', (evt)=>{
    console.log(evt);
});
usernameInput.addEventListener("blur", (evt)=>{
    console.log(evt);
});
```