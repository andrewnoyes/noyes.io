import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { PostItems } from '../utils/content';

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul className="my-2">
      {props.posts.map((post) => (
        <li key={post.slug} className="mb-3">
          <span className="text-xs text-gray-400">{format(new Date(post.date), 'LLL d, yyyy')}</span>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
          <p className="m-0">{post.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export { BlogGallery };
