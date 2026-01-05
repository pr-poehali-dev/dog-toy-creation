import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [toyStatus, setToyStatus] = useState("idle");
  const [speed, setSpeed] = useState(50);

  const handleAction = (action: string) => {
    setToyStatus(action);
    setTimeout(() => setToyStatus("idle"), 2000);
  };

  const activityData = [
    { day: "Пн", value: 45 },
    { day: "Вт", value: 62 },
    { day: "Ср", value: 78 },
    { day: "Чт", value: 55 },
    { day: "Пт", value: 89 },
    { day: "Сб", value: 95 },
    { day: "Вс", value: 73 },
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Мария К.",
      avatar: "МК",
      dogName: "Рекс",
      time: "2 часа назад",
      content: "Рекс обожает новую игрушку! Играет по 3 часа в день, активность выросла на 40%",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Алексей П.",
      avatar: "АП",
      dogName: "Бади",
      time: "5 часов назад",
      content: "Совет: включайте режим 'прятки' вечером, собака лучше спит потом",
      likes: 18,
      comments: 5,
    },
    {
      id: 3,
      author: "Елена С.",
      avatar: "ЕС",
      dogName: "Луна",
      time: "1 день назад",
      content: "Луна похудела на 2 кг за месяц благодаря регулярным играм! Ветеринар доволен 🎉",
      likes: 45,
      comments: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Dog" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">SmartPaw</h1>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Игрушка подключена
            </Badge>
            <Avatar>
              <AvatarFallback>ВЫ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="control" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="control" className="gap-2">
              <Icon name="Gamepad2" size={18} />
              Управление
            </TabsTrigger>
            <TabsTrigger value="stats" className="gap-2">
              <Icon name="BarChart3" size={18} />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="community" className="gap-2">
              <Icon name="Users" size={18} />
              Сообщество
            </TabsTrigger>
          </TabsList>

          <TabsContent value="control" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Панель управления</CardTitle>
                <CardDescription>
                  Управляйте игрушкой в реальном времени
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Icon
                      name={
                        toyStatus === "playing"
                          ? "Play"
                          : toyStatus === "vibrate"
                          ? "Zap"
                          : toyStatus === "sound"
                          ? "Volume2"
                          : "Circle"
                      }
                      className="text-white"
                      size={48}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground capitalize">
                    Статус:{" "}
                    <span className="font-medium text-foreground">
                      {toyStatus === "idle"
                        ? "В режиме ожидания"
                        : toyStatus === "playing"
                        ? "Играет"
                        : toyStatus === "vibrate"
                        ? "Вибрация"
                        : "Звук"}
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    onClick={() => handleAction("playing")}
                    className="h-20 flex flex-col gap-2"
                  >
                    <Icon name="Play" size={24} />
                    Запустить
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => handleAction("pause")}
                    className="h-20 flex flex-col gap-2"
                  >
                    <Icon name="Pause" size={24} />
                    Пауза
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleAction("vibrate")}
                    className="h-20 flex flex-col gap-2"
                  >
                    <Icon name="Zap" size={24} />
                    Вибрация
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleAction("sound")}
                    className="h-20 flex flex-col gap-2"
                  >
                    <Icon name="Volume2" size={24} />
                    Звук
                  </Button>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Скорость движения</label>
                    <span className="text-sm text-muted-foreground">{speed}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button variant="outline" className="gap-2">
                    <Icon name="RotateCcw" size={18} />
                    Влево
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Icon name="RotateCw" size={18} />
                    Вправо
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">73 мин</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +12% от вчера
                  </p>
                  <Progress value={73} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    За неделю
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8.2 часа</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Цель: 7 часов
                  </p>
                  <Progress value={117} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Калории сожжено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">450</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Отлично!
                  </p>
                  <Progress value={90} className="mt-3" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Активность за неделю</CardTitle>
                <CardDescription>
                  Время игры в минутах по дням
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-4 h-64">
                  {activityData.map((item) => (
                    <div
                      key={item.day}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div
                        className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${item.value}%` }}
                      />
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Trophy" className="text-white" size={24} />
                    </div>
                    <p className="text-xs font-medium text-center">
                      7 дней подряд
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Zap" className="text-white" size={24} />
                    </div>
                    <p className="text-xs font-medium text-center">100 игр</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Star" className="text-white" size={24} />
                    </div>
                    <p className="text-xs font-medium text-center">
                      Первая неделя
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Heart" className="text-white" size={24} />
                    </div>
                    <p className="text-xs font-medium text-center">
                      Активный питомец
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Лента сообщества</CardTitle>
                <CardDescription>
                  Делитесь опытом с другими владельцами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {communityPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border-b last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-white">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {post.dogName} • {post.time}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed">{post.content}</p>
                        <div className="flex items-center gap-6 pt-2">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="Heart" size={16} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="MessageCircle" size={16} />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="Share2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Популярные темы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="TrendingUp" className="text-primary" size={20} />
                    <span className="font-medium">Тренировка щенков</span>
                  </div>
                  <Badge>128 постов</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Award" className="text-primary" size={20} />
                    <span className="font-medium">Рекорды активности</span>
                  </div>
                  <Badge>94 поста</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Lightbulb" className="text-primary" size={20} />
                    <span className="font-medium">Советы экспертов</span>
                  </div>
                  <Badge>67 постов</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
