import { CarousalHero, NewArrivalSection, NewArrivalCard, BestSellerCard, BestSellerSection } from '@/components';
import { NewArrivalItem } from '@/constants/types';

const Page = () => {
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
  ];

  return (
    <div className='container'>
      <CarousalHero />
      <NewArrivalSection items={[<NewArrivalCard key="new-arrival-1" />]} />
      <BestSellerSection items={[<BestSellerCard key="best-seller-1" />]} />
    </div>
  );
}

export default Page;
