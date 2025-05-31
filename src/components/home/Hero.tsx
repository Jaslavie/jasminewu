import Planet from "@/components/misc/Planet";
import Link from "@/components/ui/Link";

export default function Hero() {
    return (
        <section className="flex items-center justify-center justify-between min-h-screen min-w-screen">
            <div className="max-w-2xl"> 
                <h1 className="title">
                    Jasmine designs 
                    <span className="text-gradient">Human-AI interfaces</span> 
                    that translate 
                    <span className="text-gradient chaos-text">chaos into order.</span>
                </h1>
                <p>
                    currently in <Link href="https://www.palantir.com/" >Washington D.C.</Link>
                </p>
                <Planet />
            </div>
        </section>
    )
}