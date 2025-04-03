import Image from 'next/image';
import {perks} from  '../constants/constants';
import Link from 'next/link';

const Specialties = () => {
   

  return (
    <div className='flex flex-row gap-10 ml-[20%] mb  -[20%]'>
   
        
        {perks.map((perk,index)=>(
             <div key={index} className="w-[280px] h-[490px] relative ">
            <div >
            {/* <Image fill className="hover:blur-md w-[280px] h-[490px] left-0 top-0 absolute rounded-[20px]" sizes="100vw"  style={{objectFit:'cover',zIndex:-1}} src={perk.image} quality={100}/> */}
            <img fill sizes='100vw'  style={{objectFit:'cover'}} className="hover:scale-110 w-[280px] h-[490px] left-0 top-0 absolute rounded-[20px]" src={perk.image} quality={100} />
            <div className="w-[191px] h-[50.33px] left-[45px] top-[356px] absolute">
              <div className="w-[191px] h-[50.33px] left-0 top-0 absolute bg-[#007fff] rounded-[20px]" />
              <div className="w-[131.67px] h-[27.15px] left-[32.78px] top-[11.26px] absolute text-center text-white text-xl font-semibold font-['Poppins']">
                <Link href = {`/${perk.title}`}>Learn more</Link>
                    
                </div>
            </div>
            <div className="w-[226px] h-10 left-[14px] top-[68px] absolute text-center text-white text-4xl font-normal font-['Inter']">{perk.title}</div>
        </div>
        </div>
    ))}
            
    
    </div>
  )
}

export default Specialties