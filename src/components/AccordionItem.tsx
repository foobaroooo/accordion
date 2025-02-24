import { ReactNode, useState } from 'react';

interface AccordionItemProps {
    title: string,
    children: ReactNode
}

const AccordionItem = ({ title, children } : AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <article className="accordion-header">
            <h2 onClick={toggleAccordion} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {title} <span className="toggleIcon">{isOpen ? '-' : '+'}</span></h2>
            <div className='accordion-content'>{isOpen && children}</div>
        </article>
    )
}

export default AccordionItem