import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  title: string;
  content: string;
}

interface AccordionWithCardProps {
  faqs: FAQItem[];
}

const AccordionWithCard = ({ faqs }: AccordionWithCardProps) => {
  const [openItems, setOpenItems] = useState<string[]>(["item-0"]);

  return (
    <Accordion
      type="multiple"
      value={openItems}
      onValueChange={setOpenItems}
      className="w-full space-y-3"
    >
      {faqs.map((faq, index) => {
        const value = `item-${index}`;
        const isOpen = openItems.includes(value);

        return (
          <AccordionItem
            key={value}
            value={value}
            className="rounded-2xl bg-white dark:bg-[#080D32] backdrop-blur-xl border dark:border-[#1A2442] border-white"
          >
            <AccordionTrigger
              className={cn(
                "w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-md md:text-lg backdrop-blur-xl",
                "hover:no-underline",
                "[&>svg]:hidden" // This hides the default arrow
              )}
            >
              <span className="flex-1 text-left">{faq.title}</span>
              <span
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  "h-5 w-5 rounded-full flex items-center justify-center transition-transform duration-300 border-2 border-[#046BFF] text-[#046BFF]",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              >
                <ArrowDown/>
              </span>
            </AccordionTrigger>

            <AccordionContent className="text-sm px-6 pb-4 pt-0 text-[#AAB2C8] transition-all duration-300 ease-in-out">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionWithCard;