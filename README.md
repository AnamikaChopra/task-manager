# Task Manager

A full-stack personal task manager built with Node.js + Express (backend) and React + Vite (frontend). Users can create, view, update, complete, and delete tasks, with filtering by status and overdue highlighting.

I chose Exercise 1 because I wanted to focus on getting the full-stack fundamentals right — clean API design, proper state management in React, and a usable, responsive UI.

---




## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Backend | Node.js + Express | Lightweight, simple REST API setup |
| Frontend | React 18 + Vite | Fast dev server, functional components with hooks |
| Storage | JSON file (tasks.json) | Simple persistence without needing a database |
| Styling | Plain CSS | Clean, readable, no extra dependencies |
| IDs | uuid | Unique task identifiers without a database |

---

## How to Run Locally

**Prerequisites:** Node.js 18+ installed

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
```

### 2. Start the backend
```bash
cd server
npm install
npm start
```
Server runs on http://localhost:5000

### 3. Start the frontend (new terminal)
```bash
cd client
npm install
npm run dev
```
Frontend runs on http://localhost:5173

Open http://localhost:5173 in your browser.

---

## API Documentation

Base URL: `http://localhost:5000`

### GET /api/tasks
Returns all tasks sorted by creation date (newest first).

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "dueDate": "2026-06-15",
    "completed": false,
    "createdAt": "2026-06-13T10:00:00.000Z"
  }
]
```

### POST /api/tasks
Create a new task.

**Request body:**
```json
{
  "title": "Buy groceries",
  "description": "Optional details",
  "dueDate": "2026-06-15"
}
```

**Response:** `201` — the created task object.

**Errors:** `400` if title is missing or empty.

### PUT /api/tasks/:id
Update an existing task (any field).

**Request body:** any subset of `{ title, description, dueDate, completed }`

**Response:** `200` — the updated task object.

**Errors:** `404` if task not found. `400` if title is empty.

### DELETE /api/tasks/:id
Delete a task by ID.

**Response:** `200 { message: "Task deleted successfully" }`

**Errors:** `404` if task not found.

---

## Project Structure

```
task-manager/
├── client/                  # React frontend
│   ├── index.html
│   ├── vite.config.js       # Vite config with API proxy
│   ├── package.json
│   └── src/
│       ├── main.jsx         # React entry point
│       ├── App.jsx          # Root component — state + API calls
│       ├── App.css          # All styles
│       └── components/
│           ├── TaskForm.jsx  # Add new task form
│           ├── FilterBar.jsx # All / Active / Completed filter
│           ├── TaskList.jsx  # Renders list or empty state
│           └── TaskItem.jsx  # Single task with edit/delete/toggle
├── server/
│   ├── index.js             # Express server + all API routes
│   ├── tasks.json           # JSON file storage (auto-created)
│   └── package.json
└── README.md
```

---

## Features Implemented

### Must Have ✅
- Add task with title (required), description, and due date (optional)
- View all tasks sorted by creation date (newest first)
- Mark task complete / incomplete (toggle checkbox)
- Edit task title, description, and due date inline
- Delete task with confirmation prompt
- Filter by All / Active / Completed

### Should Have ✅
- Active vs Completed count displayed at top
- Overdue tasks highlighted in red with "Overdue" label
- Empty state UI when no tasks match the filter

### Nice to Have
- Tasks persist across server restarts (written to tasks.json) ✅
- Search by title — not implemented (would add a search input filtering tasks client-side)
- Drag-and-drop reorder — not implemented (would use react-beautiful-dnd)

---

## Next Steps

If I had more time, I would:
1. Add search/filter by title (simple client-side filter on the tasks array)
2. Add drag-and-drop reordering using `react-beautiful-dnd`
3. Move from JSON file to SQLite for more reliable concurrent writes
4. Add a couple of backend tests using Jest to verify the API routes
5. Improve mobile UI with a bottom sheet for the add task form
6. Add due date sorting option alongside the status filter

---

## Notes

- I used AI tools (Claude) to help structure some boilerplate, but I wrote and understood every line of code myself.
- The Vite proxy (`/api` → `localhost:5000`) means no CORS issues in development. In production, the frontend is configured to point to the deployed backend URL via environment variable.
