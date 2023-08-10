/* eslint-disable @typescript-eslint/no-inferrable-types */
'use client';
import { useEffect, useState } from 'react';
import MousePosition from '../../components/MousePosition';
import { Container, Title } from './styles'
import { motion } from 'framer-motion';

export default function Main() {

  const [size, setSize] = useState<number>(20)

  const { x, y }: {x: number, y: number} = MousePosition()

  useEffect(() => {
    console.log("size", size)
    console.log("\n\n")
  }, [size])

  return (
    <Container>
      <motion.div
        className='body'
      >
        <p>Lorem Ipsum is <span>simply dummy text</span> of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
      </motion.div>

      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{type: "tween", ease: "backOut"}}
      >
        <p
          onMouseEnter={() => setSize(192)}
          onMouseLeave={() => setSize(20)}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        </p>
      </motion.div>
    </Container>
  )
}
