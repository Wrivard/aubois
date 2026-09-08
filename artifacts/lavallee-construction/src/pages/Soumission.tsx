import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { TestimonialsSection, FAQContactSection } from "@/components/SharedSections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

const formSchema = z.object({
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().min(1, "Veuillez sélectionner un budget estimé"),
  timeline: z.string().min(1, "Veuillez sélectionner un délai"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  address: z.string().min(5, "Veuillez entrer l'adresse du projet"),
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Soumission() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, control, handleSubmit, trigger, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      address: "",
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
    if (step === 2) fieldsToValidate = ["description", "address"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const steps = [
    { num: 1, title: "Informations", desc: "Type et budget" },
    { num: 2, title: "Détails", desc: "Description du projet" },
    { num: 3, title: "Coordonnées", desc: "Pour vous joindre" },
  ];

  return (
    <MainLayout>
      {/* Header Visual */}
      <section className="relative pt-32 pb-24 bg-secondary text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/quote-header.jpg" alt="Architectural plans" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Votre projet</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Obtenez une soumission détaillée.</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Remplissez le formulaire ci-dessous avec le plus de détails possible. Un de nos estimateurs vous contactera rapidement pour discuter de la prochaine étape.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-muted relative -mt-10 z-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <div className="bg-white border border-border shadow-xl p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-extrabold mb-4 text-secondary">Demande reçue avec succès</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                  Merci de votre confiance. Notre équipe analysera vos informations et vous contactera dans les prochaines 48 heures ouvrables.
                </p>
                <Button className="uppercase tracking-wider font-bold px-8" onClick={() => window.location.href = "/"}>
                  Retour à l'accueil
                </Button>
              </div>
            ) : (
              <>
                {/* Stepper Indicator */}
                <div className="flex justify-between items-center mb-12 relative">
                  <div className="absolute top-5 left-0 w-full h-0.5 bg-muted -z-10"></div>
                  <div className="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all duration-500" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>
                  
                  {steps.map((s) => (
                    <div key={s.num} className="flex flex-col items-center gap-2 bg-white px-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                        step >= s.num 
                          ? 'bg-primary border-primary text-white' 
                          : 'bg-white border-muted text-muted-foreground'
                      }`}>
                        {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                      </div>
                      <div className="text-center hidden sm:block">
                        <p className={`text-sm font-bold uppercase tracking-widest ${step >= s.num ? 'text-secondary' : 'text-muted-foreground'}`}>{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile Stepper Label */}
                <div className="sm:hidden text-center mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-secondary">{steps[step-1].title}</p>
                  <p className="text-xs text-muted-foreground">{steps[step-1].desc}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div>
                        <Label className="text-base font-bold mb-4 block">Quel est le type de projet ? *</Label>
                        <Controller
                          name="projectType"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid sm:grid-cols-3 gap-4">
                              {[
                                { id: "res", label: "Résidentiel", desc: "Maison neuve, chalet" },
                                { id: "com", label: "Commercial", desc: "Bureau, commerce" },
                                { id: "ren", label: "Rénovation", desc: "Majeure, agrandissement" },
                              ].map(opt => (
                                <div key={opt.id}>
                                  <RadioGroupItem value={opt.label} id={opt.id} className="peer sr-only" />
                                  <Label
                                    htmlFor={opt.id}
                                    className="flex flex-col items-center justify-between border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer rounded-none h-full transition-colors"
                                  >
                                    <span className="font-bold text-secondary mb-1">{opt.label}</span>
                                    <span className="text-xs text-muted-foreground text-center font-normal">{opt.desc}</span>
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          )}
                        />
                        {errors.projectType && <p className="text-destructive text-sm mt-2">{errors.projectType.message}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label className="font-bold">Budget estimé *</Label>
                          <Controller
                            name="budget"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="h-12 rounded-none border-border focus:ring-primary focus:border-primary">
                                  <SelectValue placeholder="Sélectionnez une fourchette" />
                                </SelectTrigger>
                                <SelectContent className="rounded-none">
                                  <SelectItem value="50k-100k">50 000$ - 100 000$</SelectItem>
                                  <SelectItem value="100k-250k">100 000$ - 250 000$</SelectItem>
                                  <SelectItem value="250k-500k">250 000$ - 500 000$</SelectItem>
                                  <SelectItem value="500k+">500 000$ et plus</SelectItem>
                                  <SelectItem value="tbd">À déterminer</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.budget && <p className="text-destructive text-sm">{errors.budget.message}</p>}
                        </div>
                        
                        <div className="space-y-3">
                          <Label className="font-bold">Délai souhaité *</Label>
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
                        <Label className="font-bold">Description du projet *</Label>
                        <Textarea 
                          {...register("description")} 
                          placeholder="Décrivez brièvement les travaux à réaliser, la superficie approximative, les matériaux souhaités..."
                          className="min-h-[150px] rounded-none border-border focus:ring-primary focus:border-primary resize-y"
                        />
                        {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="font-bold">Adresse du futur chantier *</Label>
                        <Input 
                          {...register("address")} 
                          placeholder="Adresse complète ou code postal"
                          className="h-12 rounded-none border-border focus:ring-primary focus:border-primary"
                        />
                        {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
                      </div>
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
                      <Button type="button" variant="outline" onClick={prevStep} className="font-bold uppercase tracking-wider h-12 px-6">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Retour
                      </Button>
                    ) : <div></div>}
                    
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep} className="font-bold uppercase tracking-wider h-12 px-8">
                        Suivant <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="font-bold uppercase tracking-wider h-12 px-8 bg-secondary hover:bg-secondary/90 text-white">
                        Envoyer la demande
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
