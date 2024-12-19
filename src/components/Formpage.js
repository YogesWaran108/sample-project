import React from 'react';
import '../css/FormPage.css';

function FormPage() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Form Page</h1>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label text-start">
            Name:
          </label>
          <div className="col-sm-8">
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label text-start">
            Email:
          </label>
          <div className="col-sm-8">
            <input type="email" name="email" className="form-control" />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;