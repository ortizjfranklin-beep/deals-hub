// components/ShopButton.tsx
import { getAffiliateLink } from '@/app/lib/affiliates';

type Props = {
  brand: string;
  url: string;
  children?: React.ReactNode;
};

export default function ShopButton({ brand, url, children = "Shop Now" }: Props) {
  return (
    <a
      href={getAffiliateLink(brand.toLowerCase(), url)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all text-center"
    >
      {children}
    </a>
  );
}