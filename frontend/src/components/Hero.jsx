import React from 'react';

const Hero = () => {
  return (
    <section className="container my-5">
      <div className="row g-4 align-items-stretch">
        
        {/* Left Column: Main Feature Story */}
        <div className="col-lg-8">
          <div className="card text-white border-0 rounded-4 overflow-hidden h-100 position-relative shadow card-hover">
            {/* Dark Gradient Overlay for readability */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1))', zIndex: 1 }}></div>
            
            <img 
              src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              className="card-img h-100 object-fit-cover" 
              alt="Main Story" 
              style={{ minHeight: '450px' }}
            />
            
            <div className="card-img-overlay d-flex flex-column justify-content-end p-4 p-md-5" style={{ zIndex: 2 }}>
              <span className="badge bg-demazong align-self-start mb-3 px-3 py-2">EXCLUSIVE REPORT</span>
              <h1 className="card-title fw-bold display-5 mb-3">The Future of Our Region: New Youth Policy Explained</h1>
              <p className="card-text fs-5 d-none d-md-block opacity-75">
                From education subsidies to tech startups, here is how the new administration plans to reshape the local economy for Gen Z.
              </p>
              <p className="card-text small text-white-50 mt-2">By Afzal Jamal • 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* Right Column: Trending / Secondary */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          
          {/* Secondary Story 1 */}
          <div className="card border-0 shadow-sm rounded-4 h-100 card-hover bg-light">
            <div className="card-body p-4 d-flex flex-column justify-content-center">
              <span className="category-tag align-self-start mb-2">Society</span>
              <h4 className="fw-bold mb-2">Why Local Cafes are Becoming the New Town Squares</h4>
              <p className="text-muted small mb-0">A look into the shifting social dynamics of our city.</p>
            </div>
          </div>

          {/* Secondary Story 2 (CTA) */}
          <div className="card border-0 shadow-sm rounded-4 h-100 bg-demazong text-white text-center card-hover">
             <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
              <h3 className="fw-bold mb-1">Have a Scoop?</h3>
              <p className="small opacity-75 mb-3">We want to hear from you.</p>
              <button className="btn btn-light text-demazong fw-bold rounded-pill w-100">Send us a Tip</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;