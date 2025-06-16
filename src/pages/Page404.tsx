import FuzzyText from "../blocks/TextAnimations/FuzzyText/FuzzyText";

const Page404 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
    <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} color="black">
      404 page not found
    </FuzzyText>
    </div>
  );
};

export default Page404;
