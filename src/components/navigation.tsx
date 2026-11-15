import { ArrowDownIcon, ListIcon } from "@phosphor-icons/react/ssr";
import { profile } from "@/data/portfolio";

const navigation = ["Projects", "Experience", "About", "Skills", "Contact"];

export function Navigation() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav-shell">
        <a className="skip-link" href="#top">Skip to content</a>
        <a href="#top" className="brand" aria-label={`${profile.brand}, Mohamed Khaled, home`}>{profile.brand}</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="btn btn--primary nav-resume" href={profile.resume} download>
          Download Resume <ArrowDownIcon size={18} weight="regular" aria-hidden="true" />
        </a>
        <details className="mobile-navigation">
          <summary aria-label="Open navigation menu" aria-controls="mobile-menu"><ListIcon size={26} weight="regular" aria-hidden="true" /><span>Menu</span></summary>
          <nav id="mobile-menu" className="mobile-sheet" aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
            <a href={profile.resume} download>Download Resume <ArrowDownIcon size={20} aria-hidden="true" /></a>
          </nav>
        </details>
      </div>
    </header>
  );
}
