"use client";

import { useState } from 'react';

const ContactPage = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("full name: ", fullname);
        console.log("email: ", email);
        console.log("subject: ", subject);
        console.log("message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({fullname, email, subject, message})
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if(success){
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
        
    };

    return(
        <div className="bg-white flex flex-col rounded-lg justify-center py-8 px-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mb-3 pb-4 text-center text-5xl font-bold text-indigo-600">Contact Me</h2>
        </div>
    
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="mb-0 space-y-6" action="#" method="POST">
                    <div>
                        <label className="block text-sm text-gray-700">Full Name</label>
                            <div className="mt-1">
                            <input onChange={(e) => setFullName(e.target.value)} value={fullname} id="fullName" name="name" type="text" className=
                            "w-full border border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
    
                    <div>
                        <label className="block text-sm text-gray-700">Email</label>
                            <div className="mt-1">
                            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" type="email" className=
                            "w-full border border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
    
                    <div>
                    <label className="block text-sm text-gray-700">Subject</label>
                        <div className="mt-1">
                            <input onChange={(e) => setSubject(e.target.value)} value={subject} id="subject" name="subject" type="text" className=
                            "w-full border border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
    
                    <div>
                    <label className="block text-sm text-gray-700">Comments</label>
                        <div className="mt-1">
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" className="w-full border border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></textarea>
                        </div>
                    </div>
    
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                    </div>
                </form>
            </div>
                {error && 
                error.map((e) => <div className={`bg-slate-100 rounded-md ${success ? "text-green-800" : "text-red-600"} px-3 py-3`}>{e}</div>)}
        </div>
    </div>
    );
};
export default ContactPage;