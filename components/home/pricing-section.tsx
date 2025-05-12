import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PriceProps = {
  id: string;
  price: number;
  description: string;
  features: string[];
  name: string;
  paymentLink: string;
  priceId: string;
};

const plans = [
  {
    id: "basic",
    price: 3000,
    description:
      "Perfect for occasional users who want to try out the service.",
    features: [
      "5 PDF summary per month",
      "Standard proffessional support",
      "Email support",
    ],
    name: "Basic",
    paymentLink: "https://buy.stripe.com/00g4hG2aQ0c8b1i5kE",
    priceId: "",
  },
  {
    id: "pro",
    price: 10000,
    description:
      "For professionals who need more summaries and advanced features.",
    features: [
      "unlimited PDF summary for a year.",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    name: "Pro",
    paymentLink: "https://buy.stripe.com/00g4hG2aQ0c8b1i5kE",
    priceId: "",
  },
];

const PricingCard = ({
  id,
  price,
  description,
  features,
  name,
  paymentLink,
}: PriceProps) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl",
          id === "pro" && "border-rose-500/50 border-2 "
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 0,
            }).format(price)}
          </p>
          <div>
            <p className="text-xs uppercase font-semibold">NGN</p>
            <p className="text-xs ">/month</p>
          </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon size={18} /> <span>{feature}</span>
            </li>
          ))}
        </div>
        <div className="space-y-2 flex justify-center w-full ">
          <Link
            href={paymentLink}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 py-2 text-white border-2",
              id === "pro"
                ? "border-rose-900"
                : "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            Buy now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="w-full flex justify-center items-center">
          <h2 className="uppercase text-xl mb-8 text-red-500 font-bold">
            Pricing
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
