# ================ REACT JS ================

## what is react js & What are the key features of React?

React is an open-source JavaScript library primarily used for building single-page applications (SPAs) and reusable user interface (UI) components. It was developed by Facebook and is maintained by Facebook and a community of developers.

**Key points to add:**

**Component-based Architecture:** React follows a declarative, component-based approach to building UIs, which promotes reusability and maintainability. Components are the building blocks of React applications, and they can be simple or complex, containing their own state, lifecycle methods, and logic.

**Virtual DOM:** One of React's most significant features is the Virtual DOM. It improves performance by rendering changes to a lightweight, in-memory representation of the DOM before making changes to the actual browser DOM. This minimizes costly DOM manipulation, making React faster and more efficient, especially for complex applications.

**JSX (JavaScript XML):** React uses JSX, a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript. It makes the code more readable and easier to write, though it's not mandatory. The JSX code is compiled into JavaScript before being executed in the browser.

**State and Props:** React components manage state (internal data) and receive props (external data). State is mutable and local to the component, while props are immutable and passed from parent components to child components.

**Unidirectional Data Flow:** React follows a one-way data flow pattern. Data is passed down from parent components to child components via props. This predictable data flow makes the app easier to understand and debug.

**React Hooks:** Introduced in React 16.8, Hooks allow you to use state and other React features without writing class-based components. Popular hooks include useState, useEffect, and useContext, making it easier to manage side effects and handle component logic.

**Ecosystem:** React has a rich ecosystem, including routing (React Router), state management (Redux, Context API), and more. It's often paired with libraries and tools like Webpack and Babel to handle bundling and transpiling.

**React Native:** React can also be used to build mobile applications through React Native, which allows developers to write mobile apps using the same React principles and JavaScript, but output native mobile components.

**Community Support:** React has a large and active community. It benefits from constant updates, tutorials, and third-party libraries that extend its functionality.

**Performance Optimization:** React offers performance optimization techniques such as React.memo, useMemo, and useCallback to help prevent unnecessary re-renders, especially in large-scale applications.

## What is JSX, and how does it differ from HTML?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to define the structure of the UI. It looks similar to HTML but can be written inside JavaScript code. JSX allows you to mix HTML-like code with JavaScript, making it easier to define UI elements and their behavior in a more readable and declarative way.

**Key Points:**

JSX is not HTML; it is a JavaScript syntax extension that is later transformed into JavaScript code by tools like Babel.

JSX expressions are wrapped in curly braces {} within the code, allowing dynamic content (e.g., variables, functions) to be embedded in the markup.

JSX must return a single root element, typically a div, section, or a custom React component.

JSX is optional, but it's widely used because it makes React code more readable.

## Explain the difference between functional and class components.?

A React component is a reusable building block of a React application. It is a function or class that returns UI elements (using JSX) based on the data it receives (via props) or its internal state. There are two types:

**Functional Components:** Simpler, defined as JavaScript functions, often using hooks like useState to manage state.

**Class Components:** Older style, defined as ES6 classes, with this.state and lifecycle methods for managing state and handling component lifecycle events.

Components help break down the UI into smaller, manageable parts and allow for reusability across the app. They can be stateless (just displaying UI) or stateful (holding and updating data).

## What are props in React? How are they different from state?

**Props:** Short for "properties," props are read-only inputs passed to a component from its parent. They allow data to flow from parent to child components. Props are immutable and passed from parent to child.

**State:** State is an internal data store within a component that can change over time. It allows components to manage dynamic data and re-render when the data changes. State is mutable and managed within the component itself.

## What is the significance of the key prop in React lists?

In React, the key prop is a special attribute that helps React efficiently update and re-render lists by uniquely identifying each list item.

Helps React’s Reconciliation Algorithm: React compares old and new Virtual DOM elements efficiently.

Optimizes Performance: Prevents unnecessary re-renders by identifying which items have changed, added, or removed.

## What are controlled and uncontrolled components?

Controlled components in React are the components whose state and behaviors are managed by React components using states while the uncontrolled components manage their own state and control their behaviors with the help of DOM.

**controlled**
In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

- When you need to coordinate two components, we can move their state to a common parent and pass information down through props 
- When you want to have complete control over form input values
- Controlled by the parent component.	
- The component is under control of the component’s state.
- Have better control on the form data and values

**uncontrolled**
Uncontrolled Components are the components that do not rely on the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

- Components are under the control of DOM.
- Are Uncontrolled because during the life cycle methods the data may loss
- We access the values using refs
- Controlled by the DOM itself not by parent or state.
- Has very limited control over form values and data

## What are react hooks? 

