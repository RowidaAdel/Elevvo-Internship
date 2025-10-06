import React, { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

export function JobsProvider({ children }) {
    const [jobs, setJobs] = useState(() => {
        const saved = localStorage.getItem("jobs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);

    const addJob = (job) => setJobs((prev) => [job, ...prev]);
    const updateJob = (id, updated) =>
        setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, ...updated } : j)));
    const deleteJob = (id) => setJobs((prev) => prev.filter((j) => j.id !== id));

    return (
        <JobsContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
            {children}
        </JobsContext.Provider>
    );
}
