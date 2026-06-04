import { useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import { ImageMaskReveal } from '../components/animations/ImageMaskReveal';
import { FadeIn } from '../components/animations/AnimationPrimitives';
import './Management.css';

export function Management() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Mohanlal Jain",
      role: "CEO - JST",
      description: "Mohanlal Jain brings over 50 years of invaluable experience to Jain Salt, overseeing our broader management and operational framework. His decades of steady leadership and deep industry knowledge ensure that our manufacturing business runs smoothly and efficiently every single day.",
      image: "/Mohanlal_v3.png"
    },
    {
      name: "Vinod Jain",
      role: "Operations Director",
      description: "As the backbone of our on-ground production, Vinod Jain oversees all factory operations and labor management at Jain Salt. His hands-on approach and strict dedication to overall quality control guarantee that every batch we produce meets exceptional standards.",
      image: "/Vinod_v2.png"
    },
    {
      name: "Jitendra Jain",
      role: "Business Director",
      description: "Jitendra Jain drives the core commercial activities for Jain Salt. By expertly managing purchasing, sales, and forging strategic partnerships, he ensures our manufacturing capabilities consistently meet market demands with reliability and trust.",
      image: "/Raju_v2.png"
    },
    {
      name: "Aryan Jain",
      role: "MD and CEO, Avintra International",
      description: "Following my MBA in Bangalore, I returned to my roots in Gujarat to expand our family's direct manufacturing legacy, and I now take pride in managing our export partnerships across more than six countries.",
      image: "/Aryan_v2.png"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Our Management - Avintra & Jain Salt" 
        description="Meet the dedicated management team behind Jain Salt and Avintra International."
      />
      
      <div className="management-page page-transition">
        {/* Hero Section */}
        <section className="management-hero">
          <div className="container">
            <FadeIn delay={0.1}>
              <span className="management-hero-eyebrow">Leadership</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="section-title text-center">Our <em>Management</em></h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="management-hero-subtitle text-center">
                The driving force behind our decades of manufacturing legacy and global export success. Our team ensures quality and trust in every grain.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Team Section */}
        <section className="management-team-section">
          <div className="container">
            <div className="management-team-list">
              {teamMembers.map((member, index) => (
                <div key={member.name} className={`management-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="management-image-wrapper">
                    <div className="management-image-bg"></div>
                    <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
                      <ImageMaskReveal src={member.image} alt={member.name} className="management-image" />
                    </div>
                  </div>
                  <div className="management-content">
                    <FadeIn delay={0.1}>
                      <h2 className="management-name">{member.name}</h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <h4 className="management-role">{member.role}</h4>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <p className="management-desc">{member.description}</p>
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
