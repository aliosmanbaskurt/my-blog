import Link from "next/link";
import React from "react";

import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, category } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl">
      <Link
        href={`/posts/${id}`}
        className="text-dark-900 no-underline hover:text-black/70
        relative text-xl sm:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        {title}
      </Link>

      <p className="text-sm mt-2">{formattedDate}</p>
    </li>
  );
}
