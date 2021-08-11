import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { colors } from "../components/styles/ColorStyles"

export default function Login() {
  const [state, setState] = useState("Login")
  return (
    <Layout>
      <Wrapper colors={colors}></Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  height: 1100px;
  width: 100%;
  background: ${({ colors }) => colors.lobster.dark};
`
