# Dreamer - Sleep Time Calculator

#### Description:

Dreamer is a full-stack web application designed to help users calculate their ideal bedtime based on sleep science principles. By taking the user's desired wake-up time, it provides two optimized sleep schedules aligned with 90-minute sleep cycles. It is built with Flask and Bootstrap, combining mathematical time calculations with an immersive user interface featuring animated transitions and an interactive analog clock.

Our sleep cycles last approximately 90 minutes, and waking at the end of a cycles rather than mid-cycle reduces the grogginess we feel when we wake up. I created this program to know what time is the perfect time to sleep depending on the time the user wants to wake up. Dreamer implements this through:

1. **7.5-Hour Sleep Calculation**:
   - Subtracts 7 hours and 30 minutes from the wake-up time
   - Accounts for 5 full sleep cycles

2. **9-Hour Calculation**:
   - Subtracts 9 hours from the wake-up time
   - Aligns with a full circadian rhythm period

The algorithm that I wrote in `helper.py` handles cases like:
- Midnight wraparounds (e.g., 2 AM -> 5 PM same-day)
- 12-hour to 24-hour time conversions and vice-versa

# Implementations:

**Time Picker:**:

- Scrollable hour/minute columns
- AM/PM toggle buttons
- (Slightly?) Mobile-responsive positioning
- Pure JavaScript implementation (no external libraries)

**Analog Clock:**
- Dynamically updates minute and hour hands using CSS transforms based on selected time

**Animations:**

- View transitions between pages (Big thanks to this [guy](https://www.youtube.com/watch?v=4oSZzAOpbOw) for the tutorial)

- Starry background with CSS radial gradients and opacity pulsation 

- Fade-in effects for all UI elements

# Future Roadmap:

1. Account System
2. Sleep Tracking for those with accounts
3. Sleep Debt Calculator
4. Porting to Phones

---

## Credits

- **UI Framework**: [Bootstrap 5](https://getbootstrap.com/) for responsive layouts and components.
- **Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for modern typography.
- **View Transitions**: Animation logic inspired by [this tutorial](https://www.youtube.com/watch?v=4oSZzAOpbOw).




