import React from "react";

function ContactFormPage2({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    onSubmit({ phone, address });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <h2>Contact Details - Page 2</h2>
      <div className="mb-3">
        <label className="form-label">Phone*:</label>
        <input type="text" name="phone" className="form-control" placeholder="Enter Phone" />
      </div>
      <div className="mb-3">
        <label className="form-label">Address:</label>
        <input type="text" name="address" className="form-control" placeholder="Enter Address" />
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}

export default ContactFormPage2;