// Anatomy learning data: nervous system structures
// Defines window.ANATOMY_NERVES for the anatomy learning website.

window.ANATOMY_NERVES = [
  // ===================== CRANIAL NERVES (CN I–XII) =====================
  {
    id: "olfactory-nerve",
    name: "Olfactory nerve (CN I)",
    latin: "Nervus olfactorius",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Special sensory cranial nerve carrying the sense of smell. Olfactory receptor neurons in the nasal mucosa project central processes that synapse in the olfactory bulb.",
    details: {
      "Roots": "Bipolar olfactory receptor neurons of the olfactory epithelium (roof of nasal cavity).",
      "Course": "Filaments pass superiorly through the cribriform plate of the ethmoid bone to synapse in the olfactory bulb; relayed via the olfactory tract.",
      "Sensory": "Special sensory — smell (olfaction) from the nasal mucosa.",
      "Branches": "Olfactory bulb and tract; medial and lateral olfactory striae."
    },
    clinical: "Anosmia may follow cribriform plate fractures or shearing of the olfactory filaments, and unilateral loss is tested with non-irritant odors."
  },
  {
    id: "optic-nerve",
    name: "Optic nerve (CN II)",
    latin: "Nervus opticus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Special sensory nerve transmitting visual information from the retina. It is a CNS tract ensheathed by meninges rather than a true peripheral nerve.",
    details: {
      "Roots": "Retinal ganglion cell axons.",
      "Course": "Exits the orbit through the optic canal, fibers partially decussate at the optic chiasm, then continue as the optic tract to the lateral geniculate nucleus.",
      "Sensory": "Special sensory — vision; afferent limb of the pupillary light reflex.",
      "Branches": "Optic chiasm, optic tract; central retinal artery travels within its sheath."
    },
    clinical: "Papilledema reflects raised intracranial pressure transmitted along the optic nerve sheath; chiasmal lesions (e.g., pituitary tumor) produce bitemporal hemianopia."
  },
  {
    id: "oculomotor-nerve",
    name: "Oculomotor nerve (CN III)",
    latin: "Nervus oculomotorius",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Motor nerve to most extraocular muscles and the parasympathetic supply to the pupil and lens. Arises from the midbrain.",
    details: {
      "Roots": "Oculomotor nucleus and Edinger–Westphal nucleus (parasympathetic) in the midbrain.",
      "Course": "Emerges from the interpeduncular fossa, passes through the cavernous sinus, and exits via the superior orbital fissure.",
      "Motor": "Superior, inferior, and medial recti; inferior oblique; levator palpebrae superioris.",
      "Sensory": "None (general sensory); parasympathetic to sphincter pupillae and ciliary muscle.",
      "Branches": "Superior and inferior divisions; parasympathetic fibers synapse in the ciliary ganglion."
    },
    clinical: "A complete palsy causes a 'down-and-out' eye, ptosis, and a fixed dilated pupil; pupil-sparing palsies suggest an ischemic (diabetic) cause."
  },
  {
    id: "trochlear-nerve",
    name: "Trochlear nerve (CN IV)",
    latin: "Nervus trochlearis",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Smallest cranial nerve and the only one to exit the dorsal brainstem; supplies the superior oblique muscle.",
    details: {
      "Roots": "Trochlear nucleus in the midbrain (at the inferior colliculus level).",
      "Course": "Decussates and emerges dorsally below the inferior colliculus, curves around the midbrain, traverses the cavernous sinus, and exits the superior orbital fissure.",
      "Motor": "Superior oblique muscle (depresses, intorts, and abducts the eye).",
      "Sensory": "None.",
      "Branches": "No named extracranial branches."
    },
    clinical: "Palsy causes vertical diplopia worse on downgaze (difficulty descending stairs); patients tilt the head away from the affected side."
  },
  {
    id: "trigeminal-nerve",
    name: "Trigeminal nerve (CN V)",
    latin: "Nervus trigeminus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Largest cranial nerve; principal sensory nerve of the face and motor nerve to the muscles of mastication, with three divisions.",
    details: {
      "Roots": "Sensory and motor nuclei in the pons; trigeminal (Gasserian) ganglion houses sensory cell bodies.",
      "Course": "Exits the pons; V1 (ophthalmic) via the superior orbital fissure, V2 (maxillary) via foramen rotundum, V3 (mandibular) via foramen ovale.",
      "Motor": "Muscles of mastication (masseter, temporalis, pterygoids), mylohyoid, anterior digastric, tensor tympani, tensor veli palatini (via V3).",
      "Sensory": "General sensation of the face, anterior two-thirds of the tongue, oral and nasal mucosa, and the dura.",
      "Branches": "Ophthalmic (V1), maxillary (V2), and mandibular (V3) divisions."
    },
    clinical: "Trigeminal neuralgia causes paroxysmal lancinating facial pain, often in the V2/V3 territory triggered by light touch."
  },
  {
    id: "abducens-nerve",
    name: "Abducens nerve (CN VI)",
    latin: "Nervus abducens",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Motor nerve supplying the lateral rectus muscle, which abducts the eye. Has a long intracranial course making it vulnerable to raised pressure.",
    details: {
      "Roots": "Abducens nucleus in the pons (at the floor of the fourth ventricle).",
      "Course": "Emerges at the pontomedullary junction, ascends along the clivus, passes through the cavernous sinus, and exits the superior orbital fissure.",
      "Motor": "Lateral rectus muscle.",
      "Sensory": "None.",
      "Branches": "No named branches."
    },
    clinical: "Palsy causes failure of abduction with horizontal diplopia; it is a common false-localizing sign in raised intracranial pressure."
  },
  {
    id: "facial-nerve",
    name: "Facial nerve (CN VII)",
    latin: "Nervus facialis",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Mixed nerve supplying the muscles of facial expression, taste to the anterior tongue, and parasympathetic secretomotor fibers to several glands.",
    details: {
      "Roots": "Facial motor nucleus, superior salivatory nucleus, and nucleus solitarius in the pons; geniculate ganglion.",
      "Course": "Exits at the cerebellopontine angle, enters the internal acoustic meatus, traverses the facial canal, and exits the stylomastoid foramen.",
      "Motor": "Muscles of facial expression, stapedius, stylohyoid, posterior digastric.",
      "Sensory": "Taste from anterior two-thirds of the tongue (via chorda tympani).",
      "Branches": "Greater petrosal, nerve to stapedius, chorda tympani; terminal: temporal, zygomatic, buccal, marginal mandibular, cervical."
    },
    clinical: "Bell's palsy is a lower-motor-neuron palsy affecting the whole hemiface; central (UMN) lesions spare the forehead due to bilateral cortical input."
  },
  {
    id: "vestibulocochlear-nerve",
    name: "Vestibulocochlear nerve (CN VIII)",
    latin: "Nervus vestibulocochlearis",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Special sensory nerve for hearing and balance, with cochlear and vestibular components.",
    details: {
      "Roots": "Spiral ganglion (cochlear) and vestibular (Scarpa's) ganglion; nuclei in the pontomedullary junction.",
      "Course": "Runs from the inner ear through the internal acoustic meatus to the cerebellopontine angle to enter the brainstem.",
      "Sensory": "Special sensory — hearing (cochlear) and balance/equilibrium (vestibular).",
      "Branches": "Cochlear and vestibular divisions."
    },
    clinical: "An acoustic neuroma (vestibular schwannoma) at the cerebellopontine angle causes sensorineural hearing loss, tinnitus, and imbalance."
  },
  {
    id: "glossopharyngeal-nerve",
    name: "Glossopharyngeal nerve (CN IX)",
    latin: "Nervus glossopharyngeus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Mixed nerve supplying the stylopharyngeus, taste and sensation to the posterior tongue, and parasympathetic fibers to the parotid gland.",
    details: {
      "Roots": "Nucleus ambiguus, inferior salivatory nucleus, and nucleus solitarius in the medulla.",
      "Course": "Emerges from the medulla and exits the skull through the jugular foramen.",
      "Motor": "Stylopharyngeus muscle.",
      "Sensory": "Posterior third of the tongue (taste and general), pharynx, carotid body and sinus, middle ear.",
      "Branches": "Tympanic nerve (lesser petrosal), carotid sinus branch, pharyngeal and tonsillar branches."
    },
    clinical: "It forms the afferent limb of the gag reflex; glossopharyngeal neuralgia causes throat pain triggered by swallowing."
  },
  {
    id: "vagus-nerve",
    name: "Vagus nerve (CN X)",
    latin: "Nervus vagus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Longest cranial nerve with extensive parasympathetic supply to thoracic and abdominal viscera, plus motor supply to the pharynx and larynx.",
    details: {
      "Roots": "Nucleus ambiguus, dorsal motor nucleus of vagus, and nucleus solitarius in the medulla.",
      "Course": "Exits the medulla, passes through the jugular foramen, descends in the carotid sheath into the thorax and abdomen.",
      "Motor": "Pharyngeal constrictors, palate (except tensor veli palatini), and intrinsic laryngeal muscles.",
      "Sensory": "Laryngopharynx, larynx, and visceral afferents from thoracic and abdominal organs; parasympathetic to viscera up to the splenic flexure.",
      "Branches": "Pharyngeal, superior laryngeal, recurrent laryngeal, cardiac, and abdominal branches."
    },
    clinical: "Unilateral lesion causes uvular deviation away from the affected side and hoarseness; it forms the efferent limb of the gag reflex."
  },
  {
    id: "accessory-nerve",
    name: "Accessory nerve (CN XI)",
    latin: "Nervus accessorius",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Motor nerve supplying the sternocleidomastoid and trapezius muscles via its spinal root.",
    details: {
      "Roots": "Spinal root from the upper cervical cord (C1–C5/C6 anterior horn); cranial root contributes to the vagus.",
      "Course": "Spinal root ascends through the foramen magnum, exits the jugular foramen, then descends through the posterior triangle of the neck.",
      "Motor": "Sternocleidomastoid and trapezius muscles.",
      "Sensory": "None.",
      "Branches": "Cranial and spinal roots; muscular branches."
    },
    clinical: "Injury in the posterior triangle (e.g., lymph node biopsy) causes trapezius weakness with shoulder droop and impaired shrug."
  },
  {
    id: "hypoglossal-nerve",
    name: "Hypoglossal nerve (CN XII)",
    latin: "Nervus hypoglossus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Motor nerve supplying the intrinsic and most extrinsic muscles of the tongue.",
    details: {
      "Roots": "Hypoglossal nucleus in the medulla.",
      "Course": "Emerges between the pyramid and olive, exits through the hypoglossal canal, and passes into the floor of the mouth.",
      "Motor": "All intrinsic tongue muscles and the genioglossus, hyoglossus, and styloglossus (not palatoglossus).",
      "Sensory": "None.",
      "Branches": "Muscular branches to the tongue (carries C1 fibers to geniohyoid and thyrohyoid)."
    },
    clinical: "A lower-motor-neuron lesion causes the tongue to deviate toward the affected side on protrusion, with ipsilateral atrophy."
  },

  // ===================== CNS STRUCTURES =====================
  {
    id: "cerebrum",
    name: "Cerebrum (cerebral hemispheres)",
    latin: "Cerebrum",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "The largest part of the brain, comprising paired hemispheres with an outer cortex and four lobes responsible for higher cognition, sensation, and voluntary movement.",
    details: {
      "Course": "Two hemispheres connected by the corpus callosum, each containing frontal, parietal, temporal, and occipital lobes plus the insula.",
      "Motor": "Primary motor cortex (precentral gyrus, frontal lobe) initiates voluntary movement.",
      "Sensory": "Primary somatosensory cortex (postcentral gyrus, parietal lobe); occipital lobe for vision; temporal lobe for hearing and memory.",
      "Branches": "Frontal, parietal, temporal, and occipital lobes; basal ganglia and limbic structures lie deep within."
    },
    clinical: "Middle cerebral artery strokes commonly cause contralateral hemiparesis and, in the dominant hemisphere, aphasia."
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    latin: "Cerebellum",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Hindbrain structure that coordinates movement, balance, and motor learning by integrating sensory input with motor commands.",
    details: {
      "Course": "Lies in the posterior cranial fossa dorsal to the pons and medulla; connected to the brainstem by superior, middle, and inferior cerebellar peduncles.",
      "Motor": "Coordinates timing, smoothness, and balance of movement (does not initiate it).",
      "Sensory": "Receives proprioceptive, vestibular, and visual input.",
      "Branches": "Vermis (midline), two hemispheres; flocculonodular, anterior, and posterior lobes."
    },
    clinical: "Cerebellar lesions cause ipsilateral ataxia, dysmetria, intention tremor, dysdiadochokinesia, and nystagmus."
  },
  {
    id: "midbrain",
    name: "Midbrain (mesencephalon)",
    latin: "Mesencephalon",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Most superior part of the brainstem connecting the pons and diencephalon; contains visual and auditory reflex centers and dopaminergic nuclei.",
    details: {
      "Course": "Traversed by the cerebral aqueduct; consists of the tectum (colliculi), tegmentum, and cerebral peduncles.",
      "Motor": "Origin of CN III and IV; substantia nigra and red nucleus modulate movement.",
      "Sensory": "Superior colliculi (visual reflexes) and inferior colliculi (auditory relay).",
      "Branches": "Tectum, tegmentum, cerebral peduncles; periaqueductal gray."
    },
    clinical: "Degeneration of the substantia nigra causes Parkinson's disease; dorsal midbrain (Parinaud) syndrome impairs upward gaze."
  },
  {
    id: "pons",
    name: "Pons",
    latin: "Pons",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Middle part of the brainstem relaying signals between the cerebrum and cerebellum and housing several cranial nerve nuclei.",
    details: {
      "Course": "Lies between the midbrain and medulla, anterior to the cerebellum; contains the pontine nuclei and reticular formation.",
      "Motor": "Nuclei of CN V (motor), VI, and VII; pneumotaxic respiratory centers.",
      "Sensory": "Nuclei of CN V (sensory) and VIII; ascending and descending tracts pass through.",
      "Branches": "Basis pontis and pontine tegmentum."
    },
    clinical: "Central pontine myelinolysis follows rapid correction of hyponatremia and can cause locked-in syndrome."
  },
  {
    id: "medulla-oblongata",
    name: "Medulla oblongata",
    latin: "Medulla oblongata",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Most inferior brainstem segment continuous with the spinal cord; contains vital autonomic centers for cardiovascular and respiratory control.",
    details: {
      "Course": "Extends from the pontomedullary junction to the foramen magnum; pyramids and olives lie on its anterior surface.",
      "Motor": "Nuclei of CN IX, X, XI, and XII; pyramidal decussation of corticospinal tracts.",
      "Sensory": "Nucleus solitarius and dorsal column nuclei (gracilis and cuneatus).",
      "Branches": "Pyramids, olives, cardiovascular and respiratory centers."
    },
    clinical: "Lateral medullary (Wallenberg) syndrome from PICA occlusion causes ipsilateral facial and contralateral body sensory loss, vertigo, and dysphagia."
  },
  {
    id: "diencephalon",
    name: "Diencephalon (thalamus and hypothalamus)",
    latin: "Diencephalon",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Central forebrain region surrounding the third ventricle, comprising the thalamus, hypothalamus, epithalamus, and subthalamus.",
    details: {
      "Course": "Lies between the brainstem and cerebrum, bordering the third ventricle.",
      "Motor": "Subthalamic nucleus and thalamic motor relays participate in basal ganglia circuits.",
      "Sensory": "Thalamus is the major sensory relay station to the cortex (except olfaction).",
      "Branches": "Thalamus, hypothalamus (autonomic/endocrine control), epithalamus (pineal gland), subthalamus."
    },
    clinical: "Thalamic strokes cause contralateral hemisensory loss and, later, the burning Déjerine–Roussy thalamic pain syndrome."
  },
  {
    id: "spinal-cord",
    name: "Spinal cord",
    latin: "Medulla spinalis",
    system: "nervous",
    category: "CNS structure",
    region: "spine-back",
    count: 1,
    description: "The CNS conduit within the vertebral canal carrying ascending sensory and descending motor tracts and mediating spinal reflexes.",
    details: {
      "Course": "Extends from the foramen magnum to the conus medullaris (~L1–L2 in adults); continues as the cauda equina and filum terminale.",
      "Motor": "Descending corticospinal tracts and anterior horn lower motor neurons; cervical and lumbosacral enlargements supply the limbs.",
      "Sensory": "Ascending dorsal columns (fine touch/proprioception) and spinothalamic tracts (pain/temperature).",
      "Branches": "31 pairs of spinal nerves; gray matter (horns) and white matter (columns/tracts)."
    },
    clinical: "Brown-Séquard (hemisection) syndrome causes ipsilateral motor and dorsal-column loss with contralateral pain/temperature loss below the lesion."
  },
  {
    id: "basal-ganglia",
    name: "Basal ganglia",
    latin: "Nuclei basales",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "Group of subcortical nuclei that modulate voluntary movement initiation, suppression of unwanted movement, and motor learning.",
    details: {
      "Course": "Deep gray matter nuclei surrounding the thalamus; connected via direct and indirect pathways.",
      "Motor": "Regulate movement amplitude and selection through cortico-basal ganglia-thalamic loops.",
      "Branches": "Caudate nucleus, putamen, globus pallidus, subthalamic nucleus, and substantia nigra."
    },
    clinical: "Dysfunction produces movement disorders: Parkinsonism (hypokinetic), Huntington's chorea, and hemiballismus (subthalamic nucleus lesion)."
  },
  {
    id: "hippocampus",
    name: "Hippocampus",
    latin: "Hippocampus",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 2,
    description: "Medial temporal lobe limbic structure essential for the formation of new declarative memories and spatial navigation.",
    details: {
      "Course": "Lies in the floor of the inferior horn of the lateral ventricle; outputs via the fornix to the mammillary bodies.",
      "Sensory": "Integrates multimodal cortical input for memory consolidation.",
      "Branches": "Dentate gyrus, cornu ammonis (CA1–CA4), subiculum; fornix is its main efferent."
    },
    clinical: "Bilateral hippocampal damage causes anterograde amnesia; it is highly vulnerable to hypoxia and is an early site of Alzheimer atrophy."
  },
  {
    id: "corpus-callosum",
    name: "Corpus callosum",
    latin: "Corpus callosum",
    system: "nervous",
    category: "CNS structure",
    region: "head-neck",
    count: 1,
    description: "The largest commissure of the brain, connecting the two cerebral hemispheres and enabling interhemispheric communication.",
    details: {
      "Course": "Arches over the lateral ventricles, forming the roof of the body of the lateral ventricles.",
      "Branches": "Rostrum, genu, body, and splenium; the genu forms the forceps minor and the splenium the forceps major."
    },
    clinical: "Surgical section (callosotomy) for epilepsy produces disconnection (split-brain) syndromes; agenesis is a developmental anomaly."
  },

  // ===================== CERVICAL PLEXUS =====================
  {
    id: "cervical-plexus",
    name: "Cervical plexus",
    latin: "Plexus cervicalis",
    system: "nervous",
    category: "Plexus",
    region: "head-neck",
    count: 2,
    description: "Nerve plexus formed by the anterior rami of C1–C4, supplying cutaneous sensation to the neck and motor branches to several neck and diaphragm muscles.",
    details: {
      "Roots": "Anterior rami of C1–C4.",
      "Course": "Lies deep to the sternocleidomastoid, anterior to the scalenus medius and levator scapulae.",
      "Motor": "Phrenic nerve (diaphragm), ansa cervicalis (infrahyoid strap muscles), branches to prevertebral muscles.",
      "Sensory": "Lesser occipital, greater auricular, transverse cervical, and supraclavicular nerves to the skin of the neck and shoulder.",
      "Branches": "Cutaneous (lesser occipital, greater auricular, transverse cervical, supraclavicular) and muscular (phrenic, ansa cervicalis)."
    },
    clinical: "A cervical plexus (superficial) block at the posterior border of sternocleidomastoid anesthetizes the anterolateral neck for surgery."
  },
  {
    id: "phrenic-nerve",
    name: "Phrenic nerve",
    latin: "Nervus phrenicus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Main motor nerve to the diaphragm, providing the principal innervation for respiration. 'C3, 4, 5 keep the diaphragm alive.'",
    details: {
      "Roots": "C3, C4, C5 (mainly C4).",
      "Course": "Descends on the anterior surface of the scalenus anterior, enters the thorax, and runs anterior to the lung root over the pericardium to the diaphragm.",
      "Motor": "Diaphragm (sole motor supply).",
      "Sensory": "Central diaphragm, pericardium, mediastinal and diaphragmatic pleura.",
      "Branches": "Pericardial and phrenicoabdominal branches."
    },
    clinical: "Injury or compression causes ipsilateral diaphragmatic paralysis; diaphragmatic irritation refers pain to the shoulder tip (C3–C4 dermatome)."
  },
  {
    id: "ansa-cervicalis",
    name: "Ansa cervicalis",
    latin: "Ansa cervicalis",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "A nerve loop in the neck supplying the infrahyoid (strap) muscles, formed from C1–C3.",
    details: {
      "Roots": "Superior root (C1 fibers carried by the hypoglossal nerve) and inferior root (C2–C3).",
      "Course": "Lies on or within the carotid sheath in the anterior triangle of the neck.",
      "Motor": "Sternohyoid, sternothyroid, and omohyoid muscles (thyrohyoid and geniohyoid are supplied by C1 directly via CN XII).",
      "Sensory": "None.",
      "Branches": "Superior and inferior roots forming the loop."
    },
    clinical: "It may be sacrificed or used as a donor for reinnervation in laryngeal reanimation surgery."
  },
  {
    id: "greater-auricular-nerve",
    name: "Greater auricular nerve",
    latin: "Nervus auricularis magnus",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Largest ascending cutaneous branch of the cervical plexus, supplying skin over the parotid and ear.",
    details: {
      "Roots": "C2 and C3.",
      "Course": "Emerges at the posterior border of sternocleidomastoid and ascends across the muscle toward the parotid and ear.",
      "Sensory": "Skin over the parotid gland, angle of the mandible, and lower auricle.",
      "Branches": "Anterior and posterior branches."
    },
    clinical: "It is frequently used as a nerve graft and is at risk during parotid and facelift surgery, where injury causes ear-lobe numbness."
  },
  {
    id: "transverse-cervical-nerve",
    name: "Transverse cervical nerve",
    latin: "Nervus transversus colli",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Cutaneous branch of the cervical plexus supplying the skin of the anterior neck.",
    details: {
      "Roots": "C2 and C3.",
      "Course": "Curves around the posterior border of sternocleidomastoid and runs transversely across the muscle deep to the platysma.",
      "Sensory": "Skin of the anterior triangle of the neck.",
      "Branches": "Ascending and descending branches."
    },
    clinical: "It is anesthetized in superficial cervical plexus blocks for anterior neck procedures such as carotid endarterectomy."
  },
  {
    id: "supraclavicular-nerves",
    name: "Supraclavicular nerves",
    latin: "Nervi supraclaviculares",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Cutaneous branches of the cervical plexus that fan out over the shoulder and upper chest.",
    details: {
      "Roots": "C3 and C4.",
      "Course": "Descend from the posterior border of sternocleidomastoid across the clavicle.",
      "Sensory": "Skin over the lower neck, clavicle, shoulder, and upper chest (down to the 2nd rib).",
      "Branches": "Medial, intermediate, and lateral supraclavicular nerves."
    },
    clinical: "Because of their C3–C4 origin, diaphragmatic (phrenic) pain can refer to the supraclavicular/shoulder region."
  },
  {
    id: "lesser-occipital-nerve",
    name: "Lesser occipital nerve",
    latin: "Nervus occipitalis minor",
    system: "nervous",
    category: "Nerve",
    region: "head-neck",
    count: 2,
    description: "Cutaneous branch of the cervical plexus supplying skin behind the ear.",
    details: {
      "Roots": "C2 (with some C3).",
      "Course": "Ascends along the posterior border of sternocleidomastoid toward the scalp.",
      "Sensory": "Skin of the scalp posterosuperior to the auricle and the upper medial auricle.",
      "Branches": "Auricular and occipital branches."
    },
    clinical: "It can be involved in occipital neuralgia, producing posterolateral scalp pain."
  },

  // ===================== BRACHIAL PLEXUS =====================
  {
    id: "brachial-plexus",
    name: "Brachial plexus",
    latin: "Plexus brachialis",
    system: "nervous",
    category: "Plexus",
    region: "upper-limb",
    count: 2,
    description: "Network of nerves supplying the upper limb, formed by the anterior rami of C5–T1, organized into roots, trunks, divisions, cords, and branches.",
    details: {
      "Roots": "Anterior rami of C5, C6, C7, C8, and T1.",
      "Course": "Roots pass between scalenus anterior and medius; trunks cross the posterior triangle; divisions pass behind the clavicle; cords surround the axillary artery.",
      "Motor": "Supplies all muscles of the upper limb and shoulder girdle (except trapezius).",
      "Sensory": "Cutaneous innervation of the upper limb (except the upper-medial arm, supplied by the intercostobrachial nerve).",
      "Branches": "Trunks (superior C5–C6, middle C7, inferior C8–T1); anterior/posterior divisions; lateral, posterior, and medial cords; terminal branches."
    },
    clinical: "Upper trunk injury (Erb's palsy, C5–C6) gives a 'waiter's tip' posture; lower trunk injury (Klumpke's, C8–T1) causes a clawed hand."
  },
  {
    id: "musculocutaneous-nerve",
    name: "Musculocutaneous nerve",
    latin: "Nervus musculocutaneus",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Terminal branch of the lateral cord supplying the anterior arm flexors and skin of the lateral forearm.",
    details: {
      "Roots": "C5, C6, C7 (lateral cord).",
      "Course": "Pierces coracobrachialis and runs between biceps brachii and brachialis, emerging laterally at the elbow.",
      "Motor": "Coracobrachialis, biceps brachii, and brachialis.",
      "Sensory": "Lateral forearm skin (as the lateral cutaneous nerve of the forearm).",
      "Branches": "Muscular branches; continues as the lateral antebrachial cutaneous nerve."
    },
    clinical: "Injury causes weak elbow flexion and supination with loss of the biceps reflex and lateral forearm numbness."
  },
  {
    id: "median-nerve",
    name: "Median nerve",
    latin: "Nervus medianus",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Major nerve of the anterior forearm and hand, supplying most flexor muscles and the thenar eminence; the 'labourer's nerve.'",
    details: {
      "Roots": "C6, C7, C8, T1 (lateral and medial cords).",
      "Course": "Descends through the arm without branching, passes between the heads of pronator teres, and enters the hand through the carpal tunnel.",
      "Motor": "Most anterior forearm flexors, thenar muscles (LOAF: lateral two lumbricals, opponens pollicis, abductor pollicis brevis, flexor pollicis brevis).",
      "Sensory": "Palmar lateral three-and-a-half digits and corresponding palm; dorsal fingertips.",
      "Branches": "Anterior interosseous nerve, palmar cutaneous branch, recurrent (thenar) branch."
    },
    clinical: "Carpal tunnel syndrome causes thenar wasting and numbness of the radial three-and-a-half digits, with a positive Tinel/Phalen sign."
  },
  {
    id: "ulnar-nerve",
    name: "Ulnar nerve",
    latin: "Nervus ulnaris",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Terminal branch of the medial cord supplying intrinsic hand muscles and the medial one-and-a-half digits; the 'musician's nerve.'",
    details: {
      "Roots": "C8, T1 (medial cord; sometimes C7).",
      "Course": "Passes posterior to the medial epicondyle (the 'funny bone'), enters the forearm between the heads of flexor carpi ulnaris, and crosses into the hand via Guyon's canal.",
      "Motor": "Flexor carpi ulnaris, medial half of flexor digitorum profundus, and most intrinsic hand muscles (hypothenar, interossei, medial two lumbricals, adductor pollicis).",
      "Sensory": "Medial one-and-a-half digits and the corresponding palm and dorsum of the hand.",
      "Branches": "Muscular, palmar and dorsal cutaneous, superficial and deep terminal branches."
    },
    clinical: "Damage at the elbow causes an 'ulnar claw' (less marked than distal lesions due to the ulnar paradox) with weakness of finger abduction and a positive Froment's sign."
  },
  {
    id: "radial-nerve",
    name: "Radial nerve",
    latin: "Nervus radialis",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Largest branch of the brachial plexus and continuation of the posterior cord, supplying all extensor muscles of the arm and forearm.",
    details: {
      "Roots": "C5, C6, C7, C8, T1 (posterior cord).",
      "Course": "Spirals around the humerus in the radial groove, then divides at the elbow into superficial (sensory) and deep (posterior interosseous, motor) branches.",
      "Motor": "Triceps brachii, anconeus, brachioradialis, and all forearm extensors and supinator.",
      "Sensory": "Posterior arm and forearm; dorsolateral hand and dorsum of the lateral three-and-a-half digits (proximal to nail beds).",
      "Branches": "Posterior cutaneous nerves of arm/forearm, superficial radial, deep (posterior interosseous) nerve."
    },
    clinical: "Mid-shaft humeral fractures injure the nerve in the radial groove, producing wrist drop and loss of triceps power if proximal."
  },
  {
    id: "axillary-nerve",
    name: "Axillary nerve",
    latin: "Nervus axillaris",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Terminal branch of the posterior cord supplying the deltoid and teres minor and skin over the shoulder.",
    details: {
      "Roots": "C5, C6 (posterior cord).",
      "Course": "Passes through the quadrangular space with the posterior circumflex humeral artery, wrapping around the surgical neck of the humerus.",
      "Motor": "Deltoid and teres minor.",
      "Sensory": "Skin over the inferior deltoid (the 'regimental badge' area) via the superior lateral cutaneous nerve of the arm.",
      "Branches": "Anterior, posterior, and articular branches."
    },
    clinical: "Surgical neck fractures or anterior shoulder dislocation injure the nerve, causing deltoid weakness and regimental-badge numbness."
  },
  {
    id: "suprascapular-nerve",
    name: "Suprascapular nerve",
    latin: "Nervus suprascapularis",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Branch of the upper trunk supplying two rotator cuff muscles.",
    details: {
      "Roots": "C5, C6 (superior trunk).",
      "Course": "Passes laterally through the suprascapular notch beneath the superior transverse scapular ligament to the supraspinous and infraspinous fossae.",
      "Motor": "Supraspinatus (initiates abduction) and infraspinatus (lateral rotation).",
      "Sensory": "Glenohumeral and acromioclavicular joints (articular).",
      "Branches": "Muscular and articular branches."
    },
    clinical: "Entrapment at the suprascapular notch causes deep shoulder pain and weakness of abduction initiation and external rotation."
  },
  {
    id: "long-thoracic-nerve",
    name: "Long thoracic nerve",
    latin: "Nervus thoracicus longus",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Nerve arising directly from the roots that supplies the serratus anterior. 'C5, 6, 7 raise your wings to heaven.'",
    details: {
      "Roots": "C5, C6, C7 (directly from roots).",
      "Course": "Descends on the superficial (external) surface of the serratus anterior along the medial axillary wall.",
      "Motor": "Serratus anterior.",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "Injury (e.g., axillary surgery or mastectomy) causes winging of the scapula and difficulty abducting the arm above 90 degrees."
  },
  {
    id: "thoracodorsal-nerve",
    name: "Thoracodorsal nerve",
    latin: "Nervus thoracodorsalis",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Branch of the posterior cord supplying the latissimus dorsi.",
    details: {
      "Roots": "C6, C7, C8 (posterior cord).",
      "Course": "Runs along the posterior axillary wall to the deep surface of the latissimus dorsi.",
      "Motor": "Latissimus dorsi (extension, adduction, medial rotation of the arm).",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "It is at risk during axillary node dissection; injury weakens arm adduction and medial rotation."
  },
  {
    id: "medial-pectoral-nerve",
    name: "Medial pectoral nerve",
    latin: "Nervus pectoralis medialis",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Branch of the medial cord supplying the pectoral muscles.",
    details: {
      "Roots": "C8, T1 (medial cord).",
      "Course": "Pierces pectoralis minor to reach pectoralis major.",
      "Motor": "Pectoralis minor and the lower (sternocostal) part of pectoralis major.",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "It is preserved during breast and axillary surgery to maintain pectoralis function for reconstruction."
  },
  {
    id: "lateral-pectoral-nerve",
    name: "Lateral pectoral nerve",
    latin: "Nervus pectoralis lateralis",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Branch of the lateral cord supplying the pectoralis major.",
    details: {
      "Roots": "C5, C6, C7 (lateral cord).",
      "Course": "Pierces the clavipectoral fascia to reach the deep surface of pectoralis major.",
      "Motor": "Pectoralis major (mainly clavicular head); communicates with the medial pectoral nerve.",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "Knowledge of its course guides nerve-sparing techniques in breast reconstruction."
  },
  {
    id: "dorsal-scapular-nerve",
    name: "Dorsal scapular nerve",
    latin: "Nervus dorsalis scapulae",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Root-level branch supplying the rhomboids and levator scapulae.",
    details: {
      "Roots": "C5 (directly from the root).",
      "Course": "Pierces scalenus medius and descends deep to levator scapulae along the medial scapular border.",
      "Motor": "Rhomboid major, rhomboid minor, and (partly) levator scapulae.",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "Injury causes lateral (winging) displacement of the scapula and weak scapular retraction."
  },
  {
    id: "medial-cutaneous-nerves",
    name: "Medial cutaneous nerves of arm and forearm",
    latin: "Nn. cutanei medialis brachii et antebrachii",
    system: "nervous",
    category: "Nerve",
    region: "upper-limb",
    count: 2,
    description: "Sensory branches of the medial cord supplying skin of the medial arm and forearm.",
    details: {
      "Roots": "C8, T1 (medial cord).",
      "Course": "Descend medially through the arm; the medial brachial cutaneous communicates with the intercostobrachial nerve.",
      "Sensory": "Medial cutaneous nerve of the arm supplies medial arm skin; medial cutaneous nerve of the forearm supplies medial forearm skin.",
      "Branches": "Anterior and posterior (ulnar) branches of the forearm nerve."
    },
    clinical: "These purely sensory nerves can be harvested as donor grafts and account for medial limb numbness in medial cord lesions."
  },

  // ===================== THORAX =====================
  {
    id: "intercostal-nerves",
    name: "Intercostal nerves",
    latin: "Nervi intercostales",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "The anterior rami of the thoracic spinal nerves T1–T11 that run in the intercostal spaces supplying the thoracic and abdominal wall.",
    details: {
      "Roots": "Anterior rami of T1–T11 (T12 is the subcostal nerve).",
      "Course": "Run in the costal groove between the internal and innermost intercostal muscles, in the neurovascular bundle (vein, artery, nerve from superior to inferior).",
      "Motor": "Intercostal muscles and the anterolateral abdominal wall muscles (lower nerves).",
      "Sensory": "Skin of the thoracic and abdominal wall; the parietal pleura and peritoneum.",
      "Branches": "Lateral and anterior cutaneous branches; collateral branches."
    },
    clinical: "They are anesthetized in intercostal nerve blocks; herpes zoster commonly produces a dermatomal thoracic rash and post-herpetic neuralgia."
  },
  {
    id: "sympathetic-trunk",
    name: "Sympathetic trunk",
    latin: "Truncus sympathicus",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "Paired paravertebral chain of sympathetic ganglia running alongside the vertebral column, distributing sympathetic fibers to the body wall and viscera.",
    details: {
      "Roots": "Preganglionic fibers from T1–L2 (thoracolumbar outflow).",
      "Course": "Extends from the base of the skull to the coccyx; in the thorax it lies against the heads of the ribs.",
      "Motor": "Postganglionic sympathetic fibers to vessels, sweat glands, and arrector pili (via gray rami) and to thoracic/abdominal viscera (via splanchnic nerves).",
      "Branches": "Cervical (superior, middle, inferior/stellate), thoracic, lumbar, and sacral ganglia; rami communicantes; splanchnic nerves."
    },
    clinical: "Disruption of cervical sympathetic fibers causes Horner's syndrome (ptosis, miosis, anhidrosis); the chain is targeted in sympathectomy for hyperhidrosis."
  },
  {
    id: "recurrent-laryngeal-nerve",
    name: "Recurrent laryngeal nerve",
    latin: "Nervus laryngeus recurrens",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "Branch of the vagus supplying the intrinsic laryngeal muscles, with an asymmetric course on the left versus the right.",
    details: {
      "Roots": "Branch of the vagus nerve (CN X).",
      "Course": "The left loops under the arch of the aorta (ligamentum arteriosum); the right loops under the right subclavian artery. Both ascend in the tracheo-esophageal groove.",
      "Motor": "All intrinsic laryngeal muscles except the cricothyroid (supplied by the external laryngeal nerve).",
      "Sensory": "Laryngeal mucosa below the vocal cords.",
      "Branches": "Tracheal, esophageal, and inferior laryngeal branches."
    },
    clinical: "Its longer left course makes it vulnerable to thoracic pathology (aortic aneurysm, lung tumor); thyroid surgery risks injury causing hoarseness."
  },
  {
    id: "vagus-thoracic-branches",
    name: "Vagal thoracic branches",
    latin: "Rami thoracici nervi vagi",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "Thoracic branches of the vagus nerve providing parasympathetic supply to the heart, lungs, and esophagus.",
    details: {
      "Roots": "Vagus nerve (CN X).",
      "Course": "Branches in the thorax contribute to cardiac, pulmonary, and esophageal plexuses; the vagi form anterior and posterior esophageal trunks before passing through the diaphragm.",
      "Motor": "Parasympathetic supply slowing the heart, constricting bronchi, and stimulating esophageal/gastric secretomotor activity.",
      "Sensory": "Visceral afferents from the heart, lungs, and esophagus.",
      "Branches": "Cardiac, pulmonary, and esophageal branches; anterior and posterior vagal trunks."
    },
    clinical: "Increased vagal tone slows the heart rate; vagal stimulation maneuvers can terminate supraventricular tachycardias."
  },
  {
    id: "greater-splanchnic-nerve",
    name: "Greater splanchnic nerve",
    latin: "Nervus splanchnicus major",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "Sympathetic nerve carrying preganglionic fibers to the abdominal foregut viscera.",
    details: {
      "Roots": "Preganglionic sympathetic fibers from T5–T9 thoracic ganglia.",
      "Course": "Descends along the vertebral bodies, pierces the diaphragm crus, and synapses in the celiac ganglion.",
      "Motor": "Sympathetic supply to foregut organs (stomach, liver, spleen, pancreas, proximal duodenum) and contributes to adrenal medulla innervation.",
      "Sensory": "Carries visceral pain afferents from foregut viscera.",
      "Branches": "Terminates in the celiac ganglion."
    },
    clinical: "A celiac plexus block (targeting these fibers) relieves intractable pain from pancreatic cancer."
  },
  {
    id: "lesser-splanchnic-nerve",
    name: "Lesser splanchnic nerve",
    latin: "Nervus splanchnicus minor",
    system: "nervous",
    category: "Nerve",
    region: "thorax",
    count: 2,
    description: "Sympathetic nerve carrying preganglionic fibers to the midgut viscera.",
    details: {
      "Roots": "Preganglionic sympathetic fibers from T10–T11 thoracic ganglia.",
      "Course": "Pierces the diaphragm and synapses in the aorticorenal/superior mesenteric ganglion.",
      "Motor": "Sympathetic supply to midgut organs (distal duodenum to the proximal two-thirds of the transverse colon).",
      "Sensory": "Visceral pain afferents from the midgut.",
      "Branches": "Synapses in the aorticorenal and superior mesenteric ganglia."
    },
    clinical: "Midgut visceral pain (e.g., early appendicitis) referred via these afferents is felt in the periumbilical region."
  },

  // ===================== LUMBAR PLEXUS =====================
  {
    id: "lumbar-plexus",
    name: "Lumbar plexus",
    latin: "Plexus lumbalis",
    system: "nervous",
    category: "Plexus",
    region: "abdomen-pelvis",
    count: 2,
    description: "Nerve plexus formed by the anterior rami of L1–L4 within the psoas major, supplying the anterior and medial thigh and lower abdominal wall.",
    details: {
      "Roots": "Anterior rami of L1–L4 (with a contribution from T12).",
      "Course": "Lies within the substance of the psoas major muscle; branches emerge from its lateral and medial borders and anterior surface.",
      "Motor": "Anterior and medial thigh muscles via the femoral and obturator nerves.",
      "Sensory": "Lower abdomen, anterior and medial thigh, and medial leg.",
      "Branches": "Iliohypogastric, ilioinguinal, genitofemoral, lateral femoral cutaneous, femoral, and obturator nerves."
    },
    clinical: "A psoas abscess or hematoma can compress the plexus, causing thigh pain and quadriceps/adductor weakness."
  },
  {
    id: "iliohypogastric-nerve",
    name: "Iliohypogastric nerve",
    latin: "Nervus iliohypogastricus",
    system: "nervous",
    category: "Nerve",
    region: "abdomen-pelvis",
    count: 2,
    description: "First branch of the lumbar plexus supplying the lower abdominal wall.",
    details: {
      "Roots": "L1 (with a T12 contribution).",
      "Course": "Emerges from the lateral border of psoas, crosses the quadratus lumborum, and pierces the transversus abdominis.",
      "Motor": "Internal oblique and transversus abdominis (lower fibers).",
      "Sensory": "Skin over the posterolateral gluteal region and the suprapubic abdominal wall.",
      "Branches": "Lateral and anterior cutaneous branches."
    },
    clinical: "It is at risk during lower abdominal incisions (e.g., appendectomy, hernia repair), where injury can cause suprapubic numbness."
  },
  {
    id: "ilioinguinal-nerve",
    name: "Ilioinguinal nerve",
    latin: "Nervus ilioinguinalis",
    system: "nervous",
    category: "Nerve",
    region: "abdomen-pelvis",
    count: 2,
    description: "Branch of the lumbar plexus that traverses the inguinal canal to supply the upper medial thigh and external genitalia.",
    details: {
      "Roots": "L1.",
      "Course": "Runs through the abdominal wall and passes through the inguinal canal, exiting via the superficial inguinal ring.",
      "Motor": "Internal oblique and transversus abdominis (with the iliohypogastric nerve).",
      "Sensory": "Skin of the upper medial thigh, root of the penis and anterior scrotum (or mons pubis and labium majus).",
      "Branches": "Anterior scrotal/labial branches."
    },
    clinical: "It is commonly entrapped or injured in inguinal hernia repair, causing groin pain or numbness (ilioinguinal neuralgia)."
  },
  {
    id: "genitofemoral-nerve",
    name: "Genitofemoral nerve",
    latin: "Nervus genitofemoralis",
    system: "nervous",
    category: "Nerve",
    region: "abdomen-pelvis",
    count: 2,
    description: "Lumbar plexus branch that pierces the psoas and divides into genital and femoral branches.",
    details: {
      "Roots": "L1, L2.",
      "Course": "Pierces and descends on the anterior surface of psoas major; the genital branch enters the inguinal canal and the femoral branch passes under the inguinal ligament.",
      "Motor": "Cremaster muscle (genital branch).",
      "Sensory": "Genital branch: anterior scrotum/labia and adjacent skin; femoral branch: skin over the femoral triangle.",
      "Branches": "Genital and femoral branches."
    },
    clinical: "The genital branch mediates the cremasteric reflex, which is lost in testicular torsion and some L1–L2 lesions."
  },
  {
    id: "lateral-femoral-cutaneous-nerve",
    name: "Lateral femoral cutaneous nerve",
    latin: "Nervus cutaneus femoris lateralis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Purely sensory branch of the lumbar plexus supplying the skin of the lateral thigh.",
    details: {
      "Roots": "L2, L3.",
      "Course": "Crosses the iliacus and passes under the inguinal ligament near the anterior superior iliac spine.",
      "Sensory": "Skin of the anterolateral thigh.",
      "Branches": "Anterior and posterior branches."
    },
    clinical: "Entrapment beneath the inguinal ligament causes meralgia paresthetica — burning lateral thigh dysesthesia, often with obesity or tight belts."
  },
  {
    id: "femoral-nerve",
    name: "Femoral nerve",
    latin: "Nervus femoralis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Largest branch of the lumbar plexus supplying the anterior thigh extensors and the skin of the anterior thigh and medial leg.",
    details: {
      "Roots": "L2, L3, L4.",
      "Course": "Emerges from the lateral border of psoas, passes under the inguinal ligament lateral to the femoral artery, and divides in the femoral triangle.",
      "Motor": "Quadriceps femoris, sartorius, pectineus, and iliacus.",
      "Sensory": "Anterior thigh (anterior cutaneous branches) and medial leg/foot (saphenous nerve).",
      "Branches": "Muscular branches, anterior cutaneous nerves, and the saphenous nerve (its terminal sensory branch)."
    },
    clinical: "Injury causes weak knee extension with a lost patellar reflex and difficulty climbing stairs; the saphenous nerve supplies the medial leg."
  },
  {
    id: "obturator-nerve",
    name: "Obturator nerve",
    latin: "Nervus obturatorius",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Branch of the lumbar plexus supplying the medial thigh adductors.",
    details: {
      "Roots": "L2, L3, L4.",
      "Course": "Emerges from the medial border of psoas, crosses the pelvic brim, and passes through the obturator canal into the medial thigh.",
      "Motor": "Adductor longus, adductor brevis, adductor magnus (adductor part), gracilis, and obturator externus.",
      "Sensory": "Skin of the medial thigh.",
      "Branches": "Anterior and posterior divisions."
    },
    clinical: "Injury (e.g., pelvic surgery or obturator hernia) weakens thigh adduction; obturator hernia can cause referred medial knee pain (Howship–Romberg sign)."
  },

  // ===================== SACRAL PLEXUS =====================
  {
    id: "sacral-plexus",
    name: "Sacral plexus",
    latin: "Plexus sacralis",
    system: "nervous",
    category: "Plexus",
    region: "abdomen-pelvis",
    count: 2,
    description: "Nerve plexus formed by the lumbosacral trunk (L4–L5) and S1–S4, supplying the gluteal region, perineum, and most of the lower limb.",
    details: {
      "Roots": "Lumbosacral trunk (L4–L5) and anterior rami of S1–S4.",
      "Course": "Lies on the posterior pelvic wall on the piriformis muscle; branches largely exit through the greater sciatic foramen.",
      "Motor": "Gluteal muscles, posterior thigh, and all muscles of the leg and foot.",
      "Sensory": "Posterior thigh, leg, and foot; perineum (via pudendal nerve).",
      "Branches": "Sciatic, superior/inferior gluteal, pudendal, posterior femoral cutaneous, and others."
    },
    clinical: "Pelvic tumors or fractures can injure the plexus, and the relationship of branches to piriformis underlies piriformis syndrome."
  },
  {
    id: "sciatic-nerve",
    name: "Sciatic nerve",
    latin: "Nervus ischiadicus",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Largest nerve in the body, supplying the posterior thigh and, via its terminal branches, the entire leg and foot.",
    details: {
      "Roots": "L4, L5, S1, S2, S3.",
      "Course": "Exits the pelvis through the greater sciatic foramen below piriformis, descends in the posterior thigh, and divides into tibial and common fibular nerves near the apex of the popliteal fossa.",
      "Motor": "Hamstrings and the adductor magnus (hamstring part); leg and foot muscles via terminal branches.",
      "Sensory": "Skin of the leg and foot (via terminal branches); no direct cutaneous branches in the thigh.",
      "Branches": "Tibial and common fibular (peroneal) nerves."
    },
    clinical: "Lumbar disc herniation causes sciatica (radiating posterior leg pain); incorrect gluteal injection can injure the nerve, so the upper outer quadrant is used."
  },
  {
    id: "tibial-nerve",
    name: "Tibial nerve",
    latin: "Nervus tibialis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Larger terminal branch of the sciatic nerve supplying the posterior leg flexors and the sole of the foot.",
    details: {
      "Roots": "L4, L5, S1, S2, S3.",
      "Course": "Descends through the popliteal fossa, runs deep in the posterior leg, and passes behind the medial malleolus through the tarsal tunnel.",
      "Motor": "Posterior compartment of the leg (gastrocnemius, soleus, tibialis posterior, toe flexors) and intrinsic plantar muscles.",
      "Sensory": "Sole of the foot (via medial and lateral plantar nerves) and posterolateral leg (sural nerve contribution).",
      "Branches": "Sural (contribution), medial calcaneal, medial and lateral plantar nerves."
    },
    clinical: "Tarsal tunnel syndrome causes burning sole pain and paresthesia; proximal injury impairs plantarflexion and inversion."
  },
  {
    id: "common-fibular-nerve",
    name: "Common fibular (peroneal) nerve",
    latin: "Nervus fibularis communis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Smaller terminal branch of the sciatic nerve supplying the lateral and anterior leg compartments via its branches.",
    details: {
      "Roots": "L4, L5, S1, S2.",
      "Course": "Branches from the sciatic nerve in the popliteal fossa, winds around the neck of the fibula, and divides into superficial and deep fibular nerves.",
      "Motor": "Via branches to the lateral (evertors) and anterior (dorsiflexors) leg compartments.",
      "Sensory": "Skin of the anterolateral leg and dorsum of the foot (via branches and the lateral sural cutaneous nerve).",
      "Branches": "Superficial fibular, deep fibular, and lateral sural cutaneous nerves."
    },
    clinical: "It is the most commonly injured nerve in the lower limb (fibular neck fracture or tight cast), causing foot drop and a high-stepping gait."
  },
  {
    id: "superficial-fibular-nerve",
    name: "Superficial fibular (peroneal) nerve",
    latin: "Nervus fibularis superficialis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Branch of the common fibular nerve supplying the lateral compartment of the leg and dorsal foot skin.",
    details: {
      "Roots": "L5, S1, S2.",
      "Course": "Descends in the lateral compartment, then pierces the deep fascia in the distal leg to become cutaneous.",
      "Motor": "Fibularis longus and brevis (evertors of the foot).",
      "Sensory": "Skin of the anterolateral leg and most of the dorsum of the foot (except the first web space).",
      "Branches": "Medial and intermediate dorsal cutaneous nerves."
    },
    clinical: "Injury weakens foot eversion and causes dorsal foot numbness; the foot tends to be held inverted."
  },
  {
    id: "deep-fibular-nerve",
    name: "Deep fibular (peroneal) nerve",
    latin: "Nervus fibularis profundus",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Branch of the common fibular nerve supplying the anterior compartment dorsiflexors and the first web space.",
    details: {
      "Roots": "L4, L5, S1.",
      "Course": "Pierces the anterior intermuscular septum, descends with the anterior tibial artery, and passes onto the dorsum of the foot.",
      "Motor": "Tibialis anterior, extensor digitorum longus, extensor hallucis longus, fibularis tertius, and extensor digitorum brevis.",
      "Sensory": "Skin of the first dorsal web space (between the great and second toes).",
      "Branches": "Muscular branches and a terminal dorsal digital branch."
    },
    clinical: "Anterior compartment syndrome or injury causes foot drop and characteristic numbness in the first web space."
  },
  {
    id: "sural-nerve",
    name: "Sural nerve",
    latin: "Nervus suralis",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Purely sensory nerve supplying the posterolateral leg and lateral foot, formed by tibial and common fibular contributions.",
    details: {
      "Roots": "S1, S2 (medial sural from tibial nerve plus lateral sural communicating branch).",
      "Course": "Descends in the midline of the calf with the small saphenous vein, passing posterior to the lateral malleolus.",
      "Sensory": "Skin of the posterolateral lower leg and the lateral side of the foot and little toe.",
      "Branches": "Lateral calcaneal and lateral dorsal cutaneous branches."
    },
    clinical: "It is the classic donor nerve for nerve grafts and for sural nerve biopsy in peripheral neuropathy."
  },
  {
    id: "superior-gluteal-nerve",
    name: "Superior gluteal nerve",
    latin: "Nervus gluteus superior",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Branch of the sacral plexus supplying the hip abductors.",
    details: {
      "Roots": "L4, L5, S1.",
      "Course": "Leaves the pelvis through the greater sciatic foramen above the piriformis with the superior gluteal vessels.",
      "Motor": "Gluteus medius, gluteus minimus, and tensor fasciae latae.",
      "Sensory": "None.",
      "Branches": "Superior and inferior branches."
    },
    clinical: "Injury causes a positive Trendelenburg sign — the pelvis drops on the contralateral (unsupported) side during single-leg stance."
  },
  {
    id: "inferior-gluteal-nerve",
    name: "Inferior gluteal nerve",
    latin: "Nervus gluteus inferior",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Branch of the sacral plexus supplying the gluteus maximus.",
    details: {
      "Roots": "L5, S1, S2.",
      "Course": "Exits the pelvis through the greater sciatic foramen below the piriformis.",
      "Motor": "Gluteus maximus (main extensor of the hip).",
      "Sensory": "None.",
      "Branches": "Muscular branches."
    },
    clinical: "Injury weakens hip extension, causing difficulty rising from sitting, climbing stairs, and a gluteus maximus lurch."
  },
  {
    id: "pudendal-nerve",
    name: "Pudendal nerve",
    latin: "Nervus pudendus",
    system: "nervous",
    category: "Nerve",
    region: "abdomen-pelvis",
    count: 2,
    description: "Main somatic nerve of the perineum, providing motor, sensory, and sphincter control to the perineal structures.",
    details: {
      "Roots": "S2, S3, S4 ('S2, 3, 4 keep the genitals off the floor').",
      "Course": "Exits via the greater sciatic foramen below piriformis, hooks around the ischial spine/sacrospinous ligament, and re-enters through the lesser sciatic foramen into the pudendal (Alcock's) canal.",
      "Motor": "External urethral and anal sphincters and perineal muscles.",
      "Sensory": "External genitalia and perineal skin.",
      "Branches": "Inferior rectal, perineal, and dorsal nerve of the penis/clitoris."
    },
    clinical: "A pudendal nerve block at the ischial spine provides perineal anesthesia for vaginal delivery; entrapment causes pudendal neuralgia."
  },
  {
    id: "posterior-femoral-cutaneous-nerve",
    name: "Posterior femoral cutaneous nerve",
    latin: "Nervus cutaneus femoris posterior",
    system: "nervous",
    category: "Nerve",
    region: "lower-limb",
    count: 2,
    description: "Sensory branch of the sacral plexus supplying the posterior thigh, lower buttock, and perineum.",
    details: {
      "Roots": "S1, S2, S3.",
      "Course": "Leaves the pelvis through the greater sciatic foramen below piriformis and descends deep to the fascia lata along the back of the thigh.",
      "Sensory": "Skin of the posterior thigh, popliteal fossa, lower buttock (inferior cluneal), and perineum (perineal branch).",
      "Branches": "Inferior cluneal and perineal branches."
    },
    clinical: "Injury causes numbness of the posterior thigh; it can be irritated in piriformis syndrome alongside the sciatic nerve."
  }
];
