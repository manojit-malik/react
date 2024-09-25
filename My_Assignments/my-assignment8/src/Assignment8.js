// create a signup up page...with React formik and yup library for proper validation
// the signup page....

import {useFormik} from 'formik'
import * as Yup from 'yup'
import logo from './inst.jpg'


const Assignment8 = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        username: Yup.string().required("Username is required"),
        phone: Yup.string().required("Phone number is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmpassword: Yup.string().required("Confirm password is required")
    })

    const formik = useFormik({
        initialValues: {
            name:'',
            username:'',
            phone:'',
            email:'',
            password:'',
            confirmpassword:''
        },

        onSubmit:(values) => {
            console.log('form submit: ', values)
        },

        validationSchema
    })


    return(
        <div className='border w-25 mt-5 m-auto p-3'>
        
        

            <center>
            
            <form autoComplete='off' onSubmit={formik.handleSubmit}>

            <img src={logo}  alt="Instagram Logo" height="50" width="50" />
                
                <h4 >Signup Page</h4>

                <label>Name</label>
                <input type='text' name='name' id='name' className='form-control' 
                value={formik.values.name} onChange={formik.handleChange}/>
                {formik.errors.name?<div>{formik.errors.name}</div>:null}

                <label>Username</label>
                <input type='text' name='username' id='username' className='form-control' 
                value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username?<div>{formik.errors.username}</div>:null}

                <label>Phone</label>
                <input type='number' name='phone' id='phone' className='form-control' 
                value={formik.values.phone} onChange={formik.handleChange}/>
                {formik.errors.phone?<div>{formik.errors.phone}</div>:null}

                <label>Email</label>
                <input type='email' name='email' id='email' className='form-control' 
                value={formik.values.email} onChange={formik.handleChange}/>
                {formik.errors.email?<div>{formik.errors.email}</div>:null}

                <label>password</label>
                <input type='password' name='password' id='password' className='form-control' 
                value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password?<div>{formik.errors.password}</div>:null}

                <label>Confirm password</label>
                <input type='password' name='confirmpassword' id='confirmpassword' className='form-control' 
                value={formik.values.confirmpassword} onChange={formik.handleChange}/>
                {formik.errors.confirmpassword?<div>{formik.errors.confirmpassword}</div>:null}

                


                <label></label>


                <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>

            </center>

            
            
        </div>
    )


}

export default Assignment8;