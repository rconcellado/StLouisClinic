import React from 'react';

function PackagesSection() {
  return (
    <section className="packages">
      <div className="package">
        <h4>Buntis Package 1</h4>
        <ul>
          <li>Complete Blood Count (CBC)</li>
          <li>Urine Analysis</li>
          <li>Hepa B Screening</li>
          <li>Syphilis Screening</li>
          <li>Blood Typing with RH</li>
          <li>TVS/Pelvic Ultrasound</li>
        </ul>
        <p><strong>PHP 1800</strong></p>
      </div>

      <div className="package">
        <h4>Buntis Package 2</h4>
        <ul>
          <li>Complete Blood Count (CBC)</li>
          <li>Urine Analysis</li>
          <li>Hepa B Screening</li>
          <li>Syphilis Screening</li>
          <li>Blood Typing with RH</li>
          <li>HIV Screening</li>
          <li>TVS/Pelvic Ultrasound</li>
        </ul>
        <p><strong>PHP 2500</strong></p>
      </div>

      <div className="package">
        <h4>Other Services</h4>
        <ul>
          <li>Transvaginal/Pelvic Ultrasound</li>
          <li>Fetal Biophysical Profile (FBPS)</li>
          <li>Gender Scan</li>
          <li>Congenital Anomaly Scan</li>
        </ul>
      </div>
    </section>
  );
}

export default PackagesSection;
