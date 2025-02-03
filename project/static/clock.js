
document.addEventListener('DOMContentLoaded', function() {
    /* This part, I asked chatgpt for help as I am absolutely stumped by js. I did make some modifications on my own though */
    const timeInput = document.querySelector('.time-input');
    const dropdown = document.querySelector('.time-picker-dropdown');
    const hourColumn = document.getElementById('hour-column');
    const minuteColumn = document.getElementById('minute-column');
    const ampmButtons = document.querySelectorAll('.ampm-btn');

    let selectedHour = 12;
    let selectedMinute = 0;
    let selectedAmPm = 'AM';

    // Generate hours 1-12
    for (let i = 1; i <= 12; i++) {
        const div = document.createElement('div');
        div.className = 'time-item';
        div.textContent = i;
        div.addEventListener('click', () => selectTime('hour', i));
        hourColumn.appendChild(div);
    }

    // Generate minutes 1-59
    for (let i = 0; i < 60; i++) {
        const div = document.createElement('div');
        div.className = 'time-item';
        div.textContent = i.toString().padStart(2, '0');
        div.addEventListener('click', () => selectTime('minute', i));
        minuteColumn.appendChild(div);
    }

    // AM/PM buttons
    ampmButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedAmPm = this.dataset.value;
            updateActiveAmPm();
            updateTime();
        });
    });

    // Toggle dropdown
    timeInput.addEventListener('click', function(e) {
        dropdown.style.display = 'block';
        e.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });

    function selectTime(type, value) {
        if (type === 'hour') {
            selectedHour = value;
        }

        if (type === 'minute') {
            selectedMinute = value;
        }

        updateActiveSelection();
        updateTime();
    }

    function updateActiveSelection() {
        document.querySelectorAll('.time-item.selected').forEach(item => {
            item.classList.remove('selected');
        });

        Array.from(hourColumn.children).find(child =>
            parseInt(child.textContent) === selectedHour
        ).classList.add('selected');

        Array.from(minuteColumn.children).find(child =>
            child.textContent === selectedMinute.toString().padStart(2, '0')
        ).classList.add('selected');
    }

    function updateActiveAmPm() {
        ampmButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.value === selectedAmPm) {
                button.classList.add('active');
            }
        });
    }

    function updateTime() {
        const formattedHour = selectedHour.toString().padStart(2, '0');
        const formattedMinute = selectedMinute.toString().padStart(2, '0');
        timeInput.value = `${formattedHour}:${formattedMinute} ${selectedAmPm}`;
    }

    function updateDropdownPosition() {
        if (window.innerWidth < 768) {
            dropdown.style.position = 'fixed';
            dropdown.style.top = '50%';
            dropdown.style.left = '50%';
            dropdown.style.transform = 'translate(-50%, -50%)';
            dropdown.style.width = '90%';
        }
    }

    // Initialize with current time
    const now = new Date();
    selectedHour = now.getHours() % 12 || 12;
    selectedMinute = now.getMinutes();
    selectedAmPm = now.getHours() >= 12 ? 'PM' : 'AM';

    window.addEventListener('resize', updateDropdownPosition);

    updateActiveSelection();
    updateActiveAmPm();
    updateTime();
});
