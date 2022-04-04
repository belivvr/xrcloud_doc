import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta property="og:image" content="image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://developers.belivvr.com/" />
        <meta property="og:title" content="XR Cloud Guidebook - When you want to create a WebXR metaverse, look to XR Cloud" />
        <meta property="og:description" content="A cloud service, web developer, creator, company, or organization anyone who wants to create a metaverse internet service is looking for WebXR Metaverse is XRCloud!" />
        <meta property="og:keyword" content="Metaverse, Cloud, WebXR, Mozilla Hub, Open Source, Avatar" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
