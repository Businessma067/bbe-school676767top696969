# BBE Economics Book (source)

Editable source for the Economics Full Course theory PDF.

## Structure

- `book-config.json` — brand + chapter list
- `chapters/ch0N.mjs` — chapter content (BBE Path blocks)
- Generated outputs live in `../textbook/output/` and `../public/bbe-theory/`

## Teaching method: BBE Path

For major concepts the content follows:

1. **Scene** — concrete situation  
2. **Idea** — core definition / meaning  
3. **Mechanism** — how it works / what changes  
4. **Visual / formula** — diagram or math with variable meaning  
5. **Worked** — step-by-step  
6. **Think** — short active prompt  
7. **Trap** — common mistake  
8. **Exam** — recognition / fast reasoning  
9. **Takeaways** — revision bullets  

## Build

```bash
npm run textbook:build
```
