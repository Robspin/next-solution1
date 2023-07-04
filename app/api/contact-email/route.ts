import { NextResponse } from "next/server"
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
    const body = await req.json()
    const { text, from } = body
    const response = await sendEmail(from, text)
    return NextResponse.json({ response })
}