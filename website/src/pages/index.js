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
        <meta property="og:title" content="XR클라우드 가이드북 -  WebXR 메타버스를 만들때는 XR클라우드" />
        <meta property="og:description" content=" 메타버스 인터넷 서비스를 만들고 싶을 때, 찾는 클라우드 서비스, 웹 개발자, 창작자, 기업, 기관 누구나 WebXR 메타버스는 XRCloud!" />
        <meta property="og:keyword" content="메타버스, 클라우드, WebXR, 모질라허브, 오픈소스, 아바타" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
