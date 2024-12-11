"use client"
import ShortenForm from "./ShortenForm"
import URLList from "./URLList"
import {useState} from "react"

const URLShortenerContainer = () => {
  const [refreshKey, setRefreshKey] = useState<number>(0)
  const handelUrlShortened = ()=>{
    setRefreshKey((prev)=> prev + 1)
  }
  return (
    <div>
      <ShortenForm handelUrlShortened={handelUrlShortened}/>
      <URLList key={refreshKey}/>
    </div>
  )
}

export default URLShortenerContainer