import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { colors } from "../styles/ColorStyles"
import { MenuText } from "../styles/TextStyles"

export default function MenuButton(props) {
  const { state, item, open } = props

  const changeState = () => {
    props.changeState(item.title)
    //props.history.push(state)
  }

  //Handle Anchor Link
  if (item.title == "About") {
    return (
      <AnchorLink onClick={changeState} to={"/#about"}>
        <MenuItem open={open}>
          <MenuTitle>{item.title}</MenuTitle>
          <MenuLine title={item.title} state={state} />
        </MenuItem>
      </AnchorLink>
    )
  }

  return (
    <Link to={item.link}>
      <MenuItem open={open} onClick={changeState}>
        <MenuTitle>{item.title}</MenuTitle>
        <MenuLine title={item.title} state={state} />
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  display: grid
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  text-decoration: none;
  /* @media (max-width: 760px) {
    display: ${({ open }) => (open ? "grid" : "none")};
  } */
  `

const MenuTitle = styled(MenuText)`
  text-decoration: none;
  padding-bottom: 5px;
  transition: 0.5s linear;

  :hover {
    color: #f9a2a2;
  }
`

const MenuLine = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background: #e77b7b;
  opacity: ${props => (props.title == props.state ? "1" : "0")};
  transition: 0.3s ease-out;

  @media (max-width: 760px) {
    display: none;
  }
`
