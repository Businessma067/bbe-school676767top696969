# Roadmap
- [ ] Persist STUDYLINE's selected course per account, show its reduced price, allow switching before payment with a visible note, and verify persistence and limits.

- [ ] Route all verified new email and Google signups through the success page, exclude returning Google users, and verify redirect regressions; leave production unpublished.

- [x] Align user CSV country column and run country capture after verified signup; regression tests pass, preview builds and authenticated admin list opens. A fresh signup with real country persistence has not been exercised end-to-end.

- [x] Inspect all 28 BBE / WiSo gallery annotations; replace the covered BBE answer sheet with a complete clean browser capture, move its centered caption into the empty gutter, and correct the WiSo pointer to the highlighted answer cell. Both replacement assets load in the live preview without runtime errors.

- [x] Produce and visually verify two authentic high-resolution website examples with centered local callouts and short arrows, without changing the galleries.
- [x] Apply the approved authentic-capture style to all 28 gallery images with centered local callouts, short measured arrows and orange BBE / blue WiSo outlines; browser-verified all 28 images at 3200×1800 and both enlarged viewers without runtime errors.

- [x] Rebuild both full-course galleries with 14 feature screenshots each, aligned uncropped frames, safe caption margins and orange BBE / blue WiSo caption outlines; all 28 images load at 3200×1800, both enlarged viewers open, and browser checks report no errors.

- [x] Place consistent gallery captions in empty interface areas and connect them to relevant controls with short arrows; all 20 images load at 3200×1800 in both galleries without browser errors.

- [x] Replace old annotations with clean captures, subtle local highlights and one consistent caption style; verify both galleries in the browser.

- [x] Replace generic product-image callouts with meaningful exam-preparation features in both course galleries; preserve original 3200×1800 screenshots and verify all slides in the browser.

- [x] Improve BBE and WiSo product-gallery clarity with uncropped, equally sized images and full-screen detail viewing.

- [x] Enable magnification of the actual inline demonstration content at the selected point.

- [x] Add fullscreen, rotation, pinch zoom and panning to enlarged How it works demonstrations.

- [x] Fit the complete desktop How it works stage inside every inline and enlarged view, including phones.

- [x] Make all How it works videos 16:9 with uncropped content and enlarged playback for readability.

- [x] Hybrid BBE + WiSo Course live (hub `/hybrid`, sales `/products/hybrid-course`, €559)
  - Tools: Twin Readiness, Shared-First Planner, Shared Math library (EN/DE), Bridge case library
  - Plan: `docs/hybrid-bbe-wiso-course-plan.md`
  - Next: scale econ concept tagging, deeper mock scoring parity
- [ ] Propose advanced design directions for BBE School (photos only, no code changes yet)
  - Feedback: first prototype batch (static HTML directions) too simple — user wants design complexity, polish, layered detail, animations/transitions
  - Next: produce rich visual concept examples (images) showing advanced structure, depth and motion; await user's pick before implementing
- [ ] Показать сложные анимированные концепты главной страницы (не шаблонные): живые анимации, ощущение переходов между страницами, уникальный дизайн; после выбора — реализовать
  - Новое требование: строить демо с нуля (не поверх текущего), очень техничное по анимациям, wow-эффект
