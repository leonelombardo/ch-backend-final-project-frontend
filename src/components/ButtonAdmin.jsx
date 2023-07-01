export const ButtonAdmin = ({ type="button", onClick, children }) => {
    return (
        children &&
            <button type={type} onClick={onClick} className="group w-full flex items-center justify-center gap-2 font-bold py-1 px-2 rounded-md text-xl text-white hover:text-opacity-75">{ children }</button>
    )
}