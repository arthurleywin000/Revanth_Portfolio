import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, message } = req.body;

    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['revanth.palukuri2006@gmail.com'],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true, response });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send' });
  }
}