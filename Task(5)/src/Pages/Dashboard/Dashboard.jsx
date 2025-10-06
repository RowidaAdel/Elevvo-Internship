import { useContext } from "react";
import { JobsContext } from "../../Context/JobsContext";
import { exportJobs, importJobs } from "../../Utilities/exportImport";
import JobCard from "../../Components/JobCard/JobCard";
import Header from "../../Components/Header/Header";
import { LayoutGrid } from 'lucide-react';

export default function Dashboard() {
    const { jobs, setJobs } = useContext(JobsContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <LayoutGrid className="w-6 h-6 text-gray-800" />
                        Job Applications
                    </h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => exportJobs(jobs)}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        >
                            Export JSON
                        </button>
                        <input
                            type="file"
                            accept="application/json"
                            onChange={(e) => {
                                if (e.target.files.length) importJobs(e.target.files[0], setJobs);
                            }}
                            className="border rounded px-2 py-1 cursor-pointer"
                        />
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.length === 0 ? (
                        <p className="text-gray-600">No applications yet.</p>
                    ) : (
                        jobs.map((job) => <JobCard key={job.id} job={job} />)
                    )}
                </div>
            </div>
        </div>
    );
}