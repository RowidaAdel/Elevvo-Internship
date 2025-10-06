import { Link } from "react-router-dom";

export default function JobCard({ job }) {
    return (
        <Link
            to={`/job/${job.id}`}
            className="block bg-white shadow-md hover:shadow-lg rounded-xl p-5 transition transform hover:-translate-y-1"
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-gray-800">{job.company}</h3>
                <span
                    className={`px-2 py-1 text-xs rounded-full font-semibold ${job.status === "Applied"
                            ? "bg-blue-100 text-blue-800"
                            : job.status === "Interviewing"
                                ? "bg-yellow-100 text-yellow-800"
                                : job.status === "Offer"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                        }`}
                >
                    {job.status}
                </span>
            </div>
            <p className="text-gray-600">{job.title}</p>
            <p className="text-gray-500 text-sm mt-2">Applied: {job.date}</p>
        </Link>
    );
}
