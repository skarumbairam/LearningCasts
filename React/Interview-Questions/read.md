### 1. What is React components?

React Components are isolated peice of codes / UI called componets, which is combination of Javascript function and covered with markup (HTML tag).

```
const UIComponent = () => {

    return (
        <div className="container">
            <h3>React UI Component</h3>
             <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>
    )
}

```

### 2. What is JSX?

JSX (Javascript XML) is an extenstion of Javascript syntax used to creat in React to describe the structure of UI components

It Allows to write HTML - Like code with Javascript, make it easier to create and visualize the UI of React Components

JSX is not valid Javascript which needs to be transformed in to regular Javascript before executed in the browser, Tools like Bable compiles JSX into plain JS code that browser can understand.

```
import React from 'react';

// JSX code representing a simple React component
const App = () => {
  const name = 'World';
  return (
    <div className="app">
      <h1>Hello, {name}!</h1>
      <p>Welcome to my React App.</p>
    </div>
  );
};

export default App;

```

### 3. What is Props in React?

In React, Props (Properties) is a way of passing data to child component from a Parent component. Props are read-only, immutable, data can be any type like primitive data types Numbers, Boolean, String, JS objects, even functions.

Props are immutable, child component can't modify the props they recieve from parent.This helps unidirectional data flow in React applications.

### 4. What is State in React?

State is a Javascript object that represents internal data of a component. It allows to keep a track of and manage their own data, which can change over time in response to user interactios, API Call, other events.

Each component has it own state, which is managed independently of other components. State allows to components to maintain and update thier own data without relying on external sources.

State is mutable and can be changed using setState or useState Method /Hooks

Updating state is triggers re-render of the component and its Children, alloing reflect the updated state.

### 5. What is Children in React?

In React, Childrens refers to the content placed between the opening and closing tags of a component when it is used.
It represents the nested elements or components inside a parent component.

We can render the children directly with in the parents component's JSX placing {props.children}

```
import React from 'react';

const ParentComponent = (props) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <div>{props.children}</div>
    </div>
  );
};

const App = () => {
  return (
    <ParentComponent>
      <h2>Child Component 1</h2>
      <p>This is the content of Child Component 1.</p>
      <h2>Child Component 2</h2>
      <p>This is the content of Child Component 2.</p>
    </ParentComponent>
  );
};

export default App;

```

### 6. What is virtual DOM? Or How React is differ from other libraries Or How react is faster than others?

The Virtual DOM (VDOM) is a lightweight, in-memory representation of the actual DOM in a web browser. It is a key concept in React and is used to optimize the process of updating the user interface (UI) in response to changes in application state.

Here's how the Virtual DOM works in React:

**Virtual DOM Structure:**
The Virtual DOM is a tree-like structure that mirrors the structure of the actual DOM.
Each node in the Virtual DOM represents a corresponding element in the UI, including elements, text nodes, and attributes.

**Reconciliation:**
When changes occur in the application state, React constructs a new Virtual DOM representing the updated UI hierarchy.
React then compares the new Virtual DOM with the previous one to determine the differences (or "diffs") between them.

**Minimal Updates:**
React's diffing algorithm identifies the minimal set of changes needed to update the actual DOM to reflect the updated UI.
Instead of re-rendering the entire UI from scratch, React applies only the necessary changes to the actual DOM, resulting in faster and more efficient updates.

**Batched Updates:**
React batches multiple updates into a single update cycle to minimize unnecessary re-renders and DOM manipulations.
This batching process ensures that updates are performed in an optimized manner, reducing the overall computational cost and improving rendering performance.

**Rendering to the Actual DOM:**
Once the differences between the new and previous Virtual DOMs are determined, React applies the necessary changes to the actual DOM using efficient DOM manipulation techniques.
React's rendering process is optimized for performance, ensuring that updates are applied in a timely manner and without causing unnecessary layout thrashing or reflows.
