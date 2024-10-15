from pydantic import BaseModel
# Generic message structure
class Message(BaseModel):
    message: str
