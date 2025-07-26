'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        institution: '',
        attendeeType: '',
        inPerson: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Registration data:', formData);
        alert('Thank you for registering! You will receive a confirmation email shortly.');
    };

    return (
        <section
            id="register"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#555960]/5 to-[#CFB991]/5 px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-2xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-black text-[#555960] mb-4">
                        Register
                    </h2>
                    <p className="text-lg text-[#1E3A5F]/80">
                        Complete the form below to register for the symposium
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-full mx-auto mt-4"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-[#555960]/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-[#000000] mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#C56A33]/20 rounded-xl focus:ring-2 focus:ring-[#ddb945] focus:border-[#ddb945] bg-white text-[#1E3A5F] placeholder-[#1E3A5F]/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[#000000] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#C56A33]/20 rounded-xl focus:ring-2 focus:ring-[#ddb945] focus:border-[#ddb945] bg-white text-[#1E3A5F] placeholder-[#1E3A5F]/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="institution" className="block text-sm font-semibold text-[#000000] mb-2">
                                    Institution/Organization
                                </label>
                                <input
                                    type="text"
                                    id="institution"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleInputChange}
                                    placeholder="Enter your institution or organization"
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#C56A33]/20 rounded-xl focus:ring-2 focus:ring-[#ddb945] focus:border-[#ddb945] bg-white text-[#1E3A5F] placeholder-[#1E3A5F]/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="attendeeType" className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                                    Attendee Type
                                </label>
                                <select
                                    id="attendeeType"
                                    name="attendeeType"
                                    value={formData.attendeeType}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-[#555960]/20 rounded-xl focus:ring-2 focus:ring-[#CFB991] focus:border-[#CFB991] bg-white text-[#000000]"
                                >
                                    <option value="">Select attendee type</option>
                                    <option value="Academic">Academic</option>
                                    <option value="Industry">Industry</option>
                                    <option value="Government">Government</option>
                                    <option value="Student">Student</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="inPerson"
                                    name="inPerson"
                                    checked={formData.inPerson}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 text-[#CFB991] bg-white border-2 border-[#555960]/20 rounded focus:ring-[#CFB991] accent-[#CFB991]"
                                />
                                <label htmlFor="inPerson" className="ml-3 text-sm font-medium text-[#1E3A5F]">
                                    I will attend in person
                                </label>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] hover:from-[#DDB945] hover:to-[#CFB991] text-[#000000] font-bold py-4 px-6 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#555960] focus:ring-offset-2"
                            >
                                Submit Registration
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 