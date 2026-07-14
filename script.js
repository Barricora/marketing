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
    description: 'Start a task-specific audit, answer one question at a time, attach evidence and create actions where improvement is required.',
    list: [
      'Question-by-question mobile workflow',
      'Five real scoring choices including N/A',
      'Save & Exit, resume and read-only finished audits',
      'Auditor and supervisor signatures',
      'Final PDF report'
    ],
    ui: `
      <div class="ui-head"><div><small>Focused Audits</small><strong>Choose audit type</strong></div><button type="button">Saved Audits</button></div>
      <div class="audit-type-grid">
        <span><b>⇧</b>Work at Height</span><span><b>▣</b>MEWP</span><span><b>↔</b>Manual Handling</span>
        <span><b>⌁</b>Lifting</span><span><b>⚡</b>Battery Tools</span><span><b>ϟ</b>Electricity</span>
        <span><b>◉</b>Noise</span><span><b>♨</b>Hot Work</span><span><b>⬡</b>Confined Space</span>
        <span><b>⌄</b>Excavation / Groundwork</span><span><b>◫</b>Plant / Telehandler</span>
      </div>`
  },
  findings: {
    number: '02 / 05',
    title: 'Findings and corrective actions',
    description: 'Raise a finding independently or create an action from a poor audit score. The issue, owner, deadline and close-out evidence remain connected.',
    list: [
      'Description and multiple photos',
      'Owner and due date',
      'Open, In Progress and Closed status',
      'Close-out note, photo and updated rating',
      'Completed action appended to the audit report'
    ],
    ui: `
      <div class="ui-head"><div><small>Findings</small><strong>Open / In Progress / Closed</strong></div><button type="button">+ Raise Finding</button></div>
      <div class="finding-list">
        <div class="finding-row"><b>OPEN</b><div><strong>Finding title</strong><small>Description, photos, owner and due date</small></div><span>Update</span></div>
        <div class="finding-row"><b>IN PROGRESS</b><div><strong>Corrective action</strong><small>Close-out evidence can be added before completion</small></div><span>Add evidence</span></div>
        <div class="finding-row"><b>CLOSED</b><div><strong>Verified close-out</strong><small>Completion note, photo and final rating stored</small></div><span>View record</span></div>
      </div>`
  },
  daily: {
    number: '03 / 05',
    title: 'Daily checks and toolbox talks',
    description: 'Keep the small, frequent safety records in the same workspace rather than splitting them across paper sheets and separate files.',
    list: [
      'Simple daily PPE, harness and SPA checks',
      'Project and date header',
      'Toolbox talk record',
      'Dashboard KPI connection',
      'Mobile-friendly entry'
    ],
    ui: `
      <div class="ui-head"><div><small>Daily Records</small><strong>Today’s site controls</strong></div><button type="button">New record</button></div>
      <div class="daily-grid">
        <article class="daily-card"><span>DAILY CHECKLIST</span><h4>Core checks</h4><div><span>PPE compliant</span><b>✓</b></div><div><span>Harness checks complete</span><b>✓</b></div><div><span>SPA available</span><b>✓</b></div></article>
        <article class="daily-card"><span>TOOLBOX TALKS</span><h4>Project record</h4><div><span>Topic</span><b>Recorded</b></div><div><span>Attendance</span><b>Recorded</b></div><div><span>Dashboard count</span><b>Updated</b></div></article>
      </div>`
  },
  records: {
    number: '04 / 05',
    title: 'Workers, PPE and RAMS',
    description: 'Barricora now includes the supporting project records needed around the audit workflow, using the same company workspace and navigation.',
    list: [
      'Worker list management',
      'PPE issue and stock records',
      'RAMS records',
      'Photo storage connected to records',
      'Company-level access control'
    ],
    ui: `
      <div class="ui-head"><div><small>Project Records</small><strong>Connected administration</strong></div><button type="button">Manage</button></div>
      <div class="record-list">
        <article><span>W</span><h4>Workers</h4><p>Add, edit and maintain the project worker list.</p></article>
        <article><span>P</span><h4>PPE</h4><p>Track issued PPE and stock inside the web app.</p></article>
        <article><span>R</span><h4>RAMS</h4><p>Keep project RAMS records accessible from the main menu.</p></article>
        <article><span>▣</span><h4>Photos</h4><p>Evidence remains attached to the audit, finding or close-out.</p></article>
      </div>`
  },
  admin: {
    number: '05 / 05',
    title: 'Admin, support access and App Log',
    description: 'Company administration is separated from normal site work, with searchable activity history and controlled support access.',
    list: [
      'Company user management',
      'Password reset flow',
      'Support access controls',
      'Searchable App Log',
      'Filters by section and activity type'
    ],
    ui: `
      <div class="ui-head"><div><small>App Log</small><strong>Search and filter activity</strong></div><button type="button">Clear filters</button></div>
      <div class="admin-log">
        <div class="log-toolbar"><span>Search App Log</span><span>All sections</span><span>All activity</span></div>
        <div class="log-entry"><b>Workers</b><span>Updated</span><p>A worker record was edited.</p></div>
        <div class="log-entry"><b>PPE</b><span>Deleted</span><p>A PPE record was removed.</p></div>
        <div class="log-entry"><b>Support Access</b><span>Changed</span><p>Support access settings were updated.</p></div>
        <div class="log-entry"><b>Audits</b><span>Completed</span><p>A finished audit report was saved.</p></div>
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
