import axios from 'axios';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post('https://localhost:8000/webhook', { message });
    return response.data.reply;  // Assuming backend sends a reply in this structure
  } catch (error) {
    console.error("Error sending message:", error);
    return "Sorry, something went wrong.";
  }
};