import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const SubscribeModal = () => {
  return (
    <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-hidden="True">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg overflow-hidden rounded-4">
          
          {/* Header with Green Background */}
          <div className="modal-header bg-demazong text-white border-0 p-4">
            <h5 className="modal-title fw-bold">Join The Demazong</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          {/* Body */}
          <div className="modal-body p-4 text-center">
            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width:'60px', height:'60px'}}>
              <FaPaperPlane className="text-demazong" size={24} />
            </div>
            <h4 className="fw-bold mb-2">Stay Ahead of the Curve</h4>
            <p className="text-muted small mb-4">
              Get the latest regional politics, society news, and policy updates delivered straight to your inbox every morning.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing! (Demo Only)"); }}>
              <div className="mb-3 text-start">
                <label className="form-label small fw-bold text-muted">EMAIL ADDRESS</label>
                <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="name@example.com" required />
              </div>
              
              <div className="d-grid">
                <button type="submit" className="btn btn-demazong btn-lg fw-bold">
                  Subscribe for Free
                </button>
              </div>
            </form>
            
            <p className="text-muted extra-small mt-3 mb-0" style={{fontSize: '0.7rem'}}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;