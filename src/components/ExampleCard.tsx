import type { CopyExample } from '../types';
import { CopyButton } from './CopyButton';

interface Props {
  example: CopyExample;
  onDelete?: (id: string) => void;
  onEdit?: (example: CopyExample) => void;
}

// Renders one worked example as a plain document outline: the H1, then H2
// sections with their paragraphs indented beneath. Each block is copyable on
// hover, plus a "copy full example" action.
export function ExampleCard({ example, onDelete, onEdit }: Props) {
  const fullText = example.blocks.map((b) => b.content).join('\n\n');

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

      <div className="outline">
        {example.blocks.map((block, i) => (
          <div className={`node node--${block.type.toLowerCase()}`} key={i}>
            <div className="node__content">
              {block.type === 'H1' && <p className="node__h1">{block.content}</p>}
              {block.type === 'H2' && <p className="node__h2">{block.content}</p>}
              {block.type === 'H3' && <p className="node__h3">{block.content}</p>}
              {block.type === 'Paragraph' && <p className="node__p">{block.content}</p>}
            </div>
            <CopyButton text={block.content} className="copy-btn--ghost node__copy" />
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
