import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from '../ui/button'


const types = [
  "Frontend Developer",
  "Backened Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Data Science"

]

const Category = () => {
  return (
    
    <div>
    <Carousel className="w-full max-w-3xl mx-auto my-20">
        <CarouselContent>
            {
                types.map((cat, index) => (
                    <CarouselItem className="md:basis-1/2 lg-basis-1/2 ">
                        <Button  className="rounded-full bg-blue-500 hover:bg-red-400 ">{cat}</Button>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</div>
  )
}

export default Category