import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";
import RelatedProducts from "@/components/Product/RelatedProducts";
import { getAllProducts, getProductBySlug } from "@/lib/productHelpers";
import styles from "@/components/Product/product.module.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for doesn't exist.",
    };
  }

  return {
    title: `${product.name} | Elinour`,
    description:
      product.shortDescription ||
      product.description.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/shop">Shop</Link>
        <span>/</span>
        <Link href={`/shop?category=${product.category}`}>
          {product.category}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className={styles.productMain}>
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </div>

      <RelatedProducts productId={product.id} />
    </div>
  );
}