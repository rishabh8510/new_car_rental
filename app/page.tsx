import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import BudgetCars from "@/components/home/BudgetCars";
import FleetBanner from "@/components/FleetBanner";
import WhyRentCar from "@/components/home/WhyRentCar";
import FlexibleRentalOptions from "@/components/home/FlexibleRentalOptions";
import DocumentsRequired from "@/components/home/DocumentsRequired";
// import NewCars from "@/components/home/NewCars";
// import SportsCars from "@/components/home/SportsCars";
import Testimonial from "@/components/home/Testimonials";
import RentalTypesBanner from "@/components/home/RentalTypesBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RentalTypesBanner />
      <CategorySection />
      <BudgetCars />
      {/* NewCars and SportsCars are temporarily hidden - uncomment below to restore */}
      {/* <NewCars /> */}
      {/* <SportsCars /> */}
      <FleetBanner />
      <WhyRentCar />
      <FlexibleRentalOptions />
      <DocumentsRequired />
      <Testimonial />
    </>
  );
}
