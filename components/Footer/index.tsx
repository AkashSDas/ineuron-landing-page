import Facebook from "@components/Icons/Facebook";
import { Linkedin } from "@components/Icons/Linkedin";
import Location from "@components/Icons/Location";
import Mail from "@components/Icons/Mail";
import Twitter from "@components/Icons/Twitter";
import { YouTube } from "@components/Icons/YouTube";

function Footer() {
  return (
    <footer className="mt-[150px] bg-light-purple border-t-2 border-white p-[var(--nav-x-pad)] flex gap-12">
      <div className="flex-grow flex flex-col gap-3">
        <div className="flex items-center gap-36">
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
        <li className="font-medium text-black text-[18px]">Company</li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          About Us
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Contact Us
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Hackathon
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Job Guarantee
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Job Assistance
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          FAQs
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Privacy Policy
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Terms & Conditions
        </li>
      </ul>

      <ul className="flex flex-col gap-2">
        <li className="font-medium text-black text-[18px]">Products</li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Job Portal
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Internship Portal
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Become an Affiliate
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          Hall of Fame
        </li>
        <li className="cursor-pointer text-grey hover:text-black text-[15px]">
          InBlog
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
