import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ComingSoon } from '@/components/2026/ComingSoon';

export default function Site2026Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <ComingSoon />
      <Footer copyrightYear={2026} />
    </div>
  );
}
