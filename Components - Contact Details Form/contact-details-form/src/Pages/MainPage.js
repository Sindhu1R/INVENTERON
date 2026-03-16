import React, { useState } from "react";
import ContactFormPage1 from "./ContactFormPage1";
import ContactFormPage2 from "./ContactFormPage2";
import ErrorMessage from "../Components/ErrorMessage";
import WarningMessage from "../Components/WarningMessage";

function MainPage() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const handleNext = (data) => {
    if (!data.name || !data.email) {
      setError("Please fill all mandatory fields on Page 1.");
      return;
    }
    setError("");
    setFormData({ ...formData, ...data });
    setPage(2);
  };

  const handleSubmit = (data) => {
    if (!data.phone) {
      setWarning("Phone number is mandatory.");
      return;
    }
    setWarning("");
    setFormData({ ...formData, ...data });
    alert("Form submitted successfully!");
  };

  const handleBack = () => {
    setPage(1);
  };

  return (
    <div className="container mt-4">
      <h1>Contact Form</h1>
      {error && <ErrorMessage message={error} />}
      {warning && <WarningMessage message={warning} />}
      {page === 1 ? (
        <ContactFormPage1 onNext={handleNext} />
      ) : (
        <ContactFormPage2 onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default MainPage;