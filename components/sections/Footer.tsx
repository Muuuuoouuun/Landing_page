export function Footer() {
    return (
        <footer className="bg-[#121808] py-14 text-[#9a9585] text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="h-7 w-7 rounded-md bg-[#5C6B2E] flex items-center justify-center text-[#FAF7F0] font-black text-sm">E</div>
                            <span className="text-[#FAF7F0] font-black text-base tracking-tight">EduScale</span>
                        </div>
                        <p className="mb-4 leading-relaxed text-[#5a5748]">Standardizing education quality for the next generation of academies.</p>
                    </div>
                    <div>
                        <h4 className="font-black text-[#FAF7F0] mb-4 uppercase text-xs tracking-wider">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Interactive Classroom</a></li>
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">LMS Automation</a></li>
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Analytics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-[#FAF7F0] mb-4 uppercase text-xs tracking-wider">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Blog</a></li>
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Case Studies</a></li>
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-[#FAF7F0] mb-4 uppercase text-xs tracking-wider">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#FAF7F0] transition-colors font-medium">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-[#252D13] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#5a5748] font-medium">© 2025 EduScale Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* LinkedIn */}
                        <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#1C2810] hover:bg-[#5C6B2E]/30 border border-[#252D13] hover:border-[#5C6B2E]/50 transition-all duration-200 flex items-center justify-center">
                            <svg className="w-4 h-4 fill-[#5a5748] hover:fill-[#94ab3e] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" aria-label="X / Twitter" className="w-8 h-8 rounded-full bg-[#1C2810] hover:bg-[#5C6B2E]/30 border border-[#252D13] hover:border-[#5C6B2E]/50 transition-all duration-200 flex items-center justify-center">
                            <svg className="w-4 h-4 fill-[#5a5748] hover:fill-[#94ab3e] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#1C2810] hover:bg-[#5C6B2E]/30 border border-[#252D13] hover:border-[#5C6B2E]/50 transition-all duration-200 flex items-center justify-center">
                            <svg className="w-4 h-4 fill-[#5a5748] hover:fill-[#94ab3e] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
