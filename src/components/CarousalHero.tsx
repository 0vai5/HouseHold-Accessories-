'use client'

import React, { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from '@/components';
import Image from "next/image"

const CarouselHero = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="mb-10"
        >
            <CarouselContent>
                <CarouselItem className="flex justify-center items-center"><Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY0T8JJ6vmg6edFQQo-EBkeBZoTqiDkTK4bO6yxXXNQ&s'} alt="Banner 1" width={800} height={200} /></CarouselItem>
                <CarouselItem className="flex justify-center items-center"><Image src={'https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mo8dpf7nHP2BEPDurTRAqfX3xd8pHVePTzh0fsRL.jpg'} alt="Banner 1" width={800} height={200} /></CarouselItem>
                <CarouselItem className="flex justify-center items-center"><Image src={'https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/AwQecmLjoN2Gu9PReNC7CAGh21pUSsfg3BBKyjBF.png'} alt="Banner 1" width={800} height={200} /></CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}

export default CarouselHero;