import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.post('http://localhost:5000/count')
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
