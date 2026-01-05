import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="highway-animation">
        <div className="car car-1">🚗</div>
        <div className="car car-2">🚙</div>
        <div className="car car-3">🚕</div>
        <div className="car car-4">🚐</div>
      </div>

      <Card className="w-full max-w-4xl shadow-2xl backdrop-blur-sm bg-white/95 relative z-10">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/files/QvoqYPirCWVCBmKkvIqslshSWF7dQ3Y896v2ermMjqpwzrWdmn6ILzxGEnR7Bhs2xoLm2pKJeuTOIDtASMcp0j3M.jpg"
                  alt="Чехлы MOFT"
                  className="w-full h-full object-contain"
                />
              </div>
              <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                -25%
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-3">
                  Премиум аксессуары
                </Badge>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">
                  Чехлы MOFT
                </h1>
                <p className="text-slate-600 text-lg">
                  Защитные чехлы премиум-класса для iPhone и AirPods Pro
                </p>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-slate-900">
                  2 990 ₽
                </span>
                <span className="text-2xl text-slate-400 line-through">
                  3 990 ₽
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-700">
                  <Icon name="Shield" size={20} className="text-green-600" />
                  <span>Защита от царапин и ударов</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Icon name="Sparkles" size={20} className="text-green-600" />
                  <span>Премиальные материалы</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Icon name="Palette" size={20} className="text-green-600" />
                  <span>Яркие цвета: красный и зеленый</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Icon name="Truck" size={20} className="text-green-600" />
                  <span>Бесплатная доставка</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button size="lg" className="flex-1 text-lg h-14">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  В корзину
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-4">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">4.9</span>
                </div>
                <span>•</span>
                <span>156 отзывов</span>
                <span>•</span>
                <span className="text-green-600 font-medium">В наличии</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        .highway-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .car {
          position: absolute;
          font-size: 2.5rem;
          animation: drive linear infinite;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .car-1 {
          top: 15%;
          animation-duration: 8s;
          animation-delay: 0s;
        }

        .car-2 {
          top: 35%;
          animation-duration: 12s;
          animation-delay: 2s;
        }

        .car-3 {
          top: 55%;
          animation-duration: 10s;
          animation-delay: 4s;
        }

        .car-4 {
          top: 75%;
          animation-duration: 9s;
          animation-delay: 1s;
        }

        @keyframes drive {
          0% {
            left: -10%;
            transform: translateX(0);
          }
          100% {
            left: 110%;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
