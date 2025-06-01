import NavBar from "@/components/global/NavBar";
import Hero from "@/components/home/Hero";
import Thesis from "@/components/home/Thesis";

export default function Home() {
    return (
        <div >
            <NavBar />
            <Hero />
            <hr className="border-t border-gray-800 my-8" />
            <Thesis />
        </div>
    )
}