import Navbar from "../components/NavBar";
import Button from "../components/Button";

function QuizStarted(){

    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div className="w-auto h-52 pl-4">
            <p className="bg-[rgba(252,200,34,1)]  ">An interface design application that runs in the browser with team based collaborative design projects</p>
        </div>
        <div>
            <Button name="FIGMA"></Button>   
        </div>
        <div>
            <Button></Button>
        </div>
        <div>
            <Button></Button>
        </div>
        <div>
            <Button></Button>
        </div>
        </>
    )
}
export default QuizStarted