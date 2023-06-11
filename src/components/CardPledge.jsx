import { Button } from "./Button"

const CardPledge = ({ className, title, price, onClick = () => {} }) => {
    return (
        <section className={className}>
            <p className="mb-1 text-gray text-sm font-normal text-center">{title}</p>
            <div className="w-full flex items-center justify-center gap-x-2">
                <span className="text-md font-bold">{price}</span>
                <Button text="continue" color="cyan" size="md" onClick={onClick} />
            </div>
        </section>
    )
}

export { CardPledge }