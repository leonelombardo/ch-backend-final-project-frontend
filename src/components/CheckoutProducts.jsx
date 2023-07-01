import { CheckoutProductCard } from "./CheckoutProductCard"

import { formatPrice } from "../utils/formatPrice"

export const CheckoutProducts = ({ cart, total }) => {
    return (
        <section className="flex flex-col items-center m-auto gap-8 max-w-[100%] sm:max-w-[65%] w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full sm:w-fit pb-10 border-b-2 border-black">
                {
                    cart &&
                        cart?.products?.length &&
                            cart.products.map(product => <CheckoutProductCard product={product} key={product._id || product.product.id}/>
                            )
                }
            </div>
            <p className="font-bold text-center">TOTAL {formatPrice(total)}</p>
        </section>
    )
}