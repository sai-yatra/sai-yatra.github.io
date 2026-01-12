let data = {
    title: "Shirdi Sai Yatra Itinerary / சீரடி சாய் யாத்திரை",
    dates: "Jan 17 - Jan 19, 2026",
    organizer: "Sai Balaji V",
    contacts: "9500008901, 9500025901, 9500045901",
    days: [
        {
            title: "Day 1: Saturday, 17/01/2026 | முதல் நாள்: சனிக்கிழமை",
            activities: [
                { time: "01:45 AM", description: "Report at Chennai Airport Domestic Terminal (D1 Gate). / சென்னை விமான நிலையம் (D1 Gate) வரவும்." },
                { time: "04:45 AM", description: "IndiGo Flight departs from Chennai. / விமானம் சென்னையிலிருந்து புறப்படும்." },
                { time: "06:15 AM", description: "Arrive at Pune Airport. / புனே விமான நிலையம் வந்தடைதல்." },
                { time: "07:45 AM", description: "Breakfast in Pune. / புனே ஹோட்டலில் காலை உணவு." },
                { time: "02:00 PM", description: "Lunch in Nashik. / நாசிக் ஹோட்டலில் மதிய உணவு." },
                { time: "05:00 PM", description: "VIP Darshan at Trimbakeshwar Shiva Temple (10th Jyotirlinga). / திரியம்பகேஸ்வரர் தரிசனம்." },
                { time: "10:00 PM", description: "Check-in at Sai Palace Express (3-Star), Shirdi. Dinner & Stay. / சீரடி சாய் பேலஸ் ஹோட்டல் வந்தடைதல்." }
            ]
        },
        {
            title: "Day 2: Sunday, 18/01/2026 | இரண்டாம் நாள்: ஞாயிற்றுக்கிழமை",
            activities: [
                { time: "05:00 AM", description: "Gather at Hotel Reception for Tea/Coffee. / டீ, காபி மற்றும் வரவேற்பு அறையில் கூடுதல்." },
                { 
                    time: "06:00 AM", 
                    description: "Local Sightseeing by Auto: / ஆட்டோ மூலம் உள்ளூர் இடங்கள் தரிசனம்:",
                    subItems: [
                        "Khandoba Mandir (கண்டோபா மந்திர்)",
                        "Mahalsapati House (மகள்சாபதி வீடு)",
                        "Laxmi Bai House (லஷ்மி பாய் வீடு)",
                        "Shama House (ஷாமா வீடு)",
                        "Dwarkamai & Chavadi (துவாரகா மாயி மற்றும் சாவடி)"
                    ]
                },
                { time: "07:00 AM", description: "VIP Darshan of Sai Baba. / சாய் பாபா விஐபி தரிசனம்." },
                { time: "08:00 AM - 09:00 AM", description: "Shopping time. / பொருட்கள் வாங்கும் நேரம்." },
                { time: "09:30 AM", description: "Depart from Hotel after Breakfast. / காலை உணவு முடித்து ஹோட்டலில் இருந்து புறப்படுதல்." },
                { time: "01:00 PM", description: "Visit Bhadra Maruti Hanuman Temple. / பத்ரா மாருதி அனுமன் தரிசனம்." },
                { time: "01:30 PM", description: "Visit Ellora Caves. / எல்லோரா குகைகள் பார்த்தல்." },
                { time: "03:30 PM", description: "Darshan at Grishneshwar Temple (12th Jyotirlinga). / கிருஷ்ணேஸ்வரர் கோவில் தரிசனம்." },
                { time: "10:00 PM", description: "Dinner. / இரவு உணவு." }
            ]
        },
        {
            title: "Day 3: Monday, 19/01/2026 | மூன்றாம் நாள்: திங்கட்கிழமை",
            activities: [
                { time: "12:30 AM", description: "Reach Pune Airport. / புனே விமான நிலையம் வந்தடைதல்." },
                { time: "03:30 AM", description: "IndiGo Flight departs for Chennai. / புனேவிலிருந்து விமானம் புறப்படும்." },
                { time: "05:15 AM", description: "Arrive at Chennai Airport. / சென்னை விமான நிலையம் வந்தடைதல்." }
            ]
        }
    ],
    sections: [
        {
            title: "Important Instructions / முக்கிய குறிப்புகள்",
            items: [
                { 
                    title: "Identity", 
                    description: "Carry your original Aadhar Card and Ticket copy. / ஆதார் கார்டு மற்றும் டிக்கெட் கொண்டு வரவும்." 
                },
                { 
                    title: "Packing", 
                    description: "Bring a Small Umbrella and Sweater. / குடை மற்றும் ஸ்வெட்டர் கொண்டு வரவும்." 
                },
                { 
                    title: "Essentials", 
                    description: "Carry medicines, biscuits, fruits, and hot water if needed. / தேவையான மருந்து, பிஸ்கட் மற்றும் தண்ணீர் கொண்டு வரவும்." 
                },
                { 
                    title: "Feedback", 
                    description: "Please send your travel feedback (text/audio) to 9500008901. / பயண கருத்துக்களை வாட்ஸ்அப் மூலம் பகிரவும்." 
                }
            ]
        }
    ],
    footer: "Om Sai Ram! 🙏 \"Think of Baba Always\" / \"பாபாவை நினை\""
};

