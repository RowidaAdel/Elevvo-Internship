// exportImport.js
export function exportJobs(jobs) {
    const dataStr = JSON.stringify(jobs, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jobs.json";
    a.click();
    URL.revokeObjectURL(url);
}

export function importJobs(file, setJobs) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) setJobs(imported);
            else alert("Invalid JSON file!");
        } catch {
            alert("Error parsing JSON!");
        }
    };
    reader.readAsText(file);
}
