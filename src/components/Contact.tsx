import { portfolio } from '../content/portfolio';
import { externalLink } from '../lib/links';
import { CvLink } from './CvLink';
import { MailIcon } from './Icons';
import './Contact.css';

export function Contact() {
  const { contact } = portfolio;
  const rows: { term: string; label: string; href?: string; external?: boolean }[] = [
    { term: 'Location', label: contact.location },
    { term: 'Email', href: `mailto:${contact.email}`, label: contact.email },
    { term: 'LinkedIn', ...contact.linkedin, external: true },
    { term: 'GitHub', ...contact.github, external: true },
    { term: 'WhatsApp', ...contact.whatsapp, external: true },
  ];

  return (
    <section id="contact" className="container section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>

      <div className="contact__layout">
        <div className="contact__intro">
          <p className="contact__text">{contact.intro}</p>
          <div className="contact__actions">
            <a className="btn btn--primary btn--block-mobile" href={`mailto:${contact.email}`}>
              <MailIcon />
              Email me
            </a>
            <CvLink className="btn btn--secondary btn--block-mobile" />
          </div>
        </div>

        <dl className="contact__list">
          {rows.map((row) => (
            <div key={row.term} className="contact__row">
              <dt>{row.term}</dt>
              <dd>
                {row.href ? (
                  <a className="text-link contact__link" href={row.href} {...(row.external ? externalLink : {})}>
                    {row.label}
                  </a>
                ) : (
                  <span className="contact__text-value">{row.label}</span>
                )}
              </dd>
            </div>
          ))}
          <div className="contact__row only-desktop">
            <dt>CV</dt>
            <dd>
              <CvLink className="text-link contact__link">Download PDF</CvLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
