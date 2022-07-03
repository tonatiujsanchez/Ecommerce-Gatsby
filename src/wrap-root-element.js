import * as React from "react"
import { CartProvider } from "./context/CartProvider"


const WrapRootElement = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

export default WrapRootElement