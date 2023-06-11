import { useRef, useState } from "react"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close-menu.svg"

const Header = () => {
    const menuRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleClickMenu = () => {
        setIsOpen(!isOpen)
        menuRef.current.classList.toggle('hidden')
    }

    return (
        <header>
            <nav className="w-full h-[35vh] bg-navMob bg-no-repeat md:h-[40vh] md:flex md:items-start md:bg-navDes">
                <figure className="w-90 h-8 mx-auto flex items-center justify-between md:w-auto md:ml-[10%]">
                    <img src={logo} alt="logo icon" />
                    <img className="cursor-pointer md:hidden" src={isOpen? close : menu} alt="menu icon" onClick={handleClickMenu} />
                </figure>
                <menu className="w-90 mx-auto hidden py-2 px-3 absolute top-8 inset-x-0 z-10 rounded-md shadow-2xl shadow-slate-400 bg-white md:h-8 md:w-auto md:mr-[10%] md:p-0 md:block md:relative md:top-0 md:rounded-none md:shadow-none md:bg-transparent" ref={menuRef}>
                    <ul className="flex items-center flex-col gap-y-4 relative z-20 text-md font-bold bg-white md:w-full md:h-full md:flex-row md:gap-x-3 md:text-white md:text-sm md:bg-transparent">
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Discover</li>
                        <li className="cursor-pointer">Get Started</li>
                    </ul>
                </menu>
            </nav>
        </header>
    )
}

export { Header }