import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type InputChartItem = { name: string; value: number };
type AreaChartItem = { name: string; uv: number; pv: number; amt: number };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cleanGeneratedCode = (output: string) => {
  const codeMatch = output.match(
    /```(?:javascript|typescript)\n([\s\S]*?)\n```/
  );
  return codeMatch && codeMatch[1] ? codeMatch[1].trim() : output.trim();
};

export function convertToAreaChartData(input: InputChartItem[]): AreaChartItem[] {
  return input.map((item, index) => {
    const variation = (index % 2 === 0 ? 1.1 : 0.9);
    return {
      name: item.name,
      uv: Math.round(item.value * variation),
      pv: Math.round(item.value * (2 - variation)),
      amt: Math.round(item.value * 2.5),
    };
  });
}