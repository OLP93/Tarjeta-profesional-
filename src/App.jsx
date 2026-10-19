import { useEffect, useState } from 'react'
import { CONTENT, CONTACT, NAME, PROJECT_LINKS } from './content.js'

const STORAGE_KEY = 'tarjeta-idioma'

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // Sin acceso al almacenamiento del navegador: se usa el idioma del dispositivo.
  }
  const device = (navigator.language || 'es').toLowerCase()
  return device.startsWith('en') ? 'en' : 'es'
}

function isExternal(href) {
  return /^https?:\/\//i.test(href)
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const t = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.htmlTitle
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Sin acceso al almacenamiento: la elección solo dura esta visita.
    }
  }, [lang, t])

  const contactItems = [
    { key: 'email', ...CONTACT.email },
    { key: 'github', ...CONTACT.github },
  ]

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>

      <header className="site-bar">
        <div className="container">
          <div className="topbar">
            <span className="brand">{NAME}</span>
            <div className="lang" role="group" aria-label={t.langLabel}>
              <button
                type="button"
                onClick={() => setLang('es')}
                aria-pressed={lang === 'es'}
                lang="es"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                lang="en"
              >
                EN
              </button>
            </div>
          </div>

          <nav className="nav" aria-label={t.navLabel}>
            <a href="#sobre-mi">{t.nav.about}</a>
            <a href="#que-hago">{t.nav.what}</a>
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#como-trabajo">{t.nav.how}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="t-hero">
          <div className="container">
            <div className="hero-body">
              <p className="eyebrow">{t.hero.role}</p>
              <h1 id="t-hero">{NAME}</h1>
              <p className="hero-line">{t.hero.line}</p>
              <a className="button" href="#contacto">
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section" aria-labelledby="t-about">
          <div className="container narrow">
            <h2 id="t-about">{t.about.title}</h2>
            <p className="lead">{t.about.text}</p>
          </div>
        </section>

        <section id="que-hago" className="section alt" aria-labelledby="t-what">
          <div className="container">
            <h2 id="t-what">{t.what.title}</h2>
            <ul className="grid">
              {t.what.items.map((item) => (
                <li key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proyectos" className="section" aria-labelledby="t-projects">
          <div className="container">
            <h2 id="t-projects">{t.projects.title}</h2>
            <ul className="grid projects">
              {t.projects.items.map((item) => {
                const href = PROJECT_LINKS[item.id]
                return (
                  <li key={item.id} className="card project">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <ul className="tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    {href ? (
                      <a
                        className="text-link"
                        href={href}
                        {...(isExternal(href)
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {t.projects.linkLabel} →
                      </a>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section id="como-trabajo" className="section alt" aria-labelledby="t-how">
          <div className="container">
            <h2 id="t-how">{t.how.title}</h2>
            <ol className="steps">
              {t.how.steps.map((step, index) => (
                <li key={step.title} className="step">
                  <span className="step-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacto" className="section contact" aria-labelledby="t-contact">
          <div className="container narrow">
            <h2 id="t-contact">{t.contact.title}</h2>
            <p className="lead">{t.contact.text}</p>
            <ul className="contact-list">
              {contactItems.map((item) => (
                <li key={item.key}>
                  <span className="contact-label">{t.contact.labels[item.key]}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(isExternal(item.href)
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="marker">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {NAME} · {t.footer}
          </p>
        </div>
      </footer>
    </>
  )
}
