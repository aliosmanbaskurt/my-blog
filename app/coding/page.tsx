import React from "react";
import Image from "next/image";

function Coding() {
  return (
    <div className="grid h-full items-center mx-auto justify-center mt-6 prose prose-xl ">
      <div className="justify-center flex">
        <Image alt="code" src="/images/coding.png" width={800} height={800} />
      </div>

      <div className="flex justify-center items-center mt-8">
        <p className="text-center">Yapım Aşamasında...</p>
      </div>
    </div>
  );
}

export default Coding;
