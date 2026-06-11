# Corpus — Human Anatomy Atlas

A complete, searchable human anatomy reference built for medical students. No frameworks, no build step — open `index.html` and study.

## What's inside

- **Skeletal system** — all 206 bones of the adult skeleton, from the stapes to the femur, with bone type, articulations, key landmarks and muscle attachments.
- **Muscular system** — every major named muscle with **O**rigin, **I**nsertion, **I**nnervation (with root values) and **A**ction, plus blood supply.
- **Cardiovascular system** — the full arterial tree and venous system: origin, course, branches and territory for arteries; tributaries and drainage for veins.
- **Nervous system** — all 12 cranial nerves, the cervical/brachial/lumbar/sacral plexuses and their branches, and major CNS structures.
- **Organs & viscera** — thoracic, abdominal and pelvic organs, glands and sense organs with locations, vertebral levels and structure.

Every entry carries a **clinical pearl** — the fracture, palsy, pulse point or sign that makes it matter on the wards.

## Features

- **Instant search** across names, Latin terms, and every detail field (press `/` to focus).
- **Filters** by body system, body region (head & neck, thorax, limbs, …) and structure type (artery vs. vein, …).
- **Detail cards** with full exam-grade facts in a clean table layout.
- **Quiz mode** — multiple-choice questions auto-generated from the atlas itself (origins, insertions, innervations, root values, branches, locations), filterable by system.

## Running it

It's a static site. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
index.html          page shell (atlas view, quiz view, detail modal)
css/style.css       styling
js/app.js           search, filters, modal, quiz engine
js/data/bones.js    skeletal data   (window.ANATOMY_BONES)
js/data/muscles.js  muscular data   (window.ANATOMY_MUSCLES)
js/data/vessels.js  arteries/veins  (window.ANATOMY_VESSELS)
js/data/nerves.js   nerves & CNS    (window.ANATOMY_NERVES)
js/data/organs.js   organs          (window.ANATOMY_ORGANS)
```

Adding content is just appending an object to the relevant data file — the UI, search and quiz pick it up automatically.

> Content is intended for study purposes and is not a substitute for clinical guidance or your official course materials.
