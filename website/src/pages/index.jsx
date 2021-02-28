import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'What are ESLint and TypeScript, and how do they compare?',
    description: (
      <>
        <p>
          <b>ESLint</b> is an awesome linter for JavaScript code.
        </p>
        <p>
          - Behind the scenes, it uses a parser to turn your source code into a
          data format called an Abstract Syntax Tree (AST). This data format is
          then used by plugins to create assertions called lint rules around
          what your code should look or behave like.
        </p>
        <p>
          <b>TypeScript</b> is an awesome static code analyzer for JavaScript
          code, and some additional syntax that it provides on top of the
          underlying JavaScript language.
        </p>
        <p>
          - Behind the scenes, it uses a parser to turn your source code into a
          data format called an Abstract Syntax Tree (AST). This data format is
          then used by other parts of the TypeScript Compiler to do things like
          give you feedback on issues, allow you to refactor easily, etc.
        </p>
        <p>
          They sound similar, right? They are! Both projects are ultimately
          striving to help you write the best JavaScript code you possibly can.
        </p>
      </>
    ),
  },
  {
    title: 'Why does this project exist?',
    description: (
      <>
        <p>
          As covered by the previous section, both ESLint and TypeScript rely on
          turning your source code into a data format called an AST in order to
          do their jobs.
        </p>
        <p>
          However, it turns out that ESLint and TypeScript use different ASTs to
          each other.
        </p>
        <p>
          The reason for this difference is not so interesting or important and
          is simply the result of different evolutions, priorities, and
          timelines of the projects.
        </p>
        <p>
          This project, <code>typescript-eslint</code>, exists primarily because
          of this major difference between the projects.
        </p>
        <p>
          <code>typescript-eslint</code> exists so that you can use ESLint and
          TypeScript together, without needing to worry about implementation
          detail differences wherever possible.
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--12">
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Sponsors({ tier }) {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const tierSponsors = siteConfig.customFields.sponsors.filter(
    sponsor => sponsor.tier === tier,
  );
  return (
    <div>
      <ul className={clsx(styles[`tier-${tier}`], styles.sponsorsTier)}>
        {tierSponsors.map((sponsor, i) => (
          <li key={i}>
            <a
              href={sponsor.website}
              title={sponsor.name}
              target="_blank"
              rel="noopener sponsored"
            >
              <img src={sponsor.image} alt={`Sponsored by ${sponsor.name}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--dark', styles.hero)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className="button button--secondary button--outline"
              to={useBaseUrl('repl/')}
            >
              Playground
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.sponsors}>
          <div className="container">
            <h2>Financial Contributors</h2>
            <Sponsors title="Sponsors" tier="sponsor" />
            <Sponsors title="Supporter" tier="supporter" />
            <Link
              className="button button--info button--outline"
              to="https://opencollective.com/typescript-eslint/contribute"
              target="_blank"
            >
              Become a sponsor
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
