import { Suspense } from "react";
import Product from "@/components/product";
import Reviews from "@/components/reviews";
import Loading from "@/components/Loading";

const ProductDetailPage = () => {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
