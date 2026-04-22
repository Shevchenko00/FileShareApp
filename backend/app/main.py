from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import v1

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # ← разрешить ВСЕ домены
    allow_credentials=True,
    allow_methods=["*"],   # GET, POST, PUT, DELETE и т.д.
    allow_headers=["*"],
)

app.include_router(v1)