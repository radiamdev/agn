import alovaInstance from '../alova'

export const sendMail = (data: {
    name: string
    email: string
    subject: string
    message: string
    honeypot: string
}) =>
    alovaInstance.Post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/agn/contact` ,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
