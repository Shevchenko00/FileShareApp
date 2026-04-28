from fastapi import HTTPException

from app.repositories.paste_repository import PasteRepository

from app.schemas.paste_schema import PasteCreateSchema, PasteUpdateSchema
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

    async def update(self, paste_id: str, data: PasteUpdateSchema):
        paste = await self.repo.get_single(id=paste_id)

        if not paste:
            raise ValueError("Paste not found")

        update_data = data.model_dump(exclude_unset=True)

        if "time_to_delete" in update_data:
            update_data["expires_at"] = get_expire_at(
                update_data["time_to_delete"]
            )

        return await self.repo.update(paste, update_data)

    async def get_single(self, paste_id: int):
        paste = await self.repo.get_single(id=paste_id)
        if paste.expires_at < datetime.utcnow():
            raise HTTPException(
                status_code=404,
                detail="This paste has expired"
            )
        if not paste:
            raise ValueError("Paste not found")

        return {
            "id": paste.id,
            "title": paste.title,
            "text": paste.text,
            "time_to_delete": paste.time_to_delete,
            "expires_at": paste.expires_at,
            "is_expired": paste.expires_at < datetime.utcnow(),
        }

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
