import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import BudgetCars from "@/components/home/BudgetCars";
import FleetBanner from "@/components/FleetBanner";
import WhyRentCar from "@/components/home/WhyRentCar";
import FlexibleRentalOptions from "@/components/home/FlexibleRentalOptions";
import DocumentsRequired from "@/components/home/DocumentsRequired";
import NewCars from "@/components/home/NewCars";
import SportsCars from "@/components/home/SportsCars";

export default function Home() {
  return (
<>
<HeroSection />
<CategorySection />
<BudgetCars />
<NewCars />
<SportsCars />
<FleetBanner />
<WhyRentCar />
<FlexibleRentalOptions />
<DocumentsRequired />
</>
  );
}
