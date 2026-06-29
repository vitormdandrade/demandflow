# GA4 + GTM Setup for DemandFlow

## Step 1: Create GA4 Property
1. Go to https://analytics.google.com
2. Admin → Create Property
3. Name: "DemandFlow"
4. Timezone: United States (Eastern or Pacific)
5. Currency: USD
6. Get Measurement ID (format: G-XXXXXXXXXX)

## Step 2: Create GTM Container
1. Go to https://tagmanager.google.com
2. Create Account → "DemandFlow"
3. Create Container → Web → "demandflow-one.vercel.app"
4. Get GTM ID (format: GTM-XXXXXXX)

## Step 3: Set Vercel Env Var
```bash
cd /Volumes/ssd/consistencylabs/demandflow
vercel env add NEXT_PUBLIC_GTM_ID production
# Enter: GTM-XXXXXXX
vercel deploy --prod
```

## Step 4: Configure GTM Tags
In GTM container, create these tags:

### GA4 Configuration Tag
- Type: Google Tag
- Tag ID: G-XXXXXXXXXX
- Trigger: All Pages

### Conversion Events (GA4 Event Tags)
Each fires on the corresponding dataLayer event:

| Event Name | dataLayer Event | Trigger |
|-----------|----------------|---------|
| form_start | form_start | Custom Event = form_start |
| begin_checkout | begin_checkout | Custom Event = begin_checkout |
| purchase | purchase | Custom Event = purchase |

### Google Ads Conversion Tracking
- Import GA4 conversions into Google Ads
- Or create Google Ads conversion tag in GTM (trigger: purchase event)

## Step 5: Verify
1. Preview GTM container
2. Visit demandflow-one.vercel.app
3. Check dataLayer events fire in GTM preview
4. Check GA4 real-time reports
