import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://cdn.poehali.dev/files/QvoqYPirCWVCBmKkvIqslshSWF7dQ3Y896v2ermMjqpwzrWdmn6ILzxGEnR7Bhs2xoLm2pKJeuTOIDtASMcp0j3M.jpg",
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <Card className="w-full max-w-4xl shadow-2xl border-2">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer group">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                      <img
                        src={images[selectedImage]}
                        alt="Чехлы MOFT"
                        className="w-full h-full object-contain transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-2xl flex items-center justify-center">
                        <Icon
                          name="ZoomIn"
                          size={48}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      -25%
                    </Badge>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={images[selectedImage]}
                    alt="Чехлы MOFT - увеличенное фото"
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-slate-900 shadow-md"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Миниатюра ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 cursor-pointer hover:bg-slate-200 transition-colors">
                  <Icon name="Plus" size={24} className="text-slate-400" />
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Package" size={18} className="text-slate-600" />
                  <span className="font-medium">В комплекте:</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 ml-6">
                  <li>• Чехол для iPhone (зеленый)</li>
                  <li>• Чехол для AirPods Pro (красный)</li>
                  <li>• Микрофибра для очистки</li>
                </ul>
              </div>
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

              <div className="flex items-center gap-4 text-sm text-slate-600 border-y py-4">
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

              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900">Особенности:</h3>
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

              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Выберите цвет чехла для iPhone:
                  </label>
                  <div className="flex gap-2">
                    <button className="w-12 h-12 rounded-full bg-green-500 border-4 border-slate-900 shadow-md"></button>
                    <button className="w-12 h-12 rounded-full bg-red-500 border-2 border-slate-300 hover:border-slate-400 transition-colors"></button>
                    <button className="w-12 h-12 rounded-full bg-blue-500 border-2 border-slate-300 hover:border-slate-400 transition-colors"></button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Количество:
                  </label>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">1</span>
                    <Button variant="outline" size="icon">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Специальное предложение</p>
                  <p>При покупке 2-х комплектов — скидка 10%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
