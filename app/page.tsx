import Posts from "./components/Posts";
import MyProfilePic from "./components/Profile";

import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic />
      <Posts />
    </main>
  );
}
