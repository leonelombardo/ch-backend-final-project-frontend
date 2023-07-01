export const ErrorMessage = ({ children }) => {
    return (
        children && 
            <p className="text-red-500 font-bold text-xs text-center">{ children }</p>
    )
}