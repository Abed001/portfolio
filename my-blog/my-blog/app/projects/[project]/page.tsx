import getProject from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

type Props = {
  params: { project: string }
};



export default async function project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <header className="flex justify-evenly w-full mt-20">
        <div className="ml-40">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <div className="mt-5 mb-20 text-md text-grey-700">
            <PortableText value={project.content} />
          </div>
        </div>
        <div>
          <a
            className=" mr-40 py-2 px-5 text-gray-500 font-bold bg-slate-100 border-1 border-gray-500 rounded-full hover:bg-pink-500 hover:text-pink-100 transition"
            href={project.url}
          >
            View Project
          </a>
        </div>
      </header>

      <div className="mt-5 flex items-center justify-center flex-col w-full">
        <Image
          src={project.image}
          alt={project.name}
          width={650}
          height={100}
          className="object-cover rounded-lg border border-gray-500 mb-20"
        />
      </div>
    </div>
  );


} 