from sqlalchemy import Column, String
import string, random

def generate_short_id():
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(8))


