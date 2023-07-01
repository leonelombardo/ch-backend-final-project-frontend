import { useEffect, useState } from "react";

export const AdminNotification = ({ path, message, setShowNotification }) => {
    const [text, setText] = useState("");
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(250);
    const [hide, setHide] = useState(false);

    const handleSetHide = () => {
        setHide(true)
        setShowNotification(false);
    };

    useEffect(() => {
        setTimeout(() => {
            if(counter % 3 == 0) setDelay(5);
            else setDelay(250);

            if(counter >= message.length) return;

            setText(previous => previous.concat(message[counter]));
            setCounter(previous => previous + 1);
        }, delay / 5);
    }, [text])

    return (
        message &&
            <div className={`${hide ? "hidden" : "flex"} flex-col max-w-[750px] w-[85%] max-h-[500px] h-full fixed bg-black border-[1px] border-gray-800 rounded-md`}>
                <div className="flex justify-end items-end bg-[#0a0a0a]">
                    <div className="flex justify-end max-w-[150px] w-full">
                        <button className="flex items-center justify-center text-white w-[40px] h-[40px] hover:bg-white hover:bg-opacity-10 cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <button className="flex items-center justify-center text-white w-[40px] h-[40px] hover:bg-white hover:bg-opacity-10 cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                        </button>
                        <button className="flex items-center justify-center text-white w-[40px] h-[40px] hover:bg-red-700" onClick={handleSetHide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
                <p className="flex flex-col gap-4 text-green-500 p-8 h-full overflow-y-scroll scrollbar-dark">
                    <span className="truncate">{ path } </span>
                    <span>{ text }</span>
                </p>
            </div>
    )
}