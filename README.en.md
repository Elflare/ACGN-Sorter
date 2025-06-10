[中文版](./README.md)

# ACGN Sorting System

A web tool designed to help you clarify your personal preferences and build clear rankings for your favorite things.

**Link:** [ACGN Sorter](https://elflare.github.io/ACGN-Sorter/)

Have you ever struggled with questions like “Who is my true favorite character?” or “Which game is really the best?” This system lets you easily and intuitively rank your favorites through a series of simple pairwise (“A or B”) comparisons.

The system consists of three independent modules:
- **Character Sorting**: Designed for characters from anime, movies, novels, etc.
- **Game Sorting**: Suitable for video games, tabletop games, etc.
- **Anime Sorting**: For anime, manga, novels, etc.
<br>(Actually, you can sort anything by adding your own items.)

## Core Features

- **Free Item Addition**: You can enter names and upload images from local files or via URL for each item (e.g., character avatars, game covers).
- **Visual Card Management**: All added items are displayed as a card wall, making it easy to add, delete, and manage them at any time.
- **Elo Rating System**: After clicking "Start Sorting," the system will randomly present two items for you to compare. After each comparison, the system updates the scores of both items based on the Elo rating algorithm, with higher-scoring items ranking higher.
- **Real-time Ranking**: During the sorting process, scores and rankings are updated in real-time based on Elo scores, giving you a clear understanding of the progress.
- **Generate Final Rankings at Any Time** : You can click the button to end the competition at any moment and view the complete current rankings.
- **Local Data Storage & Import/Export**: All items, scores, and sorting progress are saved in the browser's local storage for easy continuation next time. It also supports exporting Characters and Works list as a file for backup or migration, and importing data from a file.
- **Convenient Reset and Modification**: You can clear all data with a single click or go back to modify the information of added items at any time.
- **AI Personalized Commentary**: After the final ranking is generated, the system provides an **AI Review** module. It will automatically generate a guiding text based on your ranking results, which you can copy and send to a large language AI model (such as ChatGPT, Claude, etc.) for personalized commentary.

## Update Log
### June 10, 2025
- Separated HTML, CSS, and JS files.
- Implemented the Elo rating system.
- Added import/export functionality.
---

by Gemini 2.5 pro
