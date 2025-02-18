"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function FAQ() {
  const faqItems = [
    {
      value: "item-1",
      question: "What is BizBuddy?",
      answer:
        "We offer a full refund within 30 days of purchase if you're not completely satisfied with our product.",
    },
    {
      value: "item-2",
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes between 3-5 business days depending on your location.",
    },
    {
      value: "item-3",
      question: "Can I change my order?",
      answer:
        "Yes, orders can be modified within 24 hours of placement. Please contact our support team for assistance.",
    },
    {
      value: "item-4",
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping times and costs vary by location.",
    },
    {
      value: "item-5",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
    },
    {
      value: "item-6",
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data.",
    },
  ];

  return (
    <section className="w-full px-4 md:py-20 py-8  h-full ">
      <h2 className="text-center border-b border-gray-400 pb-2 max-w-7xl mx-auto text-2xl sm:text-3xl lg:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col justify-center items-center mt-10 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${item.value}-${index}`}
              value={item.value}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger className="py-4 px-2 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-2 pb-4">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
