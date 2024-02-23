import Link from "next/link";
import React from "react";

import { RocketIcon, DesktopIcon, ClockIcon } from "@radix-ui/react-icons";

import getFormattedDate from "@/lib/getFormattedDate";

const bugun = new Date();

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, category } = post;
  const formattedDate = getFormattedDate(date);

  return (
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
  );
}
