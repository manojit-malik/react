import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'

function App() {

  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },

    onSubmit:(values) => {
      console.log('form submit: ', values)
    },

    validate:(values) => {
      let errors = {};

      if(!values.name){
        errors.name = "Name Requirerd";
      }
      
      if(!values.email){
        errors.email = "Email Requirerd";
      }

      if(!values.password){
        errors.password = "Password Required";
      }
      return errors;
    }
  })

  // console.log(formik.values)

  

  return (

      <div className="App">
        <form autoComplete='off' onSubmit={formik.handleSubmit}>

          <label>Name</label>
          <input type="text" name="name" id="name"
          value={formik.values.name} onChange={formik.handleChange}/>
          {formik.errors.name?<div>{formik.errors.name}</div>:null}

          <label>E-mail</label>
          <input type="email" name="email" id="email"
          value={formik.values.email} onChange={formik.handleChange}/>
          {formik.errors.email?<div>{formik.errors.email}</div>:null}

          <label>Password</label>
          <input type="password" name="password" id="password"
          value={formik.values.password} onChange={formik.handleChange}/>
          {formik.errors.password?<div>{formik.errors.password}</div>:null}

          <button type='submit' >Register</button>
        </form>
        
        <br/><br/><br/><br/><br/>
        
      </div>
    
  );
}

export default App;