import { useState } from 'react';
import type { CopyExample, ExampleCategory } from '../types';
import { makeId } from '../storage';

interface Props {
  category: ExampleCategory;
  initial?: CopyExample | null;
  onSave: (example: CopyExample) => void;
  onCancel: () => void;
}

// Add or edit a single approved-copy snippet within one category
// (H1 / H2 / Paragraph) of a template.
export function AddExampleForm({ category, initial, onSave, onCancel }: Props) {
  const isEdit = Boolean(initial);
  const [content, setContent] = useState(initial?.content ?? '');
  const [source, setSource] = useState(initial?.source ?? '');
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [approved, setApproved] = useState(initial?.approved ?? true);

  const label = category === 'Paragraph' ? 'paragraph' : category;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    onSave({
      id: initial?.id ?? makeId(),
      category,
      content: content.trim(),
      source: source.trim() || undefined,
      notes: notes.trim() || undefined,
      approved,
      userAdded: true,
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4 className="add-form__title">
        {isEdit ? 'Edit' : 'Add'} {label} example
      </h4>

      <label className="field">
        <span>Copy *</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={category === 'Paragraph' ? 'Paragraph copy…' : `${category} text…`}
          rows={category === 'Paragraph' ? 4 : 2}
          autoFocus
        />
      </label>

      <div className="field-row">
        <label className="field">
          <span>Source</span>
          <input value={source} onChange={(e) => setSource(e.target.value)} placeholder="Brand · channel · campaign" />
        </label>
        <label className="field">
          <span>Notes</span>
          <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Why it’s a good example" />
        </label>
      </div>

      <label className="field field--check">
        <input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.checked)} />
        <span>Marked as approved copy</span>
      </label>

      <div className="add-form__actions">
        <button type="submit" className="btn btn--primary">
          {isEdit ? 'Save changes' : `Save ${label} example`}
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
