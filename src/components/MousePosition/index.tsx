import { useEffect, useState } from 'react'

function MousePosition() {

  const [position, setPosition] = useState<{x: number, y:number}>({x: 0, y: 0})

  const handleMouse = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse)

    return(() =>  {
      window.removeEventListener("mousemove", handleMouse)
    })
  }, [])

  return position
}

export default MousePosition
