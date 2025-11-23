import ProposalHero from '../components/proposal/ProposalHero.jsx'
import ProposalForm from '../components/proposal/ProposalForm.jsx'
import ContactCards from '../components/proposal/ContactCards.jsx'
import MeetingScheduler from '../components/proposal/MeetingScheduler.jsx'
import ProposalFAQ from '../components/proposal/ProposalFAQ.jsx'
import SocialProof from '../components/proposal/SocialProof.jsx'
import ProposalCTA from '../components/proposal/ProposalCTA.jsx'
import SEO from '../components/SEO.jsx'
import { pageSEO } from '../data/seoData.js'

const ProposalPage = () => {
  return (
    <>
      <SEO
        title={pageSEO.proposal.title}
        description={pageSEO.proposal.description}
        keywords={pageSEO.proposal.keywords}
        url={pageSEO.proposal.path}
      />
      <div className="relative overflow-hidden bg-transparent min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${25 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <main className="relative w-full px-4 pt-28 sm:px-8 lg:px-12">
          <ProposalHero />
          <ProposalForm />
          <ContactCards />
          <MeetingScheduler />
          <ProposalFAQ />
          <SocialProof />
          {/* <ProposalCTA /> */}
        </main>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px, ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px) scale(1.2);
            opacity: 0;
          }
        }
        
        .absolute > div {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
    </>
  )
}

export default ProposalPage