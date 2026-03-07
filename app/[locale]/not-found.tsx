import Heading from '@/components/heading';

export default function NotFound() {
  return (
    <>
      <Heading>Error</Heading>
      <p className='my-6'>Oops something went wrong.</p>
      <p className='text-center text-7xl'>
        <span aria-label='Sorry' role='img'>
          😵
        </span>
      </p>
    </>
  );
}
