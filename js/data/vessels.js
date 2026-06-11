// Anatomy data: cardiovascular vessels (arteries and veins)
// Exam-grade reference data for medical students.
window.ANATOMY_VESSELS = [
  // ============================================================
  // AORTA AND GREAT VESSELS
  // ============================================================
  {
    id: "ascending-aorta",
    name: "Ascending aorta",
    latin: "Aorta ascendens",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "First part of the aorta, arising from the left ventricle and ascending within the pericardium to become the aortic arch. Gives off the coronary arteries.",
    details: {
      "Origin": "Left ventricle at the aortic valve (aortic root), behind the left sternal border at the level of the 3rd costal cartilage.",
      "Course": "Ascends within the fibrous pericardium up to the level of the sternal angle (T4/5), where it continues as the arch of the aorta.",
      "Branches": "Right and left coronary arteries, arising from the right and left aortic sinuses.",
      "Supplies": "Via the coronary arteries, the myocardium of the heart."
    },
    clinical: "Common site of ascending aortic aneurysm and dissection (Stanford type A), often associated with Marfan syndrome and bicuspid aortic valve."
  },
  {
    id: "aortic-arch",
    name: "Arch of the aorta",
    latin: "Arcus aortae",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Curved continuation of the ascending aorta in the superior mediastinum, giving off the three great vessels to the head, neck, and upper limbs.",
    details: {
      "Origin": "Continuation of the ascending aorta at the level of the sternal angle (T4/5).",
      "Course": "Arches superiorly, posteriorly, and to the left over the left main bronchus, ending at the T4 vertebral level as the descending thoracic aorta.",
      "Branches": "Brachiocephalic trunk, left common carotid artery, and left subclavian artery.",
      "Supplies": "Head, neck, and upper limbs via its branches."
    },
    clinical: "The ligamentum arteriosum tethers the arch; it is a common site of aortic rupture in deceleration injuries. Aneurysms here may compress the recurrent laryngeal nerve causing hoarseness."
  },
  {
    id: "descending-thoracic-aorta",
    name: "Descending thoracic aorta",
    latin: "Aorta thoracica",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Continuation of the aortic arch through the posterior mediastinum, supplying the thoracic wall and viscera before passing into the abdomen.",
    details: {
      "Origin": "Continuation of the aortic arch at the lower border of T4.",
      "Course": "Descends through the posterior mediastinum, initially to the left of the vertebral column then anterior to it, passing through the aortic hiatus of the diaphragm at T12.",
      "Branches": "Posterior intercostal arteries (3rd-11th), subcostal arteries, bronchial, esophageal, pericardial, mediastinal, and superior phrenic arteries.",
      "Supplies": "Thoracic wall, lungs (bronchial), esophagus, pericardium, and posterior diaphragm."
    },
    clinical: "Coarctation of the aorta typically occurs just distal to the left subclavian artery near the ligamentum arteriosum, producing upper-limb hypertension and rib notching from collateral intercostal vessels."
  },
  {
    id: "abdominal-aorta",
    name: "Abdominal aorta",
    latin: "Aorta abdominalis",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Terminal segment of the aorta in the retroperitoneum supplying the abdominal viscera and walls before bifurcating into the common iliac arteries.",
    details: {
      "Origin": "Continuation of the thoracic aorta at the aortic hiatus of the diaphragm (T12).",
      "Course": "Descends retroperitoneally anterior to the lumbar vertebrae, slightly to the left of midline, ending by bifurcating at L4 into the common iliac arteries.",
      "Branches": "Unpaired (celiac trunk, superior and inferior mesenteric); paired visceral (suprarenal, renal, gonadal); paired parietal (inferior phrenic, lumbar); and terminal (median sacral, common iliacs).",
      "Supplies": "Abdominal viscera, abdominal walls, and via terminal branches the pelvis and lower limbs."
    },
    clinical: "Abdominal aortic aneurysm most commonly occurs infrarenally; rupture causes sudden back/abdominal pain and hypotension. Screened by ultrasound in older male smokers."
  },

  // ============================================================
  // CORONARY ARTERIES
  // ============================================================
  {
    id: "right-coronary-artery",
    name: "Right coronary artery",
    latin: "Arteria coronaria dextra",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Arises from the right aortic sinus and runs in the right atrioventricular groove, supplying the right heart and, in most people, the inferior wall.",
    details: {
      "Origin": "Right aortic sinus of the ascending aorta.",
      "Course": "Runs in the right atrioventricular (coronary) groove, passing to the inferior surface of the heart.",
      "Branches": "Sinoatrial nodal artery (~60%), right marginal artery, atrioventricular nodal artery, and posterior interventricular (descending) artery in right-dominant circulation.",
      "Supplies": "Right atrium, right ventricle, SA and AV nodes (most people), and inferior/posterior left ventricle and posterior interventricular septum."
    },
    clinical: "Occlusion causes inferior MI (ST elevation in II, III, aVF) and may cause bradyarrhythmias and heart block due to SA/AV nodal ischaemia."
  },
  {
    id: "left-coronary-artery",
    name: "Left coronary artery (left main)",
    latin: "Arteria coronaria sinistra",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Short trunk arising from the left aortic sinus that quickly divides into the left anterior descending and circumflex arteries, supplying the bulk of the left ventricle.",
    details: {
      "Origin": "Left aortic sinus of the ascending aorta.",
      "Course": "Passes between the pulmonary trunk and the left auricle for a short distance before bifurcating.",
      "Branches": "Left anterior descending (anterior interventricular) artery and circumflex artery.",
      "Supplies": "Most of the left atrium and left ventricle, and the anterior interventricular septum."
    },
    clinical: "Significant left main stenosis is high-risk (\"widow-maker\" territory) and is generally an indication for coronary artery bypass grafting."
  },
  {
    id: "left-anterior-descending-artery",
    name: "Left anterior descending artery",
    latin: "Ramus interventricularis anterior",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Major branch of the left coronary artery running in the anterior interventricular groove to the apex, supplying the anterior left ventricle and most of the interventricular septum.",
    details: {
      "Origin": "Left coronary artery (left main).",
      "Course": "Descends in the anterior interventricular groove toward the cardiac apex, often wrapping around to the inferior surface.",
      "Branches": "Diagonal branches and anterior septal perforating branches.",
      "Supplies": "Anterior left ventricle, anterior two-thirds of the interventricular septum, and the cardiac apex."
    },
    clinical: "Occlusion causes anterior MI (ST elevation in V1-V4); the LAD is the single most commonly occluded coronary artery."
  },
  {
    id: "circumflex-artery",
    name: "Circumflex artery",
    latin: "Ramus circumflexus",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Branch of the left coronary artery curving in the left atrioventricular groove to supply the left atrium and lateral/posterior left ventricle.",
    details: {
      "Origin": "Left coronary artery (left main).",
      "Course": "Runs in the left atrioventricular groove around the left border of the heart to the posterior surface.",
      "Branches": "Left marginal artery; gives the posterior interventricular artery and SA nodal artery in left-dominant circulation.",
      "Supplies": "Left atrium and posterolateral left ventricle."
    },
    clinical: "Occlusion causes lateral MI (ST changes in I, aVL, V5-V6); left-dominant circulation (~10%) means it also supplies the AV node."
  },

  // ============================================================
  // PULMONARY ARTERIES
  // ============================================================
  {
    id: "pulmonary-trunk",
    name: "Pulmonary trunk",
    latin: "Truncus pulmonalis",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Large vessel carrying deoxygenated blood from the right ventricle, dividing into the right and left pulmonary arteries.",
    details: {
      "Origin": "Right ventricle at the pulmonary valve.",
      "Course": "Ascends anterior to the ascending aorta, then divides at the T4/5 level (concavity of the aortic arch) into right and left pulmonary arteries.",
      "Branches": "Right and left pulmonary arteries; connected to the aortic arch by the ligamentum arteriosum.",
      "Supplies": "Carries deoxygenated blood to the lungs for gas exchange."
    },
    clinical: "Saddle pulmonary embolism lodges at the bifurcation; the pulmonary trunk dilates in pulmonary hypertension."
  },
  {
    id: "right-pulmonary-artery",
    name: "Right pulmonary artery",
    latin: "Arteria pulmonalis dextra",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Longer of the two pulmonary arteries, passing to the right lung to deliver deoxygenated blood.",
    details: {
      "Origin": "Bifurcation of the pulmonary trunk.",
      "Course": "Passes horizontally to the right, posterior to the ascending aorta and superior vena cava, to enter the hilum of the right lung.",
      "Branches": "Lobar and segmental pulmonary arteries within the right lung.",
      "Supplies": "Carries deoxygenated blood to the right lung."
    },
    clinical: "Its horizontal intrapericardial course is relevant in transverse pericardial sinus dissection; a common site for emboli."
  },
  {
    id: "left-pulmonary-artery",
    name: "Left pulmonary artery",
    latin: "Arteria pulmonalis sinistra",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Shorter pulmonary artery passing to the left lung, connected to the aortic arch by the ligamentum arteriosum.",
    details: {
      "Origin": "Bifurcation of the pulmonary trunk.",
      "Course": "Passes anterior to the descending aorta and left main bronchus to enter the hilum of the left lung; tethered to the arch by the ligamentum arteriosum.",
      "Branches": "Lobar and segmental pulmonary arteries within the left lung.",
      "Supplies": "Carries deoxygenated blood to the left lung."
    },
    clinical: "The ligamentum arteriosum (remnant of the ductus arteriosus) lies between it and the arch; the left recurrent laryngeal nerve hooks beneath the arch here."
  },

  // ============================================================
  // BRANCHES OF THE AORTIC ARCH / HEAD & NECK ARTERIES
  // ============================================================
  {
    id: "brachiocephalic-trunk",
    name: "Brachiocephalic trunk",
    latin: "Truncus brachiocephalicus",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "First and largest branch of the aortic arch, dividing into the right common carotid and right subclavian arteries.",
    details: {
      "Origin": "First branch of the aortic arch.",
      "Course": "Ascends posterolaterally to the right behind the right sternoclavicular joint, where it bifurcates.",
      "Branches": "Right common carotid artery and right subclavian artery (occasionally a thyroid ima artery).",
      "Supplies": "Right side of the head and neck and the right upper limb."
    },
    clinical: "There is no left-sided equivalent; the left common carotid and subclavian arise directly from the arch."
  },
  {
    id: "common-carotid-artery",
    name: "Common carotid artery",
    latin: "Arteria carotis communis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Major artery of the neck ascending within the carotid sheath and dividing into the internal and external carotid arteries.",
    details: {
      "Origin": "Right from the brachiocephalic trunk; left directly from the aortic arch.",
      "Course": "Ascends in the carotid sheath, lateral to the trachea and esophagus, without branching until it bifurcates at the upper border of the thyroid cartilage (C3/4).",
      "Branches": "None until terminal bifurcation into internal and external carotid arteries.",
      "Supplies": "Head and neck via its terminal branches."
    },
    clinical: "The carotid sinus (baroreceptor) and carotid body (chemoreceptor) lie at the bifurcation; atherosclerotic plaque here is a major source of embolic stroke and the target of carotid endarterectomy."
  },
  {
    id: "internal-carotid-artery",
    name: "Internal carotid artery",
    latin: "Arteria carotis interna",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Terminal branch of the common carotid supplying the brain and eye; it gives no branches in the neck.",
    details: {
      "Origin": "Bifurcation of the common carotid artery at C3/4.",
      "Course": "Ascends in the carotid sheath, enters the carotid canal of the temporal bone, traverses the cavernous sinus (carotid siphon), and pierces the dura to enter the cranial cavity.",
      "Branches": "No cervical branches; intracranially gives the ophthalmic, posterior communicating, anterior choroidal, anterior cerebral, and middle cerebral arteries.",
      "Supplies": "Anterior brain (frontal, parietal, much of temporal lobes), eye, forehead, and nose."
    },
    clinical: "Forms the anterior circulation of the brain; occlusion or carotid dissection causes anterior circulation stroke. A cavernous segment aneurysm can produce a cranial nerve III/IV/VI palsy."
  },
  {
    id: "external-carotid-artery",
    name: "External carotid artery",
    latin: "Arteria carotis externa",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Terminal branch of the common carotid supplying the face, scalp, and neck structures outside the cranium.",
    details: {
      "Origin": "Bifurcation of the common carotid artery at C3/4.",
      "Course": "Ascends through the substance of the parotid gland, terminating behind the neck of the mandible.",
      "Branches": "Superior thyroid, ascending pharyngeal, lingual, facial, occipital, posterior auricular, and terminal maxillary and superficial temporal arteries.",
      "Supplies": "Face, scalp, neck, oral and nasal cavities, and dura mater (via the middle meningeal)."
    },
    clinical: "Provides collateral flow across the midline and to the brain via anastomoses; can be ligated to control severe facial/scalp haemorrhage."
  },
  {
    id: "superior-thyroid-artery",
    name: "Superior thyroid artery",
    latin: "Arteria thyroidea superior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "First branch of the external carotid artery, supplying the upper pole of the thyroid gland and the larynx.",
    details: {
      "Origin": "External carotid artery, near its origin.",
      "Course": "Descends to the superior pole of the thyroid gland, accompanied by the external laryngeal nerve.",
      "Branches": "Superior laryngeal artery and glandular branches.",
      "Supplies": "Superior pole of the thyroid gland and the larynx."
    },
    clinical: "Must be ligated close to the gland during thyroidectomy to avoid injuring the closely related external laryngeal nerve, which would weaken the cricothyroid (voice projection)."
  },
  {
    id: "lingual-artery",
    name: "Lingual artery",
    latin: "Arteria lingualis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Branch of the external carotid supplying the tongue and floor of the mouth.",
    details: {
      "Origin": "External carotid artery, at the level of the hyoid bone.",
      "Course": "Loops upward then runs deep to the hyoglossus muscle to reach the tongue.",
      "Branches": "Dorsal lingual, sublingual, and deep lingual arteries.",
      "Supplies": "Tongue, floor of the mouth, and sublingual gland."
    },
    clinical: "Its position deep to hyoglossus is a key landmark; the hypoglossal nerve crosses superficial to the artery."
  },
  {
    id: "facial-artery",
    name: "Facial artery",
    latin: "Arteria facialis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Branch of the external carotid that crosses the mandible to supply the superficial face.",
    details: {
      "Origin": "External carotid artery, above the lingual artery.",
      "Course": "Runs deep to the submandibular gland, hooks over the inferior border of the mandible at the anterior border of masseter, then ascends tortuously toward the medial canthus (angular artery).",
      "Branches": "Ascending palatine, tonsillar, glandular, submental, inferior and superior labial, lateral nasal, and angular arteries.",
      "Supplies": "Superficial muscles and skin of the face, lips, palatine tonsil, and submandibular gland."
    },
    clinical: "A facial pulse is palpable where it crosses the mandible at the anterior border of masseter; the labial arteries make lip lacerations bleed profusely."
  },
  {
    id: "occipital-artery",
    name: "Occipital artery",
    latin: "Arteria occipitalis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Branch of the external carotid supplying the posterior scalp and adjacent muscles.",
    details: {
      "Origin": "Posterior aspect of the external carotid artery.",
      "Course": "Passes posteriorly along the lower border of the posterior belly of digastric to the back of the scalp.",
      "Branches": "Muscular, meningeal, and descending branches.",
      "Supplies": "Posterior scalp, sternocleidomastoid, and posterior neck muscles."
    },
    clinical: "Accompanies the greater occipital nerve; involved in occipital nerve blocks for occipital neuralgia."
  },
  {
    id: "posterior-auricular-artery",
    name: "Posterior auricular artery",
    latin: "Arteria auricularis posterior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Small posterior branch of the external carotid supplying the scalp behind the ear and the middle ear.",
    details: {
      "Origin": "Posterior aspect of the external carotid artery, above the occipital artery.",
      "Course": "Ascends posteriorly between the parotid gland and the styloid process to the region behind the auricle.",
      "Branches": "Stylomastoid artery, auricular and occipital branches.",
      "Supplies": "Scalp behind the ear, the auricle, and the middle ear (via stylomastoid)."
    },
    clinical: "The stylomastoid branch supplies the facial nerve within the facial canal."
  },
  {
    id: "ascending-pharyngeal-artery",
    name: "Ascending pharyngeal artery",
    latin: "Arteria pharyngea ascendens",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Smallest and first medial branch of the external carotid, supplying the pharynx and deep neck structures.",
    details: {
      "Origin": "Medial aspect of the external carotid artery, near its origin.",
      "Course": "Ascends between the internal carotid artery and the pharynx to the base of the skull.",
      "Branches": "Pharyngeal, palatine, inferior tympanic, and meningeal branches.",
      "Supplies": "Pharynx, soft palate, prevertebral muscles, middle ear, and meninges."
    },
    clinical: "An important feeding vessel in glomus jugulare tumours and nasopharyngeal lesions during embolisation."
  },
  {
    id: "maxillary-artery",
    name: "Maxillary artery",
    latin: "Arteria maxillaris",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Larger terminal branch of the external carotid supplying the deep face, including the middle meningeal artery to the dura.",
    details: {
      "Origin": "Terminal branch of the external carotid artery within the parotid gland.",
      "Course": "Passes anteriorly through the infratemporal fossa (often between the heads of lateral pterygoid) into the pterygopalatine fossa.",
      "Branches": "Includes middle meningeal, inferior alveolar, deep temporal, buccal, infraorbital, posterior superior alveolar, sphenopalatine, and greater palatine arteries.",
      "Supplies": "Deep facial structures: muscles of mastication, teeth, nasal cavity, palate, dura mater, and the tympanic cavity."
    },
    clinical: "Its sphenopalatine branch is the main source of posterior epistaxis; the middle meningeal branch is torn in extradural haematoma."
  },
  {
    id: "superficial-temporal-artery",
    name: "Superficial temporal artery",
    latin: "Arteria temporalis superficialis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Smaller terminal branch of the external carotid supplying the lateral scalp and face.",
    details: {
      "Origin": "Terminal branch of the external carotid artery within the parotid gland.",
      "Course": "Ascends in front of the ear, crossing the zygomatic process of the temporal bone, dividing into frontal and parietal branches.",
      "Branches": "Transverse facial, frontal, and parietal branches.",
      "Supplies": "Lateral scalp, temple, and part of the face."
    },
    clinical: "Palpable pulse anterior to the tragus; the vessel for temporal artery biopsy in giant cell (temporal) arteritis."
  },
  {
    id: "ophthalmic-artery",
    name: "Ophthalmic artery",
    latin: "Arteria ophthalmica",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "First major intracranial branch of the internal carotid, supplying the orbit and eye.",
    details: {
      "Origin": "Internal carotid artery, just after it exits the cavernous sinus.",
      "Course": "Passes through the optic canal with the optic nerve into the orbit.",
      "Branches": "Central retinal artery, lacrimal, posterior ciliary, supraorbital, supratrochlear, dorsal nasal, and ethmoidal arteries.",
      "Supplies": "Eyeball (including retina via the central retinal artery), orbital structures, and forehead."
    },
    clinical: "Central retinal artery occlusion causes sudden painless monocular blindness; amaurosis fugax (transient visual loss) signals carotid embolic disease."
  },
  {
    id: "middle-meningeal-artery",
    name: "Middle meningeal artery",
    latin: "Arteria meningea media",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Major artery supplying the dura mater, branch of the maxillary artery.",
    details: {
      "Origin": "First part of the maxillary artery in the infratemporal fossa.",
      "Course": "Ascends through the foramen spinosum into the middle cranial fossa, running in grooves on the inner surface of the skull deep to the pterion.",
      "Branches": "Frontal (anterior) and parietal (posterior) branches.",
      "Supplies": "Dura mater of the cranial vault and the bones of the calvaria."
    },
    clinical: "Rupture (classically at the thin pterion after temporal trauma) causes an extradural (epidural) haematoma with the characteristic lucid interval."
  },
  {
    id: "vertebral-artery",
    name: "Vertebral artery",
    latin: "Arteria vertebralis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Branch of the subclavian artery supplying the posterior brain and spinal cord; unites to form the basilar artery.",
    details: {
      "Origin": "First part of the subclavian artery.",
      "Course": "Ascends through the transverse foramina of C6-C1, loops over the posterior arch of the atlas, and enters the skull through the foramen magnum.",
      "Branches": "Spinal branches, posterior and anterior spinal arteries, and the posterior inferior cerebellar artery (PICA).",
      "Supplies": "Brainstem, cerebellum, spinal cord, and (after joining the basilar) the posterior cerebrum."
    },
    clinical: "The two vertebral arteries unite to form the basilar artery; PICA occlusion produces lateral medullary (Wallenberg) syndrome. Subject to dissection from neck manipulation."
  },
  {
    id: "basilar-artery",
    name: "Basilar artery",
    latin: "Arteria basilaris",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 1,
    description: "Single midline artery formed by union of the vertebral arteries, supplying the brainstem and cerebellum.",
    details: {
      "Origin": "Union of the two vertebral arteries at the pontomedullary junction.",
      "Course": "Ascends in the basilar groove on the anterior surface of the pons, terminating at the upper border of the pons by dividing into the two posterior cerebral arteries.",
      "Branches": "Anterior inferior cerebellar artery (AICA), pontine arteries, superior cerebellar artery, and the terminal posterior cerebral arteries.",
      "Supplies": "Pons, midbrain, cerebellum, inner ear, and the posterior cerebrum."
    },
    clinical: "Basilar artery thrombosis can cause locked-in syndrome; \"top of the basilar\" syndrome affects the midbrain and thalami."
  },
  {
    id: "anterior-cerebral-artery",
    name: "Anterior cerebral artery",
    latin: "Arteria cerebri anterior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Terminal branch of the internal carotid supplying the medial surface of the frontal and parietal lobes.",
    details: {
      "Origin": "Internal carotid artery (terminal bifurcation).",
      "Course": "Passes anteromedially above the optic nerve, connected to its fellow by the anterior communicating artery, then curves over the corpus callosum.",
      "Branches": "Anterior communicating, recurrent artery of Heubner, and cortical branches.",
      "Supplies": "Medial surface of the cerebral hemisphere (frontal and parietal lobes) and the medial part of the motor/sensory cortex (leg area)."
    },
    clinical: "Occlusion causes contralateral lower-limb weakness and sensory loss; the anterior communicating artery is the commonest site of cerebral (berry) aneurysm."
  },
  {
    id: "middle-cerebral-artery",
    name: "Middle cerebral artery",
    latin: "Arteria cerebri media",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Largest terminal branch of the internal carotid, supplying the lateral cerebral cortex.",
    details: {
      "Origin": "Direct continuation of the internal carotid artery.",
      "Course": "Passes laterally into the lateral (Sylvian) sulcus, branching over the insula and lateral hemisphere.",
      "Branches": "Lenticulostriate (deep perforating) arteries and cortical branches.",
      "Supplies": "Most of the lateral cerebral cortex (motor/sensory cortex for face and upper limb), insula, and deep structures (basal ganglia, internal capsule)."
    },
    clinical: "Most commonly occluded cerebral artery; causes contralateral face/arm weakness, sensory loss, and (dominant hemisphere) aphasia. Lenticulostriate vessels are the site of hypertensive haemorrhage and lacunar strokes."
  },
  {
    id: "posterior-cerebral-artery",
    name: "Posterior cerebral artery",
    latin: "Arteria cerebri posterior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Terminal branch of the basilar artery supplying the occipital lobe and inferior temporal lobe.",
    details: {
      "Origin": "Terminal bifurcation of the basilar artery.",
      "Course": "Curves around the midbrain, connected to the internal carotid by the posterior communicating artery, to reach the occipital lobe.",
      "Branches": "Posterior communicating, thalamic perforating, and cortical (calcarine) branches.",
      "Supplies": "Occipital lobe (visual cortex), inferomedial temporal lobe, midbrain, and thalamus."
    },
    clinical: "Occlusion causes contralateral homonymous hemianopia, often with macular sparing due to collateral MCA supply to the occipital pole."
  },
  {
    id: "anterior-communicating-artery",
    name: "Anterior communicating artery",
    latin: "Arteria communicans anterior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 1,
    description: "Short midline vessel connecting the two anterior cerebral arteries, completing the anterior circle of Willis.",
    details: {
      "Origin": "Connects the right and left anterior cerebral arteries.",
      "Course": "Lies in the midline anterior to the optic chiasm.",
      "Branches": "Small perforating branches to the hypothalamus and optic chiasm.",
      "Supplies": "Provides collateral cross-flow between the two anterior cerebral circulations."
    },
    clinical: "The single most common site of berry aneurysm in the circle of Willis; rupture causes subarachnoid haemorrhage and may compress the optic chiasm."
  },
  {
    id: "posterior-communicating-artery",
    name: "Posterior communicating artery",
    latin: "Arteria communicans posterior",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Vessel connecting the internal carotid (anterior circulation) to the posterior cerebral artery, completing the circle of Willis.",
    details: {
      "Origin": "Internal carotid artery.",
      "Course": "Passes posteriorly to anastomose with the posterior cerebral artery.",
      "Branches": "Perforating branches to the thalamus, hypothalamus, and internal capsule.",
      "Supplies": "Links anterior and posterior cerebral circulations; supplies the thalamus and internal capsule."
    },
    clinical: "A posterior communicating artery aneurysm classically causes a painful third nerve (oculomotor) palsy with a fixed, dilated pupil."
  },

  // ============================================================
  // SUBCLAVIAN AND UPPER LIMB ARTERIES
  // ============================================================
  {
    id: "subclavian-artery",
    name: "Subclavian artery",
    latin: "Arteria subclavia",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Major artery supplying the upper limb, also giving branches to the brain, neck, and thoracic wall; becomes the axillary artery at the first rib.",
    details: {
      "Origin": "Right from the brachiocephalic trunk; left directly from the aortic arch.",
      "Course": "Arches over the cervical pleura and first rib, passing between the anterior and middle scalene muscles; divided into three parts by scalenus anterior.",
      "Branches": "Vertebral artery, internal thoracic artery, thyrocervical trunk, costocervical trunk, and dorsal scapular artery.",
      "Supplies": "Brain, neck, anterior thoracic wall, and (as the axillary artery) the upper limb."
    },
    clinical: "Subclavian steal syndrome: proximal stenosis causes retrograde vertebral flow, producing arm claudication and posterior circulation symptoms. Compressed in thoracic outlet syndrome."
  },
  {
    id: "internal-thoracic-artery",
    name: "Internal thoracic artery",
    latin: "Arteria thoracica interna",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 2,
    description: "Branch of the subclavian artery descending alongside the sternum to supply the anterior thoracic wall.",
    details: {
      "Origin": "Inferior surface of the first part of the subclavian artery.",
      "Course": "Descends just lateral to the sternum, posterior to the upper six costal cartilages, dividing at the sixth intercostal space.",
      "Branches": "Anterior intercostal, pericardiacophrenic, perforating, musculophrenic, and superior epigastric arteries.",
      "Supplies": "Anterior thoracic wall, anterior intercostal spaces, pericardium, diaphragm, and upper anterior abdominal wall."
    },
    clinical: "The (left) internal thoracic/mammary artery is the preferred conduit for coronary artery bypass grafting due to excellent long-term patency."
  },
  {
    id: "thyrocervical-trunk",
    name: "Thyrocervical trunk",
    latin: "Truncus thyrocervicalis",
    system: "cardiovascular",
    category: "Artery",
    region: "head-neck",
    count: 2,
    description: "Short branch of the subclavian artery supplying the thyroid, neck, and scapular region.",
    details: {
      "Origin": "First part of the subclavian artery, medial to scalenus anterior.",
      "Course": "Ascends a short distance before dividing into its branches.",
      "Branches": "Inferior thyroid artery, transverse cervical artery, and suprascapular artery.",
      "Supplies": "Thyroid gland (inferior), larynx, trachea, esophagus, and muscles of the neck and scapula."
    },
    clinical: "The inferior thyroid branch is closely related to the recurrent laryngeal nerve, at risk during thyroid surgery."
  },
  {
    id: "axillary-artery",
    name: "Axillary artery",
    latin: "Arteria axillaris",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Continuation of the subclavian artery through the axilla, supplying the shoulder and thoracic wall; becomes the brachial artery.",
    details: {
      "Origin": "Continuation of the subclavian artery at the lateral border of the first rib.",
      "Course": "Traverses the axilla, divided into three parts by the pectoralis minor muscle, ending at the inferior border of teres major.",
      "Branches": "Superior thoracic, thoracoacromial, lateral thoracic, subscapular, and anterior and posterior circumflex humeral arteries.",
      "Supplies": "Shoulder joint, axilla, pectoral and scapular regions, and the proximal upper limb."
    },
    clinical: "The posterior circumflex humeral artery accompanies the axillary nerve in the quadrangular space; both are at risk with surgical neck of humerus fractures."
  },
  {
    id: "brachial-artery",
    name: "Brachial artery",
    latin: "Arteria brachialis",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Main artery of the arm, continuation of the axillary artery, dividing into the radial and ulnar arteries.",
    details: {
      "Origin": "Continuation of the axillary artery at the inferior border of teres major.",
      "Course": "Descends along the medial then anterior aspect of the arm, lying medial to the biceps, into the cubital fossa where it bifurcates at the neck of the radius.",
      "Branches": "Profunda brachii (deep artery of arm), nutrient, and superior and inferior ulnar collateral arteries.",
      "Supplies": "Muscles and structures of the arm and, via terminal branches, the forearm and hand."
    },
    clinical: "Pulse palpable medial to the biceps tendon in the cubital fossa, the site for blood pressure auscultation; supracondylar humeral fractures may injure it, threatening Volkmann's ischaemic contracture."
  },
  {
    id: "radial-artery",
    name: "Radial artery",
    latin: "Arteria radialis",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Lateral terminal branch of the brachial artery supplying the forearm and hand.",
    details: {
      "Origin": "Bifurcation of the brachial artery in the cubital fossa.",
      "Course": "Runs along the lateral forearm, crosses the floor of the anatomical snuffbox, and passes into the palm to form the deep palmar arch.",
      "Branches": "Radial recurrent, palmar and dorsal carpal branches, princeps pollicis, and the deep palmar arch.",
      "Supplies": "Lateral forearm, wrist, thumb, and (via the deep palmar arch) the hand."
    },
    clinical: "Pulse palpable at the wrist lateral to flexor carpi radialis; used for arterial blood gas sampling and as the access site for cardiac catheterisation (Allen test confirms collateral ulnar supply first)."
  },
  {
    id: "ulnar-artery",
    name: "Ulnar artery",
    latin: "Arteria ulnaris",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Larger, medial terminal branch of the brachial artery supplying the forearm and hand.",
    details: {
      "Origin": "Bifurcation of the brachial artery in the cubital fossa.",
      "Course": "Passes medially and distally through the forearm, enters the hand through Guyon's canal lateral to the pisiform.",
      "Branches": "Anterior and posterior ulnar recurrent, common interosseous (giving anterior and posterior interosseous), and the superficial palmar arch.",
      "Supplies": "Medial forearm and, via the superficial palmar arch, most of the hand and digits."
    },
    clinical: "Forms the dominant superficial palmar arch; passes with the ulnar nerve through Guyon's canal where both may be compressed."
  },
  {
    id: "superficial-palmar-arch",
    name: "Superficial palmar arch",
    latin: "Arcus palmaris superficialis",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Arterial arcade in the palm formed mainly by the ulnar artery, supplying the fingers.",
    details: {
      "Origin": "Direct continuation of the ulnar artery, completed by the superficial branch of the radial artery.",
      "Course": "Lies superficial in the palm, distal to the deep palmar arch, at the level of the distal border of the extended thumb.",
      "Branches": "Common palmar digital arteries (which divide into proper palmar digital arteries).",
      "Supplies": "The fingers (medial three and a half digits predominantly)."
    },
    clinical: "Lies distal to the deep arch; injuries to the palm can bleed briskly because of the rich anastomotic supply."
  },
  {
    id: "deep-palmar-arch",
    name: "Deep palmar arch",
    latin: "Arcus palmaris profundus",
    system: "cardiovascular",
    category: "Artery",
    region: "upper-limb",
    count: 2,
    description: "Deep arterial arcade in the palm formed mainly by the radial artery.",
    details: {
      "Origin": "Direct continuation of the radial artery, completed by the deep branch of the ulnar artery.",
      "Course": "Lies deep in the palm on the metacarpal bases, proximal to the superficial arch.",
      "Branches": "Palmar metacarpal arteries and perforating branches.",
      "Supplies": "Deep structures of the palm and digits, anastomosing with the superficial arch."
    },
    clinical: "Lies proximal to the superficial arch at the level of the proximal thumb; both arches provide dual blood supply protecting the hand against ischaemia."
  },

  // ============================================================
  // ABDOMINAL AORTA BRANCHES
  // ============================================================
  {
    id: "celiac-trunk",
    name: "Celiac trunk",
    latin: "Truncus coeliacus",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "First major unpaired branch of the abdominal aorta, supplying the foregut-derived organs.",
    details: {
      "Origin": "Anterior abdominal aorta at the level of T12.",
      "Course": "Short trunk that arises just below the aortic hiatus and divides almost immediately.",
      "Branches": "Left gastric, splenic, and common hepatic arteries.",
      "Supplies": "Foregut derivatives: distal esophagus, stomach, proximal duodenum, liver, gallbladder, pancreas, and spleen."
    },
    clinical: "May be compressed by the median arcuate ligament of the diaphragm (median arcuate ligament syndrome), causing postprandial epigastric pain."
  },
  {
    id: "left-gastric-artery",
    name: "Left gastric artery",
    latin: "Arteria gastrica sinistra",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Smallest branch of the celiac trunk supplying the lesser curvature of the stomach and lower esophagus.",
    details: {
      "Origin": "Celiac trunk.",
      "Course": "Ascends to the cardia of the stomach, then turns along the lesser curvature to anastomose with the right gastric artery.",
      "Branches": "Esophageal branches and gastric branches.",
      "Supplies": "Lesser curvature of the stomach and the abdominal esophagus."
    },
    clinical: "Its esophageal branches anastomose with the azygos system; this porto-systemic anastomosis forms esophageal varices in portal hypertension."
  },
  {
    id: "splenic-artery",
    name: "Splenic artery",
    latin: "Arteria splenica",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Largest branch of the celiac trunk, running tortuously to the spleen.",
    details: {
      "Origin": "Celiac trunk.",
      "Course": "Runs a characteristically tortuous course along the superior border of the pancreas to the hilum of the spleen.",
      "Branches": "Pancreatic branches, short gastric arteries, and the left gastroepiploic (gastro-omental) artery.",
      "Supplies": "Spleen, body and tail of the pancreas, fundus and greater curvature of the stomach."
    },
    clinical: "The most common site of visceral artery aneurysm; its tortuous course increases with age. Closely related to the pancreas in pancreatitis."
  },
  {
    id: "common-hepatic-artery",
    name: "Common hepatic artery",
    latin: "Arteria hepatica communis",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Branch of the celiac trunk supplying the liver, gallbladder, stomach, and duodenum.",
    details: {
      "Origin": "Celiac trunk.",
      "Course": "Passes to the right along the upper border of the pancreas, then ascends toward the porta hepatis.",
      "Branches": "Hepatic artery proper and gastroduodenal artery (and the right gastric artery).",
      "Supplies": "Liver, gallbladder, stomach, duodenum, and pancreas."
    },
    clinical: "Origin of the gastroduodenal artery, which lies behind the first part of the duodenum and may be eroded by a posterior duodenal ulcer causing massive haemorrhage."
  },
  {
    id: "hepatic-artery-proper",
    name: "Hepatic artery proper",
    latin: "Arteria hepatica propria",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Continuation of the common hepatic artery to the liver, carrying about a quarter of hepatic blood flow.",
    details: {
      "Origin": "Common hepatic artery, after the gastroduodenal branch.",
      "Course": "Ascends in the free edge of the lesser omentum (in the portal triad), anterior to the portal vein and left of the bile duct.",
      "Branches": "Right and left hepatic arteries (the right gives the cystic artery) and the right gastric artery.",
      "Supplies": "The liver (around 25% of its blood; the portal vein supplies the rest) and gallbladder."
    },
    clinical: "Lies in the portal triad within the hepatoduodenal ligament; the Pringle manoeuvre compresses this ligament to control hepatic haemorrhage."
  },
  {
    id: "gastroduodenal-artery",
    name: "Gastroduodenal artery",
    latin: "Arteria gastroduodenalis",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Branch of the common hepatic artery supplying the stomach, duodenum, and pancreas.",
    details: {
      "Origin": "Common hepatic artery.",
      "Course": "Descends behind the first part of the duodenum.",
      "Branches": "Right gastroepiploic (gastro-omental) artery and the superior pancreaticoduodenal artery.",
      "Supplies": "Pylorus, proximal duodenum, head of the pancreas, and greater curvature of the stomach."
    },
    clinical: "Lies directly posterior to the first part of the duodenum; erosion by a posterior duodenal ulcer is a classic cause of life-threatening upper GI haemorrhage."
  },
  {
    id: "superior-mesenteric-artery",
    name: "Superior mesenteric artery",
    latin: "Arteria mesenterica superior",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Unpaired branch of the abdominal aorta supplying the midgut.",
    details: {
      "Origin": "Anterior abdominal aorta at the level of L1, just below the celiac trunk.",
      "Course": "Passes anterior to the left renal vein and third part of the duodenum, then into the mesentery.",
      "Branches": "Inferior pancreaticoduodenal, jejunal and ileal arteries, ileocolic, right colic, and middle colic arteries.",
      "Supplies": "Midgut: distal duodenum, jejunum, ileum, cecum, appendix, ascending colon, and proximal two-thirds of the transverse colon."
    },
    clinical: "Embolic occlusion causes acute mesenteric ischaemia (severe pain out of proportion to findings); compresses the third part of the duodenum in SMA (Wilkie's) syndrome and the left renal vein in nutcracker syndrome."
  },
  {
    id: "ileocolic-artery",
    name: "Ileocolic artery",
    latin: "Arteria ileocolica",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Terminal branch of the superior mesenteric artery supplying the ileocecal region and appendix.",
    details: {
      "Origin": "Superior mesenteric artery.",
      "Course": "Runs to the right iliac fossa toward the ileocecal junction.",
      "Branches": "Ascending (colic), anterior and posterior cecal, appendicular, and ileal branches.",
      "Supplies": "Terminal ileum, cecum, appendix, and proximal ascending colon."
    },
    clinical: "Gives rise to the appendicular artery, an end-artery within the mesoappendix; its thrombosis in appendicitis leads to gangrene and perforation."
  },
  {
    id: "middle-colic-artery",
    name: "Middle colic artery",
    latin: "Arteria colica media",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Branch of the superior mesenteric artery supplying the transverse colon.",
    details: {
      "Origin": "Superior mesenteric artery, near its origin.",
      "Course": "Ascends into the transverse mesocolon and divides into right and left branches.",
      "Branches": "Right and left branches, contributing to the marginal artery of Drummond.",
      "Supplies": "Proximal two-thirds of the transverse colon."
    },
    clinical: "Its left branch anastomoses with the left colic artery (from the IMA) at the splenic flexure, a watershed area vulnerable to ischaemic colitis."
  },
  {
    id: "inferior-mesenteric-artery",
    name: "Inferior mesenteric artery",
    latin: "Arteria mesenterica inferior",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Unpaired branch of the abdominal aorta supplying the hindgut.",
    details: {
      "Origin": "Anterior abdominal aorta at the level of L3.",
      "Course": "Descends to the left and into the pelvis, becoming the superior rectal artery.",
      "Branches": "Left colic, sigmoid arteries, and the superior rectal artery.",
      "Supplies": "Hindgut: distal third of the transverse colon, descending colon, sigmoid colon, and superior rectum."
    },
    clinical: "Its superior rectal branch anastomoses with middle/inferior rectal arteries (systemic), a porto-systemic anastomosis relevant to haemorrhoids; the splenic flexure is its proximal watershed."
  },
  {
    id: "left-colic-artery",
    name: "Left colic artery",
    latin: "Arteria colica sinistra",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Branch of the inferior mesenteric artery supplying the descending colon and splenic flexure.",
    details: {
      "Origin": "Inferior mesenteric artery.",
      "Course": "Passes to the left toward the descending colon, dividing into ascending and descending branches.",
      "Branches": "Ascending and descending branches contributing to the marginal artery.",
      "Supplies": "Distal transverse colon, splenic flexure, and descending colon."
    },
    clinical: "Its ascending branch supplies the splenic flexure watershed (Griffiths' point), a site especially prone to ischaemic colitis after low-flow states."
  },
  {
    id: "superior-rectal-artery",
    name: "Superior rectal artery",
    latin: "Arteria rectalis superior",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 1,
    description: "Terminal continuation of the inferior mesenteric artery supplying the upper rectum.",
    details: {
      "Origin": "Terminal continuation of the inferior mesenteric artery.",
      "Course": "Descends into the pelvis in the sigmoid mesocolon, crossing the left common iliac vessels to reach the rectum.",
      "Branches": "Right and left branches to the rectal wall.",
      "Supplies": "Upper rectum, down to the level of the anal columns."
    },
    clinical: "Anastomoses with the middle and inferior rectal arteries; this portal-systemic anastomosis can dilate as anorectal varices in portal hypertension."
  },
  {
    id: "middle-suprarenal-artery",
    name: "Middle suprarenal artery",
    latin: "Arteria suprarenalis media",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired branch of the abdominal aorta supplying the adrenal gland.",
    details: {
      "Origin": "Lateral abdominal aorta at the level of the superior mesenteric artery (L1).",
      "Course": "Passes laterally over the crus of the diaphragm to the adrenal gland.",
      "Branches": "Small branches to the gland.",
      "Supplies": "Middle portion of the suprarenal (adrenal) gland."
    },
    clinical: "The adrenal gland has a triple arterial supply (superior from inferior phrenic, middle from aorta, inferior from renal), but mainly a single central vein."
  },
  {
    id: "renal-artery",
    name: "Renal artery",
    latin: "Arteria renalis",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired branch of the abdominal aorta supplying the kidney.",
    details: {
      "Origin": "Lateral abdominal aorta at the level of L1/L2, just below the superior mesenteric artery.",
      "Course": "Passes laterally to the renal hilum; the right is longer and passes behind the inferior vena cava.",
      "Branches": "Inferior suprarenal artery and segmental arteries to the kidney.",
      "Supplies": "The kidney, and (via the inferior suprarenal branch) part of the adrenal gland and ureter."
    },
    clinical: "Renal artery stenosis (atherosclerotic or fibromuscular dysplasia) causes secondary (renovascular) hypertension through activation of the renin-angiotensin system."
  },
  {
    id: "gonadal-artery",
    name: "Gonadal artery (testicular/ovarian)",
    latin: "Arteria testicularis / ovarica",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired branch of the abdominal aorta supplying the testis or ovary.",
    details: {
      "Origin": "Anterolateral abdominal aorta at the level of L2, below the renal arteries.",
      "Course": "Descends retroperitoneally; the testicular artery passes through the inguinal canal in the spermatic cord, while the ovarian artery passes into the suspensory ligament of the ovary.",
      "Branches": "Branches to the gonad and (testicular) epididymal/cremasteric branches.",
      "Supplies": "Testis or ovary (and adjacent structures)."
    },
    clinical: "Arise high (at L2) because of the embryonic origin of the gonads; the long testicular artery is vulnerable in testicular torsion."
  },
  {
    id: "lumbar-arteries",
    name: "Lumbar arteries",
    latin: "Arteriae lumbales",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired parietal branches of the abdominal aorta supplying the posterior abdominal wall.",
    details: {
      "Origin": "Posterolateral abdominal aorta, usually in four pairs (L1-L4).",
      "Course": "Pass posterolaterally around the lumbar vertebral bodies, deep to the psoas major.",
      "Branches": "Dorsal branches to the back and spinal branches to the vertebral canal.",
      "Supplies": "Posterior abdominal wall, lumbar vertebrae, spinal cord, and back muscles."
    },
    clinical: "Analogous to posterior intercostal arteries; they provide collateral circulation in aortic occlusion and may be a source of retroperitoneal bleeding."
  },

  // ============================================================
  // PELVIC AND LOWER LIMB ARTERIES
  // ============================================================
  {
    id: "common-iliac-artery",
    name: "Common iliac artery",
    latin: "Arteria iliaca communis",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Terminal branch of the abdominal aorta dividing into the internal and external iliac arteries.",
    details: {
      "Origin": "Bifurcation of the abdominal aorta at the level of L4.",
      "Course": "Passes inferolaterally along the medial border of psoas major to the pelvic brim.",
      "Branches": "Internal iliac artery and external iliac artery (no other significant branches).",
      "Supplies": "Pelvis and lower limb via its terminal branches."
    },
    clinical: "Bifurcates anterior to the sacroiliac joint; aneurysms here are often associated with abdominal aortic aneurysm."
  },
  {
    id: "internal-iliac-artery",
    name: "Internal iliac artery",
    latin: "Arteria iliaca interna",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Main artery of the pelvis supplying the pelvic viscera, walls, perineum, and gluteal region.",
    details: {
      "Origin": "Common iliac artery at the pelvic brim (anterior to the sacroiliac joint).",
      "Course": "Descends into the pelvis and divides into anterior and posterior divisions.",
      "Branches": "Anterior division: superior/inferior vesical, uterine, obturator, internal pudendal, inferior gluteal; Posterior division: iliolumbar, lateral sacral, superior gluteal.",
      "Supplies": "Pelvic viscera (bladder, rectum, uterus/prostate), pelvic walls, perineum, gluteal region, and the medial thigh."
    },
    clinical: "Can be ligated to control intractable pelvic or postpartum haemorrhage because rich collateral supply maintains perfusion."
  },
  {
    id: "superior-gluteal-artery",
    name: "Superior gluteal artery",
    latin: "Arteria glutea superior",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Largest branch of the internal iliac, supplying the gluteal region.",
    details: {
      "Origin": "Posterior division of the internal iliac artery.",
      "Course": "Exits the pelvis through the greater sciatic foramen above the piriformis muscle.",
      "Branches": "Superficial and deep branches.",
      "Supplies": "Gluteus maximus, medius, and minimus, and tensor fasciae latae."
    },
    clinical: "Exits above piriformis (the inferior gluteal exits below); important landmark distinguishing it from the inferior gluteal artery."
  },
  {
    id: "inferior-gluteal-artery",
    name: "Inferior gluteal artery",
    latin: "Arteria glutea inferior",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Branch of the internal iliac supplying the buttock and posterior thigh.",
    details: {
      "Origin": "Anterior division of the internal iliac artery.",
      "Course": "Exits the pelvis through the greater sciatic foramen below the piriformis muscle.",
      "Branches": "Muscular branches and the companion artery to the sciatic nerve.",
      "Supplies": "Gluteus maximus (lower part), structures of the buttock, and upper posterior thigh."
    },
    clinical: "Contributes to the cruciate/trochanteric anastomosis around the hip, providing collateral circulation if the femoral artery is occluded."
  },
  {
    id: "obturator-artery",
    name: "Obturator artery",
    latin: "Arteria obturatoria",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Branch of the internal iliac supplying the medial thigh, passing through the obturator canal.",
    details: {
      "Origin": "Anterior division of the internal iliac artery.",
      "Course": "Runs along the lateral pelvic wall and passes through the obturator canal into the medial thigh.",
      "Branches": "Anterior and posterior branches and an acetabular branch.",
      "Supplies": "Muscles of the medial thigh and the head of the femur (via the acetabular branch in children)."
    },
    clinical: "An aberrant obturator artery (from the inferior epigastric) crosses the femoral ring and may be injured during femoral hernia repair (\"corona mortis\")."
  },
  {
    id: "internal-pudendal-artery",
    name: "Internal pudendal artery",
    latin: "Arteria pudenda interna",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Main artery of the perineum and external genitalia, branch of the internal iliac.",
    details: {
      "Origin": "Anterior division of the internal iliac artery.",
      "Course": "Exits the pelvis below piriformis, hooks around the ischial spine, and re-enters the perineum through the lesser sciatic foramen into the pudendal (Alcock's) canal.",
      "Branches": "Inferior rectal, perineal, and arteries to the penis/clitoris (deep and dorsal).",
      "Supplies": "Perineum, anal canal, and external genitalia."
    },
    clinical: "Supplies the erectile tissue; its branches are essential for penile erection, and damage can cause vasculogenic erectile dysfunction."
  },
  {
    id: "uterine-artery",
    name: "Uterine artery",
    latin: "Arteria uterina",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Branch of the internal iliac supplying the uterus, important in pregnancy and surgery.",
    details: {
      "Origin": "Anterior division of the internal iliac artery.",
      "Course": "Runs medially in the base of the broad ligament, crossing superior to the ureter near the lateral fornix of the vagina.",
      "Branches": "Vaginal, ovarian, and tubal branches; ascends along the side of the uterus.",
      "Supplies": "Uterus, cervix, upper vagina, and uterine tube."
    },
    clinical: "Crosses anterior and superior to the ureter (\"water under the bridge\"); the ureter is at risk during uterine artery ligation in hysterectomy."
  },
  {
    id: "superior-vesical-artery",
    name: "Superior vesical artery",
    latin: "Arteria vesicalis superior",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Branch of the internal iliac supplying the upper bladder, derived from the patent proximal umbilical artery.",
    details: {
      "Origin": "Anterior division of the internal iliac artery (proximal part of the umbilical artery).",
      "Course": "Passes to the superior and lateral aspect of the urinary bladder.",
      "Branches": "Vesical branches and (in males) the artery to the ductus deferens.",
      "Supplies": "Superior part of the urinary bladder and the ductus deferens."
    },
    clinical: "The distal occluded umbilical artery becomes the medial umbilical ligament; the patent proximal part gives the superior vesical artery."
  },
  {
    id: "external-iliac-artery",
    name: "External iliac artery",
    latin: "Arteria iliaca externa",
    system: "cardiovascular",
    category: "Artery",
    region: "abdomen-pelvis",
    count: 2,
    description: "Branch of the common iliac that becomes the femoral artery to supply the lower limb.",
    details: {
      "Origin": "Common iliac artery at the pelvic brim.",
      "Course": "Runs along the medial border of psoas major, deep to the inguinal ligament, becoming the femoral artery.",
      "Branches": "Inferior epigastric artery and deep circumflex iliac artery.",
      "Supplies": "Mainly the lower limb (continues as the femoral artery); branches supply the anterior abdominal wall."
    },
    clinical: "Its inferior epigastric branch marks the medial border of the deep inguinal ring, distinguishing direct (medial) from indirect (lateral) inguinal hernias."
  },
  {
    id: "femoral-artery",
    name: "Femoral artery",
    latin: "Arteria femoralis",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Main artery of the lower limb, continuation of the external iliac, supplying the thigh and (as the popliteal) the leg.",
    details: {
      "Origin": "Continuation of the external iliac artery distal to the inguinal ligament.",
      "Course": "Enters the femoral triangle, passes through the adductor (subsartorial) canal, and exits via the adductor hiatus to become the popliteal artery.",
      "Branches": "Superficial epigastric, superficial and deep external pudendal, superficial circumflex iliac, and the profunda femoris (deep femoral) artery.",
      "Supplies": "Lower limb (anterior thigh and, via the popliteal continuation, the leg and foot)."
    },
    clinical: "Pulse palpable at the mid-inguinal point; the standard access site for arterial catheterisation, angiography, and ECMO. The femoral vein lies medial within the femoral sheath."
  },
  {
    id: "profunda-femoris-artery",
    name: "Deep femoral artery (profunda femoris)",
    latin: "Arteria profunda femoris",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Largest branch of the femoral artery, the main supply to the thigh musculature.",
    details: {
      "Origin": "Femoral artery, in the femoral triangle (about 3-4 cm below the inguinal ligament).",
      "Course": "Passes deep (posteriorly) between the adductor muscles.",
      "Branches": "Medial and lateral circumflex femoral arteries and three or four perforating arteries.",
      "Supplies": "Adductor, flexor, and extensor compartments of the thigh, head and neck of the femur, and the hip joint."
    },
    clinical: "Its medial circumflex femoral branch provides the main blood supply to the femoral head; disruption in femoral neck fractures risks avascular necrosis."
  },
  {
    id: "popliteal-artery",
    name: "Popliteal artery",
    latin: "Arteria poplitea",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Continuation of the femoral artery behind the knee, supplying the knee and dividing into the leg arteries.",
    details: {
      "Origin": "Continuation of the femoral artery at the adductor hiatus.",
      "Course": "Descends through the popliteal fossa, deep to the popliteal vein and tibial nerve, ending at the lower border of popliteus by dividing.",
      "Branches": "Genicular (superior, middle, inferior) arteries; terminates as the anterior and posterior tibial arteries.",
      "Supplies": "Knee joint and (via terminal branches) the leg and foot."
    },
    clinical: "Pulse palpated deep in the popliteal fossa with the knee flexed; commonly injured in posterior knee dislocation and the second most common site of peripheral aneurysm."
  },
  {
    id: "anterior-tibial-artery",
    name: "Anterior tibial artery",
    latin: "Arteria tibialis anterior",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Terminal branch of the popliteal artery supplying the anterior compartment of the leg.",
    details: {
      "Origin": "Popliteal artery at the lower border of popliteus.",
      "Course": "Passes anteriorly through a gap in the interosseous membrane and descends on its anterior surface, becoming the dorsalis pedis at the ankle.",
      "Branches": "Anterior and posterior tibial recurrent and malleolar arteries.",
      "Supplies": "Anterior (extensor) compartment of the leg."
    },
    clinical: "The first vessel affected in anterior compartment syndrome; its continuation, the dorsalis pedis, is a key distal pulse."
  },
  {
    id: "posterior-tibial-artery",
    name: "Posterior tibial artery",
    latin: "Arteria tibialis posterior",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Terminal branch of the popliteal artery supplying the posterior leg and the plantar foot.",
    details: {
      "Origin": "Popliteal artery at the lower border of popliteus.",
      "Course": "Descends in the deep posterior compartment, passes behind the medial malleolus in the tarsal tunnel, and divides into the medial and lateral plantar arteries.",
      "Branches": "Fibular (peroneal) artery, nutrient artery to the tibia, and the medial and lateral plantar arteries.",
      "Supplies": "Posterior compartment of the leg and the sole of the foot."
    },
    clinical: "Pulse palpable behind and below the medial malleolus; an important indicator of distal lower-limb perfusion in peripheral arterial disease and diabetes."
  },
  {
    id: "fibular-artery",
    name: "Fibular (peroneal) artery",
    latin: "Arteria fibularis",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Branch of the posterior tibial artery supplying the lateral compartment of the leg.",
    details: {
      "Origin": "Posterior tibial artery, just distal to its origin.",
      "Course": "Descends along the medial side of the fibula in the posterior compartment.",
      "Branches": "Perforating, communicating, and calcaneal branches.",
      "Supplies": "Lateral (fibular) and posterior compartments of the leg, and the lateral ankle."
    },
    clinical: "Provides collateral flow that can maintain foot perfusion if the tibial arteries are occluded; the fibula with its peroneal vessels is used in vascularised bone grafts."
  },
  {
    id: "dorsalis-pedis-artery",
    name: "Dorsalis pedis artery",
    latin: "Arteria dorsalis pedis",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Continuation of the anterior tibial artery on the dorsum of the foot.",
    details: {
      "Origin": "Continuation of the anterior tibial artery distal to the ankle joint.",
      "Course": "Runs along the dorsum of the foot lateral to the extensor hallucis longus tendon toward the first interosseous space.",
      "Branches": "Lateral and medial tarsal, arcuate, and deep plantar arteries.",
      "Supplies": "Dorsum of the foot and contributes to the deep plantar arch."
    },
    clinical: "Pulse palpable lateral to the extensor hallucis longus tendon; a key indicator of distal perfusion, though congenitally absent in a minority of people."
  },
  {
    id: "medial-plantar-artery",
    name: "Medial plantar artery",
    latin: "Arteria plantaris medialis",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Smaller terminal branch of the posterior tibial artery on the medial sole.",
    details: {
      "Origin": "Posterior tibial artery, behind the medial malleolus.",
      "Course": "Runs forward along the medial side of the sole.",
      "Branches": "Superficial and deep branches and digital branches to the great toe.",
      "Supplies": "Medial side of the sole and the medial toes."
    },
    clinical: "Together with the lateral plantar artery it forms the plantar arch; sole arterial supply is relevant to diabetic foot ulceration."
  },
  {
    id: "lateral-plantar-artery",
    name: "Lateral plantar artery",
    latin: "Arteria plantaris lateralis",
    system: "cardiovascular",
    category: "Artery",
    region: "lower-limb",
    count: 2,
    description: "Larger terminal branch of the posterior tibial artery forming most of the deep plantar arch.",
    details: {
      "Origin": "Posterior tibial artery, behind the medial malleolus.",
      "Course": "Passes laterally and forward across the sole, then curves medially to form the deep plantar arch with the dorsalis pedis.",
      "Branches": "Plantar metatarsal arteries and the plantar arch.",
      "Supplies": "Lateral sole and, via the plantar arch, the toes."
    },
    clinical: "Forms the plantar arch (analogous to the palmar arches in the hand), providing dual blood supply to the foot."
  },

  // ============================================================
  // INTERCOSTAL / THORACIC WALL ARTERIES
  // ============================================================
  {
    id: "posterior-intercostal-arteries",
    name: "Posterior intercostal arteries",
    latin: "Arteriae intercostales posteriores",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 2,
    description: "Paired segmental arteries supplying the intercostal spaces and thoracic wall.",
    details: {
      "Origin": "Upper two pairs from the supreme (superior) intercostal artery (costocervical trunk); the lower nine pairs directly from the thoracic aorta.",
      "Course": "Run in the costal groove on the inferior border of each rib, between the innermost and internal intercostal muscles (in the neurovascular bundle, vein-artery-nerve order).",
      "Branches": "Dorsal, collateral, and lateral cutaneous branches.",
      "Supplies": "Intercostal muscles, thoracic wall, parietal pleura, and overlying skin."
    },
    clinical: "Lie in the costal groove at the inferior rib border; chest drains/needles are inserted just above the rib below to avoid the neurovascular bundle."
  },
  {
    id: "anterior-intercostal-arteries",
    name: "Anterior intercostal arteries",
    latin: "Arteriae intercostales anteriores",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 2,
    description: "Small arteries supplying the anterior parts of the upper intercostal spaces.",
    details: {
      "Origin": "Internal thoracic artery (upper six spaces) and its musculophrenic branch (lower spaces).",
      "Course": "Run anteriorly within the intercostal spaces toward the back.",
      "Branches": "Muscular and cutaneous branches.",
      "Supplies": "Anterior intercostal muscles, anterior thoracic wall, and breast (via perforating branches)."
    },
    clinical: "Anastomose with the posterior intercostal arteries, providing collateral flow in aortic coarctation (contributing to rib notching)."
  },
  {
    id: "bronchial-arteries",
    name: "Bronchial arteries",
    latin: "Arteriae bronchiales",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 2,
    description: "Arteries supplying the lung tissue itself (as opposed to the pulmonary arteries which carry blood for gas exchange).",
    details: {
      "Origin": "Usually the descending thoracic aorta (the right bronchial artery often arises from a posterior intercostal artery).",
      "Course": "Run along the posterior aspect of the main bronchi into the lung.",
      "Branches": "Branches following the bronchial tree.",
      "Supplies": "Bronchi, bronchioles, connective tissue and visceral pleura of the lungs (the lung's own nutritive supply)."
    },
    clinical: "Source of bleeding in massive haemoptysis (e.g., bronchiectasis, TB); treated by bronchial artery embolisation."
  },
  {
    id: "esophageal-arteries",
    name: "Esophageal arteries",
    latin: "Arteriae oesophageales",
    system: "cardiovascular",
    category: "Artery",
    region: "thorax",
    count: 1,
    description: "Small unpaired branches of the thoracic aorta supplying the thoracic esophagus.",
    details: {
      "Origin": "Anterior surface of the descending thoracic aorta (typically four or five branches).",
      "Course": "Pass forward to the esophagus, forming an anastomotic chain along it.",
      "Branches": "Ascending and descending branches anastomosing along the esophagus.",
      "Supplies": "Middle (thoracic) portion of the esophagus."
    },
    clinical: "The esophageal blood supply is segmental; the watershed nature contributes to anastomotic leak risk after esophagectomy."
  },

  // ============================================================
  // GREAT VEINS OF THE THORAX
  // ============================================================
  {
    id: "superior-vena-cava",
    name: "Superior vena cava",
    latin: "Vena cava superior",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 1,
    description: "Large vein draining venous blood from the head, neck, upper limbs, and upper thorax into the right atrium.",
    details: {
      "Tributaries": "Right and left brachiocephalic veins and the azygos vein.",
      "Drains": "Head, neck, both upper limbs, and the thoracic wall above the diaphragm.",
      "Drains into": "Right atrium of the heart.",
      "Course": "Formed behind the right first costal cartilage by the union of the two brachiocephalic veins; descends to enter the right atrium at the third costal cartilage."
    },
    clinical: "SVC obstruction (often by bronchogenic carcinoma or lymphoma) causes facial swelling, distended neck veins, and dilated chest wall collaterals (SVC syndrome)."
  },
  {
    id: "inferior-vena-cava",
    name: "Inferior vena cava",
    latin: "Vena cava inferior",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Largest vein in the body, draining the lower limbs, pelvis, and abdomen into the right atrium.",
    details: {
      "Tributaries": "Common iliac veins, lumbar, right gonadal, renal, right suprarenal, inferior phrenic, and hepatic veins.",
      "Drains": "Lower limbs, pelvis, and abdominal viscera (except those drained by the portal system, which reach it via the liver).",
      "Drains into": "Right atrium of the heart.",
      "Course": "Formed by the union of the common iliac veins at L5, ascends to the right of the aorta, passes through the diaphragm at T8, and enters the right atrium."
    },
    clinical: "An IVC filter can be placed to prevent pulmonary embolism in patients with lower-limb DVT who cannot be anticoagulated. It is compressed by the gravid uterus, causing supine hypotension."
  },
  {
    id: "brachiocephalic-vein",
    name: "Brachiocephalic vein",
    latin: "Vena brachiocephalica",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 2,
    description: "Paired veins formed by the union of the internal jugular and subclavian veins, draining into the superior vena cava.",
    details: {
      "Tributaries": "Vertebral, internal thoracic, inferior thyroid, and (left) superior intercostal veins.",
      "Drains": "Head, neck, and upper limb of its respective side.",
      "Drains into": "Superior vena cava (the two unite to form it).",
      "Course": "Formed behind the sternoclavicular joint by the union of the internal jugular and subclavian veins; the left vein is longer and crosses the midline behind the manubrium."
    },
    clinical: "The longer left brachiocephalic vein crosses the midline and may be injured during tracheostomy or sternotomy."
  },
  {
    id: "internal-jugular-vein",
    name: "Internal jugular vein",
    latin: "Vena jugularis interna",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Main vein draining blood from the brain, face, and neck, running in the carotid sheath.",
    details: {
      "Tributaries": "Inferior petrosal sinus, facial, lingual, pharyngeal, superior and middle thyroid veins.",
      "Drains": "Brain (via the dural venous sinuses), superficial face, and neck.",
      "Drains into": "Brachiocephalic vein (uniting with the subclavian vein).",
      "Course": "Begins at the jugular foramen as a continuation of the sigmoid sinus, descends in the carotid sheath lateral to the internal/common carotid artery."
    },
    clinical: "Standard route for central venous catheter insertion and central venous pressure measurement; its pulsations reflect right atrial pressure (JVP)."
  },
  {
    id: "external-jugular-vein",
    name: "External jugular vein",
    latin: "Vena jugularis externa",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Superficial vein draining the scalp and face, crossing the sternocleidomastoid muscle.",
    details: {
      "Tributaries": "Posterior auricular and retromandibular (posterior division) veins; also posterior external jugular, transverse cervical, and suprascapular veins.",
      "Drains": "Scalp and side of the face.",
      "Drains into": "Subclavian vein.",
      "Course": "Formed near the angle of the mandible, descends superficially across sternocleidomastoid, piercing the deep fascia to drain into the subclavian vein."
    },
    clinical: "Visible distension can indicate raised central venous pressure (e.g., right heart failure, SVC obstruction); useful for assessing volume status."
  },
  {
    id: "subclavian-vein",
    name: "Subclavian vein",
    latin: "Vena subclavia",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Continuation of the axillary vein draining the upper limb, joining the internal jugular to form the brachiocephalic vein.",
    details: {
      "Tributaries": "External jugular vein (and the thoracic duct/right lymphatic duct empty near its junction with the IJV).",
      "Drains": "Upper limb and superficial thoracoacromial region.",
      "Drains into": "Brachiocephalic vein (with the internal jugular vein).",
      "Course": "Continuation of the axillary vein at the lateral border of the first rib; passes anterior to scalenus anterior to join the internal jugular vein."
    },
    clinical: "A common site for central venous access; lies anterior to scalenus anterior (the subclavian artery lies posterior to it). The thoracic duct drains at the left venous angle."
  },
  {
    id: "axillary-vein",
    name: "Axillary vein",
    latin: "Vena axillaris",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Main vein draining the upper limb through the axilla, continuation of the basilic vein.",
    details: {
      "Tributaries": "Brachial veins, cephalic vein, and tributaries corresponding to the axillary artery branches.",
      "Drains": "Upper limb and the axilla.",
      "Drains into": "Subclavian vein (at the lateral border of the first rib).",
      "Course": "Formed at the lower border of teres major by the union of the basilic and brachial veins; ascends medial to the axillary artery."
    },
    clinical: "Lies medial to the axillary artery; subclavian/axillary vein thrombosis (Paget-Schroetter syndrome) can follow strenuous arm activity (effort thrombosis)."
  },
  {
    id: "cephalic-vein",
    name: "Cephalic vein",
    latin: "Vena cephalica",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Superficial vein running along the lateral (radial) aspect of the upper limb.",
    details: {
      "Tributaries": "Superficial veins of the lateral forearm and arm and the dorsal venous network of the hand.",
      "Drains": "Lateral (radial) side of the upper limb superficially.",
      "Drains into": "Axillary vein (after passing through the deltopectoral groove and clavipectoral fascia).",
      "Course": "Ascends from the dorsal venous network along the lateral forearm and arm, in the deltopectoral groove, to pierce the clavipectoral fascia."
    },
    clinical: "A common site for venous access and used as a conduit/landmark; runs in the deltopectoral groove with the deltoid branch of the thoracoacromial artery."
  },
  {
    id: "basilic-vein",
    name: "Basilic vein",
    latin: "Vena basilica",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Superficial vein running along the medial (ulnar) aspect of the upper limb, becoming the axillary vein.",
    details: {
      "Tributaries": "Superficial veins of the medial forearm and the dorsal venous network; receives the median cubital vein.",
      "Drains": "Medial (ulnar) side of the upper limb superficially.",
      "Drains into": "Continues as (joins the brachial veins to form) the axillary vein.",
      "Course": "Ascends along the medial forearm and arm, piercing the deep fascia at the mid-arm to run with the brachial vessels."
    },
    clinical: "Its large calibre and superficial course make it useful for PICC lines and as an arteriovenous fistula site for haemodialysis."
  },
  {
    id: "median-cubital-vein",
    name: "Median cubital vein",
    latin: "Vena mediana cubiti",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Superficial vein in the cubital fossa connecting the cephalic and basilic veins.",
    details: {
      "Tributaries": "Receives a deep median vein of the forearm.",
      "Drains": "Connects the cephalic and basilic systems across the cubital fossa.",
      "Drains into": "Basilic vein (and the cephalic vein).",
      "Course": "Runs obliquely across the roof of the cubital fossa, superficial to the bicipital aponeurosis (which separates it from the brachial artery and median nerve)."
    },
    clinical: "The most common site for venepuncture and intravenous cannulation; the bicipital aponeurosis protects the underlying brachial artery and median nerve."
  },
  {
    id: "brachial-veins",
    name: "Brachial veins",
    latin: "Venae brachiales",
    system: "cardiovascular",
    category: "Vein",
    region: "upper-limb",
    count: 2,
    description: "Paired deep veins (venae comitantes) accompanying the brachial artery in the arm.",
    details: {
      "Tributaries": "Radial and ulnar veins (deep veins of the forearm).",
      "Drains": "Deep structures of the arm and forearm.",
      "Drains into": "Axillary vein (uniting with the basilic vein).",
      "Course": "Paired veins flanking the brachial artery, ascending the arm to join the basilic vein at the lower border of teres major."
    },
    clinical: "As deep veins they are accompanied by the artery; deep vein thrombosis here is less common than in the lower limb."
  },

  // ============================================================
  // AZYGOS SYSTEM
  // ============================================================
  {
    id: "azygos-vein",
    name: "Azygos vein",
    latin: "Vena azygos",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 1,
    description: "Unpaired vein draining the posterior thoracic wall and forming an important link between the SVC and IVC.",
    details: {
      "Tributaries": "Right posterior intercostal veins, hemiazygos and accessory hemiazygos veins, esophageal, bronchial, and pericardial veins.",
      "Drains": "Posterior thoracic and abdominal walls and the thoracic viscera.",
      "Drains into": "Superior vena cava (arching over the root of the right lung).",
      "Course": "Ascends on the right side of the vertebral bodies, arching forward over the root of the right lung to enter the SVC."
    },
    clinical: "Forms a key collateral pathway (caval-azygos shunt) if the IVC or SVC is obstructed; the azygos arch is a CT landmark and a site of nodal disease."
  },
  {
    id: "hemiazygos-vein",
    name: "Hemiazygos vein",
    latin: "Vena hemiazygos",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 1,
    description: "Vein draining the lower left posterior thoracic wall, crossing the midline to join the azygos vein.",
    details: {
      "Tributaries": "Lower left posterior intercostal veins and some esophageal and mediastinal veins.",
      "Drains": "Lower left posterior thoracic wall.",
      "Drains into": "Azygos vein (crossing the midline at about T9).",
      "Course": "Ascends on the left side of the vertebral column, then crosses the midline behind the aorta and thoracic duct to join the azygos vein."
    },
    clinical: "Provides left-sided collateral drainage; communicates inferiorly with the left renal vein and ascending lumbar vein."
  },
  {
    id: "accessory-hemiazygos-vein",
    name: "Accessory hemiazygos vein",
    latin: "Vena hemiazygos accessoria",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 1,
    description: "Vein draining the upper left posterior thoracic wall, joining the azygos system.",
    details: {
      "Tributaries": "Upper left (4th-8th) posterior intercostal veins and sometimes left bronchial veins.",
      "Drains": "Upper left posterior thoracic wall.",
      "Drains into": "Azygos vein (crossing the midline around T7/8), or sometimes the hemiazygos vein.",
      "Course": "Descends on the left side of the upper thoracic vertebrae, then crosses the midline to join the azygos vein."
    },
    clinical: "Part of the variable azygos system; provides collateral venous drainage from the left hemithorax."
  },

  // ============================================================
  // PULMONARY VEINS
  // ============================================================
  {
    id: "pulmonary-veins",
    name: "Pulmonary veins",
    latin: "Venae pulmonales",
    system: "cardiovascular",
    category: "Vein",
    region: "thorax",
    count: 2,
    description: "Four veins (two from each lung) carrying oxygenated blood from the lungs to the left atrium.",
    details: {
      "Tributaries": "Intrapulmonary venous tributaries draining the pulmonary capillary beds.",
      "Drains": "Oxygenated blood from the lungs.",
      "Drains into": "Left atrium of the heart.",
      "Course": "Two superior and two inferior pulmonary veins emerge from the hila of the lungs and pass to the posterior aspect of the left atrium."
    },
    clinical: "Carry oxygenated blood (a notable exception among veins); ectopic electrical foci at the pulmonary vein ostia are the target of catheter ablation for atrial fibrillation."
  },

  // ============================================================
  // PORTAL SYSTEM AND ABDOMINAL VEINS
  // ============================================================
  {
    id: "hepatic-portal-vein",
    name: "Hepatic portal vein",
    latin: "Vena portae hepatis",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Vein carrying nutrient-rich, deoxygenated blood from the gastrointestinal tract to the liver for processing.",
    details: {
      "Tributaries": "Superior mesenteric vein, splenic vein (which receives the inferior mesenteric vein), and directly the left/right gastric, cystic, and para-umbilical veins.",
      "Drains": "Abdominal part of the gastrointestinal tract (from lower esophagus to upper anal canal), spleen, pancreas, and gallbladder.",
      "Drains into": "The liver (sinusoids), then via the hepatic veins to the inferior vena cava.",
      "Course": "Formed behind the neck of the pancreas by the union of the superior mesenteric and splenic veins; ascends in the hepatoduodenal ligament (portal triad) to the porta hepatis."
    },
    clinical: "Portal hypertension (usually from cirrhosis) opens porto-systemic anastomoses producing esophageal varices, caput medusae, and rectal varices; the para-umbilical veins recanalise."
  },
  {
    id: "splenic-vein",
    name: "Splenic vein",
    latin: "Vena splenica",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Vein draining the spleen and contributing to the formation of the hepatic portal vein.",
    details: {
      "Tributaries": "Short gastric, left gastroepiploic, pancreatic, and inferior mesenteric veins.",
      "Drains": "Spleen, part of the stomach, and pancreas.",
      "Drains into": "Hepatic portal vein (uniting with the superior mesenteric vein behind the pancreatic neck).",
      "Course": "Runs to the right along the posterior surface of the body and tail of the pancreas."
    },
    clinical: "Splenic vein thrombosis (e.g., from pancreatitis or pancreatic cancer) causes left-sided (sinistral) portal hypertension with isolated gastric varices."
  },
  {
    id: "superior-mesenteric-vein",
    name: "Superior mesenteric vein",
    latin: "Vena mesenterica superior",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Vein draining the midgut, joining the splenic vein to form the hepatic portal vein.",
    details: {
      "Tributaries": "Jejunal, ileal, ileocolic, right colic, and middle colic veins, plus the right gastroepiploic vein.",
      "Drains": "Midgut: small intestine, cecum, ascending colon, and proximal transverse colon.",
      "Drains into": "Hepatic portal vein (uniting with the splenic vein behind the pancreatic neck).",
      "Course": "Ascends in the root of the mesentery to the right of the superior mesenteric artery."
    },
    clinical: "Lies to the right of the SMA; SMV thrombosis is a cause of mesenteric venous ischaemia."
  },
  {
    id: "inferior-mesenteric-vein",
    name: "Inferior mesenteric vein",
    latin: "Vena mesenterica inferior",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Vein draining the hindgut, usually emptying into the splenic vein.",
    details: {
      "Tributaries": "Superior rectal, sigmoid, and left colic veins.",
      "Drains": "Hindgut: rectum, sigmoid colon, descending colon, and splenic flexure.",
      "Drains into": "Usually the splenic vein (sometimes the superior mesenteric vein or their junction).",
      "Course": "Ascends retroperitoneally to the left of the inferior mesenteric artery, behind the body of the pancreas."
    },
    clinical: "Its superior rectal tributary forms a porto-systemic anastomosis with the middle/inferior rectal veins, relevant in haemorrhoids and portal hypertension."
  },
  {
    id: "hepatic-veins",
    name: "Hepatic veins",
    latin: "Venae hepaticae",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 1,
    description: "Veins draining processed blood from the liver directly into the inferior vena cava.",
    details: {
      "Tributaries": "Central veins and intrahepatic venous tributaries (typically three main hepatic veins: right, middle, left).",
      "Drains": "All blood from the liver (both portal venous and hepatic arterial blood).",
      "Drains into": "Inferior vena cava, just below the diaphragm.",
      "Course": "Three main hepatic veins run within the liver and open into the upper IVC at the bare area of the liver."
    },
    clinical: "Hepatic vein outflow obstruction (Budd-Chiari syndrome) causes hepatomegaly, ascites, and abdominal pain; the caudate lobe (which drains directly to the IVC) is often spared/hypertrophied."
  },
  {
    id: "renal-vein",
    name: "Renal vein",
    latin: "Vena renalis",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired veins draining the kidneys into the inferior vena cava; the left is longer and receives additional tributaries.",
    details: {
      "Tributaries": "Left renal vein receives the left suprarenal vein, left gonadal vein, and a lumbar vein; the right is short with no major tributaries.",
      "Drains": "The kidney (and, on the left, the adrenal gland and gonad).",
      "Drains into": "Inferior vena cava.",
      "Course": "The longer left renal vein crosses the midline anterior to the aorta and passes between the superior mesenteric artery and the aorta to reach the IVC."
    },
    clinical: "The left renal vein can be compressed between the SMA and aorta (nutcracker syndrome), causing left flank pain, haematuria, and a left-sided varicocele."
  },
  {
    id: "gonadal-vein",
    name: "Gonadal vein (testicular/ovarian)",
    latin: "Vena testicularis / ovarica",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired veins draining the testis or ovary; the right and left drain to different destinations.",
    details: {
      "Tributaries": "Pampiniform plexus (testicular) or veins from the ovary.",
      "Drains": "Testis or ovary.",
      "Drains into": "Right gonadal vein into the inferior vena cava directly; left gonadal vein into the left renal vein.",
      "Course": "Ascends retroperitoneally along the gonadal artery; formed from the pampiniform plexus in males."
    },
    clinical: "The left testicular vein drains into the left renal vein at a right angle, predisposing to a left-sided varicocele; a new right varicocele warrants imaging for an IVC/renal mass."
  },

  // ============================================================
  // PELVIC AND LOWER LIMB VEINS
  // ============================================================
  {
    id: "common-iliac-vein",
    name: "Common iliac vein",
    latin: "Vena iliaca communis",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired veins formed by the union of the internal and external iliac veins, uniting to form the inferior vena cava.",
    details: {
      "Tributaries": "Internal iliac vein, external iliac vein, and the iliolumbar vein.",
      "Drains": "Pelvis and lower limb of its side.",
      "Drains into": "Inferior vena cava (the two unite at L5).",
      "Course": "Formed anterior to the sacroiliac joint; ascends to unite with its fellow to the right of the L5 vertebral body."
    },
    clinical: "The left common iliac vein passes behind the right common iliac artery; compression here (May-Thurner syndrome) predisposes to left iliofemoral DVT."
  },
  {
    id: "internal-iliac-vein",
    name: "Internal iliac vein",
    latin: "Vena iliaca interna",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 2,
    description: "Vein draining the pelvic viscera, walls, perineum, and gluteal region.",
    details: {
      "Tributaries": "Superior and inferior gluteal, internal pudendal, obturator, lateral sacral veins, and the pelvic venous plexuses.",
      "Drains": "Pelvic organs (bladder, rectum, uterus/prostate), perineum, and gluteal region.",
      "Drains into": "Common iliac vein (uniting with the external iliac vein).",
      "Course": "Ascends from the greater sciatic foramen along the lateral pelvic wall to join the external iliac vein."
    },
    clinical: "The pelvic venous plexuses it drains communicate with the vertebral venous plexus, a route for the spread of pelvic tumours and infection to the spine."
  },
  {
    id: "external-iliac-vein",
    name: "External iliac vein",
    latin: "Vena iliaca externa",
    system: "cardiovascular",
    category: "Vein",
    region: "abdomen-pelvis",
    count: 2,
    description: "Continuation of the femoral vein draining the lower limb, joining the internal iliac vein.",
    details: {
      "Tributaries": "Inferior epigastric and deep circumflex iliac veins.",
      "Drains": "Lower limb (continuation of the femoral vein).",
      "Drains into": "Common iliac vein (uniting with the internal iliac vein).",
      "Course": "Begins behind the inguinal ligament as the continuation of the femoral vein, ascending along the pelvic brim."
    },
    clinical: "Continuation of the lower limb venous drainage; iliofemoral DVT can extend into this segment."
  },
  {
    id: "femoral-vein",
    name: "Femoral vein",
    latin: "Vena femoralis",
    system: "cardiovascular",
    category: "Vein",
    region: "lower-limb",
    count: 2,
    description: "Main deep vein of the thigh, continuation of the popliteal vein, becoming the external iliac vein.",
    details: {
      "Tributaries": "Deep femoral (profunda femoris) vein, great saphenous vein, and muscular tributaries.",
      "Drains": "Deep and superficial structures of the lower limb.",
      "Drains into": "External iliac vein (at the inguinal ligament).",
      "Course": "Ascends through the adductor canal and femoral triangle, lying medial to the femoral artery within the femoral sheath."
    },
    clinical: "Lies medial to the femoral artery (NAVEL: Nerve, Artery, Vein, Empty space, Lymphatics); the access site for central venous lines and a common origin of proximal DVT."
  },
  {
    id: "great-saphenous-vein",
    name: "Great saphenous vein",
    latin: "Vena saphena magna",
    system: "cardiovascular",
    category: "Vein",
    region: "lower-limb",
    count: 2,
    description: "Longest vein in the body, a superficial vein running up the medial leg and thigh.",
    details: {
      "Tributaries": "Superficial veins of the medial leg and thigh and several tributaries near the saphenous opening (e.g., superficial epigastric, external pudendal, superficial circumflex iliac).",
      "Drains": "Superficial tissues of the medial foot, leg, and thigh.",
      "Drains into": "Femoral vein at the saphenofemoral junction (saphenous opening).",
      "Course": "Begins at the medial end of the dorsal venous arch, passes anterior to the medial malleolus, ascends the medial leg and thigh to the saphenous opening."
    },
    clinical: "Consistently anterior to the medial malleolus (a reliable site for venous cutdown); commonly affected by varicose veins and harvested for coronary/peripheral bypass grafting."
  },
  {
    id: "small-saphenous-vein",
    name: "Small saphenous vein",
    latin: "Vena saphena parva",
    system: "cardiovascular",
    category: "Vein",
    region: "lower-limb",
    count: 2,
    description: "Superficial vein draining the lateral foot and the back of the leg.",
    details: {
      "Tributaries": "Superficial veins of the posterolateral leg and the lateral foot.",
      "Drains": "Superficial tissues of the lateral foot and posterior leg.",
      "Drains into": "Popliteal vein at the saphenopopliteal junction (in the popliteal fossa).",
      "Course": "Begins at the lateral end of the dorsal venous arch, passes behind the lateral malleolus, and ascends the midline of the calf to the popliteal fossa."
    },
    clinical: "Passes posterior to the lateral malleolus; accompanies the sural nerve, which is at risk during stripping or harvesting."
  },
  {
    id: "popliteal-vein",
    name: "Popliteal vein",
    latin: "Vena poplitea",
    system: "cardiovascular",
    category: "Vein",
    region: "lower-limb",
    count: 2,
    description: "Deep vein of the popliteal fossa formed from the leg veins, becoming the femoral vein.",
    details: {
      "Tributaries": "Anterior and posterior tibial veins, fibular veins, and the small saphenous vein.",
      "Drains": "Deep structures of the leg and knee.",
      "Drains into": "Femoral vein (at the adductor hiatus).",
      "Course": "Ascends through the popliteal fossa superficial to the popliteal artery and deep to the tibial nerve."
    },
    clinical: "A common site of deep vein thrombosis; compressed during prolonged immobility, contributing to DVT risk."
  },

  // ============================================================
  // VEINS OF THE HEAD AND NECK
  // ============================================================
  {
    id: "facial-vein",
    name: "Facial vein",
    latin: "Vena facialis",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Main vein draining the superficial face, with clinically important intracranial connections.",
    details: {
      "Tributaries": "Angular, superior and inferior labial, deep facial, and submental veins.",
      "Drains": "Superficial structures of the face.",
      "Drains into": "Internal jugular vein (often after joining the anterior division of the retromandibular vein as the common facial vein).",
      "Course": "Begins as the angular vein at the medial canthus, descends across the face behind the facial artery to the neck."
    },
    clinical: "Communicates with the cavernous sinus via the ophthalmic veins and deep facial vein; infection in the \"danger triangle\" of the face can spread to cause cavernous sinus thrombosis."
  },
  {
    id: "retromandibular-vein",
    name: "Retromandibular vein",
    latin: "Vena retromandibularis",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Vein formed within the parotid gland draining the side of the face and scalp.",
    details: {
      "Tributaries": "Superficial temporal and maxillary veins.",
      "Drains": "Lateral scalp, face, and deep facial (infratemporal) structures.",
      "Drains into": "Anterior division joins the facial vein (to the internal jugular); posterior division joins the posterior auricular vein to form the external jugular vein.",
      "Course": "Formed within the parotid gland by union of the superficial temporal and maxillary veins; descends through the gland and divides into anterior and posterior divisions."
    },
    clinical: "Lies within the parotid gland, superficial to the external carotid artery and the facial nerve; a surgical landmark in parotid surgery."
  },
  {
    id: "vertebral-venous-plexus",
    name: "Vertebral venous plexus",
    latin: "Plexus venosi vertebrales",
    system: "cardiovascular",
    category: "Vein",
    region: "spine-back",
    count: 1,
    description: "Valveless network of veins (Batson's plexus) surrounding the vertebral column, draining the spine and spinal cord.",
    details: {
      "Tributaries": "Basivertebral veins, intervertebral veins, and veins of the spinal cord.",
      "Drains": "Vertebral column, spinal cord, and meninges.",
      "Drains into": "Communicates widely with the intercostal, lumbar, pelvic, and azygos veins and the cranial dural sinuses.",
      "Course": "Internal (epidural) and external plexuses run the length of the vertebral column, communicating through the vertebrae and foramina."
    },
    clinical: "Being valveless and widely connected (Batson's plexus), it provides a route for haematogenous metastasis (e.g., prostate, breast, lung cancer) to the vertebrae and brain."
  },

  // ============================================================
  // DURAL VENOUS SINUSES
  // ============================================================
  {
    id: "superior-sagittal-sinus",
    name: "Superior sagittal sinus",
    latin: "Sinus sagittalis superior",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 1,
    description: "Midline dural venous sinus along the top of the falx cerebri draining the superior cerebrum and CSF.",
    details: {
      "Tributaries": "Superior cerebral veins and arachnoid granulations (which return CSF to the venous blood).",
      "Drains": "Superolateral surfaces of the cerebral hemispheres.",
      "Drains into": "Confluence of sinuses (then mainly the right transverse sinus).",
      "Course": "Runs in the superior (attached) border of the falx cerebri from the crista galli to the internal occipital protuberance."
    },
    clinical: "Site of CSF reabsorption via arachnoid granulations; superior sagittal sinus thrombosis raises intracranial pressure and can cause venous infarction and seizures."
  },
  {
    id: "inferior-sagittal-sinus",
    name: "Inferior sagittal sinus",
    latin: "Sinus sagittalis inferior",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 1,
    description: "Small dural venous sinus in the free margin of the falx cerebri.",
    details: {
      "Tributaries": "Veins from the falx cerebri and medial cerebral hemispheres.",
      "Drains": "Medial surfaces of the cerebral hemispheres and the falx cerebri.",
      "Drains into": "Straight sinus (uniting with the great cerebral vein of Galen).",
      "Course": "Runs in the inferior (free) margin of the falx cerebri, above the corpus callosum."
    },
    clinical: "Joins the great cerebral vein to form the straight sinus; less commonly involved in sinus thrombosis than the superior sagittal sinus."
  },
  {
    id: "straight-sinus",
    name: "Straight sinus",
    latin: "Sinus rectus",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 1,
    description: "Dural venous sinus draining deep cerebral structures, running where the falx cerebri meets the tentorium.",
    details: {
      "Tributaries": "Inferior sagittal sinus and the great cerebral vein of Galen.",
      "Drains": "Deep parts of the brain (via the great cerebral vein) and the falx.",
      "Drains into": "Confluence of sinuses (often predominantly the left transverse sinus).",
      "Course": "Runs posteroinferiorly in the junction of the falx cerebri and tentorium cerebelli to the internal occipital protuberance."
    },
    clinical: "Receives deep venous drainage; thrombosis can cause bilateral thalamic and basal ganglia venous infarction."
  },
  {
    id: "transverse-sinus",
    name: "Transverse sinus",
    latin: "Sinus transversus",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Paired dural venous sinuses running laterally from the confluence of sinuses toward the petrous temporal bone.",
    details: {
      "Tributaries": "Confluence of sinuses, superior petrosal sinus, and inferior cerebral and cerebellar veins.",
      "Drains": "Posterior cerebrum and cerebellum (from the confluence).",
      "Drains into": "Sigmoid sinus of the same side.",
      "Course": "Run laterally in the attached margin of the tentorium cerebelli, in grooves on the occipital bone, from the internal occipital protuberance."
    },
    clinical: "Usually asymmetrical (the right is often dominant); a normal variant that must not be mistaken for thrombosis on imaging."
  },
  {
    id: "sigmoid-sinus",
    name: "Sigmoid sinus",
    latin: "Sinus sigmoideus",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "S-shaped continuation of the transverse sinus draining into the internal jugular vein.",
    details: {
      "Tributaries": "Continuation of the transverse sinus; receives some cerebellar and emissary veins.",
      "Drains": "Continues the drainage of the transverse sinus.",
      "Drains into": "Internal jugular vein (at the jugular foramen).",
      "Course": "Follows an S-shaped course in a groove on the mastoid part of the temporal bone and occipital bone to the jugular foramen."
    },
    clinical: "Lies close to the mastoid air cells; middle ear/mastoid infection can spread to cause sigmoid sinus thrombosis."
  },
  {
    id: "cavernous-sinus",
    name: "Cavernous sinus",
    latin: "Sinus cavernosus",
    system: "cardiovascular",
    category: "Vein",
    region: "head-neck",
    count: 2,
    description: "Paired dural venous sinuses on either side of the sella turcica, transmitting several cranial nerves and the internal carotid artery.",
    details: {
      "Tributaries": "Superior and inferior ophthalmic veins, superficial middle cerebral vein, and sphenoparietal sinus.",
      "Drains": "Orbit, parts of the face (via the ophthalmic veins), and the brain.",
      "Drains into": "Superior and inferior petrosal sinuses (then to the internal jugular vein and transverse sinus).",
      "Course": "Lies on either side of the body of the sphenoid and the sella turcica; the internal carotid artery and cranial nerves III, IV, V1, V2, and VI pass through or in its wall."
    },
    clinical: "Cavernous sinus thrombosis (often from facial/orbital infection via the ophthalmic veins) causes painful ophthalmoplegia, proptosis, and cranial nerve palsies (III, IV, V1, V2, VI)."
  }
];
