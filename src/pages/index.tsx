import React from 'react';
import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/blog-gallery';
import { Meta } from '../layout/meta';
import { Main } from '../templates/main';
import { config } from '../utils/config';
import { getAllPosts } from '../utils/content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta description={config.description} />}>
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
