import Layout from "./components/Layout";
import Avatar from "./components/Avatar";
import LinkButton from "./components/LinkButton";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

function App() {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-8">
        <Avatar src="./jen.jpeg" alt="Jenn" size="xl" />
      </div>
      <div className="flex flex-col justify-center items-center text-white mt-4 text-2xl font-bold ">
        <span>@j3nnii___</span>
        <p className="text-sm  font-normal mx-8 mt-4 text-center">
          Future RN in Training: Committed to Compassion, Learning, and
          Providing Exceptional Care. <span className="text-md">👩🏽‍⚕️</span>
        </p>

        <div className="mt-4 w-[20rem]">
          <LinkButton
            url="https://www.instagram.com/j3nnii__"
            text="Instagram"
            icon={FaInstagram}
            bgColor="bg-white"
          />
          <LinkButton
            url="https://www.tiktok.com/@j3nnii__"
            text="TikTok"
            icon={FaTiktok}
            bgColor="bg-white"
          />
          <LinkButton
            url="https://example.com"
            text="Facebook"
            icon={FaFacebookF}
            bgColor="bg-white"
          />
          <LinkButton
            url="https://example.com"
            text="Send me money"
            icon={SiCashapp}
            bgColor="bg-white"
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
