from typing import Annotated
from fastapi import Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.users_model import UsersModel
from app.repositories.user_repository import UsersRepository
from app.services.paste_service import PasteService
from app.core.database_config import get_session

from app.repositories.paste_repository import PasteRepository

from app.models.paste_model import PasteModel


def get_paste_service(session: AsyncSession = Depends(get_session)):
    repo = PasteRepository(session=session, model=PasteModel)
    user_repo = UsersRepository(session=session, model=UsersModel)
    return PasteService(repo=repo, user_repo=user_repo)