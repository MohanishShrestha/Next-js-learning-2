import Reviews from "@/components/Reviews";
import AboutPage from "../about/page";
import ProductsPage from "../products/page";
import { Suspense } from "react";

export default function ProductReviewPage() {
  return (
    <div>
      <h1>Product Review Page</h1>
      <p>This is where users can leave reviews for products.</p>
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductsPage />
      </Suspense>

      <Suspense fallback={<div>Loading about page...</div>}>
        <AboutPage />
      </Suspense>

      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
