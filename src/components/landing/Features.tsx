import { Sliders, Smartphone, Workflow, Zap } from "lucide-react";
import Container from "./Container";
import FeatureCard, { FeatureCardProps } from "./FeatureCard";

const Features = () => {
  const featuresList: FeatureCardProps[] = [
    {
      icon: Zap,
      title: "Płynny ruch",
      desc: "Animacja wektorowa, która naturalnie wygląda przy każdej prędkości.",
      color: "bg-blue-100",
    },
    {
      icon: Workflow,
      title: "Skupienie przede wszystkim",
      desc: "Minimalistyczny interfejs z trybem pełnoekranowym i pauzą na spację.",
      color: "bg-green-100",
    },
    {
      icon: Smartphone,
      title: "Responsywne",
      desc: "Działa świetnie na telefonie, tablecie i komputerze.",
      color: "bg-purple-100",
    },
    {
      icon: Sliders,
      title: "W pełni konfigurowalne",
      desc: "Dostosuj kierunek, prędkość, rozmiar i więcej w przyjaznych ustawieniach.",
      color: "bg-yellow-100",
    },
  ];
  return (
    <section id="features" className="py-6 md:py-10">
      <Container>
        <h2 className="text-2xl font-semibold md:text-3xl">
          Dlaczego może Ci się spodobać to, co oferujemy
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
