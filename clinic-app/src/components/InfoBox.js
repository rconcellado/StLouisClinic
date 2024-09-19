import React from 'react';

function InfoBox() {
  return (
    <div className="info-box">
      <p>
        An account lets you <strong>view history</strong>, <strong>manage contact info</strong>, and <strong>make family bookings</strong>,
        or you can book as a guest. You may also book by phone at 1-877-702-4486.
      </p>
      <div className="btn-group">
        <button className="btn-outline">Create Account</button>
        <button className="btn-outline">Book as Guest</button>
        <button className="btn-outline">FAQ</button>
      </div>
    </div>
  );
}

export default InfoBox;
