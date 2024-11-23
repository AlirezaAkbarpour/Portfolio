import Image from "next/image";

export default function ProjectItem({getEditedItem}:any) {
  return (
    <section className="w-full h-80 bg-white rounded-xl 
        hover:shadow-md hover:shadow-slate-100 transition-all
        hover:cursor-pointer hover:opacity-80
        " >
        <div className="w-full h-8 py-2 text-zinc-500 flex justify-end px-2 " onClick={getEditedItem}>Edit</div>
        <div className="w-full h-52 flex justify-center ">
        </div>
        <div className="w-full">
            <h1 className="text-2xl h-10 text-black font-semibold px-2">Project 01</h1>
            <div className="w-full flex justify-between px-2 text-zinc-600 font-medium">
                <p className="text-sm">Last Update :</p>
                <data className="text-sm">2022/01/01</data>
            </div>
        </div>
    </section>
  )
}
