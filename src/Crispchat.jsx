import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const Crispchat = () => {
  useEffect(() => {
    Crisp.configure("82a6048c-c1db-4328-ac29-67e92645b2a8");
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
