const Contact = () => {
  return (
    <div className="flex flex-col flex-1 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl mb-6">Contact Us</h1>
            <p className="text-lg text-muted">Have a project in mind? We'd love to hear from you.</p>
          </div>
          
          <form className="space-y-6 rounded-2xl border border-border bg-background/50 p-8 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-text">First name</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border border-border bg-background px-4 py-3 text-text placeholder-muted shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors" placeholder="John" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-text">Last name</label>
                <div className="mt-2">
                  <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border border-border bg-background px-4 py-3 text-text placeholder-muted shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors" placeholder="Doe" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" className="block w-full rounded-md border border-border bg-background px-4 py-3 text-text placeholder-muted shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text">Message</label>
              <div className="mt-2">
                <textarea id="message" name="message" rows={4} className="block w-full rounded-md border border-border bg-background px-4 py-3 text-text placeholder-muted shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors" placeholder="How can we help you?" defaultValue={''} />
              </div>
            </div>
            
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
