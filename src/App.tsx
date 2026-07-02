import { useMemo, useState } from 'react';
import './App.css';
import { SEED_DATA } from './data/landingPages';
import type { CopyExample, LandingPageType } from './types';
import { Sidebar } from './components/Sidebar';
import { TemplateView } from './components/TemplateView';
import { ConfirmModal } from './components/ConfirmModal';
import {
  addDeletedSeed,
  addUserExample,
  deleteUserExample,
  loadDeletedSeed,
  loadUserExamples,
  updateUserExample,
} from './storage';

type UserMap = Record<string, CopyExample[]>;

// Merge code-managed seed examples with the user's locally-stored ones,
// dropping any seed examples the user has deleted.
function mergeData(userMap: UserMap, deletedSeed: string[]): LandingPageType[] {
  const deleted = new Set(deletedSeed);
  return SEED_DATA.map((type) => ({
    ...type,
    templates: type.templates.map((tpl) => ({
      ...tpl,
      examples: [...tpl.examples.filter((e) => !deleted.has(e.id)), ...(userMap[tpl.id] ?? [])],
    })),
  }));
}

export default function App() {
  const [userMap, setUserMap] = useState<UserMap>(() => loadUserExamples());
  const [deletedSeed, setDeletedSeed] = useState<string[]>(() => loadDeletedSeed());
  const [query, setQuery] = useState('');
  const [pendingDelete, setPendingDelete] = useState<CopyExample | null>(null);

  const types = useMemo(() => mergeData(userMap, deletedSeed), [userMap, deletedSeed]);

  const firstTemplateId = types[0]?.templates[0]?.id ?? null;
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(firstTemplateId);

  const selected = useMemo(() => {
    for (const type of types) {
      const tpl = type.templates.find((t) => t.id === selectedTemplateId);
      if (tpl) return { type, template: tpl };
    }
    return null;
  }, [types, selectedTemplateId]);

  function handleSave(example: CopyExample) {
    if (!selected) return;
    const existing = userMap[selected.template.id]?.some((e) => e.id === example.id);
    const next = existing
      ? updateUserExample(selected.template.id, example)
      : addUserExample(selected.template.id, example);
    setUserMap({ ...next });
  }

  // Deletion is confirmed via a modal first.
  function confirmDelete() {
    if (!selected || !pendingDelete) return;
    if (pendingDelete.userAdded) {
      const next = deleteUserExample(selected.template.id, pendingDelete.id);
      setUserMap({ ...next });
    } else {
      setDeletedSeed([...addDeletedSeed(pendingDelete.id)]);
    }
    setPendingDelete(null);
  }

  return (
    <div className="app">
      <Sidebar
        types={types}
        selectedTemplateId={selectedTemplateId}
        onSelect={(_typeId, templateId) => setSelectedTemplateId(templateId)}
      />

      <main className="main">
        <div className="topbar">
          <input
            className="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search copy in this template…"
          />
        </div>

        <div className="main__scroll">
          {selected ? (
            <TemplateView
              template={selected.template}
              typeName={selected.type.name}
              query={query}
              onSave={handleSave}
              onDelete={(example) => setPendingDelete(example)}
            />
          ) : (
            <p className="empty__hint">Select a template from the left to get started.</p>
          )}
        </div>
      </main>

      {pendingDelete && (
        <ConfirmModal
          title="Delete this example?"
          message="This removes it from your copy library. This can’t be undone."
          preview={pendingDelete.content}
          onConfirm={confirmDelete}
          onCancel={() => setPendingDelete(null)}
        />
      )}
    </div>
  );
}
