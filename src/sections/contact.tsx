import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'react-feather';
import EmailForm from './EmailForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "Leonfardell134@gmail.com",
      link: "mailto:Leonfardell134@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Newcastle, NSW",
      link: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "Available upon request",
      link: null
    }
  ];

  return (
    <section className="relative py-30">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-primary)]/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative">
            <span className="absolute -inset-1 rounded-lg bg-[var(--accent-primary)]/20 blur-xl animate-glow" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]">
              GET IN TOUCH
            </span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I'm always interested in hearing about new opportunities and collaborations. 
              Feel free to reach out through any of the following channels:
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-secondary)]/5 backdrop-blur-sm border border-[var(--border-color)] hover:border-[var(--accent-primary)]/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-secondary)]">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-[var(--text-primary)] font-medium mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[var(--text-secondary)]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--bg-secondary)]/5 backdrop-blur-sm rounded-xl p-8 border border-[var(--border-color)]">
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
