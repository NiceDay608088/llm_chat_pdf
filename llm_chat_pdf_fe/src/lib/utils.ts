import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
 - Replace multiple consecutive spaces with a single space
    "Too    many   spaces" ==>   "Too many spaces"
 - Join hyphenated words together
    "co -worker"           ==>   "coworker"
 - Replace multiple consecutive new lines with a single space
    "Hello\n\nWorld"       ==>   "Hello World"
*/
export function formattedText(inputText: string) {
  return inputText
    .replace(/\n+/g, " ") // Replace multiple consecutive new lines with a single space
    .replace(/(\w) - (\w)/g, "$1$2") // Join hyphenated words together
    .replace(/\s+/g, " "); // Replace multiple consecutive spaces with a single space
}
