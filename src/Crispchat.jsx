import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const Crispchat = () => {
  useEffect(() => {
    Crisp.configure("7e441122-7459-4f2b-9f82-918bdd1a3e59");
  }, []);

  return null;
};
const CrispProvider = () => {
  return (
    <>
      <Crispchat />
    </>
  );
};
export default CrispProvider;
