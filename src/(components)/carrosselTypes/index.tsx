import dynamic from "next/dynamic";

const CarrosselTypes = dynamic(() => import("./carrosselTypesClient"), {
  ssr: false,
});

export default CarrosselTypes;
