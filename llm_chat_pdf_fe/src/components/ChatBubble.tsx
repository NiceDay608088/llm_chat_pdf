"use client";

import React, { ReactNode } from "react";
import Balancer from "react-wrap-balancer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ReactMarkdown, { Components } from "react-markdown";
import { formattedText } from "@/lib/utils";
import { HiRefresh } from "react-icons/hi";

interface ChatBubblePropType {
  role: string;
  content: string;
  sources: string[];
}

const renderCardHeader = (role: string) => {
  const isAssistant = role === "assistant";
  return (
    <CardHeader>
      <CardTitle
        className={`${
          isAssistant
            ? " text-blue-500  dark:text-blue-200 "
            : " text-amber-500 dark:text-amber-200 "
        }`}
      >
        {isAssistant ? "AI" : "You"}
      </CardTitle>
    </CardHeader>
  );
};

const renderCardContent = (content: string) => {
  return (
    <CardContent>
      <Balancer>
        {content.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </Balancer>
    </CardContent>
  );
};

interface RenderMarkdownType {
  href?: string;
  children?: ReactNode;
}

const renderMarkdown: Components = {
  link: ({ href, children }: RenderMarkdownType) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

const renderSources = (sources: string[]) => {
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <CardFooter>
      <div className="w-full text-gray-500 dark:text-gray-400">
        <Accordion type="single" collapsible>
          {sources.map((source, idx) => {
            return (
              <AccordionItem key={idx} value={`value-${idx}`}>
                <AccordionTrigger className=" hover:no-underline">{`Source-${idx}`}</AccordionTrigger>
                <AccordionContent>
                  <ReactMarkdown components={renderMarkdown}>
                    {formattedText(source)}
                  </ReactMarkdown>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </CardFooter>
  );
};

const ChatBubble = ({ role, content, sources }: ChatBubblePropType) => {
  return (
    <div className="mb-4">
      <Card className=" text-sm">
        {renderCardHeader(role)}
        {renderCardContent(content)}
        {renderSources(sources)}
      </Card>
    </div>
  );
};

export default ChatBubble;
