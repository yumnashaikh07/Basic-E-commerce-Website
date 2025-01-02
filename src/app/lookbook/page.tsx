import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function LookBook() {
  return (
    <main>
      {/* // 50% on small screens and 33% on larger screens. */}
      <Carousel>
        <CarouselContent className="p-20">
          {/* SET01 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote4mockup.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote4mockup.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote4mockup.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          {/* SET02 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/totem.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/totem.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/totem.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          {/* SET03 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          {/* SET04 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote01.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote01.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote01.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          {/* SET05 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote5.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote5.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote5.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          {/* SET06 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={"/tote22.jpg"} width={300} height={300} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-20" />
        <CarouselNext className="mr-20" />
      </Carousel>
    </main>
  );
}
