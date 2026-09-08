import { useState } from "react";
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
    { num: 1, title: "Projet" },
    { num: 2, title: "Détails" },
    { num: 3, title: "Contact" },
  ];

  return (
    <MainLayout>
      {/* Restrained Header Visual */}
      <section className="relative pt-32 pb-16 bg-[#1B1B1B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/quote-header.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[#1B1B1B]/80" />
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Estimation gratuite</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Demande de soumission</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Détaillez votre projet. Un estimateur vous contactera sous 48h.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-24 bg-muted min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Form Panel (Left) */}
            <div className="lg:col-span-2 bg-white border border-border shadow-sm p-6 md:p-10">
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
                  {/* Business Stepper */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-10 pb-6 border-b border-border">
                    {steps.map(s => (
                      <div key={s.num} className={`flex items-center gap-3 flex-1 ${step === s.num ? 'opacity-100' : step > s.num ? 'opacity-70' : 'opacity-40'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s.num ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                          {step > s.num ? <CheckCircle2 className="w-4 h-4"/> : s.num}
                        </div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider text-secondary leading-none">{s.title}</p>
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
                                    <SelectItem value="residentiel">Résidentiel (Maison neuve, chalet)</SelectItem>
                                    <SelectItem value="commercial">Commercial (Bureau, commerce)</SelectItem>
                                    <SelectItem value="renovation">Rénovation majeure / Agrandissement</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            {errors.projectType && <p className="text-destructive text-sm">{errors.projectType.message}</p>}
                          </div>

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
                          <Label className="font-bold">Description détaillée du projet *</Label>
                          <Textarea 
                            {...register("description")} 
                            placeholder="Décrivez brièvement les travaux à réaliser, la superficie approximative, les matériaux souhaités..."
                            className="min-h-[180px] rounded-none border-border focus:ring-primary focus:border-primary resize-y"
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
                        <Button type="button" variant="outline" onClick={prevStep} className="font-bold uppercase tracking-wider h-12 px-6 w-full sm:w-auto">
                          <ArrowLeft className="mr-2 w-4 h-4" /> Retour
                        </Button>
                      ) : <div></div>}
                      
                      {step < 3 ? (
                        <Button type="button" onClick={nextStep} className="font-bold uppercase tracking-wider h-12 px-8 w-full sm:w-auto mt-4 sm:mt-0">
                          Suivant <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="font-bold uppercase tracking-wider h-12 px-8 bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto mt-4 sm:mt-0">
                          Envoyer la demande
                        </Button>
                      )}
                    </div>

                  </form>
                </>
              )}
            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-primary text-white p-8">
                <h3 className="text-xl font-bold mb-4">Besoin d'aide immédiate ?</h3>
                <p className="mb-6 text-white/90 text-sm leading-relaxed">
                  Contactez notre équipe directement. Nous sommes disponibles pour répondre à vos questions du lundi au vendredi.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 font-medium">
                    <Phone className="w-5 h-5"/> (514) 555-0199
                  </p>
                  <p className="flex items-center gap-3 font-medium">
                    <Mail className="w-5 h-5"/> info@lavalleeconstruction.ca
                  </p>
                </div>
              </div>
              
              <div className="bg-[#1B1B1B] text-white p-8">
                <h3 className="text-xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                <ul className="space-y-5">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                     <span className="text-sm text-white/80 leading-tight">Licence RBQ valide & Assurances complètes de 5M$</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                     <span className="text-sm text-white/80 leading-tight">Transparence totale des coûts et échéanciers respectés</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> 
                     <span className="text-sm text-white/80 leading-tight">Gestion de chantier rigoureuse et sécuritaire</span>
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
