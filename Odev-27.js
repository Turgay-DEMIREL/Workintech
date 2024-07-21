/* 
1. Bir dizideki sayıları çift mi tek mi olduklarına göre ayırmak için filter metodunu kullanın.

Örnek Dizi: [4, 7, 10, 15, 18, 21]
const sayilar = [4, 7, 10, 15, 18, 21];
const ciftSayilar = sayilar.filter(num => % 2 === 0);
console.log(ciftSayilar);

const tekSayilar = sayilar.filter(num => % 2 !== 0);
console.log(tekSayilar);

2. Bir dizideki her sayıyı mutlak değere çeviren bir map fonksiyonu yazın.

Örnek Dizi: [-10, 20, -30, 40, -50, 60]
*/
const Dizi = [-10, 20, -30, 40, -50, 60];

const mutlakDeger = (sayi) => {
    return Math.abs(sayi);
  };
let yeniDizi = dizi.map(mutlakDeger);
