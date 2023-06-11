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
        node.classList.add('project-active')
        previousCardRef.current = node
    }

    const handleCardProject = (event) => {
        const target = event.currentTarget 
        if(!previousCardRef.current) {
            toggleBorderPrevious(target)
        }else {
            previousCardRef.current.classList.remove('project-active')
            if(previousCardRef.current === target) {
                previousCardRef.current = null
            }else {
                toggleBorderPrevious(target)
            }
        }
        if(previousCardRef.current) {

        }
    }

    return projects.map((item, key) => (
        <CardProject 
            className="group hover:cursor-pointer my-3 last-of-type:mb-0 last-of-type:grayscale last-of-type:opacity-75 project-active:border-cyan" 
            key={key} 
            title={item.title} 
            subtitle={item.subtitle} 
            text={item.text} 
            price={item.price} 
            children={<CardPledge className="hidden group-[.project-active]:block" title="Enter your pledge" price={`$ ${item.price ?? 0}`} onClick={onClick} />}
            onClick={handleCardProject} 
        />
    ))
}

export { CardProjectModal }