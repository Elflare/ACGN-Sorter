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

- **Free Item Addition**: Enter names and upload images (from local or URL) for each entry (e.g., character avatars, game covers).
- **Visual Card Management**: All items are displayed as cards, allowing easy addition, removal, and management.
- **Pairwise Sorting**: Using an insertion sort logic, the system prompts you with simple “A or B” choices to rank your entries one by one.
- **Dynamic Progress Bar**: Real-time updates on total comparisons, current progress, and completion percentage during sorting.
- **Final Ranking Generation**: After all comparisons, a final ranked list is generated. Top items are highlighted in gold, silver, and bronze.
- **Local Data Storage**: All items and progress are saved in your browser’s `localStorage`, so your data persists even if you refresh or close the page.
- **Convenient Reset and Edit**: You can clear all data with one click or go back to adjust your list at any time.

## New Feature: AI Personalized Commentary

After the final ranking is generated, the **AI Review** module provides an auto-generated comment based on your results. You can copy this formatted text and send it to an AI chatbot for a personalized review.

---

by Gemini 2.5 pro