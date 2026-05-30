import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock, Phone, ArrowRight, Hammer, Sofa, Trees, Compass, PaintBucket, Ruler } from "lucide-react";
import heroImg from "@/assets/elegency/hero.jpg";
import aboutImg from "@/assets/elegency/about.jpg";
import kitchenImg from "@/assets/elegency/kitchen.jpg";
import fireplaceImg from "@/assets/elegency/fireplace.jpg";
import g1 from "@/assets/elegency/g1.jpg";
import g2 from "@/assets/elegency/g2.jpg";
import g3 from "@/assets/elegency/g3.jpg";
import g4 from "@/assets/elegency/g4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elegency Interiors — Everything Home | Sandton, Johannesburg" },
      { name: "description", content: "Luxury renovations, interior design, custom furniture and kitchen builds in Sandton, Johannesburg. Build your dream home with Elegency Interiors." },
      { property: "og:title", content: "Elegency Interiors — Everything Home" },
      { property: "og:description", content: "Luxury renovations, interior design, custom furniture and kitchen builds in Sandton, Johannesburg." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: PaintBucket, title: "Interior Decorating", desc: "Curated palettes, finishes and styling that bring rooms to life." },
  { icon: Hammer, title: "Home Renovations", desc: "New builds, flooring, bathroom and kitchen remodels — turnkey." },
  { icon: Sofa, title: "Custom Furniture", desc: "Bespoke pieces designed and crafted for your space." },
  { icon: Ruler, title: "Space Planning", desc: "Smart layouts that balance flow, function and beauty." },
  { icon: Compass, title: "Architectural Advise", desc: "Guidance from concept through to construction." },
  { icon: Trees, title: "Garden & Landscaping", desc: "Outdoor environments that extend the home." },
];

