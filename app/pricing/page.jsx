// File: biz-web-app/app/pricing/page.jsx

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PricingCard from "@/components/PricingCard";
import LoadingScreen from "@/components/LoadingScreen";

export default function PricingPage() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState("");
  const [openGroup, setOpenGroup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await fetch("/api/subscription-plans/list");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (data.error) {
          setError(data.error);
          setIsLoading(false);
          return;
        }
        setPlans(data.plans || []);
      } catch (err) {
        console.error("Pricing fetch error:", err);
        setError("Something went wrong.");
      }
      setIsLoading(false);
    }
    fetchPlans();
  }, []);

  const groups = plans.reduce((acc, plan) => {
    const key = plan.name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(plan);
    return acc;
  }, {});

  const handleSelectPlan = (plan) => {
    if (parseFloat(plan.price) === 0) {
      router.push(`/sign-up?plan=${encodeURIComponent(plan.name)}`);
    } else {
      const userEmail = "john@company.com";
      router.push(
        `/payment?planId=${encodeURIComponent(
          plan.id
        )}&email=${encodeURIComponent(userEmail)}`
      );
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (Object.keys(groups).length === 0) {
    return <p className="text-center mt-8">No plans available.</p>;
  }

  return (
    <div className="min-h-screen  mt-4 container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-4">
        {Object.keys(groups).map((groupName) => (
          <div key={groupName} className="flex-1">
            <div
              onClick={() =>
                setOpenGroup(openGroup === groupName ? null : groupName)
              }
              className="flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border rounded-3xl cursor-pointer h-[10vh] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold">{groupName}</h2>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openGroup === groupName ? "max-h-[1000px] mt-4" : "max-h-0"
              }`}
            >
              {groups[groupName].map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={{
                    id: plan.id,
                    name: plan.name,
                    users: plan.rangeOfUsers,
                    price: `$${plan.price}/mo`,
                    features: plan.description ? [plan.description] : [],
                  }}
                  onSelect={() => handleSelectPlan(plan)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
