# Google Ads Campaign Setup — DemandFlow

## Account
- Create at https://ads.google.com
- Currency: USD
- Timezone: Eastern (US)
- Billing: Credit card

## Campaign: DemandFlow — Search

### Settings
- Type: Search Network
- Locations: United States
- Language: English
- Bid strategy: Maximize Clicks (start), then switch to Maximize Conversions when 15+ conversions
- Daily budget: $20/day (ramp up based on CPA)

### Ad Copy (Responsive Search Ads)

**Headlines (max 30 chars each):**
- Send a Demand Letter
- Client Won't Pay? $29
- Legal Demand Letter Now
- Freelancer? Get Paid
- Demand Letter in 60 Sec
- No Lawyer Needed — $29
- Unpaid Invoice Solution
- Professional Demand Letter

**Descriptions (max 90 chars each):**
- When a client doesn't pay, send a legally-formatted demand letter in 60 seconds. Stripe checkout. Instant download. $29.
- Freelancers: stop chasing unpaid invoices. Generate a professional demand letter in under a minute. Pay only $29.
- One template. Instant PDF. $29. Send a demand letter that gets results. No lawyer, no wait, no hassle.

### Keyword Groups

**Ad Group 1: Non-Payment (Exact + Phrase)**
- [demand letter for non payment]
- [freelance client not paying legal letter]
- "send demand letter to client"
- [unpaid invoice demand letter]
- "client won't pay invoice"
- [legal letter for unpaid debt]
- +5 broad match variants

**Ad Group 2: Demand Letter Service (Exact + Phrase)**  
- [send a demand letter online]
- [demand letter generator]
- "demand letter service"
- [online demand letter $29]
- [demand letter template paid]
- "professional demand letter"

**Ad Group 3: Freelancer Tools (Broad)**
- freelancer legal protection
- freelance contract enforcement
- get paid as freelancer legal
- independent contractor payment dispute

### Negative Keywords
free, sample, example, how to write, attorney, lawyer, lawsuit, court, pdf template, download, printable, DIY, yourself

### Landing Page
https://demandflow-one.vercel.app/

### Conversion Tracking
- Primary: purchase (GA4 import from GTM)
- Secondary: begin_checkout

### Expected Metrics (Day 1-7)
- CPC: $2-4
- CTR: 3-5%
- Conversion rate: 3-5%
- Target CPA: $40-60
- Break-even: 1.4-2.1 purchases at $29
