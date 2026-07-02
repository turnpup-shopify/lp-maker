import { useState } from 'react';
import { BLOCK_LABELS, CATEGORY_LABELS, EXAMPLE_CATEGORIES } from '../types';
import type { CopyExample, ExampleCategory, Template } from '../types';
import { ExampleCard } from './ExampleCard';
import { AddExampleForm } from './AddExampleForm';

interface Props {
  template: Template;
  typeName: string;
  query: string;
  onSave: (example: CopyExample) => void;
  onDelete: (exampleId: string) => void;
}

function matches(example: CopyExample, q: string): boolean {
  if (!q) return true;
  return [example.content, example.source, example.notes].join(' ').toLowerCase().includes(q.toLowerCase());
}

export function TemplateView({ template, typeName, query, onSave, onDelete }: Props) {
  // Which category's add-form is open, and the snippet being edited (if any).
  const [adding, setAdding] = useState<ExampleCategory | null>(null);
  const [editing, setEditing] = useState<CopyExample | null>(null);

  function handleSave(example: CopyExample) {
    onSave(example);
    setAdding(null);
    setEditing(null);
  }

  function startEdit(example: CopyExample) {
    setEditing(example);
    setAdding(example.category);
  }

  return (
    <div className="template-view">
      <div className="template-view__header">
        <p className="breadcrumb">{typeName}</p>
        <h1>{template.name}</h1>
        <p className="template-view__summary">{template.summary}</p>
      </div>

      <section className="panel">
        <h2 className="panel__title">Structure</h2>
        <ol className="structure">
          {template.structure.map((s) => (
            <li className="structure__item" key={s.id}>
              <div className="structure__row">
                <span className={`block__tag block__tag--${s.type.toLowerCase()}`}>{BLOCK_LABELS[s.type]}</span>
                <span className="structure__label">{s.label}</span>
                {s.optional && <span className="pill">optional</span>}
                {s.repeatable && <span className="pill">repeats</span>}
              </div>
              {s.guidance && <p className="structure__guidance">{s.guidance}</p>}
            </li>
          ))}
        </ol>
      </section>

      {EXAMPLE_CATEGORIES.map((category) => {
        const all = template.examples.filter((e) => e.category === category);
        const visible = all.filter((e) => matches(e, query));
        const formOpenHere = adding === category;

        return (
          <section className="panel" key={category}>
            <div className="panel__head">
              <h2 className="panel__title">
                {CATEGORY_LABELS[category]} <span className="count">{all.length}</span>
              </h2>
              {!formOpenHere && (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    setEditing(null);
                    setAdding(category);
                  }}
                >
                  + Add {category === 'Paragraph' ? 'paragraph' : category}
                </button>
              )}
            </div>

            {formOpenHere && (
              <AddExampleForm
                category={category}
                initial={editing}
                onSave={handleSave}
                onCancel={() => {
                  setAdding(null);
                  setEditing(null);
                }}
              />
            )}

            {all.length === 0 && !formOpenHere && (
              <p className="empty__hint">No {category === 'Paragraph' ? 'paragraph' : category} examples yet.</p>
            )}

            {query && all.length > 0 && visible.length === 0 && (
              <p className="empty__hint">No matches for “{query}”.</p>
            )}

            <div className="snippets">
              {visible.map((e) => (
                <ExampleCard key={e.id} example={e} onDelete={onDelete} onEdit={startEdit} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
