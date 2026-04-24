from enum import Enum

class TimeToDeleteEnum(str, Enum):
    FIVE_MINUTES = "5m"
    ONE_HOUR = "1h"
    ONE_DAY = "1d"