React Hooks are a set of built-in functions introduced in React 16.8 that allow you to use state, side effects, and other React features in functional components. Before hooks, these features were only available in class components. Hooks enable functional components to manage state, handle lifecycle events, and share logic without the need for class-based components.

**useState**

The useState hook allows you to add state to functional components. It returns a state variable and a function to update that state.

**useEffect**

The useEffect hook is used to perform side effects (like data fetching, subscriptions, or manually changing the DOM) in functional components.

It can replace componentDidMount, componentDidUpdate, and componentWillUnmount from class components.

You can return a cleanup function to remove event listeners or cancel network requests.

```
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Interval running');
  }, 1000);
  
  return () => clearInterval(timer);  // Cleanup the interval on component unmount
}, []);

```

**useContext**

The useContext hook allows you to subscribe to React context without needing to wrap components in a Consumer component. Avoiding props drilling and It makes it easier to consume values from a context.

```
const ThemeContext = React.createContext('light');

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
};

const App = () => (
  <ThemeContext.Provider value="dark">
    <ThemeComponent />
  </ThemeContext.Provider>
);

```

**useReducer**

The useReducer hook is used for managing more complex state logic that involves multiple sub-values or when the next state depends on the previous one.

It's similar to useState but is usually preferable for more complex state logic, like handling form state or complex objects.

```
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

```

**useRef**

The useRef hook is used to persist values across renders without triggering a re-render when the value changes. It’s commonly used to access DOM elements directly or store a mutable reference to an object.

It returns a mutable ref object that does not cause a re-render when changed.

```
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();  // Focus the input element
};

return (
  <div>
    <input ref={inputRef} />
    <button onClick={focusInput}>Focus Input</button>
  </div>
);

```

**useMemo**

The useMemo hook is used to memoize expensive calculations and prevent them from being recalculated on every render unless their dependencies change.

It returns a memoized value, recalculating it only when its dependencies change.

```
const expensiveCalculation = useMemo(() => {
  return someExpensiveFunction();
}, [dependencies]);  // Only recalculates when dependencies change


```

**useCallback**

The useCallback hook is used to memoize functions so that they are not recreated on every render. This is helpful when passing callbacks to child components that rely on referential equality to prevent unnecessary re-renders.

It returns a memoized version of the callback function.

```
const memoizedCallback = useCallback(() => {
  console.log('Callback triggered');
}, [dependencies]);
```

**useLayoutEffect**

The useLayoutEffect hook works similarly to useEffect, but it runs synchronously after all DOM mutations but before the browser paints.

It is typically used when you need to measure the DOM or make layout adjustments before the browser repaints.

```
useLayoutEffect(() => {
  // Code to measure or manipulate DOM
}, []);

```

**Cleaner Code**: Hooks provide a way to use React features without having to write class components, making the code simpler and easier to maintain.

**Reusability**: Custom hooks allow you to extract and share stateful logic between components.

**Less Boilerplate**: You don’t need to deal with lifecycle methods in the same way as in class components (e.g., componentDidMount or componentWillUnmount).

**Avoiding Class Syntax**: Hooks allow you to use functional components for stateful logic, leading to more readable and concise code.


## What is the React Fiber architecture?

React Fiber is the internal rendering engine that was introduced in React 16 to improve the performance and user experience by providing more control over the rendering process. It replaced the previous React reconciliation algorithm and brought several optimizations to how React schedules updates, especially in complex or performance-sensitive applications.

The key goal of React Fiber was to enable incremental rendering, meaning React can break up rendering work into units of work that can be processed in chunks, and even pause and resume them as needed. This improves the responsiveness and smoothness of React applications, especially when there are complex UI updates or animations.

Here’s a detailed breakdown of the React Fiber architecture and how it works:

### 1. Why Fiber?
Before React 16, React’s rendering process was synchronous. This meant that when a component's state or props changed, React would immediately re-render the entire component tree. This could result in performance issues, especially with large applications or complex updates, as the UI would often freeze while React did all the work in one go.

React Fiber was introduced to:

- Improve the user experience by making the rendering process non-blocking.
- Provide the ability to pause work and continue it later, allowing for better scheduling of UI updates.
- Allow React to prioritize updates based on the importance of the task (e.g., user input vs. background updates).

### 2. How Does React Fiber Work?
React Fiber introduces a new concept of a Fiber Node, which is the basic unit of work in the rendering process. Every component, element, or DOM node has a corresponding Fiber Node.

**Fiber Tree Structure**

In the React Fiber architecture, the component tree is represented as a Fiber Tree, which is a tree of Fiber nodes. Each node in this tree represents a React component or DOM element. When React is updating the UI, it walks through this tree to determine which components need to be re-rendered.

