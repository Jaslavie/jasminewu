import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/lists">Lists</Link>
    </nav>
  )
}