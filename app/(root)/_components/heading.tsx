"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-10 md:space-y-8">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold primary-font">
        {/* All-in-one <span className="italic">event platform </span>   for you{" "}
        <span className="underline">Outinz</span> */}
        The Perfect Venue For Your Next Event{" "}
        <span className="underline">Outinz</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-normal secondary-font">
        Join the party with Outinz 🔥 Discover and connect with the hottest
        events and gatherings in town. 🎉.
      </h3>
      <Button>
        Coming Soon
        {/* Enter Muxnotes <ArrowRight className="h-4 w-4 ml-2" /> */}
      </Button>
    </div>
  );
};
