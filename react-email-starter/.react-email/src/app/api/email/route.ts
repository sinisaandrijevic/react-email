import { NextResponse } from 'next/server';
import { Resend } from 'resend'

import CheckOutWebsite from "../../../../../../react-email-starter/emails/checkwebsite"

//Add your API Key here:
const resend = new Resend('RESEND_API_KEY');

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