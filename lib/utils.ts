import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cleanGeneratedCode = (output: string) => {
  const codeMatch = output.match(
    /```(?:javascript|typescript)\n([\s\S]*?)\n```/
  );
  return codeMatch && codeMatch[1] ? codeMatch[1].trim() : output.trim();
};