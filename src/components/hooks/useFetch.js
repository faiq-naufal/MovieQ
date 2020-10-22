import { useState, useEffect } from "react"
import axios from "axios"

export default (endPoint, defaultData) => {
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    let tryFetch = true

    const fetchInterval = setInterval(() => {
      if (tryFetch === false) {
        clearInterval(fetchInterval)
      }
      try {
        const getAPI = async () => {
          const response = await axios.get(endPoint)
          setData({
            isLoading: false,
            data: response,
          })
          tryFetch = false
        }
        getAPI()
      } catch (error) {
        tryFetch = true
        console.log(error, " Keep Trying...")
      }
    }, 1000)
  }, [endPoint])

  return data
}
