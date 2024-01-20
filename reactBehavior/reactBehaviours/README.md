# React Fundamentals

## StrictMode - [Details](https://react.dev/reference/react/StrictMode)

- Strict mode is a set of ```development tools``` that help you ```catch potential problems in your code before they become actual bugs```. When you enable strictmode in your React application, you're essentially telling React to turn on a bunch of extra checks and warnings that are designed to help you write better code. 
- Strict Mode calls some of your functions (only the ones that should be pure) twice in development. This includes:

    - Your component *function body* (only top-level logic, so this doesn’t include code inside event handlers)
    - *Functions that you pass* to useState, set functions, useMemo, or useReducer
    - Some *class component methods* like constructor, render,shouldComponentUpdate ([see the whole list](https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects))

