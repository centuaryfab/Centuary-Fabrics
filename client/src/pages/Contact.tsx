export default function Contact() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            Reach out for fabric enquiries, orders, and support.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">📍 Address</h3>
              <p>Centuary Fab</p>
              <p>5/1, Natrayan Kovil St</p>
              <p>Water Office Road</p>
              <p>Erode, Tamil Nadu - 638003</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">📧 Email</h3>
              <a href="mailto:centuaryfab@gmail.com">
                centuaryfab@gmail.com
              </a>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">📞 Phone</h3>
              <a href="tel:+918148008588">+91 8148008588</a>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">⏰ Business Hours</h3>
              <p>9:30 AM – 7:00 PM</p>
            </div>

          </div>

          {/* Simple Form (No UI libs) */}
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

            <form
              action="https://formspree.io/f/mqegagqw"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border p-3 rounded"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full border p-3 rounded"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full border p-3 rounded h-32"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>

          <div className="w-full h-[380px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4808.179379981675!2d77.71786827588647!3d11.353753188832318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f33bfad08f1%3A0xeccba746c62c537a!2scentuaryfab!5e1!3m2!1sen!2sin!4v1774526187858!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}