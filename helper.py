from datetime import datetime


def handle_optimal_minutes(minute: int):
    return (minute - 30) % 60


def get_optimal_time(hour: int, minute: int, is_primary: bool):
    hours_to_subtract = 7 if is_primary else 9
    if hour < hours_to_subtract:
        new_hour = 24 - (hours_to_subtract - hour)

    else:
        new_hour = hour - hours_to_subtract

    if is_primary:
        new_minute = handle_optimal_minutes(minute)
        new_hour -= 1 if new_minute >= 30 else 0
    else:
        new_minute = minute

    new_hour %= 24

    # convert to 12 hour
    period = 'AM' if new_hour < 12 else 'PM'
    new_hour = 12 if (new_hour % 12 == 0) else new_hour % 12
    return f"{new_hour}:{new_minute:02} {period}"
