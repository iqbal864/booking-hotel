import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16 w-full">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image
                src="/logo-booking.png"
                width={128}
                height={49}
                alt="logo"
              />
              <p className="text-gray-500 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                aspernatur culpa cupiditate fugit at inventore!
              </p>
            </Link>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Home Page</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/room">Rooms</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Term & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <form className="mt-5" action="">
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="example@gmail.com"
                />
              </div>
              <button className="bg-purple-500 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-purple-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8 border-t border-gray-500 text-base text-center text-gray-500">
        &copy; Copyright 2025 | IqbalDev | Build with 🩷
      </div>
    </footer>
  );
};

export default Footer;
