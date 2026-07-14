import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "./components/Logo";
import halicImage from "./img/halic.jpeg";
import iletisimImage from "./img/iletisim.webp";
import disTicaretImage1 from "./img/dis-ticaret/Ekran-Resmi-2026-07-14-10.32.48.webp";
import disTicaretImage2 from "./img/dis-ticaret/Ekran-Resmi-2026-07-14-10.33.10.webp";
import disTicaretImage3 from "./img/dis-ticaret/Ekran-Resmi-2026-07-14-10.33.42.webp";
import disTicaretImage4 from "./img/dis-ticaret/Ekran-Resmi-2026-07-14-10.34.09.webp";
import disTicaretImage5 from "./img/dis-ticaret/Ekran-Resmi-2026-07-14-10.34.38.webp";
import finansImage1 from "./img/finans/finans1.webp";
import finansImage2 from "./img/finans/finans2.webp";
import finansImage3 from "./img/finans/finans3.webp";
import finansImage4 from "./img/finans/finans4.webp";
import finansImage5 from "./img/finans/finans5.webp";
import insaatImage1 from "./img/insaat/insaat1.webp";
import insaatImage2 from "./img/insaat/insaat2.webp";
import insaatImage3 from "./img/insaat/insaat3.webp";
import insaatImage4 from "./img/insaat/insaat4.webp";
import insaatImage5 from "./img/insaat/insaat5.webp";
import lojistikImage1 from "./img/lojistik/lojistik1.webp";
import lojistikImage2 from "./img/lojistik/lojistik2.webp";
import lojistikImage3 from "./img/lojistik/lojistik3.webp";
import lojistikImage4 from "./img/lojistik/lojistik4.webp";
import lojistikImage5 from "./img/lojistik/lojistik5.webp";
import kurumsalImage from "./img/kurumsal.png";
import surdurulebilirlikImage from "./img/surdurebilirlik.png";
import enerjiImage1 from "./img/yenilenebilir-enerji/enerji1.webp";
import enerjiImage2 from "./img/yenilenebilir-enerji/enerji2.webp";
import enerjiImage3 from "./img/yenilenebilir-enerji/enerji3.webp";
import enerjiImage4 from "./img/yenilenebilir-enerji/enerji4.webp";
import enerjiImage5 from "./img/yenilenebilir-enerji/enerji5.webp";

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

type GalleryItem = {
  image: string;
  alt: string;
};

type SectorDetail = {
  title: string;
  intro: string;
  paragraphsLeft: string[];
  paragraphsRight: string[];
  gallery: GalleryItem[];
};

