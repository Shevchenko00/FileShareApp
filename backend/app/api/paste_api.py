from fastapi import APIRouter, Depends

from app.services.paste_service import PasteService

from app.dependencies.paste_dependencies import get_paste_service

router = APIRouter()


from fastapi import APIRouter, Depends

from app.services.paste_service import PasteService
from app.schemas.paste_schema import PasteCreateSchema

from app.dependencies.paste_dependencies import get_paste_service

router = APIRouter()


@router.post("/create")
async def create_file(
        data: PasteCreateSchema,
        service: PasteService = Depends(get_paste_service)
):
    return await service.create(data)


@router.get("/")
async def get_all_paste(
        service: PasteService = Depends(get_paste_service)
):
    return await service.get_all()

