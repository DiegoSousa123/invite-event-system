
interface InputProps extends React.ComponentProps<"div"> {
    error?: boolean;
}
export function InputRoot({error = false, ...props}: InputProps){
    return (
        <div data-error={error} className="group px-4 h-12 gap-2 bg-gray-800 border border-gray-600 flex items-center justify-center rounded-xl
       data-[error=true]:border-danger focus-within:border-gray-100" {...props}/>
    );
}
interface InputIconProps extends React.ComponentProps<"span"> {}
export function InputIcon(props: InputIconProps){
    return (
       <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100  group-data-[error=true]:text-danger" {...props}/>
    );
}

interface InputFieldProps extends React.ComponentProps<"input"> {}
export function InputField(props: InputFieldProps){
    return (
        <input className="flex-1 outline-0 placeholder-gray-400 group-[&:not(:has(input:placeholder-shown))]:text-gray-100" {...props}/>
    );
}