import { useState } from 'react';
import { BLOCK_LABELS } from '../types';
import type { BlockType, CopyExample, ExampleBlock, Template } from '../types';
import { makeId } from '../storage';

interface Props {
  template: Template;
  initial?: CopyExample | null;
  onSave: (example: CopyExample) => void;
  onCancel: () => void;
}

const BLOCK_TYPES = Object.keys(BLOCK_LABELS) as BlockType[];

// A sensible generalized starting point: one H1, one H2, one paragraph.
function starterBlocks(): ExampleBlock[] {
  return [
    { type: 'H1', content: '' },
    { type: 'H2', content: '' },
    { type: 'Paragraph', content: '' },
  ];
}

export function AddExampleForm({ template, initial, onSave, onCancel }: Props) {
  const isEdit = Boolean(initial);
  const [title, setTitle] = useState(initial?.title ?? '');
  const [source, setSource] = useState(initial?.source ?? '');
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [approved, setApproved] = useState(initial?.approved ?? true);
  const [blocks, setBlocks] = useState<ExampleBlock[]>(
    initial ? initial.blocks.map((b) => ({ ...b })) : starterBlocks(),
  );

  function updateBlock(i: number, patch: Partial<ExampleBlock>) {
    setBlocks((prev) => prev.map((b, idx) => (idx === i ? { ...b, ...patch } : b)));
  }

  function moveBlock(i: number, dir: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  function addBlock(type: BlockType) {
    setBlocks((prev) => [...prev, { type, content: '' }]);
  }

  function removeBlock(i: number) {
    setBlocks((prev) => prev.filter((_, idx) => idx !== i));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const filled = blocks.filter((b) => b.content.trim());
    if (!title.trim() || filled.length === 0) return;
    const example: CopyExample = {
      id: initial?.id ?? makeId(),
      title: title.trim(),
      source: source.trim() || undefined,
      notes: notes.trim() || undefined,
      approved,
      blocks: filled.map((b) => ({ type: b.type, content: b.content.trim() })),
      userAdded: true,
    };
    onSave(example);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="add-form__title">{isEdit ? 'Edit example' : 'Add an example'}</h3>
      <p className="add-form__hint">
        Example for <strong>{template.name}</strong>. Build the copy as an outline: an{' '}
        <strong>H1</strong>, then <strong>H2</strong> sections with <strong>paragraphs</strong>{' '}
        beneath. Leave a block blank to skip it.
      </p>

      <div className="field-row">
        <label className="field">
          <span>Title *</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. 5 Reasons Why (winter sale)" />
        </label>
        <label className="field">
          <span>Source</span>
          <input value={source} onChange={(e) => setSource(e.target.value)} placeholder="Brand · channel · campaign" />
        </label>
      </div>

      <label className="field">
        <span>Notes (why it’s a good example)</span>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional reviewer notes" />
      </label>

      <label className="field field--check">
        <input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.checked)} />
        <span>Marked as approved copy</span>
      </label>

      <div className="add-form__blocks">
        {blocks.map((block, i) => (
          <div className={`add-block add-block--${block.type.toLowerCase()}`} key={i}>
            <div className="add-block__controls">
              <select
                value={block.type}
                onChange={(e) => updateBlock(i, { type: e.target.value as BlockType })}
                aria-label="Block type"
              >
                {BLOCK_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {BLOCK_LABELS[t]}
                  </option>
                ))}
              </select>
              <div className="add-block__buttons">
                <button type="button" onClick={() => moveBlock(i, -1)} aria-label="Move up" title="Move up">↑</button>
                <button type="button" onClick={() => moveBlock(i, 1)} aria-label="Move down" title="Move down">↓</button>
                <button type="button" onClick={() => removeBlock(i)} aria-label="Remove block" title="Remove">✕</button>
              </div>
            </div>
            <textarea
              value={block.content}
              onChange={(e) => updateBlock(i, { content: e.target.value })}
              placeholder={block.type === 'Paragraph' ? 'Paragraph copy…' : `${block.type} text…`}
              rows={block.type === 'Paragraph' ? 3 : 1}
            />
          </div>
        ))}
      </div>

      <div className="add-form__addrow">
        <span>Add:</span>
        <button type="button" className="text-btn" onClick={() => addBlock('H2')}>+ H2</button>
        <button type="button" className="text-btn" onClick={() => addBlock('H3')}>+ H3</button>
        <button type="button" className="text-btn" onClick={() => addBlock('Paragraph')}>+ Paragraph</button>
      </div>

      <div className="add-form__actions">
        <button type="submit" className="btn btn--primary">
          {isEdit ? 'Save changes' : 'Save example'}
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
