import { formatPrice } from "../utils/formatPrice"

export const CheckoutProductCard = ({ product }) => {
    return (
        <article className="flex items gap-4 bg-gray-50 p-4 rounded-lg w-full">
            <img src={product.product.thumbnails[0]} alt={product.product.title} className="w-[50px] h-[50px] object-center object-cover rounded-lg bg-white p-2"/>
            <section>
                <p className="text-md font-bold">{product.product.title}</p>
                <p className="text-xs">{product.quantity} x <span className="text-green-500 font-bold">{formatPrice(product.product.price)}</span></p>
            </section>
        </article>
    )
}