let collapsedSections = {};
let autoSaveTimeout = null;

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function toggleSection(id) {
    collapsedSections[id] = !collapsedSections[id];
    render();
}

function saveData() {
    try {
        const state = {
            title: document.getElementById('title')?.value || '',
            dates: document.getElementById('dates')?.value || '',
            organizer: document.getElementById('organizer')?.value || '',
            contacts: document.getElementById('contacts')?.value || '',
            days: [],
            sections: [],
            footer: document.getElementById('footer')?.value || ''
        };

        document.querySelectorAll('.day-section').forEach(dayEl => {
            const dayTitle = dayEl.querySelector('.day-title');
            if (!dayTitle) return;
            
            const day = {
                title: dayTitle.value,
                activities: []
            };
            
            dayEl.querySelectorAll('.activity-item').forEach(actEl => {
                const timeInput = actEl.querySelector('.activity-time');
                const descInput = actEl.querySelector('.activity-desc');
                
                if (!timeInput || !descInput) return;
                
                const activity = {
                    time: timeInput.value,
                    description: descInput.value
                };
                
                const subItems = actEl.querySelectorAll('.sub-item-input');
                if (subItems.length > 0) {
                    activity.subItems = Array.from(subItems).map(s => s.value);
                }
                
                day.activities.push(activity);
            });
            
            state.days.push(day);
        });

        document.querySelectorAll('.custom-section').forEach(secEl => {
            const sectionTitle = secEl.querySelector('.section-title-input');
            if (!sectionTitle) return;
            
            const section = {
                title: sectionTitle.value,
                items: []
            };
            
            secEl.querySelectorAll('.instruction-item').forEach(itemEl => {
                const titleInput = itemEl.querySelector('.instruction-title-input');
                const descInput = itemEl.querySelector('.instruction-desc-input');
                
                if (titleInput && descInput) {
                    section.items.push({
                        title: titleInput.value,
                        description: descInput.value
                    });
                }
            });
            
            state.sections.push(section);
        });

        data = state;
        localStorage.setItem('itineraryData', JSON.stringify(state));
        showToast('Saved successfully!');
    } catch (e) {
        console.error('Save error:', e);
        showToast('Failed to save');
    }
}

