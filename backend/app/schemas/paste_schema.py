from pydantic import BaseModel, EmailStr
from app.utils.enums import TimeToDeleteEnum

class PasteCreateScheme(BaseModel):
    title: str
    text: str
    time_to_delete: TimeToDeleteEnum = TimeToDeleteEnum.ONE_HOUR