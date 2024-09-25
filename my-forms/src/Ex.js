import {useFormik} from 'formik'
import * as Yup from 'yup'

// console.log("ukweubkebk");

const validationSchema = Yup.object({
  name: Yup.string().min(8, '8 Characters are required').required('Name is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().min(7, 'Minimun 7 characters are required').required('Password is required')
})

const Ex = () => {

    const formik = useFormik({
        initialValues: {
          name:'',
          email:'',
          password:''
        },
    
        onSubmit:(values) => {
          console.log('form submit: ', values)
        },
        
        validationSchema
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

export default Ex;