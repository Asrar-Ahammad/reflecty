import Magnet from "@/blocks/Animations/Magnet/Magnet";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { GlowEffect } from "../../components/motion-primitives/glow-effect";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import {
  Brain,
  Check,
  Flower,
  Network,
  Pen,
  Settings,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const cardData = [
  {
    icon: <Pen />,
    heading: "Guided Journaling",
    description:
      "Start your day with intention or reflect on your experiences with prompts tailored to your goals.",
  },
  {
    icon: <Settings />,
    heading: "Habit Tracking",
    description:
      "Build consistency with our intuitive habit tracker. Visualize your progress and stay motivated.",
  },
  {
    icon: <Network />,
    heading: "AI-Powered Insights",
    description:
      "Receive personalized feedback and insights based on your journal entries and habit patterns.",
  },
  {
    icon: <Shield />,
    heading: "Secure & Private",
    description:
      "Your thoughts are safe with us. We prioritize your privacy with end-to-end encryption.",
  },
  {
    icon: <Brain />,
    heading: "Mood Tracking",
    description:
      "Log your mood daily to understand patterns and triggers, helping you manage emotional well-being.",
  },
  {
    icon: <Flower />,
    heading: "Productivity Stats",
    description:
      "Get detailed statistics on your productivity, consistency, and personal growth journey.",
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
  return (
    <>
      <div className="main">
        <div className="hero-section flex items-center justify-center flex-col h-[60vh] md:h-[80vh] w-full gap-6">
          <div style={{ position: "relative" }}>
            <SplitText
              text="Your personal growth companion"
              className="text-4xl font-semibold text-center"
              delay={100}
              duration={2.5}
              ease="elastic.out(1,0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <TextEffect
            per="char"
            preset="fade"
            className="text-xl text-center w-full md:w-1/2 text-gray-500"
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
        <div className="bg-gray-100 p-8 flex items-center flex-col justify-center gap-12">
          <div className="flex flex-col w-full items-center justify-center text-center gap-2">
            <h1 className="text-2xl font-bold">Discover Your Best Self</h1>
            <p className="text-lg w-full leading-6 text-gray-500">
              Our app is packed with features designed to help you understand
              yourself better and build lasting positive habits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 w-full">
            {cardData.map((item, index) => (
              <div
                className="card w-fit border-[1px] border-gray-300 p-6 flex flex-col items-start justify-start gap-4 rounded-xl select-none"
                key={index}
              >
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
            ))}
          </div>
        </div>
        <div className="pricing p-8 flex flex-col items-center justify-center gap-12">
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
            <div className="relative free h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8">
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
                className="absolute cursor-pointer bottom-10 right-[25%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold"
              >
                Get Started Free
              </Link>
            </div>
            <div className="relative">
              <GlowEffect
                colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                mode="rotate"
                blur="medium"
              />
              <div className="relative pro bg-black text-white h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8 overflow-hidden">
                <p className="absolute text-[12px] top-3 bg-white text-black px-3 py-2 right-3 rounded-full">
                  Most Popular
                </p>
                <div className="">
                  <h2 className="text-xl font-bold">Pro</h2>
                  <p className="text-lg font-light text-gray-500">
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
                        <div className="text-lg font-light text-gray-500">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/sign-up"
                  className="absolute cursor-pointer bottom-10 right-[33%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold"
                >
                  Choose Pro
                </Link>
              </div>
            </div>
            <div className="relative annual h-[60vh] flex flex-col items-start justify-start border-[1px] border-gray-300 rounded-lg p-8">
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
                className="absolute cursor-pointer bottom-10 right-[33%] border-[1px] border-gray-300 rounded-md w-fit px-3 py-2 font-semibold"
              >
                Go Annual
              </Link>
            </div>
          </div>
        </div>
        <div className="footer h-16 border-t-[1px] border-gray-300 flex items-center justify-center font-light">
          © 2025 Reflecty
        </div>
      </div>
    </>
  );
};

export default Home;
