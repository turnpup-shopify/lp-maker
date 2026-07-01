import { BLOCK_LABELS } from '../types';
import type { CopyExample } from '../types';
import { CopyButton } from './CopyButton';

interface Props {
  example: CopyExample;
  onDelete?: (id: string) => void;
  onEdit?: (example: CopyExample) => void;
}

// Renders one worked example as a stack of labelled copy blocks, each
// individually copyable, plus a "copy full example" action.
export function ExampleCard({ example, onDelete, onEdit }: Props) {
  const fullText = example.blocks
    .map((b) => `${b.label ?? BLOCK_LABELS[b.type]}\n${b.content}`)
    .join('\n\n');

  return (
    <article className="example-card">
      <header className="example-card__head">
        <div>
          <h3 className="example-card__title">{example.title}</h3>
          {example.source && <p className="example-card__source">{example.source}</p>}
        </div>
        <div className="example-card__badges">
          {example.approved && <span className="badge badge--approved">Approved</span>}
          {example.userAdded && <span className="badge badge--yours">Yours</span>}
        </div>
      </header>

      {example.notes && <p className="example-card__notes">{example.notes}</p>}

      <div className="blocks">
        {example.blocks.map((block, i) => (
          <div className="block" key={i}>
            <div className="block__meta">
              <span className={`block__tag block__tag--${block.type.toLowerCase()}`}>
                {block.label ?? BLOCK_LABELS[block.type]}
              </span>
              <CopyButton text={block.content} className="copy-btn--ghost" />
            </div>
            <p className="block__content">{block.content}</p>
          </div>
        ))}
      </div>

      <footer className="example-card__foot">
        <CopyButton text={fullText} label="Copy full example" />
        {onEdit && example.userAdded && (
          <button type="button" className="text-btn" onClick={() => onEdit(example)}>
            Edit
          </button>
        )}
        {onDelete && example.userAdded && (
          <button type="button" className="text-btn text-btn--danger" onClick={() => onDelete(example.id)}>
            Delete
          </button>
        )}
      </footer>
    </article>
  );
}
