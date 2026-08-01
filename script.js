document.addEventListener('DOMContentLoaded', () => {
    const files = document.querySelectorAll('.file');
    const contentView = document.getElementById('content-view');
    const tabsContainer = document.querySelector('.editor-tabs');

    const contentData = {
        'about': `
            <div class="markdown-body">
                <h2># William Hanusiewicz</h2>
                <p class="subtitle">Operations Business Analyst @ Walker International Transportation | CEO @ Universal Bridge Consulting</p>
                
                <div class="sys-info-box">
                    <p><strong>> SYSTEM.STATUS:</strong> ONLINE</p>
                    <p><strong>> PRIMARY_DIRECTIVE:</strong> Bridging legacy global logistics architectures with state-of-the-art AI agent swarms.</p>
                </div>

                <h3>## Execution Summary</h3>
                <p>I specialize in dissecting complex operational bottlenecks in global supply chains (from ocean freight delays to WBR rail congestion) and architecting programmatic solutions. By combining deep CargoWise database mastery with modern Python-based automation and LLM pipelines, I turn days of manual reporting into autonomous, error-free seconds.</p>

                <h3>## Core Competencies</h3>
                <ul class="tech-list">
                    <li><span class="tag">CargoWise One</span> (SQL, Reporting, Workflow Automation)</li>
                    <li><span class="tag">Global Logistics</span> (Air/Ocean Freight, Customs, Congestion Analysis)</li>
                    <li><span class="tag">AI Orchestration</span> (Agentic Swarms, LLM Integration)</li>
                    <li><span class="tag">Data Pipelines</span> (Python, Kenvue Reporting, EDI/API Proxies)</li>
                </ul>
            </div>
        `,
        'resume': `
            <div class="markdown-body">
                <h2># Professional Experience</h2>
                
                <div class="sys-info-box">
                    <p><strong>> EXPERIENCE.TOTAL:</strong> 22+ Years</p>
                    <p><strong>> FOCUS_AREAS:</strong> Cargo Industry IT, Technical Account Management, Air/Ocean Export</p>
                </div>

                <h3>## Work History</h3>
                
                <div style="margin-bottom: 20px;">
                    <h4>Walker International Transportation</h4>
                    <p><em>Operations Business Analyst</em> | Feb 2020 - Present</p>
                    <p class="tag">Cargo Industry IT Specialist</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4>Yardi</h4>
                    <p><em>Technical Account Manager</em> | Jun 2018 - Jan 2020</p>
                    <p><em>Associate Technical Account Manager</em> | Apr 2017 - Jun 2018</p>
                    <p class="tag">Affordable Housing Team</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4>American Lamprecht Transport, Inc.</h4>
                    <p><em>Manager</em> | Oct 2015 - Apr 2017</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4>Hermes Aviation</h4>
                    <p><em>Account Manager</em> | Dec 2010 - Sep 2015</p>
                    <p class="tag">Account Manager for South African Airways Cargo</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4>IJS Global</h4>
                    <p><em>Administrative Support Representative</em> | May 2008 - Nov 2010</p>
                    <p class="tag">Air Export / Pricing / Warehouse Manager</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4>BDP International / UPS / Emery Worldwide</h4>
                    <p><em>Air Export Coordinator / Administrative Support</em> | Apr 2002 - May 2008</p>
                </div>

                <h3>## Certifications</h3>
                <ul class="tech-list">
                    <li><span class="tag">Cert</span> Certified Dangerous Goods Specialist: Air</li>
                    <li><span class="tag">Cert</span> Certified Dangerous Goods Specialist: Ocean</li>
                    <li><span class="tag">Cert</span> IAC Security Coordinator</li>
                    <li><span class="tag">Cert</span> Certified Occupancy Specialist (NCHM)</li>
                </ul>
            </div>
        `,
        'logistics': `
            <div class="markdown-body">
                <h2># Logistics_Ops.yml</h2>
                <div class="sys-info-box" style="color: #ffaa00;">
                    <p><strong>> CONTEXT:</strong> Walker International Transportation</p>
                    <p><strong>> ROLE:</strong> Operations Business Analyst</p>
                </div>
                <pre style="font-family: var(--font-mono); background: #eee; padding: 15px; border: 1px solid #000;">
pipelines:
  - name: WBR Congestion Report
    trigger: weekly
    action: Automated extraction and processing of GoComet port data to output standard WBR format.

  - name: Kenvue Air Report
    trigger: daily
    action: Monitors Stage 2 Excel data, identifies delay exceptions, and formats the output for Kenvue stakeholders.

  - name: CargoWise Sync
    trigger: continuous
    action: Rollover active shipments, fill missing milestone statuses, and maintain the live replica gap schema.
                </pre>
            </div>
        `,
        'ai': `
            <div class="markdown-body">
                <h2># AI_Automation.py</h2>
                <div class="sys-info-box" style="color: #00ffff;">
                    <p><strong>> PROJECT:</strong> Universal Bridge Consulting (UBC)</p>
                    <p><strong>> OBJECTIVE:</strong> Agent-driven workflow transformations.</p>
                </div>
                <p>At UBC, I deploy autonomous agent swarms to accomplish tasks spanning from corporate LMS certifications to custom web development.</p>
                <h3>## Recent Architectures</h3>
                <ul class="tech-list">
                    <li><span class="tag">UBC Agent Portal</span> Brutalist internal dashboard deployed on Vercel for tracking agent commissions and deployments.</li>
                    <li><span class="tag">Zoho Mail Bridge</span> Custom SMTP relay bypassing Zoho API restrictions to allow agents to draft/send client emails naturally via Gmail MCP.</li>
                    <li><span class="tag">Heist Crew Swarm</span> Multi-agent architecture for automated extraction of knowledge and certifications across anti-automation gateways.</li>
                </ul>
            </div>
        `,
        'contact': `
            <div class="markdown-body">
                <h2># Contact.json</h2>
                <pre style="font-family: var(--font-mono); background: #eee; padding: 15px; border: 1px solid #000;">
{
    "name": "William Hanusiewicz",
    "roles": ["CEO, Universal Bridge Consulting", "Operations Business Analyst"],
    "emails": {
        "business": "ceo@universalbridgeconsulting.com",
        "direct": "william.hanusiewicz@gmail.com"
    },
    "status": "Accepting new automation & consulting contracts",
    "location": "Global / Remote"
}
                </pre>
            </div>
        `
    };

    const filenames = {
        'about': 'about_me.md',
        'resume': 'resume.md',
        'logistics': 'logistics_ops.yml',
        'ai': 'ai_automation.py',
        'contact': 'contact.json'
    };

    files.forEach(file => {
        file.addEventListener('click', () => {
            // Remove active from all files
            files.forEach(f => f.classList.remove('active'));
            // Add active to clicked file
            file.classList.add('active');

            const target = file.getAttribute('data-target');
            
            // Update Tab
            tabsContainer.innerHTML = \`
                <div class="tab active">\${filenames[target]} <span class="close-tab">×</span></div>
            \`;

            // Update Content
            contentView.innerHTML = contentData[target];
        });
    });
});
