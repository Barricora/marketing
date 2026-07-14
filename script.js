const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  siteNav.classList.toggle('open', !open);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const modules = {
  audits: {
    number: '01 / 05',
    title: 'Focused safety audits',
    description: 'Start a task-specific audit from the same layout your team already sees in Barricora, with the real card style and module structure from the app.',
    list: [
      'Start New Audit layout styled like the live app',
      'Real task categories with question counts',
      'Same left navigation structure as Barricora',
      'Clear card-based selection for site activities',
      'Designed to feel familiar from first click'
    ],
    ui: `
      <div class="app-shot">
        <aside class="app-shot-sidebar">
          <div class="app-shot-brand">
            <img src="assets/barricora-mark.png" alt="" />
            <div><strong>Barricora</strong><span>Safety management portal</span></div>
          </div>
          <button>Dashboard</button>
          <button class="active">Audits</button>
          <button>Daily Checklists</button>
          <button>Toolbox Talks</button>
          <button>RAMS</button>
          <button>Actions</button>
          <button>Findings</button>
          <button>Workers</button>
          <button>PPE Stock</button>
          <button>Settings</button>
        </aside>
        <div class="app-shot-main">
          <div class="app-shot-topline"><h4>Start New Audit</h4></div>
          <div class="audit-card-grid">
            <article class="audit-card"><div class="audit-icon">🧪</div><div><strong>Test</strong><small>2 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon safety">🛡️</div><div><strong>General Safety Audit</strong><small>28 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon">🏗️</div><div><strong>Work at Height</strong><small>16 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon box">📦</div><div><strong>Manual Handling</strong><small>14 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon dark">🏗</div><div><strong>Lifting Operations</strong><small>16 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon vehicle">🚜</div><div><strong>Plant & Vehicle Interface</strong><small>14 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon tool">🛠️</div><div><strong>Tools & Equipment</strong><small>15 questions</small></div><b>›</b></article>
            <article class="audit-card"><div class="audit-icon clean">🧹</div><div><strong>Housekeeping & Access</strong><small>14 questions</small></div><b>›</b></article>
          </div>
        </div>
      </div>`
  },
  findings: {
    number: '02 / 05',
    title: 'Findings and corrective actions',
    description: 'Findings and actions now follow the same practical Barricora look — simple status visibility, strong ownership and easy close-out tracking.',
    list: [
      'Open, In Progress and Closed status handling',
      'Finding title, owner and due date in one row',
      'Action close-out linked back to the issue',
      'Simple card view instead of buried admin screens',
      'Made to stay usable on real projects'
    ],
    ui: `
      <div class="app-shot">
        <aside class="app-shot-sidebar compact-nav">
          <div class="app-shot-brand small">
            <img src="assets/barricora-mark.png" alt="" />
            <div><strong>Barricora</strong><span>Safety management portal</span></div>
          </div>
          <button>Dashboard</button>
          <button>Audits</button>
          <button class="active">Actions</button>
          <button class="active secondary">Findings</button>
          <button>Workers</button>
          <button>PPE Stock</button>
        </aside>
        <div class="app-shot-main">
          <div class="app-shot-topline split"><h4>Action / Issue List</h4><span class="shot-button">Raise Finding</span></div>
          <div class="list-card finding-card">
            <div class="finding-status open">OPEN</div>
            <div><strong>Missing edge protection on work area</strong><small>Owner: Supervisor • Due: Today • 3 photos attached</small></div>
            <span>Update</span>
          </div>
          <div class="list-card finding-card">
            <div class="finding-status progress">IN PROGRESS</div>
            <div><strong>Tool lanyards to be issued before shift</strong><small>Owner: Site Lead • Due: Tomorrow • Close-out pending</small></div>
            <span>Add evidence</span>
          </div>
          <div class="list-card finding-card">
            <div class="finding-status closed">CLOSED</div>
            <div><strong>Access route housekeeping completed</strong><small>Closed with photo evidence and updated rating</small></div>
            <span>View record</span>
          </div>
        </div>
      </div>`
  },
  daily: {
    number: '03 / 05',
    title: 'Daily checks and toolbox talks',
    description: 'The same app style is used for the smaller everyday records, so daily controls and toolbox talks feel like part of one system instead of a separate add-on.',
    list: [
      'Daily checklist cards styled like the app',
      'Simple yes / no style project checks',
      'Toolbox talk records in the same workspace',
      'Fast entry for frequent site tasks',
      'Keeps dashboard counts connected'
    ],
    ui: `
      <div class="app-shot">
        <aside class="app-shot-sidebar compact-nav">
          <div class="app-shot-brand small">
            <img src="assets/barricora-mark.png" alt="" />
            <div><strong>Barricora</strong><span>Safety management portal</span></div>
          </div>
          <button>Dashboard</button>
          <button class="active">Daily Checklists</button>
          <button class="active secondary">Toolbox Talks</button>
          <button>Audits</button>
          <button>Findings</button>
        </aside>
        <div class="app-shot-main">
          <div class="app-shot-topline"><h4>Daily controls</h4></div>
          <div class="daily-shell-grid">
            <article class="daily-shell-card">
              <small>DAILY CHECKLIST</small>
              <strong>Morning site check</strong>
              <div><span>PPE complete</span><b>✓</b></div>
              <div><span>Harness inspected</span><b>✓</b></div>
              <div><span>SPA reviewed</span><b>✓</b></div>
            </article>
            <article class="daily-shell-card">
              <small>TOOLBOX TALK</small>
              <strong>Battery tools briefing</strong>
              <div><span>Topic recorded</span><b>✓</b></div>
              <div><span>Attendance captured</span><b>15</b></div>
              <div><span>Dashboard updated</span><b>✓</b></div>
            </article>
          </div>
        </div>
      </div>`
  },
  records: {
    number: '04 / 05',
    title: 'Workers, PPE and RAMS',
    description: 'Support records should not look disconnected from the rest of the product, so the records section now follows the same Barricora panel design.',
    list: [
      'Workers, PPE and RAMS in one familiar layout',
      'Simple project record cards for quick navigation',
      'Keeps admin tools inside the same workspace',
      'Clear visual grouping by record type',
      'Built around how the app already feels'
    ],
    ui: `
      <div class="app-shot">
        <aside class="app-shot-sidebar compact-nav">
          <div class="app-shot-brand small">
            <img src="assets/barricora-mark.png" alt="" />
            <div><strong>Barricora</strong><span>Safety management portal</span></div>
          </div>
          <button>Dashboard</button>
          <button class="active">Workers</button>
          <button class="active secondary">PPE Stock</button>
          <button class="active secondary">RAMS</button>
          <button>Settings</button>
        </aside>
        <div class="app-shot-main">
          <div class="app-shot-topline"><h4>Project records</h4></div>
          <div class="record-shell-grid">
            <article><span>👷</span><strong>Workers</strong><small>Maintain project worker details and access-related records.</small></article>
            <article><span>🦺</span><strong>PPE Stock</strong><small>Track stock levels, issue records and items needing restock.</small></article>
            <article><span>📄</span><strong>RAMS</strong><small>Keep RAMS records visible from the same left menu structure.</small></article>
            <article><span>🖼️</span><strong>Evidence</strong><small>Photos remain linked back to audits, findings and close-outs.</small></article>
          </div>
        </div>
      </div>`
  },
  admin: {
    number: '05 / 05',
    title: 'Admin, support access and App Log',
    description: 'The admin section now reads much more like the live app too, with a cleaner searchable App Log style and the same soft panel treatment.',
    list: [
      'Searchable App Log view',
      'Section and activity filters',
      'Support access and admin activity visibility',
      'Clear row-based record history',
      'Feels like the same Barricora workspace'
    ],
    ui: `
      <div class="app-shot">
        <aside class="app-shot-sidebar compact-nav">
          <div class="app-shot-brand small">
            <img src="assets/barricora-mark.png" alt="" />
            <div><strong>Barricora</strong><span>Safety management portal</span></div>
          </div>
          <button>Dashboard</button>
          <button class="active">Settings</button>
          <button class="active secondary">App Log</button>
          <button>Workers</button>
          <button>PPE Stock</button>
        </aside>
        <div class="app-shot-main">
          <div class="app-shot-topline split"><h4>App Log</h4><span class="shot-button pale">Search & Filter</span></div>
          <div class="log-filter-row"><span>Search App Log</span><span>All sections</span><span>All activity</span></div>
          <div class="log-shell-row"><b>Workers</b><span>Updated</span><p>Worker information was edited by a company admin.</p></div>
          <div class="log-shell-row"><b>PPE</b><span>Deleted</span><p>A PPE stock item was removed from the project list.</p></div>
          <div class="log-shell-row"><b>Support Access</b><span>Changed</span><p>Support permissions were updated for the workspace.</p></div>
          <div class="log-shell-row"><b>Audits</b><span>Completed</span><p>A finished audit report was saved and logged.</p></div>
        </div>
      </div>`
  }
};

