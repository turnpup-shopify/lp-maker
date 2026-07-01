import type { LandingPageType } from '../types';

interface Props {
  types: LandingPageType[];
  selectedTemplateId: string | null;
  onSelect: (typeId: string, templateId: string) => void;
}

// Collapsible tree: landing page types → their templates.
export function Sidebar({ types, selectedTemplateId, onSelect }: Props) {
  return (
    <nav className="sidebar" aria-label="Landing page types">
      <div className="sidebar__brand">
        <span className="sidebar__logo">LP</span>
        <div>
          <p className="sidebar__name">LP Maker</p>
          <p className="sidebar__tag">Approved copy library</p>
        </div>
      </div>

      <div className="sidebar__scroll">
        {types.map((type) => (
          <div className="nav-group" key={type.id}>
            <p className="nav-group__title">{type.name}</p>
            <ul className="nav-group__list">
              {type.templates.map((tpl) => {
                const active = tpl.id === selectedTemplateId;
                return (
                  <li key={tpl.id}>
                    <button
                      type="button"
                      className={`nav-item ${active ? 'nav-item--active' : ''}`}
                      onClick={() => onSelect(type.id, tpl.id)}
                    >
                      <span className="nav-item__name">{tpl.name}</span>
                      <span className="nav-item__count">{tpl.examples.length}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
