import React from "react";
import Head from "next/head";
import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import {
  Button,
  Card,
  Text,
  Box,
  Flex,
  Avatar,
  Separator,
} from "@radix-ui/themes";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();

  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  const {
    title,
    date,
    category,
    author,
    author_title,
    author_pic,
    contentHtml,
  } = await getPostData(postId);
  const formattedDate = getFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto mt-10">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-2 text-sm">
        <span className="font-bold mr-2">#{category} </span>
        {formattedDate}
      </p>
      <Separator my="3" size="4" />
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Separator my="3" size="4" />
        <div className="">
          <Card size="2" style={{ maxWidth: 340 }} className="mb-4 mt-4">
            <Flex gap="3" align="center">
              <Avatar size="3" src={author_pic} radius="full" fallback="T" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  {author}
                </Text>
                <Text as="div" size="2" color="gray">
                  {author_title}
                </Text>
              </Box>
            </Flex>
          </Card>
        </div>
        <div className="mb-8">
          <Button variant="outline">
            <Link href="/" className="flex items-center no-underline">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Anasayfa
            </Link>
          </Button>
        </div>
      </article>
    </main>
  );
}