const hours = [
  ["Monday", "09:00 – 18:00"],
  ["Tuesday", "09:00 – 18:00"],
  ["Wednesday", "09:00 – 18:00"],
  ["Thursday", "09:00 – 18:00"],
  ["Friday", "09:00 – 18:00"],
  ["Saturday", "10:00 – 15:00"],
  ["Sunday", "Closed"],
];

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif italic tracking-tight ${className}`}>
      <span className="text-[1.15em]">E</span>
      <span className="-ml-1 text-[1.15em]">L</span>
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Monogram className="text-2xl text-ink" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground hidden sm:inline">Elegency Interiors</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#kitchens" className="hover:text-accent transition">Kitchens</a>
            <a href="#work" className="hover:text-accent transition">Work</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream text-xs tracking-[0.2em] uppercase hover:bg-accent transition">
            Enquire
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img src={heroImg} alt="Elegency Interiors kitchen" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-20 sm:pb-28">
          <p className="text-cream/80 text-xs tracking-[0.4em] uppercase mb-6">Est. 2021 · Sandton, Johannesburg</p>
          <h1 className="text-cream font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-4xl">
            Build your<br /><em className="font-light text-bronze">dream home</em> with us.
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 text-base sm:text-lg">
            Renovations, luxury furniture and interior design — crafted end-to-end by Elegency Interiors.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-bronze hover:text-cream transition">
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-cream/50 text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-cream hover:text-ink transition">
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">About Us</p>
            <h2 className="text-4xl sm:text-5xl mb-8 leading-tight">
              Elegency Interiors —<br /><em className="text-bronze">Everything Home.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer a wide range of furniture procurement, renovation and design services tailored to your taste. From large-scale projects to bespoke details, we design and execute every job end-to-end.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Sandton, Johannesburg, we have built our reputation on luxury, craft, and a deep understanding of how a home should feel.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div><div className="font-serif text-3xl text-ink">104K+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Followers</div></div>
              <div><div className="font-serif text-3xl text-ink">550+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Projects</div></div>
              <div><div className="font-serif text-3xl text-ink">Est. 2021</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Sandton, JHB</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="Elegency Interiors completed home" loading="lazy" className="w-full h-auto object-contain bg-secondary/40" />
            <div className="absolute -bottom-6 -left-6 bg-cream border border-border p-6 max-w-xs hidden sm:block">
              <Monogram className="text-3xl text-bronze" />
              <p className="text-sm text-muted-foreground mt-2 italic font-serif">"We bring everything home — from the first sketch to the final cushion."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">What we do</p>
              <h2 className="text-4xl sm:text-5xl max-w-xl leading-tight">A complete <em className="text-bronze">design & build</em> studio.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Every service below is delivered in-house by our team of designers, makers and project managers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-10 hover:bg-cream transition group">
                <Icon className="w-7 h-7 text-bronze mb-6" strokeWidth={1.2} />
                <h3 className="text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border">
            {["Wallpaper Installations", "Furniture Procurement", "Selection of Furniture & Accessories", "Project Management"].map(t => (
              <div key={t} className="bg-background px-10 py-6 text-sm tracking-wide text-foreground/80">— {t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* KITCHENS */}
      <section id="kitchens" className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src={kitchenImg} alt="Level One Kitchen by Elegency Interiors" loading="lazy" className="w-full h-auto object-contain bg-secondary/40" />
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">Signature Kitchens</p>
            <h2 className="text-4xl sm:text-5xl mb-4 leading-tight">Level One <em className="text-bronze">Kitchen</em></h2>
            <div className="inline-block bg-bronze text-cream px-5 py-2 text-sm tracking-wider mb-8">R165 000 – R275 000</div>

            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-ink mb-3 font-sans font-semibold">Finish</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>· Melamine, Supatextured and Supa High Gloss</li>
                  <li>· Normal Handles, Gola or Push to Open</li>
                  <li>· Plastic adjustable legs and aluminium kick plates</li>
                  <li>· Glass cut-out Mela wood or aluminium doors with LED lights</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-ink mb-3 font-sans font-semibold">Accessories</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>· Heavy duty ball bearing runners · Soft close hinges</li>
                  <li>· Standard square line steel sink and taps</li>
                  <li>· Vegetable baskets (2 layer) · Spice rack · Tilt bin</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-ink mb-3 font-sans font-semibold">Counter Top</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>· Formica Life seal worktop · Quartz 20mm top</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-border flex justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>~ 10% of home value</span>
                <span>Manufacture: ± 2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 sm:py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl leading-tight">Recent <em className="text-bronze">installations.</em></h2>
            <p className="text-muted-foreground mt-4">A selection of bathrooms, kitchens and bespoke joinery from our recent projects.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[g1, g2, g3, g4].map((src, i) => (
              <div key={i} className="overflow-hidden bg-secondary/40 group">
                <img src={src} alt={`Elegency Interiors project ${i + 1}`} loading="lazy" className="w-full h-auto object-contain group-hover:scale-[1.02] transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WORK / VIDEOS */}
      <section id="work" className="py-24 sm:py-32 px-6 bg-ink text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-bronze mb-4">Recent Work</p>
            <h2 className="text-4xl sm:text-5xl leading-tight">Spaces in <em className="text-bronze">motion.</em></h2>
            <p className="text-cream/70 mt-4">A closer look at recently completed renovations and installations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4"].map((src, i) => (
              <div key={src} className="relative aspect-[9/16] overflow-hidden bg-secondary/10 group">
                <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-xs tracking-[0.3em] uppercase text-cream/90">Project · 0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <img src={fireplaceImg} alt="Custom built-in TV wall with fireplace" loading="lazy" className="w-full h-auto object-contain bg-ink" />
            <div className="bg-secondary/5 border border-cream/10 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl text-cream mb-4">Custom Built-Ins</h3>
                <p className="text-cream/70 leading-relaxed">From slatted wood feature walls to integrated fireplaces and bespoke TV units — every detail designed to your space.</p>
              </div>
              <a href="https://www.instagram.com/elengecy_interiors/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 text-bronze text-xs tracking-[0.3em] uppercase hover:text-cream transition">
                See more on Instagram <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">Get in touch</p>
            <h2 className="text-4xl sm:text-5xl mb-8 leading-tight">Let's build something <em className="text-bronze">remarkable.</em></h2>
            <p className="text-muted-foreground mb-10 max-w-md">We work on appointment. Reach out via WhatsApp, email or Instagram and our team will respond within one working day.</p>

            <div className="space-y-5">
              <a href="mailto:sales@elengecyinteriors.com" className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-bronze mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-foreground group-hover:text-accent transition">sales@elengecyinteriors.com</div>
                </div>
              </a>
              <a href="https://wa.me/message/F2YZYNTLBKCPK1" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-bronze mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="text-foreground group-hover:text-accent transition">Message us on WhatsApp Business</div>
                </div>
              </a>
              <a href="https://www.instagram.com/elengecy_interiors/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <Instagram className="w-5 h-5 text-bronze mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                  <div className="text-foreground group-hover:text-accent transition">@elengecy_interiors · 104K followers</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-bronze mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Studio</div>
                  <div className="text-foreground">Office No. 9083, Atrium on 5th, 9th Floor</div>
                  <div className="text-foreground">5th Street, Sandton, Johannesburg, 2196</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/40 p-10">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-bronze" />
              <h3 className="text-2xl">Studio Hours</h3>
            </div>
            <ul className="divide-y divide-border">
              {hours.map(([d, t]) => (
                <li key={d} className="flex justify-between py-3 text-sm">
                  <span className="text-foreground">{d}</span>
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">By appointment</p>
              <p className="text-sm text-foreground/80">All consultations are scheduled in advance to give you our full attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Monogram className="text-2xl text-bronze" />
            <span className="text-xs tracking-[0.3em] uppercase">Elegency Interiors · Est. 2021</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="https://www.instagram.com/elengecy_interiors/" target="_blank" rel="noopener noreferrer" className="hover:text-bronze transition flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a>
            <a href="mailto:sales@elengecyinteriors.com" className="hover:text-bronze transition">sales@elengecyinteriors.com</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Elegency Interiors</p>
        </div>
      </footer>
    </div>
  );
}
