// // // pages/shop/[slug].tsx
// // import { GetStaticPaths, GetStaticProps } from 'next';
// // import { useRouter } from 'next/router';

// // // Example product data (replace with actual data fetching logic)
// // const productData = [
// //   {
// //     id: '1',
// //     name: 'Product 1',
// //     description: 'This is a great product.',
// //     price: '$99.99',
// //     image: '/images/product1.jpg',
// //     slug: 'product-1',
// //   },
// //   {
// //     id: '2',
// //     name: 'Product 2',
// //     description: 'This is another amazing product.',
// //     price: '$129.99',
// //     image: '/images/product2.jpg',
// //     slug: 'product-2',
// //   },
// //   // Add more products as necessary
// // ];

// // const ProductDetail = ({ product }: any) => {
// //   if (!product) {
// //     return <div>Product not found.</div>;
// //   }

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
// //       <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
// //       <p className="text-xl font-semibold text-gray-700">{product.price}</p>
// //       <p className="text-lg mt-4">{product.description}</p>
// //     </div>
// //   );
// // };

// // // Fetching data for dynamic routes
// // export const getStaticPaths: GetStaticPaths = async () => {
// //   // Assuming you get product slugs from your data source
// //   const paths = productData.map((product) => ({
// //     params: { slug: product.slug },
// //   }));

// //   return {
// //     paths,
// //     fallback: false, // Show 404 if the page is not found
// //   };
// // };

// // // Fetching product data for each product
// // export const getStaticProps: GetStaticProps = async ({ params }) => {
// //   const { slug } = params as { slug: string };

// //   // Fetch product based on the slug
// //   const product = productData.find((prod) => prod.slug === slug);

// //   return {
// //     props: {
// //       product: product || null, // Return null if product is not found
// //     },
// //   };
// // };

// // export default ProductDetail;
// // src/app/shop/[slug]/page.tsx
// import { notFound } from 'next/navigation';

// // Example product data (replace this with a real API call or database fetch)
// const productData = [
//   {
//     id: '1',
//     name: 'Product 1',
//     description: 'This is a great product.',
//     price: '$99.99',
//     image: '/images/product1.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: '2',
//     name: 'Product 2',
//     description: 'This is another amazing product.',
//     price: '$129.99',
//     image: '/images/product2.jpg',
//     slug: 'product-2',
//   },
//   // Add more products as necessary
// ];

// const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;

//   // Simulate fetching data from an API or database
//   const product = productData.find((p) => p.slug === slug);

//   if (!product) {
//     notFound(); // Show 404 page if product is not found
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
//       <p className="text-xl font-semibold text-gray-700">{product.price}</p>
//       <p className="text-lg mt-4">{product.description}</p>
//     </div>
//   );
// };

// export default ProductDetailPage;
import ProductImages from "@/components/ProductImages"
export default function SinglePage(){
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:32 relative flex flex-col lg:flex-row gap-16" >
           {/* IMAGE */}
           <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages/>
           </div>
           {/* Text */}
           <div className="w-full lg:w-1/2 flex flex-col gap-6 ">TEXTS</div>
        </div>
    )
}