import { Button } from "./Button"

const CardProjectReward = ({ className, title, subtitle, text, price, button, onClick }) => {
    return (
        <article className={`my-3 py-2 px-2.5 text-start border-2 border-zinc-300 rounded-md last-of-type:mb-0 last-of-type:grayscale last-of-type:opacity-75 md:my-5 sm:py-3 md:py-4.5 ${className}`} onClick={onClick}>
            <div className="md:w-full md:flex md:items-center md:justify-between">
                <h3 className="text-md font-bold">{title}</h3>
                <h3 className="text-cyan text-sm">{subtitle}</h3>
            </div>
            <p className="mt-1.5 mb-2 text-gray text-sm md:mt-3 md:mb-3">{text}</p>
            <div className="md:w-full md:flex md:items-center md:justify-between">
                <span className="mb-1.5 flex items-center text-lg font-bold relative after:content-['left'] after:ml-0.5 after:text-sm after:text-gray">{price}</span>
                <Button text={button} color="cyan-200" size="md" />
            </div>
        </article>
    )
}

export { CardProjectReward }