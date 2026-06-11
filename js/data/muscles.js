// Anatomy muscle data for medical student learning.
// Global array of named skeletal muscles, organized by body region.
window.ANATOMY_MUSCLES = [
  // ===================== HEAD & NECK: FACIAL EXPRESSION =====================
  {
    id: "occipitofrontalis",
    name: "Occipitofrontalis",
    latin: "Musculus occipitofrontalis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Epicranial muscle of the scalp with frontal and occipital bellies joined by the galea aponeurotica; muscle of facial expression.",
    details: {
      "Origin": "Occipital belly from the highest nuchal line of the occipital bone; frontal belly from the galea aponeurotica.",
      "Insertion": "Occipital belly into the galea aponeurotica; frontal belly into skin of eyebrows and root of nose.",
      "Innervation": "Facial nerve (CN VII) — temporal branches to frontal belly, posterior auricular branch to occipital belly.",
      "Action": "Frontal belly elevates the eyebrows and wrinkles the forehead (surprise); occipital belly retracts the scalp.",
      "Blood supply": "Supraorbital and supratrochlear arteries (frontal); occipital and posterior auricular arteries (occipital)."
    },
    clinical: "Frontal belly weakness loses forehead wrinkling; sparing of the forehead in a unilateral facial droop suggests a central (UMN) lesion."
  },
  {
    id: "orbicularis-oculi",
    name: "Orbicularis oculi",
    latin: "Musculus orbicularis oculi",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Sphincter muscle encircling the eye with orbital, palpebral and lacrimal parts; closes the eyelids.",
    details: {
      "Origin": "Medial orbital margin, medial palpebral ligament and lacrimal bone.",
      "Insertion": "Skin around the orbit and tarsal plates; lateral palpebral raphe.",
      "Innervation": "Facial nerve (CN VII) — temporal and zygomatic branches.",
      "Action": "Closes the eyelids; palpebral part blinks gently, orbital part closes forcefully; lacrimal part aids tear drainage.",
      "Blood supply": "Ophthalmic, facial and superficial temporal arteries."
    },
    clinical: "Weakness causes inability to close the eye, leading to corneal exposure and drying (a feature of Bell palsy)."
  },
  {
    id: "orbicularis-oris",
    name: "Orbicularis oris",
    latin: "Musculus orbicularis oris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 1,
    description: "Sphincter muscle encircling the mouth, formed largely by fibres of surrounding facial muscles; closes and protrudes the lips.",
    details: {
      "Origin": "Maxilla and mandible near the midline, and from surrounding facial muscles (notably buccinator).",
      "Insertion": "Skin and mucous membrane of the lips, encircling the oral aperture.",
      "Innervation": "Facial nerve (CN VII) — buccal and marginal mandibular branches.",
      "Action": "Closes, compresses and protrudes the lips (kissing, whistling); essential for speech articulation and eating.",
      "Blood supply": "Superior and inferior labial branches of the facial artery."
    },
    clinical: "Weakness impairs lip seal, causing drooling and difficulty with bilabial speech sounds (p, b, m)."
  },
  {
    id: "buccinator",
    name: "Buccinator",
    latin: "Musculus buccinator",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Deep muscle of the cheek forming the muscular wall of the oral vestibule; keeps food between the teeth during chewing.",
    details: {
      "Origin": "Pterygomandibular raphe and alveolar processes of maxilla and mandible opposite the molar teeth.",
      "Insertion": "Blends with orbicularis oris at the angle of the mouth.",
      "Innervation": "Facial nerve (CN VII) — buccal branches.",
      "Action": "Compresses the cheek against the teeth, holding food in position; expels air from the distended cheek (blowing).",
      "Blood supply": "Buccal branch of the maxillary artery and facial artery."
    },
    clinical: "Paralysis causes food to accumulate in the oral vestibule (cheek pouching) and impairs blowing."
  },
  {
    id: "zygomaticus-major",
    name: "Zygomaticus major",
    latin: "Musculus zygomaticus major",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle of facial expression that draws the angle of the mouth upward and laterally in smiling.",
    details: {
      "Origin": "Lateral surface of the zygomatic bone.",
      "Insertion": "Angle of the mouth, blending with orbicularis oris.",
      "Innervation": "Facial nerve (CN VII) — zygomatic and buccal branches.",
      "Action": "Draws the angle of the mouth superolaterally (smiling, laughing).",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "Weakness contributes to the asymmetric smile of facial nerve palsy."
  },
  {
    id: "zygomaticus-minor",
    name: "Zygomaticus minor",
    latin: "Musculus zygomaticus minor",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Slender facial muscle that elevates the upper lip, deepening the nasolabial furrow.",
    details: {
      "Origin": "Lateral surface of the zygomatic bone, anterior to zygomaticus major.",
      "Insertion": "Upper lip lateral to the midline.",
      "Innervation": "Facial nerve (CN VII) — zygomatic and buccal branches.",
      "Action": "Elevates the upper lip and assists in deepening the nasolabial sulcus (expression of disdain).",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "Acts with levator labii superioris; weakness flattens the nasolabial fold in facial palsy."
  },
  {
    id: "levator-labii-superioris",
    name: "Levator labii superioris",
    latin: "Musculus levator labii superioris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Facial muscle elevating the upper lip and contributing to the nasolabial fold.",
    details: {
      "Origin": "Maxilla and zygomatic bone just above the infraorbital foramen.",
      "Insertion": "Skin and muscle of the upper lip.",
      "Innervation": "Facial nerve (CN VII) — zygomatic and buccal branches.",
      "Action": "Elevates the upper lip; helps deepen the nasolabial furrow.",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "Part of the upper lip elevator group; impaired in facial nerve lesions."
  },
  {
    id: "levator-labii-superioris-alaeque-nasi",
    name: "Levator labii superioris alaeque nasi",
    latin: "Musculus levator labii superioris alaeque nasi",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Most medial of the upper lip elevators; raises the upper lip and dilates the nostril.",
    details: {
      "Origin": "Frontal process of the maxilla.",
      "Insertion": "Alar cartilage of the nose and skin of the upper lip.",
      "Innervation": "Facial nerve (CN VII) — zygomatic and buccal branches.",
      "Action": "Elevates the upper lip and flares the nostril (sneering, expression of disgust).",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "The longest named muscle in the body; involved in the 'Elvis' sneer expression."
  },
  {
    id: "depressor-anguli-oris",
    name: "Depressor anguli oris",
    latin: "Musculus depressor anguli oris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Triangular facial muscle that depresses the angle of the mouth in frowning.",
    details: {
      "Origin": "Oblique line of the mandible below the canine, premolar and first molar.",
      "Insertion": "Angle of the mouth, blending with orbicularis oris.",
      "Innervation": "Facial nerve (CN VII) — buccal and marginal mandibular branches.",
      "Action": "Depresses the angle of the mouth (frowning, expression of sadness).",
      "Blood supply": "Facial and inferior labial arteries."
    },
    clinical: "Marginal mandibular branch injury (e.g., in submandibular surgery) weakens this muscle, drooping the lower lip."
  },
  {
    id: "depressor-labii-inferioris",
    name: "Depressor labii inferioris",
    latin: "Musculus depressor labii inferioris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Facial muscle that depresses and everts the lower lip.",
    details: {
      "Origin": "Oblique line of the mandible between the symphysis and mental foramen.",
      "Insertion": "Skin and mucosa of the lower lip, blending with orbicularis oris.",
      "Innervation": "Facial nerve (CN VII) — marginal mandibular branch.",
      "Action": "Draws the lower lip downward and laterally (expression of irony).",
      "Blood supply": "Inferior labial branch of the facial artery."
    },
    clinical: "Asymmetry of lower lip depression on crying is a sign of marginal mandibular nerve injury in neonates."
  },
  {
    id: "mentalis",
    name: "Mentalis",
    latin: "Musculus mentalis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Small muscle of the chin that elevates and protrudes the lower lip.",
    details: {
      "Origin": "Incisive fossa of the mandible.",
      "Insertion": "Skin of the chin.",
      "Innervation": "Facial nerve (CN VII) — marginal mandibular branch.",
      "Action": "Elevates and protrudes the lower lip, wrinkles the skin of the chin (pouting, doubt).",
      "Blood supply": "Inferior labial and mental arteries."
    },
    clinical: "Produces the dimpled 'chin crease'; hyperactivity contributes to a peau d'orange chin appearance."
  },
  {
    id: "platysma",
    name: "Platysma",
    latin: "Musculus platysma",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Broad subcutaneous sheet of the neck and lower face; tenses the skin of the neck and depresses the mandible.",
    details: {
      "Origin": "Subcutaneous fascia over the deltoid and pectoralis major.",
      "Insertion": "Base of the mandible and skin of the lower face and angle of the mouth.",
      "Innervation": "Facial nerve (CN VII) — cervical branch.",
      "Action": "Tenses the skin of the neck; depresses the mandible and angle of the mouth (expression of fright/strain).",
      "Blood supply": "Submental and suprascapular arteries."
    },
    clinical: "Innervated by the cervical branch of CN VII; weakness is seen in lower facial palsy."
  },
  {
    id: "nasalis",
    name: "Nasalis",
    latin: "Musculus nasalis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle of the nose with transverse (compressor) and alar (dilator) parts.",
    details: {
      "Origin": "Maxilla over the lateral incisor and canine.",
      "Insertion": "Transverse part into an aponeurosis over the nasal dorsum; alar part into the alar cartilage.",
      "Innervation": "Facial nerve (CN VII) — buccal branches.",
      "Action": "Transverse part compresses the nasal aperture; alar part flares the nostrils.",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "Alar nasalis flaring of the nostrils is a clinical sign of respiratory distress."
  },
  {
    id: "procerus",
    name: "Procerus",
    latin: "Musculus procerus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Small pyramidal muscle over the bridge of the nose that wrinkles the skin between the eyebrows.",
    details: {
      "Origin": "Fascia over the lower nasal bone and upper lateral nasal cartilage.",
      "Insertion": "Skin of the lower forehead between the eyebrows.",
      "Innervation": "Facial nerve (CN VII) — temporal and lower zygomatic branches.",
      "Action": "Draws the medial eyebrows downward, producing transverse wrinkles over the nasal bridge (frowning, concentration).",
      "Blood supply": "Facial and angular arteries."
    },
    clinical: "A common target for botulinum toxin to treat glabellar frown lines."
  },
  {
    id: "risorius",
    name: "Risorius",
    latin: "Musculus risorius",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Thin facial muscle that retracts the angle of the mouth laterally in grinning.",
    details: {
      "Origin": "Fascia over the masseter / parotid fascia.",
      "Insertion": "Skin at the angle of the mouth.",
      "Innervation": "Facial nerve (CN VII) — buccal branches.",
      "Action": "Retracts the angle of the mouth laterally (grimacing, forced grinning).",
      "Blood supply": "Facial and transverse facial arteries."
    },
    clinical: "Variably present; contributes to dimple formation at the mouth angle."
  },
  {
    id: "levator-anguli-oris",
    name: "Levator anguli oris",
    latin: "Musculus levator anguli oris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Deep facial muscle (caninus) that elevates the angle of the mouth.",
    details: {
      "Origin": "Canine fossa of the maxilla, below the infraorbital foramen.",
      "Insertion": "Angle of the mouth, deep to levator labii superioris and zygomaticus.",
      "Innervation": "Facial nerve (CN VII) — buccal and zygomatic branches.",
      "Action": "Elevates the angle of the mouth and deepens the nasolabial furrow (smiling).",
      "Blood supply": "Facial and infraorbital arteries."
    },
    clinical: "Works with zygomaticus major to produce the smile; weakened in facial palsy."
  },
  {
    id: "corrugator-supercilii",
    name: "Corrugator supercilii",
    latin: "Musculus corrugator supercilii",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Small muscle deep to the eyebrow that draws the eyebrows medially and downward in frowning.",
    details: {
      "Origin": "Medial end of the superciliary arch of the frontal bone.",
      "Insertion": "Skin of the medial eyebrow.",
      "Innervation": "Facial nerve (CN VII) — temporal branches.",
      "Action": "Draws the eyebrows medially and inferiorly, producing vertical glabellar wrinkles (frowning).",
      "Blood supply": "Supraorbital and supratrochlear arteries."
    },
    clinical: "Primary target of botulinum toxin for vertical glabellar 'frown lines'."
  },
  // ===================== HEAD & NECK: MASTICATION =====================
  {
    id: "masseter",
    name: "Masseter",
    latin: "Musculus masseter",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Powerful quadrilateral muscle of mastication overlying the ramus of the mandible; elevates the mandible.",
    details: {
      "Origin": "Superficial head from the zygomatic process of the maxilla and anterior zygomatic arch; deep head from the posterior zygomatic arch.",
      "Insertion": "Lateral surface of the ramus and angle of the mandible.",
      "Innervation": "Mandibular division of the trigeminal nerve (CN V3) via the masseteric nerve.",
      "Action": "Elevates the mandible (closing the jaw); superficial fibres assist protrusion.",
      "Blood supply": "Masseteric branch of the maxillary artery and transverse facial artery."
    },
    clinical: "Readily palpated when clenching the teeth; hypertrophy or spasm (trismus) limits mouth opening."
  },
  {
    id: "temporalis",
    name: "Temporalis",
    latin: "Musculus temporalis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Fan-shaped muscle of mastication filling the temporal fossa; elevates and retracts the mandible.",
    details: {
      "Origin": "Temporal fossa and temporal fascia.",
      "Insertion": "Coronoid process and anterior border of the ramus of the mandible.",
      "Innervation": "Mandibular division of the trigeminal nerve (CN V3) via deep temporal nerves.",
      "Action": "Elevates the mandible; posterior horizontal fibres retract the protruded mandible.",
      "Blood supply": "Deep temporal branches of the maxillary artery and middle temporal artery."
    },
    clinical: "Temporal wasting (e.g., in cachexia or trigeminal motor lesions) produces a hollow above the zygomatic arch."
  },
  {
    id: "medial-pterygoid",
    name: "Medial pterygoid",
    latin: "Musculus pterygoideus medialis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Deep muscle of mastication that elevates the mandible and assists side-to-side grinding.",
    details: {
      "Origin": "Medial surface of the lateral pterygoid plate and tuberosity of the maxilla (deep head); tuberosity of the maxilla (superficial head).",
      "Insertion": "Medial surface of the ramus and angle of the mandible.",
      "Innervation": "Mandibular division of the trigeminal nerve (CN V3) via the nerve to medial pterygoid.",
      "Action": "Elevates the mandible; with the lateral pterygoid produces side-to-side grinding movements.",
      "Blood supply": "Pterygoid branches of the maxillary artery."
    },
    clinical: "Forms a muscular 'sling' with the masseter; spasm contributes to trismus."
  },
  {
    id: "lateral-pterygoid",
    name: "Lateral pterygoid",
    latin: "Musculus pterygoideus lateralis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle of mastication that protrudes and depresses the mandible and is key to opening the jaw.",
    details: {
      "Origin": "Upper head from the greater wing of the sphenoid (infratemporal surface); lower head from the lateral surface of the lateral pterygoid plate.",
      "Insertion": "Neck of the mandible (pterygoid fovea) and articular disc/capsule of the temporomandibular joint.",
      "Innervation": "Mandibular division of the trigeminal nerve (CN V3) via the nerve to lateral pterygoid.",
      "Action": "Protrudes and depresses the mandible; acting unilaterally produces contralateral deviation (grinding).",
      "Blood supply": "Pterygoid branches of the maxillary artery."
    },
    clinical: "Unilateral weakness causes the jaw to deviate toward the weak (lesioned) side on opening."
  },
  // ===================== HEAD & NECK: EXTRAOCULAR =====================
  {
    id: "superior-rectus",
    name: "Superior rectus",
    latin: "Musculus rectus superior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle that primarily elevates the eye.",
    details: {
      "Origin": "Common tendinous ring (anulus of Zinn) at the orbital apex.",
      "Insertion": "Sclera, superior aspect, anterior to the equator of the eyeball.",
      "Innervation": "Oculomotor nerve (CN III), superior division.",
      "Action": "Elevation of the eye; also adduction and intorsion (medial rotation).",
      "Blood supply": "Muscular branches of the ophthalmic artery."
    },
    clinical: "Primary elevator when the eye is abducted; tested by asking the patient to look up and out."
  },
  {
    id: "inferior-rectus",
    name: "Inferior rectus",
    latin: "Musculus rectus inferior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle that primarily depresses the eye.",
    details: {
      "Origin": "Common tendinous ring (anulus of Zinn) at the orbital apex.",
      "Insertion": "Sclera, inferior aspect, anterior to the equator of the eyeball.",
      "Innervation": "Oculomotor nerve (CN III), inferior division.",
      "Action": "Depression of the eye; also adduction and extorsion (lateral rotation).",
      "Blood supply": "Muscular branches of the ophthalmic artery."
    },
    clinical: "Commonly entrapped in orbital floor (blow-out) fractures, limiting upward gaze."
  },
  {
    id: "medial-rectus",
    name: "Medial rectus",
    latin: "Musculus rectus medialis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle that adducts the eye.",
    details: {
      "Origin": "Common tendinous ring (anulus of Zinn) at the orbital apex.",
      "Insertion": "Sclera, medial aspect, anterior to the equator of the eyeball.",
      "Innervation": "Oculomotor nerve (CN III), inferior division.",
      "Action": "Adduction (medial rotation) of the eye.",
      "Blood supply": "Muscular branches of the ophthalmic artery."
    },
    clinical: "Weakness produces an outwardly deviated (down-and-out) eye in CN III palsy; impaired adduction occurs in internuclear ophthalmoplegia (MLF lesion)."
  },
  {
    id: "lateral-rectus",
    name: "Lateral rectus",
    latin: "Musculus rectus lateralis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle that abducts the eye.",
    details: {
      "Origin": "Common tendinous ring (anulus of Zinn) at the orbital apex.",
      "Insertion": "Sclera, lateral aspect, anterior to the equator of the eyeball.",
      "Innervation": "Abducens nerve (CN VI).",
      "Action": "Abduction (lateral rotation) of the eye.",
      "Blood supply": "Lacrimal artery and muscular branches of the ophthalmic artery."
    },
    clinical: "CN VI palsy causes failure of abduction with a medially deviated eye and horizontal diplopia; CN VI has a long intracranial course vulnerable to raised ICP."
  },
  {
    id: "superior-oblique",
    name: "Superior oblique",
    latin: "Musculus obliquus superior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle whose tendon passes through the trochlea; depresses and intorts the eye.",
    details: {
      "Origin": "Body of the sphenoid above the tendinous ring; tendon loops through the trochlea.",
      "Insertion": "Sclera, posterosuperolateral quadrant behind the equator.",
      "Innervation": "Trochlear nerve (CN IV).",
      "Action": "Depression of the adducted eye; intorsion and abduction.",
      "Blood supply": "Muscular branches of the ophthalmic artery."
    },
    clinical: "CN IV palsy causes vertical diplopia worse on looking down (e.g., descending stairs) and a compensatory head tilt away from the affected side."
  },
  {
    id: "inferior-oblique",
    name: "Inferior oblique",
    latin: "Musculus obliquus inferior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extraocular muscle that elevates and extorts the eye.",
    details: {
      "Origin": "Orbital surface of the maxilla, lateral to the nasolacrimal groove (anterior orbital floor).",
      "Insertion": "Sclera, posterolateral quadrant behind the equator.",
      "Innervation": "Oculomotor nerve (CN III), inferior division.",
      "Action": "Elevation of the adducted eye; extorsion and abduction.",
      "Blood supply": "Infraorbital artery and muscular branches of the ophthalmic artery."
    },
    clinical: "Primary elevator when the eye is adducted; tested with the eye turned medially."
  },
  {
    id: "levator-palpebrae-superioris",
    name: "Levator palpebrae superioris",
    latin: "Musculus levator palpebrae superioris",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle of the upper eyelid that elevates it; includes a smooth muscle component (superior tarsal/Müller muscle).",
    details: {
      "Origin": "Lesser wing of the sphenoid, above the optic canal.",
      "Insertion": "Skin and tarsal plate of the upper eyelid (skeletal part); superior tarsal muscle into the upper tarsal plate.",
      "Innervation": "Oculomotor nerve (CN III) for the skeletal part; sympathetic fibres for the superior tarsal (Müller) muscle.",
      "Action": "Elevates the upper eyelid (opens the eye).",
      "Blood supply": "Ophthalmic artery (muscular branches)."
    },
    clinical: "Complete ptosis occurs in CN III palsy; partial ptosis with miosis and anhidrosis indicates Horner syndrome (loss of sympathetic tone to the superior tarsal muscle)."
  },
  // ===================== HEAD & NECK: TONGUE =====================
  {
    id: "genioglossus",
    name: "Genioglossus",
    latin: "Musculus genioglossus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Fan-shaped extrinsic tongue muscle that protrudes and depresses the tongue.",
    details: {
      "Origin": "Superior mental spine (genial tubercle) of the mandible.",
      "Insertion": "Dorsum of the tongue and body of the hyoid bone.",
      "Innervation": "Hypoglossal nerve (CN XII).",
      "Action": "Protrudes the tongue; bilateral action depresses the central tongue (forms a midline groove).",
      "Blood supply": "Lingual artery (branch of external carotid)."
    },
    clinical: "With unilateral CN XII (LMN) lesion the protruded tongue deviates TOWARD the weak side; supports the airway, and its tone is lost in obstructive sleep apnoea."
  },
  {
    id: "hyoglossus",
    name: "Hyoglossus",
    latin: "Musculus hyoglossus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Thin quadrilateral extrinsic tongue muscle that depresses and retracts the tongue.",
    details: {
      "Origin": "Body and greater horn of the hyoid bone.",
      "Insertion": "Lateral and inferior aspect of the tongue.",
      "Innervation": "Hypoglossal nerve (CN XII).",
      "Action": "Depresses and retracts the tongue.",
      "Blood supply": "Lingual artery."
    },
    clinical: "An important surgical landmark: the lingual artery lies deep to it while the hypoglossal nerve and lingual nerve lie superficial to it."
  },
  {
    id: "styloglossus",
    name: "Styloglossus",
    latin: "Musculus styloglossus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Extrinsic tongue muscle that retracts and elevates the tongue.",
    details: {
      "Origin": "Styloid process of the temporal bone and stylomandibular ligament.",
      "Insertion": "Side of the tongue, interdigitating with hyoglossus.",
      "Innervation": "Hypoglossal nerve (CN XII).",
      "Action": "Retracts and elevates the tongue (e.g., in initiating swallowing).",
      "Blood supply": "Lingual artery."
    },
    clinical: "Works with styloid-derived muscles; antagonist to genioglossus protrusion."
  },
  {
    id: "palatoglossus",
    name: "Palatoglossus",
    latin: "Musculus palatoglossus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle forming the palatoglossal arch; elevates the tongue and depresses the soft palate.",
    details: {
      "Origin": "Palatine aponeurosis of the soft palate.",
      "Insertion": "Side and dorsum of the tongue.",
      "Innervation": "Vagus nerve (CN X) via the pharyngeal plexus (the only tongue muscle NOT supplied by CN XII).",
      "Action": "Elevates the posterior tongue and narrows the oropharyngeal isthmus during swallowing.",
      "Blood supply": "Ascending palatine and ascending pharyngeal arteries."
    },
    clinical: "Despite being a tongue muscle it is innervated by CN X; its function aids the gag reflex and bolus containment."
  },
  // ===================== HEAD & NECK: SUPRAHYOID =====================
  {
    id: "digastric",
    name: "Digastric",
    latin: "Musculus digastricus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Suprahyoid muscle with two bellies joined by an intermediate tendon; elevates the hyoid and depresses the mandible.",
    details: {
      "Origin": "Anterior belly from the digastric fossa of the mandible; posterior belly from the mastoid notch of the temporal bone.",
      "Insertion": "Intermediate tendon attached to the hyoid bone by a fibrous sling.",
      "Innervation": "Anterior belly by the mylohyoid nerve (CN V3); posterior belly by the facial nerve (CN VII).",
      "Action": "Elevates the hyoid bone; depresses the mandible (opens the jaw) when the hyoid is fixed.",
      "Blood supply": "Facial and lingual arteries (anterior belly); occipital and posterior auricular arteries (posterior belly)."
    },
    clinical: "Dual embryologic origin gives it two nerve supplies; it is a key landmark dividing the anterior triangle of the neck."
  },
  {
    id: "mylohyoid",
    name: "Mylohyoid",
    latin: "Musculus mylohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Flat suprahyoid muscle forming the muscular floor of the mouth.",
    details: {
      "Origin": "Mylohyoid line of the mandible.",
      "Insertion": "Median raphe and body of the hyoid bone.",
      "Innervation": "Mylohyoid nerve, a branch of the inferior alveolar nerve (CN V3).",
      "Action": "Elevates the hyoid bone, floor of mouth and tongue during swallowing and speech.",
      "Blood supply": "Submental branch of the facial artery and mylohyoid branch of the inferior alveolar artery."
    },
    clinical: "Forms the oral diaphragm; infections below it (Ludwig angina) can spread and threaten the airway."
  },
  {
    id: "geniohyoid",
    name: "Geniohyoid",
    latin: "Musculus geniohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Narrow suprahyoid muscle lying superior to the mylohyoid; elevates and protrudes the hyoid.",
    details: {
      "Origin": "Inferior mental spine (genial tubercle) of the mandible.",
      "Insertion": "Body of the hyoid bone.",
      "Innervation": "C1 fibres carried by the hypoglossal nerve (CN XII).",
      "Action": "Elevates and draws the hyoid bone anteriorly; widens the pharynx; depresses the mandible when the hyoid is fixed.",
      "Blood supply": "Lingual artery (sublingual branch)."
    },
    clinical: "Carries C1 fibres along CN XII, as do thyrohyoid; helps maintain the airway during swallowing."
  },
  {
    id: "stylohyoid",
    name: "Stylohyoid",
    latin: "Musculus stylohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Slender suprahyoid muscle that elevates and retracts the hyoid bone.",
    details: {
      "Origin": "Styloid process of the temporal bone.",
      "Insertion": "Body of the hyoid bone at its junction with the greater horn; splits to enclose the digastric tendon.",
      "Innervation": "Facial nerve (CN VII).",
      "Action": "Elevates and retracts the hyoid bone, elongating the floor of the mouth during swallowing.",
      "Blood supply": "Facial, occipital and posterior auricular arteries."
    },
    clinical: "Develops from the second pharyngeal arch, hence its facial nerve supply."
  },
  // ===================== HEAD & NECK: INFRAHYOID =====================
  {
    id: "sternohyoid",
    name: "Sternohyoid",
    latin: "Musculus sternohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Strap-like infrahyoid muscle that depresses the hyoid bone.",
    details: {
      "Origin": "Posterior surface of the manubrium sterni and medial end of the clavicle.",
      "Insertion": "Body of the hyoid bone.",
      "Innervation": "Ansa cervicalis (C1–C3).",
      "Action": "Depresses the hyoid bone after swallowing or speech.",
      "Blood supply": "Superior thyroid and lingual arteries."
    },
    clinical: "One of the strap muscles divided or retracted to access the thyroid gland and trachea."
  },
  {
    id: "sternothyroid",
    name: "Sternothyroid",
    latin: "Musculus sternothyroideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Infrahyoid strap muscle deep to sternohyoid; depresses the larynx.",
    details: {
      "Origin": "Posterior surface of the manubrium sterni.",
      "Insertion": "Oblique line of the thyroid cartilage.",
      "Innervation": "Ansa cervicalis (C1–C3).",
      "Action": "Depresses the larynx (thyroid cartilage) after it has been elevated in swallowing and vocalisation.",
      "Blood supply": "Superior thyroid artery."
    },
    clinical: "Covers the thyroid gland; retracted during thyroid surgery."
  },
  {
    id: "thyrohyoid",
    name: "Thyrohyoid",
    latin: "Musculus thyrohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Short infrahyoid muscle continuing the line of the sternothyroid; depresses the hyoid and elevates the larynx.",
    details: {
      "Origin": "Oblique line of the thyroid cartilage.",
      "Insertion": "Body and greater horn of the hyoid bone.",
      "Innervation": "C1 fibres carried by the hypoglossal nerve (CN XII).",
      "Action": "Depresses the hyoid bone; elevates the larynx when the hyoid is fixed.",
      "Blood supply": "Superior thyroid artery."
    },
    clinical: "Like geniohyoid, it receives C1 fibres travelling with CN XII rather than via the ansa cervicalis."
  },
  {
    id: "omohyoid",
    name: "Omohyoid",
    latin: "Musculus omohyoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Infrahyoid muscle with superior and inferior bellies joined by an intermediate tendon; depresses the hyoid.",
    details: {
      "Origin": "Inferior belly from the superior border of the scapula near the suprascapular notch.",
      "Insertion": "Superior belly into the body of the hyoid bone.",
      "Innervation": "Ansa cervicalis (C1–C3).",
      "Action": "Depresses and steadies the hyoid bone.",
      "Blood supply": "Superior thyroid and transverse cervical arteries."
    },
    clinical: "Its intermediate tendon subdivides the posterior triangle of the neck and is a useful surgical landmark."
  },
  // ===================== HEAD & NECK: OTHER NECK =====================
  {
    id: "sternocleidomastoid",
    name: "Sternocleidomastoid",
    latin: "Musculus sternocleidomastoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Prominent strap-like muscle obliquely crossing the neck; flexes and rotates the head; an accessory muscle of respiration.",
    details: {
      "Origin": "Sternal head from the manubrium; clavicular head from the medial third of the clavicle.",
      "Insertion": "Mastoid process of the temporal bone and lateral half of the superior nuchal line.",
      "Innervation": "Accessory nerve (CN XI) for motor; C2–C3 for proprioception.",
      "Action": "Unilateral: tilts head to the same side and rotates the face to the opposite side; bilateral: flexes the neck and extends the head at the atlanto-occipital joints.",
      "Blood supply": "Occipital and superior thyroid arteries."
    },
    clinical: "CN XI lesion weakens turning the head to the opposite side; congenital shortening causes torticollis; divides the neck into anterior and posterior triangles."
  },
  {
    id: "scalenus-anterior",
    name: "Scalenus anterior (anterior scalene)",
    latin: "Musculus scalenus anterior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Deep lateral neck muscle; key landmark separating the subclavian vein from the subclavian artery and brachial plexus.",
    details: {
      "Origin": "Anterior tubercles of the transverse processes of C3–C6.",
      "Insertion": "Scalene tubercle of the first rib.",
      "Innervation": "Anterior rami of C4–C6.",
      "Action": "Elevates the first rib (accessory inspiration); bends and rotates the neck.",
      "Blood supply": "Ascending cervical and inferior thyroid arteries."
    },
    clinical: "The subclavian vein passes anterior and the subclavian artery and brachial plexus posterior to it; hypertrophy contributes to thoracic outlet syndrome."
  },
  {
    id: "scalenus-medius",
    name: "Scalenus medius (middle scalene)",
    latin: "Musculus scalenus medius",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Largest of the scalene muscles; elevates the first rib and laterally flexes the neck.",
    details: {
      "Origin": "Posterior tubercles of the transverse processes of C2–C7.",
      "Insertion": "Superior surface of the first rib, posterior to the groove for the subclavian artery.",
      "Innervation": "Anterior rami of C3–C8.",
      "Action": "Elevates the first rib in forced inspiration; laterally flexes the neck.",
      "Blood supply": "Ascending cervical artery."
    },
    clinical: "The brachial plexus and subclavian artery emerge between the anterior and middle scalenes (interscalene triangle), the site of interscalene nerve block."
  },
  {
    id: "scalenus-posterior",
    name: "Scalenus posterior (posterior scalene)",
    latin: "Musculus scalenus posterior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Smallest and deepest scalene muscle; elevates the second rib.",
    details: {
      "Origin": "Posterior tubercles of the transverse processes of C4–C6.",
      "Insertion": "Outer surface of the second rib.",
      "Innervation": "Anterior rami of C6–C8.",
      "Action": "Elevates the second rib in forced inspiration; laterally flexes the neck.",
      "Blood supply": "Ascending cervical and superficial cervical arteries."
    },
    clinical: "Often blends with scalenus medius; contributes to accessory respiratory effort in respiratory distress."
  },
  {
    id: "longus-colli",
    name: "Longus colli",
    latin: "Musculus longus colli",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Prevertebral muscle along the anterior cervical spine; flexes the neck.",
    details: {
      "Origin": "Anterior tubercles of transverse processes and bodies of C3–T3 (three parts).",
      "Insertion": "Anterior tubercle of the atlas and bodies/transverse processes of upper cervical vertebrae.",
      "Innervation": "Anterior rami of C2–C6.",
      "Action": "Flexes the neck and slightly rotates and laterally flexes the cervical spine.",
      "Blood supply": "Ascending cervical, inferior thyroid and vertebral arteries."
    },
    clinical: "Calcific tendinitis of longus colli is a cause of acute neck pain with retropharyngeal effusion."
  },
  {
    id: "longus-capitis",
    name: "Longus capitis",
    latin: "Musculus longus capitis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Prevertebral muscle that flexes the head.",
    details: {
      "Origin": "Anterior tubercles of the transverse processes of C3–C6.",
      "Insertion": "Basilar part of the occipital bone.",
      "Innervation": "Anterior rami of C1–C3.",
      "Action": "Flexes the head at the atlanto-occipital joint.",
      "Blood supply": "Ascending cervical, inferior thyroid and vertebral arteries."
    },
    clinical: "Part of the prevertebral group seen anterior to the cervical bodies on cross-sectional imaging."
  },
  {
    id: "pharyngeal-constrictors",
    name: "Pharyngeal constrictors (superior, middle, inferior)",
    latin: "Musculi constrictores pharyngis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Three overlapping circular muscles of the pharyngeal wall that propel a bolus into the oesophagus.",
    details: {
      "Origin": "Superior from the pterygomandibular raphe; middle from the hyoid horns and stylohyoid ligament; inferior from the thyroid and cricoid cartilages.",
      "Insertion": "Median pharyngeal raphe; inferior constrictor's cricopharyngeus encircles the pharyngo-oesophageal junction.",
      "Innervation": "Vagus nerve (CN X) via the pharyngeal plexus; cricopharyngeus also by the recurrent laryngeal nerve.",
      "Action": "Sequential constriction propels the food bolus through the pharynx during swallowing.",
      "Blood supply": "Ascending pharyngeal, facial and superior thyroid arteries."
    },
    clinical: "Killian dehiscence between the thyropharyngeus and cricopharyngeus parts is the site of a pharyngeal (Zenker) diverticulum."
  },
  {
    id: "cricothyroid",
    name: "Cricothyroid",
    latin: "Musculus cricothyroideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Intrinsic laryngeal muscle that tenses (lengthens) the vocal folds.",
    details: {
      "Origin": "Anterolateral arch of the cricoid cartilage.",
      "Insertion": "Inferior horn and lower border of the thyroid cartilage.",
      "Innervation": "External laryngeal branch of the superior laryngeal nerve (from CN X).",
      "Action": "Tilts the thyroid cartilage forward, lengthening and tensing the vocal folds (raises pitch).",
      "Blood supply": "Cricothyroid branch of the superior thyroid artery."
    },
    clinical: "The only intrinsic laryngeal muscle NOT supplied by the recurrent laryngeal nerve; external laryngeal nerve injury (e.g., in thyroidectomy) weakens the voice and impairs high-pitched phonation."
  },
  {
    id: "posterior-cricoarytenoid",
    name: "Posterior cricoarytenoid",
    latin: "Musculus cricoarytenoideus posterior",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Intrinsic laryngeal muscle and the sole abductor of the vocal folds.",
    details: {
      "Origin": "Posterior surface of the cricoid lamina.",
      "Insertion": "Muscular process of the arytenoid cartilage.",
      "Innervation": "Recurrent laryngeal nerve (from CN X).",
      "Action": "Abducts the vocal folds, opening the rima glottidis for breathing.",
      "Blood supply": "Inferior laryngeal artery."
    },
    clinical: "The only vocal fold abductor; bilateral recurrent laryngeal nerve injury can cause airway obstruction by leaving the cords adducted."
  },
  {
    id: "lateral-cricoarytenoid",
    name: "Lateral cricoarytenoid",
    latin: "Musculus cricoarytenoideus lateralis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Intrinsic laryngeal muscle that adducts the vocal folds.",
    details: {
      "Origin": "Arch of the cricoid cartilage (superior border).",
      "Insertion": "Muscular process of the arytenoid cartilage.",
      "Innervation": "Recurrent laryngeal nerve (from CN X).",
      "Action": "Adducts the vocal folds, closing the rima glottidis for phonation.",
      "Blood supply": "Inferior laryngeal artery."
    },
    clinical: "Antagonist to the posterior cricoarytenoid; adductor function is essential for an effective cough and voice."
  },
  {
    id: "thyroarytenoid",
    name: "Thyroarytenoid",
    latin: "Musculus thyroarytenoideus",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Intrinsic laryngeal muscle that relaxes and shortens the vocal folds; its medial fibres form the vocalis.",
    details: {
      "Origin": "Inner surface of the thyroid cartilage (lamina).",
      "Insertion": "Arytenoid cartilage.",
      "Innervation": "Recurrent laryngeal nerve (from CN X).",
      "Action": "Shortens and relaxes the vocal folds; adducts and modulates fold tension for phonation.",
      "Blood supply": "Inferior laryngeal artery."
    },
    clinical: "Forms the body of the vocal fold; modulates voice quality."
  },
  {
    id: "vocalis",
    name: "Vocalis",
    latin: "Musculus vocalis",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Fine medial fibres of the thyroarytenoid that make precise adjustments to vocal fold tension.",
    details: {
      "Origin": "Angle of the thyroid cartilage.",
      "Insertion": "Vocal process of the arytenoid cartilage and vocal ligament.",
      "Innervation": "Recurrent laryngeal nerve (from CN X).",
      "Action": "Produces fine adjustments of vocal fold tension for pitch control during phonation.",
      "Blood supply": "Inferior laryngeal artery."
    },
    clinical: "Allows fine modulation of pitch; affected with the other intrinsic muscles in recurrent laryngeal nerve palsy."
  },
  {
    id: "levator-veli-palatini",
    name: "Levator veli palatini",
    latin: "Musculus levator veli palatini",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Muscle of the soft palate that elevates it to seal the nasopharynx during swallowing.",
    details: {
      "Origin": "Petrous part of the temporal bone and cartilage of the pharyngotympanic (Eustachian) tube.",
      "Insertion": "Palatine aponeurosis of the soft palate.",
      "Innervation": "Vagus nerve (CN X) via the pharyngeal plexus.",
      "Action": "Elevates the soft palate, closing the nasopharynx during swallowing.",
      "Blood supply": "Ascending palatine and ascending pharyngeal arteries."
    },
    clinical: "Vagal/pharyngeal plexus lesions cause the uvula to deviate AWAY from the affected side and nasal regurgitation."
  },
  {
    id: "tensor-veli-palatini",
    name: "Tensor veli palatini",
    latin: "Musculus tensor veli palatini",
    system: "muscular",
    category: "Muscle",
    region: "head-neck",
    count: 2,
    description: "Soft palate muscle that tenses the palate and opens the pharyngotympanic tube.",
    details: {
      "Origin": "Scaphoid fossa of the sphenoid, spine of the sphenoid and cartilage of the pharyngotympanic tube.",
      "Insertion": "Palatine aponeurosis, after hooking around the pterygoid hamulus.",
      "Innervation": "Medial pterygoid nerve, a branch of the mandibular division of the trigeminal nerve (CN V3).",
      "Action": "Tenses the soft palate and opens the pharyngotympanic tube during swallowing and yawning (equalising middle-ear pressure).",
      "Blood supply": "Ascending palatine and ascending pharyngeal arteries."
    },
    clinical: "The only palatal muscle supplied by CN V3; its dysfunction contributes to Eustachian tube obstruction and middle-ear effusions."
  },
  // ===================== BACK =====================
  {
    id: "trapezius",
    name: "Trapezius",
    latin: "Musculus trapezius",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Large superficial triangular muscle of the back that moves, rotates and stabilises the scapula.",
    details: {
      "Origin": "Medial third of the superior nuchal line, external occipital protuberance, nuchal ligament and spinous processes of C7–T12.",
      "Insertion": "Lateral third of the clavicle, acromion and spine of the scapula.",
      "Innervation": "Accessory nerve (CN XI) for motor; C3–C4 for proprioception.",
      "Action": "Upper fibres elevate, middle fibres retract and lower fibres depress the scapula; together they rotate the glenoid upward for arm abduction above the horizontal.",
      "Blood supply": "Transverse cervical (superficial cervical) artery and dorsal scapular artery."
    },
    clinical: "CN XI injury (e.g., posterior triangle lymph node biopsy) causes shoulder droop, scapular winging and weak abduction above 90 degrees."
  },
  {
    id: "latissimus-dorsi",
    name: "Latissimus dorsi",
    latin: "Musculus latissimus dorsi",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Broad superficial muscle of the lower back that extends, adducts and medially rotates the arm.",
    details: {
      "Origin": "Spinous processes of T7–T12, thoracolumbar fascia, iliac crest and inferior 3–4 ribs.",
      "Insertion": "Floor of the intertubercular (bicipital) groove of the humerus.",
      "Innervation": "Thoracodorsal nerve (C6–C8).",
      "Action": "Extends, adducts and medially rotates the humerus; raises the body toward the arms in climbing.",
      "Blood supply": "Thoracodorsal artery."
    },
    clinical: "Mnemonic 'Lady between two Majors' (between teres major and pectoralis major at the bicipital groove); widely used as a myocutaneous flap in reconstruction."
  },
  {
    id: "levator-scapulae",
    name: "Levator scapulae",
    latin: "Musculus levator scapulae",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Strap-like muscle of the posterior neck that elevates the scapula.",
    details: {
      "Origin": "Transverse processes of C1–C4.",
      "Insertion": "Medial (vertebral) border of the scapula above the spine (superior angle).",
      "Innervation": "Dorsal scapular nerve (C5) and anterior rami of C3–C4.",
      "Action": "Elevates the scapula and rotates the glenoid cavity inferiorly (downward rotation).",
      "Blood supply": "Dorsal scapular and transverse cervical arteries."
    },
    clinical: "A common site of myofascial neck and shoulder pain ('knots')."
  },
  {
    id: "rhomboid-major",
    name: "Rhomboid major",
    latin: "Musculus rhomboideus major",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Deep muscle connecting the vertebral column to the scapula; retracts the scapula.",
    details: {
      "Origin": "Spinous processes of T2–T5.",
      "Insertion": "Medial border of the scapula below the spine.",
      "Innervation": "Dorsal scapular nerve (C5).",
      "Action": "Retracts and rotates the scapula to depress the glenoid cavity; fixes the scapula to the thoracic wall.",
      "Blood supply": "Dorsal scapular artery."
    },
    clinical: "Dorsal scapular nerve injury causes lateral (mild) winging with the scapula displaced away from the midline."
  },
  {
    id: "rhomboid-minor",
    name: "Rhomboid minor",
    latin: "Musculus rhomboideus minor",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Small deep muscle superior to rhomboid major; retracts the scapula.",
    details: {
      "Origin": "Nuchal ligament and spinous processes of C7–T1.",
      "Insertion": "Medial border of the scapula at the root of the spine.",
      "Innervation": "Dorsal scapular nerve (C5).",
      "Action": "Retracts and rotates the scapula, fixing it to the thoracic wall.",
      "Blood supply": "Dorsal scapular artery."
    },
    clinical: "Acts with rhomboid major; both are tested by pushing the elbows backward against resistance."
  },
  {
    id: "serratus-posterior-superior",
    name: "Serratus posterior superior",
    latin: "Musculus serratus posterior superior",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Thin intermediate muscle of the back that elevates the upper ribs in inspiration.",
    details: {
      "Origin": "Nuchal ligament and spinous processes of C7–T3.",
      "Insertion": "Superior borders of ribs 2–5.",
      "Innervation": "Anterior rami of the upper thoracic spinal nerves (intercostal nerves T2–T5).",
      "Action": "Elevates ribs 2–5, assisting inspiration (a proprioceptive role is also proposed).",
      "Blood supply": "Posterior intercostal arteries."
    },
    clinical: "One of the few back muscles supplied by anterior (ventral) rami, reflecting its respiratory function."
  },
  {
    id: "serratus-posterior-inferior",
    name: "Serratus posterior inferior",
    latin: "Musculus serratus posterior inferior",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Thin intermediate muscle of the back that depresses the lower ribs.",
    details: {
      "Origin": "Spinous processes of T11–L2 via the thoracolumbar fascia.",
      "Insertion": "Inferior borders of ribs 9–12.",
      "Innervation": "Anterior rami of the lower thoracic spinal nerves (intercostal nerves T9–T12).",
      "Action": "Depresses the lower ribs and may resist their elevation by the diaphragm.",
      "Blood supply": "Posterior intercostal arteries."
    },
    clinical: "Like its superior counterpart, supplied by anterior rami rather than dorsal rami."
  },
  {
    id: "splenius-capitis",
    name: "Splenius capitis",
    latin: "Musculus splenius capitis",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Superficial muscle of the spinotransverse group that extends and rotates the head.",
    details: {
      "Origin": "Lower half of the nuchal ligament and spinous processes of C7–T4.",
      "Insertion": "Mastoid process and lateral superior nuchal line of the occipital bone.",
      "Innervation": "Posterior (dorsal) rami of middle cervical spinal nerves.",
      "Action": "Bilateral: extends the head and neck; unilateral: laterally flexes and rotates the head to the same side.",
      "Blood supply": "Occipital and deep cervical arteries."
    },
    clinical: "Same-side rotation distinguishes splenius action from the contralateral rotation of sternocleidomastoid."
  },
  {
    id: "splenius-cervicis",
    name: "Splenius cervicis",
    latin: "Musculus splenius cervicis",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Spinotransverse muscle that extends and rotates the neck.",
    details: {
      "Origin": "Spinous processes of T3–T6.",
      "Insertion": "Transverse processes of C1–C3.",
      "Innervation": "Posterior (dorsal) rami of lower cervical spinal nerves.",
      "Action": "Bilateral: extends the neck; unilateral: laterally flexes and rotates the neck to the same side.",
      "Blood supply": "Deep cervical artery."
    },
    clinical: "Works with splenius capitis to support and turn the head."
  },
  {
    id: "iliocostalis",
    name: "Iliocostalis (erector spinae)",
    latin: "Musculus iliocostalis",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Most lateral column of the erector spinae; extends and laterally flexes the vertebral column.",
    details: {
      "Origin": "Common tendon from the sacrum, iliac crest, and spinous processes of the lower lumbar and sacral vertebrae.",
      "Insertion": "Angles of the ribs and cervical transverse processes (lumborum, thoracis and cervicis parts).",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Bilateral: extends the vertebral column; unilateral: laterally flexes the trunk to the same side.",
      "Blood supply": "Posterior intercostal, lumbar and lateral sacral arteries."
    },
    clinical: "Erector spinae maintains upright posture; strain is a common cause of mechanical low back pain."
  },
  {
    id: "longissimus",
    name: "Longissimus (erector spinae)",
    latin: "Musculus longissimus",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Intermediate and largest column of the erector spinae; extends the vertebral column and head.",
    details: {
      "Origin": "Common erector spinae tendon and transverse processes of lower vertebrae.",
      "Insertion": "Transverse processes throughout, ribs, and the mastoid process (capitis part).",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Bilateral: extends the vertebral column and head; unilateral: laterally flexes the trunk to the same side.",
      "Blood supply": "Posterior intercostal and lumbar arteries."
    },
    clinical: "Its capitis part contributes to head extension and is involved in cervical postural strain."
  },
  {
    id: "spinalis",
    name: "Spinalis (erector spinae)",
    latin: "Musculus spinalis",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Most medial column of the erector spinae running close to the spinous processes.",
    details: {
      "Origin": "Spinous processes of upper lumbar and lower thoracic vertebrae (and nuchal ligament for capitis).",
      "Insertion": "Spinous processes of upper thoracic vertebrae and occipital bone (capitis part).",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Extends the vertebral column; assists lateral flexion.",
      "Blood supply": "Posterior intercostal and lumbar arteries."
    },
    clinical: "The smallest and most medial erector spinae column, often blending with longissimus."
  },
  {
    id: "semispinalis",
    name: "Semispinalis",
    latin: "Musculus semispinalis",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Transversospinalis muscle (capitis, cervicis, thoracis parts) that extends and rotates the spine and head.",
    details: {
      "Origin": "Transverse processes of C4–T12.",
      "Insertion": "Spinous processes of cervical and thoracic vertebrae and the occipital bone (between the nuchal lines) for the capitis part.",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Bilateral: extends the head and thoracic/cervical spine; unilateral: rotates them to the opposite side.",
      "Blood supply": "Deep cervical and posterior intercostal arteries."
    },
    clinical: "Semispinalis capitis is a major extensor of the head; the greater occipital nerve pierces it, a site implicated in occipital neuralgia."
  },
  {
    id: "multifidus",
    name: "Multifidus",
    latin: "Musculus multifidus",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Deep transversospinalis muscle spanning 2–4 vertebrae; stabilises the spine and is well developed in the lumbar region.",
    details: {
      "Origin": "Sacrum, posterior superior iliac spine, mammillary processes (lumbar), transverse processes (thoracic) and articular processes (cervical).",
      "Insertion": "Spinous processes 2–4 segments above the origin.",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Stabilises the vertebrae during local movements; bilateral extension and unilateral contralateral rotation of the spine.",
      "Blood supply": "Posterior intercostal, lumbar and lateral sacral arteries."
    },
    clinical: "Atrophy of the lumbar multifidus is strongly associated with chronic low back pain; a target of core stabilisation rehabilitation."
  },
  {
    id: "rotatores",
    name: "Rotatores",
    latin: "Musculi rotatores",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Deepest transversospinalis muscles, best developed in the thoracic region; rotate and proprioceptively monitor the spine.",
    details: {
      "Origin": "Transverse process of each vertebra.",
      "Insertion": "Lamina/base of the spinous process of the vertebra 1–2 segments above.",
      "Innervation": "Posterior (dorsal) rami of spinal nerves.",
      "Action": "Rotate the vertebrae toward the opposite side and stabilise them; rich in proprioceptors.",
      "Blood supply": "Posterior intercostal and lumbar arteries."
    },
    clinical: "Their high muscle-spindle density suggests a predominantly proprioceptive/postural role."
  },
  {
    id: "quadratus-lumborum",
    name: "Quadratus lumborum",
    latin: "Musculus quadratus lumborum",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Quadrilateral muscle of the posterior abdominal wall that laterally flexes the trunk and stabilises the 12th rib.",
    details: {
      "Origin": "Iliac crest and iliolumbar ligament.",
      "Insertion": "12th rib and transverse processes of L1–L4.",
      "Innervation": "Anterior rami of T12 (subcostal) and L1–L4.",
      "Action": "Laterally flexes the vertebral column; fixes/depresses the 12th rib (aiding forced expiration); bilaterally extends the lumbar spine.",
      "Blood supply": "Lumbar and subcostal arteries."
    },
    clinical: "A frequent source of low back pain; it 'fixes' the last rib so the diaphragm can act efficiently."
  },
  {
    id: "rectus-capitis-posterior-major",
    name: "Rectus capitis posterior major",
    latin: "Musculus rectus capitis posterior major",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Suboccipital muscle that extends and rotates the head; bounds the suboccipital triangle.",
    details: {
      "Origin": "Spinous process of the axis (C2).",
      "Insertion": "Lateral part of the inferior nuchal line of the occipital bone.",
      "Innervation": "Suboccipital nerve (posterior ramus of C1).",
      "Action": "Extends the head and rotates it to the same side.",
      "Blood supply": "Deep cervical, occipital and vertebral arteries."
    },
    clinical: "Forms the medial border of the suboccipital triangle, which contains the vertebral artery and suboccipital nerve."
  },
  {
    id: "rectus-capitis-posterior-minor",
    name: "Rectus capitis posterior minor",
    latin: "Musculus rectus capitis posterior minor",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Small suboccipital muscle that extends the head.",
    details: {
      "Origin": "Posterior tubercle of the atlas (C1).",
      "Insertion": "Medial part of the inferior nuchal line of the occipital bone.",
      "Innervation": "Suboccipital nerve (posterior ramus of C1).",
      "Action": "Extends the head at the atlanto-occipital joint.",
      "Blood supply": "Deep cervical and occipital arteries."
    },
    clinical: "Connected to the dura by the myodural bridge, implicated in cervicogenic headache."
  },
  {
    id: "obliquus-capitis-superior",
    name: "Obliquus capitis superior",
    latin: "Musculus obliquus capitis superior",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Suboccipital muscle forming the superolateral border of the suboccipital triangle; extends and laterally flexes the head.",
    details: {
      "Origin": "Transverse process of the atlas (C1).",
      "Insertion": "Occipital bone between the superior and inferior nuchal lines.",
      "Innervation": "Suboccipital nerve (posterior ramus of C1).",
      "Action": "Extends the head and bends it to the same side.",
      "Blood supply": "Deep cervical, occipital and vertebral arteries."
    },
    clinical: "Helps define the suboccipital triangle overlying the vertebral artery and posterior atlanto-occipital membrane."
  },
  {
    id: "obliquus-capitis-inferior",
    name: "Obliquus capitis inferior",
    latin: "Musculus obliquus capitis inferior",
    system: "muscular",
    category: "Muscle",
    region: "spine-back",
    count: 2,
    description: "Suboccipital muscle that rotates the atlas and head; forms the inferolateral border of the suboccipital triangle.",
    details: {
      "Origin": "Spinous process of the axis (C2).",
      "Insertion": "Transverse process of the atlas (C1).",
      "Innervation": "Suboccipital nerve (posterior ramus of C1).",
      "Action": "Rotates the atlas (and head) to the same side at the atlanto-axial joint.",
      "Blood supply": "Deep cervical, occipital and vertebral arteries."
    },
    clinical: "The only suboccipital muscle with no attachment to the skull; key for head rotation about the dens."
  },
  // ===================== THORAX =====================
  {
    id: "pectoralis-major",
    name: "Pectoralis major",
    latin: "Musculus pectoralis major",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Large fan-shaped muscle of the anterior chest wall; adducts and medially rotates the arm.",
    details: {
      "Origin": "Clavicular head from the medial half of the clavicle; sternocostal head from the sternum and costal cartilages 1–6 and the aponeurosis of external oblique.",
      "Insertion": "Lateral lip of the intertubercular (bicipital) groove of the humerus.",
      "Innervation": "Medial and lateral pectoral nerves (C5–T1).",
      "Action": "Adducts and medially rotates the arm; clavicular head flexes the arm, sternocostal head extends it from a flexed position.",
      "Blood supply": "Pectoral branch of the thoracoacromial artery."
    },
    clinical: "Its inferior border forms the anterior axillary fold; rupture occurs in weightlifting (e.g., bench press)."
  },
  {
    id: "pectoralis-minor",
    name: "Pectoralis minor",
    latin: "Musculus pectoralis minor",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Thin triangular muscle deep to pectoralis major; stabilises and depresses the scapula.",
    details: {
      "Origin": "Anterior surfaces of ribs 3–5.",
      "Insertion": "Coracoid process of the scapula.",
      "Innervation": "Medial pectoral nerve (C8–T1).",
      "Action": "Depresses and protracts the scapula; rotates it to depress the glenoid; elevates ribs in forced inspiration when the scapula is fixed.",
      "Blood supply": "Pectoral branch of the thoracoacromial artery."
    },
    clinical: "An important surgical landmark dividing the axillary artery into three parts; can compress neurovascular structures (pectoralis minor / hyperabduction syndrome)."
  },
  {
    id: "subclavius",
    name: "Subclavius",
    latin: "Musculus subclavius",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Small muscle beneath the clavicle that stabilises and depresses it.",
    details: {
      "Origin": "First rib at its costochondral junction.",
      "Insertion": "Inferior surface of the middle third of the clavicle.",
      "Innervation": "Nerve to subclavius (C5–C6).",
      "Action": "Depresses and stabilises the clavicle; protects the underlying subclavian vessels during clavicular fracture.",
      "Blood supply": "Clavicular branch of the thoracoacromial artery."
    },
    clinical: "Acts as a cushion to protect the subclavian vessels from a fractured clavicle."
  },
  {
    id: "serratus-anterior",
    name: "Serratus anterior",
    latin: "Musculus serratus anterior",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Fan-shaped muscle of the lateral thoracic wall that protracts the scapula and holds it against the chest wall.",
    details: {
      "Origin": "External surfaces of ribs 1–8 (or 1–9).",
      "Insertion": "Costal (anterior) surface of the medial border of the scapula.",
      "Innervation": "Long thoracic nerve (C5–C7).",
      "Action": "Protracts and rotates the scapula upward (boxing/punching); holds the scapula against the thoracic wall; aids abduction above the horizontal.",
      "Blood supply": "Lateral thoracic and superior thoracic arteries."
    },
    clinical: "Long thoracic nerve injury causes medial (classic) winging of the scapula and difficulty raising the arm above the head."
  },
  {
    id: "external-intercostals",
    name: "External intercostals",
    latin: "Musculi intercostales externi",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Outermost layer of intercostal muscles; elevate the ribs in inspiration.",
    details: {
      "Origin": "Inferior border of the rib above.",
      "Insertion": "Superior border of the rib below; fibres run obliquely downward and forward; replaced anteriorly by the external intercostal membrane.",
      "Innervation": "Intercostal nerves (anterior rami of T1–T11).",
      "Action": "Elevate the ribs, increasing the thoracic anteroposterior and transverse diameters during inspiration.",
      "Blood supply": "Posterior and anterior intercostal arteries."
    },
    clinical: "Most active in quiet inspiration; the neurovascular bundle lies in the costal groove between the internal and innermost layers."
  },
  {
    id: "internal-intercostals",
    name: "Internal intercostals",
    latin: "Musculi intercostales interni",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Middle layer of intercostal muscles; aid forced expiration.",
    details: {
      "Origin": "Lateral edge of the costal groove of the rib above.",
      "Insertion": "Superior border of the rib below; fibres run perpendicular to the external intercostals; replaced posteriorly by the internal intercostal membrane.",
      "Innervation": "Intercostal nerves (anterior rami of T1–T11).",
      "Action": "Interosseous part depresses the ribs (forced expiration); interchondral part elevates the ribs (inspiration).",
      "Blood supply": "Posterior and anterior intercostal arteries."
    },
    clinical: "Active in forced expiration (e.g., coughing); injuries cause pain on respiration."
  },
  {
    id: "innermost-intercostals",
    name: "Innermost intercostals",
    latin: "Musculi intercostales intimi",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Deepest, incomplete layer of intercostal muscle separated from the internal intercostals by the neurovascular bundle.",
    details: {
      "Origin": "Internal aspect of the rib above.",
      "Insertion": "Superior border of the rib below.",
      "Innervation": "Intercostal nerves (anterior rami of T1–T11).",
      "Action": "Acts with the internal intercostals to depress the ribs during expiration.",
      "Blood supply": "Posterior and anterior intercostal arteries."
    },
    clinical: "The intercostal neurovascular bundle runs between the internal and innermost layers, the plane targeted in intercostal nerve blocks (above the rib to avoid the bundle)."
  },
  {
    id: "transversus-thoracis",
    name: "Transversus thoracis",
    latin: "Musculus transversus thoracis",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 2,
    description: "Thin muscle on the internal surface of the anterior thoracic wall; depresses the costal cartilages.",
    details: {
      "Origin": "Posterior surface of the lower sternum and xiphoid process.",
      "Insertion": "Internal surfaces of costal cartilages 2–6.",
      "Innervation": "Intercostal nerves (anterior rami of the adjacent thoracic spinal nerves).",
      "Action": "Depresses the costal cartilages, weakly assisting expiration; provides proprioception.",
      "Blood supply": "Internal thoracic (internal mammary) artery."
    },
    clinical: "The internal thoracic vessels run anterior to it; a relevant plane in transversus thoracis muscle plane blocks."
  },
  {
    id: "diaphragm",
    name: "Diaphragm",
    latin: "Diaphragma",
    system: "muscular",
    category: "Muscle",
    region: "thorax",
    count: 1,
    description: "Dome-shaped musculotendinous partition between the thoracic and abdominal cavities; the principal muscle of inspiration.",
    details: {
      "Origin": "Sternal part from the xiphoid; costal part from the inner surfaces of the lower six ribs/costal cartilages; lumbar part from the crura (L1–L3) and arcuate ligaments.",
      "Insertion": "Central tendon.",
      "Innervation": "Phrenic nerve (C3–C5); 'C3, 4, 5 keep the diaphragm alive'.",
      "Action": "Contraction flattens the dome, increasing thoracic vertical diameter and drawing air into the lungs (chief muscle of inspiration); increases intra-abdominal pressure.",
      "Blood supply": "Pericardiacophrenic, musculophrenic, superior and inferior phrenic arteries."
    },
    clinical: "Phrenic nerve (C3–C5) injury paralyses a hemidiaphragm (elevated on chest X-ray); the caval opening is at T8, oesophageal at T10, aortic at T12."
  },
  // ===================== ABDOMEN & PELVIS =====================
  {
    id: "rectus-abdominis",
    name: "Rectus abdominis",
    latin: "Musculus rectus abdominis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired vertical strap muscle of the anterior abdominal wall, segmented by tendinous intersections ('six-pack').",
    details: {
      "Origin": "Pubic crest, pubic tubercle and pubic symphysis.",
      "Insertion": "Xiphoid process and costal cartilages of ribs 5–7.",
      "Innervation": "Anterior rami of thoracoabdominal nerves (T7–T12).",
      "Action": "Flexes the trunk (lumbar spine), compresses abdominal viscera and stabilises the pelvis.",
      "Blood supply": "Superior and inferior epigastric arteries."
    },
    clinical: "Enclosed in the rectus sheath; the arcuate line marks where the posterior sheath is deficient; diastasis recti is midline separation along the linea alba."
  },
  {
    id: "external-oblique",
    name: "External oblique",
    latin: "Musculus obliquus externus abdominis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Largest and most superficial of the flat abdominal muscles; fibres run inferomedially ('hands in pockets').",
    details: {
      "Origin": "External surfaces of ribs 5–12.",
      "Insertion": "Linea alba, pubic tubercle and anterior half of the iliac crest (via an aponeurosis).",
      "Innervation": "Anterior rami of thoracoabdominal nerves (T7–T12).",
      "Action": "Compresses and supports abdominal viscera; flexes and rotates the trunk to the opposite side.",
      "Blood supply": "Lower posterior intercostal, subcostal and deep circumflex iliac arteries."
    },
    clinical: "Its aponeurosis forms the inguinal ligament and the anterior wall of the inguinal canal; the superficial inguinal ring is a defect in it."
  },
  {
    id: "internal-oblique",
    name: "Internal oblique",
    latin: "Musculus obliquus internus abdominis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Intermediate flat abdominal muscle whose fibres run perpendicular to the external oblique (inferolateral to superomedial).",
    details: {
      "Origin": "Thoracolumbar fascia, anterior two-thirds of the iliac crest and lateral half of the inguinal ligament.",
      "Insertion": "Inferior borders of ribs 10–12, linea alba and pubis (conjoint tendon).",
      "Innervation": "Anterior rami of thoracoabdominal nerves (T7–T12) and the first lumbar nerve (L1).",
      "Action": "Compresses and supports abdominal viscera; flexes and rotates the trunk to the same side.",
      "Blood supply": "Lower posterior intercostal, subcostal and deep circumflex iliac arteries."
    },
    clinical: "Contributes to the conjoint tendon and the cremaster muscle; its lower fibres form the roof of the inguinal canal."
  },
  {
    id: "transversus-abdominis",
    name: "Transversus abdominis",
    latin: "Musculus transversus abdominis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Deepest of the flat abdominal muscles with transversely running fibres; the principal compressor of the abdomen.",
    details: {
      "Origin": "Internal surfaces of costal cartilages 7–12, thoracolumbar fascia, iliac crest and lateral third of the inguinal ligament.",
      "Insertion": "Linea alba, pubic crest and pectineal line (conjoint tendon).",
      "Innervation": "Anterior rami of thoracoabdominal nerves (T7–T12) and L1.",
      "Action": "Compresses and supports the abdominal viscera (increases intra-abdominal pressure).",
      "Blood supply": "Lower posterior intercostal, subcostal and deep circumflex iliac arteries."
    },
    clinical: "The transversus abdominis plane (TAP) between it and the internal oblique carries the thoracoabdominal nerves and is targeted for regional anaesthesia."
  },
  {
    id: "pyramidalis",
    name: "Pyramidalis",
    latin: "Musculus pyramidalis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Small triangular muscle anterior to the lower rectus abdominis; tenses the linea alba.",
    details: {
      "Origin": "Pubic crest and pubic symphysis.",
      "Insertion": "Linea alba.",
      "Innervation": "Subcostal nerve (anterior ramus of T12).",
      "Action": "Tenses the linea alba.",
      "Blood supply": "Inferior epigastric artery."
    },
    clinical: "Absent in roughly 20% of people; a surgical landmark for the midline at the pubic symphysis."
  },
  {
    id: "cremaster",
    name: "Cremaster",
    latin: "Musculus cremaster",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Muscle derived from the internal oblique that invests the spermatic cord and testis.",
    details: {
      "Origin": "Internal oblique (and inferior margin of the internal oblique) over the inguinal canal.",
      "Insertion": "Tunica vaginalis / pubic tubercle, forming loops over the spermatic cord.",
      "Innervation": "Genital branch of the genitofemoral nerve (L1–L2).",
      "Action": "Elevates the testis (e.g., in cold or arousal) to regulate temperature.",
      "Blood supply": "Cremasteric artery (branch of the inferior epigastric)."
    },
    clinical: "Mediates the cremasteric reflex (stroking the medial thigh elevates the testis); the reflex is lost in testicular torsion."
  },
  {
    id: "levator-ani",
    name: "Levator ani",
    latin: "Musculus levator ani",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Broad funnel-shaped muscle (pubococcygeus, puborectalis and iliococcygeus) forming the main part of the pelvic diaphragm.",
    details: {
      "Origin": "Body of the pubis, tendinous arch of the obturator fascia and ischial spine.",
      "Insertion": "Perineal body, coccyx, anococcygeal ligament, walls of the prostate/vagina, rectum and anal canal.",
      "Innervation": "Nerve to levator ani (anterior rami of S3–S4) and the pudendal nerve (S2–S4).",
      "Action": "Supports and elevates the pelvic floor and viscera; puborectalis maintains the anorectal angle for continence; resists raised intra-abdominal pressure.",
      "Blood supply": "Inferior gluteal, internal pudendal and inferior vesical arteries."
    },
    clinical: "Weakened by childbirth, causing pelvic organ prolapse and stress incontinence; strengthened by Kegel (pelvic floor) exercises."
  },
  {
    id: "coccygeus",
    name: "Coccygeus (ischiococcygeus)",
    latin: "Musculus coccygeus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Posterior part of the pelvic diaphragm completing it behind the levator ani.",
    details: {
      "Origin": "Ischial spine (and sacrospinous ligament).",
      "Insertion": "Lateral border of the coccyx and lowest sacral segment.",
      "Innervation": "Anterior rami of S4–S5.",
      "Action": "Supports the pelvic viscera; flexes and stabilises the coccyx.",
      "Blood supply": "Inferior gluteal and internal pudendal arteries."
    },
    clinical: "Overlies and is closely related to the sacrospinous ligament, a landmark for pudendal nerve block."
  },
  {
    id: "obturator-internus-pelvis",
    name: "Obturator internus",
    latin: "Musculus obturatorius internus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Muscle forming part of the lateral pelvic wall; its tendon leaves the pelvis through the lesser sciatic foramen to laterally rotate the hip.",
    details: {
      "Origin": "Internal surface of the obturator membrane and surrounding bony margins of the obturator foramen.",
      "Insertion": "Medial surface of the greater trochanter of the femur, after turning around the lesser sciatic notch.",
      "Innervation": "Nerve to obturator internus (L5, S1–S2).",
      "Action": "Laterally rotates the extended hip; abducts the flexed hip; stabilises the femoral head.",
      "Blood supply": "Internal pudendal and inferior gluteal arteries."
    },
    clinical: "Its fascia forms part of the wall of the ischioanal fossa and gives origin to the levator ani (tendinous arch)."
  },
  {
    id: "external-anal-sphincter",
    name: "External anal sphincter",
    latin: "Musculus sphincter ani externus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 1,
    description: "Skeletal muscle ring around the anal canal providing voluntary control of defecation.",
    details: {
      "Origin": "Encircles the anal canal; attached to the perineal body and anococcygeal ligament (subcutaneous, superficial and deep parts).",
      "Insertion": "Perineal body anteriorly and anococcygeal ligament/coccyx posteriorly.",
      "Innervation": "Inferior rectal (inferior anal) branch of the pudendal nerve (S2–S4).",
      "Action": "Voluntarily closes the anal canal to maintain faecal continence.",
      "Blood supply": "Inferior rectal artery (branch of internal pudendal)."
    },
    clinical: "Can be torn in obstetric (third/fourth degree) perineal tears, causing faecal incontinence."
  },
  {
    id: "bulbospongiosus",
    name: "Bulbospongiosus",
    latin: "Musculus bulbospongiosus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Superficial perineal muscle covering the bulb of the penis or the vestibular bulb/Bartholin gland.",
    details: {
      "Origin": "Perineal body and median raphe (male); perineal body (female).",
      "Insertion": "Corpus spongiosum/perineal membrane (male); pubic arch and dorsum of the clitoris (female).",
      "Innervation": "Deep (muscular) branch of the perineal nerve, from the pudendal nerve (S2–S4).",
      "Action": "Empties the urethra after micturition and ejaculation, and contributes to erection (male); compresses the greater vestibular gland (female).",
      "Blood supply": "Perineal branch of the internal pudendal artery."
    },
    clinical: "Mediates the bulbocavernosus reflex, used to assess sacral reflex arc integrity after spinal cord injury."
  },
  {
    id: "ischiocavernosus",
    name: "Ischiocavernosus",
    latin: "Musculus ischiocavernosus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Superficial perineal muscle overlying the crus of the penis or clitoris; maintains erection.",
    details: {
      "Origin": "Ischial tuberosity and ischiopubic ramus.",
      "Insertion": "Crus of the penis or clitoris.",
      "Innervation": "Deep (muscular) branch of the perineal nerve, from the pudendal nerve (S2–S4).",
      "Action": "Compresses the crus, forcing blood into the body of the penis/clitoris to maintain erection.",
      "Blood supply": "Perineal branch of the internal pudendal artery."
    },
    clinical: "Maintains erectile rigidity by impeding venous drainage from the crura."
  },
  {
    id: "superficial-transverse-perineal",
    name: "Superficial transverse perineal",
    latin: "Musculus transversus perinei superficialis",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Superficial perineal muscle that stabilises the perineal body.",
    details: {
      "Origin": "Ischial tuberosity and ischiopubic ramus.",
      "Insertion": "Perineal body.",
      "Innervation": "Deep (muscular) branch of the perineal nerve, from the pudendal nerve (S2–S4).",
      "Action": "Supports and fixes the perineal body, stabilising the pelvic floor.",
      "Blood supply": "Perineal branch of the internal pudendal artery."
    },
    clinical: "The perineal body is a key tendinous node; its integrity is essential for pelvic floor support."
  },
  {
    id: "deep-transverse-perineal",
    name: "Deep transverse perineal",
    latin: "Musculus transversus perinei profundus",
    system: "muscular",
    category: "Muscle",
    region: "abdomen-pelvis",
    count: 2,
    description: "Deep perineal pouch muscle that supports the perineal body and (in the male) surrounds the membranous urethra.",
    details: {
      "Origin": "Ischiopubic ramus.",
      "Insertion": "Perineal body and median raphe; surrounds the membranous urethra (and external urethral sphincter region).",
      "Innervation": "Deep (muscular) branch of the perineal nerve, from the pudendal nerve (S2–S4).",
      "Action": "Supports the perineal body and assists the external urethral sphincter in voluntary control of micturition.",
      "Blood supply": "Perineal branch of the internal pudendal artery."
    },
    clinical: "Lies in the deep perineal pouch with the external urethral sphincter, important for urinary continence."
  },
  // ===================== UPPER LIMB: SHOULDER & ARM =====================
  {
    id: "deltoid",
    name: "Deltoid",
    latin: "Musculus deltoideus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Thick triangular muscle capping the shoulder; the chief abductor of the arm.",
    details: {
      "Origin": "Lateral third of the clavicle (anterior fibres), acromion (middle fibres) and spine of the scapula (posterior fibres).",
      "Insertion": "Deltoid tuberosity of the humerus.",
      "Innervation": "Axillary nerve (C5–C6).",
      "Action": "Middle fibres abduct the arm (15–90 degrees); anterior fibres flex and medially rotate; posterior fibres extend and laterally rotate the arm.",
      "Blood supply": "Posterior circumflex humeral and thoracoacromial arteries."
    },
    clinical: "Axillary nerve injury (surgical neck humeral fracture or anterior shoulder dislocation) causes deltoid wasting and loss of the 'regimental badge' sensation over the lateral shoulder."
  },
  {
    id: "supraspinatus",
    name: "Supraspinatus",
    latin: "Musculus supraspinatus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Rotator cuff muscle that initiates abduction of the arm.",
    details: {
      "Origin": "Supraspinous fossa of the scapula.",
      "Insertion": "Superior facet of the greater tubercle of the humerus.",
      "Innervation": "Suprascapular nerve (C5–C6).",
      "Action": "Initiates the first 15 degrees of arm abduction; stabilises the humeral head in the glenoid.",
      "Blood supply": "Suprascapular artery."
    },
    clinical: "The most commonly torn rotator cuff tendon; its tendon is compressed in subacromial impingement (painful arc 60–120 degrees)."
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    latin: "Musculus infraspinatus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Rotator cuff muscle that laterally rotates the arm.",
    details: {
      "Origin": "Infraspinous fossa of the scapula.",
      "Insertion": "Middle facet of the greater tubercle of the humerus.",
      "Innervation": "Suprascapular nerve (C5–C6).",
      "Action": "Laterally (externally) rotates the arm; stabilises the humeral head.",
      "Blood supply": "Suprascapular and circumflex scapular arteries."
    },
    clinical: "Tested with the elbow at the side and resisted external rotation; wasting visible over the infraspinous fossa in suprascapular nerve entrapment."
  },
  {
    id: "teres-minor",
    name: "Teres minor",
    latin: "Musculus teres minor",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Rotator cuff muscle that laterally rotates the arm.",
    details: {
      "Origin": "Superior part of the lateral (axillary) border of the scapula.",
      "Insertion": "Inferior facet of the greater tubercle of the humerus.",
      "Innervation": "Axillary nerve (C5–C6).",
      "Action": "Laterally rotates the arm; adducts and stabilises the humeral head.",
      "Blood supply": "Circumflex scapular and posterior circumflex humeral arteries."
    },
    clinical: "The only rotator cuff muscle supplied by the axillary nerve; forms the upper border of the quadrangular space."
  },
  {
    id: "subscapularis",
    name: "Subscapularis",
    latin: "Musculus subscapularis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Largest rotator cuff muscle on the anterior scapula; medially rotates the arm.",
    details: {
      "Origin": "Subscapular fossa (costal surface of the scapula).",
      "Insertion": "Lesser tubercle of the humerus.",
      "Innervation": "Upper and lower subscapular nerves (C5–C6).",
      "Action": "Medially (internally) rotates the arm; stabilises the humeral head and resists anterior dislocation.",
      "Blood supply": "Subscapular artery."
    },
    clinical: "Tested with the Gerber lift-off test; the only rotator cuff muscle that medially rotates and the only one inserting on the lesser tubercle."
  },
  {
    id: "teres-major",
    name: "Teres major",
    latin: "Musculus teres major",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Muscle of the posterior scapula that adducts and medially rotates the arm.",
    details: {
      "Origin": "Posterior surface of the inferior angle of the scapula.",
      "Insertion": "Medial lip of the intertubercular (bicipital) groove of the humerus.",
      "Innervation": "Lower subscapular nerve (C5–C6).",
      "Action": "Adducts and medially rotates the arm; extends it from the flexed position.",
      "Blood supply": "Circumflex scapular and subscapular arteries."
    },
    clinical: "With latissimus dorsi forms the posterior axillary fold; helps define the triangular and quadrangular spaces."
  },
  {
    id: "coracobrachialis",
    name: "Coracobrachialis",
    latin: "Musculus coracobrachialis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Muscle of the anterior arm that flexes and adducts the arm.",
    details: {
      "Origin": "Coracoid process of the scapula (with the short head of biceps).",
      "Insertion": "Middle of the medial surface of the humeral shaft.",
      "Innervation": "Musculocutaneous nerve (C5–C7).",
      "Action": "Flexes and adducts the arm at the glenohumeral joint.",
      "Blood supply": "Brachial artery (muscular branches)."
    },
    clinical: "The musculocutaneous nerve pierces it, an anatomical landmark and a site of potential entrapment."
  },
  {
    id: "biceps-brachii",
    name: "Biceps brachii",
    latin: "Musculus biceps brachii",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Two-headed muscle of the anterior arm; powerful supinator and flexor of the forearm.",
    details: {
      "Origin": "Long head from the supraglenoid tubercle of the scapula; short head from the coracoid process.",
      "Insertion": "Radial tuberosity and (via the bicipital aponeurosis) the deep fascia of the forearm.",
      "Innervation": "Musculocutaneous nerve (C5–C6).",
      "Action": "Supinates the forearm (most powerfully when flexed) and flexes the elbow; weakly flexes the arm.",
      "Blood supply": "Brachial artery (muscular branches)."
    },
    clinical: "Tests the C5–C6 (biceps) reflex; long head tendon rupture causes a 'Popeye' deformity (bunched-up muscle belly)."
  },
  {
    id: "brachialis",
    name: "Brachialis",
    latin: "Musculus brachialis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Muscle of the anterior arm deep to biceps; the main flexor of the elbow.",
    details: {
      "Origin": "Distal half of the anterior surface of the humerus.",
      "Insertion": "Coronoid process and tuberosity of the ulna.",
      "Innervation": "Musculocutaneous nerve (C5–C6), with a small contribution from the radial nerve (C7).",
      "Action": "Flexes the elbow in all positions (the 'workhorse' flexor), regardless of forearm pronation/supination.",
      "Blood supply": "Brachial and radial recurrent arteries."
    },
    clinical: "The chief flexor of the forearm; its dual innervation includes a radial component to its lateral part."
  },
  {
    id: "triceps-brachii",
    name: "Triceps brachii",
    latin: "Musculus triceps brachii",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Three-headed muscle of the posterior arm; the main extensor of the elbow.",
    details: {
      "Origin": "Long head from the infraglenoid tubercle of the scapula; lateral head from the posterior humerus above the radial groove; medial head from the posterior humerus below the radial groove.",
      "Insertion": "Olecranon of the ulna.",
      "Innervation": "Radial nerve (C6–C8).",
      "Action": "Extends the elbow; the long head also extends and adducts the arm.",
      "Blood supply": "Profunda brachii (deep brachial) artery."
    },
    clinical: "Tests the C7 (triceps) reflex; weakness occurs with radial nerve injury in the radial groove (though the proximal medial head supply may be spared)."
  },
  {
    id: "anconeus",
    name: "Anconeus",
    latin: "Musculus anconeus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Small triangular muscle on the posterolateral elbow that assists extension.",
    details: {
      "Origin": "Lateral epicondyle of the humerus.",
      "Insertion": "Olecranon and posterior surface of the proximal ulna.",
      "Innervation": "Radial nerve (C7–C8).",
      "Action": "Assists the triceps in extending the elbow and stabilises the joint; abducts the ulna in pronation.",
      "Blood supply": "Recurrent interosseous and middle collateral arteries."
    },
    clinical: "Often considered a continuation of the triceps; used as a muscle flap in elbow reconstruction."
  },
  // ===================== UPPER LIMB: FOREARM ANTERIOR =====================
  {
    id: "pronator-teres",
    name: "Pronator teres",
    latin: "Musculus pronator teres",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial muscle of the anterior forearm that pronates the forearm and flexes the elbow.",
    details: {
      "Origin": "Humeral head from the medial epicondyle (common flexor origin); ulnar head from the coronoid process.",
      "Insertion": "Middle of the lateral surface of the radius.",
      "Innervation": "Median nerve (C6–C7).",
      "Action": "Pronates the forearm and assists elbow flexion.",
      "Blood supply": "Ulnar, radial and anterior ulnar recurrent arteries."
    },
    clinical: "The median nerve passes between its two heads, a potential site of median nerve compression (pronator syndrome)."
  },
  {
    id: "flexor-carpi-radialis",
    name: "Flexor carpi radialis",
    latin: "Musculus flexor carpi radialis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial anterior forearm muscle that flexes and abducts the wrist.",
    details: {
      "Origin": "Medial epicondyle of the humerus (common flexor origin).",
      "Insertion": "Bases of the second and third metacarpals.",
      "Innervation": "Median nerve (C6–C7).",
      "Action": "Flexes and abducts (radially deviates) the wrist.",
      "Blood supply": "Radial and ulnar arteries (muscular branches)."
    },
    clinical: "Its tendon is a useful landmark for palpating the radial pulse, which lies just lateral to it."
  },
  {
    id: "palmaris-longus",
    name: "Palmaris longus",
    latin: "Musculus palmaris longus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Slender superficial forearm muscle that tenses the palmar aponeurosis; absent in ~15% of people.",
    details: {
      "Origin": "Medial epicondyle of the humerus (common flexor origin).",
      "Insertion": "Flexor retinaculum and palmar aponeurosis.",
      "Innervation": "Median nerve (C7–C8).",
      "Action": "Tenses the palmar aponeurosis and weakly flexes the wrist.",
      "Blood supply": "Ulnar artery (muscular branches)."
    },
    clinical: "Commonly harvested for tendon grafts because of its expendability; its tendon overlies the median nerve at the wrist."
  },
  {
    id: "flexor-carpi-ulnaris",
    name: "Flexor carpi ulnaris",
    latin: "Musculus flexor carpi ulnaris",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Most medial superficial anterior forearm muscle; flexes and adducts the wrist.",
    details: {
      "Origin": "Humeral head from the medial epicondyle; ulnar head from the olecranon and posterior border of the ulna.",
      "Insertion": "Pisiform, hook of hamate (via the pisohamate ligament) and base of the fifth metacarpal.",
      "Innervation": "Ulnar nerve (C7–C8).",
      "Action": "Flexes and adducts (ulnarly deviates) the wrist.",
      "Blood supply": "Ulnar artery (muscular branches)."
    },
    clinical: "The only superficial flexor supplied by the ulnar nerve; the ulnar nerve passes between its two heads at the elbow (cubital tunnel)."
  },
  {
    id: "flexor-digitorum-superficialis",
    name: "Flexor digitorum superficialis",
    latin: "Musculus flexor digitorum superficialis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Intermediate-layer anterior forearm muscle that flexes the proximal interphalangeal joints.",
    details: {
      "Origin": "Humeroulnar head from the medial epicondyle and coronoid process; radial head from the anterior oblique line of the radius.",
      "Insertion": "Sides of the middle phalanges of the medial four fingers (each tendon splits to allow profundus passage).",
      "Innervation": "Median nerve (C7–C8, T1).",
      "Action": "Flexes the proximal interphalangeal joints of the medial four fingers; assists flexion of the metacarpophalangeal joints and wrist.",
      "Blood supply": "Ulnar and radial arteries (muscular branches)."
    },
    clinical: "Tested by isolating PIP flexion while holding the other fingers extended; its tendons pass through the carpal tunnel."
  },
  {
    id: "flexor-digitorum-profundus",
    name: "Flexor digitorum profundus",
    latin: "Musculus flexor digitorum profundus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep anterior forearm muscle that flexes the distal interphalangeal joints; dually innervated.",
    details: {
      "Origin": "Proximal three-quarters of the anterior and medial surfaces of the ulna and the interosseous membrane.",
      "Insertion": "Bases of the distal phalanges of the medial four fingers.",
      "Innervation": "Medial half (to the ring and little fingers) by the ulnar nerve; lateral half (to the index and middle fingers) by the anterior interosseous branch of the median nerve (C8, T1).",
      "Action": "Flexes the distal interphalangeal joints; assists flexion of the proximal joints and wrist.",
      "Blood supply": "Ulnar and anterior interosseous arteries."
    },
    clinical: "Tested by isolating DIP flexion; its dual ulnar/median supply means a single nerve lesion weakens specific fingers."
  },
  {
    id: "flexor-pollicis-longus",
    name: "Flexor pollicis longus",
    latin: "Musculus flexor pollicis longus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep anterior forearm muscle that flexes the thumb.",
    details: {
      "Origin": "Anterior surface of the radius and adjacent interosseous membrane.",
      "Insertion": "Base of the distal phalanx of the thumb.",
      "Innervation": "Anterior interosseous branch of the median nerve (C7–C8, T1).",
      "Action": "Flexes the interphalangeal and metacarpophalangeal joints of the thumb.",
      "Blood supply": "Anterior interosseous artery."
    },
    clinical: "Loss of thumb IP flexion ('OK' sign weakness) indicates anterior interosseous nerve palsy."
  },
  {
    id: "pronator-quadratus",
    name: "Pronator quadratus",
    latin: "Musculus pronator quadratus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep quadrangular muscle of the distal forearm; the prime pronator.",
    details: {
      "Origin": "Distal anterior surface of the ulna.",
      "Insertion": "Distal anterior surface of the radius.",
      "Innervation": "Anterior interosseous branch of the median nerve (C7–C8, T1).",
      "Action": "Pronates the forearm (the prime mover); helps hold the radius and ulna together.",
      "Blood supply": "Anterior interosseous artery."
    },
    clinical: "The deepest muscle of the anterior forearm; assessed in anterior interosseous nerve syndrome."
  },
  // ===================== UPPER LIMB: FOREARM POSTERIOR =====================
  {
    id: "brachioradialis",
    name: "Brachioradialis",
    latin: "Musculus brachioradialis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial posterolateral forearm muscle that flexes the elbow, especially in the mid-prone position.",
    details: {
      "Origin": "Proximal two-thirds of the lateral supracondylar ridge of the humerus.",
      "Insertion": "Lateral surface of the distal radius, above the styloid process.",
      "Innervation": "Radial nerve (C5–C6).",
      "Action": "Flexes the elbow, most effectively when the forearm is mid-pronated (the 'corkscrew' muscle).",
      "Blood supply": "Radial recurrent artery."
    },
    clinical: "A flexor that is paradoxically supplied by the radial nerve; tests the C5–C6 (supinator/brachioradialis) reflex."
  },
  {
    id: "extensor-carpi-radialis-longus",
    name: "Extensor carpi radialis longus",
    latin: "Musculus extensor carpi radialis longus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial posterior forearm muscle that extends and abducts the wrist.",
    details: {
      "Origin": "Lateral supracondylar ridge of the humerus.",
      "Insertion": "Base of the second metacarpal.",
      "Innervation": "Radial nerve (C6–C7).",
      "Action": "Extends and abducts (radially deviates) the wrist.",
      "Blood supply": "Radial recurrent artery."
    },
    clinical: "Innervated by the radial nerve proper (before the deep branch), so it may be spared in posterior interosseous nerve lesions, reducing wrist drop severity."
  },
  {
    id: "extensor-carpi-radialis-brevis",
    name: "Extensor carpi radialis brevis",
    latin: "Musculus extensor carpi radialis brevis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial posterior forearm muscle that extends and abducts the wrist.",
    details: {
      "Origin": "Lateral epicondyle of the humerus (common extensor origin).",
      "Insertion": "Base of the third metacarpal.",
      "Innervation": "Deep branch of the radial nerve (C7–C8).",
      "Action": "Extends and abducts (radially deviates) the wrist.",
      "Blood supply": "Radial artery (muscular branches)."
    },
    clinical: "Its origin at the common extensor origin is the principal site of lateral epicondylitis (tennis elbow)."
  },
  {
    id: "extensor-digitorum",
    name: "Extensor digitorum",
    latin: "Musculus extensor digitorum",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Principal extensor of the fingers in the superficial posterior forearm.",
    details: {
      "Origin": "Lateral epicondyle of the humerus (common extensor origin).",
      "Insertion": "Extensor expansions of the medial four fingers (into the middle and distal phalanges).",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends the metacarpophalangeal and interphalangeal joints of the medial four fingers; assists wrist extension.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Weakness causes finger drop in posterior interosseous nerve palsy (wrist extension preserved via radial wrist extensors)."
  },
  {
    id: "extensor-digiti-minimi",
    name: "Extensor digiti minimi",
    latin: "Musculus extensor digiti minimi",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Slender superficial posterior forearm muscle that extends the little finger.",
    details: {
      "Origin": "Lateral epicondyle of the humerus (common extensor origin).",
      "Insertion": "Extensor expansion of the little finger.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends the little finger at the metacarpophalangeal and interphalangeal joints.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Allows independent extension of the little finger (e.g., the 'rock' sign)."
  },
  {
    id: "extensor-carpi-ulnaris",
    name: "Extensor carpi ulnaris",
    latin: "Musculus extensor carpi ulnaris",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Most medial superficial posterior forearm muscle; extends and adducts the wrist.",
    details: {
      "Origin": "Lateral epicondyle of the humerus and posterior border of the ulna.",
      "Insertion": "Base of the fifth metacarpal.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends and adducts (ulnarly deviates) the wrist.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Its tendon subluxation and tendinopathy are common causes of ulnar-sided wrist pain."
  },
  {
    id: "supinator",
    name: "Supinator",
    latin: "Musculus supinator",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep posterior forearm muscle that supinates the forearm.",
    details: {
      "Origin": "Lateral epicondyle of the humerus, radial collateral and anular ligaments, and the supinator crest of the ulna.",
      "Insertion": "Lateral, posterior and anterior surfaces of the proximal radius.",
      "Innervation": "Deep branch of the radial nerve (C6–C7).",
      "Action": "Supinates the forearm (unassisted by biceps when the elbow is extended).",
      "Blood supply": "Radial and posterior interosseous recurrent arteries."
    },
    clinical: "The deep branch of the radial nerve passes between its two heads at the arcade of Frohse, a site of posterior interosseous nerve entrapment."
  },
  {
    id: "abductor-pollicis-longus",
    name: "Abductor pollicis longus",
    latin: "Musculus abductor pollicis longus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep posterior (outcropping) forearm muscle that abducts the thumb.",
    details: {
      "Origin": "Posterior surfaces of the ulna, radius and interosseous membrane.",
      "Insertion": "Base of the first metacarpal.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Abducts and extends the thumb at the carpometacarpal joint; assists wrist abduction.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Forms the anterior border of the anatomical snuffbox; tendinopathy here (with EPB) causes de Quervain tenosynovitis (positive Finkelstein test)."
  },
  {
    id: "extensor-pollicis-brevis",
    name: "Extensor pollicis brevis",
    latin: "Musculus extensor pollicis brevis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep posterior forearm muscle that extends the proximal phalanx of the thumb.",
    details: {
      "Origin": "Posterior surface of the radius and interosseous membrane.",
      "Insertion": "Base of the proximal phalanx of the thumb.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends the metacarpophalangeal joint of the thumb; assists abduction.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Forms the anterior border of the anatomical snuffbox with abductor pollicis longus; involved in de Quervain tenosynovitis."
  },
  {
    id: "extensor-pollicis-longus",
    name: "Extensor pollicis longus",
    latin: "Musculus extensor pollicis longus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep posterior forearm muscle that extends the distal phalanx of the thumb.",
    details: {
      "Origin": "Posterior surface of the ulna and interosseous membrane.",
      "Insertion": "Base of the distal phalanx of the thumb.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends the interphalangeal joint of the thumb; assists extension and adduction at the carpometacarpal joint.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Forms the posterior border of the anatomical snuffbox, hooking around Lister tubercle; prone to rupture after distal radius fracture."
  },
  {
    id: "extensor-indicis",
    name: "Extensor indicis",
    latin: "Musculus extensor indicis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep posterior forearm muscle giving the index finger independent extension.",
    details: {
      "Origin": "Posterior surface of the ulna and interosseous membrane.",
      "Insertion": "Extensor expansion of the index finger.",
      "Innervation": "Posterior interosseous nerve (deep branch of the radial nerve, C7–C8).",
      "Action": "Extends the index finger and assists wrist extension; enables pointing.",
      "Blood supply": "Posterior interosseous artery."
    },
    clinical: "Allows independent index extension (pointing); frequently used as a tendon transfer donor."
  },
  // ===================== UPPER LIMB: HAND INTRINSICS =====================
  {
    id: "abductor-pollicis-brevis",
    name: "Abductor pollicis brevis",
    latin: "Musculus abductor pollicis brevis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Superficial thenar muscle that abducts the thumb.",
    details: {
      "Origin": "Flexor retinaculum, scaphoid and trapezium tubercles.",
      "Insertion": "Lateral side of the base of the proximal phalanx of the thumb.",
      "Innervation": "Recurrent (motor) branch of the median nerve (C8, T1).",
      "Action": "Abducts the thumb (moves it anteriorly away from the palm).",
      "Blood supply": "Superficial palmar branch of the radial artery."
    },
    clinical: "Tested in carpal tunnel syndrome (thumb abduction against resistance); thenar wasting indicates median nerve compression."
  },
  {
    id: "flexor-pollicis-brevis",
    name: "Flexor pollicis brevis",
    latin: "Musculus flexor pollicis brevis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Thenar muscle that flexes the thumb at the metacarpophalangeal joint.",
    details: {
      "Origin": "Superficial head from the flexor retinaculum and trapezium; deep head from the trapezoid and capitate.",
      "Insertion": "Lateral side of the base of the proximal phalanx of the thumb.",
      "Innervation": "Superficial head by the recurrent branch of the median nerve (C8, T1); deep head by the deep branch of the ulnar nerve.",
      "Action": "Flexes the thumb at the carpometacarpal and metacarpophalangeal joints.",
      "Blood supply": "Superficial palmar arch."
    },
    clinical: "Its dual median/ulnar supply makes it variable in nerve lesion presentations."
  },
  {
    id: "opponens-pollicis",
    name: "Opponens pollicis",
    latin: "Musculus opponens pollicis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Thenar muscle that opposes the thumb to the other digits.",
    details: {
      "Origin": "Flexor retinaculum and tubercle of the trapezium.",
      "Insertion": "Lateral border of the first metacarpal.",
      "Innervation": "Recurrent (motor) branch of the median nerve (C8, T1).",
      "Action": "Opposes the thumb, drawing the first metacarpal medially and rotating it for precision grip.",
      "Blood supply": "Superficial palmar branch of the radial artery."
    },
    clinical: "Loss of opposition (an 'ape hand') is a hallmark of median nerve injury and impairs pincer grip."
  },
  {
    id: "adductor-pollicis",
    name: "Adductor pollicis",
    latin: "Musculus adductor pollicis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Deep thenar-region muscle with two heads that adducts the thumb.",
    details: {
      "Origin": "Oblique head from the capitate and bases of the second and third metacarpals; transverse head from the shaft of the third metacarpal.",
      "Insertion": "Medial side of the base of the proximal phalanx of the thumb.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Adducts the thumb toward the palm; aids pinch grip.",
      "Blood supply": "Deep palmar arch."
    },
    clinical: "Froment sign (thumb IP flexion when pinching paper) indicates adductor pollicis weakness in ulnar nerve palsy."
  },
  {
    id: "abductor-digiti-minimi-hand",
    name: "Abductor digiti minimi (hand)",
    latin: "Musculus abductor digiti minimi manus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Hypothenar muscle that abducts the little finger.",
    details: {
      "Origin": "Pisiform and tendon of flexor carpi ulnaris.",
      "Insertion": "Medial side of the base of the proximal phalanx of the little finger.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Abducts the little finger.",
      "Blood supply": "Ulnar artery (deep branch)."
    },
    clinical: "Wasting of the hypothenar eminence and weak little-finger abduction indicate ulnar nerve injury."
  },
  {
    id: "flexor-digiti-minimi-brevis-hand",
    name: "Flexor digiti minimi brevis (hand)",
    latin: "Musculus flexor digiti minimi brevis manus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Hypothenar muscle that flexes the little finger at the metacarpophalangeal joint.",
    details: {
      "Origin": "Hook of the hamate and flexor retinaculum.",
      "Insertion": "Medial side of the base of the proximal phalanx of the little finger.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Flexes the little finger at the metacarpophalangeal joint.",
      "Blood supply": "Ulnar artery (deep branch)."
    },
    clinical: "Acts with abductor and opponens digiti minimi to cup the hypothenar eminence."
  },
  {
    id: "opponens-digiti-minimi",
    name: "Opponens digiti minimi",
    latin: "Musculus opponens digiti minimi",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Hypothenar muscle that rotates the fifth metacarpal in opposition.",
    details: {
      "Origin": "Hook of the hamate and flexor retinaculum.",
      "Insertion": "Medial border of the fifth metacarpal.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Draws the fifth metacarpal anteriorly and rotates it, deepening the palm (cupping) in opposition.",
      "Blood supply": "Deep palmar arch."
    },
    clinical: "Helps oppose the little finger toward the thumb to cup the hand."
  },
  {
    id: "palmaris-brevis",
    name: "Palmaris brevis",
    latin: "Musculus palmaris brevis",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Small subcutaneous muscle of the hypothenar skin that wrinkles the palm and improves grip.",
    details: {
      "Origin": "Palmar aponeurosis and flexor retinaculum.",
      "Insertion": "Skin of the medial border of the hand (hypothenar eminence).",
      "Innervation": "Superficial branch of the ulnar nerve (C8, T1).",
      "Action": "Wrinkles the skin of the hypothenar eminence and deepens the cup of the palm, aiding grip.",
      "Blood supply": "Ulnar artery (superficial branch)."
    },
    clinical: "Protects the ulnar nerve and artery in Guyon canal and improves grip security."
  },
  {
    id: "lumbricals-hand",
    name: "Lumbricals of the hand",
    latin: "Musculi lumbricales manus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Four small intrinsic muscles arising from the flexor digitorum profundus tendons; flex the MCP and extend the IP joints.",
    details: {
      "Origin": "Tendons of flexor digitorum profundus (1st and 2nd from the radial side of single tendons; 3rd and 4th bipennate from adjacent tendons).",
      "Insertion": "Lateral aspects of the extensor expansions of the medial four fingers.",
      "Innervation": "Lateral two by the median nerve; medial two by the deep branch of the ulnar nerve (C8, T1).",
      "Action": "Flex the metacarpophalangeal joints and extend the interphalangeal joints (writing position).",
      "Blood supply": "Superficial and deep palmar arches and digital arteries."
    },
    clinical: "Their dual innervation underlies the 'ulnar claw' (loss of medial lumbricals) and 'hand of benediction' patterns of nerve injury."
  },
  {
    id: "dorsal-interossei-hand",
    name: "Dorsal interossei (hand)",
    latin: "Musculi interossei dorsales manus",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Four bipennate intrinsic muscles that abduct the fingers (DAB).",
    details: {
      "Origin": "Adjacent sides of the metacarpals (each by two heads).",
      "Insertion": "Bases of the proximal phalanges and extensor expansions of digits 2–4.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Abduct the index, middle and ring fingers away from the axial line of the middle finger (DAB); assist the lumbricals.",
      "Blood supply": "Dorsal and palmar metacarpal arteries."
    },
    clinical: "Wasting of the first dorsal interosseous (visible web-space hollow) is an early sign of ulnar nerve palsy."
  },
  {
    id: "palmar-interossei",
    name: "Palmar interossei",
    latin: "Musculi interossei palmares",
    system: "muscular",
    category: "Muscle",
    region: "upper-limb",
    count: 2,
    description: "Three (or four) unipennate intrinsic muscles that adduct the fingers (PAD).",
    details: {
      "Origin": "Palmar surfaces of the second, fourth and fifth metacarpals.",
      "Insertion": "Bases of the proximal phalanges and extensor expansions of the same digits.",
      "Innervation": "Deep branch of the ulnar nerve (C8, T1).",
      "Action": "Adduct the index, ring and little fingers toward the middle finger (PAD); assist the lumbricals in MCP flexion/IP extension.",
      "Blood supply": "Palmar metacarpal arteries."
    },
    clinical: "Tested with the card-gripping (adduction) test; weakness with positive Froment sign indicates ulnar nerve injury."
  },
  // ===================== LOWER LIMB: GLUTEAL & HIP =====================
  {
    id: "gluteus-maximus",
    name: "Gluteus maximus",
    latin: "Musculus gluteus maximus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Largest and most superficial gluteal muscle; the chief extensor of the hip.",
    details: {
      "Origin": "Ilium behind the posterior gluteal line, dorsal sacrum and coccyx, and the sacrotuberous ligament.",
      "Insertion": "Iliotibial tract and the gluteal tuberosity of the femur.",
      "Innervation": "Inferior gluteal nerve (L5, S1–S2).",
      "Action": "Extends and laterally rotates the hip (powerful in rising from sitting, climbing and running); upper fibres abduct.",
      "Blood supply": "Inferior and superior gluteal arteries."
    },
    clinical: "The upper outer quadrant of the buttock is the safe site for intramuscular injection (avoiding the sciatic nerve and gluteal vessels)."
  },
  {
    id: "gluteus-medius",
    name: "Gluteus medius",
    latin: "Musculus gluteus medius",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Fan-shaped gluteal muscle deep to maximus; abductor and pelvic stabiliser during gait.",
    details: {
      "Origin": "External surface of the ilium between the anterior and posterior gluteal lines.",
      "Insertion": "Lateral surface of the greater trochanter of the femur.",
      "Innervation": "Superior gluteal nerve (L4–L5, S1).",
      "Action": "Abducts the hip; steadies the pelvis on the stance leg during walking; anterior fibres medially rotate.",
      "Blood supply": "Superior gluteal artery."
    },
    clinical: "Weakness produces a positive Trendelenburg sign (pelvis drops to the opposite/unsupported side) and a lurching gait."
  },
  {
    id: "gluteus-minimus",
    name: "Gluteus minimus",
    latin: "Musculus gluteus minimus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Smallest and deepest gluteal muscle; abducts and medially rotates the hip.",
    details: {
      "Origin": "External surface of the ilium between the anterior and inferior gluteal lines.",
      "Insertion": "Anterior surface of the greater trochanter of the femur.",
      "Innervation": "Superior gluteal nerve (L4–L5, S1).",
      "Action": "Abducts and medially rotates the hip; stabilises the pelvis during gait.",
      "Blood supply": "Superior gluteal artery."
    },
    clinical: "Acts with gluteus medius as a key pelvic stabiliser; both are weakened in superior gluteal nerve injury (Trendelenburg gait)."
  },
  {
    id: "tensor-fasciae-latae",
    name: "Tensor fasciae latae",
    latin: "Musculus tensor fasciae latae",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Anterolateral hip muscle enclosed between layers of fascia lata that tenses the iliotibial tract.",
    details: {
      "Origin": "Anterior superior iliac spine and anterior iliac crest.",
      "Insertion": "Iliotibial tract (which attaches to the lateral tibial condyle, Gerdy tubercle).",
      "Innervation": "Superior gluteal nerve (L4–L5, S1).",
      "Action": "Tenses the iliotibial tract and stabilises the knee in extension; assists hip flexion, abduction and medial rotation.",
      "Blood supply": "Superior gluteal and lateral circumflex femoral arteries."
    },
    clinical: "Tightness contributes to iliotibial band syndrome and lateral knee pain in runners."
  },
  {
    id: "piriformis",
    name: "Piriformis",
    latin: "Musculus piriformis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Pear-shaped muscle of the gluteal region; a key landmark of the greater sciatic foramen and lateral rotator of the hip.",
    details: {
      "Origin": "Anterior surface of the sacrum (S2–S4).",
      "Insertion": "Superior border of the greater trochanter of the femur.",
      "Innervation": "Nerve to piriformis (anterior rami of S1–S2).",
      "Action": "Laterally rotates the extended hip; abducts the flexed hip; stabilises the femoral head.",
      "Blood supply": "Superior and inferior gluteal arteries."
    },
    clinical: "The key landmark dividing the greater sciatic foramen; piriformis spasm can compress the sciatic nerve (piriformis syndrome)."
  },
  {
    id: "superior-gemellus",
    name: "Superior gemellus",
    latin: "Musculus gemellus superior",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Small lateral rotator of the hip above the obturator internus tendon.",
    details: {
      "Origin": "Ischial spine.",
      "Insertion": "Medial surface of the greater trochanter (with the obturator internus tendon).",
      "Innervation": "Nerve to obturator internus (L5, S1–S2).",
      "Action": "Laterally rotates the extended hip; abducts the flexed hip; stabilises the femoral head.",
      "Blood supply": "Inferior gluteal and internal pudendal arteries."
    },
    clinical: "One of the deep lateral rotators forming a 'triceps coxae' with obturator internus."
  },
  {
    id: "inferior-gemellus",
    name: "Inferior gemellus",
    latin: "Musculus gemellus inferior",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Small lateral rotator of the hip below the obturator internus tendon.",
    details: {
      "Origin": "Ischial tuberosity.",
      "Insertion": "Medial surface of the greater trochanter (with the obturator internus tendon).",
      "Innervation": "Nerve to quadratus femoris (L4–L5, S1).",
      "Action": "Laterally rotates the extended hip; abducts the flexed hip; stabilises the femoral head.",
      "Blood supply": "Inferior gluteal and medial circumflex femoral arteries."
    },
    clinical: "Acts with the superior gemellus and obturator internus as a conjoint lateral rotator."
  },
  {
    id: "obturator-externus",
    name: "Obturator externus",
    latin: "Musculus obturatorius externus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deep muscle of the medial thigh/hip that laterally rotates the hip.",
    details: {
      "Origin": "External surface of the obturator membrane and surrounding margins of the obturator foramen.",
      "Insertion": "Trochanteric fossa of the femur.",
      "Innervation": "Obturator nerve (posterior branch, L3–L4).",
      "Action": "Laterally rotates the hip and stabilises the femoral head in the acetabulum.",
      "Blood supply": "Obturator and medial circumflex femoral arteries."
    },
    clinical: "Unlike obturator internus, it is supplied by the obturator nerve, reflecting its anterior compartment origin."
  },
  {
    id: "quadratus-femoris",
    name: "Quadratus femoris",
    latin: "Musculus quadratus femoris",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Flat quadrilateral lateral rotator of the hip.",
    details: {
      "Origin": "Lateral border of the ischial tuberosity.",
      "Insertion": "Quadrate tubercle on the intertrochanteric crest of the femur.",
      "Innervation": "Nerve to quadratus femoris (L4–L5, S1).",
      "Action": "Laterally rotates the hip and stabilises the femoral head.",
      "Blood supply": "Medial circumflex femoral and inferior gluteal arteries."
    },
    clinical: "The lowest of the deep lateral rotators; ischiofemoral impingement involves entrapment of this muscle."
  },
  // ===================== LOWER LIMB: ILIOPSOAS =====================
  {
    id: "psoas-major",
    name: "Psoas major",
    latin: "Musculus psoas major",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Long fusiform posterior abdominal/hip muscle; the chief flexor of the hip and part of the iliopsoas.",
    details: {
      "Origin": "Transverse processes, bodies and intervertebral discs of T12–L5.",
      "Insertion": "Lesser trochanter of the femur (with iliacus).",
      "Innervation": "Anterior rami of L1–L3.",
      "Action": "Flexes the hip (chief flexor); stabilises and laterally flexes the lumbar spine.",
      "Blood supply": "Lumbar branches of the iliolumbar artery."
    },
    clinical: "A psoas abscess (e.g., tuberculous) tracks along the muscle to the groin; the positive psoas sign suggests retrocaecal appendicitis."
  },
  {
    id: "psoas-minor",
    name: "Psoas minor",
    latin: "Musculus psoas minor",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Slender, often absent muscle anterior to psoas major; weak trunk flexor.",
    details: {
      "Origin": "Bodies of T12 and L1 and the intervening disc.",
      "Insertion": "Pectineal line of the pubis and iliopectineal eminence.",
      "Innervation": "Anterior ramus of L1.",
      "Action": "Weakly flexes the lumbar (trunk) on the pelvis.",
      "Blood supply": "Lumbar branches of the iliolumbar artery."
    },
    clinical: "Absent in roughly 40% of people; functionally insignificant."
  },
  {
    id: "iliacus",
    name: "Iliacus",
    latin: "Musculus iliacus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Fan-shaped muscle of the iliac fossa joining psoas major to form the iliopsoas; flexes the hip.",
    details: {
      "Origin": "Iliac fossa and ala of the sacrum.",
      "Insertion": "Lesser trochanter of the femur (with psoas major).",
      "Innervation": "Femoral nerve (L2–L3).",
      "Action": "Flexes the hip and stabilises the joint; assists trunk flexion.",
      "Blood supply": "Iliolumbar and medial femoral circumflex arteries."
    },
    clinical: "With psoas major forms the iliopsoas, the most powerful hip flexor; both pass deep to the inguinal ligament."
  },
  // ===================== LOWER LIMB: ANTERIOR THIGH =====================
  {
    id: "rectus-femoris",
    name: "Rectus femoris",
    latin: "Musculus rectus femoris",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Central quadriceps muscle and the only one crossing the hip; flexes the hip and extends the knee.",
    details: {
      "Origin": "Straight head from the anterior inferior iliac spine; reflected head from the ilium above the acetabulum.",
      "Insertion": "Base of the patella and, via the patellar ligament, the tibial tuberosity.",
      "Innervation": "Femoral nerve (L2–L4).",
      "Action": "Extends the knee and flexes the hip (its two-joint action).",
      "Blood supply": "Lateral circumflex femoral artery."
    },
    clinical: "The only quadriceps component that also flexes the hip; weakened by femoral nerve injury (loss of the knee-jerk reflex)."
  },
  {
    id: "vastus-lateralis",
    name: "Vastus lateralis",
    latin: "Musculus vastus lateralis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Largest quadriceps muscle on the lateral thigh; extends the knee.",
    details: {
      "Origin": "Greater trochanter and lateral lip of the linea aspera of the femur.",
      "Insertion": "Base of the patella and tibial tuberosity via the patellar ligament.",
      "Innervation": "Femoral nerve (L2–L4).",
      "Action": "Extends the knee.",
      "Blood supply": "Lateral circumflex femoral artery."
    },
    clinical: "A common site for intramuscular injection in infants; its tendon contributes to lateral patellar tracking."
  },
  {
    id: "vastus-medialis",
    name: "Vastus medialis",
    latin: "Musculus vastus medialis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Quadriceps muscle on the medial thigh; extends the knee and stabilises the patella.",
    details: {
      "Origin": "Intertrochanteric line and medial lip of the linea aspera of the femur.",
      "Insertion": "Base of the patella and tibial tuberosity via the patellar ligament.",
      "Innervation": "Femoral nerve (L2–L4).",
      "Action": "Extends the knee; its lowest oblique fibres (VMO) stabilise the patella medially in terminal extension.",
      "Blood supply": "Femoral and descending genicular arteries."
    },
    clinical: "Weakness/wasting of the VMO contributes to patellofemoral maltracking and anterior knee pain."
  },
  {
    id: "vastus-intermedius",
    name: "Vastus intermedius",
    latin: "Musculus vastus intermedius",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deep quadriceps muscle beneath rectus femoris; extends the knee.",
    details: {
      "Origin": "Anterior and lateral surfaces of the femoral shaft.",
      "Insertion": "Base of the patella and tibial tuberosity via the patellar ligament.",
      "Innervation": "Femoral nerve (L2–L4).",
      "Action": "Extends the knee.",
      "Blood supply": "Lateral circumflex femoral artery."
    },
    clinical: "Its deep fibres form the articularis genus, which retracts the suprapatellar bursa during extension."
  },
  {
    id: "sartorius",
    name: "Sartorius",
    latin: "Musculus sartorius",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Long strap-like muscle (the longest in the body) crossing the anterior thigh obliquely.",
    details: {
      "Origin": "Anterior superior iliac spine.",
      "Insertion": "Superomedial surface of the tibia (pes anserinus).",
      "Innervation": "Femoral nerve (L2–L3).",
      "Action": "Flexes, abducts and laterally rotates the hip and flexes the knee (the 'tailor's' cross-legged position).",
      "Blood supply": "Femoral artery (muscular branches)."
    },
    clinical: "Its medial border forms the lateral boundary of the femoral triangle; part of the pes anserinus at the knee."
  },
  // ===================== LOWER LIMB: MEDIAL THIGH (ADDUCTORS) =====================
  {
    id: "adductor-longus",
    name: "Adductor longus",
    latin: "Musculus adductor longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Most anterior of the adductor muscles; adducts the thigh.",
    details: {
      "Origin": "Body of the pubis below the pubic crest.",
      "Insertion": "Middle third of the linea aspera of the femur.",
      "Innervation": "Obturator nerve, anterior division (L2–L4).",
      "Action": "Adducts the thigh and assists hip flexion and medial rotation.",
      "Blood supply": "Deep femoral (profunda femoris) and obturator arteries."
    },
    clinical: "Its prominent tendon forms the medial border of the femoral triangle; a common site of groin strain ('rider's strain')."
  },
  {
    id: "adductor-brevis",
    name: "Adductor brevis",
    latin: "Musculus adductor brevis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Adductor muscle deep to adductor longus; adducts the thigh.",
    details: {
      "Origin": "Body and inferior ramus of the pubis.",
      "Insertion": "Pectineal line and proximal linea aspera of the femur.",
      "Innervation": "Obturator nerve (L2–L4).",
      "Action": "Adducts the thigh and assists hip flexion.",
      "Blood supply": "Deep femoral (profunda femoris) and obturator arteries."
    },
    clinical: "The obturator nerve divides into anterior and posterior divisions around it, a useful surgical landmark."
  },
  {
    id: "adductor-magnus",
    name: "Adductor magnus",
    latin: "Musculus adductor magnus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Largest adductor with adductor and hamstring parts; powerful adductor of the thigh.",
    details: {
      "Origin": "Adductor part from the ischiopubic ramus; hamstring part from the ischial tuberosity.",
      "Insertion": "Linea aspera and adductor tubercle of the femur (the adductor hiatus lies between the two parts).",
      "Innervation": "Adductor part by the obturator nerve (L2–L4); hamstring part by the tibial division of the sciatic nerve (L4).",
      "Action": "Adducts the thigh; adductor part flexes and hamstring part extends the hip.",
      "Blood supply": "Deep femoral (profunda femoris) and obturator arteries."
    },
    clinical: "The adductor (tendinous) hiatus transmits the femoral vessels into the popliteal fossa, where they become the popliteal vessels."
  },
  {
    id: "gracilis",
    name: "Gracilis",
    latin: "Musculus gracilis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Thin superficial medial thigh muscle crossing both hip and knee; adducts the thigh.",
    details: {
      "Origin": "Body and inferior ramus of the pubis.",
      "Insertion": "Superomedial surface of the tibia (pes anserinus).",
      "Innervation": "Obturator nerve (L2–L3).",
      "Action": "Adducts the thigh and flexes and medially rotates the leg at the knee.",
      "Blood supply": "Deep femoral and obturator arteries."
    },
    clinical: "The only adductor crossing the knee; commonly harvested as a muscle/tendon graft (e.g., ACL reconstruction, free flaps)."
  },
  {
    id: "pectineus",
    name: "Pectineus",
    latin: "Musculus pectineus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Flat quadrangular muscle of the upper medial thigh that adducts and flexes the hip.",
    details: {
      "Origin": "Pecten pubis (pectineal line) of the superior pubic ramus.",
      "Insertion": "Pectineal line of the femur, just below the lesser trochanter.",
      "Innervation": "Femoral nerve (L2–L3); occasionally a branch of the obturator nerve.",
      "Action": "Adducts and flexes the hip.",
      "Blood supply": "Medial circumflex femoral and obturator arteries."
    },
    clinical: "Forms part of the floor of the femoral triangle; its dual potential innervation reflects its transitional position."
  },
  // ===================== LOWER LIMB: POSTERIOR THIGH (HAMSTRINGS) =====================
  {
    id: "biceps-femoris",
    name: "Biceps femoris",
    latin: "Musculus biceps femoris",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Two-headed lateral hamstring; flexes the knee and extends the hip.",
    details: {
      "Origin": "Long head from the ischial tuberosity; short head from the lateral lip of the linea aspera of the femur.",
      "Insertion": "Head of the fibula.",
      "Innervation": "Long head by the tibial division of the sciatic nerve (L5, S1–S2); short head by the common fibular division of the sciatic nerve (L5, S1–S2).",
      "Action": "Flexes the knee and laterally rotates the flexed leg; long head extends the hip.",
      "Blood supply": "Perforating branches of the deep femoral artery."
    },
    clinical: "Its tendon forms the superolateral border of the popliteal fossa; the common fibular nerve runs along its medial tendon border and is vulnerable here."
  },
  {
    id: "semitendinosus",
    name: "Semitendinosus",
    latin: "Musculus semitendinosus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Medial hamstring with a long cord-like tendon; flexes the knee and extends the hip.",
    details: {
      "Origin": "Ischial tuberosity.",
      "Insertion": "Superomedial surface of the tibia (pes anserinus).",
      "Innervation": "Tibial division of the sciatic nerve (L5, S1–S2).",
      "Action": "Extends the hip, flexes the knee and medially rotates the flexed leg.",
      "Blood supply": "Perforating branches of the deep femoral artery."
    },
    clinical: "Part of the pes anserinus; its tendon is commonly harvested with gracilis for ACL reconstruction."
  },
  {
    id: "semimembranosus",
    name: "Semimembranosus",
    latin: "Musculus semimembranosus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Broad flat medial hamstring deep to semitendinosus; flexes the knee and extends the hip.",
    details: {
      "Origin": "Ischial tuberosity.",
      "Insertion": "Posterior part of the medial condyle of the tibia (and the oblique popliteal ligament).",
      "Innervation": "Tibial division of the sciatic nerve (L5, S1–S2).",
      "Action": "Extends the hip, flexes the knee and medially rotates the flexed leg.",
      "Blood supply": "Perforating branches of the deep femoral artery."
    },
    clinical: "Forms the superomedial border of the popliteal fossa; a popliteal (Baker) cyst often arises from its bursa."
  },
  // ===================== LOWER LIMB: LEG ANTERIOR =====================
  {
    id: "tibialis-anterior",
    name: "Tibialis anterior",
    latin: "Musculus tibialis anterior",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Most medial muscle of the anterior leg compartment; the chief dorsiflexor of the foot.",
    details: {
      "Origin": "Lateral condyle and proximal half of the lateral surface of the tibia and interosseous membrane.",
      "Insertion": "Medial cuneiform and base of the first metatarsal.",
      "Innervation": "Deep fibular (peroneal) nerve (L4–L5).",
      "Action": "Dorsiflexes the ankle and inverts the foot; supports the medial longitudinal arch.",
      "Blood supply": "Anterior tibial artery."
    },
    clinical: "Weakness causes foot drop and a high-stepping gait; commonly affected in deep fibular nerve injury and the L4–L5 root."
  },
  {
    id: "extensor-hallucis-longus",
    name: "Extensor hallucis longus",
    latin: "Musculus extensor hallucis longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Anterior compartment leg muscle that extends the great toe.",
    details: {
      "Origin": "Middle of the anterior surface of the fibula and interosseous membrane.",
      "Insertion": "Base of the distal phalanx of the great toe.",
      "Innervation": "Deep fibular (peroneal) nerve (L5, S1).",
      "Action": "Extends the great toe and dorsiflexes the ankle.",
      "Blood supply": "Anterior tibial artery."
    },
    clinical: "Weak great-toe extension is a sensitive sign of an L5 radiculopathy."
  },
  {
    id: "extensor-digitorum-longus",
    name: "Extensor digitorum longus",
    latin: "Musculus extensor digitorum longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Anterior compartment leg muscle that extends the lateral four toes.",
    details: {
      "Origin": "Lateral condyle of the tibia and proximal three-quarters of the anterior fibula and interosseous membrane.",
      "Insertion": "Middle and distal phalanges of the lateral four toes (via extensor expansions).",
      "Innervation": "Deep fibular (peroneal) nerve (L5, S1).",
      "Action": "Extends the lateral four toes and dorsiflexes the ankle.",
      "Blood supply": "Anterior tibial artery."
    },
    clinical: "Works with tibialis anterior in dorsiflexion; impaired in deep fibular nerve injury."
  },
  {
    id: "fibularis-tertius",
    name: "Fibularis tertius (peroneus tertius)",
    latin: "Musculus fibularis tertius",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Small anterior compartment muscle (a partially separated part of extensor digitorum longus) that aids dorsiflexion and eversion.",
    details: {
      "Origin": "Distal anterior surface of the fibula and interosseous membrane.",
      "Insertion": "Base of the fifth metatarsal.",
      "Innervation": "Deep fibular (peroneal) nerve (L5, S1).",
      "Action": "Dorsiflexes the ankle and everts the foot.",
      "Blood supply": "Anterior tibial artery."
    },
    clinical: "Variably present; despite everting the foot it is supplied by the deep fibular nerve (anterior compartment)."
  },
  // ===================== LOWER LIMB: LEG LATERAL =====================
  {
    id: "fibularis-longus",
    name: "Fibularis longus (peroneus longus)",
    latin: "Musculus fibularis longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Superficial lateral compartment leg muscle that everts the foot and supports the arches.",
    details: {
      "Origin": "Head and proximal two-thirds of the lateral surface of the fibula.",
      "Insertion": "Medial cuneiform and base of the first metatarsal (crossing the sole obliquely).",
      "Innervation": "Superficial fibular (peroneal) nerve (L5, S1–S2).",
      "Action": "Everts and plantarflexes the foot; supports the transverse and lateral longitudinal arches.",
      "Blood supply": "Fibular (peroneal) artery."
    },
    clinical: "The common fibular nerve winds around the fibular neck (deep to fibularis longus origin), where it is vulnerable to compression causing foot drop."
  },
  {
    id: "fibularis-brevis",
    name: "Fibularis brevis (peroneus brevis)",
    latin: "Musculus fibularis brevis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deeper lateral compartment leg muscle that everts the foot.",
    details: {
      "Origin": "Distal two-thirds of the lateral surface of the fibula.",
      "Insertion": "Tuberosity of the base of the fifth metatarsal.",
      "Innervation": "Superficial fibular (peroneal) nerve (L5, S1–S2).",
      "Action": "Everts and weakly plantarflexes the foot.",
      "Blood supply": "Fibular (peroneal) artery."
    },
    clinical: "Forceful inversion can avulse its insertion at the fifth metatarsal base (avulsion fracture)."
  },
  // ===================== LOWER LIMB: LEG POSTERIOR SUPERFICIAL =====================
  {
    id: "gastrocnemius",
    name: "Gastrocnemius",
    latin: "Musculus gastrocnemius",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Large two-headed superficial calf muscle; plantarflexes the ankle and flexes the knee.",
    details: {
      "Origin": "Lateral head from the lateral femoral condyle; medial head from the popliteal surface above the medial condyle.",
      "Insertion": "Posterior calcaneus via the calcaneal (Achilles) tendon.",
      "Innervation": "Tibial nerve (S1–S2).",
      "Action": "Plantarflexes the ankle (powerful in running/jumping) and flexes the knee.",
      "Blood supply": "Sural arteries (from the popliteal artery)."
    },
    clinical: "Forms the bulk of the calf and the superolateral/medial borders of the popliteal fossa; medial head tears cause 'tennis leg'."
  },
  {
    id: "soleus",
    name: "Soleus",
    latin: "Musculus soleus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Broad flat calf muscle deep to gastrocnemius; the workhorse plantarflexor and a venous pump.",
    details: {
      "Origin": "Soleal line and posterior surface of the tibia and the posterior head/proximal fibula (soleal arch).",
      "Insertion": "Posterior calcaneus via the calcaneal (Achilles) tendon.",
      "Innervation": "Tibial nerve (S1–S2).",
      "Action": "Plantarflexes the ankle; maintains upright posture; acts as a 'peripheral heart' pumping venous blood.",
      "Blood supply": "Posterior tibial, fibular and sural arteries."
    },
    clinical: "Soleal vein sinuses are a common site of deep vein thrombosis; with gastrocnemius forms the triceps surae."
  },
  {
    id: "plantaris",
    name: "Plantaris",
    latin: "Musculus plantaris",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Small muscle with a long slender tendon in the superficial posterior leg; weakly aids plantarflexion.",
    details: {
      "Origin": "Lateral supracondylar line of the femur, above the lateral head of gastrocnemius.",
      "Insertion": "Posterior calcaneus (medial to the calcaneal tendon).",
      "Innervation": "Tibial nerve (S1–S2).",
      "Action": "Weakly assists plantarflexion of the ankle and flexion of the knee; provides proprioception.",
      "Blood supply": "Sural arteries (from the popliteal artery)."
    },
    clinical: "Often absent; its long tendon is used for tendon grafts, and its rupture can mimic an Achilles tear."
  },
  // ===================== LOWER LIMB: LEG POSTERIOR DEEP =====================
  {
    id: "popliteus",
    name: "Popliteus",
    latin: "Musculus popliteus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deep muscle of the popliteal fossa that 'unlocks' the extended knee.",
    details: {
      "Origin": "Lateral surface of the lateral femoral condyle and lateral meniscus.",
      "Insertion": "Posterior surface of the tibia above the soleal line.",
      "Innervation": "Tibial nerve (L4–L5, S1).",
      "Action": "Laterally rotates the femur on the fixed tibia ('unlocking' the fully extended knee to initiate flexion); medially rotates the tibia on the femur.",
      "Blood supply": "Popliteal artery (muscular and genicular branches)."
    },
    clinical: "Essential for unlocking the screwed-home knee before flexion; also retracts the lateral meniscus to prevent entrapment."
  },
  {
    id: "tibialis-posterior",
    name: "Tibialis posterior",
    latin: "Musculus tibialis posterior",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deepest muscle of the posterior leg; the principal invertor and a key support of the medial arch.",
    details: {
      "Origin": "Interosseous membrane and adjacent posterior surfaces of the tibia and fibula.",
      "Insertion": "Navicular tuberosity, cuneiforms, cuboid and bases of metatarsals 2–4.",
      "Innervation": "Tibial nerve (L4–L5).",
      "Action": "Inverts and plantarflexes the foot; supports the medial longitudinal arch.",
      "Blood supply": "Posterior tibial and fibular arteries."
    },
    clinical: "Tibialis posterior tendon dysfunction is the leading cause of acquired adult flatfoot (pes planus)."
  },
  {
    id: "flexor-hallucis-longus",
    name: "Flexor hallucis longus",
    latin: "Musculus flexor hallucis longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deep posterior leg muscle that flexes the great toe and provides push-off.",
    details: {
      "Origin": "Distal two-thirds of the posterior surface of the fibula and interosseous membrane.",
      "Insertion": "Base of the distal phalanx of the great toe.",
      "Innervation": "Tibial nerve (S1–S2).",
      "Action": "Flexes the great toe and plantarflexes the ankle; supports the medial arch and provides toe-off in gait.",
      "Blood supply": "Fibular (peroneal) artery."
    },
    clinical: "Provides final push-off power; its tendon passes posterior to the medial malleolus and beneath the sustentaculum tali."
  },
  {
    id: "flexor-digitorum-longus",
    name: "Flexor digitorum longus",
    latin: "Musculus flexor digitorum longus",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Deep posterior leg muscle that flexes the lateral four toes.",
    details: {
      "Origin": "Medial part of the posterior surface of the tibia, below the soleal line.",
      "Insertion": "Bases of the distal phalanges of the lateral four toes.",
      "Innervation": "Tibial nerve (S1–S2).",
      "Action": "Flexes the lateral four toes and plantarflexes the ankle; supports the longitudinal arches.",
      "Blood supply": "Posterior tibial artery."
    },
    clinical: "Its tendon passes behind the medial malleolus within the tarsal tunnel (mnemonic 'Tom, Dick and Harry' ordering of tendons/vessels/nerve)."
  },
  // ===================== LOWER LIMB: FOOT INTRINSICS =====================
  {
    id: "extensor-digitorum-brevis",
    name: "Extensor digitorum brevis",
    latin: "Musculus extensor digitorum brevis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Intrinsic muscle on the dorsum of the foot that extends the medial toes (its medial slip is the extensor hallucis brevis).",
    details: {
      "Origin": "Superolateral surface of the calcaneus.",
      "Insertion": "Extensor expansions/proximal phalanges of toes 1–4 (medial slip to the great toe).",
      "Innervation": "Deep fibular (peroneal) nerve (L5, S1).",
      "Action": "Extends the metatarsophalangeal joints of the medial four toes.",
      "Blood supply": "Dorsalis pedis and lateral tarsal arteries."
    },
    clinical: "Forms a soft swelling on the lateral dorsum of the foot that can be mistaken for oedema; the only intrinsic muscle on the dorsum."
  },
  {
    id: "abductor-hallucis",
    name: "Abductor hallucis",
    latin: "Musculus abductor hallucis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "First-layer plantar muscle along the medial border of the foot; abducts the great toe.",
    details: {
      "Origin": "Medial process of the calcaneal tuberosity, flexor retinaculum and plantar aponeurosis.",
      "Insertion": "Medial side of the base of the proximal phalanx of the great toe.",
      "Innervation": "Medial plantar nerve (S1–S2).",
      "Action": "Abducts and flexes the great toe; supports the medial longitudinal arch.",
      "Blood supply": "Medial plantar artery."
    },
    clinical: "The tarsal tunnel and its contents pass deep to it; it can compress the nerve to abductor digiti minimi (Baxter neuropathy)."
  },
  {
    id: "flexor-digitorum-brevis",
    name: "Flexor digitorum brevis",
    latin: "Musculus flexor digitorum brevis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Central first-layer plantar muscle that flexes the lateral four toes.",
    details: {
      "Origin": "Medial process of the calcaneal tuberosity and plantar aponeurosis.",
      "Insertion": "Sides of the middle phalanges of the lateral four toes (each tendon splits, like FDS in the hand).",
      "Innervation": "Medial plantar nerve (S1–S2).",
      "Action": "Flexes the proximal interphalangeal joints of the lateral four toes; supports the longitudinal arch.",
      "Blood supply": "Medial and lateral plantar arteries."
    },
    clinical: "The foot analogue of flexor digitorum superficialis; supports the arch during stance."
  },
  {
    id: "abductor-digiti-minimi-foot",
    name: "Abductor digiti minimi (foot)",
    latin: "Musculus abductor digiti minimi pedis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "First-layer plantar muscle along the lateral border of the foot; abducts the little toe.",
    details: {
      "Origin": "Lateral and medial processes of the calcaneal tuberosity and plantar aponeurosis.",
      "Insertion": "Lateral side of the base of the proximal phalanx of the fifth toe.",
      "Innervation": "Lateral plantar nerve (S1–S3).",
      "Action": "Abducts and flexes the little toe; supports the lateral longitudinal arch.",
      "Blood supply": "Lateral plantar artery."
    },
    clinical: "Entrapment of its motor nerve (first branch of the lateral plantar nerve, Baxter nerve) is a cause of chronic heel pain."
  },
  {
    id: "quadratus-plantae",
    name: "Quadratus plantae",
    latin: "Musculus quadratus plantae",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Second-layer plantar muscle (flexor accessorius) that straightens the oblique pull of flexor digitorum longus.",
    details: {
      "Origin": "Medial and lateral margins of the plantar surface of the calcaneus.",
      "Insertion": "Lateral margin of the tendon of flexor digitorum longus.",
      "Innervation": "Lateral plantar nerve (S1–S3).",
      "Action": "Modifies the line of pull of flexor digitorum longus so it flexes the toes straight rather than obliquely.",
      "Blood supply": "Lateral plantar artery."
    },
    clinical: "Allows the long toe flexor to act in line with the toes during push-off."
  },
  {
    id: "lumbricals-foot",
    name: "Lumbricals of the foot",
    latin: "Musculi lumbricales pedis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Four small second-layer plantar muscles arising from the flexor digitorum longus tendons.",
    details: {
      "Origin": "Tendons of flexor digitorum longus.",
      "Insertion": "Medial sides of the extensor expansions of the lateral four toes.",
      "Innervation": "First lumbrical by the medial plantar nerve; lateral three by the lateral plantar nerve (S2–S3).",
      "Action": "Flex the metatarsophalangeal joints and extend the interphalangeal joints; resist toe clawing.",
      "Blood supply": "Plantar metatarsal arteries and plantar arch."
    },
    clinical: "Weakness contributes to clawing of the toes (e.g., in peripheral neuropathy)."
  },
  {
    id: "flexor-hallucis-brevis",
    name: "Flexor hallucis brevis",
    latin: "Musculus flexor hallucis brevis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Third-layer plantar muscle that flexes the great toe; contains the sesamoid bones.",
    details: {
      "Origin": "Plantar surfaces of the cuboid and lateral cuneiform.",
      "Insertion": "Medial and lateral sides of the base of the proximal phalanx of the great toe (two heads).",
      "Innervation": "Medial plantar nerve (S1–S2).",
      "Action": "Flexes the metatarsophalangeal joint of the great toe; supports the medial arch.",
      "Blood supply": "Medial plantar and plantar arch arteries."
    },
    clinical: "The two sesamoid bones in its tendons articulate beneath the first metatarsal head and may become inflamed (sesamoiditis)."
  },
  {
    id: "adductor-hallucis",
    name: "Adductor hallucis",
    latin: "Musculus adductor hallucis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Third-layer plantar muscle with oblique and transverse heads that adducts the great toe.",
    details: {
      "Origin": "Oblique head from the bases of metatarsals 2–4; transverse head from the plantar metatarsophalangeal ligaments of toes 3–5.",
      "Insertion": "Lateral side of the base of the proximal phalanx of the great toe.",
      "Innervation": "Deep branch of the lateral plantar nerve (S2–S3).",
      "Action": "Adducts the great toe and helps maintain the transverse arch of the foot.",
      "Blood supply": "Plantar arch and plantar metatarsal arteries."
    },
    clinical: "Weakness or imbalance contributes to hallux valgus (bunion) deformity."
  },
  {
    id: "flexor-digiti-minimi-brevis-foot",
    name: "Flexor digiti minimi brevis (foot)",
    latin: "Musculus flexor digiti minimi brevis pedis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Third-layer plantar muscle that flexes the little toe.",
    details: {
      "Origin": "Base of the fifth metatarsal and plantar fascia.",
      "Insertion": "Base of the proximal phalanx of the fifth toe.",
      "Innervation": "Superficial branch of the lateral plantar nerve (S2–S3).",
      "Action": "Flexes the metatarsophalangeal joint of the little toe.",
      "Blood supply": "Lateral plantar and plantar metatarsal arteries."
    },
    clinical: "The foot counterpart of the hand's flexor digiti minimi brevis."
  },
  {
    id: "dorsal-interossei-foot",
    name: "Dorsal interossei (foot)",
    latin: "Musculi interossei dorsales pedis",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Four bipennate fourth-layer muscles that abduct the toes from the second-toe axis.",
    details: {
      "Origin": "Adjacent sides of the metatarsals (each by two heads).",
      "Insertion": "Proximal phalanges and extensor expansions of toes 2–4.",
      "Innervation": "Lateral plantar nerve (S2–S3).",
      "Action": "Abduct toes 2–4 from the axis of the second toe; flex MTP and extend IP joints.",
      "Blood supply": "Plantar and dorsal metatarsal arteries."
    },
    clinical: "Reference axis for foot abduction/adduction is the second toe (unlike the hand's third digit)."
  },
  {
    id: "plantar-interossei",
    name: "Plantar interossei",
    latin: "Musculi interossei plantares",
    system: "muscular",
    category: "Muscle",
    region: "lower-limb",
    count: 2,
    description: "Three unipennate fourth-layer muscles that adduct the toes toward the second-toe axis.",
    details: {
      "Origin": "Bases and medial sides of metatarsals 3–5.",
      "Insertion": "Medial sides of the proximal phalanges and extensor expansions of toes 3–5.",
      "Innervation": "Lateral plantar nerve (S2–S3).",
      "Action": "Adduct toes 3–5 toward the second toe; flex MTP and extend IP joints.",
      "Blood supply": "Plantar metatarsal arteries and plantar arch."
    },
    clinical: "Adduct toes toward the second-toe axis (PAD); act with the lumbricals to stabilise the toes."
  }
];
