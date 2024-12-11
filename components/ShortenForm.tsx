"use client"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {useState} from "react"

interface ShortenFormProps{
  handelUrlShortened: ()=> void
}

const ShortenForm = ({handelUrlShortened}: ShortenFormProps) => {
  const [url, setUrl] = useState<String>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handelSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/shorten",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          url
        })
      })
      await response.json()
      setUrl("")
      handelUrlShortened()
    } catch (error) {
      console.error("error:",error)
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <form onSubmit={handelSubmit} className="mb-4">
      <div className="space-y-4">
        <Input value={`${url}`} onChange={(e)=>{setUrl(e.target.value)}} className="h-12" type="url" placeholder="Enter URL to shorten" required />
        <Button className="w-full p-2" type="submit" disabled={isLoading}>
          {isLoading ? "Shortening":"Shorten URL"}Shorten URL
          </Button>
      </div>
    </form>
  )
}

export default ShortenForm