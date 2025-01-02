// export default function Footer (){
//     return(
//         <main>

//         </main>
//     )
// }



import Image from 'next/image';
import ContactIcons from './icon';
export default function Footer(){
    return(

<footer className="hero-bg mx-auto h-[500px] md:h-[400px]">
        <section className="flex justify-between  md:space-x-11">
          <div className=" p-6 md:mt-11 justify-center items-center ">
            <h1 className=" text-white mb-5 font-bold text-5xl md:text-3xl">Join the RAYS Revolution</h1>
           <div className='italic text-lg text-white font-extralight '>
            <p className=" mt-3 ">
            Unleash your unique style with our trendy tote bags.
            </p>
            <p>
            Designed each bag with a blend of  fashion and function.
            </p>
            <p>
            Be part of a movement that celebrates individuality and sustainability!
            </p>
            </div>

            <ContactIcons/>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="text-white mt-16 text-2xl font-bold ">
              <h2>Our Instagram Shop</h2>
            </div>
            <div className=" flex gap-3 mr-24 mt-5 items-center">
              <div>
                <Image
                  src="/tote44.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote01.jpeg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote55.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote2.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
            </div>
          </div>
           </section>
      </footer>
              
    )
}