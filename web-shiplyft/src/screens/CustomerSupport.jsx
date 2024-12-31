import React, { useState } from 'react';

export default function CustomerSupport() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const supportCards = [
        { awb: '123456789', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.' },
        { awb: '123456789', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.' },
        { awb: '123456789', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.' },
        { awb: '123456789', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.' },
        { awb: '123456789', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.' },
    ];

    const handleOverlayClick = (e) => {
        if (e.target.id === "modal-overlay") {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Customer Support</h2>
                <button
                    className="bg-[#FA7669] text-white text-xl font-bold px-4 py-2 rounded"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add New Support
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportCards.map((card, index) => (
                    <div className="border rounded-lg p-4 shadow-sm relative" key={index}>
                        <h3 className="text-lg font-semibold">AWB Number : {card.awb}</h3>
                        <p className="text-gray-600 mt-2">{card.description}</p>
                        <button className="absolute top-2 right-2 text-red-500 hover:text-red-700">&times;</button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white rounded-2xl p-8 w-[600px]">
                        <h2 className="text-2xl text-center font-extrabold mb-6">Add New Support</h2>
                        <hr className="mb-6" />
                        <div className="mb-6">
                            <label htmlFor="awb" className="block text-gray-700 font-semibold text-lg mb-2">AWB Number</label>
                            <input
                                id="awb"
                                type="text"
                                className="w-full border rounded-lg p-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-gray-700 font-semibold text-lg mb-2">Description</label>
                            <textarea
                                id="description"
                                className="w-full border rounded-lg p-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#FA7669] text-white text-2xl font-extrabold px-8 py-3 rounded-lg">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}