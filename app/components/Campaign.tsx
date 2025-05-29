const Campaign = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
                    The Gʊd Aɪˈdiə Campaign
                </h2>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Bridging literacy and leadership through book clubs, sports, and community empowerment.
                    Join our mission to transform how young people learn, lead, and grow.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Growth Metric */}
                <div className="grid gap-4">
                <div className="md:col-span-2 bg-blue-100 p-6 rounded-xl flex flex-col justify-between">
                    <div className="text-4xl font-bold">1200+</div>
                    <p className="text-sm text-gray-700 mt-2">Books Donated Through the Campaign</p>
                    <span className="self-end mt-4 text-xs bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">Impact</span>
                </div>

                {/* Country Reach */}
                <div className="col-span-1 bg-white p-6 rounded-xl flex flex-col justify-between border border-gray-100">
                    <div className="text-4xl font-bold">05+</div>
                    <p className="text-sm text-gray-700 mt-2">Countries with Active Reading Clubs</p>
                    <span className="self-end mt-4 text-xs bg-gray-100 px-3 py-1 rounded-full font-semibold">Reach</span>
                </div>

                {/* Rating / Engagement */}
                <div className="col-span-1 bg-white p-6 rounded-xl flex flex-col justify-between border border-gray-100">
                    <div className="text-4xl font-bold">4.9</div>
                    <p className="text-sm text-gray-700 mt-2">Avg. Engagement Rating by Clubs & Parents</p>
                    <span className="self-end mt-4 text-xs bg-gray-100 px-3 py-1 rounded-full font-semibold">Feedback</span>
                </div>
                </div>
                

                {/* Testimonial Card */}
                <div className=" bg-purple-200 p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <p className="text-xl font-semibold mb-2">“This campaign changed how my players read.”</p>
                        <p className="text-gray-700 text-sm">Our team never thought reading could become part of training. Now they bring books to every session.</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <img src="/Gud3.jpg" alt="Coach Photo" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <p className="text-sm font-semibold">Coach Nina</p>
                            <p className="text-xs text-gray-600">Kick & Read Nigeria</p>
                        </div>
                    </div>

                        {/* Optional nav buttons */}
                    <div className="flex gap-2 mt-4">
                        <button className="bg-white px-3 py-1 rounded-full">←</button>
                        <button className="bg-white px-3 py-1 rounded-full">→</button>
                    </div>

                    <span className="self-end mt-4 text-xs bg-white text-purple-600 px-3 py-1 rounded-full font-semibold">Testimonial</span>
                </div>
            </div>    
        </section>
    )
}

export default Campaign;