function autoSave() {
    try {
        const state = {
            title: document.getElementById('title')?.value || '',
            dates: document.getElementById('dates')?.value || '',
            organizer: document.getElementById('organizer')?.value || '',
            contacts: document.getElementById('contacts')?.value || '',
            days: [],
            sections: [],
            footer: document.getElementById('footer')?.value || ''
        };

        document.querySelectorAll('.day-section').forEach(dayEl => {
            const dayTitle = dayEl.querySelector('.day-title');
            if (!dayTitle) return;
            
            const day = {
                title: dayTitle.value,
                activities: []
            };
            
            dayEl.querySelectorAll('.activity-item').forEach(actEl => {
                const timeInput = actEl.querySelector('.activity-time');
                const descInput = actEl.querySelector('.activity-desc');
                
                if (!timeInput || !descInput) return;
                
                const activity = {
                    time: timeInput.value,
                    description: descInput.value
                };
                
                const subItems = actEl.querySelectorAll('.sub-item-input');
                if (subItems.length > 0) {
                    activity.subItems = Array.from(subItems).map(s => s.value);
                }
                
                day.activities.push(activity);
            });
            
            state.days.push(day);
        });

        document.querySelectorAll('.custom-section').forEach(secEl => {
            const sectionTitle = secEl.querySelector('.section-title-input');
            if (!sectionTitle) return;
            
            const section = {
                title: sectionTitle.value,
                items: []
            };
            
            secEl.querySelectorAll('.instruction-item').forEach(itemEl => {
                const titleInput = itemEl.querySelector('.instruction-title-input');
                const descInput = itemEl.querySelector('.instruction-desc-input');
                
                if (titleInput && descInput) {
                    section.items.push({
                        title: titleInput.value,
                        description: descInput.value
                    });
                }
            });
            
            state.sections.push(section);
        });

        data = state;
        localStorage.setItem('itineraryData', JSON.stringify(state));
    } catch (e) {
        console.error('Auto-save error:', e);
    }
}

function scheduleAutoSave() {
    if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
    }
    autoSaveTimeout = setTimeout(() => {
        autoSave();
    }, 500);
}

function loadData() {
    const saved = localStorage.getItem('itineraryData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                data = parsed;
                if (typeof data.contacts !== 'string') data.contacts = '';
                if (!Array.isArray(data.days)) data.days = [];
                if (!Array.isArray(data.sections)) data.sections = [];
            }
        } catch (e) {
            console.error('Error loading data:', e);
            localStorage.removeItem('itineraryData');
        }
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function setupAutoSaveListeners() {
    const content = document.getElementById('content');
    
    content.addEventListener('input', (e) => {
        if (e.target.matches('input, textarea')) {
            scheduleAutoSave();
        }
    });
    
    content.addEventListener('blur', (e) => {
        if (e.target.matches('input, textarea')) {
            autoSave();
        }
    }, true);
}

