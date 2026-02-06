const axios = require('axios');

const WEBHOOK_URL = 'https://webhook.site/81d8323f-71ce-4dea-a289-6b6b93d45e99';

async function triggerWebhook(job) {
  const webhookPayload = {
    jobId: job.id,
    taskName: job.taskName,
    priority: job.priority,
    payload: JSON.parse(job.payload),
    completedAt: new Date().toISOString()
  };

  console.log('Webhook Trigger Initiated');
  console.log('Webhook URL:', WEBHOOK_URL);
  console.log('Payload:', webhookPayload);

  try {
    const response = await axios.post(WEBHOOK_URL, webhookPayload);

    console.log('Webhook Sent Successfully');
    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);

  } catch (error) {
    console.error('Webhook Failed');

    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else {
      console.error('Error Message:', error.message);
    }
  }
}

module.exports = triggerWebhook;

