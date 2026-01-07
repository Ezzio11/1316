import React from "react";
// Icons removed

const BloodlineFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        // FIX: Transparent background with blur to reveal tattoos underneath
        <footer className="relative bg-black/90 backdrop-blur-sm text-zinc-500 py-16 border-t-4 border-yellow-600/50 overflow-hidden">

            {/* Removed the custom texture div so the global TattooBackground shows through */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT: The Legal Acknowledgment */}
                    <div className="space-y-4">
                        <h3 className="text-white font-black uppercase text-2xl tracking-tighter">
                            1316: <span className="text-red-600">THE REIGN</span>
                        </h3>

                        <div className="text-xs font-mono space-y-2 leading-relaxed opacity-70">
                            <p>
                                <strong>DISCLAIMER:</strong> This is a non-profit fan project created for educational and portfolio purposes only.
                                All WWE programming, talent names, images, likenesses, slogans, wrestling moves, trademarks, logos, and copyrights are the exclusive property of <strong>World Wrestling Entertainment, LLC</strong> and its subsidiaries.
                            </p>
                            <p>
                                No copyright infringement is intended. This content is used under the <strong>"Fair Use"</strong> provisions of Section 107 of the Copyright Act of 1976, which allows for fair use for purposes such as criticism, comment, news reporting, teaching, scholarship, and research.
                            </p>
                            <p>
                                All other trademarks, logos, and copyrights are the property of their respective owners.
                            </p>
                        </div>

                        <p className="text-xs pt-4 border-t border-zinc-800">
                            &copy; {currentYear} Ezz Eldin Ahmed. Made for the Ones. ☝️
                        </p>
                    </div>

                    {/* RIGHT: The Creator Credit (YOU) */}
                    <div className="md:text-right space-y-6">
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-red-600 mb-2">
                                Architected By
                            </p>
                            <h4 className="text-3xl font-black text-white uppercase leading-none">
                                <a
                                    href="https://ezzio.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-600 transition-colors duration-300"
                                >
                                    Ezz Eldin Ahmed
                                </a>
                            </h4>
                            <p className="text-sm text-zinc-400 font-serif italic mt-1">
                                "The Wiseman of the Web"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default BloodlineFooter;