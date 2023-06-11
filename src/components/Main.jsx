import { useRef, useState } from "react"
import { Button } from "./Button"
import { Statistics } from "./Statistics"
import { CardProjectModal } from "./CardProjectModal"
import { statistics, cards, projects } from "../util/data"
import mark from "../assets/bookmark.svg"
import check from "../assets/check.svg"
import mastercraft from "../assets/mastercraft.svg"
import { CardProjectReward } from "./CardProjectReward"

const Main = () => {
    const dialogRef = useRef(null)
    const dialogBuyRef = useRef(null)
    const menuDialogRef = useRef(null)
    const [bookmarked, setBookmarked] = useState(false)

    const handleModalProject = () => {
        dialogRef.current.showModal();    
    }

    const handleToggleModal = () => {
        menuDialogRef.current.classList.toggle('modal-active')
        setTimeout(() => dialogRef.current.close(), 1000)
    }

    const handleConfirmBuy = () => {
        dialogRef.current.close()
        dialogBuyRef.current.showModal()
    }

    const handleBuyModal = () => {
        dialogBuyRef.current.close()
    }

    const handleBookmarked = () => {
        setBookmarked(!bookmarked)
    } 


    return (
        <main className="bg-slate-100">
            <section className="w-90 mx-auto -translate-y-5 md:max-w-5xl">
                <section className="text-center py-3 px-2 relative rounded-md bg-white sm:py-5 sm:px-3">
                    <img className="mx-auto absolute -top-3 inset-x-0" src={mastercraft} alt="matercraft icon" />
                    <h1 className="text-base font-bold">Mastercraft Bamboo Monitor Riser</h1>
                    <p className="my-2 text-gray text-sm md:mb-3">A beatiful handerafted monitor stand to reduce neck and eyes train</p>
                    <div className="flex items-center justify-center gap-x-1 sm:gap-x-3 md:w-3/4 md:mx-auto md:justify-between">
                        <Button text="Back this project" color="cyan" size="md" onClick={handleModalProject}  />
                        <div className="md:flex md:items-center md:gap-x-1" onClick={handleBookmarked}>
                            <img className="w-4 h-4" src={mark} alt="mark icon" />
                            <span className={`hidden md:block md:text-sm md:font-bold md:cursor-pointer md:select-none ${!bookmarked? 'md:text-gray': 'md:text-cyan-100'}`}>{!bookmarked? 'bookmark': 'bookmarked' }</span>
                        </div>
                    </div>
                </section>
                <section className="w-full my-3 py-3 px-2 grid gap-y-4 text-center rounded-md bg-white sm:grid-cols-2 md:grid-cols-3">
                    {statistics.map((item, key) => <Statistics className="sm:last-of-type:col-span-2 md:last-of-type:col-span-1" key={key} title={item.title} text={item.text} />)}
                    <span className="w-full h-1 flex items-center relative rounded-full bg-gray before:content-[''] before:w-3/4 before:h-full before:rounded-full before:bg-cyan-100 sm:col-span-2 md:col-span-3"></span>
                </section> 
                <section className="w-90 mx-auto py-4 rounded-md bg-white">
                    <article>
                        <h2 className="text-md font-bold sm:text-base">About this project</h2>
                        <div className="text-gray text-sm">
                            <p className="mt-2 mb-3">
                                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                            </p>
                            <p>
                                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                                to allow notepads, pens, and USB sticks to be stored under the stand.
                            </p>
                        </div>
                    </article>
                    {cards.map((item, key) => {
                        const { title, subtitle, text, price, button } = item
                        return <CardProjectReward key={key} title={title} subtitle={subtitle} text={text} price={price} button={button} />
                    })}
                </section>
            </section>
            <dialog className="w-90 max-w-5xl max-h-none mx-auto py-4 px-2 absolute top-[20%] rounded-md backdrop:bg-slate-700 backdrop:opacity-30 backdrop:select-none backdrop:shadow-sm" ref={dialogRef}>
                <div className="w-full flex items-center justify-between">
                    <h3 className="text-md font-bold">Back this project</h3>
                    <div className="w-3 h-2 flex items-center justify-center relative modal-active cursor-pointer" ref={menuDialogRef} onClick={handleToggleModal}>
                        <span className="w-3 h-[0.2rem] absolute transition-modal delay-modal duration-500 -translate-y-0.5 bg-black"></span>
                        <span className="w-3 h-[0.2rem] absolute transition-modal delay-modal duration-500 translate-y-0.5 bg-black"></span>
                    </div>
                </div>
                <p className="text-gray text-sm mt-2 mb-4">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <CardProjectModal projects={projects} onClick={handleConfirmBuy} />
            </dialog>
            <dialog className="w-90 max-w-3xl mx-auto pt-4 pb-5 px-2 text-center fixed z-50 top-1/2 -translate-y-[50%] rounded-md backdrop:bg-slate-700 backdrop:opacity-30 backdrop:select-none backdrop:shadow-sm" ref={dialogBuyRef}>
                <img className="mx-auto" src={check} alt="check icon" />
                <h4 className="my-2 text-md font-bold">Thanks for your support!</h4>
                <p className="text-gray text-sm">
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <Button className="mt-3" text="Got it!" color="cyan-100" size="md" onClick={handleBuyModal} />
            </dialog>
        </main>
    )
}

export { Main }