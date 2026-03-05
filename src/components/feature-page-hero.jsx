import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** fade-up animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/** Gradient pill badge */
export function Badge({ children, color = "green" }) {
  const colors = {
    primary:
      "from-primary/5 to-primary/10 text-primary border-primary/30",
    green:
      "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30",
    blue: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    purple:
      "from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30",
    orange:
      "from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30",
    red: "from-red-500/20 to-rose-500/20 text-red-400 border-red-500/30",
    teal: "from-teal-500/20 to-cyan-500/20 text-teal-400 border-teal-500/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r backdrop-blur-sm",
        colors[color] || colors.green,
      )}
    >
      {children}
    </span>
  );
}

/** Hero section for product/solution pages */
export function PageHero({
  badge,
  badgeColor,
  title,
  titleHighlight,
  description,
  ctas = [],
  highlights = [],
  accentColor = "#22c55e",
  children,
}) {
  return (
    <section className="pt-28 pb-10 md:pt-36 md:pb-20">
 

      <Container>
        <div className="text-center">
          {badge && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-6"
            >
              <Badge color='primary'>{badge}</Badge>
            </motion.div>
          )}

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
          >
            {title}{" "}
            {titleHighlight && (
              <span style={{ color: accentColor }} className="relative">
                {titleHighlight}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-60"
                  style={{ background: accentColor }}
                />
              </span>
            )}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {ctas.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center mb-10"
            >
              {ctas.map((cta, i) =>
                cta.primary ? (
                  <Button
                    key={i}
                    size="lg"
                    className="rounded-xl px-6 gap-2"
                    asChild
                  >
                    <Link to={cta.href || "/company/contact"}>
                      {cta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    key={i}
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-6 bg-transparent"
                    asChild
                  >
                    <Link to={cta.href || "/"}>{cta.label}</Link>
                  </Button>
                ),
              )}
            </motion.div>
          )}

          {highlights.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-muted-foreground"
            >
              {highlights.map((h, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-green-500 shrink-0" />
                  {h}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {children && (
          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="mt-16"
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}

/** Section wrapper with animated entry */
export function PageSection({ title, subtitle, children, className }) {
  return (
    <section className={cn("py-10 md:py-20", className)}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12 max-w-2xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

/** Feature card */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  accentColor = "#22c55e",
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group p-6 rounded-[2rem] border bg-card hover:shadow-lg transition-all duration-300",
        className,
      )}
    >
      <div
        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-primary/5 border border-primary/20"
      
      >
        <Icon className="size-6 text-primary"/>
      </div>
      <h3 className="font-bold text-xl mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/** Stat / metric card */
export function StatCard({ value, label, accentColor = "#22c55e" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center p-6 rounded-2xl border bg-card"
    >
      <div
        className="text-3xl md:text-4xl font-bold mb-2 text-primary"
      >
        {value}
      </div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

/** How it works step */
export function StepCard({
  step,
  title,
  description,
  accentColor = "#22c55e",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary/10 border border-primary/50 text-primary"
      >
        {step}
      </div>
      <div>
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/** CTA banner at bottom of page */
export function PageCTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  accentColor = "#22c55e",
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-16 text-center"
    
        >
      
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center relative">
            <Button size="lg" className="rounded-xl px-8 gap-2" asChild>
              <Link to="/company/contact">
                {primaryLabel || "Get Started"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryLabel && (
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 bg-transparent"
                asChild
              >
                <Link to="/">{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
