import { FaMessage } from "react-icons/fa6";

export default function ContactButton() {
  return (
    <button className="flex justify-center items-center space-x-2 bg-secondary text-primary font-poppins px-4 rounded-2xl">
      <FaMessage /> <span className="text-sm">Contact me</span>
    </button>
  );
}