**Fiber Node:** Represents a single unit of work in the rendering process. It contains details about the component, its props, state, and other metadata necessary for the render.

**Fiber Tree:** A tree structure of Fiber nodes that holds the state of the components. React Fiber builds and updates this tree during rendering and reconciles it with the actual DOM.

**Phases of Fiber Rendering**

React Fiber splits the rendering process into multiple phases to achieve incremental rendering:

**Reconciliation Phase (Commit Phase):**

React will build a new Fiber Tree by comparing the old tree with the new one. This phase determines which components have changed and need to be updated, added, or removed.

**Render Phase:**

The render phase is where React creates a new Fiber Tree, including all the updated components. This phase can be interrupted and resumed if the updates are costly or if more important tasks (such as responding to user input) need to be prioritized.

**Commit Phase:**

In this phase, React commits the changes to the actual DOM. This phase is synchronous, and after the DOM is updated, any side effects (like event listeners) are executed.

### 3. Scheduling and Prioritization

One of the biggest improvements React Fiber brings is the ability to prioritize rendering tasks. React can now assign different priorities to different types of updates, allowing it to focus on more important tasks first, such as responding to user input or animations.

High-priority updates (e.g., responding to user input) can be processed first, while low-priority updates (e.g., background data fetching or rendering invisible components) can be deferred to avoid blocking the main thread.

React Fiber uses a scheduler to manage when and in what order updates should be processed. This scheduler allows React to break work into smaller chunks and even pause and resume the work as necessary, making the UI more responsive.

### 4. Concurrency and Interruptible Rendering

With Fiber, React can perform rendering work incrementally and can interrupt the work if more urgent updates (such as user interactions or animations) need to be processed.

Concurrent Mode (introduced later after Fiber): This is a more advanced feature that allows React to work on multiple tasks simultaneously, even pausing and resuming rendering to keep the app responsive. For example, when the user scrolls or types, React can pause rendering work on a background update and quickly process the user’s actions.

### 5. Key Features of Fiber Architecture

**Incremental Rendering:** Fiber allows React to break down rendering work into small, manageable chunks that can be scheduled and processed in between other tasks. This reduces the impact of large updates on the user experience.

**Prioritized Rendering:** React can prioritize different types of updates (e.g., user interactions, animations, data fetching) and perform the most urgent tasks first.

**Interruptible Work:** The rendering process can be paused and resumed, allowing React to keep the application responsive to user interactions, even when heavy computations or rendering are taking place in the background.

**Asynchronous Rendering:** By making rendering more flexible and interruptible, React Fiber enables asynchronous rendering, which is especially useful for apps with complex UIs or animations.

**Commit Phase:** The final phase where React applies changes to the actual DOM. While the render and reconciliation phases are done asynchronously, the commit phase is synchronous, ensuring updates to the DOM are applied in a consistent order.

### 6. Fiber and the Event Loop

Fiber works in conjunction with the browser’s event loop, which ensures that user interactions, animations, and other time-sensitive tasks are given priority. The event loop processes the most urgent tasks first and then schedules lower-priority tasks, helping maintain a smooth user experience.

### 7. Concurrent Mode and Suspense (Related Concepts)

While Fiber itself is a low-level implementation detail, it enabled the development of advanced features like Concurrent Mode and Suspense.

**Concurrent Mode:** This allows React to pause and resume rendering work, making it more responsive and enabling features like suspense for data fetching. It helps prioritize rendering work based on urgency, like handling user input before a background fetch.

**Suspense:** This feature allows React to "suspend" rendering while it waits for data to load (e.g., for lazy-loaded components or data fetching). This can be combined with useTransition to manage different levels of loading states.

**In Summary:**
- React Fiber is an internal architecture for React that enables incremental, interruptible rendering.
- It improves the user experience by making the rendering process asynchronous and non-blocking.
- React Fiber allows React to prioritize updates based on their importance, leading to smoother UIs.
- It supports features like Concurrent Mode and Suspense that further improve the rendering process.
- React Fiber is now the foundation of how React works, and many of the improvements to React’s performance and user experience, like Concurrent Mode, rely on it.
  

## How does React's reconciliation process work?

React's reconciliation process is the algorithm React uses to efficiently update the virtual DOM and synchronize it with the real DOM. Reconciliation ensures that React minimizes DOM manipulation by determining which parts of the user interface (UI) need to be updated when the component state or props change.

The core goal of reconciliation is to efficiently diff the previous state of the UI (virtual DOM) with the new state and apply the minimum necessary updates to the real DOM. React uses a virtual DOM to make this process faster, as the virtual DOM is just a lightweight in-memory representation of the actual DOM.

Here’s how the reconciliation process works, broken down step by step:

