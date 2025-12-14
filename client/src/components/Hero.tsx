import { motion } from "framer-motion";
import LiquidEther from "./LiquidEther";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-between pt-32 pb-8 px-6 md:px-8 border-b border-black relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-60">
        <LiquidEther />
      </div>

      <div className="flex flex-col relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-black mix-blend-difference">
            RUP<br />
            PAUL
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-start gap-8 mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-md font-mono text-sm leading-relaxed"
        >
          <p>
            MANUFACTURING ENGINEER & AUTOMATION SPECIALIST. <br />
            BUILDING THE FUTURE OF EVs AND DIGITAL FACTORIES. <br />
            BASED IN COLUMBUS, OH.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-right"
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer group">
                <div className="w-6 h-6 bg-blue-600 animate-pulse mb-3 ml-auto transition-transform group-hover:scale-110" />
                <span className="font-mono text-sm md:text-base underline decoration-dotted underline-offset-4 decoration-transparent group-hover:decoration-blue-600 transition-all">
                  STATUS: PROJECT ENGINEER @ THK
                </span>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-white/95 backdrop-blur-sm border-black/10">
              <DialogHeader>
                <DialogTitle className="font-mono text-xl uppercase border-b border-black/10 pb-4 mb-4">
                  THK America Experience
                </DialogTitle>
              </DialogHeader>
              <div className="w-full max-w-3xl mx-auto px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {[
                      {
                        title: "Digital Factory Dashboards",
                        desc: "Developed real-time visualization systems for production metrics, reducing downtime by 15% through predictive maintenance alerts.",
                        tech: "React, Node.js, SQL"
                      },
                      {
                        title: "PLC Poka-Yoke Systems",
                        desc: "Implemented mistake-proofing logic on Mitsubishi iQ-R series PLCs to ensure 100% assembly verification before line release.",
                        tech: "Mitsubishi PLC, Ladder Logic"
                      },
                      {
                        title: "Robot & AMR Integration",
                        desc: "Led the integration of Fanuc robots and Autonomous Mobile Robots (AMRs) for automated material handling and assembly cells.",
                        tech: "Fanuc, UR10e, Fleet Manager"
                      },
                      {
                        title: "Automated Assembly",
                        desc: "Programmed and optimized automated assembly lines, focusing on cycle time reduction and OEE improvement.",
                        tech: "Python, C++, Vision Systems"
                      }
                    ].map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                          <Card className="border border-black/10 shadow-none bg-transparent h-full">
                            <CardContent className="flex flex-col aspect-square items-start justify-center p-6 gap-4">
                              <span className="font-mono text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded-full">
                                0{index + 1}
                              </span>
                              <h3 className="text-xl font-medium leading-tight">{item.title}</h3>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                              <div className="mt-auto pt-4 font-mono text-xs text-black/50 uppercase">
                                Tech: {item.tech}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
