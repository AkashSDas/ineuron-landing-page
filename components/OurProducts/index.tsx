import Affiliate from "@components/Icons/Affiliate";
import Blog from "@components/Icons/Blog";
import HallOfFame from "@components/Icons/HallOfFame";
import Internship from "@components/Icons/Internship";
import Job from "@components/Icons/Job";

function OurProducts() {
  return (
    <section className="p-8">
      <h2 className="text-center text-medium text-dark-violet text-[60px] mb-16">
        Our Products
      </h2>

      <div className="flex gap-8 justify-center">
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

      <div className="flex mt-8 gap-8 justify-center">
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

function Card({ icon, title, description }) {
  return (
    <div className="w-[410px] border-solid border-white border-2 rounded-[25px] bg-light-purple flex flex-col gap-2 p-4">
      <div className="p-2 w-max border-solid border-white border-[1.5px] rounded-[20px] bg-light-purple">
        {icon}
      </div>
      <h3 className="text-[18px] text-black font-medium">{title}</h3>
      <p className="text-[15px] text-grey font-normal">{description}</p>
    </div>
  );
}

export default OurProducts;
