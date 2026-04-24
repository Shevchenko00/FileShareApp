from datetime import timedelta, datetime
from .enums import TimeToDeleteEnum
TTL_MAP = {
    TimeToDeleteEnum.FIVE_MINUTES: timedelta(minutes=5),
    TimeToDeleteEnum.ONE_HOUR: timedelta(hours=1),
    TimeToDeleteEnum.ONE_DAY: timedelta(days=1),
}


def get_expire_at(ttl: TimeToDeleteEnum) -> datetime:
    return datetime.utcnow() + TTL_MAP[ttl]