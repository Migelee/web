// bones.js — Anatomy data: the 206 bones of the adult human skeleton.
// Defines a single global array: window.ANATOMY_BONES
// Schema per entry: { id, name, latin, system, category, region, count, description, details{}, clinical }

window.ANATOMY_BONES = [

  // ===================== CRANIAL BONES (8) =====================
  {
    id: "frontal",
    name: "Frontal bone",
    latin: "Os frontale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The frontal bone forms the forehead, the roof of the orbits, and the anterior part of the cranial vault. It develops from two halves that normally fuse along the metopic suture in early childhood.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Parietal bones (coronal suture), sphenoid, ethmoid, nasal, maxilla, lacrimal and zygomatic bones",
      "Key landmarks": "Supraorbital margin and notch/foramen, glabella, frontal sinuses, frontal crest",
      "Muscle attachments": "Temporalis (along temporal line); frontalis (occipitofrontalis) attaches to overlying galea"
    },
    clinical: "Frontal sinusitis can cause forehead pain and tenderness. The supraorbital nerve exits the supraorbital notch and is a landmark for assessing trigeminal V1 function and eliciting pain in unresponsive patients."
  },
  {
    id: "parietal",
    name: "Parietal bone",
    latin: "Os parietale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired parietal bones form the bulk of the superior and lateral walls of the cranial vault. They meet at the midline sagittal suture.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Opposite parietal (sagittal suture), frontal (coronal), occipital (lambdoid), temporal and sphenoid (squamosal/pterion)",
      "Key landmarks": "Parietal eminence, superior and inferior temporal lines, parietal foramen, grooves for middle meningeal vessels",
      "Muscle attachments": "Temporalis along the inferior temporal line"
    },
    clinical: "The pterion (junction of frontal, parietal, temporal and sphenoid) overlies the anterior branch of the middle meningeal artery; fracture here can cause an extradural haematoma."
  },
  {
    id: "temporal",
    name: "Temporal bone",
    latin: "Os temporale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired temporal bones form the inferolateral cranial wall and part of the base. Each houses the middle and inner ear and bears the mandibular fossa for the temporomandibular joint.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Parietal, occipital, sphenoid, zygomatic bones, and the mandible at the temporomandibular joint",
      "Key landmarks": "Squamous, petrous, tympanic and mastoid parts; external acoustic meatus, mastoid process, styloid process, zygomatic process, mandibular fossa, internal acoustic meatus",
      "Muscle attachments": "Sternocleidomastoid and posterior digastric on mastoid; stylohyoid, styloglossus and stylopharyngeus on styloid process"
    },
    clinical: "The facial nerve traverses the petrous temporal bone; petrous (longitudinal/transverse) fractures may cause facial palsy, hearing loss, or CSF otorrhoea. Mastoiditis is a complication of middle ear infection."
  },
  {
    id: "occipital",
    name: "Occipital bone",
    latin: "Os occipitale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The occipital bone forms the posterior and inferior cranial vault and base, surrounding the foramen magnum through which the brainstem becomes the spinal cord.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Parietal bones (lambdoid suture), temporal bones, sphenoid (clivus), and atlas (C1) at the atlanto-occipital joints",
      "Key landmarks": "Foramen magnum, occipital condyles, external occipital protuberance (inion), nuchal lines, hypoglossal canal, clivus",
      "Muscle attachments": "Trapezius, semispinalis capitis, splenius capitis and suboccipital muscles along the nuchal lines"
    },
    clinical: "Basilar skull fractures may extend through the occipital bone; the occipital condyles articulate with C1, and craniocervical injury is life-threatening. Tonsillar herniation through the foramen magnum (coning) compresses the medulla."
  },
  {
    id: "sphenoid",
    name: "Sphenoid bone",
    latin: "Os sphenoidale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The sphenoid is a butterfly-shaped midline bone of the cranial base that articulates with all other cranial bones, helping bind the skull together. It contains the sella turcica that cradles the pituitary gland.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Frontal, parietal, temporal, occipital, ethmoid, vomer, zygomatic, palatine and maxillary bones",
      "Key landmarks": "Body with sella turcica and sphenoid sinus; greater and lesser wings; pterygoid processes; superior orbital fissure, foramen rotundum, foramen ovale, foramen spinosum, optic canal",
      "Muscle attachments": "Medial and lateral pterygoid muscles to the pterygoid plates; temporalis to greater wing"
    },
    clinical: "Trans-sphenoidal surgery accesses pituitary tumours through the sphenoid sinus. The cavernous sinus lies on the body; lesions here affect cranial nerves III, IV, V1, V2 and VI."
  },
  {
    id: "ethmoid",
    name: "Ethmoid bone",
    latin: "Os ethmoidale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The ethmoid is a light, midline bone between the orbits that contributes to the nasal cavity, orbital walls and anterior cranial base. It contains the ethmoidal air cells.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Frontal, sphenoid, nasal, maxilla, lacrimal, palatine and vomer; opposite inferior nasal concha indirectly",
      "Key landmarks": "Cribriform plate with crista galli, perpendicular plate, superior and middle nasal conchae, orbital plate (lamina papyracea), ethmoidal air cells",
      "Muscle attachments": "None of major clinical note"
    },
    clinical: "Olfactory nerve fibres pass through the cribriform plate; fracture can cause anosmia and CSF rhinorrhoea. The thin lamina papyracea allows ethmoidal infection to spread to the orbit (orbital cellulitis)."
  },

  // ===================== FACIAL BONES (14) =====================
  {
    id: "maxilla",
    name: "Maxilla",
    latin: "Maxilla",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired maxillae fuse in the midline to form the upper jaw, the anterior hard palate, the floor and lateral wall of the nose, and the floor of the orbit. Each contains a large maxillary sinus.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Frontal, ethmoid, nasal, lacrimal, zygomatic, palatine, vomer, inferior nasal concha and opposite maxilla",
      "Key landmarks": "Body with maxillary sinus, frontal/zygomatic/alveolar/palatine processes, infraorbital foramen, alveolar process bearing upper teeth",
      "Muscle attachments": "Buccinator, levator labii superioris, and other muscles of facial expression"
    },
    clinical: "Maxillary sinusitis causes cheek pain and may mimic toothache. Le Fort fractures (I–III) are classified by the level of midface separation through the maxilla. The infraorbital nerve exits the infraorbital foramen."
  },
  {
    id: "zygomatic",
    name: "Zygomatic bone",
    latin: "Os zygomaticum",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired zygomatic (cheek) bones form the prominence of the cheek and the lateral wall and floor of the orbit, contributing to the zygomatic arch.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Frontal, sphenoid, temporal and maxilla",
      "Key landmarks": "Frontal and temporal processes, zygomaticofacial and zygomaticotemporal foramina, contribution to the zygomatic arch",
      "Muscle attachments": "Masseter (from the arch), zygomaticus major and minor"
    },
    clinical: "The zygoma is commonly fractured in facial trauma (tripod/zygomaticomaxillary complex fracture), causing cheek flattening, trismus and infraorbital numbness."
  },
  {
    id: "nasal",
    name: "Nasal bone",
    latin: "Os nasale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired nasal bones form the bony bridge of the nose. They are small, oblong plates that meet in the midline.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Frontal bone, opposite nasal bone, maxilla and perpendicular plate of the ethmoid",
      "Key landmarks": "Bony dorsum of the nose; lower borders continue as the cartilaginous nasal skeleton",
      "Muscle attachments": "Procerus and nasalis (small slips)"
    },
    clinical: "The nasal bones are the most commonly fractured facial bones, typically from a direct blow, causing epistaxis, swelling and deformity."
  },
  {
    id: "lacrimal",
    name: "Lacrimal bone",
    latin: "Os lacrimale",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired lacrimal bones are the smallest facial bones, forming part of the medial wall of each orbit and helping enclose the lacrimal sac.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Frontal, ethmoid, maxilla and inferior nasal concha",
      "Key landmarks": "Posterior lacrimal crest and the lacrimal groove/fossa forming the nasolacrimal canal",
      "Muscle attachments": "Part of the orbicularis oculi (lacrimal part / Horner muscle)"
    },
    clinical: "The lacrimal fossa lodges the lacrimal sac; obstruction of the nasolacrimal duct causes epiphora (watering eye) and dacryocystitis."
  },
  {
    id: "palatine",
    name: "Palatine bone",
    latin: "Os palatinum",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired L-shaped palatine bones lie behind the maxillae, forming the posterior hard palate, part of the lateral nasal wall and a small part of the orbit.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Maxilla, sphenoid, ethmoid, inferior nasal concha, vomer and opposite palatine",
      "Key landmarks": "Horizontal and perpendicular plates, greater and lesser palatine foramina, pyramidal process, orbital process",
      "Muscle attachments": "Part of the soft palate musculature attaches to the posterior border"
    },
    clinical: "The greater palatine foramen transmits the greater palatine nerve, a landmark for palatal anaesthesia. Failure of palatal shelf fusion causes cleft palate."
  },
  {
    id: "inferior-nasal-concha",
    name: "Inferior nasal concha",
    latin: "Concha nasalis inferior",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The paired inferior nasal conchae are scroll-like bones projecting into the nasal cavity from its lateral wall, increasing surface area to warm and humidify inspired air. Unlike the superior and middle conchae, they are independent bones rather than parts of the ethmoid.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Maxilla, lacrimal, ethmoid and palatine bones",
      "Key landmarks": "Curved bony plate overlying the inferior meatus, which receives the nasolacrimal duct",
      "Muscle attachments": "None"
    },
    clinical: "Hypertrophy of the inferior turbinate (often from chronic rhinitis or allergy) causes nasal obstruction and may require turbinate reduction surgery."
  },
  {
    id: "vomer",
    name: "Vomer",
    latin: "Vomer",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The vomer is a single, thin, plough-shaped midline bone that forms the posteroinferior part of the bony nasal septum.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Sphenoid, ethmoid (perpendicular plate), maxillae and palatine bones",
      "Key landmarks": "Forms the posterior bony nasal septum with the perpendicular plate of the ethmoid",
      "Muscle attachments": "None"
    },
    clinical: "Deviation of the bony septum (vomer/ethmoid) is a common cause of nasal obstruction and may require septoplasty."
  },
  {
    id: "mandible",
    name: "Mandible",
    latin: "Mandibula",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The mandible is the lower jaw, the largest and strongest facial bone and the only freely mobile skull bone, articulating with the temporal bones at the temporomandibular joints.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Temporal bones at the temporomandibular joints (TMJ)",
      "Key landmarks": "Body, ramus, angle, condylar and coronoid processes, mental foramen, mandibular foramen and canal, alveolar process bearing lower teeth",
      "Muscle attachments": "Masseter and medial pterygoid (angle), temporalis (coronoid), lateral pterygoid (condylar neck); mylohyoid, geniohyoid, digastric"
    },
    clinical: "Mandibular fractures often occur at two sites (e.g. condyle and contralateral body) because of its ring-like shape. The inferior alveolar nerve runs in the mandibular canal and is anaesthetised for lower dental work; the mental nerve exits at the mental foramen."
  },

  // ===================== AUDITORY OSSICLES (6) =====================
  {
    id: "malleus",
    name: "Malleus",
    latin: "Malleus",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The malleus (hammer) is the largest and most lateral of the three auditory ossicles in the middle ear. Its handle is attached to the tympanic membrane, and it transmits sound vibrations to the incus.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Incus (incudomalleolar joint); attached to the tympanic membrane",
      "Key landmarks": "Head, neck, handle (manubrium), anterior and lateral processes",
      "Muscle attachments": "Tensor tympani inserts on the handle (innervated by mandibular nerve, V3)"
    },
    clinical: "The handle and lateral process of the malleus are visible landmarks on otoscopy. Ossicular discontinuity or fixation causes conductive hearing loss."
  },
  {
    id: "incus",
    name: "Incus",
    latin: "Incus",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The incus (anvil) is the middle of the three auditory ossicles, lying between the malleus and the stapes and conveying vibrations between them.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Malleus (incudomalleolar joint) and stapes (incudostapedial joint)",
      "Key landmarks": "Body, short (horizontal) limb, long (vertical) limb with lenticular process",
      "Muscle attachments": "None"
    },
    clinical: "The long process of the incus has a tenuous blood supply and is prone to erosion in chronic otitis media or cholesteatoma, causing conductive hearing loss; it is often reconstructed in ossiculoplasty."
  },
  {
    id: "stapes",
    name: "Stapes",
    latin: "Stapes",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 2,
    description: "The stapes (stirrup) is the smallest bone in the human body and the most medial auditory ossicle. Its footplate sits in the oval window, transmitting vibration to the inner ear.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "Incus (incudostapedial joint); footplate in the oval window (fenestra vestibuli)",
      "Key landmarks": "Head, anterior and posterior crura (limbs), and footplate (base)",
      "Muscle attachments": "Stapedius inserts on the neck (innervated by the facial nerve, VII)"
    },
    clinical: "Otosclerosis fixes the stapes footplate in the oval window, causing progressive conductive hearing loss treated by stapedectomy. Loss of the stapedial reflex (stapedius) causes hyperacusis in facial nerve palsy."
  },

  // ===================== HYOID (1) =====================
  {
    id: "hyoid",
    name: "Hyoid bone",
    latin: "Os hyoideum",
    system: "skeletal",
    category: "Bone",
    region: "head-neck",
    count: 1,
    description: "The hyoid is a U-shaped bone in the anterior neck at the C3 level. It is unique in articulating with no other bone, being suspended by muscles and ligaments, and anchors the tongue and larynx.",
    details: {
      "Type": "Irregular bone",
      "Articulations": "None (suspended by stylohyoid ligaments and muscles)",
      "Key landmarks": "Body, greater horns (cornua) and lesser horns",
      "Muscle attachments": "Suprahyoid muscles (mylohyoid, geniohyoid, stylohyoid, digastric) and infrahyoid muscles (sternohyoid, thyrohyoid, omohyoid); middle pharyngeal constrictor and hyoglossus"
    },
    clinical: "Fracture of the hyoid is uncommon but is a classic sign of manual strangulation found at autopsy."
  },

  // ===================== VERTEBRAL COLUMN (26) =====================
  {
    id: "atlas",
    name: "Atlas (C1)",
    latin: "Atlas (vertebra cervicalis I)",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 1,
    description: "The atlas is the first cervical vertebra, a ring-shaped bone with no body or spinous process. It supports the skull and permits the nodding 'yes' movement at the atlanto-occipital joints.",
    details: {
      "Type": "Irregular bone (atypical vertebra)",
      "Articulations": "Occipital condyles above (atlanto-occipital joints), axis below (atlanto-axial joints) including the dens",
      "Key landmarks": "Anterior and posterior arches, lateral masses, superior and inferior articular facets, transverse foramina, facet for the dens",
      "Muscle attachments": "Rectus capitis lateralis and the suboccipital muscles to the transverse processes and posterior arch"
    },
    clinical: "A Jefferson fracture is a burst fracture of the atlas ring from axial loading; the transverse ligament holds the dens against the anterior arch, and its rupture causes atlanto-axial instability."
  },
  {
    id: "axis",
    name: "Axis (C2)",
    latin: "Axis (vertebra cervicalis II)",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 1,
    description: "The axis is the second cervical vertebra, distinguished by the odontoid process (dens) projecting upward, around which the atlas and head rotate to produce the 'no' movement.",
    details: {
      "Type": "Irregular bone (atypical vertebra)",
      "Articulations": "Atlas above (median and lateral atlanto-axial joints), C3 below",
      "Key landmarks": "Dens (odontoid process), bifid spinous process, superior and inferior articular facets, transverse foramina",
      "Muscle attachments": "Obliquus capitis inferior and other deep neck muscles to the spinous process"
    },
    clinical: "Fractures of the dens (odontoid fractures) are common in the elderly after falls and may be unstable. The 'hangman's fracture' is a bilateral fracture of the pars/pedicles of C2."
  },
  {
    id: "cervical-vertebrae",
    name: "Cervical vertebrae (C3–C7)",
    latin: "Vertebrae cervicales III–VII",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 5,
    description: "The typical cervical vertebrae C3–C7 form the lower neck. They are small with a transverse foramen in each transverse process for the vertebral artery, and C7 (vertebra prominens) has a long, palpable spinous process.",
    details: {
      "Type": "Irregular bones",
      "Articulations": "Adjacent vertebrae via intervertebral discs and zygapophysial (facet) joints; uncovertebral joints laterally",
      "Key landmarks": "Triangular vertebral foramen, transverse foramina (vertebral artery in C6 upward), bifid spinous processes (C3–C6), anterior tubercle of C6 (carotid tubercle)",
      "Muscle attachments": "Scalenes, longus colli/capitis, splenius and erector spinae groups"
    },
    clinical: "The carotid tubercle (C6) is a site to compress the common carotid artery. Cervical disc herniation typically affects the nerve root numbered below the disc (e.g. C5/6 disc affects the C6 root)."
  },
  {
    id: "thoracic-vertebrae",
    name: "Thoracic vertebrae (T1–T12)",
    latin: "Vertebrae thoracicae I–XII",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 12,
    description: "The twelve thoracic vertebrae form the mid back and articulate with the ribs. They have heart-shaped bodies and long, downward-sloping spinous processes, producing the primary thoracic kyphosis.",
    details: {
      "Type": "Irregular bones",
      "Articulations": "Adjacent vertebrae via discs and facet joints; costal facets (demifacets) for rib heads and transverse process facets for rib tubercles",
      "Key landmarks": "Costal demifacets on the body, costal facets on transverse processes, long overlapping spinous processes, circular vertebral foramen",
      "Muscle attachments": "Erector spinae, transversospinalis (semispinalis, multifidus, rotatores), and trapezius/rhomboids via spinous processes"
    },
    clinical: "Osteoporotic wedge (compression) fractures commonly occur in the thoracic spine, increasing kyphosis ('dowager's hump'). The narrow thoracic canal makes cord compression more likely here."
  },
  {
    id: "lumbar-vertebrae",
    name: "Lumbar vertebrae (L1–L5)",
    latin: "Vertebrae lumbales I–V",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 5,
    description: "The five lumbar vertebrae are the largest and strongest, bearing most of the body's weight in the lower back. They have massive kidney-shaped bodies and short, blunt spinous processes.",
    details: {
      "Type": "Irregular bones",
      "Articulations": "Adjacent vertebrae via discs and facet joints; L5 with the sacrum at the lumbosacral joint",
      "Key landmarks": "Large body, short stout spinous and transverse (costal) processes, mammillary and accessory processes, triangular vertebral foramen",
      "Muscle attachments": "Psoas major (bodies/transverse processes), quadratus lumborum, erector spinae and latissimus dorsi (thoracolumbar fascia)"
    },
    clinical: "L4/5 and L5/S1 disc herniations are the most common, causing sciatica. Lumbar puncture is performed below L1/L2 (where the cord ends) at the L3/4 or L4/5 interspace. Spondylolisthesis often occurs at L5/S1."
  },
  {
    id: "sacrum",
    name: "Sacrum",
    latin: "Os sacrum",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 1,
    description: "The sacrum is a triangular bone formed by fusion of five sacral vertebrae. It wedges between the two hip bones, forming the posterior wall of the pelvis and transmitting weight to the pelvic girdle.",
    details: {
      "Type": "Irregular bone (fused)",
      "Articulations": "L5 above, coccyx below, and the ilium on each side at the sacroiliac joints",
      "Key landmarks": "Sacral promontory, ala, anterior and posterior sacral foramina, median sacral crest, sacral canal and hiatus, auricular surface",
      "Muscle attachments": "Piriformis (pelvic surface), erector spinae and gluteus maximus (posterior surface)"
    },
    clinical: "The sacral hiatus is the site for caudal epidural anaesthesia. Sacral insufficiency fractures occur in osteoporosis. The sacral promontory is an obstetric landmark for the pelvic inlet."
  },
  {
    id: "coccyx",
    name: "Coccyx",
    latin: "Os coccygis",
    system: "skeletal",
    category: "Bone",
    region: "spine-back",
    count: 1,
    description: "The coccyx (tailbone) is the small triangular bone at the base of the vertebral column, formed by fusion of three to five rudimentary coccygeal vertebrae.",
    details: {
      "Type": "Irregular bone (fused)",
      "Articulations": "Sacrum above (sacrococcygeal joint)",
      "Key landmarks": "Coccygeal cornua, transverse processes of the first segment",
      "Muscle attachments": "Levator ani, coccygeus, gluteus maximus and the anococcygeal ligament"
    },
    clinical: "Coccydynia (coccygeal pain) follows falls onto the buttocks or childbirth. The coccyx is a landmark for the sacrococcygeal region and pilonidal disease."
  },

  // ===================== THORAX (25) =====================
  {
    id: "sternum",
    name: "Sternum",
    latin: "Sternum",
    system: "skeletal",
    category: "Bone",
    region: "thorax",
    count: 1,
    description: "The sternum (breastbone) is a flat bone in the centre of the anterior chest wall, formed by the manubrium, body and xiphoid process. It articulates with the clavicles and costal cartilages.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Clavicles (sternoclavicular joints) and costal cartilages of ribs 1–7",
      "Key landmarks": "Manubrium, body, xiphoid process, jugular (suprasternal) notch, sternal angle (of Louis) at the manubriosternal joint",
      "Muscle attachments": "Pectoralis major, sternocleidomastoid, sternohyoid, sternothyroid and the diaphragm (xiphoid)"
    },
    clinical: "The sternal angle marks the level of the 2nd costal cartilage (rib counting), the T4/5 disc, and the bifurcation of the trachea. The sternum is the site for bone marrow aspiration and is divided in median sternotomy."
  },
  {
    id: "true-ribs",
    name: "True ribs (1–7)",
    latin: "Costae verae (I–VII)",
    system: "skeletal",
    category: "Bone",
    region: "thorax",
    count: 14,
    description: "The true (vertebrosternal) ribs 1–7 articulate posteriorly with the thoracic vertebrae and connect directly to the sternum by their own costal cartilage. Rib 1 is atypical: short, broad, flat and the most curved.",
    details: {
      "Type": "Flat bones (curved)",
      "Articulations": "Vertebral bodies (costovertebral) and transverse processes (costotransverse) posteriorly; sternum anteriorly via costal cartilage",
      "Key landmarks": "Head, neck, tubercle, angle, shaft and costal groove; rib 1 has grooves for the subclavian vessels and scalene tubercle",
      "Muscle attachments": "Intercostal muscles, serratus anterior, scalenes (rib 1–2), pectoralis minor region"
    },
    clinical: "Rib 1 fracture implies high-energy trauma and risk to the subclavian vessels and brachial plexus. The neurovascular bundle runs in the costal groove, so chest drains and needles are placed just above the lower rib."
  },
  {
    id: "false-ribs",
    name: "False ribs (8–10)",
    latin: "Costae spuriae (VIII–X)",
    system: "skeletal",
    category: "Bone",
    region: "thorax",
    count: 6,
    description: "The false (vertebrochondral) ribs 8–10 attach posteriorly to the vertebrae but join the sternum only indirectly, their costal cartilages connecting to the cartilage of the rib above to form the costal margin.",
    details: {
      "Type": "Flat bones (curved)",
      "Articulations": "Vertebral bodies and transverse processes posteriorly; costal cartilage of the rib above anteriorly",
      "Key landmarks": "Head, neck, tubercle, angle, shaft and costal groove; their cartilages form the costal margin",
      "Muscle attachments": "Intercostal muscles, abdominal wall muscles (external/internal oblique, transversus abdominis) and diaphragm"
    },
    clinical: "The costal margin (formed by ribs 7–10 cartilages) is a surface landmark; the right costal margin overlies the liver edge and the gallbladder fundus near the 9th costal cartilage (Murphy's point)."
  },
  {
    id: "floating-ribs",
    name: "Floating ribs (11–12)",
    latin: "Costae fluctuantes (XI–XII)",
    system: "skeletal",
    category: "Bone",
    region: "thorax",
    count: 4,
    description: "The floating (vertebral) ribs 11 and 12 articulate only with the vertebral bodies posteriorly and have no anterior attachment, ending in the muscle of the abdominal wall. They are short with pointed cartilaginous tips.",
    details: {
      "Type": "Flat bones (curved, short)",
      "Articulations": "Vertebral bodies of T11 and T12 only (single facet, no costotransverse joint)",
      "Key landmarks": "Head and shaft only; lack a neck, tubercle and well-defined angle",
      "Muscle attachments": "Quadratus lumborum, abdominal wall muscles and diaphragm"
    },
    clinical: "The 12th rib is a posterior landmark in the renal angle; the kidney lies deep to it, so a posterolateral surgical approach risks pleural injury. These ribs are relatively mobile and rarely fractured."
  },

  // ===================== UPPER LIMB (64) =====================
  {
    id: "clavicle",
    name: "Clavicle",
    latin: "Clavicula",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The clavicle (collarbone) is an S-shaped long bone that struts the shoulder away from the trunk, connecting the upper limb to the axial skeleton. It is the first bone to ossify and the only long bone to ossify by intramembranous ossification.",
    details: {
      "Type": "Long bone",
      "Articulations": "Sternum (sternoclavicular joint, the only joint between the upper limb and axial skeleton) and acromion (acromioclavicular joint)",
      "Key landmarks": "Sternal and acromial ends, conoid tubercle, trapezoid line, subclavian groove",
      "Muscle attachments": "Pectoralis major, deltoid, trapezius, sternocleidomastoid, subclavius; coracoclavicular ligaments"
    },
    clinical: "The clavicle is one of the most commonly fractured bones, usually at the junction of the middle and lateral thirds; the medial fragment is pulled up by sternocleidomastoid. It can fracture during difficult childbirth."
  },
  {
    id: "scapula",
    name: "Scapula",
    latin: "Scapula",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The scapula (shoulder blade) is a flat triangular bone on the posterolateral thoracic wall that links the humerus to the clavicle and provides a mobile base for shoulder movement.",
    details: {
      "Type": "Flat bone",
      "Articulations": "Humerus (glenohumeral joint at the glenoid cavity) and clavicle (acromioclavicular joint)",
      "Key landmarks": "Glenoid cavity, spine, acromion, coracoid process, supra/infraspinous fossae, subscapular fossa, superior/medial/lateral borders, suprascapular notch",
      "Muscle attachments": "Rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis), deltoid, trapezius, serratus anterior, rhomboids, biceps and triceps (tubercles)"
    },
    clinical: "Scapular winging results from serratus anterior weakness (long thoracic nerve palsy). The suprascapular nerve may be entrapped at the suprascapular notch. Scapular fractures indicate high-energy trauma."
  },
  {
    id: "humerus",
    name: "Humerus",
    latin: "Humerus",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The humerus is the long bone of the arm, articulating with the scapula at the shoulder and the radius and ulna at the elbow.",
    details: {
      "Type": "Long bone",
      "Articulations": "Scapula (glenohumeral joint), radius (capitulum) and ulna (trochlea) at the elbow",
      "Key landmarks": "Head, anatomical and surgical necks, greater and lesser tubercles, intertubercular (bicipital) groove, deltoid tuberosity, radial (spiral) groove, capitulum, trochlea, medial and lateral epicondyles, olecranon fossa",
      "Muscle attachments": "Rotator cuff (tubercles), deltoid (tuberosity), pectoralis major/teres major/latissimus dorsi (bicipital groove region), brachialis, common flexor and extensor origins (epicondyles)"
    },
    clinical: "The surgical neck fracture endangers the axillary nerve (deltoid paralysis, regimental-badge sensory loss). The radial nerve in the spiral groove is injured in midshaft fractures (wrist drop). Supracondylar fractures (children) risk the brachial artery and median nerve."
  },
  {
    id: "radius",
    name: "Radius",
    latin: "Radius",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The radius is the lateral forearm bone (on the thumb side). It is the main bone articulating with the carpus at the wrist and rotates around the ulna during pronation and supination.",
    details: {
      "Type": "Long bone",
      "Articulations": "Humerus (capitulum), ulna (proximal and distal radio-ulnar joints), and scaphoid and lunate at the wrist",
      "Key landmarks": "Head, neck, radial tuberosity, styloid process, ulnar notch, dorsal (Lister's) tubercle",
      "Muscle attachments": "Biceps brachii (radial tuberosity), supinator, pronator teres, pronator quadratus, brachioradialis (styloid)"
    },
    clinical: "A Colles fracture is a distal radius fracture with dorsal displacement ('dinner-fork' deformity) from a fall on an outstretched hand; a Smith fracture has volar displacement. A fall in a child may cause a buckle (torus) fracture."
  },
  {
    id: "ulna",
    name: "Ulna",
    latin: "Ulna",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The ulna is the medial forearm bone (little-finger side) and the primary bone forming the elbow joint with the humerus. It is longer than the radius and tapers distally.",
    details: {
      "Type": "Long bone",
      "Articulations": "Humerus (trochlea at the trochlear notch), radius (proximal and distal radio-ulnar joints); articulates with the wrist only indirectly via an articular disc",
      "Key landmarks": "Olecranon, coronoid process, trochlear and radial notches, ulnar tuberosity, head and styloid process",
      "Muscle attachments": "Triceps brachii (olecranon), brachialis (coronoid/tuberosity), flexor and extensor carpi ulnaris, pronator quadratus"
    },
    clinical: "An olecranon fracture disrupts the triceps insertion and impairs active extension. A Monteggia fracture is a proximal ulnar fracture with radial head dislocation. The ulnar nerve is palpable behind the medial epicondyle ('funny bone')."
  },
  {
    id: "scaphoid",
    name: "Scaphoid",
    latin: "Os scaphoideum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The scaphoid is a boat-shaped carpal bone in the proximal row on the radial (lateral) side of the wrist. It forms the floor of the anatomical snuffbox and links the proximal and distal carpal rows.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Radius, lunate, capitate, trapezium and trapezoid",
      "Key landmarks": "Scaphoid tubercle (palpable at the base of the thenar eminence), waist",
      "Muscle attachments": "Part of the flexor retinaculum attaches to the tubercle"
    },
    clinical: "The scaphoid is the most commonly fractured carpal bone (fall on outstretched hand), with tenderness in the anatomical snuffbox. Its blood supply enters distally, so waist/proximal fractures risk avascular necrosis and non-union."
  },
  {
    id: "lunate",
    name: "Lunate",
    latin: "Os lunatum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The lunate is a crescent-shaped carpal bone in the centre of the proximal row, articulating with the radius. It is key to the stability of the wrist.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Radius, scaphoid, triquetrum, capitate and hamate",
      "Key landmarks": "Concave distal surface for the capitate head",
      "Muscle attachments": "None directly"
    },
    clinical: "The lunate is the most commonly dislocated carpal bone and can compress the median nerve in the carpal tunnel. Avascular necrosis of the lunate is called Kienbock disease."
  },
  {
    id: "triquetrum",
    name: "Triquetrum",
    latin: "Os triquetrum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The triquetrum is a pyramidal carpal bone on the medial (ulnar) side of the proximal row, articulating with the pisiform on its palmar surface.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Lunate, pisiform, hamate and the articular disc of the distal radio-ulnar joint",
      "Key landmarks": "Oval facet for the pisiform",
      "Muscle attachments": "None directly"
    },
    clinical: "The triquetrum is the second or third most commonly fractured carpal bone, often a dorsal avulsion or body fracture from a fall."
  },
  {
    id: "pisiform",
    name: "Pisiform",
    latin: "Os pisiforme",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The pisiform is a small, pea-shaped sesamoid carpal bone lying within the tendon of flexor carpi ulnaris on the palmar surface of the triquetrum.",
    details: {
      "Type": "Short (carpal) / sesamoid bone",
      "Articulations": "Triquetrum only",
      "Key landmarks": "Palpable prominence at the base of the hypothenar eminence; medial boundary of the ulnar (Guyon) canal",
      "Muscle attachments": "Flexor carpi ulnaris (encloses it); abductor digiti minimi and pisohamate/pisometacarpal ligaments"
    },
    clinical: "The pisiform is a landmark for the ulnar nerve and artery in Guyon's canal, where the ulnar nerve can be compressed (e.g. cyclist's palsy)."
  },
  {
    id: "trapezium",
    name: "Trapezium",
    latin: "Os trapezium",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The trapezium is a carpal bone in the distal row on the radial side, articulating with the first metacarpal to form the saddle joint that gives the thumb its mobility.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Scaphoid, trapezoid, and the first and second metacarpals",
      "Key landmarks": "Saddle-shaped facet for the thumb metacarpal; tubercle and groove for the flexor carpi radialis tendon",
      "Muscle attachments": "Thenar muscles (opponens pollicis, abductor pollicis brevis, flexor pollicis brevis) and flexor retinaculum"
    },
    clinical: "Osteoarthritis of the first carpometacarpal (trapeziometacarpal) joint is common, especially in older women, causing thumb-base pain; trapeziectomy is a treatment."
  },
  {
    id: "trapezoid",
    name: "Trapezoid",
    latin: "Os trapezoideum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The trapezoid is the smallest bone in the distal carpal row, wedge-shaped and lying between the trapezium and capitate at the base of the index finger.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Scaphoid, trapezium, capitate and the second metacarpal",
      "Key landmarks": "Wedge shape with a wide dorsal surface",
      "Muscle attachments": "Part of flexor pollicis brevis origin"
    },
    clinical: "Isolated trapezoid fracture or dislocation is rare because it is well protected and keystone-shaped within the carpal arch."
  },
  {
    id: "capitate",
    name: "Capitate",
    latin: "Os capitatum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The capitate is the largest carpal bone, occupying the centre of the wrist with a rounded head that fits into the concavity of the scaphoid and lunate.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Scaphoid, lunate, trapezoid, hamate, and the second, third and fourth metacarpals",
      "Key landmarks": "Rounded head, neck and body; central keystone of the distal carpal row",
      "Muscle attachments": "Adductor pollicis (oblique head) origin"
    },
    clinical: "Capitate fractures are uncommon and often occur with scaphoid fractures (scaphocapitate syndrome); its retrograde blood supply risks avascular necrosis of the proximal pole."
  },
  {
    id: "hamate",
    name: "Hamate",
    latin: "Os hamatum",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 2,
    description: "The hamate is a wedge-shaped carpal bone on the medial side of the distal row, distinguished by the hook of the hamate (hamulus) projecting from its palmar surface.",
    details: {
      "Type": "Short (carpal) bone",
      "Articulations": "Lunate, triquetrum, capitate, and the fourth and fifth metacarpals",
      "Key landmarks": "Hook of the hamate (hamulus), which forms the lateral wall of Guyon's canal and the medial pillar of the carpal tunnel",
      "Muscle attachments": "Hypothenar muscles (flexor and opponens digiti minimi) and flexor retinaculum"
    },
    clinical: "Fracture of the hook of the hamate occurs in racquet, golf and bat sports and may injure the adjacent ulnar nerve and artery in Guyon's canal."
  },
  {
    id: "metacarpals",
    name: "Metacarpals (I–V)",
    latin: "Ossa metacarpi (I–V)",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 10,
    description: "The five metacarpals form the skeleton of the palm, numbered I (thumb) to V (little finger). Each has a base, shaft and head, the heads forming the knuckles.",
    details: {
      "Type": "Long bones (miniature)",
      "Articulations": "Carpals at the carpometacarpal joints (proximally) and proximal phalanges at the metacarpophalangeal joints (distally); the thumb has a saddle joint with the trapezium",
      "Key landmarks": "Base, shaft, head (knuckle); the first metacarpal is shorter and more mobile",
      "Muscle attachments": "Interossei, adductor pollicis, opponens pollicis and digiti minimi, flexor/extensor carpi radialis and ulnaris (to bases)"
    },
    clinical: "A boxer's fracture is a fracture of the neck of the 5th metacarpal from punching. A Bennett fracture is an intra-articular fracture-dislocation of the base of the first metacarpal."
  },
  {
    id: "phalanges-hand",
    name: "Phalanges of the hand",
    latin: "Phalanges manus",
    system: "skeletal",
    category: "Bone",
    region: "upper-limb",
    count: 28,
    description: "The phalanges are the bones of the fingers and thumb. Each finger has three (proximal, middle and distal); the thumb has only two (proximal and distal), giving 14 per hand and 28 in total.",
    details: {
      "Type": "Long bones (miniature)",
      "Articulations": "Metacarpals at metacarpophalangeal joints; adjacent phalanges at proximal and distal interphalangeal joints (the thumb has a single interphalangeal joint)",
      "Key landmarks": "Base, shaft and head; distal phalanges bear the ungual tuberosity supporting the nail",
      "Muscle attachments": "Flexor digitorum superficialis (middle phalanges), flexor/extensor digitorum profundus and the extensor expansion (distal phalanges), interossei and lumbricals"
    },
    clinical: "A mallet finger is avulsion of the extensor tendon from the distal phalanx, leaving a drooped fingertip. Tuft fractures of the distal phalanx are common crush injuries."
  },

  // ===================== LOWER LIMB (62) =====================
  {
    id: "hip-bone",
    name: "Hip bone (os coxae)",
    latin: "Os coxae",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "Each hip bone is a large, irregular bone formed by fusion of the ilium, ischium and pubis at the acetabulum (complete by about age 16–23). The two hip bones with the sacrum and coccyx form the bony pelvis.",
    details: {
      "Type": "Irregular bone (fused ilium, ischium and pubis)",
      "Articulations": "Femur (hip joint at the acetabulum), sacrum (sacroiliac joint), and the opposite hip bone (pubic symphysis)",
      "Key landmarks": "Acetabulum, iliac crest and spines (ASIS, AIIS, PSIS), greater/lesser sciatic notches, ischial spine and tuberosity, obturator foramen, pubic tubercle and symphysis",
      "Muscle attachments": "Gluteals, iliacus, hamstrings (ischial tuberosity), adductors and rectus abdominis (pubis), sartorius (ASIS), rectus femoris (AIIS)"
    },
    clinical: "The ischial tuberosity bears weight when sitting and is the origin of the hamstrings (avulsion in athletes). Pelvic fractures may injure the bladder, urethra and major vessels. The ASIS and pubic tubercle are landmarks for the inguinal ligament."
  },
  {
    id: "femur",
    name: "Femur",
    latin: "Os femoris",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The femur is the thigh bone, the longest, heaviest and strongest bone in the body. It articulates with the hip bone proximally and the tibia and patella distally.",
    details: {
      "Type": "Long bone",
      "Articulations": "Hip bone (acetabulum) at the hip joint; tibia and patella at the knee",
      "Key landmarks": "Head with fovea, neck, greater and lesser trochanters, intertrochanteric line/crest, linea aspera, medial and lateral condyles and epicondyles, adductor tubercle",
      "Muscle attachments": "Gluteus medius/minimus and piriformis (greater trochanter), iliopsoas (lesser trochanter), adductors and vastus muscles (linea aspera), gastrocnemius (condyles)"
    },
    clinical: "Femoral neck (intracapsular) fractures in the elderly can disrupt the retinacular blood supply and cause avascular necrosis of the head. The shaft can lose large blood volumes when fractured. Slipped capital femoral epiphysis occurs in adolescents."
  },
  {
    id: "patella",
    name: "Patella",
    latin: "Patella",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The patella (kneecap) is the largest sesamoid bone in the body, embedded in the quadriceps tendon. It improves the leverage of knee extension and protects the front of the knee joint.",
    details: {
      "Type": "Sesamoid bone",
      "Articulations": "Patellar surface of the femur (patellofemoral joint)",
      "Key landmarks": "Base, apex, anterior surface, and a posterior articular surface with medial and lateral facets",
      "Muscle attachments": "Quadriceps femoris tendon (proximally) and the patellar ligament continuing to the tibial tuberosity (distally)"
    },
    clinical: "The patella commonly dislocates laterally. Transverse fractures from a direct blow or sudden quadriceps contraction disrupt the extensor mechanism, abolishing active knee extension (straight-leg raise)."
  },
  {
    id: "tibia",
    name: "Tibia",
    latin: "Tibia",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The tibia (shinbone) is the larger, medial and weight-bearing bone of the leg, articulating with the femur at the knee and the talus at the ankle.",
    details: {
      "Type": "Long bone",
      "Articulations": "Femur (knee), fibula (proximal and distal tibiofibular joints) and talus (ankle)",
      "Key landmarks": "Medial and lateral condyles, intercondylar eminence, tibial tuberosity, anterior border (shin), soleal line, medial malleolus",
      "Muscle attachments": "Patellar ligament (tuberosity), quadriceps via patella, pes anserinus (sartorius, gracilis, semitendinosus), tibialis anterior/posterior, soleus and popliteus"
    },
    clinical: "The subcutaneous anteromedial surface makes open fractures common. The proximal tibia is a site for intraosseous access. Osgood–Schlatter disease is traction apophysitis of the tibial tuberosity in adolescents."
  },
  {
    id: "fibula",
    name: "Fibula",
    latin: "Fibula",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The fibula is the slender lateral bone of the leg. It bears little weight but provides muscle attachment and forms the lateral malleolus, stabilising the ankle.",
    details: {
      "Type": "Long bone",
      "Articulations": "Tibia (proximal and distal tibiofibular joints) and talus (lateral malleolus at the ankle)",
      "Key landmarks": "Head, neck, shaft and lateral malleolus",
      "Muscle attachments": "Biceps femoris (head), fibularis (peroneus) longus and brevis, extensor digitorum longus, soleus and flexor hallucis longus"
    },
    clinical: "The common fibular (peroneal) nerve winds around the fibular neck and is easily injured by fractures or tight casts, causing foot drop. The proximal fibula is a common bone-graft donor site. Maisonneuve fracture is a proximal fibular fracture with an ankle injury."
  },
  {
    id: "talus",
    name: "Talus",
    latin: "Talus",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The talus is the second largest tarsal bone and the only one to articulate with the leg bones, transmitting the entire body weight from the tibia to the foot. It has no muscle attachments.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Tibia and fibula (ankle joint), calcaneus below (subtalar joint) and navicular in front",
      "Key landmarks": "Head, neck, body, trochlea (superior surface), medial and lateral processes",
      "Muscle attachments": "None (no muscles attach to the talus)"
    },
    clinical: "Talar neck fractures have a high risk of avascular necrosis because the blood supply enters retrogradely. Its central role means talar injury severely impairs ankle and hindfoot function."
  },
  {
    id: "calcaneus",
    name: "Calcaneus",
    latin: "Calcaneus",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The calcaneus is the largest tarsal bone, forming the heel. It transmits body weight to the ground and provides leverage for the calf muscles via the Achilles tendon.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Talus above (subtalar joint) and cuboid in front (calcaneocuboid joint)",
      "Key landmarks": "Calcaneal tuberosity, sustentaculum tali, peroneal trochlea, posterior surface for the Achilles tendon",
      "Muscle attachments": "Gastrocnemius and soleus (Achilles tendon to the tuberosity); plantar muscles and the plantar aponeurosis"
    },
    clinical: "Calcaneal fractures result from falls from height (axial load) and are often bilateral and associated with lumbar spine fractures. Plantar fasciitis causes pain at the medial calcaneal tuberosity."
  },
  {
    id: "navicular",
    name: "Navicular",
    latin: "Os naviculare",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The navicular is a boat-shaped tarsal bone on the medial side of the foot, lying between the talus and the three cuneiforms, contributing to the medial longitudinal arch.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Talus behind, the three cuneiforms in front, and sometimes the cuboid laterally",
      "Key landmarks": "Navicular tuberosity (palpable medial prominence)",
      "Muscle attachments": "Tibialis posterior (main insertion onto the tuberosity)"
    },
    clinical: "Navicular stress fractures occur in runners and athletes and may be missed on plain films. An accessory navicular can cause medial foot pain. Kohler disease is avascular necrosis of the navicular in children."
  },
  {
    id: "cuboid",
    name: "Cuboid",
    latin: "Os cuboideum",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The cuboid is the most lateral tarsal bone in the distal row, lying in front of the calcaneus and contributing to the lateral longitudinal arch of the foot.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Calcaneus behind, the fourth and fifth metatarsals in front, and the lateral cuneiform and navicular medially",
      "Key landmarks": "Groove on the plantar surface for the fibularis (peroneus) longus tendon; cuboid tuberosity",
      "Muscle attachments": "Tibialis posterior (slip) and flexor hallucis brevis (partial origin)"
    },
    clinical: "Cuboid syndrome (subtle subluxation) causes lateral midfoot pain. 'Nutcracker' fractures occur with forced forefoot abduction."
  },
  {
    id: "medial-cuneiform",
    name: "Medial cuneiform",
    latin: "Os cuneiforme mediale",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The medial cuneiform is the largest of the three wedge-shaped cuneiform bones, lying on the medial side of the foot between the navicular and the first metatarsal.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Navicular behind, first and second metatarsals in front, and the intermediate cuneiform laterally",
      "Key landmarks": "Wedge shape with the base directed plantarwards",
      "Muscle attachments": "Tibialis anterior and fibularis (peroneus) longus tendons"
    },
    clinical: "The medial cuneiform is part of the Lisfranc (tarsometatarsal) joint complex; Lisfranc injuries involve disruption between the medial cuneiform and the base of the second metatarsal."
  },
  {
    id: "intermediate-cuneiform",
    name: "Intermediate cuneiform",
    latin: "Os cuneiforme intermedium",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The intermediate (middle) cuneiform is the smallest cuneiform, wedged between the medial and lateral cuneiforms and articulating with the recessed base of the second metatarsal.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Navicular behind, second metatarsal in front, and the medial and lateral cuneiforms on each side",
      "Key landmarks": "Smallest cuneiform; its recessed position locks the second metatarsal base (keystone of the transverse arch)",
      "Muscle attachments": "Tibialis anterior (slip)"
    },
    clinical: "The recessed second metatarsal base between the cuneiforms is the keystone of the Lisfranc joint; injury here destabilises the midfoot."
  },
  {
    id: "lateral-cuneiform",
    name: "Lateral cuneiform",
    latin: "Os cuneiforme laterale",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 2,
    description: "The lateral cuneiform is the middle-sized cuneiform on the lateral side of the three, lying between the intermediate cuneiform and the cuboid and articulating with the third metatarsal.",
    details: {
      "Type": "Short (tarsal) bone",
      "Articulations": "Navicular behind, third metatarsal in front, the intermediate cuneiform medially and the cuboid laterally; also the second and fourth metatarsal bases",
      "Key landmarks": "Wedge shape with the base directed dorsally",
      "Muscle attachments": "Tibialis posterior (slip), flexor hallucis brevis (partial origin)"
    },
    clinical: "Together with the other cuneiforms and the cuboid it stabilises the transverse arch of the foot; it is involved in midfoot (Lisfranc) injuries and arch collapse."
  },
  {
    id: "metatarsals",
    name: "Metatarsals (I–V)",
    latin: "Ossa metatarsi (I–V)",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 10,
    description: "The five metatarsals form the skeleton of the forefoot, numbered I (great toe) to V (little toe). Each has a base, shaft and head and contributes to the arches and weight distribution of the foot.",
    details: {
      "Type": "Long bones (miniature)",
      "Articulations": "Tarsals at the tarsometatarsal (Lisfranc) joints and proximal phalanges at the metatarsophalangeal joints",
      "Key landmarks": "Base, shaft, head; tuberosity at the base of the fifth metatarsal; sesamoids under the first metatarsal head",
      "Muscle attachments": "Fibularis brevis (5th tuberosity), fibularis longus and tibialis anterior (1st), interossei and adductor hallucis"
    },
    clinical: "A Jones fracture is at the base of the 5th metatarsal (poor healing); avulsion fractures of the tuberosity (fibularis brevis) are more common. A March fracture is a stress fracture of the 2nd or 3rd metatarsal."
  },
  {
    id: "phalanges-foot",
    name: "Phalanges of the foot",
    latin: "Phalanges pedis",
    system: "skeletal",
    category: "Bone",
    region: "lower-limb",
    count: 28,
    description: "The phalanges are the bones of the toes. Each lesser toe has three (proximal, middle and distal); the great toe (hallux) has two, giving 14 per foot and 28 in total.",
    details: {
      "Type": "Long bones (miniature)",
      "Articulations": "Metatarsals at metatarsophalangeal joints; adjacent phalanges at interphalangeal joints (the hallux has a single interphalangeal joint)",
      "Key landmarks": "Base, shaft and head; phalanges of the foot are shorter and stouter than those of the hand",
      "Muscle attachments": "Flexor and extensor digitorum longus/brevis, flexor and extensor hallucis longus/brevis, interossei and lumbricals"
    },
    clinical: "Toe fractures are common from stubbing or crush injuries; the great toe is functionally most important for push-off. Gout classically affects the first metatarsophalangeal joint (podagra)."
  }

];

