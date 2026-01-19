import React from 'react';

const newsData = [
  { 
    id: 1, 
    cat: "Politics", 
    title: "City Council Approves New Green Zone for Startups", 
    desc: "The unanimous vote paves the way for a new tech hub in the downtown district.",
    author: "Sarah J.", 
    time: "4h ago" 
  },
  { 
    id: 2, 
    cat: "Policy", 
    title: "Understanding the New Traffic Regulations", 
    desc: "Everything you need to know about the odd-even rule implementing next week.",
    author: "Mike R.", 
    time: "6h ago" 
  },
  { 
    id: 3, 
    cat: "Society", 
    title: "Local Artists Paint the Town Green", 
    desc: "A photo essay on the new mural project revitalizing the old market area.",
    author: "Priya D.", 
    time: "1d ago" 
  },
  { 
    id: 4, 
    cat: "Regional", 
    title: "Farmers Market Returns this Weekend", 
    desc: "Expect fresh produce and organic goods from over 50 local vendors.",
    author: "Team Demazong", 
    time: "2d ago" 
  },
];

const NewsFeed = () => {
  return (
    <section className="container mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h2 className="fw-bold m-0"><span className="text-demazong">Latest</span> Updates</h2>
        <a href="#" className="text-dark fw-bold text-decoration-none small">VIEW ARCHIVE &rarr;</a>
      </div>

      <div className="row g-4">
        {newsData.map((news) => (
          <div className="col-md-6 col-lg-3" key={news.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4 card-hover overflow-hidden">
              {/* Image Placeholder */}
              <div className="bg-light w-100" style={{ height: '160px', background: `url(https://source.unsplash.com/random/400x300?sig=${news.id}) center/cover` }}></div>
              
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="category-tag">{news.cat}</span>
                  <small className="text-muted" style={{fontSize: '0.7rem'}}>{news.time}</small>
                </div>
                
                <h5 className="card-title fw-bold mb-2">{news.title}</h5>
                <p className="card-text text-muted small flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {news.desc}
                </p>
                
                <div className="mt-3 pt-3 border-top d-flex align-items-center gap-2">
                  <div className="bg-demazong rounded-circle" style={{ width: '24px', height: '24px' }}></div>
                  <small className="fw-bold text-dark">{news.author}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;