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
    "About Us",
    "Contact Us",
    "Hackathon",
    "Job Guarantee",
    "Job Assistance",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const products = [
    "Job Portal",
    "Internship Portal",
    "Become an Affiliate",
    "Hall of Fame",
    "InBlog",
  ];

  return (
    <footer className="mt-[150px] bg-light-purple border-t-2 border-white p-[var(--nav-x-pad)] flex gap-12 flex-wrap">
      <div className="flex-grow flex flex-col gap-3">
        <div className="flex items-center gap-5 md:gap-36">
          <img src="/logo.svg" alt="iNeuron Logo" />

          <div className="flex items-center gap-4">
            <YouTube />
            <Linkedin />
            <Twitter />
            <Facebook />
          </div>
        </div>

        <div className="flex gap-2">
          <Mail />{" "}
          <span className="text-[15px] text-grey">
            Email us: contact@ineuron.ai
          </span>
        </div>

        <div className="flex gap-2">
          <Location />{" "}
          <span className="text-[15px] text-grey w-[50%]">
            17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
            Bengaluru, Karnataka 562129.
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

        {company.map((label) => (
          <li key={label} className={styles.li}>
            <Roller label={label} />
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-2">
        <li key="Products">
          <Roller2 label="Products" />
        </li>

        {products.map((label) => (
          <li key={label} className={styles.li}>
            <Roller label={label} />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