function render() {
    const content = document.getElementById('content');
    
    let html = `
        <div class="section">
            <div class="section-controls">
                <button class="collapse-btn" onclick="toggleSection('basic')">
                    <span class="collapse-icon ${collapsedSections['basic'] ? 'collapsed' : ''}">▼</span>
                </button>
            </div>
            <div class="section-header">
                <div class="form-label">Basic Information</div>
            </div>
            <div class="section-body ${collapsedSections['basic'] ? 'collapsed' : ''}">
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" id="title" value="${escapeHtml(data.title || '')}" placeholder="Itinerary Title">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Dates</label>
                    <input type="text" id="dates" value="${escapeHtml(data.dates || '')}" placeholder="Date range">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Organizer</label>
                    <input type="text" id="organizer" value="${escapeHtml(data.organizer || '')}" placeholder="Organizer name">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Contact Numbers (comma-separated)</label>
                    <input type="text" id="contacts" value="${escapeHtml(data.contacts || '')}" placeholder="e.g., 9500008901, 9500025901">
                </div>
            </div>
        </div>
        <div class="separator"></div>
    `;

    data.days.forEach((day, dayIdx) => {
        html += `
            <div class="section day-section">
                <div class="section-controls">
                    <button class="collapse-btn" onclick="toggleSection('day-${dayIdx}')">
                        <span class="collapse-icon ${collapsedSections['day-' + dayIdx] ? 'collapsed' : ''}">▼</span>
                    </button>
                    <button class="btn btn-danger btn-small" onclick="removeDay(${dayIdx})">Remove Day</button>
                </div>
                <div class="section-header">
                    <input type="text" class="section-title day-title" value="${escapeHtml(day.title || '')}" placeholder="Day title">
                </div>
                <div class="section-body ${collapsedSections['day-' + dayIdx] ? 'collapsed' : ''}">
        `;
        
        day.activities.forEach((act, actIdx) => {
            html += `
                <div class="activity-item">
                    <div class="activity-header">
                        <input type="text" class="activity-time" value="${escapeHtml(act.time || '')}" placeholder="Time">
                        <button class="btn btn-icon" data-tooltip="Delete Activity" onclick="removeActivity(${dayIdx}, ${actIdx})">×</button>
                    </div>
                    <textarea class="activity-desc" placeholder="Activity description">${escapeHtml(act.description || '')}</textarea>
            `;
            
            if (act.subItems && act.subItems.length > 0) {
                html += '<div class="nested-bullets">';
                act.subItems.forEach((sub, subIdx) => {
                    html += `
                        <div class="bullet-item">
                            <input type="text" class="sub-item-input" value="${escapeHtml(sub || '')}" placeholder="Sub-item">
                            <button class="btn btn-icon" data-tooltip="Delete Sub-item" onclick="removeSubItem(${dayIdx}, ${actIdx}, ${subIdx})">×</button>
                        </div>
                    `;
                });
                html += `<button class="btn btn-primary btn-small" onclick="addSubItem(${dayIdx}, ${actIdx})">+ Add Sub-item</button></div>`;
            } else {
                html += `<button class="btn btn-primary btn-small" style="margin-top: 10px;" onclick="addSubItem(${dayIdx}, ${actIdx})">+ Add Sub-items</button>`;
            }
            
            html += '</div>';
        });
        
        html += `
                    <button class="btn btn-primary btn-small" style="margin-top: 10px;" onclick="addActivity(${dayIdx})">+ Add Activity</button>
                </div>
            </div>
            <div class="separator"></div>
        `;
    });

    html += '<button class="btn btn-success btn-center" onclick="addDay()">+ Add Day</button><div class="separator"></div>';

    data.sections.forEach((section, secIdx) => {
        html += `
            <div class="section custom-section">
                <div class="section-controls">
                    <button class="collapse-btn" onclick="toggleSection('sec-${secIdx}')">
                        <span class="collapse-icon ${collapsedSections['sec-' + secIdx] ? 'collapsed' : ''}">▼</span>
                    </button>
                    <button class="btn btn-danger btn-small" onclick="removeSection(${secIdx})">Remove Section</button>
                </div>
                <div class="section-header">
                    <input type="text" class="section-title section-title-input" value="${escapeHtml(section.title || '')}" placeholder="Section title">
                </div>
                <div class="section-body ${collapsedSections['sec-' + secIdx] ? 'collapsed' : ''}">
        `;
        
        section.items.forEach((item, itemIdx) => {
            html += `
                <div class="instruction-item">
                    <div class="instruction-header">
                        <div class="instruction-content">
                            <input type="text" class="instruction-title-input" value="${escapeHtml(item.title || '')}" placeholder="Title (e.g., Identity)">
                            <textarea class="instruction-desc-input" placeholder="Description" style="margin-top: 8px;">${escapeHtml(item.description || '')}</textarea>
                        </div>
                        <button class="btn btn-icon" data-tooltip="Delete Item" onclick="removeSectionItem(${secIdx}, ${itemIdx})">×</button>
                    </div>
                </div>
            `;
        });
        
        html += `
                    <button class="btn btn-primary btn-small" onclick="addSectionItem(${secIdx})">+ Add Item</button>
                </div>
            </div>
            <div class="separator"></div>
        `;
    });

    html += '<button class="btn btn-success btn-center" onclick="addSection()">+ Add Section</button><div class="separator"></div>';

    html += `
        <div class="section">
            <div class="section-controls">
                <button class="collapse-btn" onclick="toggleSection('footer')">
                    <span class="collapse-icon ${collapsedSections['footer'] ? 'collapsed' : ''}">▼</span>
                </button>
            </div>
            <div class="section-header">
                <div class="form-label">Footer Message</div>
            </div>
            <div class="section-body ${collapsedSections['footer'] ? 'collapsed' : ''}">
                <div class="form-group">
                    <label class="form-label">Footer Text</label>
                    <textarea id="footer" placeholder="Footer message">${escapeHtml(data.footer || '')}</textarea>
                </div>
            </div>
        </div>

        <div class="actions">
            <button class="btn btn-primary" onclick="saveData()">💾 Save</button>
            <button class="btn btn-success" onclick="copyFormatted()">📋 Copy Formatted Text</button>
        </div>
    `;
    
    content.innerHTML = html;
    setupAutoSaveListeners();
}

