import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";


// 🎓 Certifications Data
const certifications = [
  {
    title: "AWS Cloud Certification",
    issuer: "GUVI",
    year: "2025",
    description:
      "Completed AWS Cloud certification from GUVI and learned about EC2, S3, Route 53, and IAM services.",
  },
  {
    title: "Mastering Figma Basics in UI Design",
    issuer: "GUVI",
    year: "2024",
    description:
      "Gained expertise in wireframing, prototyping, and user interface design fundamentals using Figma.",
  },
  {
    title: "Diploma in Computer Applications",
    issuer: "Apollo Computer Education",
    year: "2019",
    description:
      "Covered computer fundamentals, MS Office, and programming basics through a diploma program.",
  },
];

// 🏆 Individual Certification Card
const CertificationCard: React.FC<{
  index: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
}> = ({ index, title, issuer, year, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[48px]">🏆</p>
    <div className="mt-1">
      <h3 className="text-[18px] font-semibold text-white">{title}</h3>
      <p className="text-secondary text-[14px] mt-2">
        {issuer} • {year}
      </p>
      <p className="text-gray-300 mt-4 text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

// 🎓 Main Certifications Section
const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      {/* ✅ Top Section (Heading area same as Testimonials) */}
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <motion.div variants={fadeIn("", "tween", 0.1, 1)}>
          <p className={`${styles.sectionSubText}`}>My Completion</p>
          <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
        </motion.div>
      </div>

      {/* ✅ Certification Cards Grid */}
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
