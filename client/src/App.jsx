import React from 'react';
import { Briefcase, User, Search, MapPin, DollarSign, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-morphism border-b px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary-600 p-2 rounded-lg">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">SkillMatch <span className="text-primary-600">India</span></span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">Find Jobs</a>
          <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">Courses</a>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <button className="text-slate-700 font-medium">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* Hero / Header */}
      <header className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900">Precision Job Matching for <span className="text-primary-600">India's Tech Talent</span></h1>
            <p className="text-lg text-slate-600 max-w-2xl">Upload your CV and let our AI match you with the highest relevance jobs based on your skills and experience.</p>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary flex items-center gap-2">
                <User className="w-4 h-4" /> Upload Resume
              </button>
              <button className="px-6 py-2 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all text-sm">
                Browse Jobs
              </button>
            </div>
          </div>
          <div className="hidden md:block w-72 h-48 bg-primary-100 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-24 h-24 text-primary-300 transform -rotate-12" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (Jobs Feed Placeholder) */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Personalized Feed</h2>
            <p className="text-slate-500">Jobs matching your profile at 85% or higher</p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-100">Most Relevant</span>
            <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium border border-slate-200 cursor-pointer hover:bg-slate-200">Recent</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Job Card */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="card hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  {i === 1 ? 'Go' : i === 2 ? 'In' : 'Ms'}
                </div>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                  {90 - i * 5}% Match
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Senior Full Stack Developer</h3>
              <p className="text-slate-500 text-sm mb-4">{i === 1 ? 'Google' : i === 2 ? 'Infosys' : 'Microsoft'} • India</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'PostgreSQL', 'AWS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-600 rounded text-[10px] font-semibold uppercase tracking-wider border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1 font-medium">
                  <DollarSign className="w-3.5 h-3.5" /> 18L - 25L
                </div>
                <button className="text-primary-600 font-bold hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
