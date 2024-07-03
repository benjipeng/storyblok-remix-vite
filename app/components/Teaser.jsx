import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="py-32 text-6xl text-[#7b4164] font-bold text-center"
    >
      {blok.headline}
    </div>
  );
};

export default Teaser;
