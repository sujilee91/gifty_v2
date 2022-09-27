import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const MenuWrapper = styled.div`
  position: sticky;
  top: 0%;
  padding: 5px 25px;
  background-color: white;
`

const Wrapper = styled.div`
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img``

const MenuList = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  min-width: 250px;
`

export const Horizontal = () => {
  return (
    <MenuWrapper>
      <Wrapper>
        <Logo />
        <MenuList>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/login">
            <a>Blog Post</a>
          </Link>
        </MenuList>
      </Wrapper>
    </MenuWrapper>
  )
}
