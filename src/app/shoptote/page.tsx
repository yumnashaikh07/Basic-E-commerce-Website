// pages/shop.tsx
import Link from 'next/link';

// Example product data (replace with your actual data fetching logic)
const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is a great product.',
    price: '$99.99',
    image: '/images/product1.jpg',
    slug: 'product-1',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is another amazing product.',
    price: '$129.99',
    image: '/images/product2.jpg',
    slug: 'product-2',
  },
  // Add more products as necessary
];

const ShopPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold text-gray-800">{product.price}</p>
            <Link href={`/shop/${product.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
