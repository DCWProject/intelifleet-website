import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building,
  Users,
  Clock,
  ChevronRight,
  CheckCircle,
  PhoneCall,
  MailIcon,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedGroup } from "@/components/ui/animated-group";

const Contact = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      service: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="size-5" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <Mail className="size-5" />,
      title: "Email",
      details: ["support@intelifleet.com", "sales@intelifleet.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="size-5" />,
      title: "Office",
      details: ["123 Tech Street", "San Francisco, CA 94105"],
      description: "Visit us by appointment",
    },
    {
      icon: <Clock className="size-5" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 2pm"],
      description: "Closed on Sundays",
    },
  ];

  const services = [
    "Fleet Management",
    "GPS Tracking",
    "Fuel Monitoring",
    "Driver Management",
    "Maintenance Scheduling",
    "Analytics & Reporting",
  ];

  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  return (
    <div>
      {/* Background gradient */}
      {/* <div
        className="absolute inset-0 max-h-screen z-0 bg-fixed"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #FFF991 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      /> */}

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-20">
        <Container>
          <AnimatedGroup variants={transitionVariants}>
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto">
                Get in Touch with us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about our fleet management solutions? We're here
                to help you optimize your operations and drive efficiency.
              </p>
            </div>
          </AnimatedGroup>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Why Choose InteliFleet?</h2>
                <p className="text-muted-foreground">
                  We're committed to helping you transform your fleet operations
                  with cutting-edge technology and unparalleled support.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: <Users className="size-5" />,
                    title: "Expert Support Team",
                    description:
                      "Our dedicated team of fleet management experts is available to help you 24/7.",
                  },
                  {
                    icon: <Building className="size-5" />,
                    title: "Trusted by Industry Leaders",
                    description:
                      "Over 500+ companies trust InteliFleet for their fleet management needs.",
                  },
                  {
                    icon: <MessageSquare className="size-5" />,
                    title: "Quick Response Time",
                    description:
                      "We guarantee response within 24 hours for all inquiries and support requests.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-2 items-start"
                  >
                    {/* <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {feature.icon}
                    
                    </div> */}
                    <CheckCircle className="size-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="space-y-3">
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <PhoneCall className="size-4 text-muted-foreground text-sm" />

                      <span className="font-medium text-muted-foreground">
                        Mobile
                      </span>
                    </div>
                    <span className="font-semibold text-lg">
                      +91 9777303064
                    </span>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <MailIcon className="size-4 text-muted-foreground text-sm" />

                      <span className="font-medium text-muted-foreground">
                        Email
                      </span>
                    </div>
                    <span className="font-semibold text-lg">
                      contact@intelifleet.com
                    </span>
                  </div>
                </div>

                <div className="text-muted-foreground text-sm">
                  Available Monady to Friday 9AM to 6PM IST
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name{" "}
                        <span className="text-destructive ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address{" "}
                        <span className="text-destructive ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="shadow w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="shadow w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number{" "}
                        <span className="text-destructive ms-1">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="shadow w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message<span className="text-destructive ms-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="shadow w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your fleet management needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <Container className="space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some of the most common
              questions we receive.
            </p>
          </div>

          <div className="grid max-w-4xl mx-auto gap-6">
            {[
              {
                question: "How quickly can I get started with InteliFleet?",
                answer:
                  "You can get started within minutes! Our onboarding process is streamlined and typically takes less than 30 minutes to set up your first vehicle.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We offer 24/7 customer support via phone, email, and live chat. Our enterprise plans also include dedicated account managers.",
              },
              {
                question:
                  "Can I integrate InteliFleet with my existing systems?",
                answer:
                  "Yes! InteliFleet offers robust API integration capabilities and works with most major fleet management and ERP systems.",
              },
              {
                question: "Is my data secure with InteliFleet?",
                answer:
                  "Absolutely. We use enterprise-grade encryption, comply with GDPR and other data protection regulations, and conduct regular security audits.",
              },
              {
                question: "How does pricing work?",
                answer:
                  "We offer flexible subscription plans based on fleet size and feature set. Contact our sales team for a custom quote tailored to your needs.",
              },
              {
                question: "Can I request a demo or trial?",
                answer:
                  "Yes! You can schedule a live demo or start a free trial directly from our website. Our team will walk you through the platform and answer any questions.",
              },
              {
                question: "Do you offer customization options?",
                answer:
                  "InteliFleet can be customized to match your branding and workflow requirements. Our developers can help integrate custom features upon request.",
              },
              {
                question: "Is there a mobile app available?",
                answer:
                  "Yes, we provide mobile apps for iOS and Android so you can manage your fleet on the go with full functionality.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border rounded-xl p-4 shadow space-y-2 cursor-pointer transition-all duration-200"
                onClick={() => {
                  if (selectedFaqIndex === index) {
                    setSelectedFaqIndex(null);
                  } else {
                    setSelectedFaqIndex(index);
                  }
                }}
              >
                <div className="flex gap-2 justify-between items-center">
                  <h3 className="md:text-lg font-semibold">{faq.question}</h3>
                  {selectedFaqIndex === index ? (
                    <Minus className="size-5" />
                  ) : (
                    <Plus className="size-5" />
                  )}
                </div>
                <motion.div
                  animate={{
                    height: selectedFaqIndex === index ? "auto" : 0,
                    opacity: selectedFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm pt-2">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
