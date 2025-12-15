import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
        <nav>
            <Link href="/">Axoria</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/categories">Add an article</Link>
        </nav>
    </div>
  )
}

export default Navbar