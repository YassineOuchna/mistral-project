import os
from mistralai import Mistral

MISTRAL_API_KEY = "nVbjyTzCdOGBNjDWucg6D8wtS3O2hRUX"

def get_response(user_message: str) -> str:
    """
    Send a message to the Mistral chatbot and get a response.
    """
    model = "mistral-large-latest"

    client = Mistral(api_key=MISTRAL_API_KEY)
    chat_response = client.chat.complete(
    model= model,
    messages = [
            {
                "role": "user",
                "content": user_message,
            },
        ]
    )
    return chat_response.choices[0].message.content