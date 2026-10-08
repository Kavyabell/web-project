import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Clock, PieChart, Users, ChevronRight, PenTool, Search, Megaphone, Smartphone, Presentation, Code, Globe, CheckCircle } from 'lucide-react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CompaniesPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateForm = (form) => {
    const companyName = form.companyName.value.trim();
    const workEmail = form.workEmail.value.trim();
    const projectType = form.projectType.value;
    const description = form.description.value.trim();
    const errors = {};

    if (companyName.length < 2) {
      errors.companyName = 'Please enter your company name (at least 2 characters).';
    }
    if (!EMAIL_PATTERN.test(workEmail)) {
      errors.workEmail = 'Please enter a valid work email address.';
    }
    if (!projectType) {
      errors.projectType = 'Please select a project type.';
    }
    if (description.length < 20) {
      errors.description = 'Please describe your project in at least 20 characters.';
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const errors = validateForm(form);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setFormSubmitted(true);
    form.reset();
    setFormErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Hire Young Talent for Projects | Funngro for Companies</title>
        <meta name="description" content="Work with talented young individuals for digital, creative, research and marketing projects. Funngro helps companies access energetic young talent for practical assignments." />
        <link rel="canonical" href="https://funngro-assignment.vercel.app/companies" />
        <meta property="og:title" content="Hire Young Talent for Projects | Funngro for Companies" />
        <meta property="og:description" content="Work with talented young individuals for digital, creative, research and marketing projects. Funngro helps companies access energetic young talent for practical assignments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://funngro-assignment.vercel.app/companies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Young Talent for Projects | Funngro for Companies" />
        <meta name="twitter:description" content="Work with talented young individuals for digital, creative, research and marketing projects. Funngro helps companies access energetic young talent for practical assignments." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="z-10">
              <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
                For Companies & Startups
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Fresh Talent for <br className="hidden md:block" />
                <span className="text-blue-600">Real Business Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Connect with motivated young talent for digital, creative, research and marketing projects while giving the next generation meaningful work experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollTo('cta-section')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium text-lg shadow-lg shadow-blue-500/30 smooth-transition flex justify-center items-center gap-2 group focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  Post a Project
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('projects')}
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-medium text-lg shadow-sm smooth-transition flex justify-center items-center focus:ring-2 focus:ring-gray-300 focus:outline-none"
                >
                  Explore Talent
                </button>
              </div>
            </div>

            {/* Visual Hero - Dashboard Illustration */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-100 rounded-[2rem] transform -rotate-3 scale-105 opacity-50"></div>
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-5 w-32 bg-gray-800 rounded mb-2"></div>
                    <div className="h-3 w-20 bg-gray-400 rounded"></div>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Users size={20} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Candidate Card 1 */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-700 rounded mb-1"></div>
                        <div className="h-3 w-32 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Match</div>
                  </div>

                  {/* Candidate Card 2 */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-tr from-orange-400 to-red-400 rounded-full"></div>
                      <div>
                        <div className="h-4 w-28 bg-gray-700 rounded mb-1"></div>
                        <div className="h-3 w-24 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Match</div>
                  </div>
                  
                  {/* Candidate Card 3 */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-tr from-green-400 to-teal-400 rounded-full"></div>
                      <div>
                        <div className="h-4 w-20 bg-gray-700 rounded mb-1"></div>
                        <div className="h-3 w-28 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full">Review</div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="h-10 w-full bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                    <div className="h-3 w-24 bg-blue-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Companies Choose Funngro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Companies Choose Funngro</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the potential of Gen Z to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fresh Perspective', icon: Lightbulb, desc: 'Get ideas and insights from digitally native young talent.', color: 'bg-yellow-100 text-yellow-600' },
              { title: 'Flexible Project Support', icon: Clock, desc: 'Get help for short-term, creative and research assignments.', color: 'bg-blue-100 text-blue-600' },
              { title: 'Cost-Efficient Execution', icon: PieChart, desc: 'Work with talent for defined project-based requirements.', color: 'bg-green-100 text-green-600' },
              { title: 'Talent Discovery', icon: Users, desc: 'Identify promising young individuals early for future roles.', color: 'bg-purple-100 text-purple-600' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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

      {/* Projects to Post */}
      <section id="projects" className="py-20 bg-gray-50 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Projects Companies Can Post</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the right talent for diverse business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Megaphone, title: 'Social Media Campaigns' },
              { icon: Search, title: 'Market Research' },
              { icon: PenTool, title: 'Content Creation' },
              { icon: Smartphone, title: 'Video & Reels' },
              { icon: Presentation, title: 'Graphic Design' },
              { icon: CheckCircle, title: 'Product Feedback' },
              { icon: PieChart, title: 'Data Collection' },
              { icon: Users, title: 'Campus Outreach' },
              { icon: Code, title: 'Website Testing' },
              { icon: Globe, title: 'Digital Marketing' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                <item.icon size={28} className="text-blue-500 mb-3" />
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How Companies Can Get Started</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined process to find and work with young talent.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Create a Project' },
                { step: '2', title: 'Define Requirements' },
                { step: '3', title: 'Connect With Talent' },
                { step: '4', title: 'Review Submissions' },
                { step: '5', title: 'Complete the Project' }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 z-10 shadow-lg shadow-blue-200">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Benefits & Ideal For */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Quick Project Execution', desc: 'Get deliverables on time with motivated talent.' },
                  { title: 'Diverse Young Talent', desc: 'Access students from various backgrounds.' },
                  { title: 'Fresh Consumer Insights', desc: 'Understand the Gen Z perspective.' },
                  { title: 'Flexible Collaboration', desc: 'Scale up or down as needed.' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 className="font-bold text-blue-400 mb-2 text-lg">{stat.title}</h3>
                    <p className="text-slate-400 text-sm">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Ideal For</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  'Startups', 'Marketing Teams', 'Consumer Brands', 
                  'Agencies', 'Research Teams', 'Small Businesses'
                ].map((tag, i) => (
                  <div key={i} className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-medium cursor-default">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA / Contact Form Section */}
      <section id="cta-section" className="py-24 bg-blue-50 relative overflow-hidden scroll-mt-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Turn Your Next Idea Into a Project</h2>
              <p className="text-xl text-gray-600 mb-8">
                Work with energetic young talent and bring fresh perspectives to your business. Fill out the form to post your requirements.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-blue-600" size={20} /> Zero hiring fees
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-blue-600" size={20} /> Access to top 1% Gen Z talent
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-blue-600" size={20} /> Pay only for completed projects
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6">Post Your Project</h3>
              
              {formSubmitted ? (
                <div
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-lg font-semibold text-green-800">
                    Thanks! Your project request has been received.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    Submit another project
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      autoComplete="organization"
                      aria-invalid={Boolean(formErrors.companyName)}
                      aria-describedby={formErrors.companyName ? 'companyName-error' : undefined}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="e.g. Acme Corp"
                    />
                    {formErrors.companyName && (
                      <p id="companyName-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      autoComplete="email"
                      aria-invalid={Boolean(formErrors.workEmail)}
                      aria-describedby={formErrors.workEmail ? 'workEmail-error' : undefined}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                    {formErrors.workEmail && (
                      <p id="workEmail-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.workEmail}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      aria-invalid={Boolean(formErrors.projectType)}
                      aria-describedby={formErrors.projectType ? 'projectType-error' : undefined}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="content">Content Creation</option>
                      <option value="research">Market Research</option>
                      <option value="design">Graphic Design</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.projectType && (
                      <p id="projectType-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.projectType}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      aria-invalid={Boolean(formErrors.description)}
                      aria-describedby={formErrors.description ? 'description-error' : undefined}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none min-h-[5rem]"
                      placeholder="Briefly describe what you need help with..."
                    />
                    {formErrors.description && (
                      <p id="description-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.description}</p>
                    )}
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md smooth-transition focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none mt-2">
                    Submit Project
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesPage;
