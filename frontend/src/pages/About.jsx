import React from 'react';
import { FaQuoteLeft, FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Political Anchor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Rohan Das",
    role: "Society & Culture Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Anjali K.",
    role: "Policy Analyst / Anchor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Field Reporter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  }
];

const About = () => {
  return (
    <div className="about-page fade-in">
      
      {/* 1. Header Section */}
      <section className="bg-demazong text-white py-5 text-center">
        <div className="container py-4">
          <h1 className="display-4 fw-bold">We are The Demazong.</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            The region's fastest-growing digital news platform. We don't just report the news; we bridge the gap between policy and the people.
          </p>
        </div>
      </section>

      {/* 2. Founder's Message */}
      <section className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="position-relative">
              {/* Founder Image */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" 
                alt="Founder" 
                className="img-fluid rounded-4 shadow"
              />
              <div className="bg-white p-3 rounded shadow position-absolute bottom-0 start-0 m-3 d-none d-md-block">
                <h6 className="fw-bold m-0 text-demazong">Afzal Jamal</h6>
                <small className="text-muted">Founder & Editor-in-Chief</small>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <FaQuoteLeft className="text-demazong opacity-25 mb-3" size={50} />
            <h2 className="fw-bold mb-4">A Note from the Founder</h2>
            <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              "When we started The Demazong, the goal was simple: to create a platform that speaks the language of the youth while respecting the depth of our region's history.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              In an era of noise, we strive to be the signal. We are committed to unbiased reporting on regional politics, uncovering societal shifts, and decoding complex policies for the next generation. This isn't just a newspaper; it's a movement for clarity."
            </p>
            <div className="mt-4">
              {/* Signature Placeholder */}
              <div style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: '#009e60' }}>
                Afzal Jamal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission Stats */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h2 className="fw-bold text-demazong">50k+</h2>
              <p className="text-muted fw-bold">Daily Readers</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold text-demazong">100%</h2>
              <p className="text-muted fw-bold">Independent Journalism</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold text-demazong">24/7</h2>
              <p className="text-muted fw-bold">Live Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Team (Anchors) */}
      <section className="container my-5 py-4">
        <div className="text-center mb-5">
          <span className="badge bg-demazong mb-2">THE FACES BEHIND THE NEWS</span>
          <h2 className="fw-bold">Meet Our Anchors</h2>
        </div>

        <div className="row g-4">
          {teamMembers.map((member) => (
            <div className="col-md-6 col-lg-3" key={member.id}>
              <div className="card border-0 shadow-sm h-100 text-center p-3 card-hover">
                <div className="mx-auto mb-3 position-relative" style={{ width: '120px', height: '120px' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-100 h-100 rounded-circle object-fit-cover shadow-sm anchor-image"
                  />
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className="text-demazong small fw-bold mb-3">{member.role}</p>
                
                <div className="d-flex justify-content-center gap-3 opacity-50">
                  <a href="#" className="text-dark"><FaTwitter /></a>
                  <a href="#" className="text-dark"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;