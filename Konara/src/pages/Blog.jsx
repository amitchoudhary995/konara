import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog – Konara BIPV</title>
        <meta name="description" content="Latest news, insights, and case studies from Konara BIPV." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog & News</h1>
        <p className="text-lg text-muted mb-12">Stay up‑to‑date with our latest projects, research, and industry trends.</p>
        {/* Placeholder grid for blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Introducing Konara Solar Facade</h2>
            <p className="text-muted">A deep dive into our flagship solar façade technology.</p>
          </article>
          <article className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">BIPV Market Trends 2024</h2>
            <p className="text-muted">Analysis of the global BIPV market growth and opportunities.</p>
          </article>
          <article className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Project Spotlight: Solar Glass Tower</h2>
            <p className="text-muted">Case study of our integration of solar glass in a high‑rise tower.</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blog;
