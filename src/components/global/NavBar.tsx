import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-full flex justify-between flex-row">
            <nav className="flex flex-row gap-4">
                <Link href="/about">about.</Link>
                <Link href="/lists">lists.</Link>
            </nav>
        </div>
    )
}