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
            <h4 className="font-semibold mb-4 text-foreground">Our Collection</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-primary transition-colors">Premium Cotton</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Luxury Linen</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Organic Collection</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Shirting Fabrics</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-foreground"
              data-testid="text-footer-contact-title"
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground" data-testid="list-footer-contact">
              <li data-testid="text-footer-brand">Centuary Fab</li>
              <li data-testid="text-footer-street">
                254, Arumugam Street, Thirunagar Colony
              </li>
              <li data-testid="text-footer-city-state-postal">
                Erode, Tamil Nadu 638003, India
              </li>
              <li>
                <a
                  href="mailto:centuaryfab@gmail.com"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  centuaryfab@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
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
