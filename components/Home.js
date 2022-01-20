import {
  AdjustmentsIcon,
  CodeIcon,
  CursorClickIcon,
  DuplicateIcon,
  EyeIcon,
  LightningBoltIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import copy from 'copy-to-clipboard';
import Head from 'next/head';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Container from './Container';
import Vercel from './Vercel';

const features = [
  {
    name: 'Lightweight',
    description: `We use a Lightweight, Responsive RESTful API for all POST and GET Requests.`,
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Performance',
    description: `Our API is Made with and Backed by a Powerful, Blazing Fast Fastify Server.`,
    icon: LightningBoltIcon,
  },
  {
    name: 'Reliable Support',
    description: `We put our Users first and ensure you get the best treatment possible while guiding you through your issues`,
    icon: EyeIcon,
  },
  {
    name: 'Sensible API',
    description: `Our API is simple to use and provides Error Messages and Responses that even a monkey could understand 😏`,
    icon: CodeIcon,
  },
  {
    name: 'Developer Friendly',
    description: `We Encourage and Support all User/Developer based Contributions. Whether it be making us a Library or anything of the sort!`,
    icon: CursorClickIcon,
  },
  {
    name: 'Extremely Extensible',
    description: `You can use our API to build the most complex features. Such as: Vote Logs, Vote Rewards and so much more.`,
    icon: AdjustmentsIcon,
  },
];

export default function Page() {
  const onClick = () => {
    copy('npm install million');
    toast.success('Copied to clipboard');
  };
  return (
    <>
      <Head>
        <title>Infinity</title>
      </Head>
      <div className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 dark:text-white ">
        <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-8xl lg:text-9xl xl:text-9xl">
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            INFINITY DOCS.
          </span>{' '}
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          Official Documentation for the Infinity Bot List Website, Discord
          Server and Companion API
        </p>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link href="/docs/api/about">
              <a className="flex items-center justify-center w-full px-8 py-3 font-mono text-base no-underline font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-white dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-color1 md:py-3 md:text-base md:leading-6 md:px-10">
                → Get started
              </a>
            </Link>
          </div>

          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <Link href="https://infinitybots.gg/discord">
              <a className="flex items-center justify-center w-full px-8 py-3 font-mono text-base no-underline font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-white dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-color2 md:py-3 md:text-base md:leading-6 md:px-10">
                → Get Support
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <p className="text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl lg:text-center dark:text-white">
          Infinity API!
        </p>
        <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
          Our API is designed to be modern and easy to use while being lean,
          responsive and insanely performant!
        </p>
        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {features.map((feature) => (
            <div
              className="p-10 w-auto bg-white shadow-lg rounded-xl dark:bg-opacity-5 "
              key={feature.name}
            >
              <div>
                <feature.icon
                  className="h-8 w-8 dark:text-white rounded-full p-1.5 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-5 text-black"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