function addDay() {
    autoSave();
    data.days.push({
        title: 'New Day',
        activities: []
    });
    render();
}

function removeDay(idx) {
    if (confirm('Are you sure you want to remove this day?')) {
        autoSave();
        data.days.splice(idx, 1);
        render();
    }
}

function addActivity(dayIdx) {
    autoSave();
    data.days[dayIdx].activities.push({
        time: '',
        description: ''
    });
    render();
}

function removeActivity(dayIdx, actIdx) {
    if (confirm('Are you sure you want to remove this activity?')) {
        autoSave();
        data.days[dayIdx].activities.splice(actIdx, 1);
        render();
    }
}

function addSubItem(dayIdx, actIdx) {
    autoSave();
    if (!data.days[dayIdx].activities[actIdx].subItems) {
        data.days[dayIdx].activities[actIdx].subItems = [];
    }
    data.days[dayIdx].activities[actIdx].subItems.push('');
    render();
}

function removeSubItem(dayIdx, actIdx, subIdx) {
    autoSave();
    data.days[dayIdx].activities[actIdx].subItems.splice(subIdx, 1);
    if (data.days[dayIdx].activities[actIdx].subItems.length === 0) {
        delete data.days[dayIdx].activities[actIdx].subItems;
    }
    render();
}

function addSection() {
    autoSave();
    data.sections.push({
        title: 'New Section',
        items: []
    });
    render();
}

function removeSection(idx) {
    if (confirm('Are you sure you want to remove this section?')) {
        autoSave();
        data.sections.splice(idx, 1);
        render();
    }
}

function addSectionItem(secIdx) {
    autoSave();
    data.sections[secIdx].items.push({
        title: '',
        description: ''
    });
    render();
}

function removeSectionItem(secIdx, itemIdx) {
    if (confirm('Are you sure you want to remove this item?')) {
        autoSave();
        data.sections[secIdx].items.splice(itemIdx, 1);
        render();
    }
}

function copyFormatted() {
    autoSave();
    
    let text = `*${data.title}*\n\n`;
    text += `Dates: *${data.dates}*\n`;
    text += `Organizer: *${data.organizer}* ( ${data.contacts} )\n\n`;
    text += `--------------------------\n\n`;

    data.days.forEach((day, idx) => {
        text += `*${day.title}*\n\n`;
        day.activities.forEach(act => {
            text += `• *${act.time}*: ${act.description}\n`;
            if (act.subItems && act.subItems.length > 0) {
                act.subItems.forEach(sub => {
                    text += `     - ${sub}\n`;
                });
            }
        });
        if (idx < data.days.length - 1) {
            text += `\n-------------\n\n`;
        } else {
            text += `\n`;
        }
    });

    text += `--------------------------\n\n`;

    data.sections.forEach(section => {
        text += `*${section.title}*\n\n`;
        section.items.forEach((item, idx) => {
            text += `*${idx + 1}. ${item.title}*: ${item.description}\n`;
        });
        text += `\n`;
    });

    text += `*${data.footer}*\n`;

    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        showToast('Failed to copy');
    });
}

// Initialize
initTheme();
loadData();
render();