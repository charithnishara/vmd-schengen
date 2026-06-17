import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, destination, package: pkg, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'VMD Website <noreply@thinkmodules.com>',
      to: ['mishm.silva@vmdgroup.uk', 'liyanagamagecn@gmail.com'],
      replyTo: email,
      subject: `New Schengen Visa Enquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdf8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: #6B0F1A; padding: 24px 32px;">
            <h1 style="color: #F5E6C8; font-size: 20px; margin: 0; font-weight: 600;">New Visa Enquiry</h1>
            <p style="color: rgba(245,230,200,0.7); font-size: 13px; margin: 4px 0 0;">VMD Group — Schengen Visa Assistance</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #e8e0d0;">
                <td style="padding: 10px 0; color: #6B0F1A; font-weight: 600; width: 140px;">Name</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e0d0;">
                <td style="padding: 10px 0; color: #6B0F1A; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #6B0F1A;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e0d0;">
                <td style="padding: 10px 0; color: #6B0F1A; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; color: #333;">${phone || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e0d0;">
                <td style="padding: 10px 0; color: #6B0F1A; font-weight: 600;">Destination</td>
                <td style="padding: 10px 0; color: #333;">${destination || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e0d0;">
                <td style="padding: 10px 0; color: #6B0F1A; font-weight: 600;">Package</td>
                <td style="padding: 10px 0; color: #333;">${pkg || '—'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #6B0F1A; font-weight: 600; font-size: 14px; margin-bottom: 8px;">Message</p>
              <div style="background: white; border: 1px solid #e8e0d0; border-radius: 8px; padding: 14px; color: #444; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="background: #3a0810; padding: 16px 32px; text-align: center;">
            <p style="color: rgba(245,230,200,0.5); font-size: 12px; margin: 0;">VMD Group of Companies · Schengen Visa Assistance</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to the enquirer
    await resend.emails.send({
      from: 'VMD Group <noreply@thinkmodules.com>',
      to: [email],
      subject: 'We received your enquiry — VMD Group',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdf8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: #6B0F1A; padding: 24px 32px;">
            <h1 style="color: #F5E6C8; font-size: 20px; margin: 0; font-weight: 600;">Thank you, ${name}!</h1>
            <p style="color: rgba(245,230,200,0.7); font-size: 13px; margin: 4px 0 0;">VMD Group — Schengen Visa Assistance</p>
          </div>
          <div style="padding: 32px; color: #444; font-size: 14px; line-height: 1.7;">
            <p>We've received your enquiry and a member of our team will get back to you <strong>within 24 hours</strong> (usually same day).</p>
            <p style="margin-top: 16px;">In the meantime, if you have any urgent questions you can reach us directly:</p>
            <ul style="margin-top: 12px; padding-left: 20px;">
              <li>Email: <a href="mailto:info@vmdgroup.co.uk" style="color: #6B0F1A;">info@vmdgroup.co.uk</a></li>
            </ul>
            <p style="margin-top: 24px; color: #888; font-size: 13px;">Please do not purchase any non-refundable flights or accommodation before your visa is approved.</p>
          </div>
          <div style="background: #3a0810; padding: 16px 32px; text-align: center;">
            <p style="color: rgba(245,230,200,0.5); font-size: 12px; margin: 0;">© VMD Group of Companies · change for the future</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
