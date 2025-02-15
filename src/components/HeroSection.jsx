import { BiSolidDownArrow } from "react-icons/bi";


function HeroSection() {
    return (
        <div className="grid grid-cols-2 h-[90vh]">
            <div className="flex  flex-col justify-center items-center">
                <div className=" space-y-10">
                    <div className="flex flex-col">
                        <span className="text-6xl">Learn</span>
                        <span className="text-6xl">new conceptes</span>
                        <span className="text-6xl">for each question</span>
                    </div>
                    <div className="border-l-4 pl-3">
                        <span>We help you prepare for exams</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="bg-[#FFCD2E] text-white font-semibold py-1 px-2">Start solving</button>
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <BiSolidDownArrow color="#FFCD2E" />
                            <span className="text-[17px] ">Know More</span>
                        </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="/static/images/banner.png" alt="Banner"/>
            </div>

        </div>
    )
}


export default HeroSection;