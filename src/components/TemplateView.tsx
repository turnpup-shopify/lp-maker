import { useState } from 'react';
import { BLOCK_LABELS } from '../types';
import type { CopyExample, Template } from '../types';
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
  const hay = [example.title, example.source, example.notes, ...example.blocks.map((b) => b.content)]
    .join(' ')
    .toLowerCase();
  return hay.includes(q.toLowerCase());
}

export function TemplateView({ template, typeName, query, onSave, onDelete }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<CopyExample | null>(null);

  const visibleExamples = template.examples.filter((e) => matches(e, query));

  function handleSave(example: CopyExample) {
    onSave(example);
    setShowForm(false);
    setEditing(null);
  }

  function startEdit(example: CopyExample) {
    setEditing(example);
    setShowForm(true);
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

      <section className="panel">
        <div className="panel__head">
          <h2 className="panel__title">
            Approved examples <span className="count">{template.examples.length}</span>
          </h2>
          {!showForm && (
            <button type="button" className="btn btn--primary" onClick={() => { setEditing(null); setShowForm(true); }}>
              + Add example
            </button>
          )}
        </div>

        {showForm && (
          <AddExampleForm
            template={template}
            initial={editing}
            onSave={handleSave}
            onCancel={() => { setShowForm(false); setEditing(null); }}
          />
        )}

        {template.examples.length === 0 && !showForm && (
          <div className="empty">
            <p>No examples yet for this template.</p>
            <p className="empty__hint">Add your first approved example to start the library.</p>
          </div>
        )}

        {query && visibleExamples.length === 0 && template.examples.length > 0 && (
          <p className="empty__hint">No examples match “{query}”.</p>
        )}

        <div className="examples">
          {visibleExamples.map((ex) => (
            <ExampleCard key={ex.id} example={ex} onDelete={onDelete} onEdit={startEdit} />
          ))}
        </div>
      </section>
    </div>
  );
}
