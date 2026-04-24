from sqlalchemy import Enum as SqlEnum
from app.utils.enums import TimeToDeleteEnum
from .base_model import Base
from sqlalchemy.orm import Mapped, mapped_column
from typing import Optional
class PasteModel(Base):
    __tablename__ = "paste"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[Optional[str]] = mapped_column(nullable=True)
    text: Mapped[Optional[str]] = mapped_column(nullable=True)

    time_to_delete: Mapped[TimeToDeleteEnum] = mapped_column(
        SqlEnum(TimeToDeleteEnum, name="time_to_delete_enum"),
        nullable=False,
        default=TimeToDeleteEnum.ONE_HOUR,
        server_default=TimeToDeleteEnum.ONE_HOUR.value
    )