from app.repositories.paste_repository import PasteRepository

from app.schemas.paste_schema import PasteCreateSchema

from app.models.paste_model import PasteModel
from app.utils.expire import get_expire_at



class PasteService:
    def __init__(self, repo: PasteRepository):
        self.repo = repo

    async def create(self, paste: PasteCreateSchema) -> PasteModel:
        new_paste_dict = paste.model_dump()

        new_paste_dict["expires_at"] = get_expire_at(paste.time_to_delete)

        return await self.repo.create(new_paste_dict)

    async def get_all(self):
        return await self.repo.get_all()