from app.repositories.paste_repository import PasteRepository

from app.schemas.paste_schema import PasteCreateSchema
from datetime import datetime
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
        pastes = await self.repo.get_all()

        return [
            {
                "id": p.id,
                "title": p.title,
                "text": p.text,
                "time_to_delete": p.time_to_delete,
                "expires_at": p.expires_at,
                "is_expired": p.expires_at < datetime.utcnow(),
            }
            for p in pastes
        ]