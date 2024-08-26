import NurseIcon from "./NurseIcon";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <div className="flex justify-between mx-4 pt-8">
      <NurseIcon />
      <ContactButton />
    </div>
  );
}
