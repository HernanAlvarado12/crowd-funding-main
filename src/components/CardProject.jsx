import { useEffect, useState } from "react"
import { Button } from "./Button"

const CardProject = ({ className, title, subtitle, text, price, button, children, onClick = () => {}, onDoubleClick = () => {} }) => {
    return (
        <article className={`py-2 px-2.5 text-start border-2 border-zinc-300 rounded-md ${className}`} onClick={onClick} onDoubleClick={onDoubleClick}>
            <h3 className="text-md font-bold">{title}</h3>
            {subtitle && <h3 className="text-cyan text-sm">{subtitle}</h3>}
            <p className="mt-1.5 mb-2 text-gray text-sm">{text}</p>
            {price && <span className="mb-1.5 flex items-center text-lg font-bold relative after:content-['left'] after:ml-0.5 after:text-sm after:text-gray">{price}</span>}
            {button && <Button text={button} color="cyan" size="md" />}
            {children}
        </article>
    )
}

export { CardProject }