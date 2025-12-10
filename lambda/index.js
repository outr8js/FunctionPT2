// index.js — AWS Lambda (Node.js 18.x / 20.x) using CommonJS and SES

const AWS = require("aws-sdk");

// Use the Lambda region or fall back to a default
const REGION = process.env.AWS_REGION || "us-west-2";

// Update these two to your actual verified SES emails
const TO_EMAIL = "you@example.com";        // where the form email will be sent
const FROM_EMAIL = "no-reply@example.com"; // must be a verified SES sender

const ses = new AWS.SES({ region: REGION });

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // or restrict to your domain
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Content-Type": "application/json",
  };
}

exports.handler = async (event) => {
  console.log("Incoming event:", JSON.stringify(event, null, 2));

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: "",
    };
  }

  let body;

  try {
    body =
      typeof event.body === "string"
        ? JSON.parse(event.body)
        : event.body || {};
  } catch (err) {
    console.error("Error parsing body:", err);
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: false,
        error: "Invalid JSON in request body.",
      }),
    };
  }

  const {
    name,
    email,
    phone,
    subject,
    message,
  } = body;

  // Basic validation – tweak as you like
  if (!email || !message) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: false,
        error: "Missing required fields: email and message.",
      }),
    };
  }

  const emailSubject =
    subject || `New contact form submission${name ? ` from ${name}` : ""}`;

  const emailBody = `
New contact form submission:

Name:   ${name || "N/A"}
Email:  ${email}
Phone:  ${phone || "N/A"}

Message:
${message}
`.trim();

  const params = {
    Destination: {
      ToAddresses: [TO_EMAIL],
    },
    Message: {
      Body: {
        Text: {
          Data: emailBody,
        },
      },
      Subject: {
        Data: emailSubject,
      },
    },
    Source: FROM_EMAIL,
    ReplyToAddresses: email ? [email] : [],
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log("SES sendEmail result:", result);

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully.",
        messageId: result.MessageId,
      }),
    };
  } catch (err) {
    console.error("SES sendEmail error:", err);
  
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: false,
        error: err.message || "Failed to send email.",
        code: err.code,
      }),
    };
  }
};