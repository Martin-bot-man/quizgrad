import { Link } from "react-router-dom"; 

const navbars = [
        {id:1, path:'/how-it-works',name:"How it works "},
            
        {id :2, path:'/features', name:"Features"},
        { id :3, path:'/features',name:"About us"}
    ]


function Navbar (){

 return (
        <div>
            <div>
                <img src="/static/images/QuizGrad.png" alt="Logo" />
            </div>
            <div>
                {navbars.map((nav)=>(<Link key={nav.id} to={nav.path}>{nav.name}</Link>))}



                <button>LOGIN</button>
            
            </div>
        </div>
    )
}
export default Navbar;