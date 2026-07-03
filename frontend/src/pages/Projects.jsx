import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects – Konara BIPV</title>
        <meta name="description" content="Showcase of Konara's global BIPV projects and installations." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Projects</h1>
        <p className="text-lg text-muted mb-12">
          Browse a selection of iconic projects where our solar solutions have been integrated.
        </p>
        {/* Placeholder grid for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project Alpha</h2>
            <p className="text-muted">High‑rise building with solar facade.</p>
          </div>
          <div className="p-4 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project Beta</h2>
            <p className="text-muted">Smart campus using solar glass.</p>
          </div>
          <div className="p-4 bg-background rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project Gamma</h2>
            <p className="text-muted">Integrated roof for commercial complex.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
