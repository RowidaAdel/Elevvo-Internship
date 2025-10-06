import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobsContext } from "../../Context/JobsContext";
import Header from "../../Components/Header/Header";

export default function JobDetails() {
    const { id } = useParams();
    const { jobs, deleteJob } = useContext(JobsContext);
    const navigate = useNavigate();

    const job = jobs.find((j) => j.id === id);
    if (!job) return <p className="p-6 text-center text-gray-600">Job not found.</p>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-white shadow-lg rounded-xl p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{job.company}</h2>
                    <p className="text-gray-700 font-medium">{job.title}</p>
                    <p className="text-gray-600">
                        Status: <span className="font-semibold">{job.status}</span>
                    </p>
                    <p className="text-gray-600">
                        Applied Date: <span className="font-semibold">{job.date}</span>
                    </p>
                    {job.notes && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="text-gray-700 font-medium mb-1">Notes:</h3>
                            <p className="text-gray-600">{job.notes}</p>
                        </div>
                    )}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={() => {
                                if (window.confirm("Are you sure you want to delete this job?")) {
                                    deleteJob(job.id);
                                    navigate("/");
                                }
                            }}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => navigate("/add", { state: { job } })}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
