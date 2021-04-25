import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/navbar';
import { config } from '../utils/config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full ">
    {props.meta}

    <div className="max-w-screen-md mx-auto p-4">
      <div className="border-b border-gray-500">
        <div className="pb-4 site-title">
          <Link href="/">
            <a className="font-semibold text-2xl text-white">{config.title}</a>
          </Link>
          {/* <div className="text-md text-gray-200">{config.description}</div> */}
        </div>
        <div>
          <Navbar>
            <li className="mr-4">
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/projects/">
                <a>projects</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/about/">
                <a>about</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="py-5">{props.children}</div>
    </div>

    <style jsx>
      {`
        .site-title :global(a:hover) {
          @apply no-underline;
        }

        .site-title :global(a:hover) {
          @apply no-underline;
        }
      `}
    </style>
  </div>
);

export { Main };
