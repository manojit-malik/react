// create online registration form and give appropriate validations...
// username
// email
// password
// confirm world
 

import React,{useState} from 'react';

const Assignment4 = () => {

    const [data, setData] = useState ({
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            

        });

    const {username,email,password,confirmpassword} = data;

    const handler = e => {
        setData({...data, [e.target.name]:[e.target.value]});
    }

    const myFun = e => {
        e.preventDefault();
        alert("Registration Successful!")
    }

    return (
        <div className='border w-25 mt-5 m-auto p-3'>

            <center>

                <form onSubmit={myFun}>

                    <h6>Registration Form</h6>

                    <div className='mt-3'>
                        <label>username</label>
                        <input type='text' className='form-control' value={username} name='username' placeholder='username' onChange={handler}/>
                    </div>

                    <div className='mt-3'>
                        <label>email</label>
                        <input type='email' className='form-control' value={email} name='email' placeholder='email' onChange={handler}/>
                    </div>

                    <div className='mt-3'>
                        <label>password</label>
                        <input type='password' className='form-control' value={password} name='password' placeholder='password' onChange={handler} />
                    </div>

                    <div className='mt-3'>
                        <label>confirm password</label>
                        <input type='password' className='form-control' value={confirmpassword} name='confirmpassword' placeholder='confirmpassword' onChange={handler} />
                    </div>

                    <div className='mt-3'>
                        <input type='submit' name='submit' className='btn btn-primary w-100' />
                    </div>

                    {username}
                    {password}
                    {confirmpassword}
                    {confirmpassword}

                </form>

            </center>
            
            <br/><br/><br/><br/>
        </div>
    )


}

export default Assignment4;