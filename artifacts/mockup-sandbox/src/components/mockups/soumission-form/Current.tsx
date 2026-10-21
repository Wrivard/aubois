import { useState } from "react";
import "./_group.css";

const projectTypes = ["Élagage", "Abattage d’arbre", "Taille de haies", "Entretien des arbres", "Travaux en hauteur", "Autre"];
const budgets = [
  ["petit-projet", "Petit projet"],
  ["projet-moyen", "Projet de taille moyenne"],
  ["grand-projet", "Projet de grande envergure"],
  ["a-evaluer", "À évaluer"],
];
const timelines = [
  ["des-que-possible", "Dès que possible"],
  ["prochaines-semaines", "Dans les prochaines semaines"],
  ["prochains-mois", "Dans les prochains mois"],
  ["a-determiner", "À déterminer"],
];
const steps = ["Projet", "Détails", "Contact"];

function StepBar({ step }: { step: number }) {
  return <div className="sa-steps">{steps.map((title, index) => {
    const n = index + 1;
    return <div className={`sa-step ${step === n ? "is-active" : step > n ? "is-done" : ""}`} key={title}>
      <span className="sa-step-num">{step > n ? "✓" : n}</span><span>{title}</span>
    </div>;
  })}</div>;
}

function Field({ label, children, full = false }: { label: string; children: React.ReactNode; full?: boolean }) {
  return <label className={`sa-field${full ? " full" : ""}`}><span className="sa-label">{label}</span>{children}</label>;
}

export default function Current() {
  const [step, setStep] = useState(1);
  const [project, setProject] = useState("");
  return <main className="soumission-preview sa-current">
    <div className="sa-current-inner">
      <section className="sa-panel" aria-label="Formulaire de demande de soumission">
        <StepBar step={step} />
        {step === 1 && <div className="sa-form-fields">
          <Field label="Type de projet *" full><select className="sa-control" value={project} onChange={e => setProject(e.target.value)}><option value="">Sélectionnez le type de travaux</option>{projectTypes.map(x => <option key={x}>{x}</option>)}</select></Field>
          <Field label="Envergure approximative *"><select className="sa-control" defaultValue=""><option value="">Sélectionnez l’envergure</option>{budgets.map(([v, x]) => <option value={v} key={v}>{x}</option>)}</select></Field>
          <Field label="Échéancier souhaité *"><select className="sa-control" defaultValue=""><option value="">Quand souhaitez-vous réaliser les travaux?</option>{timelines.map(([v, x]) => <option value={v} key={v}>{x}</option>)}</select></Field>
        </div>}
        {step === 2 && <div className="sa-form-fields">
          <Field label="Description détaillée du projet *" full><textarea className="sa-control" placeholder="Décrivez les travaux que vous souhaitez réaliser..." /></Field>
          <Field label="Ville du projet *" full><input className="sa-control" placeholder="Ville où se situe le projet" /></Field>
          <p className="sa-inline-note">Vous pourrez joindre des photos au courriel préparé à la dernière étape. Aucun fichier n’est téléversé sur ce site.</p>
        </div>}
        {step === 3 && <div className="sa-form-fields">
          <Field label="Prénom *"><input className="sa-control" /></Field><Field label="Nom *"><input className="sa-control" /></Field>
          <Field label="Courriel *"><input type="email" className="sa-control" /></Field><Field label="Téléphone *"><input type="tel" className="sa-control" /></Field>
        </div>}
        <div className="sa-actions">
          {step > 1 ? <button className="sa-button outline" onClick={() => setStep(step - 1)}>← &nbsp; Retour</button> : <span />}
          {step < 3 ? <button className="sa-button" onClick={() => setStep(step + 1)}>Suivant &nbsp; →</button> : <button className="sa-button" onClick={() => setStep(1)}>Envoyer ma demande</button>}
        </div>
      </section>
      <aside className="sa-sidebar">
        <section className="sa-side-card">
          <h3>Parlons de votre projet</h3>
          <p>Vous pouvez aussi nous joindre directement par téléphone ou courriel pour discuter de votre projet.</p>
          <a className="sa-contact-line" href="tel:+14189418897">(418) 941-8897</a>
          <a className="sa-contact-line" href="mailto:matisaube1@gmail.com">matisaube1@gmail.com</a>
        </section>
        <section className="sa-side-card dark">
          <h3>Pourquoi nous choisir ?</h3>
          <ul className="sa-credential-list">
            <li>Spécialisation en élagage, abattage et taille de haies</li>
            <li>Interventions adaptées à chaque terrain</li>
            <li>Équipements d’accès en hauteur selon les besoins du projet</li>
          </ul>
        </section>
      </aside>
    </div>
  </main>;
}
