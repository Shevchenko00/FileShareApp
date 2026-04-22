from app.api.file_api import router as file_router
from fastapi import APIRouter
v1 = APIRouter()
v1.include_router(file_router, prefix='/file', tags=["file"])