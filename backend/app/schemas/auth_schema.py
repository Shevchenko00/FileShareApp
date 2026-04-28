from pydantic import BaseModel, EmailStr

class UserLoginModel(BaseModel):
    email: EmailStr
    password: str

class TokenModel(BaseModel):
    token_type: str = "bearer"