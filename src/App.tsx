import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "./components/Logo";
import halicImage from "./img/halic.jpeg";
import kurumsalImage from "./img/kurumsal.png";
import surdurulebilirlikImage from "./img/surdurebilirlik.png";

type NavLink = {
  label: string;
  href: string;
};

type Sector = {
  id: string;
  path: string;
  title: string;
  description: string;
  metric: string;
  icon: JSX.Element;
};

type Principle = {
  title: string;
  description: string;
};

type HeroSlide = {
  eyebrow: string;
  title: string[];
  description: string;
  image: string;
  metricTitle: string;
  metricText: string;
};

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StrengthItem = {
  title: string;
  description: string;
};

const navLinks: NavLink[] = [
  { label: "Anasayfa", href: "/#anasayfa" },
  { label: "Hakkımızda", href: "/hakkımızda" },
  { label: "Sektörler", href: "/#sektorler" },
  { label: "Projeler", href: "/#projeler" },
  { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
];

const sectors: Sector[] = [
  {
    id: "sector-insaat",
    path: "/insaat",
    title: "İnşaat",
    description:
      "Altyapıdan nitelikli üstyapıya uzanan projelerde planlama, uygulama ve teslim disiplinini aynı çatı altında yönetiyoruz.",
    metric: "Yapısal Güç",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
        <path d="M16 50V18h32v32" className="sector-stroke" />
        <path d="M24 50V30h16v20M24 22h16M24 26h16" className="sector-stroke" />
      </svg>
    ),
  },
  {
    id: "sector-yenilenebilir-enerji",
    path: "/yenilenebilir-enerji",
    title: "Yenilenebilir Enerji",
    description:
      "Enerji üretiminde sürdürülebilir kaynaklara odaklanıyor, verimlilik ve uzun vadeli operasyonel dayanıklılığı birlikte ele alıyoruz.",
    metric: "Sürdürülebilir Güç",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
        <path d="M32 10v18M22 24c0-6 4-10 10-10s10 4 10 10-4 14-10 14-10-8-10-14Z" className="sector-stroke" />
        <path d="M20 42h24M24 50h16" className="sector-stroke" />
      </svg>
    ),
  },
  {
    id: "sector-lojistik",
    path: "/lojistik",
    title: "Lojistik",
    description:
      "Tedarik, dağıtım ve saha sevkiyat süreçlerini zamanlama hassasiyeti ve operasyonel görünürlük odağında yönetiyoruz.",
    metric: "Kesintisiz Akış",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
        <path d="M10 20h28v20H10zM38 28h8l8 8v4H38z" className="sector-stroke" />
        <circle cx="22" cy="46" r="4" className="sector-stroke" />
        <circle cx="46" cy="46" r="4" className="sector-stroke" />
      </svg>
    ),
  },
  {
    id: "sector-finans-operasyonlari",
    path: "/finans-operasyonlari",
    title: "Finans Operasyonları",
    description:
      "Nakit akışı, süreç kontrolü ve raporlama disiplinini aynı operasyonda birleştirerek ölçeklenebilir finansal yapı kuruyoruz.",
    metric: "Kontrollü Finans",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
        <rect x="14" y="16" width="36" height="30" rx="6" className="sector-stroke" />
        <path d="M24 28h16M24 34h10M20 16v-4M44 16v-4" className="sector-stroke" />
      </svg>
    ),
  },
  {
    id: "sector-dis-ticaret",
    path: "/dis-ticaret",
    title: "Dış Ticaret",
    description:
      "Uluslararası tedarik, iş geliştirme ve ticari ağ kabiliyetlerimizle güvene dayalı sınır ötesi iş birlikleri geliştiriyoruz.",
    metric: "Küresel Perspektif",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="18" className="sector-stroke" />
        <path d="M14 32h36M32 14c6 6 9 12 9 18s-3 12-9 18M32 14c-6 6-9 12-9 18s3 12 9 18" className="sector-stroke" />
      </svg>
    ),
  },
];

