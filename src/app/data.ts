import { StaticImageData } from 'next/image';
import Hilton from '../assets/projects/Hilton.jpg';
import Qazaqstan from '../assets/projects/Qazaqstan.jpg';
import NacBank from '../assets/projects/NacBank.jpg';
import FosforZavod from '../assets/projects/FosforZavod.jpg';
import GAS from '../assets/projects/GAS.jpg';
import Estacada from '../assets/projects/Estacada.jpg';
import Modex from '../assets/projects/Modex.jpg';
import Muzey from '../assets/projects/Muzey.jpg';
import Complex from '../assets/projects/Complex.jpg';
import Akimat from '../assets/projects/akimat.jpg';
import ShinZavod from '../assets/projects/ShinZavod.jpg';
import School from '../assets/projects/School.jpg';
import greenCvartal from '../assets/projects/greenKvartal.jpg';
import Gospital from '../assets/projects/Gospital.jpg';
import Edinoborstva from '../assets/projects/edinoborstva.jpg';
import medCenterUzbekistgan from '../assets/projects/medCenterUzbekistgan.jpg';
import Altau from '../assets/projects/altau.jpg';
import Lock from '../assets/projects/Lock.jpg';
import Most from '../assets/projects/Most.jpg';
import TeleCenter from '../assets/projects/TeleCenter.jpg';



interface Project {
    name: string; 
    image: StaticImageData; 
};

const projects: Project[] = [
    { name: 'Отель Hilton Astana', image: Hilton },
    { name: 'Легкоатлетический СК "Qazaqstan"', image: Qazaqstan },
    { name: 'Национальный Банк Казахстана', image: NacBank },
    { name: 'Завод "Казфосфат"', image: FosforZavod },
    { name: 'Сеть АЗС "КaзМунтайГаз"', image: GAS },
    { name: 'Эстакада "Большая кольцевая/Ферганское шоссе". Узбекистан', image: Estacada },
    { name: 'Завод "Modex"', image: Modex },
    { name: 'Музей "Ұлы Дала Елі"', image: Muzey },
    { name: 'Комплекс "Aktau Riviera"', image: Complex },
    { name: 'Здание Областного Акимата в г. Туркестан', image: Akimat },
    { name: 'Шинный завод Камаз в г. Сарань', image: ShinZavod },
    { name: 'Школа "IQanat High School"', image: School },
    { name: 'ЖК "Зеленый Квартал" и "Green Mall"', image: greenCvartal },
    { name: 'Госпиталя в 15-ти городах Казахстана', image: Gospital },
    { name: 'Дворец единоборств им. Жаксылыка Ушкемпирова', image: Edinoborstva },
    { name: 'Медицинский центр онкологии и радиологии. Узбекистан', image: medCenterUzbekistgan },
    { name: 'Медиацентр "Алатау"', image: Altau },
    { name: 'ЛОК "Алатау"', image: Lock },
    { name: 'Пешеходный мост "Атырау"', image: Most },
    { name: 'Телецентр в г. Алматы', image: TeleCenter },
];

export default projects;