import { useRef } from "react"
import { CardProject } from "./CardProject"
import { CardPledge } from "./CardPledge"

/**
 * 
 * @param {{ projects: Array }} props
 */
const CardProjectModal = ({ projects, onClick }) => {
    const previousCardRef = useRef(null)

    const toggleBorderPrevious = (node) => {
        node.lastElementChild.classList.toggle('hidden')
        node.classList.replace('border-zinc-300','border-cyan')
        previousCardRef.current = node
    }

    const handleCardProject = (event) => {
        const target = event.currentTarget 
        if(!previousCardRef.current) {
            toggleBorderPrevious(target)
        }else {
            previousCardRef.current.lastElementChild.classList.toggle('hidden')
            previousCardRef.current.classList.replace('border-cyan', 'border-zinc-300')
            if(previousCardRef.current === target) {
                previousCardRef.current = null
            }else {
                toggleBorderPrevious(target)
            }
        }
    }

    return projects.map((item, key) => (
        <CardProject 
            className="my-3 cursor-pointer last-of-type:mb-0 last-of-type:grayscale last-of-type:opacity-75" 
            key={key} 
            title={item.title} 
            subtitle={item.subtitle} 
            text={item.text} 
            price={item.price} 
            children={<CardPledge className="hidden" title="Enter your pledge" price={`$ ${item.price ?? 0}`} onClick={onClick} />}
            onClick={handleCardProject} 
        />
    ))
}

export { CardProjectModal }