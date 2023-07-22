import { useEffect } from "react";
import InputsField from "../Components/InputsField"

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
      <InputsField />
    </main>
  )
}

export default Organization
