import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Konara BIPV</title>
        <meta name="description" content="Konara BIPV privacy policy detailing data collection, usage, and user rights." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <p className="text-lg text-muted mb-4">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
        {/* Placeholder sections – replace with actual policy content */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>
        <p className="text-muted mb-4">
          We may collect names, email addresses, phone numbers, and other contact information when you fill out forms or subscribe to newsletters.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Data</h2>
        <p className="text-muted mb-4">
          Your data is used solely to respond to inquiries, send updates, and improve our services. We do not sell your information to third parties.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
        <p className="text-muted mb-4">
          You may request access, correction, or deletion of your personal data at any time by contacting us.
        </p>
        <p className="text-muted mt-8">Last updated: September 2026</p>
      </section>
    </>
  );
};

export default Privacy;
