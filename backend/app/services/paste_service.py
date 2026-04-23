from app.repositories.paste_repository import PasteRepository

from app.schemas.paste_schema import PasteCreateScheme

from app.models.paste_model import PasteModel


class PasteService:
    def __init__(self, repo: PasteRepository):
        self.repo = repo

    async def create(self, paste: PasteCreateScheme) -> PasteModel:
        new_paste_dict = paste.model_dump()
        return await self.repo.create(new_paste_dict)

