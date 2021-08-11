/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from "react"
import "./layout.css"
import styled from "styled-components"
import Header from "./sections/Header.js"
import Menu from "./sections/Menu"
import Hamburger from "./buttons/Hamburger"
import { useOnClickOutside } from "../helpers/hooks"

function Layout({ children }) {
  //The useState is refreshing on every page load

  //Get Page State
  const pageWindow = window.location.pathname
  let page = "Login"

  if (pageWindow == "/login") {
    page = "Login"
  } else if (pageWindow == "/register") {
    page = "Register"
  } else if (pageWindow == "/") {
    page = "About"
  }

  const [state, setState] = useState(page)

  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <div ref={node}>
        <Hamburger open={open} setOpen={open => setOpen(open)} />
        <Header
          open={open}
          state={state}
          setState={state => setState(state)}
          setOpen={open => setOpen(open)}
        />
        <Menu open={open} state={state} setState={state => setState(state)} />
      </div>

      <main>{children}</main>
    </>
  )
}

export default Layout
