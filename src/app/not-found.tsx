import Link from 'next/link'
import React from 'react'


function FrownIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
    )
}

export default function errorPage() {
    return (
        <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-950 px-4 text-center dark:bg-gray-950">
            <div className="max-w-md space-y-6">
                <FrownIcon className="mx-auto h-40 w-40 text-gray-400 hover:text-gray-200 animate-bounce" />
                <div className="space-y-2">
                    <h1 className="text-7xl font-bold tracking-tight text-gray-50">404</h1>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-50">Page Not Found</h1>
                    <p className="text-gray-400">The page you are looking for does not exist or has been moved.</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row items-center justify-center">

                    <Link

                        href="/"
                    >
                        <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                            Go to Homepage
                        </button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

