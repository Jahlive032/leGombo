"use client"

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "L'application est vraiment intuitive et facile à utiliser. Même ma mère peut l'utiliser sans problème.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Vos services sont une véritable révélation! Je vais les recommander à tous mes amis et ma famille.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "La possibilité de créer plusieurs cartes virtuelles a complètement transformé ma manière de gérer mon budget.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Je peux organiser mes dépenses par catégorie et ne jamais dépasser mes limites. Une solution indispensable pour ceux qui veulent maîtriser leur argent.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "J'adore la flexibilité des cartes virtuelles de eGO Transfer. Que ce soit pour des achats en ligne ou pour réserver des services, tout gérer depuis une seule application, en toute sécurité. C'est un vrai game-changer !",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Avec eGo Transfer, j'ai enfin trouvé une solution qui me permet de sécuriser mes transactions tout en ayant un contrôle total sur mes dépenses.",
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
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
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
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
      </section>
    </div>
  );
};

export function Testimonials() {
  return (
    <section>

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
