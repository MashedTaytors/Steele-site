import React from "react";
import IconGradientCard from "@/components/Cards/IconGradientCards";

export default function PageSection({ title, description, cards }) {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-ibmPlexSerif text-lg text-primaryText">{title}</h3>
          <p className="text-sm leading-relaxed text-secondaryText">{description}</p>
        </div>
      </div>

      <div className="flex flex-row w-full flex-wrap gap-6">
        {cards.map((card, index) => (
          <IconGradientCard
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}
