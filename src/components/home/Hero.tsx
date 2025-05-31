import Planet from "@/components/misc/Planet";
import Link from "@/components/ui/Link";

export default function Hero() {
    return (
        <section className="flex items-center min-h-screen min-w-screen p-20">
            <div className="max-w-3xl flex flex-col gap-4"> 
                <h1 className="font-light text-[32px] text-text-heading md:text-[36px]">
                    Jasmine designs 
                    <span className="px-2 text-gradient font-serif italic text-[38px] md:text-[42px]">human-ai interfaces</span> 
                    that translate 
                    <span className="px-2 text-gradient font-serif italic text-[38px] md:text-[42px] chaos-text">chaos into order.</span>
                </h1>
                <p className="text-base">
                    currently in <Link href="https://www.palantir.com/" >Washington D.C. ↗</Link>
                </p>
                <Planet />
            </div>
        </section>
    )
}