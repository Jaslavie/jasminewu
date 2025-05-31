import Planet from "@/components/misc/Planet";
import Link from "@/components/ui/Link";

export default function Hero() {
    return (
        <section className="flex items-center min-h-screen min-w-screen p-20">
            <div className="max-w-3xl"> 
                <h1 className="font-serif font-extralight text-3xl text-text-heading md:text-5xl">
                    Jasmine designs 
                    <span className="text-gradient font-serif italic text-[38px] md:text-[42px]">Human-AI interfaces</span> 
                    that translate 
                    <span className="text-gradient font-serif italic text-[38px] md:text-[42px] chaos-text">chaos into order.</span>
                </h1>
                <p>
                    currently in <Link href="https://www.palantir.com/" >Washington D.C.</Link>
                </p>
                <Planet />
            </div>
        </section>
    )
}