const tabs = document.querySelectorAll('.module-tabs button');
const moduleNumber = document.getElementById('module-number');
const moduleTitle = document.getElementById('module-title');
const moduleDescription = document.getElementById('module-description');
const moduleList = document.getElementById('module-list');
const moduleUi = document.getElementById('module-ui');

function selectModule(key) {
  const module = modules[key];
  if (!module) return;
  moduleNumber.textContent = module.number;
  moduleTitle.textContent = module.title;
  moduleDescription.textContent = module.description;
  moduleList.innerHTML = module.list.map((item) => `<li>${item}</li>`).join('');
  moduleUi.innerHTML = module.ui;
  tabs.forEach((tab) => {
    const selected = tab.dataset.module === key;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
}

tabs.forEach((tab) => tab.addEventListener('click', () => selectModule(tab.dataset.module)));

selectModule('audits');

const demoForm = document.getElementById('demo-form');
const formMessage = document.getElementById('form-message');
demoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(demoForm);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const company = String(data.get('company') || '').trim();
  const message = String(data.get('message') || '').trim();
  const subject = encodeURIComponent(`Barricora demo request${company ? ` — ${company}` : ''}`);
  const body = encodeURIComponent(`Name: ${name}\nWork email: ${email}\nCompany / project: ${company}\n\nWhat they want to improve:\n${message}`);
  formMessage.textContent = 'Opening your email app…';
  window.location.href = `mailto:hello@barricora.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