const navLinks: NavLink[] = [
  { label: "Anasayfa", href: "/#anasayfa" },
  { label: "Hakkımızda", href: "/hakkımızda" },
  { label: "Sektörler", href: "/#sektorler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
];

const contactAddress =
  "Karadeniz Mahallesi Eski Edirne Asfaltı Caddesi No 408 Venezia AVM J Blok No 102";

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

const insaatGallery: GalleryItem[] = [
  {
    image: insaatImage1,
    alt: "İnşaat projesi görseli 1",
  },
  {
    image: insaatImage2,
    alt: "İnşaat projesi görseli 2",
  },
  {
    image: insaatImage3,
    alt: "İnşaat projesi görseli 3",
  },
  {
    image: insaatImage4,
    alt: "İnşaat projesi görseli 4",
  },
  {
    image: insaatImage5,
    alt: "İnşaat projesi görseli 5",
  },
];

const enerjiGallery: GalleryItem[] = [
  { image: enerjiImage1, alt: "Yenilenebilir enerji görseli 1" },
  { image: enerjiImage2, alt: "Yenilenebilir enerji görseli 2" },
  { image: enerjiImage3, alt: "Yenilenebilir enerji görseli 3" },
  { image: enerjiImage4, alt: "Yenilenebilir enerji görseli 4" },
  { image: enerjiImage5, alt: "Yenilenebilir enerji görseli 5" },
];

const lojistikGallery: GalleryItem[] = [
  { image: lojistikImage1, alt: "Lojistik görseli 1" },
  { image: lojistikImage2, alt: "Lojistik görseli 2" },
  { image: lojistikImage3, alt: "Lojistik görseli 3" },
  { image: lojistikImage4, alt: "Lojistik görseli 4" },
  { image: lojistikImage5, alt: "Lojistik görseli 5" },
];

const finansGallery: GalleryItem[] = [
  { image: finansImage1, alt: "Finans operasyonları görseli 1" },
  { image: finansImage2, alt: "Finans operasyonları görseli 2" },
  { image: finansImage3, alt: "Finans operasyonları görseli 3" },
  { image: finansImage4, alt: "Finans operasyonları görseli 4" },
  { image: finansImage5, alt: "Finans operasyonları görseli 5" },
];

const disTicaretGallery: GalleryItem[] = [
  { image: disTicaretImage1, alt: "Dış ticaret görseli 1" },
  { image: disTicaretImage2, alt: "Dış ticaret görseli 2" },
  { image: disTicaretImage3, alt: "Dış ticaret görseli 3" },
  { image: disTicaretImage4, alt: "Dış ticaret görseli 4" },
  { image: disTicaretImage5, alt: "Dış ticaret görseli 5" },
];

const sectorDetails: Record<string, SectorDetail> = {
  "/insaat": {
    title: "İnşaat",
    intro:
      "Canyaz Capital Holding olarak, inşaat sektöründe güven, kalite ve sürdürülebilirlik ilkelerini esas alarak yaşam alanları ve ticari yapılar inşa ediyoruz.",
    paragraphsLeft: [
      "Canyaz Capital Holding olarak, inşaat sektöründe güven, kalite ve sürdürülebilirlik ilkelerini esas alarak yaşam alanları ve ticari yapılar inşa ediyoruz. Her projeyi; mühendislik disiplini, yenilikçi yaklaşım ve uzun vadeli değer üretme anlayışıyla ele alıyor, planlama aşamasından anahtar teslimine kadar tüm süreçleri titizlikle yönetiyoruz.",
      "Faaliyet gösterdiğimiz projelerde modern yapı teknolojilerini, ulusal ve uluslararası kalite standartlarını ve iş sağlığı ile güvenliği prensiplerini ön planda tutuyoruz. Estetik, fonksiyonellik ve dayanıklılığı bir araya getiren çözümler geliştirerek bulunduğumuz bölgelere ekonomik ve sosyal değer katmayı hedefliyoruz.",
    ],
    paragraphsRight: [
      "Güçlü iş ortaklıklarımız, deneyimli teknik kadromuz ve çözüm odaklı çalışma anlayışımızla; konut, ticari yapılar, endüstriyel tesisler, altyapı ve üstyapı projelerinde güvenilir bir çözüm ortağı olmayı amaçlıyoruz.",
      "Canyaz Capital Holding olarak hedefimiz; kaliteli üretim anlayışımız, sürdürülebilir projelerimiz ve müşteri memnuniyeti odaklı yaklaşımımızla sektörün güvenilir ve tercih edilen markalarından biri olmak, geleceğin şehirlerine değer katacak projeler geliştirmektir.",
    ],
    gallery: insaatGallery,
  },
  "/yenilenebilir-enerji": {
    title: "Yenilenebilir Enerji",
    intro:
      "Canyaz Capital Holding olarak, sürdürülebilir bir gelecek inşa etmenin en önemli unsurlarından birinin temiz ve yenilenebilir enerji olduğuna inanıyoruz.",
    paragraphsLeft: [
      "Canyaz Capital Holding olarak, sürdürülebilir bir gelecek inşa etmenin en önemli unsurlarından birinin temiz ve yenilenebilir enerji olduğuna inanıyoruz. Bu doğrultuda, çevresel sorumluluğu ekonomik değer üretimiyle birleştiren enerji yatırımlarını stratejik büyüme alanlarımız arasında konumlandırıyoruz.",
      "Güneş, rüzgâr ve diğer yenilenebilir enerji kaynaklarına yönelik projeleri yakından takip ediyor; teknolojik gelişmeleri, verimlilik odaklı çözümleri ve sürdürülebilir yatırım modellerini iş süreçlerimize entegre etmeyi hedefliyoruz. Amacımız, doğal kaynakların etkin kullanımını destekleyen, karbon ayak izini azaltan ve enerji dönüşümüne katkı sağlayan projeler geliştirmektir.",
    ],
    paragraphsRight: [
      "Enerji sektöründeki faaliyetlerimizi; kalite, güvenlik, çevreye duyarlılık ve uzun vadeli sürdürülebilirlik ilkeleri doğrultusunda şekillendiriyor, kamu ve özel sektör iş birlikleriyle katma değer üreten çözümler sunmayı amaçlıyoruz.",
      "Canyaz Capital Holding, yenilenebilir enerji alanındaki yatırımlarıyla yalnızca bugünün ihtiyaçlarına değil, gelecek nesillerin yaşam kalitesine de katkı sağlamayı hedeflemektedir. İnovasyon odaklı yaklaşımımız ve güçlü vizyonumuzla, temiz enerji ekosisteminin güvenilir ve sürdürülebilir paydaşlarından biri olma yolunda kararlılıkla ilerliyoruz.",
    ],
    gallery: enerjiGallery,
  },
  "/lojistik": {
    title: "Lojistik",
    intro:
      "Canyaz Capital Holding olarak, lojistiği yalnızca bir taşıma süreci değil; tedarik zincirinin verimliliğini artıran, ticareti güçlendiren ve sürdürülebilir büyümeyi destekleyen stratejik bir hizmet alanı olarak görüyoruz.",
    paragraphsLeft: [
      "Canyaz Capital Holding olarak, lojistiği yalnızca bir taşıma süreci değil; tedarik zincirinin verimliliğini artıran, ticareti güçlendiren ve sürdürülebilir büyümeyi destekleyen stratejik bir hizmet alanı olarak görüyoruz.",
      "Kara, deniz, hava ve demiryolu taşımacılığına yönelik çözümler geliştirerek, yurt içi ve uluslararası lojistik süreçlerinin güvenilir, hızlı ve etkin şekilde yönetilmesini hedefliyoruz. Operasyonlarımızda zamanında teslimat, operasyonel mükemmeliyet ve müşteri memnuniyetini temel önceliklerimiz arasında konumlandırıyoruz.",
    ],
    paragraphsRight: [
      "Teknoloji destekli operasyon yönetimi, güçlü iş ortaklıkları ve dinamik organizasyon yapımız sayesinde değişen pazar koşullarına hızlı uyum sağlayan, esnek ve sürdürülebilir lojistik çözümleri sunmayı amaçlıyoruz. Her aşamada şeffaflık, kalite ve güven ilkeleri doğrultusunda hareket ederek müşterilerimizin tedarik zinciri süreçlerine değer katıyoruz.",
      "Canyaz Capital Holding olarak hedefimiz; yenilikçi lojistik anlayışımız, güçlü operasyon kabiliyetimiz ve sürdürülebilir hizmet yaklaşımımızla ulusal ve uluslararası pazarlarda güvenilir bir iş ortağı olmak, ticaretin kesintisiz ve verimli şekilde ilerlemesine katkı sağlamaktır.",
    ],
    gallery: lojistikGallery,
  },
  "/finans-operasyonlari": {
    title: "Finans Operasyonları",
    intro:
      "Canyaz Capital Holding olarak, finansal sürdürülebilirliği ve etkin kaynak yönetimini kurumsal büyümenin temel unsurlarından biri olarak görüyoruz.",
    paragraphsLeft: [
      "Canyaz Capital Holding olarak, finansal sürdürülebilirliği ve etkin kaynak yönetimini kurumsal büyümenin temel unsurlarından biri olarak görüyoruz. Güçlü finansal planlama anlayışımız ve disiplinli operasyon süreçlerimizle, faaliyet gösterdiğimiz tüm sektörlerde verimli, şeffaf ve sürdürülebilir finansal yapılar oluşturmayı hedefliyoruz.",
      "Finans operasyonlarımız; bütçe yönetimi, nakit akışı planlaması, mali analiz, risk yönetimi ve yatırım süreçlerinin koordinasyonunu kapsayan bütüncül bir yaklaşımla yürütülmektedir. Stratejik karar alma süreçlerini destekleyen veri odaklı analizler ve güçlü finansal kontrol mekanizmaları sayesinde operasyonel verimliliği artırmayı amaçlıyoruz.",
    ],
    paragraphsRight: [
      "Kurumsal yönetim ilkelerine bağlı, hesap verebilir ve sürdürülebilir bir finans anlayışıyla hareket ederek, iş ortaklarımız ve paydaşlarımız için uzun vadeli değer üretmeye devam ediyoruz. Değişen ekonomik koşullara uyum sağlayan esnek finansal yapımız ve geleceğe yönelik vizyonumuzla, istikrarlı büyümeyi destekleyen güçlü bir finansal altyapı oluşturuyoruz.",
    ],
    gallery: finansGallery,
  },
  "/dis-ticaret": {
    title: "Dış Ticaret",
    intro:
      "Canyaz Capital Holding olarak, küresel ticaretin sunduğu fırsatları değerlendirerek uluslararası pazarlarda sürdürülebilir iş birlikleri geliştirmeyi ve ekonomik değer üretmeyi hedefliyoruz.",
    paragraphsLeft: [
      "Canyaz Capital Holding olarak, küresel ticaretin sunduğu fırsatları değerlendirerek uluslararası pazarlarda sürdürülebilir iş birlikleri geliştirmeyi ve ekonomik değer üretmeyi hedefliyoruz. Dış ticaret faaliyetlerimizi; güven, kalite ve karşılıklı fayda ilkeleri doğrultusunda yöneterek uluslararası iş dünyasında güçlü ve kalıcı ilişkiler kurmayı amaçlıyoruz.",
      "İhracat ve ithalat süreçlerini uluslararası ticaret standartlarına uygun şekilde planlıyor; tedarik zinciri yönetimi, gümrük süreçleri, lojistik koordinasyonu ve operasyonel planlamayı etkin bir anlayışla yürütüyoruz. Değişen küresel pazar dinamiklerini yakından takip ederek iş ortaklarımıza rekabet avantajı sağlayan çözümler sunmaya odaklanıyoruz.",
    ],
    paragraphsRight: [
      "Güçlü iş ağı, profesyonel yaklaşımı ve çözüm odaklı hizmet anlayışıyla farklı sektörlerde güvenilir ticaret süreçleri geliştirmeyi hedefleyen Canyaz Capital Holding, uluslararası pazarlarda sürdürülebilir büyümeyi destekleyen stratejik projeler üretmeye devam etmektedir. Amacımız; ülkemizin küresel ticaretteki rekabet gücüne katkı sağlayan, uzun vadeli ve güvene dayalı iş ortaklıkları oluşturmaktır.",
    ],
    gallery: disTicaretGallery,
  },
};

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
          <p className="mt-4 max-w-xs text-sm leading-7 text-navy/64">{contactAddress}</p>
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
            href="/iletisim"
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
              href="/iletisim"
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
  dark = false,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`min-h-screen antialiased ${dark ? "bg-[#071426] text-white" : "bg-white text-navy"}`}>
      <SecondaryHeader />
      <main>
        <section
          className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${
            dark ? "bg-[#071426]" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <p className={`section-kicker ${dark ? "text-white/55" : ""}`}>{kicker}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className={`mt-6 max-w-3xl text-lg leading-8 ${dark ? "text-white/68" : "text-navy/68"}`}>
              {intro}
            </p>
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
  const currentSectorDetail = sectorDetails[pathname];
  const isHomePage = pathname === "/";

  const subpageContent = currentSectorDetail ? (
    <SubpageLayout
      kicker="Sektör"
      title={currentSectorDetail.title}
      intro={currentSectorDetail.intro}
    >
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(10,35,66,0.12)]">
          <div className="grid lg:grid-cols-2">
            <article className="bg-navy p-8 text-white sm:p-10 lg:p-12">
              {currentSectorDetail.paragraphsLeft.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${index === 0 ? "" : "mt-6"} max-w-xl text-lg leading-8 text-white`}
                >
                  {paragraph}
                </p>
              ))}
            </article>

            <article className="bg-white p-8 sm:p-10 lg:p-12">
              {currentSectorDetail.paragraphsRight.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${index === 0 ? "" : "mt-6"} max-w-xl text-lg leading-8 text-navy/78`}
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="insaat-gallery-card insaat-gallery-card--hero rounded-[1.5rem]">
            <img
              src={currentSectorDetail.gallery[0].image}
              alt={currentSectorDetail.gallery[0].alt}
              className="insaat-gallery-image h-full w-full transition duration-700"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {currentSectorDetail.gallery.slice(1).map((item) => (
              <div key={item.alt} className="insaat-gallery-card rounded-[1.35rem]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="insaat-gallery-image h-full w-full transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  ) : currentSector ? (
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
              href="/iletisim"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm tracking-[0.18em] text-navy"
            >
              İletişime Geç
            </a>
          </article>
        </div>
      </section>
    </SubpageLayout>
  ) : pathname === "/iletisim" ? (
    <SubpageLayout
      kicker="İletişim"
      title="Bizimle iletişime geçin"
      intro="İş birliği, yatırım ve proje süreçleriyle ilgili talepleriniz için formu doldurarak bizimle iletişime geçebilirsiniz."
    >
      <section className="bg-[#F8FAFC] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-cloud bg-white shadow-[0_18px_55px_rgba(10,35,66,0.04)]">
            <img
              src={iletisimImage}
              alt="İletişim görseli"
              className="h-full min-h-[26rem] w-full object-cover"
            />
          </div>

          <article className="rounded-[2rem] border border-cloud bg-white p-8 shadow-[0_18px_55px_rgba(10,35,66,0.04)] sm:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm tracking-[0.08em] text-navy/60">
                    Ad Soyad
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-cloud bg-[#FBFCFD] px-4 py-3 text-navy outline-none transition focus:border-navy/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm tracking-[0.08em] text-navy/60">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    className="w-full rounded-2xl border border-cloud bg-[#FBFCFD] px-4 py-3 text-navy outline-none transition focus:border-navy/30"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm tracking-[0.08em] text-navy/60">Mail</span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-cloud bg-[#FBFCFD] px-4 py-3 text-navy outline-none transition focus:border-navy/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm tracking-[0.08em] text-navy/60">Konu</span>
                <textarea
                  rows={6}
                  className="w-full rounded-2xl border border-cloud bg-[#FBFCFD] px-4 py-3 text-navy outline-none transition focus:border-navy/30"
                />
              </label>

              <button
                type="submit"
                className="inline-flex rounded-full bg-navy px-7 py-3 text-sm tracking-[0.18em] text-white transition hover:bg-[#13325a]"
              >
                Gönder
              </button>
            </form>

            <div className="mt-8 border-t border-cloud pt-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M19.11 4.93A9.9 9.9 0 0 0 12.05 2C6.6 2 2.16 6.42 2.16 11.88c0 1.75.46 3.46 1.34 4.98L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.45 0 9.89-4.43 9.89-9.89a9.8 9.8 0 0 0-2.83-7ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.31a8.17 8.17 0 0 1-1.27-4.4c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.85 5.83 2.4a8.14 8.14 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.21 8.23Zm4.5-6.18c-.25-.13-1.48-.73-1.71-.82-.23-.08-.39-.12-.56.13-.16.25-.64.82-.78.98-.14.16-.28.18-.53.06-.25-.12-1.05-.39-1.99-1.25-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.41.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.47-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.19 3.7.58.25 1.04.4 1.39.51.58.18 1.11.15 1.53.09.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm tracking-[0.16em] text-navy/54">Adres</div>
                  <p className="mt-2 max-w-lg text-base leading-7 text-navy/72">
                    {contactAddress}
                  </p>
                </div>
              </div>
            </div>
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
                href="/iletisim"
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
                    href="/iletisim"
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
                href="/iletisim"
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
