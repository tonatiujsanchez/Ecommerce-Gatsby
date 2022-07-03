import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useCart from "../hooks/useCart"
const navItems = [
    {
        caption: 'Home',
        href: '/'
    },
    {
        caption: 'Products',
        href: '/products'
    }
]


function Header() {

    const { shoppingCard, showCart, setShowCart } = useCart()


    return (
        <nav className="flex flex-wrap items-center justify-between py-5 border-b mb-5">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="font-black text-orange-400 text-lg">Cups Shop</Link>
                <ul className="flex gap-4 items-center">
                    {
                        navItems.map(item => (
                            <li key={item.caption}>
                                <Link to={item.href} className='uppercase text-sm font-bold hover:underline'>
                                    {item.caption}
                                </Link>
                            </li>
                        ))
                    }
                    
                    <button className="grid place-items-center hover:bg-slate-300 p-2 rounded relative"
                        onClick={()=>setShowCart(!showCart)}>
                        <StaticImage className="w-6" src="../images/carrito-black.png" alt="Checkout" />
                        { shoppingCard.length > 0 &&
                            <span className="absolute grid place-content-center top-0 right-0 text-xs bg-amber-500 text-white w-4 h-4 rounded-full">
                                {shoppingCard.length}
                            </span>
                        }
                    </button>
                </ul>
            </div>
        </nav>
    )
}


export default Header
