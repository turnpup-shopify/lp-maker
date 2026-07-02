import type { CopyExample } from '../types';
import { CopyButton } from './CopyButton';

interface Props {
  example: CopyExample;
  onDelete?: (id: string) => void;
  onEdit?: (example: CopyExample) => void;
}

// One approved-copy snippet within a category bucket.
export function ExampleCard({ example, onDelete, onEdit }: Props) {
  const isHeading = example.category !== 'Paragraph';

  return (
    <article className="snippet">
      <div className="snippet__body">
        <p className={isHeading ? 'snippet__heading' : 'snippet__para'}>{example.content}</p>
        {(example.source || example.notes) && (
          <p className="snippet__meta">
            {example.source && <span>{example.source}</span>}
            {example.source && example.notes && <span className="snippet__dot">·</span>}
            {example.notes && <span className="snippet__notes">{example.notes}</span>}
          </p>
        )}
      </div>

      <div className="snippet__actions">
        {example.userAdded && <span className="badge badge--yours">Yours</span>}
        <CopyButton text={example.content} className="copy-btn--ghost" />
        {onEdit && example.userAdded && (
          <button type="button" className="icon-btn" title="Edit" aria-label="Edit" onClick={() => onEdit(example)}>
            ✎
          </button>
        )}
        {onDelete && example.userAdded && (
          <button
            type="button"
            className="icon-btn icon-btn--danger"
            title="Delete"
            aria-label="Delete"
            onClick={() => onDelete(example.id)}
          >
            ✕
          </button>
        )}
      </div>
    </article>
  );
}
