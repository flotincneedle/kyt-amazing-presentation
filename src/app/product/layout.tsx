import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PinGate from "@/components/gate/PinGate";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PinGate />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
