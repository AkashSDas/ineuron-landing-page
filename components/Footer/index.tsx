import TextRollAnimation from "@components/Animations/TextRollAnimation";
import Facebook from "@components/Icons/Facebook";
import { Linkedin } from "@components/Icons/Linkedin";
import Location from "@components/Icons/Location";
import Mail from "@components/Icons/Mail";
import Twitter from "@components/Icons/Twitter";
import { YouTube } from "@components/Icons/YouTube";
import styles from "@styles/components/Footer/Footer.module.scss";

function Footer() {
  const Roller = ({ label }: { label: string }) => (
    <div className={styles["nav-item-roller"]}>
      <span data-label={label}>{label}</span>
    </div>
  );

  const Roller2 = ({ label }: { label: string }) => (
    <div className={styles["nav-heading-roller"]}>
      <span data-label={label}>{label}</span>
    </div>
  );

  const company = [
    { label: "About Us", href: "https://ineuron.ai/about-us" },
    { label: "Contact Us", href: "https://ineuron.ai/contact-us" },
    { label: "Hackathon", href: "https://hackathon.ineuron.ai/neo" },
    { label: "Job Guarantee", href: "https://ineuron.ai/job-guarantee" },
    { label: "Job Assistance", href: "https://ineuron.ai/job-assistance" },
    { label: "FAQs", href: "https://ineuron.ai/faqs" },
    { label: "Privacy Policy", href: "https://ineuron.ai/privacy-policy" },
    {
      label: "Terms & Conditions",
      href: "https://ineuron.ai/terms-and-conditions",
    },
  ];

  const products = [
    { label: "Job Portal", href: "https://jobs.ineuron.ai/" },
    { label: "Intership Portal", href: "https://internship.ineuron.ai/" },
    { label: "Become an Affiliate", href: "https://affiliate.ineuron.ai/" },
    { label: "Hall of Fame", href: "https://halloffame.ineuron.ai/" },
    { label: "InBlog", href: "https://blog.ineuron.ai/" },
  ];

  return (
    <footer className="mt-[150px] bg-light-purple border-t-2 border-white p-[var(--nav-x-pad)] flex gap-12 flex-wrap">
      <div className="flex-grow flex flex-col gap-3">
        <div className="flex items-center gap-5 md:gap-36">
          <img src="/logo.svg" alt="iNeuron Logo" />

          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/channel/UCb1GdqUqArXMQ3RS86lqqOw"
              target="_blank"
            >
              <YouTube />
            </a>
            <a href="https://www.facebook.com/ineuronai" target="_blank">
              <Facebook />
            </a>
            <a href="https://twitter.com/iNeuronAi" target="_blank">
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/ineuron-ai/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          <Mail />{" "}
          <span className="text-[15px] text-grey">
            <a href="mailto:contact@ineuron.ai">Email us: contact@ineuron.ai</a>
          </span>
        </div>

        <div className="flex gap-2">
          <Location />{" "}
          <span className="text-[15px] text-grey w-[50%]">
            <a
              href="https://www.google.com/maps/place/iNeuron.ai/@13.0542869,77.7624757,15z/data=!4m5!3m4!1s0x0:0x89fbcd434743b11b!8m2!3d13.0540489!4d77.7614087"
              target="_blank"
            >
              17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
              Bengaluru, Karnataka 562129.
            </a>
          </span>
        </div>

        <div className="flex flex-col gap-2 items-center w-max">
          <img src="/iso.png" alt="ISO" />
          <p className="text-grey text-[15px]">ISO 9001</p>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        <li className="Company">
          <Roller2 label="Company" />
        </li>

        {company.map((item) => (
          <li key={item.label} className={styles.li}>
            <a href={item.href} target="_blank">
              <Roller label={item.label} />
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-2">
        <li key="Products">
          <Roller2 label="Products" />
        </li>

        {products.map((item) => (
          <li key={item.label} className={styles.li}>
            <a href={item.href} target="_blank">
              <Roller label={item.label} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
