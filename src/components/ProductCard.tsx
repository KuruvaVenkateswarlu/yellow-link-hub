import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card flex items-center gap-4 opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
      </div>

      <div className="flex-shrink-0">
        <span className="btn-affiliate gap-2">
          View
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
};

export default ProductCard;
