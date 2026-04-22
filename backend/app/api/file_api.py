from fastapi import APIRouter, Depends

router = APIRouter()


@router.post("/create")
async def create_file(filename: str):
    return filename


@router.get("")
async def get_all_files():
    return {"hello" : "this all files"}