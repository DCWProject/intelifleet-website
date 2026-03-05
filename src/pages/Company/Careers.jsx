import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Heart,
  Zap,
  Globe,
  Users,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  Coffee,
  Laptop,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GlobalPagination from "@/components/CustomPagination";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const departments = [
  "All",
  "Engineering",
  "Product",
  "Sales",
  "Customer Success",
  "Design",
];

const openings = [
  {
    dept: "Engineering",
    title: "Senior Backend Engineer",
    type: "Full-time",
    location: "Bhubaneswar / Remote",
    color: "#22c55e",
    desc: "Build the core API infrastructure powering real-time GPS and telemetry data ingestion at scale.",
  },
  {
    dept: "Engineering",
    title: "Frontend Engineer (React)",
    type: "Full-time",
    location: "Bhubaneswar / Remote",
    color: "#22c55e",
    desc: "Own the fleet dashboard UI — build fast, animated, real-time interfaces using React and Tailwind.",
  },
  {
    dept: "Engineering",
    title: "IoT / Embedded Systems Engineer",
    type: "Full-time",
    location: "Bhubaneswar",
    color: "#22c55e",
    desc: "Work on firmware and device integration for GPS telemetry devices using MQTT and CAN protocols.",
  },
  {
    dept: "Product",
    title: "Product Manager – Fleet Intelligence",
    type: "Full-time",
    location: "Bhubaneswar / Remote",
    color: "#8b5cf6",
    desc: "Lead product roadmap for core fleet modules. Deep understanding of logistics or municipal operations preferred.",
  },
  {
    dept: "Design",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    color: "#ec4899",
    desc: "Design intuitive, modern interfaces for fleet management dashboards and mobile apps.",
  },
  {
    dept: "Sales",
    title: "Enterprise Sales Executive",
    type: "Full-time",
    location: "Mumbai / Delhi / Bangalore",
    color: "#f59e0b",
    desc: "Drive B2B sales for logistics, municipal, and construction fleet customers across India.",
  },
  {
    dept: "Customer Success",
    title: "Customer Success Manager",
    type: "Full-time",
    location: "Bhubaneswar / Remote",
    color: "#3b82f6",
    desc: "Onboard and support enterprise customers to ensure they get maximum value from InteliFleet.",
  },
  {
    dept: "Engineering",
    title: "DevOps / Cloud Engineer",
    type: "Full-time",
    location: "Remote",
    color: "#22c55e",
    desc: "Maintain and scale our AWS/GCP infrastructure powering real-time telemetry for 10,000+ vehicles.",
  },
];

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance for you and your family, plus mental wellness support.",
  },
  {
    icon: Laptop,
    title: "Remote Friendly",
    desc: "Flexible remote and hybrid work options for most roles — work where you do your best thinking.",
  },
  {
    icon: Star,
    title: "Learning Budget",
    desc: "₹50,000 annual learning budget for courses, books, conferences, and certifications.",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    desc: "A small, transparent, high-ownership team where your work has real and immediate impact.",
  },
  {
    icon: Globe,
    title: "Work Globally",
    desc: "Collaborate with a distributed team and serve customers across multiple industries and regions.",
  },
  {
    icon: Zap,
    title: "Fast Growth",
    desc: "Join a high-growth startup and grow your career faster than in any large enterprise.",
  },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filtered = openings.filter((o) => {
    const matchesDept = activeDept === "All" || o.dept === activeDept;
    const matchesSearch =
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination logic
  const paginatedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset to first page when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [activeDept, searchQuery]);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 md:pt-40">
        <Container>
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-primary/20 bg-primary/5 text-primary mb-8 backdrop-blur-sm"
            >
              <Briefcase className="size-3" /> We're Hiring
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto"
            >
              Build the Future of Intelligence
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Join a mission-driven team building real-time intelligence for the
              world's most critical fleets.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-medium text-muted-foreground/80"
            >
              <span className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-muted/30 border border-border/50">
                <CheckCircle2 className="size-5 text-green-500" /> Remote
                Friendly
              </span>
              <span className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-muted/30 border border-border/50">
                <CheckCircle2 className="size-5 text-green-500" /> High
                Ownership
              </span>
              <span className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-muted/30 border border-border/50">
                <CheckCircle2 className="size-5 text-green-500" /> Equity
                Options
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Culture Images */}
      <section className="py-10 md:py-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[400px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Culture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl">
                  Collaborative Culture
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Space"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
                alt="Event"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 rounded-3xl overflow-hidden relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl">Global Impact</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="py-10 md:py-20 bg-muted/20 border-y border-border/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Join Us?
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              We're obsessed with high ownership, transparency, and building a
              place where you can do your life's best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 group-hover:scale-110 transition-transform duration-500">
                  <p.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section className="py-10 md:py-20 lg:py-32">
        <Container className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Open Roles
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto text-center">
              Find your next challenge and join the fleet.
            </p>
          </div>
          <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 h-10 rounded-xl bg-card border border-border/50 focus:border-primary/50  focus:ring-2 focus:ring-primary/30 outline-none transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            {/* Filters Row */}

            <Select value={activeDept} onValueChange={setActiveDept}>
              <SelectTrigger className="w-full md:w-[200px] !h-10 rounded-xl bg-card border-border/50 focus:ring-primary/30">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {paginatedItems.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative group p-6 rounded-[2.5rem] border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="text-xs font-bold px-4 py-1.5 rounded-full border"
                        style={{
                          color: job.color,
                          borderColor: `${job.color}40`,
                          background: `${job.color}10`,
                        }}
                      >
                        {job.dept}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold flex items-center gap-2 bg-muted/50 px-4 py-1.5 rounded-full">
                        <Clock className="size-4" /> {job.type}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold flex items-center gap-2 bg-muted/50 px-4 py-1.5 rounded-full">
                        <MapPin className="size-4" /> {job.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {job.desc}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="shrink-0 rounded-2xl gap-3 shadow-xl shadow-primary/10 transition-all font-semibold text-base"
                    asChild
                  >
                    <Link to="/company/contact">
                      Apply Now <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <GlobalPagination
              currentPage={currentPage}
              recordsPage={itemsPerPage}
              dataLength={filtered.length}
              handlePagination={handlePagination}
            />
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32 px-6 rounded-[2.5rem] border border-dashed border-border/50 bg-muted/10">
              <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6 text-muted-foreground">
                <Search className="size-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No roles found</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <Button
                onClick={() => {
                  setActiveDept("All");
                  setSearchQuery("");
                }}
                variant="outline"
                size="lg"
                className="rounded-xl px-8"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      <section className="py-10 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Don't See the Perfect Fit?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We're always looking for exceptional engineers, product thinkers,
              and operators. Send us a general application.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/company/contact">
                Send a General Application{" "}
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
