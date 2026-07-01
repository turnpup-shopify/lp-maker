import type { CopyExample } from './types';

// User-added examples are keyed by template id. Seed examples live in code;
// anything the user creates in-app is stored here in the browser.
const STORAGE_KEY = 'lp-maker.userExamples.v1';

type UserExampleMap = Record<string, CopyExample[]>;

export function loadUserExamples(): UserExampleMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UserExampleMap;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function persist(map: UserExampleMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

export function addUserExample(templateId: string, example: CopyExample): UserExampleMap {
  const map = loadUserExamples();
  const list = map[templateId] ? [...map[templateId]] : [];
  list.push({ ...example, userAdded: true });
  map[templateId] = list;
  persist(map);
  return map;
}

export function updateUserExample(templateId: string, example: CopyExample): UserExampleMap {
  const map = loadUserExamples();
  const list = (map[templateId] ?? []).map((e) => (e.id === example.id ? { ...example, userAdded: true } : e));
  map[templateId] = list;
  persist(map);
  return map;
}

export function deleteUserExample(templateId: string, exampleId: string): UserExampleMap {
  const map = loadUserExamples();
  map[templateId] = (map[templateId] ?? []).filter((e) => e.id !== exampleId);
  persist(map);
  return map;
}

// Simple unique id without external deps.
export function makeId(prefix = 'ex'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${rand}`;
}
