# Instagram pinned banner (BBE / WiSo / Demo)

Format: one poster **3240×1350** → three equal **1080×1350** (Instagram 4:5).

## How to regenerate

```bash
python3 scripts/make_instagram_pinned_banner.py
```

## Variants

All darkened WU / campus looks live in `variants/<name>/`:

| # | Folder | Look |
|---|--------|------|
| 01 | `01-llc-level-cards` | LLC night, level, white cards **(default)** |
| 02 | `02-llc-level-glass` | same + dark glass cards |
| 03 | `03-plaza-level-cards` | campus plaza dusk |
| 04 | `04-plaza-level-deep` | plaza, deeper dark |
| 05 | `05-campus-night-cards` | modern campus night |
| 06 | `06-campus-night-glass` | same + glass cards |
| 07 | `07-llc-dusk-cards` | LLC cinematic dusk |
| 08 | `08-teaching-night-cards` | Teaching Center night |
| 09 | `09-interior-dark-cards` | library atrium |
| 10 | `10-audimax-dark-cards` | Audimax exterior |
| 11–15 | `11-real-…` … `15-real-…` | real `public/wu-vienna` photos, darkened |

Each folder has: `full.jpg`, `01-bbe.jpg`, `02-wiso.jpg`, `03-demo.jpg`, `preview.jpg`.

Contact sheets: `contact-sheet-all-variants.jpg`, `contact-sheet-fulls.jpg`.
