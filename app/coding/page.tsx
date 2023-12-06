import React from "react";
import Image from "next/image";

function Coding() {
  return (
    <div className="grid h-full items-center mx-auto justify-center mt-6 prose prose-xl dark:text-white">
      <div className="justify-center flex">
        <Image alt="code" src="/images/coding.png" width={800} height={800} />
      </div>

      <div className="flex justify-center items-center mt-8">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          optio incidunt aliquam molestiae sunt, tenetur tempore, ea nobis quos
          deserunt voluptatibus non at voluptas consequuntur nesciunt facere
          excepturi corporis perspiciatis minus hic quibusdam aperiam tempora!
          Illo natus nemo, minima id quia quae sunt sapiente, voluptates velit a
          nulla, illum sed.
        </p>
      </div>
    </div>
  );
}

export default Coding;
