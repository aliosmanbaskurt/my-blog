// import React from "react";
// import MyProfilePic from "../components/Profile";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Check, LetterText, Mail, Play } from "lucide-react";

import Image from "next/image";
import MyProfilePic from "../components/Profile";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// type CardProps = React.ComponentProps<typeof Card>;

// const notifications = [
//   {
//     title: "Celal Bayar Üniversitesi Yazılım Mühendisliği",
//     description: "2022-2023",
//   },
//   {
//     title: "Abülhamit Han Mesleki ve Teknik Anadolu Lisesi",
//     description: "2022-2024",
//   },
//   {
//     title: "Düzce Üniversitesi Bilgisayar Öğretmenliği",
//     description: "2008-2012",
//   },
// ];
// const About = ({ className, ...props }: CardProps) => {
//   return (
//     // <div className="flex flex-col justify-center">
//     //   <MyProfilePic />

//     //   <div className="flex justify-center mt-4 ">
//     //     <Card className={cn("w-[480px] ", className)} {...props}>
//     //       <CardHeader className="text-center">
//     //         <CardTitle>Ali Osman BAŞKURT</CardTitle>
//     //         <CardDescription>Bilişim Teknolojileri Öğretmeni</CardDescription>
//     //       </CardHeader>
//     //       <CardContent className="grid gap-4">
//     //         <div className=" flex items-center space-x-4 rounded-md border p-4">
//     //           <div className="flex-1 space-y-1">
//     //             <p className="text-sm font-medium leading-none"></p>
//     //             <div className="flex items-center space-x-2">
//     //               <Play />
//     //               <p className="text-sm text-muted-foreground">
//     //                 Halen Abdülhamit Han MTAL'de görev yapmaktadır.
//     //               </p>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="space-y-2 mt-4">
//     //           {notifications.map((notification, index) => (
//     //             <div
//     //               key={index}
//     //               className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
//     //             >
//     //               <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
//     //               <div className="space-y-1">
//     //                 <p className="text-sm font-medium leading-none">
//     //                   {notification.title}
//     //                 </p>
//     //                 <p className="text-sm text-slate-400 text-muted-foreground">
//     //                   {notification.description}
//     //                 </p>
//     //               </div>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </CardContent>
//     //       <CardFooter className="flex justify-center items-center">
//     //         <Button
//     //           className=" dark:bg-white w-3/4 sm:w-2/3 rounded-xl"
//     //           variant="outline"
//     //         >
//     //           <Mail className="mr-2" />
//     //           <Link href={"mailto:aliosmanbaskurt@gmail.com"}>
//     //             Mesaj Gönder
//     //           </Link>
//     //         </Button>
//     //       </CardFooter>
//     //     </Card>
//     //   </div>
//     // </div>
//     <div>""</div>
//   );
// };

// export default About;

const About = () => {
  return (
    <div className="space-y-6">
      <MyProfilePic />
      <div className="text-center flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold">Ali Osman BAŞKURT</h1>
        <h2>👨🏼‍🏫 Bilişim Teknolojileri Öğretmeni</h2>
        <p>🏫 Halen Abdülhamit Han MTAL'de görev yapmaktadır.</p>
      </div>

      <div className="sm:flex items-center justify-center p-8 space-y-4  space-x-2 sm:space-y-0">
        <div className="h-64 border sm:w-64  rounded-xl p-2">
          <div className="border-b flex justify-center ">
            <img
              className="w-64 h-32 rounded-xl p-2"
              src="/images/cbu_yan.jpg"
              alt="image"
            />
          </div>
          <div className="text-center p-6 space-y-2 ">
            <h3 className="font-bold">
              Celal Bayar Üniversitesi Yazılım Mühendisliği
            </h3>
            <p className="text-sm italic">🗓️ 2022-2023</p>
          </div>
        </div>
        <div className="h-64 border sm:w-64  rounded-xl p-2">
          <div className="border-b flex justify-center">
            <img
              className="w-64 h-32 rounded-xl p-2"
              src="/images/duzce.png"
              alt="image"
            />
          </div>
          <div className="text-center p-6 space-y-2">
            <h3 className="font-bold">
              Düzce Üniversitesi Bilgisayar Öğretmenliği
            </h3>
            <p className="text-sm italic">🗓️ 2008-2012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
