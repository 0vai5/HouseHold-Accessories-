import { CarousalHero, NewArrivalSection, CarousalCard, BestSellerSection } from '@/components';
import { product } from '@/constants/types';

const Home = () => {
  const products: product[] = [
    {
      id: '1',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
    {
      id: '2',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
    {
      id: '3',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
    {
      id: '4',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
    {
      id: '5',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
    {
      id: '6',
      image: '/Unimart.png',
      title: 'Turmaric-powder-Pack-of-3',
      price: 1000.00,
      category: 'Spices'
    },
  ];

  return (
    <div className='container'>
      <CarousalHero />
      <NewArrivalSection items={[<CarousalCard key="new-arrival-1" products={products} />]} />
      <BestSellerSection items={[<CarousalCard key="new-arrival-1" products={products} />]} />
    </div>
  );
}

export default Home;
