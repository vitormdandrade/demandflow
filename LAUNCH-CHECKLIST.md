# DemandFlow Launch Checklist — June 29, 2026

## ✅ Phase 0 — Complete (GO approved)
- [x] MVP deployed (demandflow-one.vercel.app)
- [x] Stripe checkout flow working ($29 one-time)
- [x] Webhook endpoint configured
- [x] Demand letter generation (HTML template)
- [x] GitHub repo (vitormdandrade/demandflow)
- [x] Notion databases (Tasks + Docs)
- [x] Cron job (every 2h autonomous cycle)
- [x] Vercel auto-deploy on push
- [x] P0-H001 — GO/NO-GO: **APPROVED ✓**
- [x] All P0-A001–P0-A006 planning deliverables: **DONE ✓**

## 🔄 Phase 1 — In Progress (11 tasks in Notion)

### Human (Vitor)
| Task | Priority |
|---|---|
| P1-H001 — Create Google Ads account + campaign ($20/day) | 🟡 Média | ⏳ Deferred → Wed Jul 1 |
| P1-H002 — GA4 property + GTM container + Vercel env vars | 🔴 Alta | ⏳ |
| P1-H003 — Verify end-to-end: ad → payment → letter | 🔴 Alta | ⏳ Blocks on P1-H001 |

### Claude Code
| Task | Priority | Status |
|---|---|---|
| P1-A001 — GA4/GTM tracking integration | 🔴 Alta | ✅ Done |
| P1-A002 — Privacy Policy + Terms of Service pages | 🔴 Alta | ✅ Done |
| P1-A003 — Footer component | 🔴 Alta | ✅ Done |
| P1-A005 — Letter template polish (letterhead, reference #) | 🟡 Média | ✅ Done |
| P1-A006 — Metadata/SEO (OG tags, Twitter card) | 🟡 Média | ✅ Done |
| P1-A007 — Favicon + web app manifest | 🟢 Baixa | ✅ Done |
| P1-A004 — Landing page polish (social proof) | 🟡 Média | ✅ Done — cf771a4 |

### Hermes (Verification)
| Task | Priority | Status |
|---|---|---|
| P1-A008 — Verify all deliverables + GO/NO-GO for Phase 2 | 🟡 Média | ✅ Done — June 29, 2026 |

**Verification results (P1-A008):**
- ✅ P1-A001 GA4/GTM: GTM script, GtmPageView component, dataLayer all present in layout
- ✅ P1-A002 Privacy/Terms: Both pages complete with proper metadata, Section components
- ✅ P1-A003 Footer: Clean component with privacy/terms links
- ✅ P1-A005 Letter template: Reference number, letterhead, print styles all polished
- ✅ P1-A006 Metadata/SEO: OG tags, Twitter card, canonical URL in layout
- ✅ P1-A007 Favicon: favicon.ico (25KB) + icon.svg present in app directory

**GO/NO-GO for Phase 2: CONDITIONAL GO** — All agent deliverables verified. Product is launch-ready. Phase 2 blocked on human tasks P1-H001 (Google Ads account), P1-H002 (GA4/GTM env vars), P1-H003 (end-to-end test). Once ads are live, Phase 2 stretch goals (custom domain, PDF email, multiple templates) are ready for agent execution.

## 📋 Phase 2+ (Stretch)
- [ ] Custom domain (demandflow.io or similar)
- [ ] Email delivery of PDF
- [ ] Multiple letter templates
- [ ] User accounts + history
- [ ] Affiliate/referral program
