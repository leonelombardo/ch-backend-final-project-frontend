export const Button = ({ type="button", variant="default", disabled=false, children }) => {
    return (
        children && 
            <button type={type} className="py-2 px-4 bg-black rounded-lg font-bold text-white min-w-[200px] hover:bg-opacity-[85%] w-full disabled:bg-opacity-[20%] disabled:cursor-not-allowed" disabled={disabled}>{ children }</button>
    )
}