import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type EmailOptions = {
  name: string
  email: string
  message: string
  page: string
  position?: string
}

export async function sendEmail({
  name,
  email,
  message,
  page,
  position,
}: EmailOptions) {
  console.log('Attempting to send email ', name, email, message, page, position)

  let internalEmail = `
        <h4>Original Message from ${name}</h4>
        <blockquote>${message}</blockquote>
  
        <h5>Location</h5>
        <div>${page}</div>

      `

  let internalSubject = `[website]: from ${name} at ${page}`

  if (page === 'Volunteer Page' && position) {
    internalSubject = `[website] Volunteer: ${name}`

    internalEmail = `
        <h4>Original Message from ${name}, who wishes to be a ${position}:</h4>
        <blockquote>${message}</blockquote>


      `
  }

  try {
    resend.emails.send({
      // to: 'event@ladysmithdays.com', // Your email where you'll receive emails
      // from: 'event@ladysmithdays.com', // your website email address here
      to: 'event@ladysmithdays.com', // Your email where you'll receive emails
      from: 'event@ladysmithdays.com',
      cc: 'contactladysmithdays@gmail.com',
      subject: internalSubject,
      reply_to: email,
      html: internalEmail,
    })

    return true
  } catch (error) {
    console.log(error)

    throw new Error('There was an error sending the email')
  }
}
