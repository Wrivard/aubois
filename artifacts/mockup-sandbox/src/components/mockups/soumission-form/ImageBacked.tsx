import { useState } from "react";
import "./_group.css";

const steps = ["Projet", "Détails", "Contact"];
const projects = ["Élagage", "Abattage d’arbre", "Taille de haies", "Entretien des arbres", "Travaux en hauteur", "Autre"];
const budgets = ["Petit projet", "Projet de taille moyenne", "Projet de grande envergure", "À évaluer"];
const timelines = ["Dès que possible", "Dans les prochaines semaines", "Dans les prochains mois", "À déterminer"];

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

export default function ImageBacked() {
  const [step, setStep] = useState(1);
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  return <main className="soumission-preview sa-image-backed">
    <section className="sa-image-copy">
      <span className="sa-kicker">Un projet. Une équipe de confiance.</span>
      <h1>Parlons de<br />vos arbres.</h1>
      <p>Décrivez-nous l’arbre, le terrain et les travaux souhaités. Notre équipe locale vous guidera vers la bonne solution.</p>
      <div className="sa-local-note">Montmagny, Berthier-sur-Mer et les environs</div>
      <h2>Un travail bien encadré</h2>
      <div className="sa-cred-grid">
        <div className="sa-cred"><strong>Assurance responsabilité</strong><span>Couverture de 5 000 000 $</span></div>
        <div className="sa-cred"><strong>Certified Arborist</strong><span>Certification ISA</span></div>
        <div className="sa-cred"><strong>Formation en élagage</strong><span>Centre horticole de Laval</span></div>
        <div className="sa-cred"><strong>Interventions en hauteur</strong><span>Nacelle selon le projet</span></div>
      </div>
      <div className="sa-image-foot">Service d’Arbres Aubois · Arboriculture locale</div>
    </section>

    <section className="sa-image-form" aria-label="Demande de soumission">
      <StepBar step={step} />
      <div className="sa-form-body">
        {step === 1 && <>
          <p className="sa-stage-label">Étape 1 · Projet</p>
          <h2 className="sa-stage-title">Quel type de projet avez-vous en tête ?</h2>
          <p className="sa-stage-help">Choisissez la catégorie qui décrit le mieux vos besoins.</p>
          <div className="sa-project-grid" role="group" aria-label="Type de projet">
            {projects.map(item => <button type="button" key={item} aria-pressed={project === item} onClick={() => setProject(item)} className={`sa-choice${project === item ? " selected" : ""}`}>{item}</button>)}
          </div>
          <div className="sa-form-fields" style={{ marginTop: 17 }}>
            <Field label="Envergure approximative *"><select className="sa-control" value={budget} onChange={e => setBudget(e.target.value)}><option value="">Sélectionnez l’envergure</option>{budgets.map(item => <option key={item}>{item}</option>)}</select></Field>
            <Field label="Échéancier souhaité *"><select className="sa-control" value={timeline} onChange={e => setTimeline(e.target.value)}><option value="">Quand souhaitez-vous réaliser les travaux?</option>{timelines.map(item => <option key={item}>{item}</option>)}</select></Field>
          </div>
        </>}
        {step === 2 && <>
          <p className="sa-stage-label">Étape 2 · Détails</p>
          <h2 className="sa-stage-title">Parlez-nous du terrain.</h2>
          <p className="sa-stage-help">Quelques précisions nous aideront à mieux comprendre les travaux souhaités.</p>
          <div className="sa-form-fields">
            <Field label="Description détaillée du projet *" full><textarea className="sa-control" placeholder="Décrivez les travaux que vous souhaitez réaliser..." /></Field>
            <Field label="Ville du projet *" full><input className="sa-control" placeholder="Ville où se situe le projet" /></Field>
            <p className="sa-inline-note">Vous pourrez joindre des photos au courriel préparé à la dernière étape. Aucun fichier n’est téléversé sur ce site.</p>
          </div>
        </>}
        {step === 3 && <>
          <p className="sa-stage-label">Étape 3 · Contact</p>
          <h2 className="sa-stage-title">Comment vous joindre ?</h2>
          <p className="sa-stage-help">Laissez vos coordonnées pour préparer votre demande.</p>
          <div className="sa-form-fields">
            <Field label="Prénom *"><input className="sa-control" /></Field><Field label="Nom *"><input className="sa-control" /></Field>
            <Field label="Courriel *"><input type="email" className="sa-control" /></Field><Field label="Téléphone *"><input type="tel" className="sa-control" /></Field>
          </div>
        </>}
        <div className="sa-actions">
          {step > 1 ? <button className="sa-button outline" onClick={() => setStep(step - 1)}>← &nbsp; Retour</button> : <span />}
          {step < 3 ? <button className="sa-button" onClick={() => setStep(step + 1)}>Suivant &nbsp; →</button> : <button className="sa-button" onClick={() => setStep(1)}>Envoyer ma demande</button>}
        </div>
      </div>
    </section>
  </main>;
}
