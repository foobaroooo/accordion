import { useState } from 'react';
import data from '../data/data.json';
import AccordionItem from './AccordionItem';

interface AccordionData {
    title: string;
    content: string;
}

function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            {data.map((item: AccordionData, index: number) => (
                <AccordionItem key={index} title={item.title} children={item.content} />
            ))}
        </section>
    )
}

export default Accordion;