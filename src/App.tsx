import { useMemo, useState } from 'react';
import './App.css';
import { SEED_DATA } from './data/landingPages';
import type { CopyExample, LandingPageType } from './types';
import { Sidebar } from './components/Sidebar';
import { TemplateView } from './components/TemplateView';
import {
  addUserExample,
  deleteUserExample,
  loadUserExamples,
  updateUserExample,
} from './storage';

type UserMap = Record<string, CopyExample[]>;

// Merge code-managed seed examples with the user's locally-stored ones.
function mergeData(userMap: UserMap): LandingPageType[] {
  return SEED_DATA.map((type) => ({
    ...type,
    templates: type.templates.map((tpl) => ({
      ...tpl,
      examples: [...tpl.examples, ...(userMap[tpl.id] ?? [])],
    })),
  }));
}

export default function App() {
  const [userMap, setUserMap] = useState<UserMap>(() => loadUserExamples());
  const [query, setQuery] = useState('');

  const types = useMemo(() => mergeData(userMap), [userMap]);

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

  function handleDelete(exampleId: string) {
    if (!selected) return;
    const next = deleteUserExample(selected.template.id, exampleId);
    setUserMap({ ...next });
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
              onDelete={handleDelete}
            />
          ) : (
            <p className="empty__hint">Select a template from the left to get started.</p>
          )}
        </div>
      </main>
    </div>
  );
}
