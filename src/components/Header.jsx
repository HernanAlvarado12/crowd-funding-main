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
            <nav className="w-full h-[35vh] bg-navMob bg-no-repeat">
                <figure className="w-90 h-8 mx-auto flex items-center justify-between">
                    <img src={logo} alt="logo icon" />
                    <img src={isOpen? close : menu} alt="menu icon" onClick={handleClickMenu} />
                </figure>
                <menu className="w-90 mx-auto hidden py-2 px-3 absolute top-8 inset-x-0 rounded-md shadow-2xl shadow-slate-400 bg-white" ref={menuRef}>
                    <ul className="flex items-start flex-col gap-y-4 text-md font-bold">
                        <li>About</li>
                        <li>Discover</li>
                        <li>Get Started</li>
                    </ul>
                </menu>
            </nav>
        </header>
    )
}

export { Header }