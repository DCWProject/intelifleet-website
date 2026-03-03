import React, { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  Map,
  Fuel,
  Truck,
  User,
  Wrench,
  Shield,
  BarChart3,
  Car,
  Bike,
  Bus,
  BlocksIcon,
  StopCircle,
  RulerDimensionLineIcon,
  BrushCleaning,
  Ambulance,
  Tractor,
  ShieldCheck,
  Package,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VehicleLogBadge = ({ status }) => {
  return (
    <div
      className={cn("px-2 py-0.5 rounded-md text-[8px] font-medium", {
        "border border-green-600 text-green-800": status === "running",
        "border border-yellow-600 text-yellow-800": status === "idle",
        "border border-blue-600 text-blue-800": status === "cleaning",
        "border border-red-600 text-red-800": status === "stop",
      })}
    >
      {status.toUpperCase()}
    </div>
  );
};
const liveLogs = [
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Bus,
    number: "OD89AK4629",
    description: "Recently this vehicle start cleaning",
    status: "cleaning",
  },
  {
    icon: Truck,
    number: "OD89AK8301",
    description: "This Vehicle is now stop",
    status: "stop",
  },
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Bus,
    number: "OD89AK4629",
    description: "Recently this vehicle start cleaning",
    status: "cleaning",
  },
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Truck,
    number: "OD89AK8301",
    description:
      "This Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stop",
    status: "stop",
  },
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Bus,
    number: "OD89AK4629",
    description: "Recently this vehicle start cleaning",
    status: "cleaning",
  },
  {
    icon: Car,
    number: "OD89AK7392",
    description: "This Vehicle is running for 2 hours",
    status: "running",
  },
  {
    icon: Bike,
    number: "OD89AK0987",
    description: "This Vehicle is idle since 10 AM",
    status: "idle",
  },
  {
    icon: Truck,
    number: "OD89AK8301",
    description:
      "This Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stopThis Vehicle is now stop",
    status: "stop",
  },
];

const features = [
  {
    name: "Product Overview",
    path: "/product",
    description: "Complete fleet intelligence platform overview.",
    icon: LayoutDashboard,
  },
  {
    name: "Live Tracking",
    path: "/product/live-tracking",
    description: "Real-time GPS tracking with live telemetry.",
    icon: Map,
  },
  {
    name: "Fuel Intelligence",
    path: "/product/fuel-intelligence",
    description: "Monitor fuel usage and prevent theft.",
    icon: Fuel,
  },
  {
    name: "Sweeping Intelligence",
    path: "/product/sweeping-intelligence",
    description: "Track municipal sweeping performance.",
    icon: Truck,
  },
  {
    name: "Driver Intelligence",
    path: "/product/driver-intelligence",
    description: "Analyze driver behavior and safety metrics.",
    icon: User,
  },
  {
    name: "Maintenance",
    path: "/product/maintenance",
    description: "Schedule preventive vehicle maintenance.",
    icon: Wrench,
  },
  {
    name: "Security & Alerts",
    path: "/product/security-alerts",
    description: "Instant alerts for violations and risks.",
    icon: Shield,
  },
  {
    name: "Reports & Analytics",
    path: "/product/reports-analytics",
    description: "Advanced dashboards and performance insights.",
    icon: BarChart3,
  },
];

