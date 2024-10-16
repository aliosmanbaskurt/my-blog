"use client";
import React from "react";
import Link from "next/link";
import { SiRobotframework } from "react-icons/si";
import { useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const { setTheme } = useTheme();
  const paths = usePathname();

  const links = [
    {
      label: "Anasayfa",
      href: "/",
    },
    {
      label: "Kodlama",
      href: "/coding",
    },
    {
      label: "Hakkında",
      href: "/about",
    },
  ];

  return (
    <nav className="top-0 flex  justify-center z-10 p-6 sm:p-8 shadow-xl">
      <div className=" flex flex-col sm:flex-row justify-between items-center gap-8 ">
        <div className="justify-center sm:flex ">
          <Link href="/">
            <h1 className="flex items-center font-bold  text-3xl sm:text-2xl gap-1">
              <SiRobotframework />
              <span className="z-10"> bilgisayar.te</span>
              <span className="-ml-1 text-slate-400 z-10">a</span>
              <span className="-ml-1 z-10">ch</span>

              <span className="-ml-1 text-slate-400  indent-0 z-5 ">er</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-row  align-middle gap-4 sm:flex sm:justify-evenly justify-center ">
          {links.map((link) => (
            <Link
              key={link.href}
              className={classNames({
                "text-neutral-500 dark:text-neutral-200 transition-all":
                  link.href === paths,
                "text-neutral-500 dark:text-": link.href !== paths,
                "text-xl dark:text-neutral-100 hover:text-neutral-400 transition-all duration-300 ":
                  true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Aydınlık
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Koyu
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Sistem
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </nav>
  );
}