/*
 * BONE COUNT — arithmetic verifying the total of 206:
 *
 * Cranial bones (8):
 *   frontal 1 + parietal 2 + temporal 2 + occipital 1 + sphenoid 1 + ethmoid 1 = 8
 * Facial bones (14):
 *   maxilla 2 + zygomatic 2 + nasal 2 + lacrimal 2 + palatine 2
 *   + inferior nasal concha 2 + vomer 1 + mandible 1 = 14
 * Auditory ossicles (6):
 *   malleus 2 + incus 2 + stapes 2 = 6
 * Hyoid (1):
 *   hyoid 1 = 1
 *   --> Skull region + hyoid subtotal = 8 + 14 + 6 + 1 = 29
 *
 * Vertebral column (26):
 *   atlas 1 + axis 1 + cervical C3-C7 5 + thoracic 12 + lumbar 5 + sacrum 1 + coccyx 1 = 26
 *
 * Thorax (25):
 *   sternum 1 + true ribs 14 (7 pairs) + false ribs 6 (3 pairs)
 *   + floating ribs 4 (2 pairs) = 1 + 24 (ribs) = 25
 *
 * Upper limbs (64):
 *   clavicle 2 + scapula 2 + humerus 2 + radius 2 + ulna 2 = 10
 *   carpals: scaphoid 2 + lunate 2 + triquetrum 2 + pisiform 2
 *          + trapezium 2 + trapezoid 2 + capitate 2 + hamate 2 = 16
 *   metacarpals 10 + phalanges of hand 28 = 38
 *   --> 10 + 16 + 38 = 64
 *
 * Lower limbs (62):
 *   hip bone 2 + femur 2 + patella 2 + tibia 2 + fibula 2 = 10
 *   tarsals: talus 2 + calcaneus 2 + navicular 2 + cuboid 2
 *          + medial cuneiform 2 + intermediate cuneiform 2 + lateral cuneiform 2 = 14
 *   metatarsals 10 + phalanges of foot 28 = 38
 *   --> 10 + 14 + 38 = 62
 *
 * TOTAL: 29 + 26 + 25 + 64 + 62 = 206 bones
 */
