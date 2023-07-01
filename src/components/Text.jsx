export const Text = ({ type="normal", children }) => {
    return (
        children &&
            <>
                {
                    type === "h1" &&
                        <h1 className="text-black text-7xl font-bold flex items-end text-center">{ children }</h1>
                }
                {
                    type === "h2" &&
                        <h2 className="text-black text-5xl font-bold text-center flex items-end">{ children }</h2>
                }
                {
                    type === "h3" &&
                        <h2 className="text-black text-3xl font-bold text-center flex items-end">{ children }</h2>
                }
                {
                    type === "h4" &&
                        <h2 className="text-black text-2xl font-bold text-center flex items-end">{ children }</h2>
                }
                {
                    type === "h5" &&
                        <h2 className="text-black text-xl text-center flex items-end">{ children }</h2>
                }
                {
                    type === "normal" &&
                        <label className="text-black text-lg text-center flex items-end">{ children }</label> 
                }
                {
                    type === "label" &&
                        <label className="text-black text-md text-center flex items-end">{ children }</label> 
                }
                {
                    type === "small" &&
                        <p className="text-xs text-center text-gray-400 flex items-end leading-none">{ children }</p>
                }
            </>
    )
}