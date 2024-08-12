import React from 'react'
import { Button, Card, CardContent, CardHeader } from '@/components'
import Image from 'next/image'
import { HeartIcon } from 'lucide-react'
import { NewArrivalItem } from '@/constants/types'

const NewArrivalCard = () => {
    // TODO: Links To product Page after Routing Done
    const products: NewArrivalItem[] = [
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
        {
            image: '/Unimart.png',
            title: 'Turmaric powder Pack of 3',
            price: 1000.00
        },
    ]
    return (
        <section className='flex justify-between items-center gap-10'>
            {products.map((card, index) => (
                <Card key={index} className='w-[300px]'>
                    <CardHeader className='w-full h-[300px] md:h-[275px]'>
                        <div className="relative w-full h-full flex justify-center ">
                            <Image src={card.image} alt={card.title} width={400} height={200} />
                            <div className='cursor-pointer absolute top-4 right-4'>
                                <HeartIcon className="h-6 w-6 text-gray-200" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <div className="flex justify-between gap-10 items-center py-4">
                                <div>
                                    <p className="text-slate-900 text-lg">
                                        {card.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-900 font-semibold">
                                        Rs. {card.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button size={'xl'} variant={'outline'} className='hover:bg-primary/90 hover:text-white'>
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}

export default NewArrivalCard