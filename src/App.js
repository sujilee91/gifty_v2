import { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import { gql, useQuery } from '@apollo/client'
import { authListener, loginWithGoogle } from './FirebaseFunctions/auth'

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

function App() {
  useEffect(() => {
    authListener()
  }, [])

  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log(data)

  asyncCall().then(() => {
    console.log('hurray!')
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
