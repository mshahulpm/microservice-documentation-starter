import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import styles from './index.module.css';

const sections = [
  {
    title: 'Introduction',
    to: '/docs/introduction/overview',
    description: 'Purpose of this portal, business context, and glossary.',
  },
  {
    title: 'Architecture',
    to: '/docs/architecture/system-context',
    description: 'Platform-level system context, communication, and security.',
  },
  {
    title: 'Services',
    to: '/docs/services/example-service/overview',
    description: 'Service-owned documentation, starting from the example service.',
  },
  {
    title: 'Communication',
    to: '/docs/communication/rest',
    description: 'REST, messaging, events, retries, and error handling standards.',
  },
  {
    title: 'Operations',
    to: '/docs/operations/environments',
    description: 'Environments, deployment, monitoring, logging, and troubleshooting.',
  },
  {
    title: 'Templates',
    to: '/docs/templates/microservice-template',
    description: 'Copy-paste boilerplates for services, flows, APIs, and ADRs.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/overview">
            Browse documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionCard({title, to, description}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card padding--lg', styles.card)}>
        <Heading as="h3">
          <Link to={to}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              {sections.map((section) => (
                <SectionCard key={section.title} {...section} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
