import { useRoute } from "wouter";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function ProjectDetail() {
    const [match, params] = useRoute("/project/:id");
    const project = projects.find((p) => p.id === params?.id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!match || !project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-mono mb-4">PROJECT NOT FOUND</h1>
                    <Link href="/">
                        <a className="text-sm border-b border-white pb-1 hover:opacity-70 transition-opacity">
                            RETURN HOME
                        </a>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
            <Navbar />

            <main className="pt-32">
                <div className="px-6 md:px-8 mb-12">
                    <Link href="/">
                        <a className="inline-flex items-center gap-2 font-mono text-sm opacity-60 hover:opacity-100 transition-opacity mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            BACK TO SELECTED WORKS
                        </a>
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-8">
                            <h1 className="text-[6vw] leading-[0.9] font-medium tracking-tighter mb-6">
                                {project.title.toUpperCase()}
                            </h1>
                        </div>
                        <div className="md:col-span-4 flex flex-col justify-end pb-2">
                            <div className="font-mono text-sm border-t border-black pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="opacity-50 block text-xs mb-1">CATEGORY</span>
                                        {project.category}
                                    </div>
                                    <div>
                                        <span className="opacity-50 block text-xs mb-1">YEAR</span>
                                        2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full aspect-video bg-gray-100 mb-16 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-4">
                        <h3 className="font-mono text-sm uppercase mb-6">( Project Overview )</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, i) => (
                                <span key={i} className="px-3 py-1 border border-black/20 rounded-full text-xs font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl md:text-2xl font-light leading-relaxed">
                            {project.fullDesc}
                        </p>
                    </div>
                </div>

                <Contact />
            </main>
        </div>
    );
}
