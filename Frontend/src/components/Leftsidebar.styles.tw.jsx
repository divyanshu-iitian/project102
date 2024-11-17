import styled from "styled-components"
import { BiBell } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { FaShoppingCart } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Lfsb = styled.div.attrs({
    className:"border-r-2 border-gray-500 w-1/4 h-full"
})``;

export default function Leftsidebar(){
    return (
        <Lfsb>
            <div className="px-10 h-16 py-5">
                {/* Logo add kardena yaha jo bhi apni app ka logo ho */}
                <img src="https://th.bing.com/th/id/OIP.okS93mCT6YKkCCRxowkrFgHaHa?rs=1&pid=ImgDetMain" alt="" className="h-16 "/>
            </div>
            <div className="space-y-5 mt-10 px-10">
                {/* in buttons ke icons add karna hai yaha */}
                <div className="flex gap-2 justify-center items-center">
                    <IconContext.Provider value={{color:'white', size:'25px'}}>
                        <IoHomeOutline />
                    </IconContext.Provider>
                    <button className="text-white w-full text-xl text-left">Home</button>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <IconContext.Provider value={{color:'white', size:'25px'}}>
                        <MdEvent />
                    </IconContext.Provider>
                    <button className="text-white w-full text-xl text-left">Events</button>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <IconContext.Provider value={{color:'white', size:'25px'}}>
                        <FaShoppingCart/>
                    </IconContext.Provider>
                    <button className="text-white w-full text-xl text-left">Shop</button>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <IconContext.Provider value={{color:'white', size:'25px'}}>
                        <BiBell/>
                    </IconContext.Provider>
                    <button className="text-white w-full text-xl text-left">Notifications</button>
                </div>
                <div>
                    <button className="text-white w-full bg-blue-400 rounded-full p-2 font-semibold">Post</button>
                </div>
                <div>
                    <button className="text-white w-full bg-blue-400 rounded-full p-2 font-semibold">Sign up</button>
                </div>
                <div>
                    <button className="text-white w-full bg-blue-400 rounded-full p-2 font-semibold">Sign in</button>
                </div>
            </div>
            <div className="fixed bottom-0 flex justify-center items-center px-10 py-5 space-x-5">
                <img src="https://th.bing.com/th/id/OIP.CG70mC-flvJIYFRVmR9FZwHaHa?rs=1&pid=ImgDetMain" alt="" className="h-16" />
                <button className="text-white">Profile</button>
            </div>
        </Lfsb>
    )
}