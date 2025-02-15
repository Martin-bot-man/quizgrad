import { Link } from "react-router-dom"; 

const navbars = [
        {id:1, path:'/how-it-works',name:"How it works "},
            
        {id :2, path:'/features', name:"Features"},
        { id :3, path:'/features',name:"About us"}
    ]


function Navbar (){

 return (
        <div className="flex  justify-between px-10 py-3 items-center border border-b-gray-300">
            <div>
                <img src="/static/images/QuizGrad.png" alt="Logo" />
            </div>
            <div className="flex space-x-10 items-center">
                <div className="space-x-10">
                    {navbars.map((nav)=>(<Link key={nav.id} to={nav.path}>{nav.name}</Link>))}
                </div>

                <button className="border-2 rounded text-[#FFCD2E] font-semibold border-[#FFCD2E] px-4 py-1">LOGIN</button>
            
            </div>
        </div>
    )
}
export default Navbar;