import { NextResponse } from 'next/server';
import { Resend } from 'resend'

import CheckOutWebsite from "../../../../../../react-email-starter/emails/checkwebsite"

const resend = new Resend(process.env.RESEND_API_KEY);
//Your API Key

export async function GET() {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'andrijevicsinisa2006@gmail.com',
        subject: 'Test',
        react: CheckOutWebsite()
    });

    return NextResponse.json({
        status: 'Ok'
    })
}   