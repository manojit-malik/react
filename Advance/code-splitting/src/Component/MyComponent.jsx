import { useState, useEffect } from 'react';

const MyComponent = () => {
    const [importedComponent, setImportedComponent] = useState(null);
  
    useEffect(() => {
      const importComponent = async () => {
        const module = await import('./AnotherComponent');
        const AnotherComponent = module.default;
        setImportedComponent(<AnotherComponent />);
      };
  
      importComponent();
    }, []);
  
    return (
      <div>
        {importedComponent}
        <div>This is my functional component!</div>
      </div>
    );
  };
  
  ///Another Way is ...///
//   const MyComponent = async () => {
//     const module = import('./AnotherComponent');
//     const {AnotherComponent} = await module;
//     return <AnotherComponent />;
//   };
  
  export default MyComponent;
  
  // when u console the export module { default: ""} is contains the all the
  // key value pair of the functions name as the key and the value as the 
  // definition, with a default key if something is imported as default it
  // will be it's value else it will be undefined