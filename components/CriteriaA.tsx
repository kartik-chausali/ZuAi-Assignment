
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Chart from "./Chart"
  
  export default function CriteriaA(){
    return <div className="w-fit">
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
        <div>
            <span>Criteria A:</span>
            <h1>Understanding Knowledge Questions</h1>
        </div>
    </AccordionTrigger>
    <AccordionContent className="text-gray-400">
     The essay identifies and focuses on the Knowledge question regarding the resolvability of dispute within discipline
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
}