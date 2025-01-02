import React from "react";
import ProductCard from "@/components/productcard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    title: "Eco",
    price: "$17",
    image: "/tote01.jpeg",
  },
  {
    title: "Lemonade",
    price: "$24",
    image: "/tote44.jpg",
  },
  {
    title: "Slay",
    price: "$28",
    image: "/tote55.jpg",
  },
  {
    title: "Joy",
    price: "$17",
    image: "/tote2.jpg",
  },
];

export default function Homepg() {
  return (
    <main>
      <section className=" bg-[#bfa179] mx-auto grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <Image
            // src={"/image.png"}
            src={"/RAYS (12).png"}
            width={535}
            height={400}
            alt="Logo"
          />
        </div>
        <div className=" md:p-16 p-10 header-bg ">
          <h1 className="text-3xl md:text-5xl  md:font-semibold md:mt-3 ">
            Wrap Your Loved Ones in Tote-ally Great Gifts!
          </h1>
          <div className="md:flex flex-col hidden">
            <p className=" md:text-xl text-lg mt-5 ">
            Elevate your gifting with
            <span className="font-semibold"> RAY’S</span> trendy totes!
          </p>
          <p className=" md:text-xl text-lg ">
            {" "}
            Perfect for every personality, these tote-ally{" "}
          </p>
          <p className="md:text-xl text-lg mb-5 ">
            amazing gifts are sure to impress.
          </p>
          </div>
          <div className="md:hidden my-5">
            <p>Elevate your gifting with <span className="font-semibold"> RAY’S</span> trendy totes!
            Perfect for every personality, these tote-ally amazing gifts are sure to impress.</p>
          </div>


          <Link href={"/shoptote"}><Button className="bg-[#bfa179] hover:bg-[#fff] text-black md:px-9 md:py-6 px-5 py-5 font-base md:mt-5 text-lg md:text-xl">
            Shop Now
          </Button></Link>
        </div>
      </section>
      <section className="grid  sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        <Image src={"/tote22.jpg"} alt="" width={400} height={300} />
        <Image src={"/tote2.jpg"} alt="" width={425} height={500} />
        <Image src={"/tote2back.jpg"} alt="" width={425} height={500} />
      </section>
      <div className="md:border-t-[1px] border-[#c2c0c0]   w-[1250px] mb-16"></div>
      <section className="grid  sm:grid-cols-1 md:grid-cols-2  ">
        <div>
          <Image
            //  src={"/printify 1 (totebag).jpeg"}
            src={"/tote555.jpg"}
            alt=""
            width={600}
            height={500}
          />
          <h1 className="text-2xl font-semibold hero-font ml-36  md:ml-64">
            BACK
          </h1>
        </div>
        <div>
          <Image src={"/tote55.jpg"} alt="" width={600} height={500} />
          <h1 className="text-2xl font-semibold hero-font ml-32 md:ml-64 ">
            FRONT
          </h1>
        </div>
      </section>

      <div className="md:border-t-[1px] border-[rgb(194,192,192)] mt-9 ml-2  w-[1250px]"></div>
      <section className="container mx-auto p-10 md:p-20">
        <h1 className="flex md:justify-center text-center mb-20 items-center  text-5xl font-bold">
          Hot Selling Totes
        </h1>
        <div className="md:gap-7 md:space-y-0 space-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="md:border-t-[1px] border-[#c2c0c0] mb-5 ml-2  w-[1250px]"></div>
        <h1 className="flex md:justify-center text-center items-center text-5xl font-bold">
          Glimpse Of Our LookBook
        </h1>
        <div className="md:border-b-[1px] border-[#c2c0c0] mt-5 ml-2  w-[1250px]"></div>

        <div className=" my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          <div>
            <Image
              src={"/tote4mockup.jpg"}
              height={100}
              width={300}
              alt="category"
            />
          </div>
          <div>
            <Image
              src={"/tote5.jpg"}
              height={100}
              width={300}
              alt="category"
              className="md:ml-14"
            />
          </div>
          <div>
            <Image
              src={"/tote22.jpg"}
              height={100}
              width={300}
              alt="category"
              className="md:ml-20"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
