import React,{useState} from 'react'

const Ex2 = () => {
    const [data, setData]= useState({
        username: '',
        password: ''
    });


    const {username,password} = data;

    const handler = (e) => {
        // console.log(e)
        setData({...data, [e.target.name]:[e.target.value]});
    }

    const myFun = e => {
        e.preventDefault()  //if any action is pending this function will cancel that
        console.log(data);
        alert(username);
    }

    return (

        <div className='border w-25 mt-5 m-auto p-3'>

            <center>

                <form onSubmit={myFun}>

                <div className='mt-3'>
                    <label>username</label>
                <input type='text' className='form-control' placeholder='username' value={username} name="username" onChange={handler}/>
                </div>
                
                <div className='mt-3'>
                <label>password</label>
                <input type='password' className='form-control' placeholder='password' value={password} name='password' onChange={handler}/>
                </div>
                
                <div className='mt-3'>
                <input type='submit' name='submit' className='btn btn-primary w-100'/>
                </div>
                
                {username}
                {password}
                {/* {console.log(user)} */}
                
                </form>

                

                
            </center>

        </div>
        
    )

}

export default Ex2;