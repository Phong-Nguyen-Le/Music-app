import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function DetailPage () {
  const params = useParams()
  console.log(params)
  // const [color, setColor] = useState()
  // useEffect(()=> {
  //   getDetail(params.id)
  // }, [id])
  return (
    <div>DetailPage</div>
  )
}
