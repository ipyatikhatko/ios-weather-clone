import Skeleton from "@/components/skeleton";

export default function CurrentWeatherSkeleton() {
  return (
    <>
      <Skeleton placeholder="Kyiv" className="city" />
      <Skeleton placeholder="25" className="temperature current" />
      <Skeleton placeholder="Cloudy" className="description" />
      <Skeleton placeholder="H:30" className="temperature high" />
      <Skeleton placeholder="L:19" className="temperature low" />
    </>
  );
}
