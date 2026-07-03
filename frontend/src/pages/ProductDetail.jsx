import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>{`Product ${id} – Konara BIPV`}</title>
        <meta name="description" content={`Details about Konara product ${id}.`} />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Product {id}</h1>
        <p className="text-lg text-muted">This is a placeholder page for product details. Replace with real content.</p>
      </section>
    </>
  );
};

export default ProductDetail;
