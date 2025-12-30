import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Bolt,
  ChartLine,
  CheckCircle,
  Utensils,
  DollarSign,
  Star,
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFAFF] font-sans text-slate-900 scroll-smooth">
      {/* --- NAVBAR --- */}
      <nav className="bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-purple-200 shadow-lg">
            <BookOpen size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Learnify</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-purple-600 cursor-pointer transition-colors">Features</a>
          <a href="#pricing" className="hover:text-purple-600 cursor-pointer transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-purple-600 cursor-pointer transition-colors">Testimonials</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden text-white pt-24 pb-36 px-6 md:px-12 bg-gradient-to-br from-purple-700 via-violet-600 to-fuchsia-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-lg border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-fuchsia-300 animate-pulse"></span>
              <span className="font-medium text-white/90">Powered by Advanced AI</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Learn Smarter <br /> with <span className="text-fuchsia-200">AI Tutors</span>
            </h1>
            <p className="text-purple-50 text-xl max-w-lg leading-relaxed font-light">
              Personalized learning paths and adaptive content tailored to your pace. Transform your education journey today.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-slate-50 rounded-2xl font-bold px-10 h-14 shadow-xl transition-transform hover:scale-105">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl font-bold px-10 h-14 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-transform hover:scale-105">
                Sign Up
              </Button>
            </div>
          </div>

          {/* HERO IMAGE CONTAINER */}
          <div className="relative group">
            <div className="w-full aspect-[4/3] bg-white/10 rounded-[2.5rem] border border-white/20 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* REPLACE '/your-photo.png' WITH YOUR ACTUAL IMAGE PATH */}
              <Image 
                src="/your-photo.png" 
                alt="AI Learning Platform Preview"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />

              <div className="absolute bottom-8 left-8 bg-white p-5 rounded-[1.5rem] shadow-2xl flex items-center gap-4 text-slate-800 animate-bounce">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                  <Bolt size={24} />
                </div>
                <div>
                  <div className="text-base font-bold">98% Completion</div>
                  <div className="text-xs text-slate-500">Industry leading results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- WHY CHOOSE SECTION --- */}
      <section id="features" className="py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose <span className="text-purple-600">Learnify?</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Experience the future of online learning with our AI-powered platform designed for your unique success path.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureCard icon={<ChartLine className="text-purple-600" />} bgColor="bg-purple-50" title="Personalized Paths" desc="Customized learning paths that adapt in real-time based on your personal progress." />
          <FeatureCard icon={<CheckCircle className="text-purple-600" />} bgColor="bg-purple-50" title="Progress Tracking" desc="Real-time analytics and detailed progress reports to monitor every improvement." />
          <FeatureCard icon={<Utensils className="text-purple-600" />} bgColor="bg-purple-50" title="Interactive Content" desc="Engage with interactive quizzes and projects that make learning truly enjoyable." />
          <FeatureCard icon={<DollarSign className="text-purple-600" />} bgColor="bg-purple-50" title="Affordable Pricing" desc="Flexible subscription plans that fit your budget. Start free and upgrade whenever." />
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-32 bg-purple-50/50 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Loved by Learners</h2>
            <p className="text-slate-500 text-lg">Real feedback from our global community of students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialCard name="Marcus Johnson" role="Full Stack Developer" text="Learnify's AI completely changed how I learn. The personalized paths saved me months of wasted time." />
            <TestimonialCard name="Emily Rodriguez" role="Data Scientist" text="The AI mentor feature is incredible! I have an answer to every question I ask, 24/7. It's truly a game changer." />
            <TestimonialCard name="David Chen" role="Product Manager" text="Best investment I've made in my career. The quality of content and AI personalization is unmatched." />
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-32 bg-white px-6 md:px-12 border-y border-purple-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20">Choose the plan that fits your goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard title="Free" price="$0" subtitle="Always free for individuals" features={["Basic AI Access", "Limited Courses", "Community Support"]} />
            <PricingCard title="Starter" price="$6.99" subtitle="Create AI Courses & learn" billedInfo="Billed annually" features={["AI Course Generation", "Course Banner Images", "Priority Email Support"]} />
            <PricingCard title="Premium" price="$7.99" subtitle="Full power of AI Learning" billedInfo="Billed annually" features={["Unlimited AI Generation", "Custom Banner Design", "24/7 Direct Support"]} />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-32 bg-purple-600 text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 flex items-center justify-center gap-4">How It Works <span className="text-purple-200">🤔</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-purple-500/30 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 text-left">
              <div className="text-4xl font-black text-purple-200 mb-6">01</div>
              <h3 className="text-2xl font-bold mb-4">Explore</h3>
              <p className="text-purple-50 leading-relaxed">Browse AI-curated courses specifically for your skill level.</p>
            </div>
            <div className="bg-purple-500/30 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 text-left">
              <div className="text-4xl font-black text-purple-200 mb-6">02</div>
              <h3 className="text-2xl font-bold mb-4">Learn</h3>
              <p className="text-purple-50 leading-relaxed">Engage with your AI tutor to clarify complex topics in real-time.</p>
            </div>
            <div className="bg-purple-500/30 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 text-left">
              <div className="text-4xl font-black text-purple-200 mb-6">03</div>
              <h3 className="text-2xl font-bold mb-4">Master</h3>
              <p className="text-purple-50 leading-relaxed">Apply your knowledge through projects and reach your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-32 bg-slate-950 text-white px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center pb-24 border-b border-white/10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 flex items-center justify-center gap-5 leading-tight text-white">
            Ready to Start Your <br /> Learning Journey? <Rocket className="text-purple-400" size={50} />
          </h2>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-slate-100 px-16 py-8 text-xl font-bold rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95">
              Sign Up
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white"><BookOpen size={18} /></div>
              <span className="text-xl font-bold">Learnify</span>
            </div>
            <p className="text-slate-500 text-sm">The world's most advanced AI-powered learning ecosystem.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-8">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-8">Social</h4>
            <div className="flex gap-6">
              <Facebook className="text-slate-400 hover:text-purple-400 cursor-pointer transition" size={20} />
              <Twitter className="text-slate-400 hover:text-purple-400 cursor-pointer transition" size={20} />
              <Instagram className="text-slate-400 hover:text-purple-400 cursor-pointer transition" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function PricingCard({ title, price, subtitle, billedInfo, features }) {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-purple-100/30 flex flex-col text-left overflow-hidden transition-all hover:border-purple-200">
      <div className="p-10 pb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
        <div className="mb-4">
          <span className="text-5xl font-extrabold text-slate-900">{price}</span>
          {billedInfo && <span className="text-slate-400 text-lg ml-1 font-medium">/mo</span>}
        </div>
        <p className="text-slate-500 text-sm mb-8 font-medium">{subtitle}</p>
        {billedInfo && (
          <div className="flex items-center gap-3 mb-6 p-1.5 bg-purple-50 rounded-full w-fit pr-4 border border-purple-100">
            <div className="w-10 h-5 bg-purple-600 rounded-full relative">
               <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">{billedInfo}</span>
          </div>
        )}
      </div>

      <div className="px-10 pt-8 pb-10 border-t border-purple-50 flex-grow bg-purple-50/30">
        <ul className="space-y-5 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-sm text-slate-600 font-medium">
              <div className="bg-fuchsia-100 p-1 rounded-full"><Check className="text-fuchsia-600" size={12} /></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-7 rounded-[1.25rem] font-bold shadow-lg transition-all active:scale-95">
          Switch to this plan
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, bgColor }) {
  return (
    <div className="bg-white p-10 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group text-left">
      <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-purple-100/50 space-y-6 shadow-sm hover:shadow-md transition-all text-left">
      <div className="flex text-amber-400 gap-1">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="text-slate-600 italic text-lg leading-relaxed font-light">"{text}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-purple-50">
        <div className="w-12 h-12 bg-purple-50 rounded-2xl overflow-hidden ring-4 ring-purple-50">
          <Image 
            src={`https://ui-avatars.com/api/?name=${name}&background=9333ea&color=fff`} 
            width={48} 
            height={48} 
            alt={name} 
            unoptimized
          />
        </div>
        <div>
          <div className="text-base font-bold text-slate-900">{name}</div>
          <div className="text-xs text-purple-600 font-semibold uppercase tracking-wider">{role}</div>
        </div>
      </div>
    </div>
  );
}