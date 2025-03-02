import Logo from "@/assets/images/Logo";
import Tabs from "@/components/Tabs/Tabs";

export default function Home() {
  return (
    <header className="bg-black h-[206px] bg-app-gradient">
      <div className="container mx-auto">
        <div className="logo-container flex justify-center pt-7 mx-4">
          <Logo />
        </div>
        <div className="flex flex-col justify-between h-[147px] mx-4">
          <div className="main-title mt-7">
            <h2 className="text-4xl tracking-wider">Launches</h2>
          </div>
          <Tabs
            onClick={function (tab: string): void {
              // throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </header>
  );
}
