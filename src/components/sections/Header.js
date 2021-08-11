import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../styles/ColorStyles"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuToolTips from "../tooltips/MenuToolTips.js"
import Menu from "./Menu"

export default function Header(props) {
  const { state, setState, open, setOpen } = props

  return (
    <Wrapper>
      <LogoImg src="/logos/sideways_logo.svg" />
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton
            item={item}
            key={index}
            state={state}
            changeState={state => setState(state)}
          />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 44px auto;
  background: #fae6e6;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;

  @media (max-width: 760px) {
    background: none;
  }
`

const ContentWrapper = styled.div``

const LogoImg = styled.img`
  padding-left: 50px;
  @media (max-width: 760px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
  padding-right: 50px;
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerButton = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    padding-right: 50px;
    cursor: pointer;
  }
  z-index: 5;
`
