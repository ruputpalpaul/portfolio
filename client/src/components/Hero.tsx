import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-between pt-32 pb-8 px-6 md:px-8 border-b border-black">
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-black">
            RUP<br />
            PAUL
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-start gap-8 mt-12">
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
          <div className="w-4 h-4 bg-black animate-pulse mb-2 ml-auto" />
          <span className="font-mono text-xs">STATUS: PROJECT ENGINEER @ THK</span>
        </motion.div>
      </div>
    </section>
  );
}
