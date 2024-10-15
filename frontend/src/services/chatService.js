export const sendMessage = async (message) => {
  const payload = {
    "message" : message
  }
  try {
    const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error sending message:", error);
    return "Sorry, something went wrong.";
  }
};