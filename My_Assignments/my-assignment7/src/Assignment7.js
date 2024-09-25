// Using Formik, we can create scalable forms faster and easy way.
// create login form using React Formik and display proper validations using formik...

import {useFormik} from 'formik'

const Assignment7 = () => {

    const formik = useFormik ({
        initialValues:{
            email:'',
            password:''
        },

        onSubmit:(values) => {
            console.log("login credentials: ", values);
        },

        validate: (values) => {
            let errors = {};

            if(!values.email){
                errors.email = "Enter email";
            }

            if(!values.password){
                errors.password = "Enter Password";
            }
        return errors;
        }
    })


    return (

        <div className='border w-25 mt-5 m-auto p-3'>

            <form autoComplete='off' onSubmit={formik.handleSubmit}>

            <h4>Login</h4>


                <div className='mt-3'>
                <label>email</label>
                <input type='email' name='email' id='email' className='form-control'
                value={formik.values.email} onChange={formik.handleChange}/>
                {formik.errors.email?<div>{formik.errors.email}</div>:null}
                </div>

                <div className='mt-3'>
                <label>password</label>
                <input type='password' name='password' id='password' className='form-control'
                value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password?<div>{formik.errors.password}</div>:null}
                </div>

                <div className='mt-3'>
                <button type='submit' className='btn btn-primary w-100' >Login</button>
                </div>

            </form>

        </div>

    );
}

export default Assignment7;