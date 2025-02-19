import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface IconButtonsProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}
export function IconButton({ className, ...props }: IconButtonsProps) {
  return (
    <button
      className={twMerge(
        "flex justify-between items-center p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:text-gray-900 hover:bg-blue",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
