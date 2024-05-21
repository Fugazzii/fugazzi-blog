"use client";
import Input from "@/components/Input";
import MdEditor from "@/components/MarkdownEditor";
import Textarea from "@/components/Textarea";
import useDashboard from "@/hooks/useDashboard";

const Dashboard = () =>{
    const { handleSubmit, title, content, description } = useDashboard();  

    return (
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center items-center">
            <strong className="text-white text-3xl">Upload an Article</strong>
            <Input label="Title" placeholder="Enter title" {...title} />
            <Textarea label="Description" placeholder="Add small description" {...description} />
            <MdEditor label="Content" {...content} />
            <button type="submit" className="text-white font-bold py-4 px-8 rounded text-xl bg-blue-800 hover:bg-blue-900">Post</button>
        </form>
    );
}

export default Dashboard;