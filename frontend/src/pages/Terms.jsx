import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions – Konara BIPV</title>
        <meta name="description" content="Konara BIPV terms and conditions governing the use of our website and services." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
        <p className="text-lg text-muted mb-4">
          Please read these terms carefully before using our website.
        </p>
        {/* Placeholder content – replace with actual legal text */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Acceptance of Terms</h2>
        <p className="text-muted mb-4">
          By accessing or using this site, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-4">Intellectual Property</h2>
        <p className="text-muted mb-4">
          All content, logos, and designs are the property of Konara BIPV unless otherwise noted.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
        <p className="text-muted mb-4">
          Konara BIPV shall not be liable for any indirect, incidental, or consequential damages.
        </p>
        <p className="text-muted mt-8">Last updated: September 2026</p>
      </section>
    </>
  );
};

export default Terms;
