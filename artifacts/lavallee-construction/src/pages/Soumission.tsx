import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { TestimonialsSection, FAQContactSection } from "@/components/SharedSections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Scissors,
  ShieldCheck,
  TreePine,
  Axe,
} from "lucide-react";

const formSchema = z.object({
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().min(1, "Veuillez sélectionner l’envergure approximative"),
  timeline: z.string().min(1, "Veuillez sélectionner un délai"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  city: z.string().min(2, "Veuillez entrer la ville du projet"),
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Soumission() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const title = "Soumission | Service d’Arbres Aubois";
    const description = "Présentez votre projet d’élagage, d’abattage d’arbres ou de taille de haies à Service d’Arbres Aubois.";
    const previousTitle = document.title;
    const tags = ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="twitter:title"]', 'meta[name="twitter:description"]'];
    const previous = tags.map((selector) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      const value = element?.content;
      if (element) element.content = selector.includes("title") ? title : description;
      return { element, value };
    });
    document.title = title;
    return () => {
      document.title = previousTitle;
      previous.forEach(({ element, value }) => { if (element && value !== undefined) element.content = value; });
    };
  }, []);

  const { register, control, handleSubmit, trigger, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      city: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    mode: "onTouched",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) fieldsToValidate = ["projectType", "budget", "timeline"];
    if (step === 2) fieldsToValidate = ["description", "city"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = (data: FormValues) => {
    const body = [
      `Nom : ${data.firstName} ${data.lastName}`,
      `Téléphone : ${data.phone}`,
      `Courriel : ${data.email}`,
      `Ville du projet : ${data.city}`,
      `Type de projet : ${data.projectType}`,
      `Envergure approximative : ${data.budget}`,
      `Échéancier souhaité : ${data.timeline}`,
      "",
      `Description du projet : ${data.description}`,
      "",
       "Vous pouvez joindre des photos directement à ce courriel avant de l'envoyer."
    ].join("\n");
    window.location.href = `mailto:matisaube1@gmail.com?subject=${encodeURIComponent(`Demande de soumission — ${data.firstName} ${data.lastName}`)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  const steps = [
    { num: 1, title: "Projet" },
    { num: 2, title: "Détails" },
    { num: 3, title: "Coordonnées" },
  ];

  const projectTypes = [
    { id: "elagage", value: "Élagage", label: "Émondage et élagage", icon: TreePine },
    { id: "abattage", value: "Abattage d’arbre", label: "Abattage", icon: Axe },
    { id: "haies", value: "Taille de haies", label: "Taille de haies", icon: Scissors },
    { id: "entretien", value: "Entretien des arbres", label: "Entretien des arbres", icon: Leaf },
    { id: "hauteur", value: "Travaux en hauteur", label: "Travaux en hauteur", icon: ArrowUpRight },
    { id: "autre", value: "Autre", label: "Autre travail arboricole", icon: CircleHelp },
  ];

  const trustItems = [
    { icon: ShieldCheck, title: "Assurance responsabilité", detail: "Couverture de 5 000 000 $" },
    { icon: Award, title: "Certified Arborist", detail: "Certification ISA" },
    { icon: GraduationCap, title: "Formation en élagage", detail: "Centre horticole de Laval" },
    { icon: TreePine, title: "Interventions en hauteur", detail: "Nacelle selon le projet" },
  ];

  return (
    <MainLayout>
      <section id="soumission" className="relative isolate min-h-screen overflow-hidden bg-forest text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/photos/arbres-aubois/soumission.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,15,0.93)_0%,rgba(10,18,15,0.84)_48%,rgba(10,18,15,0.78)_100%)]" />
          <div className="absolute inset-0 bg-forest/20" />
        </div>

        <div className="container relative z-10 mx-auto grid w-full items-center gap-10 px-6 pb-12 pt-[156px] sm:px-8 md:gap-12 md:px-12 md:pb-16 md:pt-[176px] xl:min-h-screen xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-14 xl:pt-[190px]">
          <div className="max-w-xl">
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              <span aria-hidden="true" className="h-px w-6 shrink-0 bg-primary" />
              Un projet. Une équipe de confiance.
            </span>
            <h1 id="soumission-title" className="mb-5 max-w-lg text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Parlons de votre projet.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Décrivez-nous l’arbre, le terrain et les travaux souhaités. Notre équipe locale vous guidera vers la bonne solution.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-white/75">
              <MapPin className="h-4 w-4 text-primary" />
              Montmagny, Berthier-sur-Mer et les environs
            </p>

            <div className="mt-8 sm:mt-10">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Un travail bien encadré</p>
              <div className="grid grid-cols-2 gap-3">
                {trustItems.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="min-h-[92px] border border-white/15 bg-black/45 p-4 backdrop-blur-sm sm:p-5">
                    <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="text-xs font-bold leading-snug text-white sm:text-sm">{title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-white/65 sm:text-xs">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-sm text-white/75">
              <a data-testid="link-quote-phone" href="tel:+14189418897" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-primary" />
                (418) 941-8897
              </a>
              <a data-testid="link-quote-email" href="mailto:matisaube1@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-primary" />
                matisaube1@gmail.com
              </a>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-xl bg-white text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:rounded-2xl">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4 text-secondary">Votre courriel est prêt</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                    Votre messagerie devrait s’ouvrir avec les détails du projet. Ajoutez vos photos, puis envoyez le courriel. Rien n’a été transmis automatiquement par ce site. Si votre messagerie ne s’ouvre pas, écrivez directement à matisaube1@gmail.com.
                  </p>
                  <Button className="uppercase tracking-wider font-bold px-8" onClick={() => window.location.href = "/"}>
                    Retour à l'accueil
                  </Button>
                </div>
              ) : (
                <>
                  {/* Business Stepper */}
                  <div className="grid grid-cols-3 gap-2 rounded-t-xl border-b border-border bg-muted/60 px-5 py-5 sm:gap-4 sm:rounded-t-2xl sm:px-8">
                    {steps.map(s => (
                      <div key={s.num} className={`relative flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3 ${step === s.num ? 'opacity-100' : step > s.num ? 'opacity-75' : 'opacity-45'}`}>
                         <div className={`flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full text-center font-bold text-sm leading-none ${step >= s.num ? 'bg-primary text-primary-foreground' : 'border border-border bg-white text-muted-foreground'}`}>
                          {step > s.num ? <CheckCircle2 className="w-4 h-4"/> : s.num}
                        </div>
                         <div>
                           <p className="text-[10px] font-bold uppercase leading-none tracking-wide text-secondary sm:text-xs sm:tracking-wider">{s.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="p-5 sm:p-7 xl:p-8">
                    
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Étape 1 · Projet</span>
                          <h2 className="text-xl font-extrabold leading-tight text-secondary sm:text-2xl">Quel type de projet avez-vous en tête&nbsp;?</h2>
                          <p className="mt-2 text-sm text-muted-foreground">Choisissez la catégorie qui décrit le mieux vos besoins.</p>
                        </div>

                        <div className="space-y-3">
                          <Label className="font-bold">Type de projet *</Label>
                          <Controller
                            name="projectType"
                            control={control}
                            render={({ field }) => (
                              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                                {projectTypes.map(({ id, value, label, icon: Icon }) => {
                                  const selected = field.value === value;
                                  return (
                                    <button
                                      key={id}
                                      type="button"
                                      aria-pressed={selected}
                                      data-testid={`button-project-type-${id}`}
                                      onClick={() => field.onChange(value)}
                                      className={`flex min-h-[82px] flex-col items-center justify-center gap-2 border px-2.5 py-3 text-center text-xs font-semibold leading-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[90px] sm:text-sm ${
                                        selected
                                          ? "border-primary bg-primary/5 text-secondary ring-1 ring-primary/25"
                                          : "border-border bg-white text-secondary hover:border-primary/60 hover:bg-muted/50"
                                      }`}
                                    >
                                      <Icon className={`h-5 w-5 ${selected ? "text-primary" : "text-muted-foreground"}`} aria-hidden="true" />
                                      <span>{label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          />
                          {errors.projectType && <p className="text-destructive text-sm">{errors.projectType.message}</p>}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                          <div className="space-y-2.5">
                            <Label className="font-bold">Envergure approximative *</Label>
                            <Controller
                              name="budget"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger data-testid="select-project-budget" className="h-12 rounded-lg border-border focus:ring-primary focus:border-primary">
                                    <SelectValue placeholder="Sélectionnez l’envergure" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-lg">
                                      <SelectItem value="petit-projet">Petit projet</SelectItem>
                                      <SelectItem value="projet-moyen">Projet de taille moyenne</SelectItem>
                                      <SelectItem value="grand-projet">Projet de grande envergure</SelectItem>
                                     <SelectItem value="a-evaluer">À évaluer</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.budget && <p className="text-destructive text-sm">{errors.budget.message}</p>}
                          </div>
                          
                          <div className="space-y-2.5">
                            <Label className="font-bold">Échéancier souhaité *</Label>
                            <Controller
                              name="timeline"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger data-testid="select-project-timeline" className="h-12 rounded-lg border-border focus:ring-primary focus:border-primary">
                                       <SelectValue placeholder="Quand souhaitez-vous réaliser les travaux?" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-lg">
                                    <SelectItem value="des-que-possible">Dès que possible</SelectItem>
                                    <SelectItem value="prochaines-semaines">Dans les prochaines semaines</SelectItem>
                                    <SelectItem value="prochains-mois">Dans les prochains mois</SelectItem>
                                    <SelectItem value="a-determiner">À déterminer</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.timeline && <p className="text-destructive text-sm">{errors.timeline.message}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-3">
                          <Label className="font-bold">Description détaillée du projet *</Label>
                          <Textarea 
                            {...register("description")} 
                              placeholder="Décrivez les travaux que vous souhaitez réaliser..."
                             className="min-h-[180px] rounded-none border-border focus:ring-primary focus:border-primary resize-y"
                          />
                          {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
                        </div>
                        
                        <div className="space-y-3">
                            <Label className="font-bold">Ville du projet *</Label>
                          <Input 
                              {...register("city")}
                              placeholder="Ville où se situe le projet"
                            className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                          />
                            {errors.city && <p className="text-destructive text-sm">{errors.city.message}</p>}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Vous pourrez joindre des photos au courriel préparé à la dernière étape. Aucun fichier n’est téléversé sur ce site.
                        </p>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label className="font-bold">Prénom *</Label>
                            <Input 
                              {...register("firstName")} 
                            className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                            />
                            {errors.firstName && <p className="text-destructive text-sm">{errors.firstName.message}</p>}
                          </div>
                          <div className="space-y-3">
                            <Label className="font-bold">Nom *</Label>
                            <Input 
                              {...register("lastName")} 
                              className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                            />
                            {errors.lastName && <p className="text-destructive text-sm">{errors.lastName.message}</p>}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label className="font-bold">Courriel *</Label>
                            <Input 
                              type="email"
                              {...register("email")} 
                              className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                            />
                            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                          </div>
                          <div className="space-y-3">
                            <Label className="font-bold">Téléphone *</Label>
                            <Input 
                              type="tel"
                              {...register("phone")} 
                              className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                            />
                            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-7 flex items-center justify-between border-t border-border pt-6 sm:mt-8">
                      {step > 1 ? (
                        <Button data-testid="button-form-back" type="button" variant="outline" onClick={prevStep} className="h-11 w-full rounded-lg px-6 font-bold uppercase tracking-wider sm:w-auto">
                          <ArrowLeft className="mr-2 w-4 h-4" /> Retour
                        </Button>
                      ) : <div></div>}
                      
                      {step < 3 ? (
                        <Button data-testid="button-form-next" type="button" onClick={nextStep} className="mt-4 h-11 w-full rounded-lg px-8 font-bold uppercase tracking-wider sm:mt-0 sm:w-auto">
                          Suivant <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button data-testid="button-form-submit" type="submit" className="mt-4 h-11 w-full rounded-lg bg-forest px-8 font-bold uppercase tracking-wider text-white hover:bg-forest/90 sm:mt-0 sm:w-auto">
                           Envoyer ma demande
                        </Button>
                      )}
                    </div>

                  </form>
                </>
              )}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ & Contact */}
      <FAQContactSection />
      
    </MainLayout>
  );
}
