import { Link } from "react-router-dom"
import { Text } from "../components/Text"

export const Error404 = ({ }) => {
    return (
        <main className="flex flex-col items-center w-full h-screen p-8">
            <section className="flex flex-col items-center gap-8 m-auto">
                <div className="flex flex-col items-center gap-2 w-full">
                    <Text type="h1">404</Text>
                    <p className="text-lg text-center max-w-[500px]">Page not found</p>
                </div>
                <Link to="/" className="underline">Home</Link>
            </section>
        </main>
    )
}