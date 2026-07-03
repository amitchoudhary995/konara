const About = () => {
  return (
    <div className="flex flex-col flex-1 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl mb-6">About Us</h1>
          <p className="text-lg text-muted mb-8">
            Solastra is dedicated to delivering exceptional digital products. We merge technical excellence with stunning design to help our clients succeed in the modern web.
          </p>
          <div className="rounded-2xl border border-border bg-background/50 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-text mb-4">Our Mission</h2>
            <p className="text-muted text-left">
              To empower businesses through innovative technology, crafting digital experiences that are not only beautiful but also highly functional and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
