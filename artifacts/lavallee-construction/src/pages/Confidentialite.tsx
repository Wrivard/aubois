import { MainLayout } from "@/components/layout/MainLayout";

export default function Confidentialite() {
  return (
    <MainLayout>
      <section className="bg-white pb-16 pt-[156px] sm:pb-20 sm:pt-[176px] xl:pb-24 xl:pt-[190px]">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="section-eyebrow mb-4 text-secondary text-sm font-bold uppercase tracking-widest">
            Renseignements personnels
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-secondary sm:text-4xl xl:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mb-10 text-sm text-muted-foreground">Dernière mise à jour : 28 octobre 2026</p>

          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <p>
              Cette politique décrit les renseignements qui peuvent être transmis lorsque vous utilisez le site de Service d’arbres Aubois et la façon de poser une question à leur sujet.
            </p>

            <section>
              <h2 className="mb-2 text-xl font-bold text-secondary">Responsable et contact</h2>
              <p>
                La dénomination enregistrée est Service d'arbres Aubois. Pour toute question liée à la confidentialité ou pour demander l’accès à un renseignement transmis, écrivez à{" "}
                <a className="font-semibold text-secondary underline underline-offset-4" href="mailto:matisaube1@gmail.com">matisaube1@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-secondary">Renseignements saisis dans le formulaire</h2>
              <p>
                Le formulaire de soumission demande votre prénom, votre nom, votre téléphone, votre adresse courriel, l’adresse ou la localisation du projet, le type de service demandé et une description de vos besoins.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-secondary">Transmission par courriel</h2>
              <p>
                Lorsque vous soumettez le formulaire, vos renseignements sont transmis par courriel au propriétaire du site et un accusé de réception est envoyé à l’adresse que vous avez fournie. Le service d’envoi Resend traite ces renseignements pour acheminer les messages; consultez la{" "}
                <a
                  className="font-semibold text-secondary underline underline-offset-4"
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  politique de confidentialité de Resend
                </a>
                . Le site ne conserve pas ces demandes dans une base de données.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-secondary">Carte et services externes</h2>
              <p>
                Le site intègre une carte Google Maps. Son chargement peut transmettre à Google des renseignements techniques liés à votre visite. Le traitement effectué par Google est régi par sa{" "}
                <a
                  className="font-semibold text-secondary underline underline-offset-4"
                  href="https://policies.google.com/privacy?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  politique de confidentialité
                </a>.
              </p>
              <p className="mt-3">
                Le site n’intègre pas d’outil de mesure d’audience ou de publicité. La carte demeure un service tiers et peut fonctionner selon les paramètres de Google.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-secondary">Demandes et mises à jour</h2>
              <p>
                Pour poser une question ou demander la correction d’un renseignement que vous avez transmis, contactez Service d'arbres Aubois à l’adresse courriel indiquée ci-dessus. Cette politique peut être mise à jour si les pratiques ou les fonctionnalités du site changent.
              </p>
            </section>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
