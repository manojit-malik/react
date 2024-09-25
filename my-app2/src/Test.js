const Test = (props) => {

    return (
        <div>
            <center>
                <input type="text" onChange={props.myFun}/>
            </center>
        </div>
    )
}

export default Test;