import { motion } from "framer-motion";

const history = [
  {
    year: "SEP 2025—PRES",
    role: "Project Engineer",
    company: "THK America, Inc.",
    details: "Manufacturing & Automation. Digital factory dashboards, PLC poka-yoke systems, Robot/AMR integration.",
  },
  {
    year: "MAY 2024—JUN 2024",
    role: "Design & Mfg Engineer",
    company: "Univ. of Michigan - Stellantis Truck Team",
    details: "Battery vehicle integration, pack enclosure design, high-voltage routing.",
  },
  {
    year: "AUG 2024—DEC 2024",
    role: "Systems Engineer",
    company: "Univ. of Michigan - Arctic ATV",
    details: "Transmission & suspension modeling, hardware-in-the-loop testing.",
  },
  {
    year: "2021—2023",
    role: "Technical Consultant",
    company: "Refinitiv & Highradius",
    details: "Data integration, automated performance dashboards.",
  },
];

const education = [
  {
    year: "2025",
    degree: "M.Eng. Global Automotive & Mfg Engineering",
    school: "University of Michigan",
    details: "GPA 3.65. Focus: Smart Mfg, EV Systems, Battery Life Mgmt.",
  },
  {
    year: "2022",
    degree: "B.E. Electronics & Communication",
    school: "Chandigarh University",
    details: "GPA 7.37. Charpak Exchange Scholar (Paris).",
  },
];

export default function Experience() {
  return (
    <section id="about" className="py-24 px-6 md:px-8 border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4 font-mono text-sm uppercase sticky top-24 h-fit">
          ( Experience )
        </div>
        <div className="md:col-span-8 space-y-12">
          {history.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-mono text-sm">{item.year}</div>
              <div>
                <h4 className="text-xl font-medium tracking-tight">{item.role}</h4>
                <p className="text-muted-foreground">{item.company}</p>
                <p className="font-mono text-xs mt-2 text-muted-foreground/80">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 font-mono text-sm uppercase sticky top-24 h-fit">
          ( Education )
        </div>
        <div className="md:col-span-8 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-mono text-sm">{item.year}</div>
              <div>
                <h4 className="text-xl font-medium tracking-tight">{item.degree}</h4>
                <p className="text-muted-foreground">{item.school}</p>
                <p className="font-mono text-xs mt-2 text-muted-foreground/80">{item.details}</p>
              </div>
            </div>
          ))}
          
          <div className="pt-12 border-t border-black/10">
             <p className="text-2xl font-light leading-snug">
               "Passionate about building the next generation of electric vehicles and off-road mobility systems. Taking ideas from concept to production."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
