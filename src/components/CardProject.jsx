import { Button } from "./Button"

const CardProject = ({ className, title, subtitle, text, price, button }) => {
    return (
        <article className={`py-2 px-2.5 text-start border border-zinc-300 rounded-md ${className}`}>
            <h3 className="text-md font-bold">{title}</h3>
            <h3 className="text-cyan text-sm">{subtitle}</h3>
            <p className="mt-1.5 mb-2 text-gray text-sm">{text}</p>
            <span className="mb-1.5 flex items-center text-lg font-bold relative after:content-['left'] after:ml-0.5 after:text-sm after:text-gray">{price}</span>
            <Button text={button} color="cyan" size="md" />
        </article>
    )
}

export { CardProject }