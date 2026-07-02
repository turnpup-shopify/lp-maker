import { useEffect } from 'react';

interface Props {
  title: string;
  message?: string;
  preview?: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// A small centered confirmation dialog with a dimmed backdrop.
export function ConfirmModal({ title, message, preview, confirmLabel = 'Delete', onConfirm, onCancel }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onCancel();
      if (e.key === 'Enter') onConfirm();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onCancel, onConfirm]);

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__title">{title}</h3>
        {message && <p className="modal__message">{message}</p>}
        {preview && <p className="modal__preview">“{preview}”</p>}
        <div className="modal__actions">
          <button type="button" className="btn" onClick={onCancel} autoFocus>
            Cancel
          </button>
          <button type="button" className="btn btn--danger" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
