import { Link } from "react-router-dom"

export const AdminError404 = () => {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center gap-8 p-8 bg-black font-[courier]">
            <section className="flex items-center gap-4">
                <div>
                    <p className="text-6xl font-bold text-white">0100</p>
                    <p className="text-6xl font-bold text-white">0000</p>
                    <p className="text-6xl font-bold text-white">0100</p>
                </div>
                <div>
                    <p className="text-6xl font-bold text-white">found</p>
                    <p className="text-6xl font-bold text-white">page</p>
                    <p className="text-6xl font-bold text-white">not</p>
                </div>
            </section>
            <div className="flex flex-col items-start gap-2">
                <Link to="/" className="text-xl font-bold text-white text-opacity-50 hover:text-opacity-100">../../../</Link>
                <Link to="/admin" className="text-xl font-bold text-white text-opacity-50 hover:text-opacity-100">../../../admin</Link>
            </div>
        </div>
    )
}