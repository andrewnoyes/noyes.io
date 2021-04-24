import React from 'react';
import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="home" description={Config.description} />}>
    <BlogGallery posts={props.posts} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug']);

  return {
    props: {
      posts,
    },
  };
};

export default Index;
