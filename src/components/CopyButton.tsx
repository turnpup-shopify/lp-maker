import { useState } from 'react';

interface Props {
  text: string;
  label?: string;
  className?: string;
}

// Small button that copies text to the clipboard and briefly confirms.
export function CopyButton({ text, label = 'Copy', className = '' }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for environments without the async clipboard API.
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button type="button" className={`copy-btn ${className}`} onClick={handleCopy} aria-label={label}>
      {copied ? '✓ Copied' : label}
    </button>
  );
}
