import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-4 md:top-16 lg:ml-14">
            <Image
              // src={urlFor(data.image1).url()}
              src={"/HeroImages/100.jpg"}

              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={400}
              height={400}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              // src={urlFor(data.image2).url()}
              src={"/HeroImages/101.jpg"}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={800}
              height={800}
              priority
            />
          </div>

          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-8 md:top-36">
            <Image
              // src={urlFor(data.image2).url()}
              src={"/HeroImages/102.jpg"}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-900 font-semibold transition duration-100 hover:bg-blue-400 active:bg-gray-200"
          >
            Men
          </Link>

          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-900 font-semibold transition duration-100 hover:bg-gray-400 active:bg-gray-200"
          >
            Women
          </Link>

          <Link
            href="/Teen"
            className="flex w-1/3 items-center justify-center text-gray-900 font-semibold transition duration-100 hover:bg-pink-400 active:bg-gray-200"
          >
            Teen
          </Link>

        </div>
      </div>
    </section>
  );
}