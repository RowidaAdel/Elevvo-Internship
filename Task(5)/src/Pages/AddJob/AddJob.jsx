import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../../Context/JobsContext";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import JobForm from "../../Components/JobForm/JobForm";

export default function AddJob() {
    const { addJob, updateJob } = useContext(JobsContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        id: null,
        company: "",
        title: "",
        status: "Applied",
        date: "",
        notes: "",
    });

    useEffect(() => {
        if (location.state?.job) setForm(location.state.job);
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id) updateJob(form.id, form);
        else addJob({ ...form, id: Date.now().toString() });
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <JobForm
                    form={form}
                    setForm={setForm}
                    onSubmit={handleSubmit}
                    buttonText={form.id ? "Update Job" : "Add Job"}
                />
            </div>
        </div>
    );
}