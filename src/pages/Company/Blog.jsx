import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Search } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const posts = [
  {
    title: "InteliFleet 2.0: AI-Powered Driver Safety Scoring Now Live",
    excerpt:
      "Our new safety scoring engine analyzes overspeed events, harsh braking, and idle misuse to generate a comprehensive 0–100 driver safety score in real time.",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    tags: ["Product Update", "AI", "Driver Safety"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "How to Detect Fuel Theft Before It Costs You Millions",
    excerpt:
      "Fuel theft is one of the biggest hidden costs in fleet operations. Learn how InteliFleet's drop-rate analysis catches thieves in real time.",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    tags: ["Fuel Intelligence", "Guide", "Fleet Security"],
image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80"  },
  {
    title: "5 KPIs Every Fleet Manager Should Track in 2026",
    excerpt:
      "From utilization rate and fuel efficiency to driver safety scores — here are the metrics that separate high-performing fleets.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    tags: ["Fleet Management", "KPI", "Best Practice"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title:
      "Smart City Sweeping: How GPS Intelligence is Transforming Municipal Operations",
    excerpt:
      "Indian municipalities are increasingly adopting GPS-based cleaning verification.",
    date: "Feb 7, 2026",
    readTime: "7 min read",
    tags: ["Smart City", "GPS", "Industry Insight"],
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "New: Geofence Assignment Directly from Vehicle List Page",
    excerpt:
      "Assign, remove, and preview geofences per vehicle directly from the vehicle list.",
    date: "Jan 30, 2026",
    readTime: "2 min read",
    tags: ["Product Update", "Geofence", "Tracking"],
image: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1200&q=80"  },
  {
    title: "Complete Guide: Setting Up Maintenance Alerts for Your Fleet",
    excerpt:
      "Configure km-based and engine-hour-based maintenance reminders easily.",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    tags: ["Guide", "Maintenance", "Tutorial"],
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:
      "Idle Time vs. Productive Time: Understanding Your Fleet's Hidden Hours",
    excerpt:
      "Most fleets waste 15–25% of daily operating hours to unproductive idling.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    tags: ["Fleet Management", "Efficiency", "Analysis"],
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Timeline Log Now Supports Shift-Based Filtering",
    excerpt: "Filter vehicle timeline logs by custom shift windows.",
    date: "Jan 8, 2026",
    readTime: "2 min read",
    tags: ["Product Update", "Timeline", "Operations"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real-Time Fleet Tracking: Why Every Logistics Company Needs It",
    excerpt:
      "Real-time tracking improves delivery accuracy and customer trust.",
    date: "Mar 2, 2026",
    readTime: "6 min read",
    tags: ["Logistics", "Real-Time Tracking", "Technology"],
    image:
      "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reducing Fleet Operating Costs with Predictive Maintenance",
    excerpt:
      "Predictive maintenance reduces breakdowns and extends vehicle lifespan.",
    date: "Mar 1, 2026",
    readTime: "7 min read",
    tags: ["Predictive Maintenance", "Cost Saving", "AI"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "How Driver Behavior Impacts Insurance Premiums",
    excerpt: "Telematics data now influences fleet insurance premiums.",
    date: "Feb 26, 2026",
    readTime: "5 min read",
    tags: ["Driver Behavior", "Insurance", "Telematics"],
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electric Fleets in India: Opportunities & Challenges",
    excerpt: "EV adoption in commercial fleets is growing rapidly.",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    tags: ["Electric Vehicles", "Sustainability", "India"],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "How Data Analytics is Reshaping Modern Fleet Operations",
    excerpt:
      "Advanced dashboards give fleet managers deep operational visibility.",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    tags: ["Data Analytics", "Fleet Management", "Innovation"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const allTags = ["All", ...new Set(posts.flatMap((post) => post.tags))];

  const regular = posts.filter(
    (p) =>
      (activeCategory === "All" || p.tags.includes(activeCategory)) &&
      (search === "" || p.title.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 md:pt-36">
        <Container className="text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-primary/5 to-primary/10 text-primary border-primary/30 mb-6"
          >
            <BookOpen className="size-3" /> InteliFleet Blog
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-4 max-w-4xl mx-auto"
          >
            Fleet Intelligence Insights
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Product updates, fleet management guides, industry news, and best
            practices from the InteliFleet team.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow"
            />
          </motion.div>
        </Container>
      </section>

      {/* Filters + grid */}
      <section className="py-5 md:py-10 pb-20">
        <Container>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {allTags?.slice(0, 7).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 py-2 shadow rounded-full text-sm font-medium border transition-all ${activeCategory === cat ? "bg-primary  text-primary-foreground" : "bg-card border-border text-muted-foreground hover:border-primary"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {regular.map((post, i) => (
              <div className="cursor-pointer hover:bg-muted/50 p-4 rounded-lg">
                <div className="h-52 mb-3 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={post?.image}
                    alt={post?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold leading-snug mb-3">{post?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {post?.excerpt}
                </p>
                <div className="flex gap-2 items-center flex-wrap">
                  {post?.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {regular.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <BookOpen className="size-12 mx-auto mb-4 opacity-30" />
              <p>No articles found. Try a different search or category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
