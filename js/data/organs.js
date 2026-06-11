// Anatomy learning data — Organs
// Schema: { id, name, latin, system:"organs", category:"Organ", region, count, description, details{}, clinical }
// Regions: "head-neck", "spine-back", "thorax", "abdomen-pelvis", "upper-limb", "lower-limb"

window.ANATOMY_ORGANS = [
  // ===================== CARDIOVASCULAR =====================
  {
    id: "heart",
    name: "Heart",
    latin: "Cor",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "Muscular pump in the middle mediastinum that drives the pulmonary and systemic circulations. It lies obliquely behind the sternum, two-thirds to the left of the midline.",
    details: {
      "Location": "Middle mediastinum, posterior to the body of the sternum at the level of T5–T8, enclosed in the pericardium; apex projects to the left 5th intercostal space in the midclavicular line.",
      "Structure": "Four chambers — right and left atria, right and left ventricles. Four valves: tricuspid (right AV), mitral/bicuspid (left AV), pulmonary and aortic semilunar valves. Walls have endocardium, myocardium and epicardium. Conduction system: sinoatrial (SA) node in the right atrium, atrioventricular (AV) node, bundle of His, right and left bundle branches, Purkinje fibres.",
      "Blood supply": "Right and left coronary arteries arising from the aortic sinuses; venous return mainly via the coronary sinus into the right atrium.",
      "Innervation": "Autonomic from the cardiac plexus — sympathetic (T1–T5, increases rate/force) and parasympathetic via the vagus (CN X, slows rate). Visceral afferents for referred pain travel with sympathetics.",
      "Function": "Pumps deoxygenated blood to the lungs (right side) and oxygenated blood to the body (left side); maintains systemic perfusion pressure."
    },
    clinical: "Occlusion of a coronary artery causes myocardial infarction, with ischaemic pain often referred to the left arm and jaw."
  },
  {
    id: "pericardium",
    name: "Pericardium",
    latin: "Pericardium",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "Double-walled fibroserous sac enclosing the heart and roots of the great vessels in the middle mediastinum. It anchors the heart and reduces friction during contraction.",
    details: {
      "Location": "Middle mediastinum, surrounding the heart; fused inferiorly to the central tendon of the diaphragm and anteriorly to the sternum by sternopericardial ligaments.",
      "Structure": "Outer tough fibrous pericardium and inner serous pericardium (parietal and visceral/epicardial layers) separated by the pericardial cavity containing serous fluid; oblique and transverse pericardial sinuses lie among the great vessels.",
      "Blood supply": "Pericardiacophrenic, musculophrenic and bronchial arteries; venous drainage via corresponding veins to the brachiocephalic/azygos system.",
      "Innervation": "Phrenic nerves (C3–C5) supply the fibrous and parietal serous pericardium (somatic, pain-sensitive); visceral layer is insensate.",
      "Function": "Holds the heart in position, lubricates movement, and limits acute over-distension of the chambers."
    },
    clinical: "Rapid accumulation of fluid (cardiac tamponade) compresses the heart and impairs filling, presenting with hypotension, muffled heart sounds and distended neck veins."
  },

  // ===================== RESPIRATORY =====================
  {
    id: "nasal-cavity",
    name: "Nasal Cavity",
    latin: "Cavitas nasi",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Paired air-conditioning chamber of the upper respiratory tract that warms, humidifies and filters inspired air and houses the olfactory epithelium.",
    details: {
      "Location": "Within the facial skeleton between the anterior nares and the choanae, divided by the nasal septum and lying below the anterior cranial fossa and above the oral cavity.",
      "Structure": "Roof, floor, medial (septal) and lateral walls; lateral wall bears superior, middle and inferior conchae with corresponding meatuses receiving sinus and nasolacrimal drainage.",
      "Blood supply": "Sphenopalatine, anterior/posterior ethmoidal, greater palatine, superior labial and lateral nasal arteries, anastomosing at Kiesselbach's (Little's) area.",
      "Innervation": "General sensation via CN V1 (anterior/superior) and V2 (posterior/inferior); special olfactory sensation via CN I through the cribriform plate.",
      "Function": "Conditions inspired air, traps particulates in mucus, and provides the sense of smell."
    },
    clinical: "Most anterior epistaxis arises from the rich anastomosis at Kiesselbach's area on the anterior septum."
  },
  {
    id: "paranasal-sinuses",
    name: "Paranasal Sinuses",
    latin: "Sinus paranasales",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Air-filled mucosa-lined cavities within the frontal, ethmoid, sphenoid and maxillary bones that drain into the nasal cavity. They lighten the skull and add resonance to the voice.",
    details: {
      "Location": "Within the bones surrounding the nasal cavity — frontal (above orbits), ethmoidal (between orbits), sphenoidal (in sphenoid body), and maxillary (in the maxillae).",
      "Structure": "Four paired sinus groups lined by ciliated respiratory epithelium; the maxillary sinus is largest with a high ostium opening into the middle meatus.",
      "Blood supply": "Branches of the maxillary, facial, ophthalmic and sphenopalatine arteries according to the sinus.",
      "Innervation": "Branches of CN V1 and V2 (supraorbital, infraorbital, anterior/posterior ethmoidal and posterior superior nasal nerves).",
      "Function": "Reduce skull weight, humidify air, and provide vocal resonance."
    },
    clinical: "The maxillary sinus drains via a high ostium, predisposing to fluid stagnation and maxillary sinusitis."
  },
  {
    id: "pharynx",
    name: "Pharynx",
    latin: "Pharynx",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Muscular funnel shared by the respiratory and digestive tracts extending from the skull base to the cricoid cartilage. It conveys air to the larynx and food to the oesophagus.",
    details: {
      "Location": "Behind the nasal cavity, mouth and larynx, extending from the base of the skull to the lower border of the cricoid cartilage (C6).",
      "Structure": "Three parts — nasopharynx, oropharynx and laryngopharynx (hypopharynx); wall formed by three constrictor muscles and three longitudinal muscles (stylopharyngeus, palatopharyngeus, salpingopharyngeus).",
      "Blood supply": "Ascending pharyngeal, facial, lingual and maxillary arteries; pharyngeal venous plexus drains to the internal jugular vein.",
      "Innervation": "Pharyngeal plexus (CN IX sensory, CN X motor); stylopharyngeus is supplied by CN IX.",
      "Function": "Channels air and food, initiates the involuntary phase of swallowing, and contributes to speech resonance."
    },
    clinical: "The piriform fossa of the laryngopharynx is a common site for impacted foreign bodies and may injure the internal laryngeal nerve."
  },
  {
    id: "larynx",
    name: "Larynx",
    latin: "Larynx",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Cartilaginous voice box guarding the airway and producing sound. It connects the laryngopharynx to the trachea and prevents aspiration during swallowing.",
    details: {
      "Location": "Anterior neck at vertebral levels C3–C6, suspended from the hyoid bone and continuous below with the trachea.",
      "Structure": "Cartilages — thyroid, cricoid, epiglottis (unpaired) and arytenoid, corniculate, cuneiform (paired); vocal folds (true cords) and vestibular folds (false cords); rima glottidis between the vocal folds.",
      "Blood supply": "Superior laryngeal artery (from superior thyroid) and inferior laryngeal artery (from inferior thyroid).",
      "Innervation": "Superior laryngeal nerve — internal (sensory above the folds) and external (cricothyroid muscle); recurrent laryngeal nerve supplies all other intrinsic muscles and sensation below the folds.",
      "Function": "Phonation, airway protection (closes during swallowing), and regulation of airflow including the cough reflex."
    },
    clinical: "Injury to the recurrent laryngeal nerve, e.g. during thyroidectomy, causes vocal cord paralysis and hoarseness."
  },
  {
    id: "trachea",
    name: "Trachea",
    latin: "Trachea",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "Flexible cartilaginous tube conducting air between the larynx and the bronchi. Its C-shaped cartilages keep the airway patent while allowing oesophageal expansion posteriorly.",
    details: {
      "Location": "Midline of the neck and superior mediastinum from C6 (lower cricoid) to the carina at the sternal angle (T4/T5), where it bifurcates.",
      "Structure": "16–20 incomplete (C-shaped) hyaline cartilage rings open posteriorly, bridged by the trachealis smooth muscle; lined by pseudostratified ciliated columnar epithelium.",
      "Blood supply": "Inferior thyroid arteries (upper) and bronchial arteries (lower); venous drainage to the inferior thyroid venous plexus.",
      "Innervation": "Recurrent laryngeal nerves and sympathetic trunk; vagal afferents mediate the cough reflex.",
      "Function": "Conducts and further conditions air, and clears debris via the mucociliary escalator."
    },
    clinical: "The carina is sharper and the angle steeper on the left, so aspirated objects more often enter the wider, more vertical right main bronchus."
  },
  {
    id: "bronchial-tree",
    name: "Bronchi and Bronchial Tree",
    latin: "Arbor bronchialis",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 2,
    description: "Branching airway system distributing air from the trachea to the alveoli. It divides progressively into main, lobar and segmental bronchi and then bronchioles.",
    details: {
      "Location": "Within the mediastinum and both lungs, beginning at the carina (T4/T5) and ramifying throughout the pulmonary parenchyma.",
      "Structure": "Right main bronchus (wider, shorter, more vertical) gives 3 lobar bronchi; left main bronchus gives 2 lobar bronchi; lobar divide into segmental bronchi supplying bronchopulmonary segments, then conducting and terminal/respiratory bronchioles.",
      "Blood supply": "Bronchial arteries (from the thoracic aorta) supply the conducting airways; gas exchange occurs via the pulmonary circulation.",
      "Innervation": "Pulmonary plexus — parasympathetic (vagal) causes bronchoconstriction and secretion; sympathetic causes bronchodilation.",
      "Function": "Conducts air to and from the respiratory zone and adjusts airway calibre."
    },
    clinical: "Bronchopulmonary segments are surgically resectable units because each has its own segmental bronchus and artery."
  },
  {
    id: "lungs",
    name: "Lungs",
    latin: "Pulmones",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 2,
    description: "Paired organs of gas exchange occupying most of the thoracic cavity. Oxygen and carbon dioxide are exchanged across the alveolar–capillary membrane.",
    details: {
      "Location": "Right and left pleural cavities, separated by the mediastinum; apices rise above the medial third of the clavicle, bases rest on the diaphragm.",
      "Structure": "Right lung has 3 lobes (upper, middle, lower) separated by oblique and horizontal fissures; left lung has 2 lobes (upper, lower) with the lingula and a cardiac notch. Each lung contains 10 bronchopulmonary segments. Each hilum transmits a main bronchus, pulmonary artery and two pulmonary veins.",
      "Blood supply": "Pulmonary arteries carry deoxygenated blood for gas exchange; bronchial arteries supply the lung tissue itself.",
      "Innervation": "Pulmonary plexus (sympathetic and vagal parasympathetic fibres); visceral pleura is insensate.",
      "Function": "Oxygenation of blood and elimination of carbon dioxide; contributes to acid–base balance."
    },
    clinical: "Because the right main bronchus is more vertical, inhaled foreign bodies and aspiration pneumonia favour the right lower lobe."
  },
  {
    id: "pleura",
    name: "Pleura",
    latin: "Pleura",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 2,
    description: "Serous membrane investing each lung and lining the thoracic wall. Its lubricated cavity allows frictionless lung expansion during breathing.",
    details: {
      "Location": "Lines each hemithorax; visceral pleura covers the lung, parietal pleura lines the thoracic wall, diaphragm and mediastinum.",
      "Structure": "Two continuous layers (visceral and parietal) enclosing the potential pleural cavity; parietal pleura has costal, diaphragmatic, mediastinal and cervical parts, with costodiaphragmatic and costomediastinal recesses.",
      "Blood supply": "Visceral pleura by bronchial arteries; parietal pleura by intercostal, internal thoracic and musculophrenic arteries.",
      "Innervation": "Parietal pleura is pain-sensitive (intercostal and phrenic nerves); visceral pleura has only autonomic, non-painful innervation.",
      "Function": "Reduces friction and couples the lung to the chest wall via negative intrapleural pressure for inflation."
    },
    clinical: "Air entering the pleural cavity (pneumothorax) collapses the lung; tension pneumothorax shifts the mediastinum and is life-threatening."
  },

  // ===================== DIGESTIVE =====================
  {
    id: "oral-cavity",
    name: "Oral Cavity",
    latin: "Cavitas oris",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "First part of the digestive tract where mechanical and initial chemical digestion begin. It houses the teeth and tongue and contributes to speech.",
    details: {
      "Location": "Lower face, bounded by the lips, cheeks, hard and soft palates, and the floor of the mouth; opens posteriorly into the oropharynx via the oropharyngeal isthmus.",
      "Structure": "Oral vestibule (between lips/cheeks and teeth) and oral cavity proper; contains teeth, gingivae and the tongue; roof formed by hard and soft palate.",
      "Blood supply": "Branches of the maxillary, lingual and facial arteries.",
      "Innervation": "Sensory via CN V2 and V3; taste via CN VII (anterior two-thirds of tongue) and CN IX (posterior third); tongue movement via CN XII.",
      "Function": "Mastication, mixing food with salivary amylase, taste, and articulation of speech."
    },
    clinical: "The floor of mouth and lateral tongue are common sites for squamous cell carcinoma, strongly linked to tobacco and alcohol."
  },
  {
    id: "salivary-glands",
    name: "Salivary Glands",
    latin: "Glandulae salivariae",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 2,
    description: "Three paired major glands (parotid, submandibular, sublingual) that secrete saliva into the oral cavity. Saliva lubricates food and begins starch digestion.",
    details: {
      "Location": "Parotid — over the masseter and anterior to the ear; submandibular — in the submandibular triangle; sublingual — in the floor of the mouth beneath the tongue.",
      "Structure": "Parotid is purely serous (duct opens opposite the upper 2nd molar); submandibular is mixed seromucous (Wharton's duct to the sublingual papilla); sublingual is mainly mucous (multiple ducts).",
      "Blood supply": "External carotid branches — superficial temporal and maxillary (parotid), facial and lingual (submandibular/sublingual).",
      "Innervation": "Parasympathetic secretomotor — CN IX via otic ganglion (parotid) and CN VII via submandibular ganglion (submandibular/sublingual).",
      "Function": "Produce saliva for lubrication, oral lubrication, salivary amylase digestion, and antimicrobial protection."
    },
    clinical: "The facial nerve passes through the parotid gland, so parotid tumours and surgery risk facial nerve palsy."
  },
  {
    id: "esophagus",
    name: "Esophagus",
    latin: "Oesophagus",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "Muscular tube conveying food from the pharynx to the stomach by peristalsis. It traverses the neck, thorax and a short abdominal segment.",
    details: {
      "Location": "From the lower cricoid cartilage (C6) through the superior and posterior mediastinum, piercing the diaphragm at T10 to join the stomach at T11.",
      "Structure": "Upper third striated muscle, lower third smooth muscle, middle mixed; three constrictions (cricopharyngeal, aortic/bronchial, diaphragmatic) and physiological upper and lower oesophageal sphincters.",
      "Blood supply": "Inferior thyroid, oesophageal branches of the thoracic aorta, and left gastric arteries; lower portion drains partly to the portal system (porto-systemic anastomosis).",
      "Innervation": "Oesophageal plexus from vagus (parasympathetic) and sympathetic trunks; striated part is vagal motor.",
      "Function": "Transports a bolus to the stomach via peristalsis and prevents reflux through the lower oesophageal sphincter."
    },
    clinical: "Portal hypertension dilates the lower oesophageal porto-systemic veins into varices that can bleed massively."
  },
  {
    id: "stomach",
    name: "Stomach",
    latin: "Gaster (Ventriculus)",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Muscular dilated portion of the gut that stores and churns food and secretes acid and enzymes. It begins protein digestion and regulates gastric emptying.",
    details: {
      "Location": "Left upper quadrant/epigastrium, mostly under the left dome of the diaphragm; lies between the oesophagus (cardia at T11) and the duodenum (pylorus at L1).",
      "Structure": "Regions — cardia, fundus, body, pyloric antrum and pylorus; greater and lesser curvatures; rugae of mucosa; pyloric sphincter; muscularis with oblique, circular and longitudinal layers.",
      "Blood supply": "Coeliac trunk derivatives — left and right gastric (lesser curvature), right and left gastro-omental and short gastric arteries (greater curvature).",
      "Innervation": "Parasympathetic vagus (increases secretion/motility) via the anterior and posterior vagal trunks; sympathetic from the coeliac plexus (T6–T9).",
      "Function": "Stores food, mechanically churns it, secretes hydrochloric acid and pepsinogen, and produces intrinsic factor for vitamin B12 absorption."
    },
    clinical: "Loss of gastric parietal cells (and intrinsic factor) causes pernicious anaemia from vitamin B12 deficiency."
  },
  {
    id: "duodenum",
    name: "Duodenum",
    latin: "Duodenum",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "First and shortest part of the small intestine that receives chyme, bile and pancreatic juice. It is the principal site where digestion is chemically completed.",
    details: {
      "Location": "Curves around the head of the pancreas from the pylorus (L1) to the duodenojejunal flexure (L2); mostly retroperitoneal.",
      "Structure": "Four parts — superior (cap), descending (bears the major and minor duodenal papillae), horizontal and ascending; suspended distally by the ligament of Treitz.",
      "Blood supply": "Superior pancreaticoduodenal (from gastroduodenal/coeliac) and inferior pancreaticoduodenal (from superior mesenteric) arteries — marking the foregut–midgut junction.",
      "Innervation": "Coeliac and superior mesenteric plexuses (sympathetic and vagal parasympathetic).",
      "Function": "Neutralises gastric acid, mixes chyme with bile and pancreatic enzymes, and regulates gastric emptying via hormones (secretin, CCK)."
    },
    clinical: "Most peptic ulcers occur in the duodenal cap; posterior ulcers may erode the gastroduodenal artery causing severe haemorrhage."
  },
  {
    id: "jejunum",
    name: "Jejunum",
    latin: "Jejunum",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Proximal two-fifths of the mesenteric small intestine specialised for nutrient absorption. Its tall mucosal folds maximise absorptive surface area.",
    details: {
      "Location": "Mainly the left upper quadrant, beginning at the duodenojejunal flexure (L2) and continuous with the ileum.",
      "Structure": "Thicker wall, wider lumen, deep red colour, tall and closely packed plicae circulares (valvulae conniventes), long vasa recta and few arterial arcades; minimal lymphoid tissue.",
      "Blood supply": "Jejunal branches of the superior mesenteric artery forming few large arcades with long vasa recta.",
      "Innervation": "Superior mesenteric plexus (sympathetic T9–T10, parasympathetic vagus).",
      "Function": "Major site of absorption of carbohydrates, amino acids and fat-soluble nutrients."
    },
    clinical: "The jejunum's prominent plicae circulares produce a characteristic 'stack of coins' appearance on contrast imaging in obstruction."
  },
  {
    id: "ileum",
    name: "Ileum",
    latin: "Ileum",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Distal three-fifths of the small intestine ending at the ileocaecal junction. It absorbs vitamin B12, bile salts and remaining nutrients.",
    details: {
      "Location": "Mainly the right lower quadrant and pelvis, ending at the ileocaecal valve in the right iliac fossa.",
      "Structure": "Thinner wall, narrower lumen, fewer/shorter plicae circulares, many arterial arcades with short vasa recta, and abundant Peyer's patches (aggregated lymphoid follicles).",
      "Blood supply": "Ileal branches of the superior mesenteric artery forming numerous short arcades.",
      "Innervation": "Superior mesenteric plexus (sympathetic and vagal parasympathetic).",
      "Function": "Absorbs vitamin B12 (with intrinsic factor), bile salts (enterohepatic circulation) and residual nutrients; immune surveillance."
    },
    clinical: "A persistent vitelline duct remnant (Meckel's diverticulum) typically lies about 2 feet from the ileocaecal valve and may contain ectopic gastric mucosa."
  },
  {
    id: "cecum-appendix",
    name: "Cecum and Appendix",
    latin: "Caecum et Appendix vermiformis",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Blind pouch beginning the large intestine, bearing the vermiform appendix. It receives ileal contents through the ileocaecal valve.",
    details: {
      "Location": "Right iliac fossa; the appendix base lies at McBurney's point (one-third along a line from the right anterior superior iliac spine to the umbilicus).",
      "Structure": "Caecum is a blind pouch with taeniae coli converging onto the appendix; the appendix is a narrow lymphoid-rich tube suspended by the mesoappendix, commonly retrocaecal in position.",
      "Blood supply": "Ileocolic artery (from the superior mesenteric artery); appendicular artery runs in the mesoappendix.",
      "Innervation": "Superior mesenteric plexus; visceral afferents enter at T10, referring early appendiceal pain to the umbilicus.",
      "Function": "Receives and stores ileal contents; the appendix contributes gut-associated lymphoid tissue."
    },
    clinical: "Appendicitis classically presents with peri-umbilical pain (T10 referral) that later localises to McBurney's point as the parietal peritoneum is involved."
  },
  {
    id: "colon",
    name: "Colon",
    latin: "Colon",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Main length of the large intestine that absorbs water and electrolytes and forms faeces. It frames the small intestine in four segments.",
    details: {
      "Location": "Ascending colon (right flank, retroperitoneal) to the hepatic flexure; transverse colon (intraperitoneal, on the transverse mesocolon) to the splenic flexure; descending colon (left flank, retroperitoneal); sigmoid colon (left iliac fossa, intraperitoneal).",
      "Structure": "Characterised by taeniae coli, haustra, omental (epiploic) appendages and a wide lumen; the marginal artery of Drummond links its blood supply.",
      "Blood supply": "Superior mesenteric artery (to the proximal two-thirds via ileocolic, right and middle colic) and inferior mesenteric artery (descending and sigmoid via left colic and sigmoid arteries); transition at the splenic flexure watershed.",
      "Innervation": "Vagus (to the splenic flexure) and pelvic splanchnic nerves (distal); sympathetic from superior and inferior mesenteric plexuses.",
      "Function": "Absorbs water and electrolytes, compacts and stores faeces, and houses commensal bacteria."
    },
    clinical: "The splenic flexure is a watershed zone between the SMA and IMA territories and is especially vulnerable to ischaemic colitis."
  },
  {
    id: "rectum",
    name: "Rectum",
    latin: "Rectum",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Terminal fixed segment of the large intestine that stores faeces before defecation. It lies in the sacral concavity of the pelvis.",
    details: {
      "Location": "Pelvic cavity, from the rectosigmoid junction at S3 following the sacral curve to the anorectal junction at the pelvic floor.",
      "Structure": "Dilated ampulla; three transverse rectal folds (valves of Houston); lacks taeniae, haustra and omental appendages.",
      "Blood supply": "Superior rectal (from IMA), middle rectal (from internal iliac) and inferior rectal (from internal pudendal) arteries — a porto-systemic anastomotic site.",
      "Innervation": "Sympathetic and parasympathetic via the inferior hypogastric (pelvic) plexus; stretch sensation initiates the defecation reflex.",
      "Function": "Stores faeces and triggers the defecation reflex when distended."
    },
    clinical: "The rectum and anal canal form a porto-systemic anastomosis where portal hypertension can produce rectal varices (distinct from haemorrhoids)."
  },
  {
    id: "anal-canal",
    name: "Anal Canal",
    latin: "Canalis analis",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Terminal segment of the gastrointestinal tract controlling faecal continence and defecation. The pectinate line divides its embryological and functional zones.",
    details: {
      "Location": "Below the pelvic diaphragm, from the anorectal junction to the anus, within the perineum and surrounded by the ischioanal fossae.",
      "Structure": "Pectinate (dentate) line separates the upper endodermal part (columns/valves of Morgagni) from the lower ectodermal part; internal anal sphincter (involuntary smooth muscle) and external anal sphincter (voluntary skeletal muscle).",
      "Blood supply": "Superior rectal artery above and inferior rectal artery below the pectinate line.",
      "Innervation": "Above the pectinate line: autonomic (insensate to pain); below: inferior rectal (pudendal) nerve — somatic and pain-sensitive; external sphincter is somatic (pudendal).",
      "Function": "Maintains faecal continence and permits controlled defecation."
    },
    clinical: "Internal haemorrhoids (above the pectinate line) are painless, whereas external haemorrhoids (below) are painful because of somatic innervation."
  },
  {
    id: "liver",
    name: "Liver",
    latin: "Hepar",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Largest internal organ and gland, central to metabolism, detoxification and bile production. It receives both portal and arterial blood.",
    details: {
      "Location": "Right upper quadrant beneath the right dome of the diaphragm, mostly under the ribcage (T7–T11), extending into the epigastrium and left hypochondrium.",
      "Structure": "Anatomically four lobes (right, left, caudate, quadrate); functionally eight segments (Couinaud) each with independent vascular and biliary supply; the porta hepatis transmits the portal vein, hepatic artery and bile ducts.",
      "Blood supply": "Dual — hepatic artery proper (~25% oxygenated) and hepatic portal vein (~75% nutrient-rich); drained by hepatic veins into the inferior vena cava.",
      "Innervation": "Hepatic plexus (sympathetic from coeliac plexus and parasympathetic vagal fibres); the capsule (Glisson's) is pain-sensitive.",
      "Function": "Bile production, carbohydrate/protein/lipid metabolism, plasma protein and clotting factor synthesis, detoxification, and storage of glycogen and vitamins."
    },
    clinical: "Stretching of the liver capsule (e.g. in hepatic congestion or hepatitis) causes right upper quadrant pain; the bare area allows infection to spread to the diaphragm."
  },
  {
    id: "gallbladder-biliary-tree",
    name: "Gallbladder and Biliary Tree",
    latin: "Vesica biliaris et Tractus biliaris",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Pear-shaped reservoir that stores and concentrates bile, with the duct system delivering bile to the duodenum. It contracts in response to fatty meals.",
    details: {
      "Location": "In a fossa on the visceral surface of the liver between the right and quadrate lobes; the fundus lies at the tip of the right 9th costal cartilage (where the lateral rectus border meets the costal margin).",
      "Structure": "Fundus, body and neck (with Hartmann's pouch); cystic duct (spiral valve of Heister) joins the common hepatic duct to form the common bile duct, which unites with the pancreatic duct at the ampulla of Vater (sphincter of Oddi).",
      "Blood supply": "Cystic artery, usually from the right hepatic artery within Calot's triangle.",
      "Innervation": "Coeliac plexus and vagus; CCK (hormonal) drives gallbladder contraction.",
      "Function": "Stores and concentrates bile and releases it into the duodenum to emulsify dietary fat."
    },
    clinical: "Gallstones lodged in the cystic duct cause biliary colic/cholecystitis; a stone in the common bile duct produces obstructive jaundice."
  },
  {
    id: "pancreas",
    name: "Pancreas",
    latin: "Pancreas",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Mixed exocrine and endocrine gland behind the stomach that secretes digestive enzymes and regulates blood glucose. It drains into the duodenum.",
    details: {
      "Location": "Retroperitoneal, transversely across the posterior abdominal wall at L1–L2; head within the duodenal curve, neck, body and tail reaching the splenic hilum.",
      "Structure": "Exocrine acini draining via the main pancreatic duct (of Wirsung) and accessory duct (of Santorini); endocrine islets of Langerhans scattered throughout, most numerous in the tail.",
      "Blood supply": "Superior and inferior pancreaticoduodenal arteries (head) and splenic artery branches including the dorsal/great pancreatic arteries (body and tail).",
      "Innervation": "Coeliac and superior mesenteric plexuses (sympathetic and vagal parasympathetic).",
      "Function": "Exocrine: secretes bicarbonate and digestive enzymes (amylase, lipase, proteases); endocrine: secretes insulin, glucagon and somatostatin."
    },
    clinical: "Carcinoma of the pancreatic head obstructs the common bile duct, producing painless obstructive jaundice (Courvoisier's sign)."
  },
  {
    id: "pancreatic-islets",
    name: "Pancreatic Islets",
    latin: "Insulae pancreaticae (Langerhans)",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Endocrine cell clusters embedded within the pancreas that control blood glucose homeostasis. They secrete hormones directly into the bloodstream.",
    details: {
      "Location": "Dispersed throughout the pancreatic parenchyma (L1–L2), most concentrated in the tail.",
      "Structure": "Roughly one million islets containing alpha cells (glucagon), beta cells (insulin and amylin), delta cells (somatostatin), PP cells (pancreatic polypeptide) and epsilon cells (ghrelin).",
      "Blood supply": "Rich capillary network from splenic and pancreaticoduodenal arteries; an insulo-acinar portal system links islets to surrounding acini.",
      "Innervation": "Autonomic — vagal parasympathetic stimulates insulin release, sympathetic stimulates glucagon and inhibits insulin.",
      "Function": "Maintain glucose homeostasis via insulin (lowers) and glucagon (raises) and modulate digestion through somatostatin."
    },
    clinical: "Autoimmune destruction of beta cells causes type 1 diabetes mellitus, requiring lifelong insulin replacement."
  },
  {
    id: "peritoneum",
    name: "Peritoneum",
    latin: "Peritoneum",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Serous membrane lining the abdominopelvic cavity and investing its viscera. It supports the organs and conveys their neurovascular supply within folds.",
    details: {
      "Location": "Throughout the abdominopelvic cavity; parietal layer lines the walls, visceral layer covers the organs, enclosing the peritoneal cavity.",
      "Structure": "Greater and lesser sacs connected by the epiploic (omental) foramen of Winslow; mesenteries, omenta (greater and lesser), and peritoneal ligaments suspend organs; organs are intraperitoneal or retroperitoneal.",
      "Blood supply": "Supplied with the regional vessels of the structures it covers.",
      "Innervation": "Parietal peritoneum — somatic (well localised pain); visceral peritoneum — autonomic (poorly localised, referred pain).",
      "Function": "Supports and suspends viscera, conducts vessels and nerves, allows organ mobility, and resists/limits the spread of infection."
    },
    clinical: "Parietal peritoneal irritation produces sharp localised pain with guarding and rebound tenderness, the hallmark of peritonitis."
  },

  // ===================== URINARY =====================
  {
    id: "kidneys",
    name: "Kidneys",
    latin: "Renes",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired retroperitoneal organs that filter blood to form urine and regulate fluid, electrolyte and acid–base balance. They also produce hormones.",
    details: {
      "Location": "Retroperitoneal on the posterior abdominal wall, spanning T12–L3; the right kidney sits lower than the left because of the liver. Hila face medially at about L1.",
      "Structure": "Outer cortex and inner medulla (renal pyramids), minor and major calyces draining into the renal pelvis; the nephron is the functional unit; surrounded by perinephric fat and renal (Gerota's) fascia.",
      "Blood supply": "Renal arteries from the abdominal aorta at L1/L2; renal veins to the inferior vena cava (the left renal vein crosses anterior to the aorta).",
      "Innervation": "Renal plexus (sympathetic from T10–L1, lesser and least splanchnic nerves); pain referred to the loin and groin.",
      "Function": "Filter plasma to produce urine, regulate blood pressure (renin), erythropoiesis (erythropoietin) and calcium metabolism (activating vitamin D)."
    },
    clinical: "Ureteric calculi cause severe colicky loin-to-groin pain corresponding to the T10–L1 referral pattern of the urinary tract."
  },
  {
    id: "ureters",
    name: "Ureters",
    latin: "Ureteres",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired muscular tubes that propel urine from the kidneys to the bladder by peristalsis. They are retroperitoneal throughout their course.",
    details: {
      "Location": "From the renal pelvis (L2) along the psoas major, crossing the pelvic brim at the bifurcation of the common iliac arteries, to enter the posterolateral bladder.",
      "Structure": "Muscular tube lined by transitional epithelium with three physiological constrictions — pelviureteric junction, pelvic brim, and ureterovesical junction.",
      "Blood supply": "Multiple sources — renal, gonadal, common iliac, internal iliac and superior vesical arteries (longitudinal anastomosis).",
      "Innervation": "Renal, aortic and hypogastric plexuses (sympathetic and parasympathetic); pain referred to the loin, groin and external genitalia.",
      "Function": "Convey urine to the bladder by peristaltic waves; the oblique ureterovesical junction prevents reflux."
    },
    clinical: "Stones characteristically impact at the three constrictions; the ureter passes near the uterine artery ('water under the bridge') and is at risk during hysterectomy."
  },
  {
    id: "urinary-bladder",
    name: "Urinary Bladder",
    latin: "Vesica urinaria",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Distensible muscular reservoir that stores urine and expels it during micturition. Its capacity and position vary with filling.",
    details: {
      "Location": "Subperitoneal in the anterior pelvis behind the pubic symphysis; when full it rises above the pubic crest into the abdomen.",
      "Structure": "Apex, body, fundus and neck; the trigone (between the two ureteric orifices and the internal urethral orifice) is smooth-walled; wall of detrusor smooth muscle with internal and external urethral sphincters.",
      "Blood supply": "Superior and inferior vesical arteries (from the internal iliac artery); in females the vaginal artery contributes.",
      "Innervation": "Parasympathetic (pelvic splanchnic, S2–S4) contracts detrusor for voiding; sympathetic (hypogastric, L1–L2) promotes storage; pudendal nerve controls the external sphincter.",
      "Function": "Stores urine and contracts to empty during micturition under voluntary and reflex control."
    },
    clinical: "A distended bladder can be safely accessed by suprapubic catheterisation above the pubic symphysis without entering the peritoneum."
  },
  {
    id: "urethra",
    name: "Urethra",
    latin: "Urethra",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Muscular conduit that conveys urine from the bladder to the exterior, with marked male/female differences. In males it also transmits semen.",
    details: {
      "Location": "Extends from the internal urethral orifice of the bladder to the external meatus; in the male it traverses the prostate, perineal membrane and penis; in the female it lies anterior to the vagina.",
      "Structure": "Male (~18–20 cm): preprostatic, prostatic, membranous (narrowest, through the perineal membrane) and spongy/penile parts. Female (~4 cm): short and straight, opening into the vestibule anterior to the vaginal orifice.",
      "Blood supply": "Inferior vesical and internal pudendal arteries.",
      "Innervation": "Pelvic plexus and pudendal nerve (S2–S4); the external urethral sphincter is under voluntary somatic control.",
      "Function": "Drains urine to the exterior; the male urethra is also a common channel for ejaculation."
    },
    clinical: "The short female urethra predisposes to ascending urinary tract infections, while the male membranous urethra is prone to injury in pelvic fractures and instrumentation."
  },

  // ===================== REPRODUCTIVE =====================
  {
    id: "testes",
    name: "Testes",
    latin: "Testes",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired male gonads producing spermatozoa and testosterone. They reside in the scrotum to maintain a temperature below core body temperature.",
    details: {
      "Location": "Within the scrotum, suspended by the spermatic cord; the left testis usually hangs lower than the right.",
      "Structure": "Covered by the tunica albuginea and tunica vaginalis; divided into lobules of seminiferous tubules draining via the rete testis and efferent ductules into the epididymis; Sertoli cells support spermatogenesis, Leydig cells secrete testosterone.",
      "Blood supply": "Testicular arteries from the abdominal aorta at L2; the right testicular vein drains to the IVC and the left to the left renal vein via the pampiniform plexus.",
      "Innervation": "Testicular plexus (T10–T11 sympathetic), explaining pain referral to the periumbilical region.",
      "Function": "Spermatogenesis and secretion of testosterone."
    },
    clinical: "The left testicular vein's right-angle drainage into the renal vein predisposes the left side to varicocele; testicular pain refers to the periumbilical region (T10)."
  },
  {
    id: "epididymis",
    name: "Epididymis",
    latin: "Epididymis",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Coiled duct on the posterior testis where sperm mature and are stored. It connects the efferent ductules to the vas deferens.",
    details: {
      "Location": "Along the posterolateral surface of each testis within the scrotum.",
      "Structure": "Head (receiving efferent ductules), body and tail; a single highly convoluted duct lined by pseudostratified epithelium with stereocilia.",
      "Blood supply": "Testicular artery and the artery to the ductus deferens; pampiniform plexus venous drainage.",
      "Innervation": "Testicular (sympathetic) plexus.",
      "Function": "Site of sperm maturation, acquisition of motility, and storage prior to ejaculation."
    },
    clinical: "Epididymitis (often from urinary or sexually transmitted infection) causes painful scrotal swelling relieved by elevating the testis (Prehn's sign)."
  },
  {
    id: "vas-deferens",
    name: "Vas Deferens",
    latin: "Ductus deferens",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Thick-walled muscular duct conveying sperm from the epididymis to the ejaculatory duct. It is a key component of the spermatic cord.",
    details: {
      "Location": "Ascends in the spermatic cord through the inguinal canal, crosses the pelvic side wall (over the ureter) and runs behind the bladder to join the seminal vesicle duct.",
      "Structure": "Thick muscular wall with a narrow lumen; dilates into the ampulla before forming the ejaculatory duct with the seminal vesicle duct.",
      "Blood supply": "Artery to the ductus deferens (from the superior vesical/inferior vesical artery).",
      "Innervation": "Rich sympathetic supply (hypogastric plexus) for emission during ejaculation.",
      "Function": "Transports and propels sperm during emission via strong peristaltic contraction."
    },
    clinical: "The vas deferens is ligated and divided in a vasectomy for permanent contraception; it crosses anterior to the ureter near the bladder."
  },
  {
    id: "seminal-vesicles",
    name: "Seminal Vesicles",
    latin: "Vesiculae seminales",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired secretory glands that contribute the bulk of seminal fluid. They lie between the bladder and rectum.",
    details: {
      "Location": "Posterior to the bladder, superior to the prostate and anterior to the rectum, lateral to the ampullae of the vasa deferentia.",
      "Structure": "Coiled tubular glands whose ducts join the vas deferens to form the ejaculatory ducts opening into the prostatic urethra.",
      "Blood supply": "Inferior vesical and middle rectal arteries.",
      "Innervation": "Sympathetic (hypogastric plexus) and parasympathetic fibres.",
      "Function": "Secrete alkaline fructose-rich fluid that nourishes sperm and forms most of the semen volume."
    },
    clinical: "Seminal vesicles are palpable on digital rectal examination when enlarged and are assessed during prostate cancer staging."
  },
  {
    id: "prostate",
    name: "Prostate",
    latin: "Prostata",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Walnut-sized fibromuscular gland surrounding the male urethra below the bladder. Its secretions contribute to semen.",
    details: {
      "Location": "Inferior to the bladder neck, surrounding the prostatic urethra, resting on the pelvic floor and anterior to the rectum (palpable on rectal examination).",
      "Structure": "Anterior, posterior, median and two lateral lobes; zones — peripheral, central, transitional and anterior fibromuscular stroma; prostatic ducts open into the prostatic urethra.",
      "Blood supply": "Inferior vesical, internal pudendal and middle rectal arteries; the prostatic venous plexus communicates with the vertebral venous plexus.",
      "Innervation": "Prostatic plexus (sympathetic and parasympathetic from the inferior hypogastric plexus).",
      "Function": "Secretes thin alkaline fluid (with PSA and citrate) that aids sperm motility and forms part of semen."
    },
    clinical: "Benign hyperplasia of the transitional zone obstructs the urethra causing urinary symptoms, whereas carcinoma typically arises in the peripheral zone and can spread to the vertebrae via the prostatic venous plexus."
  },
  {
    id: "penis",
    name: "Penis",
    latin: "Penis",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Male copulatory and urinary organ composed of erectile tissue. It transmits the spongy urethra to the exterior.",
    details: {
      "Location": "Perineum and anterior to the scrotum; root attached to the perineal membrane and ischiopubic rami, body (shaft) free.",
      "Structure": "Three erectile bodies — paired corpora cavernosa (crura) and a single corpus spongiosum (containing the urethra, ending in the glans); enclosed by tunica albuginea and Buck's fascia.",
      "Blood supply": "Branches of the internal pudendal artery — dorsal, deep (cavernosal) and bulbourethral arteries; deep dorsal vein drains to the prostatic plexus.",
      "Innervation": "Dorsal nerve of the penis (pudendal, somatic sensation); erection is parasympathetic (pelvic splanchnic, S2–S4, 'point'), emission/ejaculation is sympathetic ('shoot').",
      "Function": "Erection, copulation and conveyance of urine and semen."
    },
    clinical: "Erection depends on parasympathetic-mediated vasodilation; phosphodiesterase-5 inhibitors enhance this nitric-oxide pathway to treat erectile dysfunction."
  },
  {
    id: "ovaries",
    name: "Ovaries",
    latin: "Ovaria",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired female gonads producing oocytes and the hormones oestrogen and progesterone. They lie on the lateral pelvic wall.",
    details: {
      "Location": "In the ovarian fossa on the lateral pelvic wall, suspended by the suspensory ligament (containing the ovarian vessels) and the ligament of the ovary to the uterus.",
      "Structure": "Cortex containing follicles at various stages and the corpus luteum, with a vascular medulla; covered by germinal epithelium.",
      "Blood supply": "Ovarian arteries from the abdominal aorta (L2); the right ovarian vein drains to the IVC and the left to the left renal vein.",
      "Innervation": "Ovarian plexus (T10–T11 sympathetic), so ovarian pain refers to the periumbilical/lumbar region.",
      "Function": "Oogenesis and cyclical secretion of oestrogen and progesterone regulating the menstrual cycle."
    },
    clinical: "Ovarian pathology refers pain to the periumbilical region (T10); the suspensory ligament is the key surgical pedicle containing the ovarian vessels."
  },
  {
    id: "uterine-tubes",
    name: "Uterine Tubes",
    latin: "Tubae uterinae (Salpinges)",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired muscular tubes that convey oocytes to the uterus and are the usual site of fertilisation. They open into the peritoneal cavity near the ovary.",
    details: {
      "Location": "In the upper free margin of the broad ligament (mesosalpinx), extending from the uterine cornua to the ovaries.",
      "Structure": "Four parts — infundibulum (with fimbriae), ampulla (widest, usual fertilisation site), isthmus and intramural/uterine part; ciliated and peg-cell mucosa.",
      "Blood supply": "Tubal branches of the ovarian and uterine arteries.",
      "Innervation": "Ovarian and uterine (pelvic) plexuses.",
      "Function": "Capture the ovulated oocyte, provide the site of fertilisation, and transport the conceptus to the uterus by cilia and peristalsis."
    },
    clinical: "The ampulla is the commonest site of ectopic pregnancy, which can rupture and cause life-threatening intraperitoneal haemorrhage."
  },
  {
    id: "uterus",
    name: "Uterus",
    latin: "Uterus",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Thick-walled muscular organ that houses and nourishes the developing fetus. It is normally anteverted and anteflexed over the bladder.",
    details: {
      "Location": "In the pelvis between the bladder (anteriorly) and rectum (posteriorly), typically anteverted and anteflexed; the rectouterine pouch (of Douglas) lies behind it.",
      "Structure": "Fundus, body and cervix separated by the isthmus; walls of perimetrium, myometrium and endometrium; supported by the broad, round, uterosacral and transverse cervical (cardinal) ligaments.",
      "Blood supply": "Uterine arteries (from the internal iliac), which cross above the ureters, anastomosing with the ovarian arteries.",
      "Innervation": "Uterovaginal plexus (sympathetic, parasympathetic S2–S4); the cervix has parasympathetic-mediated pain (S2–S4) and the body sympathetic (T10–L1).",
      "Function": "Receives the conceptus, supports gestation, and contracts during labour and menstruation."
    },
    clinical: "The uterine artery crosses anterior to the ureter ('water under the bridge'), a critical relationship to avoid ureteric injury during hysterectomy."
  },
  {
    id: "vagina",
    name: "Vagina",
    latin: "Vagina",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Distensible fibromuscular canal forming the female birth and copulatory passage. It connects the cervix to the vestibule.",
    details: {
      "Location": "Pelvis and perineum, posterior to the bladder/urethra and anterior to the rectum, extending from the cervix to the vestibule.",
      "Structure": "Fornices (anterior, posterior and two lateral) surround the cervix; the posterior fornix relates to the rectouterine pouch; non-keratinised stratified squamous epithelium with rugae.",
      "Blood supply": "Vaginal arteries (from the uterine or internal iliac), with branches of the internal pudendal and middle rectal arteries.",
      "Innervation": "Upper part via the uterovaginal plexus (autonomic, insensitive to pain); lower part via the pudendal nerve (somatic, sensitive).",
      "Function": "Channel for menstrual flow, receives the penis during coitus, and forms the lower birth canal."
    },
    clinical: "The posterior fornix permits access to the rectouterine pouch (culdocentesis) to detect intraperitoneal blood or pus."
  },
  {
    id: "mammary-gland",
    name: "Mammary Gland (Breast)",
    latin: "Glandula mammaria",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 2,
    description: "Modified apocrine sweat gland that produces milk in lactation. It overlies the pectoral region of the anterior chest wall.",
    details: {
      "Location": "On the pectoral fascia overlying pectoralis major from the 2nd to 6th ribs, between the sternum and mid-axillary line; the axillary tail of Spence extends toward the axilla.",
      "Structure": "15–20 lobes of glandular tissue draining via lactiferous ducts to the nipple, embedded in fat and supported by suspensory (Cooper's) ligaments.",
      "Blood supply": "Internal thoracic (mammary), lateral thoracic and thoracoacromial arteries and posterior intercostal perforators.",
      "Innervation": "Anterior and lateral cutaneous branches of the 4th–6th intercostal nerves (the 4th supplies the nipple).",
      "Function": "Synthesis and secretion of milk (lactation) under prolactin and oxytocin control."
    },
    clinical: "Most lymph from the breast drains to the axillary nodes, the principal route of breast cancer spread; tumour tethering of Cooper's ligaments causes skin dimpling."
  },

  // ===================== ENDOCRINE =====================
  {
    id: "pituitary-gland",
    name: "Pituitary Gland",
    latin: "Hypophysis",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Master endocrine gland that controls many other glands under hypothalamic regulation. It sits within the sella turcica at the skull base.",
    details: {
      "Location": "In the hypophyseal fossa of the sella turcica of the sphenoid bone, connected to the hypothalamus by the infundibulum; the optic chiasm lies just above.",
      "Structure": "Anterior lobe (adenohypophysis) of glandular epithelium and posterior lobe (neurohypophysis) of neural origin; linked to the hypothalamus by the hypophyseal portal system and hypothalamo-hypophyseal tract.",
      "Blood supply": "Superior and inferior hypophyseal arteries (from the internal carotid); the hypophyseal portal system carries hypothalamic releasing hormones.",
      "Innervation": "Posterior lobe receives hypothalamic neurons; anterior lobe is controlled humorally via the portal system.",
      "Function": "Anterior secretes GH, TSH, ACTH, FSH, LH and prolactin; posterior stores and releases ADH and oxytocin."
    },
    clinical: "A pituitary adenoma can compress the overlying optic chiasm, producing bitemporal hemianopia."
  },
  {
    id: "pineal-gland",
    name: "Pineal Gland",
    latin: "Glandula pinealis",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Small endocrine gland that secretes melatonin to regulate circadian rhythm. It lies in the midline of the epithalamus.",
    details: {
      "Location": "Posterior to the third ventricle, attached to the roof of the diencephalon between the superior colliculi.",
      "Structure": "Composed of pinealocytes and glial cells; often calcifies with age (a useful midline radiological marker).",
      "Blood supply": "Posterior cerebral artery branches (medial posterior choroidal arteries).",
      "Innervation": "Sympathetic fibres from the superior cervical ganglion conveying light/dark information.",
      "Function": "Secretes melatonin in response to darkness, entraining circadian and seasonal rhythms."
    },
    clinical: "Pineal calcification is a reliable midline landmark on skull imaging; a pineal tumour may compress the tectum causing Parinaud's syndrome (failure of upgaze)."
  },
  {
    id: "thyroid-gland",
    name: "Thyroid Gland",
    latin: "Glandula thyroidea",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Butterfly-shaped endocrine gland in the anterior neck producing metabolic hormones. It also regulates blood calcium via calcitonin.",
    details: {
      "Location": "Anterior neck at C5–T1, wrapped around the trachea below the larynx; two lobes joined by an isthmus over the 2nd–4th tracheal rings.",
      "Structure": "Follicles of colloid lined by follicular cells producing thyroid hormone, and parafollicular (C) cells producing calcitonin; enclosed in pretracheal fascia so it moves on swallowing.",
      "Blood supply": "Superior thyroid artery (external carotid) and inferior thyroid artery (thyrocervical trunk); the ima artery is variable; drains via superior, middle and inferior thyroid veins.",
      "Innervation": "Superior and inferior cervical sympathetic ganglia (vasomotor); the recurrent and external laryngeal nerves are intimately related to its vessels.",
      "Function": "Secretes thyroxine (T4) and triiodothyronine (T3) to regulate basal metabolic rate, and calcitonin to lower blood calcium."
    },
    clinical: "During thyroidectomy the recurrent laryngeal nerve (near the inferior thyroid artery) and external laryngeal nerve (near the superior thyroid artery) are at risk of injury."
  },
  {
    id: "parathyroid-glands",
    name: "Parathyroid Glands",
    latin: "Glandulae parathyroideae",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 2,
    description: "Usually four small glands on the posterior thyroid that are the chief regulators of calcium. They secrete parathyroid hormone.",
    details: {
      "Location": "On the posterior surface of the thyroid lobes within its fascial sheath — superior pair from the 4th pharyngeal pouch, inferior pair from the 3rd pouch (variable position).",
      "Structure": "Small ovoid glands of chief cells (secreting PTH) and oxyphil cells.",
      "Blood supply": "Mainly the inferior thyroid arteries.",
      "Innervation": "Sympathetic from the cervical ganglia (vasomotor only).",
      "Function": "Secrete parathyroid hormone (PTH) which raises blood calcium by acting on bone, kidney and (via vitamin D) the gut."
    },
    clinical: "Inadvertent removal during thyroid surgery causes hypocalcaemia with tetany (Chvostek's and Trousseau's signs)."
  },
  {
    id: "adrenal-glands",
    name: "Adrenal (Suprarenal) Glands",
    latin: "Glandulae suprarenales",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Paired endocrine glands capping the kidneys that secrete steroid hormones and catecholamines. They mediate the stress response.",
    details: {
      "Location": "Retroperitoneal at the superomedial pole of each kidney at about T12, within the renal (Gerota's) fascia; right is pyramidal, left is crescentic.",
      "Structure": "Cortex (zona glomerulosa → aldosterone, zona fasciculata → cortisol, zona reticularis → androgens) surrounding a medulla of chromaffin cells secreting catecholamines.",
      "Blood supply": "Superior (from inferior phrenic), middle (from aorta) and inferior (from renal artery) suprarenal arteries; a single suprarenal vein drains right to the IVC and left to the left renal vein.",
      "Innervation": "The medulla receives direct preganglionic sympathetic fibres (acting as a modified sympathetic ganglion).",
      "Function": "Cortex secretes aldosterone, cortisol and androgens; medulla secretes adrenaline and noradrenaline for the fight-or-flight response."
    },
    clinical: "A catecholamine-secreting tumour of the medulla (phaeochromocytoma) causes episodic hypertension, palpitations, sweating and headache."
  },
  {
    id: "thymus",
    name: "Thymus",
    latin: "Thymus",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "Primary lymphoid organ in the anterior mediastinum where T lymphocytes mature. It is prominent in childhood and involutes with age.",
    details: {
      "Location": "Anterior (superior) mediastinum behind the manubrium, extending into the lower neck in children; replaced largely by fat in adults.",
      "Structure": "Two lobes of cortex (densely packed thymocytes) and medulla (containing Hassall's corpuscles); epithelial reticular cells form the blood–thymus barrier.",
      "Blood supply": "Anterior intercostal and internal thoracic (mammary) arteries and branches of the inferior thyroid artery.",
      "Innervation": "Vagus and sympathetic trunk (vasomotor).",
      "Function": "Site of T-lymphocyte maturation and selection, and secretion of thymic hormones (thymosin); central to adaptive immunity."
    },
    clinical: "The thymus is strongly associated with myasthenia gravis, and thymectomy can improve this autoimmune neuromuscular disease."
  },

  // ===================== LYMPHATIC / IMMUNE =====================
  {
    id: "spleen",
    name: "Spleen",
    latin: "Splen (Lien)",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 1,
    description: "Largest lymphoid organ, filtering blood and mounting immune responses. It also recycles aged red blood cells.",
    details: {
      "Location": "Left hypochondrium, against the diaphragm along the long axis of the 9th–11th ribs, posterior to the stomach and superolateral to the left kidney.",
      "Structure": "Encapsulated organ of white pulp (lymphoid tissue around arterioles) and red pulp (sinusoids and cords of Billroth); related at its hilum to the tail of the pancreas; suspended by the gastrosplenic and splenorenal ligaments.",
      "Blood supply": "Splenic artery (largest branch of the coeliac trunk, tortuous along the pancreas); splenic vein joins the superior mesenteric vein to form the portal vein.",
      "Innervation": "Coeliac plexus (sympathetic, vasomotor).",
      "Function": "Filters and removes old/abnormal red cells, recycles iron, stores platelets, and mounts immune responses (especially against encapsulated bacteria)."
    },
    clinical: "The spleen is the most commonly injured abdominal organ in blunt trauma (rib fractures); post-splenectomy patients are vulnerable to overwhelming infection by encapsulated organisms and require vaccination."
  },
  {
    id: "tonsils",
    name: "Tonsils",
    latin: "Tonsillae",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Aggregations of lymphoid tissue forming a protective ring at the entrance to the pharynx (Waldeyer's ring). They sample inhaled and ingested antigens.",
    details: {
      "Location": "Palatine tonsils in the tonsillar fossa between the palatoglossal and palatopharyngeal arches; pharyngeal (adenoid) in the nasopharynx roof; lingual on the posterior tongue; tubal near the auditory tube openings.",
      "Structure": "Lymphoid tissue with crypts covered by epithelium; together they form Waldeyer's ring.",
      "Blood supply": "Tonsillar branch of the facial artery (palatine tonsil), with ascending pharyngeal, lingual and lesser palatine contributions.",
      "Innervation": "Glossopharyngeal nerve (CN IX) and lesser palatine nerves (CN V2).",
      "Function": "Immune surveillance — trap and present antigens entering via the nose and mouth."
    },
    clinical: "Bleeding after tonsillectomy arises from the external palatine vein and tonsillar artery; CN IX proximity can cause referred otalgia in tonsillitis."
  },
  {
    id: "thoracic-duct",
    name: "Thoracic Duct",
    latin: "Ductus thoracicus",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "The largest lymphatic vessel, returning most of the body's lymph to the venous system. It begins in the abdomen and ascends through the thorax.",
    details: {
      "Location": "Begins at the cisterna chyli (anterior to L1–L2), ascends through the aortic hiatus of the diaphragm and the posterior mediastinum, and drains at the junction of the left subclavian and internal jugular veins.",
      "Structure": "Thin-walled valved channel; it crosses from right to left at about T5 and receives the left jugular, subclavian and bronchomediastinal trunks near its termination.",
      "Blood supply": "Small vasa vasorum from adjacent intercostal vessels.",
      "Innervation": "Sympathetic fibres (vasomotor).",
      "Function": "Returns lymph and absorbed dietary fat (chyle) from the entire body except the right upper quadrant to the bloodstream."
    },
    clinical: "Injury during thoracic or neck surgery causes chylothorax — a milky lymphatic effusion in the pleural cavity."
  },
  {
    id: "lymph-nodes",
    name: "Lymph Nodes",
    latin: "Nodi lymphoidei",
    system: "organs",
    category: "Organ",
    region: "abdomen-pelvis",
    count: 2,
    description: "Small encapsulated organs along lymphatic vessels that filter lymph and initiate immune responses. Hundreds are distributed throughout the body.",
    details: {
      "Location": "Clustered along lymphatic pathways — notably cervical, axillary, mediastinal, para-aortic, mesenteric and inguinal groups.",
      "Structure": "Bean-shaped node with an outer cortex (B-cell follicles), paracortex (T cells) and inner medulla; afferent lymphatics enter the convex surface, a single efferent vessel and vessels leave at the hilum.",
      "Blood supply": "Small arteries and veins entering at the hilum.",
      "Innervation": "Autonomic (vasomotor) fibres.",
      "Function": "Filter lymph of pathogens and debris, present antigens, and provide sites for lymphocyte proliferation and antibody production."
    },
    clinical: "Lymph nodes are key sites of cancer metastasis; the sentinel node is the first to receive drainage from a tumour and is biopsied for staging."
  },

  // ===================== INTEGUMENTARY & SENSORY =====================
  {
    id: "skin",
    name: "Skin",
    latin: "Cutis (Integumentum commune)",
    system: "organs",
    category: "Organ",
    region: "thorax",
    count: 1,
    description: "The largest organ of the body, forming a protective barrier and the chief organ of touch and thermoregulation. It covers the entire external surface.",
    details: {
      "Location": "Covers the whole body surface, continuous with mucous membranes at the orifices; thickest on the palms and soles.",
      "Structure": "Epidermis (stratified keratinised squamous epithelium with five strata) over the dermis (papillary and reticular layers of connective tissue) above the subcutaneous hypodermis; appendages include hair, nails, sebaceous and sweat glands.",
      "Blood supply": "Cutaneous arteries forming the deep (dermal/subdermal) and superficial (subpapillary) plexuses.",
      "Innervation": "Sensory receptors (Meissner, Pacinian, Merkel, Ruffini corpuscles and free nerve endings) via segmental dermatomes; sympathetic fibres to sweat glands, arrector pili and vessels.",
      "Function": "Protection (barrier and immune), thermoregulation, sensation, fluid retention, and synthesis of vitamin D."
    },
    clinical: "Burn severity and fluid resuscitation depend on the depth and the body surface area affected, estimated by the rule of nines."
  },
  {
    id: "eye",
    name: "Eye (Eyeball)",
    latin: "Oculus (Bulbus oculi)",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 2,
    description: "Paired organ of vision that focuses light onto the retina to generate visual signals. It sits within the bony orbit cushioned by fat.",
    details: {
      "Location": "Within the bony orbit, surrounded by extraocular muscles, orbital fat and fascia (Tenon's capsule).",
      "Structure": "Three coats — outer fibrous (sclera and cornea), middle vascular uvea (choroid, ciliary body, iris) and inner neural retina; three chambers — anterior and posterior chambers (aqueous humour) and the vitreous chamber (vitreous body); lens between the iris and vitreous.",
      "Blood supply": "Ophthalmic artery (from the internal carotid); the central retinal artery is an end-artery supplying the inner retina.",
      "Innervation": "Optic nerve (CN II) for vision; CN III, IV and VI move the eye; sensation via CN V1; autonomic control of pupil and lens (parasympathetic via CN III, sympathetic).",
      "Function": "Refracts and focuses light onto the retina, where photoreceptors transduce it into neural signals for vision."
    },
    clinical: "The central retinal artery is an end-artery, so its occlusion causes sudden painless monocular blindness."
  },
  {
    id: "ear",
    name: "Ear",
    latin: "Auris",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 2,
    description: "Paired organ of hearing and balance, divided into external, middle and inner parts. It converts sound waves into neural signals and detects head motion.",
    details: {
      "Location": "Within and around the temporal bone; the external ear on the side of the head, the middle and inner ear within the petrous temporal bone.",
      "Structure": "External ear (auricle and external acoustic meatus to the tympanic membrane); middle ear (tympanic cavity with malleus, incus and stapes and the auditory/Eustachian tube to the nasopharynx); inner ear (bony and membranous labyrinth — cochlea for hearing, vestibule and semicircular canals for balance).",
      "Blood supply": "Posterior auricular and superficial temporal arteries (external/middle) and the labyrinthine artery (inner ear, from the basilar/AICA).",
      "Innervation": "CN VIII (vestibulocochlear) for hearing and balance; sensation via CN V3, VII, IX and X; CN VII traverses the middle ear.",
      "Function": "Hearing (sound transduction in the cochlea) and balance (linear and angular acceleration via the vestibular apparatus)."
    },
    clinical: "The facial nerve runs through the middle ear, so it can be injured by middle ear infection (otitis media) or surgery."
  },
  {
    id: "meninges",
    name: "Meninges",
    latin: "Meninges",
    system: "organs",
    category: "Organ",
    region: "head-neck",
    count: 1,
    description: "Three connective tissue membranes enveloping the brain and spinal cord for protection and CSF containment. They form the potential spaces relevant to haemorrhage.",
    details: {
      "Location": "Surround the entire central nervous system within the cranial cavity and vertebral canal.",
      "Structure": "Dura mater (tough outer layer with periosteal and meningeal layers forming the falx and tentorium and dural venous sinuses), arachnoid mater (with the subarachnoid space containing CSF), and pia mater (adherent to the brain/cord surface).",
      "Blood supply": "Middle meningeal artery (a maxillary branch) is the main dural supply; the brain/cord by cerebral and spinal vessels.",
      "Innervation": "Dura is innervated by branches of CN V and upper cervical nerves (the main pain-sensitive intracranial structure).",
      "Function": "Protect the CNS, contain and circulate cerebrospinal fluid, and house the dural venous sinuses."
    },
    clinical: "Rupture of the middle meningeal artery (e.g. pterion fracture) causes an extradural haematoma with a classic lucid interval, while bridging vein tears cause subdural haematoma."
  }
];
