"use client";

import { PortableText } from "@portabletext/react";
import { useState } from "react";

import type { FaqItem } from "@/types/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="faq-item" key={item._id ?? item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span>{item.question}</span>
                <i aria-hidden="true">{expanded ? "−" : "+"}</i>
              </button>
            </h3>
            <div id={`faq-panel-${index}`} className="faq-panel" hidden={!expanded}>
              {typeof item.answer === "string" ? <p>{item.answer}</p> : <PortableText value={item.answer} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
