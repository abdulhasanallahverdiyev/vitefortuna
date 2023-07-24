import { useEffect } from "react";
import InputsField from "../Components/InputsField"
import OrganizationTitle from "../Components/OrganizationTitle";

const Organization = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <main className="main-section">
      <OrganizationTitle/>
      <InputsField />
    </main>
  )
}

export default Organization
