import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
  
  function loadComponent() {
      import('./OtherComponent')
        .then(({ default: OtherComponent }) => {
          // Use the dynamically loaded component
        })
        .catch((err) => {
          console.error('Failed to load the component', err);
        });
    }