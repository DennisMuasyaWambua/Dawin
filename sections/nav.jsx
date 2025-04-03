import Image from "next/image"


const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center h-full">
        <Image
        className="ml-40 mt-4"
        src={"/dawinLogo.png"}
        quality={100}
        width={100}
        height={100}
        />
        <nav className="mr-20 mt-2 flex justify-end">
            <a href="#" className="text-white  p-8" aria-current="page">Dashboard</a>
            <a href="#" className="text-white  p-8">Team</a>
            <a href="#" className="text-white  p-8">Projects</a>
            <a href="#" className="text-white  p-8">Calendar</a>
        </nav>
    </div>
    </>
  )
}

export default Nav