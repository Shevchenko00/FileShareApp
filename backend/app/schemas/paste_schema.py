from pydantic import BaseModel, EmailStr
from app.utils.enums import TimeToDeleteEnum
from datetime import datetime
class PasteCreateSchema(BaseModel):
    title: str
    text: str
    time_to_delete: TimeToDeleteEnum = TimeToDeleteEnum.ONE_HOUR


