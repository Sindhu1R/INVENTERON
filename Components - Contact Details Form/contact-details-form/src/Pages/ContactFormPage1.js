import React from "react";

function ContactFormPage1({ onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    onNext({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <h2>Contact Details - Page 1</h2>

        <div className="mb-3">
            <label className="form-label">Name*:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" />
        </div>

        <div className="mb-3">
            <label className="form-label">Email*:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email" />
        </div>
        
        <button type="submit" className="btn btn-primary">Next</button>

    </form>
  );
}

export default ContactFormPage1;