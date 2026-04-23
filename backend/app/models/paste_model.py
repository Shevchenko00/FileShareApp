from app.models.base_model import Base
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column, relationship
class PasteModel(Base):
    __tablename__ = "paste"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[Optional[str]] = mapped_column(nullable=True)
    text: Mapped[Optional[str]] = mapped_column(nullable=True)