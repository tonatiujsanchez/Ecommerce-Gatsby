/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/globals.css'


import * as React from "react"
import WrapRootElement from "./src/wrap-root-element"

export const wrapRootElement = ({ element }) => (
  <WrapRootElement>{element}</WrapRootElement>
)
