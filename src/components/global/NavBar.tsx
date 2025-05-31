import ChaosLink from "@/components/ui/Link";

export default function NavBar() {
    return (
        <div className="w-full flex justify-between flex-row relative z-10 py-[22px] px-[10%]">
            <nav className="flex flex-row gap-4">
                <ChaosLink href="/">
                    Jasmine Wu
                </ChaosLink>
                <ChaosLink href="/about">about.</ChaosLink>
                <ChaosLink href="/lists">lists.</ChaosLink>
            </nav>
        </div>
    )
}