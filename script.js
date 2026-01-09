// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderKPIs();
    renderTimeline();
    renderSkills();
    renderEvents();
    renderCareerReadiness();
    renderGoals();
    animateSkillBars();
    setupScrollAnimations();
});

// Render Hero Section
function renderHero() {
    const hero = YEAR_DATA.hero;
    
    document.getElementById('hero-pill').textContent = hero.pill;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-subtitle').textContent = hero.subtitle;
    document.getElementById('hero-updated').textContent = hero.updated;
}

// Render KPI Cards
function renderKPIs() {
    const kpisContainer = document.getElementById('kpis');
    
    const iconMap = {
        'project': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 4V8M12 4V8M4 8H16M4 12H16" stroke="currentColor" stroke-width="1.5"/></svg>',
        'skills': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12 7L17 8L13 12L14 17L10 14L6 17L7 12L3 8L8 7L10 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        'cert': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12 6L16 7L13 10L14 14L10 12L6 14L7 10L4 7L8 6L10 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="10" cy="10" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        'club': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="6" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 16C6 13 7.5 11 10 11C12.5 11 14 13 14 16" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="5" cy="5" r="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="15" cy="5" r="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        'conference': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M7 6V4C7 3 7.5 2 9 2H11C12.5 2 13 3 13 4V6" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="7" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="11" r="1" fill="currentColor"/><circle cx="13" cy="11" r="1" fill="currentColor"/></svg>'
    };
    
    YEAR_DATA.kpis.forEach(kpi => {
        const card = document.createElement('div');
        card.className = 'kpi-card';
        card.setAttribute('data-icon-type', kpi.icon);
        
        card.innerHTML = `
            <div class="kpi-icon">${iconMap[kpi.icon] || ''}</div>
            <div class="kpi-label">${kpi.label}</div>
            <div class="kpi-value">${kpi.value}</div>
            <div class="kpi-description">${kpi.description}</div>
        `;
        
        kpisContainer.appendChild(card);
    });
}

// Render Timeline
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline');
    
    YEAR_DATA.months.forEach(month => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        // Map tags to categories for color coding
        const tagCategoryMap = {
            'Planning': 'planning',
            'Architecture': 'architecture',
            'Automation': 'automation',
            'RPA': 'rpa',
            'Python': 'automation',
            'Data Engineering': 'data-engineering',
            'ETL': 'etl',
            'Dashboards': 'dashboards',
            'ML': 'ml',
            'AWS': 'aws',
            'Deployment': 'deployment',
            'Cloud': 'cloud',
            'Migration': 'architecture',
            'Visualization': 'visualization',
            'Impact': 'impact',
            'Open Source': 'open-source',
            'Community': 'community',
            'Learning': 'learning',
            'AI': 'ai',
            'NLP': 'nlp',
            'Certification': 'certification',
            'Growth': 'growth',
            'Optimization': 'optimization',
            'Cost': 'cost',
            'Efficiency': 'efficiency',
            'Collaboration': 'collaboration',
            'Leadership': 'leadership',
            'Reflection': 'reflection',
            'Academic': 'learning',
            'GSA': 'leadership',
            'Ambassador': 'leadership',
            'Research': 'research',
            'Projects': 'impact',
            'Competition': 'community',
            'Conference': 'community',
            'Industry': 'growth',
            'Technology': 'learning',
            'Advanced Courses': 'learning',
            'Training': 'learning',
            'Professional Development': 'growth',
            'Vision': 'planning',
            'Volunteering': 'community',
            'Accessibility': 'impact',
            'NSF': 'research',
            'Award': 'impact',
            'Hackathon': 'community',
            'Global': 'leadership',
            'Recognition': 'impact'
        };
        
        const tagsHTML = month.tags.map(tag => {
            const category = tagCategoryMap[tag] || 'default';
            return `<span class="timeline-tag" data-category="${category}">${tag}</span>`;
        }).join('');
        
        item.innerHTML = `
            <div class="timeline-month">${month.month}</div>
            <div class="timeline-title">${month.title}</div>
            <div class="timeline-highlight">${month.highlight}</div>
            <div class="timeline-tags">${tagsHTML}</div>
        `;
        
        timelineContainer.appendChild(item);
    });
}

// Render Skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills');
    
    YEAR_DATA.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" data-level="${skill.level}"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillItem);
    });
}

// Render Events & Conferences
function renderEvents() {
    const eventsContainer = document.getElementById('events');
    
    YEAR_DATA.events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        
        const eventTypeLower = event.type.toLowerCase();
        const imageHTML = event.image ? `<img src="${event.image}" alt="${event.name}" class="event-image" loading="lazy">` : '';
        
        eventItem.innerHTML = `
            <div class="event-content">
                ${imageHTML}
                <div class="event-details">
                    <div class="event-header">
                        <span class="event-type" data-type="${eventTypeLower}">${event.type}</span>
                        <span class="event-date">${event.date}</span>
                    </div>
                    <div class="event-name">${event.name}</div>
                    <div class="event-location">${event.location}</div>
                    <div class="event-highlight">${event.highlight}</div>
                </div>
            </div>
        `;
        
        eventsContainer.appendChild(eventItem);
    });
}

// Render Career Readiness
function renderCareerReadiness() {
    const careerContainer = document.getElementById('career-readiness');
    const career = YEAR_DATA.careerReadiness;
    
    let awardsHTML = '';
    if (career.awards && career.awards.length > 0) {
        awardsHTML = `
        <div class="career-item awards-section visible">
            <div class="career-label">Awards & Recognition</div>
            ${career.awards.map(award => `
                <div class="award-item">
                    <div class="award-title">${award.title}</div>
                    <div class="award-event">${award.event}</div>
                    <div class="award-description">${award.description}</div>
                </div>
            `).join('')}
        </div>
        `;
    }
    
    careerContainer.innerHTML = `
        <div class="career-item visible">
            <div class="career-label">Focus Areas</div>
            <div class="career-value">${career.focus}</div>
        </div>
        <div class="career-item visible">
            <div class="career-label">Interests</div>
            <div class="career-value interests-list">${Array.isArray(career.interests) ? career.interests.map(interest => `<div class="interest-item">${interest}</div>`).join('') : career.interests}</div>
        </div>
        ${awardsHTML}
    `;
}

// Render Goals (Horizontal Layout)
function renderGoals() {
    const goalsContainer = document.getElementById('goals');
    
    YEAR_DATA.goals.forEach(goal => {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card-horizontal';
        
        const statusText = goal.status === 'planned' ? 'Planned' : 'Not Started';
        
        goalCard.innerHTML = `
            <div class="goal-content-horizontal">
                <div class="goal-text-horizontal">${goal.text}</div>
                <div class="goal-status-horizontal ${goal.status}">
                    <span class="goal-status-dot"></span>
                    <span>${statusText}</span>
                </div>
            </div>
        `;
        
        goalsContainer.appendChild(goalCard);
    });
}

// Animate skill bars immediately
function animateSkillBars() {
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        
        skillBars.forEach((bar, index) => {
            const level = bar.getAttribute('data-level');
            if (level) {
                setTimeout(() => {
                    bar.style.width = `${level}%`;
                }, index * 100);
            }
        });
    }, 100);
}

// Setup scroll-based animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe dashboard cards
    document.querySelectorAll('.dashboard-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe event items
    document.querySelectorAll('.event-item').forEach(item => {
        observer.observe(item);
    });
}


