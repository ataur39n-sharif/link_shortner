import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.post('https://short-url.ataur.dev/count')
      .then(res => {
        console.log(res.data.response);
        setCount(res.data.response)
      })
      .catch(err => console.error(err.message))
  }, [])
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Component count={count} {...pageProps} />
    </div>
  )
}

export default MyApp
