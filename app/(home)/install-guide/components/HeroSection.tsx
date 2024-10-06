import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpTrayIcon,
  Square2StackIcon,
  PlusIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { EllipsisVertical, Plus, Share, SquarePlus } from "lucide-react";

export default function GuidePage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-2xl mx-auto">
      {/* <Link href="/" className="cursor-pointer flex items-center gap-1 mb-8">
        <Image src="/logo_1.png" width={80} height={80} alt="Logo legombo" />
      </Link> */}

      <div className="flex flex-col items-center justify-center gap-8 p-4 w-full">
        <h1 className="text-2xl font-ibm-plex-serif font-bold text-center">
          Guide d&apos;installation
        </h1>

        <div className="space-y-8 w-full">
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Image
                src="/apple-logo.svg"
                width={24}
                height={24}
                alt="Apple logo"
                className="mr-2"
              />
              Installation sur iPhone (Safari)
            </h2>
            <ol className="list-none space-y-4">
              <li className="flex items-center">
                <Image
                  src="/safari-icon.svg"
                  width={24}
                  height={24}
                  alt="safari icon"
                  className="mr-2"
                />
                <span className="text-sm md:text-base">
                  Ouvrez l&apos;application dans Safari
                </span>
              </li>
              <li className="flex items-center">
                <Share className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Appuyez sur l&apos;icône de partage (carré avec une flèche
                  vers le haut)
                </span>
              </li>
              <li className="flex items-center">
                <SquarePlus className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Faites défiler et sélectionnez &quot;Ajouter à l&apos;écran
                  d&apos;accueil&quot;
                </span>
              </li>
              <li className="flex items-center justify-start">
                <Plus className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Confirmez en appuyant sur &quot;Ajouter&quot;
                </span>
              </li>
            </ol>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Image
                src="/android-logo.svg"
                width={24}
                height={24}
                alt="Android logo"
                className="mr-2"
              />
              Installation sur Android (Chrome)
            </h2>
            <ol className="list-none space-y-4">
              <li className="flex items-center">
                <Image
                  src="/chrome-logo.svg"
                  width={24}
                  height={24}
                  alt="Chrome icon"
                  className="mr-2"
                />
                <span className="text-sm md:text-base">
                  Ouvrez l&apos;application dans Chrome
                </span>
              </li>
              <li className="flex items-center">
                <EllipsisVertical className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Appuyez sur les trois points verticaux (menu)
                </span>
              </li>
              <li className="flex items-center">
                <SquarePlus className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Sélectionnez &quot;Ajouter à l&apos;écran d&apos;accueil&quot;
                </span>
              </li>
              <li className="flex items-center">
                <Plus className="w-16 md:w-6 h-6 mr-2 text-green-700" />
                <span className="text-sm md:text-base">
                  Confirmez en appuyant sur &quot;Ajouter&quot;
                </span>
              </li>
            </ol>
          </section>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Une fois installée, vous pourrez accéder à l&apos;application
          directement depuis l&apos;écran d&apos;accueil de votre appareil.
        </p>
      </div>
    </div>
  );
}
