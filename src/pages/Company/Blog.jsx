import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight, Clock, BookOpen, Search, Fuel, Map,
    Truck, BarChart3, Wrench, User, Zap,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const categories = ["All", "Product Updates", "Fleet Management", "Fuel Intelligence", "Industry News", "Guides"];

const posts = [
    { category: "Product Updates", title: "InteliFleet 2.0: AI-Powered Driver Safety Scoring Now Live", excerpt: "Our new safety scoring engine analyzes overspeed events, harsh braking, and idle misuse to generate a comprehensive 0–100 driver safety score in real time.", date: "Feb 28, 2026", readTime: "4 min read", icon: User, color: "#8b5cf6", tag: "New Feature", featured: true },
    { category: "Fuel Intelligence", title: "How to Detect Fuel Theft Before It Costs You Millions", excerpt: "Fuel theft is one of the biggest hidden costs in fleet operations. Learn how InteliFleet's drop-rate analysis catches thieves in real time.", date: "Feb 20, 2026", readTime: "6 min read", icon: Fuel, color: "#f59e0b", tag: "Guide" },
    { category: "Fleet Management", title: "5 KPIs Every Fleet Manager Should Track in 2026", excerpt: "From utilization rate and fuel efficiency to driver safety scores — here are the metrics that separate high-performing fleets.", date: "Feb 14, 2026", readTime: "5 min read", icon: BarChart3, color: "#22c55e", tag: "Best Practice" },
    { category: "Industry News", title: "Smart City Sweeping: How GPS Intelligence is Transforming Municipal Operations", excerpt: "Indian municipalities are increasingly adopting GPS-based cleaning verification. InteliFleet's sweeping module is setting the standard.", date: "Feb 7, 2026", readTime: "7 min read", icon: Truck, color: "#3b82f6", tag: "Industry Insight" },
    { category: "Product Updates", title: "New: Geofence Assignment Directly from Vehicle List Page", excerpt: "You can now assign, remove, and preview geofences per vehicle directly from the vehicle list — faster than ever.", date: "Jan 30, 2026", readTime: "2 min read", icon: Map, color: "#22c55e", tag: "Product Update" },
    { category: "Guides", title: "Complete Guide: Setting Up Maintenance Alerts for Your Fleet", excerpt: "Step by step — how to configure km-based and engine-hour-based maintenance reminders so no service interval gets missed.", date: "Jan 22, 2026", readTime: "8 min read", icon: Wrench, color: "#06b6d4", tag: "Tutorial" },
    { category: "Fleet Management", title: "Idle Time vs. Productive Time: Understanding Your Fleet's Hidden Hours", excerpt: "Most fleets waste 15–25% of daily operating hours to unproductive idling. Here's how to measure and reduce it.", date: "Jan 15, 2026", readTime: "5 min read", icon: Clock, color: "#f97316", tag: "Analysis" },
    { category: "Product Updates", title: "Timeline Log Now Supports Shift-Based Filtering", excerpt: "Fleet managers can now filter the vehicle timeline log by custom shift windows — ideal for multi-shift operations.", date: "Jan 8, 2026", readTime: "2 min read", icon: Zap, color: "#ec4899", tag: "Product Update" },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const featured = posts.find(p => p.featured);
    const regular = posts.filter(p => !p.featured
        && (activeCategory === "All" || p.category === activeCategory)
        && (search === "" || p.title.toLowerCase().includes(search.toLowerCase())));

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, #22c55e22 0%, transparent 70%)" }} />
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 mb-6">
                            <BookOpen className="size-3" /> InteliFleet Blog
                        </motion.span>
                        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                            Fleet Intelligence <span className="text-green-400">Insights</span>
                        </motion.h1>
                        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                            Product updates, fleet management guides, industry news, and best practices from the InteliFleet team.
                        </motion.p>
                        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="relative max-w-md mx-auto">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card text-sm outline-none focus:ring-2 focus:ring-green-500/30 transition-all" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Featured article */}
            {featured && (
                <section className="pb-10">
                    <Container>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl border bg-card p-8 md:p-12 group hover:shadow-xl transition-all cursor-pointer"
                            style={{ borderTop: `3px solid ${featured.color}` }}>
                            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: featured.color }} />
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${featured.color}20`, color: featured.color }}>✦ Featured</span>
                                        <span className="text-xs text-muted-foreground">{featured.category}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featured.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                                        <span className="flex items-center gap-1"><Clock className="size-3" />{featured.readTime}</span>
                                        <span>{featured.date}</span>
                                    </div>
                                    <Button className="gap-2 rounded-xl">
                                        Read Article <ArrowRight className="size-4" />
                                    </Button>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-3xl flex items-center justify-center" style={{ background: `${featured.color}15`, border: `2px dashed ${featured.color}40` }}>
                                        <featured.icon className="size-16 opacity-30" style={{ color: featured.color }} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </section>
            )}

            {/* Filters + grid */}
            <section className="py-10 pb-24">
                <Container>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeCategory === cat ? "bg-green-500 border-green-500 text-white" : "bg-card border-border text-muted-foreground hover:border-green-500/50"}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {regular.map((post, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -4 }}
                                className="rounded-2xl border bg-card p-6 group cursor-pointer transition-all hover:shadow-lg" style={{ borderTop: `3px solid ${post.color}60` }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${post.color}20` }}>
                                        <post.icon className="size-4" style={{ color: post.color }} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${post.color}15`, color: post.color }}>{post.tag}</span>
                                </div>
                                <h3 className="font-bold text-base leading-snug mb-3">{post.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t">
                                    <span className="flex items-center gap-1"><Clock className="size-3" />{post.readTime}</span>
                                    <span>{post.date}</span>
                                </div>
                            </motion.div>
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
