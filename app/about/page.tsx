import React from "react";
import MyProfilePic from "../components/Profile";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, LetterText, Mail, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
type CardProps = React.ComponentProps<typeof Card>;

const notifications = [
  {
    title: "Celal Bayar Üniversitesi Yazılım Mühendisliği",
    description: "2022-2023",
  },
  {
    title: "Abülhamit Han Mesleki ve Teknik Anadolu Lisesi",
    description: "2022-2024",
  },
  {
    title: "Düzce Üniversitesi Bilgisayar Öğretmenliği",
    description: "2008-2012",
  },
];
function About({ className, ...props }: CardProps) {
  return (
    <div className="flex flex-col justify-center">
      <MyProfilePic />

      <div className="flex justify-center mt-4 ">
        <Card className={cn("w-[480px] ", className)} {...props}>
          <CardHeader className="text-center">
            <CardTitle>Ali Osman BAŞKURT</CardTitle>
            <CardDescription>Bilişim Teknolojileri Öğretmeni</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none"></p>
                <div className="flex items-center space-x-2">
                  <Play />
                  <p className="text-sm text-muted-foreground">
                    Halen Abdülhamit Han MTAL'de görev yapmaktadır.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-slate-400 text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button
              className=" dark:bg-white w-3/4 sm:w-2/3 rounded-xl"
              variant="outline"
            >
              <Mail className="mr-2" />
              <Link href={"mailto:aliosmanbaskurt@gmail.com"}>
                Mesaj Gönder
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default About;
