import { NextResponse } from 'next/server'

// import { getServerSession } from "next-auth/next"
// import { authOptions } from '../auth/[...nextauth]'

export async function GET(request, res) {
    // const session = await getServerSession(authOptions)  // get user details
    return new NextResponse.json({ msg: 'Hello World !!' })
}
