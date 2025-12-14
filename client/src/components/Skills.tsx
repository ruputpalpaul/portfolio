import { motion } from "framer-motion";

const skills = [
  "Battery Pack Design & EV Systems",
  "PLC Programming (Mitsubishi iQ-R)",
  "Digital Factory & Dashboarding",
  "Robotics (Fanuc, UR10e)",
  "Lean Manufacturing & Six Sigma",
  "CAD/CAM (Fusion 360, SolidWorks)",
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-8 border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 font-mono text-sm uppercase">
          ( Core Capabilities )
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-baseline gap-4 border-b border-black/10 pb-4"
              >
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <span className="text-xl md:text-2xl font-light tracking-tight group-hover:pl-4 transition-all duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
