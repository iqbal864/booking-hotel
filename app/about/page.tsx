import { Metadata } from "next";
import HeaderSsection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOffOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About",
  description: "Who we Are",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSsection title="About Us" subTitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-section.png"
            width={650}
            height={579}
            alt="about image"
          />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who we Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              ex laborum rem, quasi sequi natus culpa fugiat sunt asperiores et?
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOffOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision</h4>
                  <p className="text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam id molestiae alias, error in nisi.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mision</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus minima in ipsam sunt iusto voluptatum
                    dignissimos alias illum possimus magni!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
