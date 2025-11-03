import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-background to-primary/10 backdrop-blur-sm border-b border-white w-full">
      <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-700 to-emerald-300 flex items-center justify-center">
            <span className="text-lg font-bold text-white">G</span>
          </div>
          <span className="text-xl font-bold text-foreground">Grind Flow</span>
        </div>
        <Link href="/sign-in">
          <Button variant="primary" size="lg">
            Se connecter
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
