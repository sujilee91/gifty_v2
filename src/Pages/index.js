import { useEffect } from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Link from 'next/link'
import Head from 'next/head'
import logo from './logo.svg'
import { Horizontal } from '../Components/Menu'

const PageWrapper = styled.div`
  padding: 25px;
  height: 100%;
  background-color: red;
  min-height: 100vh;
`

const GET_USER = gql`
  query GetUsers {
    users {
      first_name
      last_name
    }
  }
`

const URL =
  'https://www.amazon.ca/LUTER-Disposable-Cooking-Utensils-Natural/dp/B09KXNVZ2Y/ref=sr_1_2_sspa?crid=1FMO00TGJZFAW&keywords=bamboo%2Btongs&qid=1650921945&s=kitchen&sprefix=bamboo%2Btongs%2Ckitchen%2C100&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMDc0Mk40RllHRE1XJmVuY3J5cHRlZElkPUEwOTYyMzk4MU8zTU1EMzkzUldNMyZlbmNyeXB0ZWRBZElkPUEwMjAzOTE5MloxOVpKS0lWNVBVViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1'

async function asyncCall() {
  class HTTPError extends Error {}

  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ foo: true }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new HTTPError(`Fetch error: ${response.statusText}`)
  }

  const json = await response.json()

  console.log(json)
  //=> `{data: '🦄'}`
}

export async function getStaticProps() {
  return { props: { isDark: true } }
}

export default function IndexPage(props) {
  return (
    <PageWrapper>
      <Link href="/about">About page</Link>
    </PageWrapper>
  )
}
