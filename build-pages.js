const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// The marker strings to split our template
const headTop = indexHtml.split('<title>')[0];
const headBottom = '</title>\n' + indexHtml.split('</title>\n')[1].split('<header class="hero">')[0];
const footerStart = '\n    <!-- CTA: Clear, single exit to pricing -->\n' + indexHtml.split('<!-- CTA: Clear, single exit to pricing -->')[1];

const pages = [
    {
        slug: 'cost',
        title: 'How Much Does Social Media Management Cost? (2026 Breakdown)',
        description: 'A complete breakdown of social media management costs in 2026. Compare freelancer rates, agency retainers, and AI tool pricing.',
        content: `
    <!-- HERO -->
    <header class="hero">
        <div class="container">
            <span class="badge">Pricing Guide</span>
            <h1>How Much Does Social Media Management Cost?</h1>
            <p>If you're wondering how much to budget for social media in 2026, the answer depends entirely on <em>how</em> you get it done.</p>
            <p>Here is a complete breakdown of what you can expect to pay across the four main approaches: DIY tools, Freelancers, Agencies, and AI-powered Done-For-You software.</p>
        </div>
    </header>

    <section class="container">
        <h2>The 2026 Pricing Spectrum</h2>
        <p>The cost of social media management typically scales with how much time the service saves you, and whether it includes strategy, content creation, or just publishing.</p>
        
        <div style="margin-top: 40px;">
            <h3>1. The DIY Route (Free – $100/mo)</h3>
            <p>Tools like Canva, Buffer, Later, and Hootsuite fall into this category. The software itself is cheap, but it costs you 15-20 hours of your own time every month. For business owners whose time is worth $50-$150/hr, DIY is actually the most expensive option.</p>
            
            <h3 style="margin-top: 30px;">2. AI-Powered "Done-For-You" ($49 – $200/mo)</h3>
            <p>This is the fastest-growing category. Platforms like <a href="https://glowsocial.com/pricing" style="color:var(--navy);font-weight:bold;">Glow Social</a> use AI to learn your brand voice and automatically generate, schedule, and publish posts for you. This approach removes the labor cost entirely, delivering agency-quality consistency for a fraction of the price.</p>
            
            <h3 style="margin-top: 30px;">3. Freelancers & Virtual Assistants ($300 – $1,200/mo)</h3>
            <p>A good middle-ground if you want a human touch. VAs are cheaper ($300-$500) but usually require you to provide the strategy and the assets. Dedicated freelance social media managers cost closer to $800-$1,200/mo and handle the strategy for you.</p>

            <h3 style="margin-top: 30px;">4. Full-Service Agencies ($2,000 – $5,000+/mo)</h3>
            <p>Agencies offer high-end video production, complex ad management, and influencer campaigns. This tier is built for mid-market and enterprise companies, or local businesses with massive marketing budgets. For maintaining standard posting consistency, agencies are almost always overkill.</p>
        </div>
    </section>
    `
    },
    {
        slug: 'for-small-businesses',
        title: 'Social Media Management for Small Businesses Under $100/Month',
        description: 'Discover how small businesses are managing their social media for under $100/month by leveraging affordable done-for-you automation in 2026.',
        content: `
    <!-- HERO -->
    <header class="hero">
        <div class="container">
            <span class="badge">Small Business Guide</span>
            <h1>Social Media Management for Small Businesses Under $100/Month</h1>
            <p>Small business owners face a unique dilemma: you need to be active on social media to build trust with local customers, but you don't have $2,000/month to hire an agency.</p>
            <p>In 2026, new tools and affordable services make it possible to fully automate your social presence without breaking the bank.</p>
        </div>
    </header>

    <section class="container">
        <h2>Why Local Businesses Struggle with Social Media</h2>
        <p>Most local businesses (plumbers, realtors, salons, auto shops) don't need highly produced viral TikToks.</p>
        <p>What you actually need is <strong>consistency</strong>. When a potential customer looks you up to verify you're a real, active business, they just want to see that you posted a few days ago, that you do good work, and that you're currently accepting clients.</p>
        <p>But finding 5 hours a week to sit down, design graphics, write captions, and schedule posts is nearly impossible when you're busy running the actual business.</p>

        <h2 style="margin-top: 40px;">How to Look Professional for Under $100 a Month</h2>
        <p>Instead of manually using scheduling tools that still require you to write the content, switch to "Done-For-You" AI tools.</p>
        <p>Tools like Glow Social were built specifically for local and small businesses. For just $49/month, it handles the strategy, the writing, the image creation, and the publishing across all your profiles. It essentially acts as a mini-freelancer.</p>
        
        <h2 style="margin-top: 40px;">What $100/Month Gets You Today</h2>
        <ul style="margin-left: 20px; margin-top: 15px;">
            <li style="margin-bottom: 10px;"><strong>Automated Content:</strong> AI that learns your voice and creates posts tailored to your specific industry constraints.</li>
            <li style="margin-bottom: 10px;"><strong>Multi-Platform Publishing:</strong> Posting automatically to Facebook, Instagram, Google Business Profile, and LinkedIn.</li>
            <li style="margin-bottom: 10px;"><strong>0 Hours Spent:</strong> The biggest benefit is getting those 10 hours a month back so you can serve more customers or go home early.</li>
        </ul>
    </section>
    `
    },
    {
        slug: 'vs-agencies',
        title: 'Social Media Management: DIY vs. Freelancer vs. Agency vs. AI',
        description: 'Comparing social media management approaches: Should you DIY, hire a freelancer, retain an agency, or use affordable AI-powered software?',
        content: `
    <!-- HERO -->
    <header class="hero">
        <div class="container">
            <span class="badge">Comparison</span>
            <h1>DIY vs. Freelancer vs. Agency vs. AI</h1>
            <p>Choosing how to handle your social media is one of the most stressful marketing decisions for a business owner.</p>
            <p>Let's strip away the jargon and objectively compare the four main ways you can get this task off your plate in 2026.</p>
        </div>
    </header>

    <section class="container">
        <div class="two-column" style="margin-top: 30px;">
            <div class="column-card">
                <h3 style="color:#d9534f;">1. The "Do It Yourself" Approach</h3>
                <p><strong>Tools used:</strong> Canva, Buffer, Hootsuite.</p>
                <p><strong>Cost:</strong> $0 to $100/month.</p>
                <p><strong>Time required:</strong> 15-20 hours/month.</p>
                <p><strong>Pros:</strong> You have 100% control over the exact look and sound of every post.</p>
                <p><strong>Cons:</strong> As the business grows, this becomes the first ball that gets dropped. Consistency plummets when you get busy.</p>
            </div>
            
            <div class="column-card">
                <h3 style="color:#5bc0de;">2. Hiring a Freelancer / VA</h3>
                <p><strong>Cost:</strong> $400 to $1,500/month.</p>
                <p><strong>Time required:</strong> 2-5 hours/month for reviews/strategy.</p>
                <p><strong>Pros:</strong> Cheaper than an agency, single point of contact, human touch.</p>
                <p><strong>Cons:</strong> Quality varies wildly. You often still have to feed them ideas, photos, and strategy or the content becomes very generic.</p>
            </div>
            
            <div class="column-card">
                <h3 style="color:#f0ad4e;">3. Hiring a Full-Service Agency</h3>
                <p><strong>Cost:</strong> $2,000 to $10,000+/month.</p>
                <p><strong>Time required:</strong> 1-3 hours/month.</p>
                <p><strong>Pros:</strong> The highest quality. Professional video production, dedicated account managers, paid ad scaling.</p>
                <p><strong>Cons:</strong> Extremely expensive. Vast overkill if you just need consistent, professional posts to maintain your digital footprint.</p>
            </div>
            
            <div class="column-card" style="border-left: 3px solid var(--lime);">
                <h3 style="color:var(--navy);">4. Affordable AI Software</h3>
                <p><strong>Tools used:</strong> Glow Social</p>
                <p><strong>Cost:</strong> $49 to $99/month.</p>
                <p><strong>Time required:</strong> 10 minutes/month.</p>
                <p><strong>Pros:</strong> The cheapest way to entirely outsource content creation. Consistent, reliable, and learns your brand voice automatically.</p>
                <p><strong>Cons:</strong> Cannot do high-end custom video production or community engagement (replying to DMs).</p>
            </div>
        </div>
    </section>
    `
    },
    {
        slug: 'reviews',
        title: 'Glow Social Review: Is $49/Month Social Media Management Legit?',
        description: 'An honest review of Glow Social for 2026. Is a $49 per month social media management service actually worth it, or is there a catch?',
        content: `
    <!-- HERO -->
    <header class="hero">
        <div class="container">
            <span class="badge">In-Depth Review</span>
            <h1>Glow Social Review: Is $49/Month Social Media Legit?</h1>
            <p>If you're paying an agency $1,500 a month to post on your Facebook page three times a week, seeing a service promise the same thing for $49 sounds like a scam.</p>
            <p>In this review, we break down exactly how <a href="https://glowsocial.com" style="color:var(--navy);font-weight:bold;">Glow Social</a> works, where it shines, and who should NOT use it.</p>
        </div>
    </header>

    <section class="container">
        <h2>How Glow Social Keeps Prices So Low (The "Secret")</h2>
        <p>Traditional agencies employ armies of copywriters, graphic designers, and account managers. Glow Social replaces the repetitive labor with AI.</p>
        <p>During onboarding, Glow Social's system scans your existing website and business information to learn your tone. It then uses their proprietary "96-hook system" to automatically write captions, select or generate images, and schedule them out across all your platforms.</p>
        <p>Because the AI is doing the creation in seconds, the cost to deliver the service drops dramatically—allowing them to charge $49 instead of $1,000.</p>

        <h2 style="margin-top: 40px;">Who Is This Actually Good For?</h2>
        <p>Glow Social is the perfect fit for small businesses that just need to "play the game."</p>
        <ul style="margin-left: 20px; margin-top: 15px;">
            <li style="margin-bottom: 5px;">Plumbers & HVAC</li>
            <li style="margin-bottom: 5px;">Realtors & Brokers</li>
            <li style="margin-bottom: 5px;">Auto Repair Shops</li>
            <li style="margin-bottom: 5px;">Coaches & Consultants</li>
            <li style="margin-bottom: 5px;">Salons & Spas</li>
        </ul>
        <p>These businesses don't need viral fame; they need trust. They need a potential client who looks them up to see that they are active, professional, and knowledgeable.</p>

        <h2 style="margin-top: 40px;">Who Should Avoid It?</h2>
        <p>If you are a direct-to-consumer e-commerce brand that relies entirely on viral TikTok trends, influencer partnerships, and user-generated video content to drive sales, you still need an agency or dedicated in-house social media manager.</p>

        <div style="margin-top: 40px; padding: 30px; background: white; border-radius: 16px; border: 1px solid var(--border);">
            <h3>The Verdict</h3>
            <p>For 90% of local and service-based businesses, treating social media like an expensive advertising campaign is a mistake. It is an online business card. Glow Social manages that business card perfectly for only $49 a month, freeing up you (and your wallet) to focus on serving your actual customers.</p>
            <a href="https://glowsocial.com/glow-social-reviews-what-customers-say/" style="display:inline-block; margin-top: 10px; font-weight: bold; color: var(--navy);">Read what real customers say about Glow Social →</a>
        </div>
    </section>
    `
    }
];

pages.forEach(p => {
    const dir = path.join(__dirname, p.slug);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // Clean up title tag to inject the right one without duplicating <title>
    const metaDescHtml = `<meta name="description" content="${p.description}">`;
    const canonicalUrl = `https://affordablesocialmediamanagement.com/${p.slug}/`;

    // Replace the old meta desc and canonical with new ones. We can do this safely via simple regex or strings
    let customHeadTop = headTop;
    customHeadTop = customHeadTop.replace(/<meta name="description"[^>]+>/, metaDescHtml);
    customHeadTop = customHeadTop.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonicalUrl}">`);
    customHeadTop = customHeadTop.replace(/"https:\/\/affordablesocialmediamanagement.com\/"/g, `"${canonicalUrl}"`);

    // We don't want the FAQ schema on the subpages to avoid duplicate markup warnings unless we write custom ones
    customHeadTop = customHeadTop.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');

    const finalHtml = `${customHeadTop}<title>${p.title}</title>\n${headBottom}${p.content}${footerStart}`;

    fs.writeFileSync(path.join(dir, 'index.html'), finalHtml, 'utf8');
    console.log('Built:', p.slug);
});
