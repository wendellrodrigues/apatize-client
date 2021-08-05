import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Menu(props) {
  const { open, state, setState } = props

  return (
    <StyledMenu open={open}>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton
            item={item}
            key={index}
            state={state}
            changeState={state => setState(state)}
            open={open}
          />
        ))}
      </MenuWrapper>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  display: grid;
  background: white;
  height: 100%;
  width: 40%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 760px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  gap: 10px;
  position: absolute;
  top: 7rem;
  left: 2rem;
  padding-right: ${({ open }) => (open ? "50px" : "0px")};
`
