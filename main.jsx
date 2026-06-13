import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    onAdd({ title, description, dueDate: dueDate || null });
    setTitle("");
    setDescription("");
    setDueDate("");
    setOpen(false);
  }

  return (
    <div className="form-card">
      {!open ? (
        <button className="btn btn-primary full-width" onClick={() => setOpen(true)}>
          + Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="task-form">
          <h2>New Task</h2>
          <div className="field">
            <label>Title *</label>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              placeholder="Add details (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div className="field">
            <label>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
