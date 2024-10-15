from fastapi import APIRouter
from app.models.messages import Message 
from app.services.mistral import get_response

router = APIRouter()

@router.post("/chat", response_model=Message)
async def chat(message: Message):
    chatbot_response = get_response(message.message)
    return Message(message=chatbot_response)
