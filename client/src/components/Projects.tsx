import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-8 py-24 border-b border-black bg-white">
      <div className="mb-16 font-mono text-sm uppercase">
        ( Selected Works )
      </div>

      <div className="space-y-0">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative border-t border-black py-12 md:py-16 transition-colors hover:bg-black hover:text-white cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 font-mono text-xl md:text-2xl">
                  {project.id}
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-2">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs uppercase opacity-60">
                    {project.category}
                  </span>
                </div>
                <div className="md:col-span-3 text-sm md:text-base font-mono opacity-80 max-w-xs">
                  {project.desc}
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Hover Image Reveal */}
              <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-64 h-40 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10 bg-white border border-black p-1">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale contrast-125" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="border-t border-black" />
    </section>
  );
}
