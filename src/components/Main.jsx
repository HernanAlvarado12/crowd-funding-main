import { Button } from "./Button"
import { Statistics } from "./Statistics"
import { CardProject } from "./CardProject"
import { statistics, cards } from "../util/data"
import mark from "../assets/bookmark.svg"

const Main = () => {
    return (
        <main className="bg-slate-100">
            <section className="w-90 mx-auto mb-6 -translate-y-5">
                <section className="text-center py-3 px-2 rounded-md bg-white">
                    <h1 className="text-base font-bold">Mastercraft Bamboo Monitor Riser</h1>
                    <p className="my-2 text-gray text-sm">A beatiful handerafted monitor stand to reduce neck and eyes train</p>
                    <div className="flex items-center justify-center gap-x-1">
                        <Button text="Back this project" color="cyan" size="md" />
                        <img className="w-4 h-4" src={mark} alt="mark icon" />
                    </div>
                </section>
                <section className="w-full my-3 py-3 px-2 grid gap-y-4 text-center rounded-md bg-white">
                    {statistics.map((item, key) => <Statistics title={item.title} text={item.text} />)}
                    <span className="w-full h-1 flex items-center relative rounded-full bg-gray before:content-[''] before:w-3/4 before:h-full before:rounded-full before:bg-cyan-100"></span>
                </section> 
                <section className="w-90 mx-auto py-4 rounded-md bg-white">
                    <article>
                        <h2 className="text-md font-bold">About this project</h2>
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
                        return <CardProject className="my-3 last-of-type:mb-0 last-of-type:grayscale last-of-type:opacity-75" key={key} title={title} subtitle={subtitle} text={text} price={price} button={button} />
                    })}
                </section>
            </section>
        </main>
    )
}

export { Main }