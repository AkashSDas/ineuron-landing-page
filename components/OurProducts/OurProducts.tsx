import HallOfFame from "@components/HallOfFame/HallOfFame";
import Affiliate from "@components/Icons/Affiliate";
import Blog from "@components/Icons/Blog";
import Internship from "@components/Icons/Internship";
import Job from "@components/Icons/Job";
import styles from "@styles/components/OurProducts/OurProducts.module.scss";

export interface IProduct {
  icon: JSX.Element;
  title: string;
  description: string;
}

function OurProducts() {
  const Card = ({ icon, title, description }: IProduct) => (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h5 className={styles.heading}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );

  return (
    <section className="p-8">
      <h2 className="h2">Our Products</h2>

      <div className={styles.container}>
        <Card
          icon={<Affiliate />}
          title="Become an Affiliate"
          description="Explore affiliate marketing opportunities with iNeuron and attain financial frredom."
        />
        <Card
          icon={<Job />}
          title="Job Portal"
          description="Use exceptional templates for a stand-out resume minus the sign up process."
        />
        <Card
          icon={<Internship />}
          title="Internship Portal"
          description="iNeuron's self-paced internship portal prioritises hands-on training with 570+ internship projects."
        />
      </div>

      <div className={styles.container}>
        <Card
          icon={<HallOfFame />}
          title="Hall of Fame"
          description="Our student placements and 10+ career transitions speak volumes about our courses."
        />
        <Card
          icon={<Blog />}
          title="InBlog"
          description="Explore all you want about your favourite courses."
        />
      </div>
    </section>
  );
}

export default OurProducts;
