export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">EduScale</h3>
                        <p className="mb-4">Standardizing education quality for the next generation.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Interactive Classroom</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LMS Automation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 EduScale Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* Social icons placeholders */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