const principles: Principle[] = [
  {
    title: "Kapsayıcı Büyüme",
    description:
      "Sürdürülebilir ilerlemenin finansal sonuçlar kadar toplumsal etki ve kurumsal güven ile desteklenmesi gerektiğine inanıyoruz.",
  },
  {
    title: "Disiplinli Yönetişim",
    description:
      "Her sektörde ölçülebilir süreçler, güçlü karar mekanizmaları ve sorumluluk odaklı kurumsal çerçeve ile hareket ediyoruz.",
  },
  {
    title: "Uzun Vadeli Ortaklıklar",
    description:
      "İş ortaklarımız, yatırımcılarımız ve paydaşlarımızla istikrarlı, şeffaf ve sürdürülebilir ilişki modelleri kuruyoruz.",
  },
];

const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Construction Vision",
    title: ["Ölçekli projeleri", "güçlü planlama ve", "saha disipliniyle yürütüyoruz."],
    description:
      "Canyas Capital Holding, inşaat faaliyetlerinde kalite, hız ve operasyonel güveni aynı proje omurgasında bir araya getirir.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
    metricTitle: "İnşaat",
    metricText: "Altyapıdan üstyapıya uzanan kontrollü teslim modeli",
  },
  {
    eyebrow: "Investment Strategy",
    title: ["Sermayeyi seçici", "büyüme alanlarına", "disiplinle yönlendiriyoruz."],
    description:
      "Yatırım yaklaşımımız; uzun vadeli değer, kurumsal yönetişim ve sürdürülebilir getiri dengesini merkeze alır.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    metricTitle: "Yatırım",
    metricText: "Stratejik sermaye tahsisi ve uzun vadeli değer üretimi",
  },
  {
    eyebrow: "Foreign Trade Network",
    title: ["Uluslararası ticarette", "güvenilir ağlar ve", "istikrarlı ortaklıklar kuruyoruz."],
    description:
      "Dış ticaret operasyonlarımız, küresel iş geliştirme odağı ve güvene dayalı tedarik ilişkileriyle büyür.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80",
    metricTitle: "Dış Ticaret",
    metricText: "Sınır ötesi tedarik ve iş geliştirme kabiliyeti",
  },
];

const projects: ProjectItem[] = [
  {
    title: "Entegre Altyapı Programı",
    category: "İnşaat",
    description:
      "Planlama, saha koordinasyonu ve zamanında teslim disiplinini bir araya getiren çok aşamalı altyapı geliştirme modeli.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Haliç Manzaralı Premium Konut Projesi",
    category: "İnşaat",
    description:
      "Şehir siluetine hakim konumu, nitelikli mimari dili ve yüksek yaşam standardı odağıyla geliştirilen seçkin konut yatırımı.",
    image: halicImage,
  },
  {
    title: "Küresel Tedarik Koridoru",
    category: "Dış Ticaret",
    description:
      "Uluslararası iş ortaklıklarını operasyonel güven, tedarik sürekliliği ve ticari çeviklikle destekleyen dış ticaret yapısı.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Yıllık Deneyim" },
  { value: 100, suffix: "+", label: "Tamamlanan Proje" },
  { value: 15, suffix: "+", label: "Ülkede Operasyon" },
  { value: 100, suffix: "%", label: "Güven Odaklı Hizmet" },
];

const strengths: StrengthItem[] = [
  {
    title: "Güvenilir Kurumsal Yapı",
    description:
      "Karar alma süreçlerimizi ölçülebilir yönetişim ilkeleri ve hesap verebilir operasyon modelleriyle destekliyoruz.",
  },
  {
    title: "Stratejik Yatırım Yaklaşımı",
    description:
      "Sermaye tahsisini seçici büyüme alanlarına yönlendirirken uzun vadeli değer üretimini merkeze alıyoruz.",
  },
  {
    title: "Uluslararası Ticaret Perspektifi",
    description:
      "Küresel ağlar, tedarik sürekliliği ve güvene dayalı iş birlikleriyle sınır ötesi ticari kapasite geliştiriyoruz.",
  },
  {
    title: "Kaliteli ve Sürdürülebilir Projeler",
    description:
      "Projelerimizi yalnızca teslim odaklı değil, kalite standardı ve kalıcı kurumsal etki odağında yapılandırıyoruz.",
  },
];

