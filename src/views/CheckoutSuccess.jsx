import { Link } from "react-router-dom"
import { Text } from "../components/Text"
import { Button } from "../components/Button"

export const CheckoutSuccess = ({ }) => {
    return (
        <main className="flex flex-col items-center w-full h-screen p-8">
            <section className="flex flex-col items-center gap-8 m-auto max-w-[500px]">
                <div className="flex flex-col items-center gap-8 w-full">
                    <Text type="h1">Thanks for your purchase</Text>
                    <p className="text-lg text-center max-w-[500px]">Hope you had a great experience and everything went the best way that it could be. For any inquiry or report any problems can contact us at contact@epirts.com.</p>
                </div>
                <Link to="/" className="w-full">
                    <Button>Finish other purchase</Button>
                </Link>
            </section>
        </main>
    )
}