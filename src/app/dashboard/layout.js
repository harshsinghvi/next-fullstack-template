'use client';

import { useSession, signIn } from "next-auth/react"

export default function DashboardLayout({ children }) {
    const { status, data: session } = useSession({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
        },
    })

    if (status === "loading") {
        return <>
            Loading or not authenticated... Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    }

    return (<>
        {children}
    </>
    )
}
