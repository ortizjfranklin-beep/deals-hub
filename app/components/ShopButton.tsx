// app/components/ShopButton.tsx
import { getAffiliateLink } from '@/lib/affiliates';
import { ExternalLink } from 'lucide-react';

type Props = {
  brand: string;
  url: string;
  children?: React.ReactNode;
};

export default function ShopButton({ brand, url, children = "Go to Store" }: Props) {
  const cleanBrand = brand.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');

  return (
    <a
      href={getAffiliateLink(cleanBrand, url)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 group relative overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 
                 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-400
                 text-white font-semibold py-4 px-6 rounded-2xl 
                 flex items-center justify-center gap-2 transition-all duration-300 
                 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40
                 active:scale-[0.97]"
    >
      <span>{children}</span>
      <ExternalLink size={20} className="transition-transform group-hover:translate-x-0.5" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </a>
  );
}