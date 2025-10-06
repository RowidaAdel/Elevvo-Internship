import { useContext } from "react";
import { JobsContext } from "../../Context/JobsContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function JobForm({ form, setForm, buttonText }) {
    const { addJob, updateJob } = useContext(JobsContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.company || !form.title || !form.date) {
            toast.error("Please fill in all required fields!");
            return;
        }

        if (form.id) {
            updateJob(form.id, form);
            toast.success("Job updated successfully!");
        } else {
            addJob({ ...form, id: Date.now().toString() });
            toast.success("Job added successfully!");
        }

        navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-lg mx-auto w-full sm:w-11/12"
        >
            <div>
                <label className="block font-medium mb-1">Company</label>
                <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Enter company name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Job Title</label>
                <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Enter job title"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Status</label>
                <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500"
                >
                    <option disabled>Choose status</option>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">Applied Date</label>
                <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Notes</label>
                <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Any additional notes..."
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={3}
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                {buttonText}
            </button>
        </form>
    );
}
