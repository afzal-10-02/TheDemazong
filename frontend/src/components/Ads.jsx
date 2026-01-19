import React from 'react';

const adList = [
  {
    id: 1,
    brand: "City Brew Cafe",
    tagline: "Student Discount: Flat 20% Off",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 2,
    brand: "TechNext Academy",
    tagline: "Learn React & Python this Summer",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 3,
    brand: "Green Hills Resort",
    tagline: "Weekend Getaways starting ₹2999",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 4,
    brand: "Urban Trends",
    tagline: "New Streetwear Collection is Live",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 5,
    brand: "FitLife Gym",
    tagline: "First Month Free for Students",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 6,
    brand: "SoundWave Fest",
    tagline: "Early Bird Tickets Available Now",
    image: "https://images.unsplash.com/photo-1459749411177-287ce3276916?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

const Ads = () => {
  return (
    <section className="container mb-5">
      {/* Section Header */}
      <div className="d-flex align-items-center mb-4">
        <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill me-2">SPONSORED</span>
        <h5 className="text-muted fw-bold m-0" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>
          OUR PARTNERS
        </h5>
        <div className="flex-grow-1 ms-3 border-bottom"></div>
      </div>

      {/* Ads Grid */}
      <div className="row g-3">
        {adList.map((ad) => (
          <div className="col-6 col-md-4 col-lg-2" key={ad.id}>
            <a href={ad.link} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="position-relative">
                  <img 
                    src={ad.image} 
                    className="card-img-top" 
                    alt={ad.brand} 
                    style={{ height: '120px', objectFit: 'cover' }} 
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-white text-dark shadow-sm" style={{fontSize: '0.6rem'}}>Ad</span>
                  </div>
                </div>
                <div className="card-body p-2 text-center">
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.9rem' }}>{ad.brand}</h6>
                  <p className="text-muted small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>
                    {ad.tagline}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ads;