function getCurrentPathname() {
  if (typeof window === "undefined") {
    return "/";
  }

  const decoded = decodeURIComponent(window.location.pathname);
  return decoded === "/" ? "/" : decoded.replace(/\/+$/, "");
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items?.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function updateSectorCursor(event: React.MouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
}

function useLoopingCounters(items: StatItem[], trigger: number) {
  const [values, setValues] = useState(() => items.map(() => 0));

  useEffect(() => {
    let frameId = 0;
    const duration = 1800;

    setValues(items.map(() => 0));

    const animate = (startedAt: number) => {
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setValues(items.map((item) => Math.round(item.value * progress)));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame((now) => animate(now));

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [items, trigger]);

  return values;
}

function SiteFooter() {
  return (
    <footer className="bg-white px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-cloud pt-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center">
            <Logo dark className="w-[148px] sm:w-[164px]" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-navy/62">
            İnşaat, yatırım ve dış ticarette güvenilir, stratejik ve sürdürülebilir değer
            üretimi.
          </p>
        </div>

        <div>
          <ul className="mt-9 space-y-3 text-sm text-navy/64">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.18em] text-navy">Sektörler</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy/64">
            {sectors.map((sector) => (
              <li key={sector.path}>
                <a href={sector.path}>{sector.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.18em] text-navy">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy/64">
            <li>info@canyascapital.com</li>
            <li>İstanbul, Türkiye</li>
            <li>+90 (___) ___ __ __</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs tracking-[0.14em] text-navy/48">
        © 2026 Canyas Capital Holding. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}

function SecondaryHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  return (
    <header className="border-b border-cloud bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/#anasayfa"
          className="flex items-center"
          aria-label="Canyas Capital Holding ana sayfa"
        >
          <Logo dark className="w-[118px] sm:w-[156px]" />
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) =>
            link.label === "Sektörler" ? (
              <div key={link.label} className="relative group/mega">
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm tracking-[0.16em] text-navy/72 transition hover:bg-navy/[0.05] hover:text-navy"
                >
                  {link.label}
                  <span className="text-xs transition duration-300 group-hover/mega:translate-y-0.5">
                    +
                  </span>
                </a>
                <div className="mega-menu__panel mega-menu__panel--light">
                  <div className="mega-menu__list">
                    {sectors.map((sector) => (
                      <a key={sector.id} href={sector.path} className="mega-menu__list-item mega-menu__list-item--light">
                        {sector.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm tracking-[0.16em] text-navy/72 transition hover:bg-navy/[0.05] hover:text-navy"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:info@canyascapital.com"
            className="hidden rounded-full bg-navy px-4 py-2.5 text-xs tracking-[0.18em] text-white transition hover:bg-[#13325a] sm:px-5 sm:py-3 sm:text-sm md:inline-flex"
          >
            İletişim
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cloud bg-white text-navy xl:hidden"
            aria-label="Menüyü aç"
            aria-expanded={menuOpen}
          >
            <span className="mobile-menu__icon" aria-hidden="true">
              <span className={menuOpen ? "is-open" : ""} />
              <span className={menuOpen ? "is-open" : ""} />
              <span className={menuOpen ? "is-open" : ""} />
            </span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-cloud px-4 py-4 sm:px-6 xl:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {navLinks.map((link) => (
              link.label === "Sektörler" ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileSectorsOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm tracking-[0.16em] text-navy/76 transition hover:bg-navy/[0.05] hover:text-navy"
                    aria-expanded={mobileSectorsOpen}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`text-base leading-none transition-transform duration-300 ${
                        mobileSectorsOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {mobileSectorsOpen && (
                    <div className="mt-1 space-y-1 px-4 pb-2">
                      {sectors.map((sector) => (
                        <a
                          key={sector.path}
                          href={sector.path}
                          onClick={() => {
                            setMobileSectorsOpen(false);
                            setMenuOpen(false);
                          }}
                          className="block rounded-xl px-3 py-2 text-sm text-navy/68 transition hover:bg-navy/[0.05] hover:text-navy"
                        >
                          {sector.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm tracking-[0.16em] text-navy/76 transition hover:bg-navy/[0.05] hover:text-navy"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="mailto:info@canyascapital.com"
              onClick={() => setMenuOpen(false)}
              className="inline-flex rounded-full bg-navy px-5 py-3 text-sm tracking-[0.18em] text-white md:hidden"
            >
              İletişim
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SubpageLayout({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-navy antialiased">
      <SecondaryHeader />
      <main>
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">{kicker}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/68">{intro}</p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  const revealRef = useReveal();
  const statsRef = useRef<HTMLDivElement | null>(null);
  const pathname = getCurrentPathname();
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
  const [statsTrigger, setStatsTrigger] = useState(0);
  const statValues = useLoopingCounters(stats, statsTrigger);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const startedAt = window.performance.now();
    let completedAssets = 0;
    let assetProgress = 0;
    let ambienceProgress = 0;
    let finished = false;

    const syncProgress = () => {
      const nextProgress = Math.min(100, Math.max(assetProgress, ambienceProgress));
      setLoadingProgress((current) => (nextProgress > current ? nextProgress : current));
    };

    const finishLoading = () => {
      if (finished) {
        return;
      }

      finished = true;
      setLoadingProgress(100);
      window.setTimeout(() => {
        setIsLoaderLeaving(true);
        window.setTimeout(() => setIsLoading(false), 450);
      }, 180);
    };

    const maybeFinish = () => {
      const elapsed = window.performance.now() - startedAt;
      if (completedAssets === heroSlides.length && elapsed >= 1200) {
        finishLoading();
      }
    };

    const ambientTimer = window.setInterval(() => {
      ambienceProgress = Math.min(88, ambienceProgress + 4);
      syncProgress();
      maybeFinish();
    }, 70);

    const minimumTimer = window.setTimeout(maybeFinish, 1200);

    const imageLoaders = heroSlides.map((slide) => {
      const image = new Image();
      let settled = false;

      const complete = () => {
        if (settled) {
          return;
        }

        settled = true;
        completedAssets += 1;
        assetProgress = 14 + (completedAssets / heroSlides.length) * 78;
        syncProgress();
        maybeFinish();
      };

      image.onload = complete;
      image.onerror = complete;
      image.src = slide.image;

      if (image.complete) {
        complete();
      }

      return image;
    });

    return () => {
      window.clearInterval(ambientTimer);
      window.clearTimeout(minimumTimer);
      imageLoaders.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) {
      return;
    }

    let wasVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          wasVisible = true;
          setStatsTrigger((current) => current + 1);
        } else if (!entry.isIntersecting) {
          wasVisible = false;
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const currentSlide = heroSlides[activeSlide];
  const currentSector = sectors.find((sector) => sector.path === pathname);
  const isHomePage = pathname === "/";

  const subpageContent = currentSector ? (
    <SubpageLayout
      kicker="Sektör"
      title={currentSector.title}
      intro={currentSector.description}
    >
      <section className="bg-[#F8FAFC] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-cloud bg-white p-8">
            <div className="text-[0.7rem] uppercase tracking-[0.28em] text-navy/44">
              {currentSector.metric}
            </div>
            <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-navy/[0.04] text-navy">
              {currentSector.icon}
            </div>
            <p className="mt-8 text-lg leading-8 text-navy/68">
              {currentSector.description} Operasyonlarımızı kalite, sürdürülebilirlik ve
              kurumsal güven ilkeleriyle destekliyoruz.
            </p>
          </article>
          <article className="rounded-[2rem] bg-navy p-8 text-white">
            <h2 className="text-3xl font-light tracking-[-0.03em]">Detaylı Bilgi</h2>
            <p className="mt-5 text-base leading-7 text-white/68">
              {currentSector.title} alanında proje, iş birliği ve yatırım fırsatları için
              bizimle doğrudan iletişime geçebilirsiniz.
            </p>
            <a
              href="mailto:info@canyascapital.com"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm tracking-[0.18em] text-navy"
            >
              İletişime Geç
            </a>
          </article>
        </div>
      </section>
    </SubpageLayout>
  ) : pathname === "/hakkımızda" ? (
    <SubpageLayout
      kicker="Hakkımızda"
      title="Kurumsal vizyonumuzu uzun vadeli değer üretimiyle büyütüyoruz"
      intro="Canyas Capital Holding; inşaat, yenilenebilir enerji, lojistik, finans operasyonları ve dış ticaret alanlarını aynı stratejik yapı altında bir araya getirir."
    >
      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-[1.8rem] border border-cloud bg-[#FBFCFD] p-8">
              <h2 className="text-2xl font-light tracking-[-0.03em] text-navy">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-navy/68">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SubpageLayout>
  ) : pathname === "/projeler" ? (
    <SubpageLayout
      kicker="Projeler"
      title="Tüm projeler"
      intro="Ana iş kollarımızı yansıtan seçili projeleri tek sayfada topluyoruz."
    >
      <section className="bg-[#F8FAFC] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.9rem] border border-cloud bg-white shadow-[0_18px_55px_rgba(10,35,66,0.04)]">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />
              <div className="p-8">
                <div className="text-[0.7rem] uppercase tracking-[0.3em] text-navy/44">{project.category}</div>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.03em] text-navy">{project.title}</h2>
                <p className="mt-4 text-base leading-7 text-navy/68">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SubpageLayout>
  ) : pathname === "/surdurulebilirlik" ? (
    <SubpageLayout
      kicker="Sürdürülebilirlik"
      title="Sorumlu büyüme yaklaşımımız"
      intro="Sürdürülebilir büyümeyi, yenilikçi yaklaşımı ve operasyonel mükemmeliyeti temel alarak faaliyet gösterdiğimiz tüm alanlarda kalıcı değer üretmeyi hedefliyoruz."
    >
      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-cloud bg-[#FBFCFD] p-8 sm:p-10">
            <p className="text-lg leading-8 text-navy/72">
              Sürdürülebilir büyümeyi, yenilikçi yaklaşımı ve operasyonel mükemmeliyeti temel
              alarak faaliyet gösterdiğimiz tüm alanlarda kalıcı değer üretmeyi hedefliyoruz.
              Ekonomik başarının; çevresel sorumluluk, etik yönetim anlayışı ve toplumsal fayda
              ile birlikte anlam kazandığına inanıyoruz. Bu doğrultuda, tüm iş süreçlerimizi
              verimlilik, şeffaflık ve sürekli gelişim ilkeleri çerçevesinde şekillendiriyor;
              çalışanlarımız, iş ortaklarımız ve tüm paydaşlarımızla uzun vadeli güvene dayalı
              ilişkiler kurmayı önceliklendiriyoruz.
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/72">
              Faaliyet gösterdiğimiz her sektörde, geleceğin ihtiyaçlarını bugünden öngörerek
              sürdürülebilir çözümler geliştirmeyi amaçlıyoruz. Teknoloji, inovasyon ve insan
              odaklı yaklaşımlarımızla ekonomik büyümeyi desteklerken, doğal kaynakların
              korunmasına, toplumsal gelişime ve yaşam kalitesinin artırılmasına katkı
              sağlıyoruz. Güçlü kurumsal yönetişim anlayışımız ve sorumlu iş yapış modelimiz
              sayesinde, yalnızca bugünün değil, gelecek nesillerin de ihtiyaçlarını gözeten,
              sürdürülebilir ve kalıcı bir değer oluşturmak için kararlılıkla çalışıyoruz.
            </p>
          </article>
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="min-h-[26rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${surdurulebilirlikImage})` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </SubpageLayout>
  ) : (
    <SubpageLayout
      kicker="Sayfa"
      title="İçerik bulunamadı"
      intro="İstenen sayfa mevcut değil."
    >
      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <a href="/#anasayfa" className="inline-flex rounded-lg bg-navy px-6 py-3 text-sm tracking-[0.18em] text-white">
            Anasayfaya Dön
          </a>
        </div>
      </section>
    </SubpageLayout>
  );

  return (
    <>
      {isLoading && (
        <div className={`loading-screen ${isLoaderLeaving ? "is-leaving" : ""}`}>
          <div className="loading-screen__glow" aria-hidden="true" />
          <div className="loading-screen__content">
            <Logo className="w-[188px] sm:w-[220px]" />
            <div className="loading-screen__label">Canyas Capital Holding</div>
            <div
              className="loading-screen__progress"
              role="progressbar"
              aria-valuenow={Math.round(loadingProgress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Sayfa yükleniyor"
            >
              <div
                className="loading-screen__progress-bar"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="loading-screen__value">%{Math.round(loadingProgress)}</div>
          </div>
        </div>
      )}

      {isHomePage ? (
      <div ref={revealRef} className="min-h-screen bg-white text-navy antialiased">
        <header
          id="anasayfa"
          className="relative isolate flex h-svh min-h-svh flex-col overflow-hidden bg-black text-white"
        >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.eyebrow}
              className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,14,27,0.86)_0%,rgba(5,14,27,0.64)_42%,rgba(5,14,27,0.42)_100%)]" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:88px_88px] opacity-15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />

          <nav className="relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
            <a
              href="/#anasayfa"
              className="flex items-center rounded-[1.75rem] bg-white/8 px-3 py-2 sm:px-5 sm:py-3"
              aria-label="Canyas Capital Holding ana sayfa"
            >
              <Logo className="w-[118px] sm:w-[156px]" />
            </a>

            <div className="hidden items-center gap-6 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 backdrop-blur-xl xl:flex">
              {navLinks.map((link) =>
                link.label === "Sektörler" ? (
                  <div key={link.label} className="mega-menu group/mega relative">
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm tracking-[0.16em] text-white/76 transition hover:text-white"
                    >
                      {link.label}
                      <span className="text-xs transition duration-300 group-hover/mega:translate-y-0.5">
                        +
                      </span>
                    </a>

                    <div className="mega-menu__panel">
                      <div className="mega-menu__list">
                        {sectors.map((sector) => (
                          <a
                            key={sector.id}
                            href={sector.path}
                            className="mega-menu__list-item"
                          >
                            {sector.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm tracking-[0.16em] text-white/76 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:info@canyascapital.com"
                className="hidden rounded-full border border-white/18 bg-white/10 px-4 py-2.5 text-xs tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/16 sm:px-5 sm:py-3 sm:text-sm md:inline-flex"
              >
                İletişim
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white xl:hidden"
                aria-label="Menüyü aç"
                aria-expanded={mobileMenuOpen}
              >
                <span className="mobile-menu__icon mobile-menu__icon--light" aria-hidden="true">
                  <span className={mobileMenuOpen ? "is-open" : ""} />
                  <span className={mobileMenuOpen ? "is-open" : ""} />
                  <span className={mobileMenuOpen ? "is-open" : ""} />
                </span>
              </button>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-3 sm:px-6 xl:hidden">
              <div className="rounded-[1.75rem] border border-white/12 bg-[rgba(7,20,38,0.88)] p-3 backdrop-blur-xl">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    link.label === "Sektörler" ? (
                      <div key={link.label}>
                        <button
                          type="button"
                          onClick={() => setMobileSectorsOpen((current) => !current)}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm tracking-[0.16em] text-white/76 transition hover:bg-white/10 hover:text-white"
                          aria-expanded={mobileSectorsOpen}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`text-base leading-none transition-transform duration-300 ${
                              mobileSectorsOpen ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>
                        {mobileSectorsOpen && (
                          <div className="mt-1 space-y-1 px-4 pb-2">
                            {sectors.map((sector) => (
                              <a
                                key={sector.path}
                                href={sector.path}
                                onClick={() => {
                                  setMobileSectorsOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                                className="block rounded-xl px-3 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white"
                              >
                                {sector.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm tracking-[0.16em] text-white/76 transition hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                  <a
                    href="mailto:info@canyascapital.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm tracking-[0.18em] text-navy md:hidden"
                  >
                    İletişim
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="relative z-10 mx-auto flex min-h-0 flex-1 max-w-7xl items-center px-4 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-6 lg:px-8 lg:pb-12">
            <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-10">
              <div data-reveal className="reveal max-w-4xl">
                <h1 className="-ml-[0.045em] min-h-[2.75em] max-w-5xl text-[2.35rem] font-light leading-[0.88] tracking-[-0.065em] sm:min-h-[2.8em] sm:text-5xl md:text-6xl lg:min-h-[2.7em] lg:text-[5.6rem]">
                  {currentSlide.title.map((line) => (
                    <span key={line} className="hero-line">
                      {line}
                    </span>
                  ))}
                </h1>
                <div className="mt-5 max-w-xl border-l border-white/30 pl-4 text-sm leading-6 text-white/82 sm:mt-6 sm:max-w-2xl sm:pl-5 sm:text-base sm:leading-7 lg:text-lg">
                  {currentSlide.description}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                  <a
                    href="/#sektorler"
                    className="rounded-lg bg-white px-5 py-3 text-sm font-medium tracking-[0.18em] text-navy transition hover:bg-cloud"
                  >
                    Sektörleri İncele
                  </a>
                  <a
                    href="/hakkımızda"
                    className="rounded-lg border border-white/18 bg-white/8 px-5 py-3 text-sm tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/14"
                  >
                    Kurumsal Yaklaşım
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-3 sm:mt-8">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.eyebrow}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`hero-dot ${index === activeSlide ? "is-active" : ""}`}
                      aria-label={`${slide.metricTitle} slaytını göster`}
                    />
                  ))}
                </div>
              </div>

              <aside data-reveal className="reveal hidden text-white lg:block lg:pb-2">
                <div className="hero-aside rounded-[1.75rem] p-5">
                  <div className="space-y-5">
                    <div>
                      <div className="text-2xl font-light">{currentSlide.metricTitle}</div>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        {currentSlide.metricText}
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl font-light">5 Ana Alan</div>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        İnşaat, enerji, lojistik, finans ve dış ticaret ekseninde entegre yapı
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl font-light">Uzun Vadeli</div>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        Stratejik değer üretimi odaklı disiplinli büyüme yaklaşımı
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/12 pt-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/48">
                      Sayfa
                    </span>
                    <span className="text-sm tracking-[0.24em] text-white/82">
                      {String(activeSlide + 1).padStart(2, "0")} /{" "}
                      {String(heroSlides.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </header>

      <main>
        <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 border-b border-cloud pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:pb-28">
            <div data-reveal className="reveal">
              <p className="section-kicker">Kurumsal</p>
              <h2 className="mt-5 max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-navy sm:text-5xl">
                Geleceği inşa eden güçlü bir vizyon
              </h2>
            </div>
            <div data-reveal className="reveal space-y-6 text-lg leading-8 text-navy/72">
              <p>
                Canyas Capital Holding, inşaat, yatırım ve dış ticaret alanlarını aynı
                stratejik çatı altında bir araya getirerek güvenilir, ölçülebilir ve
                sürdürülebilir bir kurumsal yapı sunar.
              </p>
              <p>
                İş modelimiz; güçlü yönetişim, seçici yatırım disiplini, uluslararası iş
                bakışı ve kaliteli proje yönetimi etrafında şekillenir. Böylece yalnızca
                büyümeyi değil, kalıcı itibarı ve uzun vadeli kurumsal değeri de inşa ederiz.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div ref={statsRef} data-reveal className="reveal mx-auto max-w-7xl">
            <div className="stats-grid">
              {stats.map((item, index) => (
                <article key={item.label} className="stats-grid__item">
                  <div className="stats-grid__value">
                    <span>{statValues[index]}</span>
                    {item.suffix && <span className="stats-grid__suffix">{item.suffix}</span>}
                  </div>
                  <div className="stats-grid__label">{item.label}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sektorler" className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal mb-14 max-w-4xl">
              <p className="section-kicker">Sektörler</p>
              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-navy sm:text-5xl">
                Ana faaliyet alanlarımız
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/68">
                Her sektörümüz, aynı kurumsal disiplinin parçası olarak farklı uzmanlık
                alanlarını ortak bir güven ve sürdürülebilirlik standardında birleştirir.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
              {sectors.map((sector, index) => (
                <article
                  id={sector.id}
                  key={sector.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                  onMouseMove={updateSectorCursor}
                  className={`sector-card reveal group flex h-full flex-col p-7 ${
                    index < 2 ? "xl:col-span-6" : "xl:col-span-4"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="sector-card__icon flex h-16 w-16 items-center justify-center rounded-[1.35rem] text-navy transition duration-500">
                      {sector.icon}
                    </div>
                    <div>
                      <h3 className="sector-card__title text-[1.65rem] font-light leading-tight tracking-[-0.03em]">
                        {sector.title}
                      </h3>
                    </div>
                  </div>
                  <p className="sector-card__description mt-6 flex-1 text-sm leading-7 sm:text-base">
                    {sector.description}
                  </p>
                  <div className="mt-6 flex items-center justify-start">
                    <a
                      href={sector.path}
                      className="sector-card__link inline-flex items-center gap-3 text-sm tracking-[0.18em]"
                    >
                      Detaylı Bilgi
                      <span className="text-lg leading-none transition duration-500 group-hover:translate-x-1">
                        +
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projeler" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div data-reveal className="reveal max-w-4xl">
                <p className="section-kicker">Projeler</p>
                <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-navy sm:text-5xl">
                  Uygulama gücünü gösteren seçili çalışmalar
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/68">
                  Farklı iş alanlarımızda geliştirdiğimiz projeleri, operasyonel disiplin ve
                  uzun vadeli değer üretimi odağıyla yapılandırıyoruz.
                </p>
              </div>
              <a
                data-reveal
                href="/projeler"
                className="reveal inline-flex rounded-lg border border-cloud px-6 py-3 text-sm tracking-[0.18em] text-navy transition hover:border-navy/20"
              >
                Tümünü Gör
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                  className="reveal overflow-hidden rounded-[1.9rem] border border-cloud bg-white shadow-[0_18px_55px_rgba(10,35,66,0.04)]"
                >
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    aria-hidden="true"
                  />
                  <div className="p-8">
                    <div className="text-[0.7rem] uppercase tracking-[0.3em] text-navy/44">
                      {project.category}
                    </div>
                    <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-navy/68">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sustainability"
          className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div data-reveal className="reveal">
                <p className="section-kicker text-white/55">Sürdürülebilirlik</p>
                <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
                  Sürdürülebilir büyüme, stratejik değer
                </h2>
              </div>
              <p data-reveal className="reveal text-lg leading-8 text-white/68">
                Uzun vadeli değer yaratımını yalnızca finansal sonuçlarla değil; güvenilir
                iş ortaklıkları, kurumsal yönetişim, sorumlu büyüme yaklaşımı ve
                uluslararası iş disipliniyle birlikte ele alıyoruz.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                  className="reveal rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-7 backdrop-blur-xl"
                >
                  <div className="text-[0.68rem] uppercase tracking-[0.32em] text-white/44">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-light tracking-[-0.03em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/64">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            <div data-reveal className="reveal lg:sticky lg:top-24 lg:self-start">
              <p className="section-kicker">Kurumsal Güç</p>
              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-navy sm:text-5xl">
                Güvenilir yapı, seçici yaklaşım
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-navy/66">
                Temel kurumsal kabiliyetlerimizi aşağı doğru ilerleyen bir anlatı içinde
                görünür kılan sticky bir yapı kuruyoruz.
              </p>
              <div className="sticky-visual mt-8 overflow-hidden rounded-[2rem]">
                <div
                  className="sticky-visual__image"
                  style={{ backgroundImage: `url(${kurumsalImage})` }}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="space-y-5">
              {strengths.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 70}ms` }}
                  className={`reveal sticky-scroll-card rounded-[1.9rem] border border-cloud p-7 sm:p-8 ${
                    index === 1 || index === 3
                      ? "sticky-scroll-card--dark bg-[#0A2342] text-white"
                      : "bg-white text-navy"
                  }`}
                >
                  <div
                    className={`text-[0.68rem] uppercase tracking-[0.28em] ${
                      index === 1 || index === 3 ? "text-white/42" : "text-navy/42"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <h3
                    className={`mt-5 text-2xl font-light tracking-[-0.03em] sm:text-[2rem] ${
                      index === 1 || index === 3 ? "text-white" : "text-navy"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 text-base leading-7 ${
                      index === 1 || index === 3 ? "text-white/68" : "text-navy/66"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-10"
        >
          <div
            data-reveal
            className="reveal mx-auto max-w-7xl rounded-[2.1rem] bg-navy px-8 py-12 text-white sm:px-10 lg:px-14"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-kicker text-white/55">İletişim</p>
                <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                  Birlikte değer üretelim
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
                  Canyas Capital Holding ile iş birliği, yatırım ve proje fırsatlarını
                  değerlendirmek için bizimle iletişime geçin.
                </p>
              </div>
              <a
                href="mailto:info@canyascapital.com"
                className="inline-flex rounded-lg bg-white px-7 py-4 text-sm tracking-[0.18em] text-navy transition hover:bg-cloud"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-cloud pt-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center">
              <Logo dark className="w-[148px] sm:w-[164px]" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-navy/62">
              İnşaat, yatırım ve dış ticarette güvenilir, stratejik ve sürdürülebilir
              değer üretimi.
            </p>
          </div>

          <div>
            <ul className="mt-9 space-y-3 text-sm text-navy/64">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em] text-navy">Sektörler</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy/64">
              {sectors.map((sector) => (
                <li key={sector.path}>
                  <a href={sector.path}>{sector.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em] text-navy">İletişim</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy/64">
              <li>info@canyascapital.com</li>
              <li>İstanbul, Türkiye</li>
              <li>+90 (___) ___ __ __</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs tracking-[0.14em] text-navy/48">
          © 2026 Canyas Capital Holding. Tüm hakları saklıdır.
        </p>
      </footer>
      </div>
      ) : (
        subpageContent
      )}
    </>
  );
}
