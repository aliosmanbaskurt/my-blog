import Link from "next/link";
import React from "react";
import Image from "next/image";

import { RocketIcon, DesktopIcon, ClockIcon } from "@radix-ui/react-icons";

import getFormattedDate from "@/lib/getFormattedDate";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const bugun = new Date();

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, category, post_pic, post_truncate } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="card bg-base-100 w-86 border-2 dark:border-slate-500 shadow-xl mt-4">
      <figure>
        <div>
          <Image
            className="sm:h-[200px] h-[200px] w-full object-cover"
            src={post_pic}
            alt="Shoes"
            width={300}
            height={100}
          />
        </div>
      </figure>
      <hr />
      <div className="p-3 space-y-2 text-center py-5">
        <h2 className="card-title justify-center line-clamp-2 p-1">
          <Link className="hover:text-slate-600 " href={`/posts/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="line-clamp-3 p-0">{post_truncate}</p>
      </div>
      <div className="m-1 ">
        <Button
          className="w-3/4 sm:w-2/3 text-lg sm:text-sm rounded-xl"
          variant="outline"
        >
          <Link href={`/posts/${id}`}>Yazıyı İncele</Link>
        </Button>
      </div>
      <div className="card-actions flex flex-col justify-center items-center text-xs text-center gap-x-1 py-2 mb-2">
        <div className="badge p-4 w-3/4 sm:w-2/3 text-sm hover:text-dark">
          {category === "Kodlama" ? (
            <RocketIcon className="w-4 text-red-600 mr-2" />
          ) : (
            <DesktopIcon className="w-4 text-purple-800  mr-2" />
          )}
          {category}
        </div>
        <div className="md:block hidden font-bold mt-2">🗓️ {formattedDate}</div>
      </div>
    </div>
  );
}

/* 
<li className="mt-4 text-2xl dark:text-white ">
      <Link
        href={`/posts/${id}`}
        className="text-dark-900 no-underline font-bold hover:text-black/70 dark:hover:text-white/90
        relative text-xl sm:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
      >
        <p>{title}</p>
      </Link>

      <div className="flex mt-2 items-center">
        {category === "Kodlama" ? (
          <RocketIcon className="w-4 text-red-600" />
        ) : (
          <DesktopIcon className="w-4 text-purple-800" />
        )}
        <div className="text-sm ml-1">
          {category} | {formattedDate}
        </div>
      </div>
    </li>
*/
