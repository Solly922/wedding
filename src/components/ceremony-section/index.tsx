import ChapelImage from "@/assets/images/chapel.webp";

function CeremonySection() {
  return (
    <section className="container w-full text-center">
      <div className="mb-10">
        <h2 className="mb-3 text-4xl font-amsterdamOne">
          Ceremony + Reception
        </h2>
        <div className="mx-auto max-w-full border w-[500px] border-accent -z-10"></div>
      </div>
      <div className="flex flex-wrap gap-10 sm:flex-nowrap">
        <div className="sm:w-1/2">
          <img
            src={ChapelImage}
            alt="chapel"
            className="object-cover mx-auto w-full rounded-full h-[100px] w-[100px]"
          />
          <h3 className="text-4xl">San Pedro Chapel</h3>
          <p>Ceremony: 5pm</p>
          <p>Reception: 6pm</p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>

        <div className="sm:w-1/2">
          <img />
        </div>
      </div>
    </section>
  );
}

export default CeremonySection;
