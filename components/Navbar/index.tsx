import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import styles from "@styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-child"]}>
        <img src="/logo.svg" alt="iNeuron Logo" />
        <DropDown label="Courses" />
        <DropDown label="Products" />
        <DropDown label="Company" />
      </div>

      <div className={styles["navbar-child"]}>
        <div>Search</div>
        <button>Login</button>
        <button>Get Started</button>
      </div>
    </nav>
  );
}

function DropDown({ label }) {
  return (
    <div className="cursor-pointer text-grey hover:text-black flex items-center gap-[0.625rem] group">
      {label}{" "}
      <ArrowDropDown className="stroke-grey group-hover:stroke-black group-hover:rotate-180 transition-all duration-300" />
    </div>
  );
}
