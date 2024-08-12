import { CarousalHero, NewArrivalSection, NewArrivalCard, BestSellerCard, BestSellerSection } from '@/components';
import react from 'react';

const Page = () => {
  return (
    <div className='container'>
      <CarousalHero />
      <NewArrivalSection items={[<NewArrivalCard />]} />
      <BestSellerSection items={[<BestSellerCard />]} />
    </div>
  )
}

export default Page;