import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#f8f4ee]">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Centuary Fab</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Weaving excellence since 1995. Crafting premium fabrics with precision,
              tradition, and sustainability.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* COLLECTION */}
          <div>
            <h4 className="font-semibold mb-3">Collections</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Shirting</li>
              <li>Suiting</li>
              <li>Sheeting</li>
              <li>Dhoties</li>
              <li>Ritual Fabrics</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Centuary Fab</li>
              <li>5/1, Natrayan Kovil St</li>
              <li>Water Office Road</li>
              <li>Erode, Tamil Nadu 638003</li>
              <li>centuaryfab@gmail.com</li>
              <li>+91 8148008588</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Centuary Fab. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}