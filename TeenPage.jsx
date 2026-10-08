import { Helmet } from 'react-helmet-async';
import { Briefcase, Target, DollarSign, TrendingUp, ChevronRight, PenTool, Code, PenLine, Video, Search, Megaphone, CheckCircle } from 'lucide-react';

const TeenPage = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Funngro for Teens | Learn Skills, Work on Projects & Earn</title>
        <meta name="description" content="Discover real-world projects for students and teenagers with Funngro. Build skills, gain experience, work with companies, and start earning through flexible opportunities." />
        <link rel="canonical" href="https://funngro-assignment.vercel.app/" />
        <meta property="og:title" content="Funngro for Teens | Learn Skills, Work on Projects & Earn" />
        <meta property="og:description" content="Discover real-world projects for students and teenagers with Funngro. Build skills, gain experience, work with companies, and start earning through flexible opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://funngro-assignment.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funngro for Teens | Learn Skills, Work on Projects & Earn" />
        <meta name="twitter:description" content="Discover real-world projects for students and teenagers with Funngro. Build skills, gain experience, work with companies, and start earning through flexible opportunities." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="z-10">
              <div className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
                For Students & Teens
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Turn Your Skills Into <br className="hidden md:block" />
                <span className="text-primary">Real-World Experience</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Explore projects, work with growing brands, build practical skills, and start earning while you learn.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollTo('opportunities')}
                  className="bg-primary hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-medium text-lg shadow-lg shadow-green-500/30 smooth-transition flex justify-center items-center gap-2 group focus:ring-2 focus:ring-green-400 focus:outline-none"
                >
                  Explore Opportunities
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('how-it-works')}
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-medium text-lg shadow-sm smooth-transition flex justify-center items-center focus:ring-2 focus:ring-gray-300 focus:outline-none"
                >
                  How It Works
                </button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-1.5"><CheckCircle size={16} className="text-primary"/> Real Projects</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={16} className="text-primary"/> Learn & Earn</div>
                <div className="hidden sm:flex items-center gap-1.5"><CheckCircle size={16} className="text-primary"/> Flexible Work</div>
              </div>
            </div>

            {/* Visual Hero */}
            <div className="relative h-[400px] md:h-[500px] w-full max-w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col justify-between overflow-hidden">
                {/* Mock UI Dashboard */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-6 w-24 bg-gray-100 rounded-full"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="h-24 w-full bg-green-50 rounded-xl border border-green-100 p-4 flex gap-4 items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white"><Briefcase size={24}/></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-800 rounded mb-2"></div>
                      <div className="h-3 w-48 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="h-24 w-full bg-blue-50 rounded-xl border border-blue-100 p-4 flex gap-4 items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white"><PenTool size={24}/></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-800 rounded mb-2"></div>
                      <div className="h-3 w-40 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="h-24 w-full bg-purple-50 rounded-xl border border-purple-100 p-4 flex gap-4 items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white"><DollarSign size={24}/></div>
                    <div>
                      <div className="h-4 w-28 bg-gray-800 rounded mb-2"></div>
                      <div className="h-3 w-36 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute left-0 sm:-left-6 top-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><Target size={20} /></div>
                <div className="font-semibold text-sm">Skill +1</div>
              </div>
              
              <div className="absolute right-0 sm:-right-6 bottom-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                <div className="bg-green-100 p-2 rounded-full text-green-600"><DollarSign size={20} /></div>
                <div className="font-semibold text-sm">Project Paid</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Funngro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Learn. Work. Grow.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to step into the professional world early and confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Real Projects', icon: Briefcase, desc: 'Work on practical assignments from startups and growing companies.', color: 'bg-blue-100 text-blue-600' },
              { title: 'Build Skills', icon: Target, desc: 'Improve communication, marketing, design, technology and business skills.', color: 'bg-purple-100 text-purple-600' },
              { title: 'Earn While Learning', icon: DollarSign, desc: 'Turn your time and abilities into meaningful earning opportunities.', color: 'bg-green-100 text-green-600' },
              { title: 'Build Your Profile', icon: TrendingUp, desc: 'Gain experience that can strengthen your resume and future career.', color: 'bg-orange-100 text-orange-600' }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your journey in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            {[
              { step: '01', title: 'Create Your Profile', desc: 'Tell us your skills, interests and strengths.' },
              { step: '02', title: 'Discover Projects', desc: 'Explore opportunities that match your interests.' },
              { step: '03', title: 'Complete the Work', desc: 'Follow project instructions and submit quality work.' },
              { step: '04', title: 'Learn & Earn', desc: 'Gain experience, build your portfolio and earn rewards.' }
            ].map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-md shadow-green-200 z-10">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Categories */}
      <section id="opportunities" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Opportunity Categories</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Find projects that match your passion.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('cta-section')}
              className="text-primary font-semibold hover:text-green-600 smooth-transition flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded px-2 py-1"
            >
              View All
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Megaphone, title: 'Social Media', desc: 'Manage accounts and create posts.', color: 'text-pink-500', bg: 'bg-pink-50' },
              { icon: PenLine, title: 'Content Writing', desc: 'Write blogs, articles and copy.', color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: PenTool, title: 'Graphic Design', desc: 'Create visuals and branding.', color: 'text-purple-500', bg: 'bg-purple-50' },
              { icon: Video, title: 'Video Creation', desc: 'Edit and produce video content.', color: 'text-red-500', bg: 'bg-red-50' },
              { icon: Search, title: 'Research', desc: 'Gather data and market insights.', color: 'text-yellow-600', bg: 'bg-yellow-50' },
              { icon: Target, title: 'Marketing', desc: 'Help with campaigns and outreach.', color: 'text-orange-500', bg: 'bg-orange-50' },
              { icon: Code, title: 'Technology', desc: 'Assist with testing and dev.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
              { icon: CheckCircle, title: 'Surveys & Feedback', desc: 'Review products and share ideas.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            ].map((cat, i) => (
              <div key={i} className="group bg-white rounded-xl p-6 border border-gray-100 smooth-transition">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.bg} ${cat.color} smooth-transition`}>
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-dark mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Skills You Can Build</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Working on real projects develops essential skills that schools often don't teach.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Communication', 'Digital Marketing', 'Content Creation', 'Problem Solving', 'Teamwork', 'Design Thinking', 'Research', 'Business Skills', 'Technology'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Teen Benefits</h2>
              <p className="text-gray-600 mb-8 text-lg">
                More than just pocket money, this is about building your foundation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                {[
                  'Flexible opportunities', 'Practical work experience', 
                  'Portfolio building', 'Career exposure', 
                  'Skill development', 'Confidence building', 
                  'Work with real brands', 'Learn professional communication'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="min-w-6 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-primary">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 bg-dark text-white relative overflow-hidden scroll-mt-10">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Discover opportunities, build real-world skills and grow one project at a time.
          </p>
          <button 
            onClick={() => scrollTo('opportunities')}
            className="bg-primary hover:bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-green-500/20 smooth-transition focus:ring-2 focus:ring-green-300 focus:outline-none"
          >
            Start Exploring
          </button>
        </div>
      </section>
    </>
  );
};

export default TeenPage;
