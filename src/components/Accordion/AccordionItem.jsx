import { createContext, useContext } from "react"

const AccordionItemContenxt = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContenxt);

    if (!ctx) {
        throw new Error('AccordionItem-related components must be wrapped by <Accordion.Item> ')
    }

    return ctx
}

export default function AccordionItem({id, className, children}) {

    return (
    <AccordionItemContenxt.Provider value={id}>
        <li className={className}>
            {children}
        </li>
    </AccordionItemContenxt.Provider>
    )
}