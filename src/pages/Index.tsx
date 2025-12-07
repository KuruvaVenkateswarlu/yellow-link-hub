import ProfileHeader from "@/components/ProfileHeader";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";
import { products } from "@/data/products";

const Index = () => {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="container max-w-lg mx-auto">
        <ProfileHeader />
        
        <div className="space-y-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <SocialLinks />

        <p 
          className="text-center text-xs text-muted-foreground mt-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          Links may include affiliate commissions
        </p>
      </div>
    </main>
  );
};

export default Index;
