import {
  MapPin,
  Clock,
  PoundSterlingIcon as Pound,
  ClipboardList,
} from 'lucide-react';
import { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  Address: <MapPin className="w-12 h-12 stroke-1" />,
  'Camp Times': <Clock className="w-12 h-12 stroke-1" />,
  Prices: <Pound className="w-12 h-12 stroke-1" />,
  //   Activities: (
  //     <div className="grid grid-cols-3 gap-1">
  //       <div className="w-4 h-4">🏓</div>
  //       <div className="w-4 h-4">⚽</div>
  //       <div className="w-4 h-4">🐦</div>
  //       <div className="w-4 h-4">🪷</div>
  //       <div className="w-4 h-4">🎪</div>
  //       <div className="w-4 h-4">♟️</div>
  //       <div className="w-4 h-4">🎨</div>
  //       <div className="w-4 h-4">⛵</div>
  //       <div className="w-4 h-4">🏹</div>
  //     </div>
  //   ),
  Activities: <ClipboardList className="w-12 h-12 stroke-1" />,
};

export default function ChiswickCampInfo({ data, campTitle }: any) {
  return (
    <div className="bg-[#f9f3e8] flex items-center justify-center p-4 md:py-24">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {campTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {data?.map((item: any) => (
            <div key={item._key} className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">{item.label}:</h2>
              <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-4">
                {iconMap[item.label] || <span>❓</span>}
              </div>
              <p className="text-center whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
