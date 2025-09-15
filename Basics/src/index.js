
const express = require('express');
const {}= require('./models/tweets')

const axios = require('axios');
const { genaiApiKey } = require('./config/api-config');

const app = express();

app.use('/api',apiroutes);
const prompt=" how is india";

async function sendGenaiRequest(prompt) {
  try {
    const response = await axios.post(
      'https://genai-api-endpoint.com/v1/generate', // Replace with actual GenAI endpoint
      { prompt },
      {
        headers: {
          'Authorization': `Bearer ${genaiApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('GenAI request failed:', error);
  }
}
