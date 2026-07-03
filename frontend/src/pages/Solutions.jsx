import { Helmet } from 'react-helmet-async';

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions – Konara BIPV</title>
        <meta name="description" content="Explore Konara's BIPV solutions for solar facades, glass, and integrated roofs." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Solutions</h1>
        <p className="text-lg text-muted mb-12">
          We provide cutting‑edge building‑integrated photovoltaic solutions that blend architecture and renewable energy.
        </p>
        {/* Placeholder for solution cards – replace with real content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Solar Facades</h2>
            <p className="text-muted">Seamlessly integrate solar cells into building facades.</p>
          </div>
          <div className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Solar Glass</h2>
            <p className="text-muted">Transparent photovoltaic glass for walls and windows.</p>
          </div>
          <div className="p-6 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Integrated Roofs</h2>
            <p className="text-muted">High‑efficiency roof panels that blend with architecture.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
