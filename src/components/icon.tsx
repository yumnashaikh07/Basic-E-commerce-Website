import { FaEnvelope, FaPhone,FaInstagram} from "react-icons/fa";
const ContactIcons = () => {
    return (
      <main>
      <section className=" md:text-start text-center mt-9 hero-bg flex flex-col">
      <h1 className=" text-3xl text-white md:font-bold font-semibold  md:mt-5 ">Follow us</h1>
      <div className="flex md:ml-0 ml-[100px] mt-3 space-x-7">
         <a
          href="mailto:your-email@example.com"
          aria-label="Email"
        
        >
          <FaEnvelope size={27} color="white"/>
        </a>
        <a
          href="tel:+1234567890"
          aria-label="Phone"
          className="text-white"
        >
          <FaPhone size={27} />
         
        </a>
        
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white"
        >
          <FaInstagram size={30} />
        </a>
        </div> 
        {/* <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label=""
          className="rounded-full border-2 p-7 hover:text-white">
        </a>
          <FaInstagram size={30} /> */}
        </section>
        <div className=" text-white md:hidden text-center mt-5 ">
          <p>&copy; {new Date().getFullYear()} <span className='hover:underline'>RAYStotes</span>. All rights reserved.</p></div>
       
      </main>
    );
  };
  
  export default ContactIcons;
  