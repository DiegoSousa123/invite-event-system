import { ComponentProps } from "react";

interface ButtonsProps extends ComponentProps<"button"> {
    children: React.ReactNode;
}
export function Button(props: ButtonsProps){
    return (
        <button className="flex justify-between items-center px-5 h-12 w-full bg-gray-500 text-blue font-semibold rounded-xl
         cursor-pointer transition-colors duration-300 hover:text-gray-900 hover:bg-blue" {...props}>{props.children}</button>
    );
}