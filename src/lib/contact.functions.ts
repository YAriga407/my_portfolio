export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  // TODO: Implement contact form submission
  // This could integrate with an email service like Resend, SendGrid, or Netlify Forms
  
  try {
    // Placeholder: Log to console for now
    console.log("Contact message:", data);
    
    return {
      ok: true,
      message: "Message received! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      ok: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
