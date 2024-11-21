import React from 'react';
import './Reports.css';

const Reports = () => {
  return (
    <div className="reports-page-container">
      {/* Overview Section */}
      <section className="overview-section">
        <h2 className="section-title">Overview</h2>
        <div className="overview-cards">
          <div className="card">Total Reports <span>2</span></div>
          <div className="card">Resolved Reports <span>1</span></div>
          <div className="card">Pending Reports <span>1</span></div>
        </div>
      </section>

      {/* Generate New Report Section */}
      <section className="generate-report-section">
        <h2 className="section-title">Generate New Report</h2>
        <form className="report-form">
          {/* Title Input */}
          <label htmlFor="report-title" className="form-label">Title</label>
          <input id="report-title" type="text" placeholder="Report Title" />

          {/* Description Textarea */}
          <label htmlFor="report-description" className="form-label">Description</label>
          <textarea id="report-description" placeholder="Report Description"></textarea>

          {/* Type Selector */}
          <label htmlFor="report-type" className="form-label">Report Type</label>
          <select id="report-type">
            <option value="Monthly">Monthly</option>
            <option value="Incident">Incident</option>
            <option value="Compliance">Compliance</option>
          </select>

          {/* Date Input */}
          <label htmlFor="report-date" className="form-label">Date Range</label>
          <input id="report-date" type="date" placeholder="Select date range" />

          {/* Assigned Staff */}
          <label htmlFor="report-staff" className="form-label">Staff Name</label>
          <input id="report-staff" type="text" placeholder="Enter assigned staff" />

          {/* File Input */}
          <label htmlFor="report-file" className="form-label">Attach File</label>
          <input id="report-file" type="file" />

          {/* Centered Button */}
          <div className="button-container">
            <button type="submit" className="generate-button">Generate Report</button>
          </div>
        </form>
      </section>



      {/* Current Reports Section */}
      <section className="reports-table-section">
        <h2 className="section-title">Current Reports</h2>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Type</th>
              <th>Assigned Staff</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Compliance Report</td>
              <td>2024-09-01</td>
              <td>Monthly</td>
              <td>John Doe</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Incident Report - Waste Disposal</td>
              <td>2024-09-02</td>
              <td>Incident</td>
              <td>Jane Smith</td>
              <td>Resolved</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Report History Section */}
      <section className="reports-table-section">
        <h2 className="section-title">Report History</h2>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Type</th>
              <th>Assigned Staff</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incident Report - Waste Disposal</td>
              <td>2024-09-02</td>
              <td>Incident</td>
              <td>Jane Smith</td>
              <td>Resolved</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Reports;
