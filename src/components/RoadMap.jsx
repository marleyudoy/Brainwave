import { roadmap } from "../constants";
import Heading from "./Hading";
import Section from "./Section";
import grid from "../assets/grid.png";
import TagLine from "./TagLine";
import { check2, loading1 } from "../assets";
import Button from "./Button";

export default function RoadMap() {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Reday to get started" title-="what wer're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      width={550}
                      height={550}
                      src={grid}
                      alt="grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-12">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-1">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={15}
                          alt={status}
                        />
                        <div className="tagline text-n-8">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10"></div>
                    <img
                      src={item.imageUrl}
                      className="w-full"
                      width={630}
                      height={420}
                      alt={item.title}
                    />
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full text-center mt-10 md:mt-16">
        <Button className="">OUR ROADMAP</Button>
        </div>
      </div>
    </Section>
  );
}