### 1. Rendering and the Virtual DOM
When a component's state or props change:

- React creates a new virtual DOM tree representing the updated UI.
- The virtual DOM is a JavaScript object that mimics the structure of the real DOM, but without the performance cost of manipulating the actual DOM directly.

After this, React compares the old virtual DOM (the previous render) with the new virtual DOM (the updated render) to find the differences, or diffs. This comparison is the heart of the reconciliation process.

### 2. The Diffing Algorithm
React uses an efficient diffing algorithm to minimize the number of changes made to the real DOM. The main principles of the diffing algorithm are:

**A. Same Component Type**

If the components in the old and new virtual DOM are of the same type (i.e., they are instances of the same React component), React assumes they are the same and tries to update only the necessary properties (such as state and props). This is where React compares the props and state of the two components and updates only the changed parts.

```<MyComponent name="John" />```

If the name prop changes from "John" to "Alice", React will only update the name prop without re-rendering the entire component.

**B. Different Component Types**

If the components in the old and new virtual DOM are of different types (for example, an old <div> element is replaced by a <span> element), React will tear down the old component and create a completely new one. This means React will discard the old DOM node and replace it with a new one.

**C. Keys in Lists (Reordering)**

When dealing with lists of elements, React uses the key prop to optimize the process of updating only the changed elements. The key is a unique identifier for each element in a list, and it helps React quickly determine which items have changed, been added, or removed.

React uses the key prop to efficiently reorder and reconcile list items without having to rerender the entire list.

```
const items = ['Apple', 'Banana', 'Cherry'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

```
Here, React uses the key to track each list item. If the order of items changes, React will only update the necessary list items rather than the entire list.

**D. Comparing Props and State**

When React determines that the component types are the same, it compares the props and state of the old and new elements. If the props or state have changed, React will re-render that part of the component, updating only what is necessary in the DOM.

For example, if a component's state changes (e.g., a button's label changes from "Click Me" to "Clicked"), React will only update the relevant DOM node (in this case, the text content of the button), not the entire component.

### 3. Fiber: The New Reconciliation Engine
React Fiber, which was introduced in React 16, is an upgrade to the previous reconciliation algorithm. Fiber allows for more fine-grained control over how and when updates are made, improving performance and enabling new features like Concurrent Mode and Suspense.

**Fiber and the Reconciliation Process:**

Fiber is the new architecture React uses to handle updates more efficiently:

- Incremental Rendering: Fiber allows React to split the work of rendering into smaller chunks, which can be spread over multiple frames. This allows React to be more responsive and prevent the UI from freezing during large updates.
- Prioritization: React can now prioritize certain updates. For example, updates triggered by user interactions can be prioritized over less important background updates (like data fetching).
- Interruptible Rendering: If React is in the middle of rendering a component but needs to process a higher-priority task (like a user interaction), it can pause the current work, complete the higher-priority task, and then resume the previous work later.

This incremental approach, combined with the ability to pause and resume rendering, helps React handle more complex updates in a smoother and more efficient way.


### 4. Commit Phase

Once React has completed the reconciliation process and determined the differences between the old and new virtual DOM trees, it enters the commit phase. In this phase, React applies the changes to the actual DOM and updates the UI.

- DOM Updates: React applies the minimum set of changes (additions, deletions, updates) to the real DOM.
- Side Effects: After the DOM has been updated, React runs any side effects, such as calling the componentDidUpdate lifecycle method or running a useEffect hook.

### 5. React's Reconciliation Process in Action

To summarize the steps in the reconciliation process:

- Render Phase: React generates a new virtual DOM tree based on the updated state/props.
- Diffing Algorithm: React compares the old virtual DOM and new virtual DOM. It identifies what has changed, what should stay the same, and what should be removed.
- Commit Phase: React updates the real DOM by applying the minimal necessary changes, making sure the UI reflects the new virtual DOM.

### 6. Performance Considerations and Optimizations

- PureComponent: React's PureComponent automatically implements the shouldComponentUpdate lifecycle method, performing a shallow comparison of the current and next props and state. If no changes are detected, the component won't re-render, improving performance.
- React.memo: A higher-order component (HOC) that optimizes functional components by memoizing them and preventing unnecessary re-renders when props haven't changed.

**In Summary:**

The reconciliation process in React is a key mechanism that ensures efficient rendering by:

- Diffing the old virtual DOM with the new one.
- Updating only the parts of the DOM that have changed.
- Prioritizing updates based on importance (via Fiber).
- Minimizing unnecessary DOM manipulations, leading to better performance and a more responsive UI.

This process is powered by React's virtual DOM and enhanced by the Fiber architecture, which enables incremental, prioritized, and interruptible rendering for smoother user experiences.


















