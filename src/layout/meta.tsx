import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { config } from '../utils/config';
import { addTrailingSlash } from '../utils/url';

type IMetaProps = {
  title?: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  const getTitle = () => {
    if (!props.title) {
      return config.site_name;
    }

    return `${props.title} | ${config.site_name}`;
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="apple-touch-icon"
          href={`${process.env.baseUrl}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.baseUrl}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.baseUrl}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${process.env.baseUrl}/favicon.svg`} key="favicon" />
        <title>{getTitle()}</title>
        <meta
          name="description"
          content={props.description ? props.description : config.description}
          key="description"
        />
        <meta name="author" content={config.author} key="author" />
        {props.canonical && <link rel="canonical" href={props.canonical} key="canonical" />}
        <meta property="og:title" content={`${props.title} | ${config.site_name}`} key="og:title" />
        <meta
          property="og:description"
          content={props.description ? props.description : config.description}
          key="og:description"
        />
        <meta property="og:locale" content={config.locale} key="og:locale" />
        <meta property="og:site_name" content={config.site_name} key="og:site_name" />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta
              property="og:image"
              content={`${config.url}${process.env.baseUrl}${props.post.image}`}
              key="og:image"
            />
            <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
            <meta
              property="article:published_time"
              content={new Date(props.post.date).toISOString()}
              key="article:published_time"
            />
            <meta
              property="article:modified_time"
              content={new Date(props.post.modified_date).toISOString()}
              key="article:modified_time"
            />
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description ? props.description : config.description}",
            "author": {
              "@type": "Person",
              "name": "${config.author}"
            },
            "@type": "BlogPosting",
            "url": "${config.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${config.url}${process.env.baseUrl}/assets/images/logo.png"
              },
              "name": "${config.author}"
            },
            "headline": "${props.title} | ${config.site_name}",
            "image": ["${config.url}${process.env.baseUrl}${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${config.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
      </Head>
    </>
  );
};

export { Meta };
