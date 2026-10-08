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
import { CheckCircle2, ChevronRight, ArrowLeft, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().min(1, "Veuillez sélectionner un budget estimé"),
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
    const title = "Soumission | Les Constructions Godin";
    const description = "Présentez votre projet de construction ou de rénovation résidentielle aux Constructions Godin en Mauricie, à Tadoussac ou à Baie-Comeau.";
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
      `Budget approximatif : ${data.budget}`,
      `Échéancier souhaité : ${data.timeline}`,
      "",
      `Description du projet : ${data.description}`,
      "",
      "Vous pouvez joindre vos photos et plans directement à ce courriel avant de l'envoyer."
    ].join("\n");
    window.location.href = `mailto:lesconstructionsgodin@gmail.com?subject=${encodeURIComponent(`Demande de soumission — ${data.firstName} ${data.lastName}`)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  const steps = [
    { num: 1, title: "Projet" },
    { num: 2, title: "Détails" },
    { num: 3, title: "Contact" },
  ];

  return (
    <MainLayout>
      {/* Restrained Header Visual */}
      <section className="relative pt-[158px] xl:pt-[177px] pb-12 md:pb-16 bg-forest text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
             src="/photos/jagster-bathroom-03.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">Parlons de votre projet</span>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">Demande de soumission gratuite</h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Présentez votre projet de construction ou de rénovation résidentielle en Mauricie, à Tadoussac ou à Baie-Comeau. Votre demande sera préparée dans votre messagerie.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-10 md:py-16 xl:py-24 bg-muted min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid xl:grid-cols-3 gap-6 xl:gap-8 items-start">
            
            {/* Form Panel (Left) */}
            <div className="xl:col-span-2 min-w-0 bg-white border border-border shadow-sm p-5 sm:p-6 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4 text-secondary">Votre courriel est prêt</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                    Votre messagerie devrait s'ouvrir avec les détails du projet. Ajoutez vos photos ou vos plans, puis envoyez le courriel. Rien n'a été transmis automatiquement par ce site. Si votre messagerie ne s'ouvre pas, écrivez directement à lesconstructionsgodin@gmail.com.
                  </p>
                  <Button className="uppercase tracking-wider font-bold px-8" onClick={() => window.location.href = "/"}>
                    Retour à l'accueil
                  </Button>
                </div>
              ) : (
                <>
                  {/* Business Stepper */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 pb-6 border-b border-border">
                    {steps.map(s => (
                      <div key={s.num} className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left ${step === s.num ? 'opacity-100' : step > s.num ? 'opacity-70' : 'opacity-40'}`}>
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s.num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {step > s.num ? <CheckCircle2 className="w-4 h-4"/> : s.num}
                        </div>
                         <div>
                           <p className="text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider text-secondary leading-none">{s.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3 md:col-span-2">
                            <Label className="font-bold text-base">Type de projet *</Label>
                            <Controller
                              name="projectType"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="h-12 rounded-none border-border focus:ring-primary focus:border-primary">
                                    <SelectValue placeholder="Sélectionnez le type de travaux" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-none">
                                      <SelectItem value="Rénovation résidentielle">Rénovation résidentielle</SelectItem>
                                      <SelectItem value="Rénovation de cuisine">Rénovation de cuisine</SelectItem>
                                      <SelectItem value="Transformation intérieure">Transformation intérieure</SelectItem>
                                      <SelectItem value="Construction résidentielle">Construction résidentielle</SelectItem>
                                      <SelectItem value="Finition intérieure">Finition intérieure</SelectItem>
                                      <SelectItem value="Autre">Autre</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.projectType && <p className="text-destructive text-sm">{errors.projectType.message}</p>}
                          </div>

                          <div className="space-y-3">
                            <Label className="font-bold">Budget approximatif *</Label>
                            <Controller
                              name="budget"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="h-12 rounded-none border-border focus:ring-primary focus:border-primary">
                                    <SelectValue placeholder="Sélectionnez une fourchette" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-none">
                                     <SelectItem value="under-5k">Moins de 5 000 $</SelectItem>
                                     <SelectItem value="5k-10k">5 000 $ à 10 000 $</SelectItem>
                                     <SelectItem value="10k-25k">10 000 $ à 25 000 $</SelectItem>
                                     <SelectItem value="25k+">25 000 $ et plus</SelectItem>
                                    <SelectItem value="tbd">À déterminer</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.budget && <p className="text-destructive text-sm">{errors.budget.message}</p>}
                          </div>
                          
                          <div className="space-y-3">
                            <Label className="font-bold">Échéancier souhaité *</Label>
                            <Controller
                              name="timeline"
                              control={control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="h-12 rounded-none border-border focus:ring-primary focus:border-primary">
                                    <SelectValue placeholder="Quand souhaitez-vous débuter ?" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-none">
                                    <SelectItem value="asap">Le plus tôt possible</SelectItem>
                                    <SelectItem value="3-6-months">Dans 3 à 6 mois</SelectItem>
                                    <SelectItem value="6-12-months">Dans 6 à 12 mois</SelectItem>
                                    <SelectItem value="next-year">L'année prochaine</SelectItem>
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
                          Photos et plans ou documents : vous pourrez les joindre au courriel préparé à la dernière étape. Aucun fichier n'est téléversé sur ce site.
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
                    <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                      {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep} className="font-bold uppercase tracking-wider h-12 px-6 w-full sm:w-auto">
                          <ArrowLeft className="mr-2 w-4 h-4" /> Retour
                        </Button>
                      ) : <div></div>}
                      
                      {step < 3 ? (
                        <Button type="button" onClick={nextStep} className="font-bold uppercase tracking-wider h-12 px-8 w-full sm:w-auto mt-4 sm:mt-0">
                          Suivant <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="font-bold uppercase tracking-wider h-12 px-8 bg-forest hover:bg-forest/90 text-white w-full sm:w-auto mt-4 sm:mt-0">
                           Obtenir ma soumission gratuite
                        </Button>
                      )}
                    </div>

                  </form>
                </>
              )}
            </div>

            {/* Sidebar (Right) */}
            <div className="xl:col-span-1 min-w-0 space-y-6">
              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="text-xl font-bold mb-4">Parlons de votre projet</h3>
                  <p className="mb-6 text-primary-foreground/90 text-sm leading-relaxed">
                  Vous pouvez aussi nous joindre directement par téléphone ou courriel pour discuter de votre projet.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 font-medium">
                     <Phone className="w-5 h-5"/> <a href="tel:+18199449037">(819) 944-9037</a>
                  </p>
                  <p className="flex items-center gap-3 font-medium">
                     <Mail className="w-5 h-5"/> <a className="break-all" href="mailto:lesconstructionsgodin@gmail.com">lesconstructionsgodin@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="bg-forest text-white p-8">
                <h3 className="text-xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                <ul className="space-y-5">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                        <span className="text-sm text-white/80 leading-tight">Licence RBQ : 5855-8107-01</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                         <span className="text-sm text-white/80 leading-tight">Construction et rénovation résidentielle</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                         <span className="text-sm text-white/80 leading-tight">Des projets adaptés aux besoins de votre propriété</span>
                   </li>
                </ul>
              </div>
            </div>

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
