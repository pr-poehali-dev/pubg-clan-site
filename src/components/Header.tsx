import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold neon-glow">TITAN</div>
            <Badge variant="outline" className="border-primary text-primary">PRO TEAM</Badge>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['home', 'team', 'tournaments', 'news', 'gallery', 'join', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-all hover:text-primary ${
                  activeSection === section ? 'text-primary neon-glow' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'team' && 'Команда'}
                {section === 'tournaments' && 'Турниры'}
                {section === 'news' && 'Новости'}
                {section === 'gallery' && 'Галерея'}
                {section === 'join' && 'Вступить'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
