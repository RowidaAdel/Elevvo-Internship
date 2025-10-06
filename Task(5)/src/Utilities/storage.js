// storage.js
export const loadJobs = () => {
    try {
        const raw = localStorage.getItem('jobs');
        return raw ? JSON.parse(raw) : [];
    } catch { return []; }
}
export const saveJobs = (jobs) => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}
