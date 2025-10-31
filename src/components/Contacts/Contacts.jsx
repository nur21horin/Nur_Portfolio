import { useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_2kiuov9",
        "template_2dnijno",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "GQZBJ237S1mmyR3Mf"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
    { icon: Mail, label: "Email", value: "nur98371@gmail.com" },
    { icon: Phone, label: "Phone", value: "+880 132 152 6442" },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Background overlay for subtle gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Let’s connect and
            make something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/60 border border-cyan-500/20 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/60 border border-cyan-500/20 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-slate-900/60 border border-cyan-500/20 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium py-3 rounded-md shadow-lg shadow-cyan-500/20 transition-all"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <span className="flex justify-center items-center gap-2">
                    Send Message <Send className="h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I’m
                always open to discussing new projects, creative ideas, or
                opportunities to collaborate.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-slate-800/60 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">{item.label}</div>
                    <div className="font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 text-center">
              <h4 className="text-xl font-bold mb-3 text-cyan-400">
                Let’s Build Something Great
              </h4>
              <p className="text-gray-300">
                Whether it’s a modern web app or a creative project, I’m here
                to help turn your ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
