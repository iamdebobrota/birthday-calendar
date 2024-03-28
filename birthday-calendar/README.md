# Birthday calendar dashboard

## Overview

Birthday Calendar is a 7-day calendar application that displays the day (Mon/Tue/Wed...Sun) a person's birthday falls on for a specific day. This assignment requires you to build a ReactJS application that processes a list of birthdays provided in JSON format and displays them on the calendar according to the day their birthday falls on. 

## Detailed Explanation

### Problem Statement

Birthday Calendar is a calendar application designed to display the birthdays of individuals for a day on which it falls. The application functions as follows:

1. **Input Data**: The application takes a list of birthdays in JSON format (The json data is provided below)
2. **Rendering on Calendar**: The application places each person's initials on the calendar according to the day their birthday falls on. Each person is represented by a square on the calendar.
3. **Rendering Rules**:
    - If a box on the calendar is empty, it should have the `day-empty` text or any image.
    - The name of each person is added as the title attribute for their respective box on the calendar.
    - People should be ordered inside the calendar based on their age, from youngest to oldest.
4. **Functionality**:
    - On the initial load, the calendar should display birthdays for the respective days with their initials.

### Task Details

Your task is to develop a ReactJS application that implements the Birthday Calendar functionality as described above. Ensure that the application adheres to the specified rendering rules and provides a seamless user experience for viewing birthdays on the calendar.

### Tech Stack

- ReactJS
- JavaScript

### Json data

```json
[
  {
    "name": "Rohit Kumar",
    "birthday": "11/25/1996"
  },
  {
    "name": "Sara Smith",
    "birthday": "05/15/1989"
  },
  {
    "name": "John Doe",
    "birthday": "09/30/1975"
  },
  {
    "name": "Emily Johnson",
    "birthday": "03/10/2000"
  },
  {
    "name": "David Brown",
    "birthday": "07/20/1992"
  },
  {
    "name": "Anna Wilson",
    "birthday": "12/05/1984"
  },
  {
    "name": "Michael Jones",
    "birthday": "08/18/1978"
  },
  {
    "name": "Sophia Martinez",
    "birthday": "02/08/1995"
  },
  {
    "name": "Ethan Taylor",
    "birthday": "06/22/1986"
  },
  {
    "name": "Emma Anderson",
    "birthday": "10/12/1990"
  },
  {
    "name": "William Clark",
    "birthday": "04/01/1973"
  },
  {
    "name": "Olivia White",
    "birthday": "01/14/2002"
  },
  {
    "name": "James Wilson",
    "birthday": "07/29/1998"
  },
  {
    "name": "Ava Johnson",
    "birthday": "11/03/1982"
  },
  {
    "name": "Daniel Lee",
    "birthday": "09/05/1971"
  },
  {
    "name": "Mia Garcia",
    "birthday": "03/27/1993"
  },
  {
    "name": "Alexander Rodriguez",
    "birthday": "05/09/1987"
  },
  {
    "name": "Charlotte Martinez",
    "birthday": "08/24/1976"
  },
  {
    "name": "Noah Hernandez",
    "birthday": "12/18/1999"
  },
  {
    "name": "Abigail Nguyen",
    "birthday": "06/07/1980"
  }
]
```

### Refer the image for how the calendar looks like

![Screenshot 2024-03-20 at 9.25.51 PM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-03-23/Screenshot%202024-03-20%20at%209.25.51%E2%80%AFPM_410353.png)

## Bonus

- The application should follow specific rules for rendering birthdays on the calendar, ensuring equal-sized squares for each person and ordering them based on age.
- Each person's square on the calendar must be of equal size, maximising the area occupied by each individual.

---

### Submission Guidelines

- Develop the ReactJS application as per the provided specifications.
- Push your code to GitHub and share the GitHub repository link.
- Ensure that the application functions correctly, rendering birthdays on the calendar and following the specified rules for rendering.[data.json](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-03-23/data_424830.json)
