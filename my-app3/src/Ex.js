import React,{useState} from 'react'

const Ex = () => {
    const [user, setUser]= useState("");

    const handler = (e) => {
        // console.log(e)
        setUser(e.target.value)
    }

    return (

        <div>

            <center>

                <input type='text' placeholder='username' value={user} name='"user' onChange={handler}/>
                <br/>
                {user}
                {/* {console.log(user)} */}
                
                <br/><br/><br/><br/>
            </center>

        </div>
        
    )

}

export default Ex;