// Notification scroller: cycles items upward, highlights center item
function NotificationScroller({ items = [], visible = 3, interval = 2200 }) {
  // finite scroller: show `visible` items at once, highlight center item, stop at end
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [index, setIndex] = useState(0); // top item index

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => setContainerHeight(el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const maxIndex = Math.max(0, items.length - visible);
    if (index >= maxIndex) return; // stop at last window (finite)
    const id = setTimeout(
      () => setIndex((i) => Math.min(i + 1, maxIndex)),
      interval,
    );
    return () => clearTimeout(id);
  }, [index, items, visible, interval]);

  const itemHeight =
    containerHeight && visible ? containerHeight / visible : 56;
  const translateY = -index * itemHeight;
  const centerOffsetIndex = index + Math.floor(visible / 2);

  return (
    <div ref={containerRef} className="overflow-hidden relative h-full">
      <div
        className=""
        style={{
          transform: `translateY(${translateY}px)`,
          transition: "transform 600ms ease",
        }}
      >
        {items.map((it, k) => {
          const isCenter = k === centerOffsetIndex;
          return (
            <div
              key={k}
              className={cn(
                "flex gap-2 items-start p-2 rounded-lg border bg-muted",
                isCenter ? "scale-100 opacity-100" : "scale-90 opacity-60",
              )}
              style={{
                height: itemHeight || "auto",
                transformOrigin: "center",
              }}
            >
              <it.icon className={cn("size-4.5 shrink-0 mt-1", it.iconColor)} />

              <div className="flex-1">
                <div className="font-semibold text-sm tracking-tight">
                  {it.title}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {it.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const notifications = [
  {
    icon: Car,
    iconColor: "text-blue-500",
    title: "OD39AK9839",
    description:
      "Geofence breach detected. The assigned sedan exited the predefined operational boundary without prior authorization. Real-time GPS telemetry confirms deviation from the approved logistics corridor. Fleet administrators should immediately verify route compliance and ensure driver acknowledgment to prevent security or delivery risks.",
  },
  {
    icon: Truck,
    iconColor: "text-orange-500",
    title: "OD12BC4321",
    description:
      "Unexpected stop reported. The heavy-duty truck remained stationary for an extended duration in a non-designated zone. Engine diagnostics and brake activity logs indicate a manual halt. Review driver status and confirm whether the stop was operationally required or due to mechanical concerns.",
  },
  {
    icon: Fuel,
    iconColor: "text-purple-500",
    title: "OD77XY1111",
    description:
      "Low fuel level detected. The vehicle's onboard fuel monitoring system indicates remaining fuel has dropped below the critical 15% threshold. Immediate refueling is recommended to prevent operational delays and route disruption.",
  },
  {
    icon: Tractor,
    iconColor: "text-lime-600",
    title: "OD55LM2222",
    description:
      "Scheduled maintenance due in 3 days. Engine runtime hours and mileage tracking confirm that the agricultural utility vehicle is approaching its periodic service interval. Preventive maintenance will ensure optimal engine efficiency and reduce unexpected breakdown risks.",
  },
  {
    icon: Car,
    iconColor: "text-red-500",
    title: "OD88TR3344",
    description:
      "Overspeeding alert triggered. The vehicle exceeded the configured speed threshold for more than 45 seconds on a monitored highway segment. Speed analytics and driver behavior logs have been recorded for compliance evaluation.",
  },
  {
    icon: Truck,
    iconColor: "text-yellow-500",
    title: "OD23PL5566",
    description:
      "Harsh braking event recorded. Sudden deceleration beyond safety parameters was detected through accelerometer sensors. This may indicate defensive maneuvering or unsafe driving behavior requiring review.",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-indigo-500",
    title: "OD90GH7788",
    description:
      "Unauthorized ignition attempt identified. Security module flagged an attempt to start the vehicle without valid authentication credentials. Anti-theft protocols remained active and prevented system activation.",
  },
  {
    icon: Car,
    iconColor: "text-rose-500",
    title: "OD11ZX9900",
    description:
      "Battery voltage critically low. Electrical diagnostics show declining voltage levels below recommended operating range. Immediate inspection is advised to avoid startup failure.",
  },
  {
    icon: Bus,
    iconColor: "text-amber-500",
    title: "OD44QW2233",
    description:
      "Route deviation detected. The passenger transport vehicle diverged from its assigned urban transit route. Passenger safety logs and GPS trail are available for verification.",
  },
  {
    icon: Truck,
    iconColor: "text-cyan-500",
    title: "OD66ER4455",
    description:
      "Idle time exceeded configured threshold. The commercial vehicle remained in idle state for over 20 minutes, impacting fuel efficiency and emissions output.",
  },
  {
    icon: Package,
    iconColor: "text-pink-500",
    title: "OD21AS6677",
    description:
      "Cargo door opened unexpectedly during transit. Sensor modules indicate rear compartment access without authorized checkpoint validation.",
  },
  {
    icon: Car,
    iconColor: "text-green-500",
    title: "OD73DF8899",
    description:
      "Geofence entry confirmed. The vehicle has successfully entered the designated warehouse perimeter zone.",
  },
  {
    icon: Bike,
    iconColor: "text-emerald-500",
    title: "OD14GH0011",
    description:
      "Parking event logged. Two-wheeler vehicle successfully transitioned into stationary parking mode with engine cutoff confirmed.",
  },
  {
    icon: Fuel,
    iconColor: "text-violet-500",
    title: "OD25JK2233",
    description:
      "Fuel refill detected. Tank capacity has increased by 48 liters, confirming refueling activity at a verified station.",
  },
  {
    icon: Car,
    iconColor: "text-red-600",
    title: "OD36LM4455",
    description:
      "Tire pressure below recommended PSI levels. Smart tire monitoring sensors indicate uneven pressure distribution.",
  },
  {
    icon: Bus,
    iconColor: "text-blue-600",
    title: "OD47NO6677",
    description:
      "Driver shift started. Authentication credentials verified and operational session initiated.",
  },
  {
    icon: Bus,
    iconColor: "text-gray-600",
    title: "OD58PQ8899",
    description:
      "Driver shift ended. Operational session closed and total route performance metrics logged successfully.",
  },
  {
    icon: Tractor,
    iconColor: "text-green-700",
    title: "OD69RS0012",
    description:
      "Scheduled inspection completed successfully. All mechanical, electrical, and safety parameters passed validation checks.",
  },
  {
    icon: Ambulance,
    iconColor: "text-red-700",
    title: "OD70TU2234",
    description:
      "Emergency stop recorded. Critical braking maneuver executed under emergency protocol conditions.",
  },
  {
    icon: Car,
    iconColor: "text-teal-600",
    title: "OD81VW4456",
    description:
      "Route completed successfully. Vehicle reached its final destination checkpoint within scheduled ETA window.",
  },
];
const FeatureSection = () => {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  return (
    <section className="py-12 lg:py-20">
      <Container className="space-y-16">
        <div className="space-y-4 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Features We Offer
          </motion.h1>
          <motion.p
            className="md:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our platform offers a comprehensive suite of features designed to
            enhance your customer engagement and drive business growth.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={()=>navigate(feature.path)}
              className={cn(
                "cursor-pointer flex flex-col py-10 relative group/feature dark:border-neutral-800",
                // vertical dividers: add right border for all but last column
                index % 4 !== 4 && "lg:border-r dark:border-neutral-800",
                // left border for first column items (optional)
                index % 4 === 0 && "lg:border-l dark:border-neutral-800",
                // horizontal dividers: add bottom border for first two rows (0-7)
                index < 4 && "lg:border-b dark:border-neutral-800",
              )}
            >
              {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
              )}
              {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
              )}
              <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                <feature.icon />
              </div>
              <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                  {feature.name}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-2xl shadow border h-95 overflow-hidden">
              <div className="space-y-1 py-4 px-7">
                <div className="font-bold text-lg">Auto Generated Reports</div>
                <div className="text-sm text-muted-foreground md:max-w-md">
                  All Vehicle Activity Log and Reports are auto generated and
                  can be downloaded in multiple formats.
                </div>
              </div>

              <div className="flex gap-5 mask-r-from-85% mask-l-from-85%">
                <Marquee className="[--duration:30s] m-0 p-0">
                  {[
                    {
                      icon: Fuel,
                      title: "Fuel Theft Logs",
                      iconColor: "text-red-500",
                    },
                    {
                      icon: Fuel,
                      title: "Fuel Refil Logs",
                      iconColor: "text-green-500",
                    },
                    {
                      icon: BrushCleaning,
                      title: "Cleaning Logs",
                      iconColor: "text-blue-500",
                    },
                    {
                      icon: RulerDimensionLineIcon,
                      title: "Running Logs",
                      iconColor: "text-yellow-500",
                    },
                    {
                      icon: StopCircle,
                      title: "Stop Logs",
                      iconColor: "text-purple-500",
                    },
                    {
                      icon: BlocksIcon,
                      title: "Inactive Logs",
                      iconColor: "text-gray-500",
                    },
                  ]?.map(({ icon: Icon, title, iconColor }, i) => (
                    <div className="w-fit px-2 py-1 rounded bg-background border shdow flex gap-1 items-center">
                      <Icon className={`size-3 ${iconColor}`} />
                      <span className="text-xs font-medium">{title}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className=" flex gap-5 my-4 mask-r-from-85% mask-l-from-85%">
                <Marquee className="[--duration:18s] m-0 p-0 mask -s-from-10%">
                  {[
                    {
                      icon: Fuel,
                      title: "Fuel Theft Logs",
                      iconColor: "text-red-500",
                    },
                    {
                      icon: Fuel,
                      title: "Fuel Refil Logs",
                      iconColor: "text-green-500",
                    },
                    {
                      icon: BrushCleaning,
                      title: "Cleaning Logs",
                      iconColor: "text-blue-500",
                    },
                    {
                      icon: RulerDimensionLineIcon,
                      title: "Running Logs",
                      iconColor: "text-yellow-500",
                    },
                    {
                      icon: StopCircle,
                      title: "Stop Logs",
                      iconColor: "text-purple-500",
                    },
                    {
                      icon: BlocksIcon,
                      title: "Inactive Logs",
                      iconColor: "text-gray-500",
                    },
                  ]?.map(({ icon: Icon, title, iconColor, borderColor }, i) => (
                    <div
                      className={cn(
                        "w-fit px-2 py-1 rounded bg-background border shdow flex gap-1 items-center",
                      )}
                    >
                      <Icon className={`size-3 ${iconColor}`} />
                      <span className="text-xs font-medium">{title}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              {/* <div className=" mt-2 mb-5 mx-auto size-12 flex justify-center items-center bg-gray-200 border rounded-xl">
                  <ChartPie />
                </div> */}
              <div className="relative flex justify-center gap-6 mask-b-from-20%">
                {/* <div className="absolute bottom-0 inset-x-0 h-1/2  bg-gradient-to-t from-background to-transparent z-10" /> */}
                <div className="bg-muted/50 rounded-lg p-2 basis-[40%]">
                  <img
                    src={
                      resolvedTheme == "light"
                        ? "/img/bar-light-chart.png"
                        : "/img/bar-dark-chart.png"
                    }
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-muted/50 rounded-lg p-2 basis-[40%]">
                  <img
                    src={
                      resolvedTheme == "light"
                        ? "/img/area-light-chart.png"
                        : "/img/area-dark-chart.png"
                    }
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-2xl shadow border h-95 overflow-hidden relative">
              <div className="space-y-1 py-4 px-7">
                <div className="font-bold text-lg">Vehicle Logs</div>
                <div className="text-sm text-muted-foreground md:max-w-md">
                  System maintain realtime vehicle logs.
                </div>
              </div>
              <div className="ps-3 pt-3 bg-muted/60 rounded-tl-xl border-s border-t absolute bottom-0 right-0 w-[calc(100%-40px)] h-70">
                <div className="relative overflow-hidden bg-background p-4 rounded-tl-xl border-s border-t h-full space-y-3">
                  <div className="absolute top-0 inset-x-0 z-10 h-1/2 bg-gradient-to-b from-background to-transparent" />
                  <Marquee vertical className="[--duration:25s]">
                    {liveLogs?.map(
                      ({ icon: Icon, number, description, status }, i) => (
                        <div
                          className="flex gap-2 items-center min-w-0"
                          key={i}
                        >
                          <Icon className="size-3 shrink-0" />
                          <span className="font-semibold tracking-tight text-sm">
                            {number}
                          </span>
                          <VehicleLogBadge status={status} />
                          <span className="truncate text-xs text-muted-foreground">
                            {description}
                          </span>
                        </div>
                      ),
                    )}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="relative rounded-2xl shadow border h-100 overflow-hidden">
              <div className="space-y-1 py-4 px-7">
                <div className="font-bold text-lg">Realtime Notification</div>
                <div className="text-sm text-muted-foreground md:max-w-md">
                  Notification trigger on live event changes.
                </div>
              </div>
              <div className="ps-3 pt-3 border-t border-l bg-muted/60 rounded-tl-xl absolute right-0 bottom-0 h-75 w-[calc(100%-45px)] ">
                <div className="bg-background h-full border-t border-l rounded-tl-xl p-1.5">
                  <NotificationScroller
                    items={notifications}
                    visible={3}
                    interval={2200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden col-span-12 md:col-span-7 rounded-2xl border h-100 shadow">
            <div className="space-y-1 py-4 px-7">
              <div className="font-bold text-lg">
                Interactive Dashboard Interface
              </div>
              <div className="text-sm text-muted-foreground md:max-w-md">
                You can interact with the dashboard to view and manage your
                data.and more information
              </div>
            </div>
            <div className="h-75 bg-muted/60 border rounded-xl p-3  w-[calc(100%-15px)] absolute -bottom-4 -right-4">
              <div className="h-full w-full mask-b-from-35%">
                <img
                  src={
                    resolvedTheme === "dark"
                      ? "/img/dark-dash.webp"
                      : "/img/light-dash.webp"
                  }
                  className="h-auto w-auto rounded-tl-xl border"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;
