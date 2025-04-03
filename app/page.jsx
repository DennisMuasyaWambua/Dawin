import Nav from "@/sections/nav";
import Specialties from "@/sections/specialties";
import Welcome from "@/sections/welcome";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
        <Nav/>
        <Image
        src={'/azureBeach.jpg'}
        fill
        alt="beach"
        sizes="100vw"
        quality={100}
        style={{objectFit:'cover',zIndex:-1, opacity:0.8}}/>
       
          <Welcome/>

          <div className="flex justify-center items-center mb-[2%]">
            <div className="w-[451px] h-16 text-center text-black text-2xl font-medium font-['Poppins']">Our Packages</div>
          </div>

         <Specialties/>
          
      
    </div>
  );
}
