import project1 from "@assets/generated_images/digital_factory_dashboard_on_monitor_in_factory.png";
import project2 from "@assets/generated_images/ev_battery_pack_assembly_with_wiring_harness.png";
import project3 from "@assets/generated_images/electric_atv_concept_vehicle_in_snow.png";

export const projects = [
    {
        id: "01",
        title: "Digital Factory Transformation",
        category: "Automation / IoT",
        image: project1,
        desc: "Deployed I/O systems for 40+ stations tracking OEE & throughput in real-time.",
        fullDesc: "Led the digital transformation of a major manufacturing plant by designing and deploying custom machine dashboards. Connected over 40 production stations to a centralized system, enabling real-time tracking of OEE, downtime, and throughput. This initiative provided actionable insights that directly improved plant efficiency and reduced downtime.",
        technologies: ["PLC", "IoT", "Data Visualization", "Real-time Monitoring"]
    },
    {
        id: "02",
        title: "EV Battery Pack Design",
        category: "Design / DFM",
        image: project2,
        desc: "Achieved 26% weight reduction via DFM/DFA for Stellantis Truck Team.",
        fullDesc: "Designed and engineered high-voltage battery pack enclosures and cold plates for an electric vehicle truck project. focused on DFM/DFA principles to optimize manufacturability and assembly. Successfully achieved a 26% reduction in overall pack weight while maintaining structural integrity and thermal performance.",
        technologies: ["SolidWorks", "Fusion 360", "DFM/DFA", "Thermal Analysis"]
    },
    {
        id: "03",
        title: "Arctic ATV Systems",
        category: "R&D / Systems Eng",
        image: project3,
        desc: "Modeled transmission & suspension for electric ATV using MATLAB/Simulink.",
        fullDesc: "Developed complex simulation models for the transmission and suspension systems of an electric all-terrain vehicle (ATV) concept. utilized MATLAB and Simulink to validate design parameters and predict vehicle dynamics under extreme arctic conditions. Prototyped adjustable suspension controls and conducted hardware-in-the-loop testing.",
        technologies: ["MATLAB", "Simulink", "System Modeling", "Prototyping"]
    },
];
