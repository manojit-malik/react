import prof from './prof.jpg'

const Header  = () => {

    return (
        <div style={{display:'flex'}}>
            <img src={prof} style = {{height:'50px', width:'50px'}}/>
            <h1> Hi I am Header</h1>
        </div>
    )
}

export default Header;