import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-primary">Centuary Fab</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Weaving excellence since 1995. Quality fabrics for a better, sustainable tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-primary transition-colors">Pure Cotton</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Organic Khadi</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Blended Fabrics</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Polyester</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Textile Avenue, Industrial Area</li>
              <li>Mumbai, Maharashtra 400001</li>
              <li>+91 98765 43210</li>
              <li>info@centuaryfab.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Centuary Fab. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
