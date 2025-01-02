import  Image  from 'next/image';
export default function ProductImages() {
    return (
        <div>
            <div className="h-[500px] relative">
                <Image src={"/tote5.jpg"} alt='' sizes='30vw' className='object-cover rounded-md' />
            </div>
            <div className="h-[500px] relative">
                <Image src={"/tote5.jpg"} alt='' sizes='30vw' className='object-cover rounded-md' />
            </div>
            <div className="h-[500px] relative">
                <Image src={"/tote5.jpg"} alt='' sizes='30vw' className='object-cover rounded-md' />
            </div>
            <div className="h-[500px] relative">
                <Image src={"/tote5.jpg"} alt='' sizes='30vw' className='object-cover rounded-md' />
            </div>
            <div className="h-[500px] relative">
                <Image src={"/tote5.jpg"} alt='' sizes='30vw' className='object-cover rounded-md' />
            </div>
        </div>
    )
}