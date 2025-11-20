import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const players = [
    {
      id: 1,
      name: 'SHADOW',
      role: 'Снайпер',
      rank: 1,
      kills: 2847,
      winRate: 68,
      kd: 4.2,
      avatar: '🎯'
    },
    {
      id: 2,
      name: 'VORTEX',
      role: 'Штурмовик',
      rank: 2,
      kills: 2654,
      winRate: 65,
      kd: 3.9,
      avatar: '⚡'
    },
    {
      id: 3,
      name: 'PHOENIX',
      role: 'Поддержка',
      rank: 3,
      kills: 2421,
      winRate: 63,
      kd: 3.7,
      avatar: '🔥'
    },
    {
      id: 4,
      name: 'GHOST',
      role: 'Разведка',
      rank: 4,
      kills: 2389,
      winRate: 62,
      kd: 3.6,
      avatar: '👻'
    },
    {
      id: 5,
      name: 'STORM',
      role: 'Капитан',
      rank: 5,
      kills: 2301,
      winRate: 64,
      kd: 3.8,
      avatar: '⚔️'
    }
  ];

  const tournaments = [
    {
      name: 'PUBG Masters League 2025',
      date: '15 января 2025',
      status: 'active',
      prize: '5 000 000 ₽',
      place: 'Полуфинал'
    },
    {
      name: 'Winter Championship',
      date: '22 декабря 2024',
      status: 'completed',
      prize: '2 000 000 ₽',
      place: '1 место 🏆'
    },
    {
      name: 'Regional Cup',
      date: '10 ноября 2024',
      status: 'completed',
      prize: '1 000 000 ₽',
      place: '2 место 🥈'
    }
  ];

  const news = [
    {
      title: 'Победа в Winter Championship!',
      date: '23.12.2024',
      excerpt: 'Наша команда заняла первое место в зимнем чемпионате, обыграв 32 клана!'
    },
    {
      title: 'Новый игрок в составе',
      date: '15.12.2024',
      excerpt: 'Встречайте SHADOW - лучший снайпер региона присоединился к нашему клану!'
    },
    {
      title: 'Тренировочный буткемп',
      date: '01.12.2024',
      excerpt: 'Команда провела недельные сборы для подготовки к главным турнирам сезона.'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold neon-glow">HATE NOOBSS</div>
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

      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">
                <Icon name="Trophy" size={14} className="mr-1" />
                Чемпионы 2024
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold neon-glow">
                HATE NOOBSS
              </h1>
              <p className="text-xl text-muted-foreground">
                Элитный клан PUBG Mobile | Top 5 Russia
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
                  <Icon name="Users" size={20} className="mr-2" />
                  Вступить в клан
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть трейлер
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <Card className="bg-card/50 backdrop-blur border-primary/20 neon-border">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-primary">68%</div>
                    <div className="text-xs text-muted-foreground uppercase">Win Rate</div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur border-primary/20 neon-border">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-accent">42+</div>
                    <div className="text-xs text-muted-foreground uppercase">Турниры</div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur border-primary/20 neon-border">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-secondary">12K+</div>
                    <div className="text-xs text-muted-foreground uppercase">Kills</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/c741f24d-2d73-4617-8883-92e2990e8679/files/1bc66ea9-1f3e-495c-ad93-85cc5493817f.jpg"
                alt="HATE NOOBSS Team"
                className="relative rounded-lg neon-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary mb-4">
              <Icon name="Users" size={14} className="mr-1" />
              Наша команда
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Рейтинг игроков</h2>
            <p className="text-muted-foreground">Статистика и достижения членов клана</p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {players.map((player, index) => (
              <Card 
                key={player.id} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="text-5xl flex-shrink-0">{player.avatar}</div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold">{player.name}</h3>
                            <Badge variant="outline" className="border-secondary text-secondary">
                              {player.role}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">Рейтинг #{player.rank}</div>
                        </div>
                        
                        <div className="flex gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{player.kills}</div>
                            <div className="text-xs text-muted-foreground">Kills</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">{player.kd}</div>
                            <div className="text-xs text-muted-foreground">K/D</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Win Rate</span>
                          <span className="text-primary font-bold">{player.winRate}%</span>
                        </div>
                        <Progress value={player.winRate} className="h-2 bg-muted" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/20 text-accent mb-4">
              <Icon name="Trophy" size={14} className="mr-1" />
              Турниры
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Соревнования</h2>
            <p className="text-muted-foreground">Текущие и завершенные турниры</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur hover:scale-105 transition-all ${
                  tournament.status === 'active' 
                    ? 'border-primary neon-border animate-pulse-glow' 
                    : 'border-primary/20'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={tournament.status === 'active' ? 'default' : 'outline'}>
                      {tournament.status === 'active' ? 'Активный' : 'Завершен'}
                    </Badge>
                    <Icon name="Medal" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{tournament.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="font-bold text-primary">{tournament.prize}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-lg font-bold text-accent">{tournament.place}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/c741f24d-2d73-4617-8883-92e2990e8679/files/94df36d6-a96a-4a56-bfdf-e60598635348.jpg"
              alt="Trophies"
              className="rounded-lg neon-border mx-auto max-w-2xl"
            />
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/20 text-secondary mb-4">
              <Icon name="Newspaper" size={14} className="mr-1" />
              Новости клана
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Последние события</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Clock" size={14} />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                  <Button variant="link" className="text-primary p-0 mt-4">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary mb-4">
              <Icon name="Image" size={14} className="mr-1" />
              Галерея
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Моменты побед</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="relative aspect-video rounded-lg overflow-hidden neon-border hover:scale-105 transition-all cursor-pointer"
              >
                <img 
                  src="https://cdn.poehali.dev/projects/c741f24d-2d73-4617-8883-92e2990e8679/files/da67f677-b091-49bd-b8a9-6eb613a85986.jpg"
                  alt={`Gallery ${item}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-sm font-bold">Скриншот #{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="bg-accent/20 text-accent mb-4">
              <Icon name="UserPlus" size={14} className="mr-1" />
              Набор открыт
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Вступить в клан</h2>
            <p className="text-muted-foreground">Заполни заявку и стань частью легенды</p>
          </div>

          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Игровой никнейм</label>
                <Input placeholder="Введи свой ник" className="bg-background border-primary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">PUBG ID</label>
                <Input placeholder="Твой ID в игре" className="bg-background border-primary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Уровень в игре</label>
                <Input placeholder="Например: Ace Master" className="bg-background border-primary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Discord</label>
                <Input placeholder="username#0000" className="bg-background border-primary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">О себе</label>
                <Textarea 
                  placeholder="Расскажи о своем опыте, стиле игры и достижениях"
                  className="bg-background border-primary/20 min-h-32"
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-border" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/20 text-secondary mb-4">
              <Icon name="MessageSquare" size={14} className="mr-1" />
              Связь с нами
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div className="text-sm font-bold">Email</div>
                <div className="text-xs text-muted-foreground">titan@clan.gg</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div className="text-sm font-bold">Discord</div>
                <div className="text-xs text-muted-foreground">TITAN#2024</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Youtube" size={24} className="text-primary" />
                </div>
                <div className="text-sm font-bold">YouTube</div>
                <div className="text-xs text-muted-foreground">@TitanClan</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Send" size={24} className="text-primary" />
                </div>
                <div className="text-sm font-bold">Telegram</div>
                <div className="text-xs text-muted-foreground">@TitanPUBG</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold neon-glow">HATE NOOBSS</div>
              <Badge variant="outline" className="border-primary text-primary">PRO TEAM</Badge>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 HATE NOOBSS Clan. Все права защищены.
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;