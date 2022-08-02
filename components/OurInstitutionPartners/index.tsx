function OurInstitutionPartners() {
  const Card = ({ name }) => (
    <img
      className="mix-blend-luminosity transition-all duration-300 ease-in-out hover:shadow-default bg-white rounded-[30px] w-[150px] h-[150px]"
      src={`/partner-institutions/${name}.svg`}
      alt={name}
    />
  );

  return (
    <section className="p-8">
      <h2 className="text-center text-medium text-dark-violet text-[60px] mb-16">
        Our Institution Partners
      </h2>

      <div className="flex gap-8 justify-center">
        <Card name="taxila" />
        <Card name="vit" />
        <Card name="malnad-college" />
        <Card name="keit" />
        <Card name="gim" />
      </div>
    </section>
  );
}

export default OurInstitutionPartners;
