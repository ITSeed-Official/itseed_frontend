import dynamic from "next/dynamic";

const CareerLayout = dynamic(() => import("./CareerLayout"), {
  ssr: false,
});

export default CareerLayout;
