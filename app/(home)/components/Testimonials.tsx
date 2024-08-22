"use client"

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Aminata KONATE",
    username: "Lomé, TOGO",
    body: "Grâce à cette plateforme, j'ai pu générer une carte virtuelle en quelques secondes, ce qui m'a permis de faire des achats en ligne en toute sécurité. C'est la solution idéale pour protéger mes informations bancaires ! Je recommande vivement ce service.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jean-Michel DeLaCroix",
    username: "Paris, FRANCE",
    body: "Le transfert d'argent de l'étranger vers Tmoney n'a jamais été aussi simple. Les fonds sont arrivés en quelques minutes, et le processus est très facile à comprendre. Un service rapide et fiable, je suis impressionné !",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Raoul AJAVON",
    username: "Kpalimé, TOGO",
    body: "Je ne savais pas que transférer de l'argent de Tmoney vers Flooz était possible jusqu'à ce que j'utilise ce service. Tout est instantané, sécurisé, et cela m'a énormément simplifié la vie. Une véritable révolution dans les transactions mobiles au Togo.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Fatou KIPRE",
    username: "Dakar, SENEGAL",
    body: "J'ai essayé plusieurs services de transfert d'argent, mais celui-ci est de loin le plus rapide et le plus sécurisé. L'interface est intuitive, et je n'ai jamais eu de problème avec mes transferts. Je recommande cette solution à tous ceux qui recherchent la fiabilité.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "David MONTCHO",
    username: "Accra, GHANA",
    body: "Le fait de pouvoir créer une carte virtuelle en toute simplicité et sécurité m'a donné la tranquillité d'esprit lors de mes achats en ligne. Plus de soucis de fraude ou de piratage, je suis totalement satisfait.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Aïcha MOUNIR",
    username: "Québec, CANADA",
    body: "La sécurité est primordiale pour moi, et cette plateforme m'a offert exactement ce dont j'avais besoin. Créer une carte virtuelle en un instant pour mes achats en ligne a été une expérience fluide et sans stress. Je recommande ce service à tous.",
    img: "https://avatar.vercel.sh/james",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div>
      <section>
        <figure
            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                    {name}
                </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
            <p className="text-xs mt-5 font-medium dark:text-white/40">{username}</p>

        </figure>
      </section>
    </div>
  );
};

export function Testimonials() {
  return (
    <section>
      <div className="section-heading">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-center mb-8">Nos témoignages</h1>
          </div>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    </section>
    
  );
}
