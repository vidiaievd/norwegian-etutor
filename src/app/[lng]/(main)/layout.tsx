import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string; tag: string; item: string };
}) {
  const { lng } = params;
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header
        lng={lng}
        className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-8 z-10 shadow-lg"
      />
      <div className="grow overflow-y-auto flex flex-col justify-between">
        <main className="relative z-10 px-8 py-4 grow">{children}</main>
        <Footer className="w-full py-4 px-8 z-10 shadow-lg" />
      </div>
    </div>
  );
}
