
import React from "react";
import Link from "next/link";

export default function ChaosLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="link">{children}</Link>
    )
}