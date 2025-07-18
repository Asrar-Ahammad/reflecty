import { useEffect, useState } from "react";
import Magnet from "@/blocks/Animations/Magnet/Magnet";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { GlowEffect } from "../../components/motion-primitives/glow-effect";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { Spotlight } from "../../components/motion-primitives/spotlight";
import {
  Brain,
  Check,
  Flower,
  Leaf,
  Network,
  Pen,
  Settings,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Gradients from "@/components/Gradients";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/motion-primitives/accordion";
import { ChevronRight } from "lucide-react";
import { faqs } from "./data/faqs";

const cardData = [
  {
    icon: <Pen />,
    heading: "Guided Journaling",
    description:
      "Start your day with intention or reflect on your experiences with prompts tailored to your goals.",
    color: "bg-emerald-400",
  },
  {
    icon: <Settings />,
    heading: "Habit Tracking",
    description:
      "Build consistency with our intuitive habit tracker. Visualize your progress and stay motivated.",
    color: "bg-pink-400",
  },
  {
    icon: <Network />,
    heading: "AI-Powered Insights",
    description:
      "Receive personalized feedback and insights based on your journal entries and habit patterns.",
    color: "bg-sky-400",
  },
  {
    icon: <Shield />,
    heading: "Secure & Private",
    description:
      "Your thoughts are safe with us. We prioritize your privacy with end-to-end encryption.",
    color: "bg-emerald-400",
  },
  {
    icon: <Brain />,
    heading: "Mood Tracking",
    description:
      "Log your mood daily to understand patterns and triggers, helping you manage emotional well-being.",
    color:"bg-sky-400",
  },
  {
    icon: <Flower />,
    heading: "Productivity Stats",
    description:
      "Get detailed statistics on your productivity, consistency, and personal growth journey.",
    color:"bg-pink-400",
  },
];

const free = [
  "Limited journal entries",
  "Track up to 3 habits",
  "Basic mood tracking",
];
const pro = [
  "Unlimited journal entries",
  "Unlimited habit tracking",
  "AI-powered insights",
  "Advanced analytics",
  "Priority support",
];

const annual = [
  "All Pro features",
  "Significant annual savings",
  "Early access to new features",
];

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(document.body.classList.contains("dark"));
  }, []);

  return (
    <>
      <div className="main">
        <div className="hero-section relative flex items-center justify-center flex-col h-[60vh] md:h-[80vh] w-full gap-6 px-2 md:p-0">
          <Gradients />
          <div style={{ position: "relative" }} className="h-fit">
            <SplitText
              text="Your personal growth companion"
              className={`text-3xl md:text-4xl font-semibold ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
              delay={100}
              duration={2.5}
              ease="elastic.out(1,0.3)"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <TextEffect
            per="char"
            preset="fade"
            className={`text-xl text-center w-full md:w-1/2 ${
              isDarkTheme ? "text-white/80" : "text-gray-700"
            }`}
          >
            Reflectly is your safe space to journal, track habits, and get
            AI-powered insights for a more productive and consistent you.
          </TextEffect>

          <Magnet padding={100} disabled={false} magnetStrength={10}>
            <Link
              to="/login"
              className="bg-black text-white px-3 py-2 rounded-full hover:scale-105 duration-300 transition-all active:scale-100 hover:shadow-xl"
            >
              Get Started
            </Link>
          </Magnet>
        </div>
        <div className="features p-8 flex items-center flex-col justify-center gap-12 relative">
          <div className="flex flex-col w-full items-center justify-center text-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              Discover Your Best Self
            </h1>
            <p className="text-lg w-full leading-6 text-gray-500">
              Our app is packed with features designed to help you understand
              yourself better and build lasting positive habits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 w-full">
            {cardData.map((item, index) => (
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1.2}
                threshold={0.1}
                delay={0}
              >
                <div
                  className="card relative w-fit h-[250px] border-[1px] border-gray-300 p-6 flex flex-col items-start justify-start gap-4 rounded-xl select-none hover:shadow-xl duration-200 transition-all"
                  key={index}
                >
                  <Spotlight
                    className={item.color}
                    size={64}
                    springOptions={{
                      bounce: 0.3,
                      duration: 0.1,
                    }}
                  />
                  <div className="icon bg-black p-2 text-white rounded-full w-fit">
                    {item.icon}
                  </div>
                  <div className="heading text-xl font-semibold">
                    {item.heading}
                  </div>
                  <div className="description text-md font-light">
                    {item.description}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
        <div className="pricing p-8 flex flex-col items-center justify-center gap-12 relative">
          <div className="text-center flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">
              Simple, Transparent
              <br /> Pricing
            </h1>
            <p className="text-lg text-gray-500">
              Choose the plan that's right for you and start your journey to a
              better self today.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.2}
              threshold={0.1}
              delay={0}
            >
              <div className="relative free h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8 shadow-md">
                <div className="">
                  <h2 className="text-xl font-bold">Free</h2>
                  <p className="text-lg font-light text-gray-500">
                    Basic journaling & habit tracking
                  </p>
                </div>
                <div className="mt-10">
                  <p>
                    <span className="text-4xl font-bold">₹0</span>/month
                  </p>
                  <div className="mt-4">
                    {free.map((item, index) => (
                      <div
                        className="flex item-start justify-start gap-2"
                        key={index}
                      >
                        <div className="flex items-center justify-center">
                          <Check className="size-4" />
                        </div>
                        <div className="text-lg font-light text-gray-500">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/sign-up"
                  className="absolute cursor-pointer bottom-10 right-[25%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold hover:bg-black hover:text-white duration-200 transition-all"
                >
                  Get Started Free
                </Link>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.2}
              threshold={0.1}
              delay={0}
            >
              <div className="relative">
                <GlowEffect
                  colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                  mode="rotate"
                  blur="medium"
                  duration={20}
                />
                <div className="relative pro text-white h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8 overflow-hidden">
                  <p className="absolute text-[12px] top-3 bg-white text-black px-3 py-2 right-3 rounded-full">
                    Most Popular
                  </p>
                  <div className="">
                    <h2 className="text-xl font-bold">Pro</h2>
                    <p className="text-lg font-light text-white">
                      Unlock full potential with AI insights
                    </p>
                  </div>
                  <div className="mt-10">
                    <p>
                      <span className="text-4xl font-bold">₹199</span>/month
                    </p>
                    <div className="mt-4">
                      {pro.map((item, index) => (
                        <div
                          className="flex item-start justify-start gap-2"
                          key={index}
                        >
                          <div className="flex items-center justify-center">
                            <Check className="size-4" />
                          </div>
                          <div className="text-lg font-light text-white">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/sign-up"
                    className="absolute cursor-pointer bottom-10 right-[33%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold hover:bg-black hover:text-white duration-200 transition-all"
                  >
                    Choose Pro
                  </Link>
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.2}
              threshold={0.1}
              delay={0}
            >
              <div className="relative annual h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8 shadow-md">
                <div className="">
                  <h2 className="text-xl font-bold">Annual</h2>
                  <p className="text-lg font-light text-gray-500">
                    Save with yearly billing
                  </p>
                </div>
                <div className="mt-10">
                  <p>
                    <span className="text-4xl font-bold">₹1990</span>/year
                    <p className="text-gray-500 text-sm">
                      (Equivalent to ₹165/month)
                    </p>
                  </p>
                  <div className="mt-4">
                    {annual.map((item, index) => (
                      <div
                        className="flex item-start justify-start gap-2"
                        key={index}
                      >
                        <div className="flex items-center justify-center">
                          <Check className="size-4" />
                        </div>
                        <div className="text-lg font-light text-gray-500">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/sign-up"
                  className="absolute cursor-pointer bottom-10 right-[33%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold hover:bg-black hover:text-white duration-200 transition-all"
                >
                  Go Annual
                </Link>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <div className="faqs h-[70vh] mt-10 md:mb-10 flex items-center justify-start flex-col">
          <h1 className="text-3xl font-bold text-center">Faqs</h1>
          <div className="w-full md:w-3/4 px-8 mt-8">
            <Accordion
              className="flex w-full flex-col divide-y divide-gray-200 dark:divide-zinc-700 my-6"
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              variants={{
                expanded: {
                  opacity: 1,
                  scale: 1,
                },
                collapsed: {
                  opacity: 0,
                  scale: 0.7,
                },
              }}
            >
              {faqs.map((item, index) => (
                <AccordionItem value={index} className="py-2" key={index}>
                  <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 cursor-pointer">
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                      <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-lg md:text-xl">
                        {item.question}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="origin-left cursor-pointer">
                    <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                      {item.ans}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="footer h-16 border-t-[1px] border-gray-300 flex items-center justify-center font-light mt-40 md:mt-20">
          © 2025 <Leaf className="h-[16px] w-[16px] ml-2" /> Reflecty
        </div>
      </div>
    </>
  );
};

export default Home;
