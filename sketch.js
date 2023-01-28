let cy1=150+1000;
let cy2=150+1000;
let cy3=200+1000;
let cy4=200+1000;
let py1=200+1000;
let py2=200+1000;
let py3=250+1000;
let py4=250+1000;
let by1=200+1000;
let by2=200+1000;
let by3=245+1000;
let ty1=250+1000;
let ty2=250+1000;
let ty3=600+1000;
let ty4=450+1000;
let tsy1=500+1000;
let tsy2=600+1000;
let tsy3=600+1000;
let cdy1=600+1000;
let cdy2=600+1000;
let cdy3=750+1000;
let oy1=300+1000;
let oy2=350+1000;
let oy3=100+1000;
let pgey1=50+1000;
let pgey2=100+1000;
let pgey3=450+1000;
let pgey4=150+1000;
let pgdy1=450+1000;
let pgdy2=100+1000;
let pgdy3=50+1000;
let pgdy4=150+1000;
let aey1=100+1000;
let aey2=350+1000;
let aey3=450+1000;
let ady1=100+1000;
let ady2=450+1000;
let ady3=350+1000;
let pmy1=235+1000;
let pmy2=250+1000;
let pmy3=350+1000;
let pmy4=450+1000;
let pm2y1=357+1000;
let pm2y2=380+1000;
let pm2y3=410+1000;
let pm2y4=450+1000;
let ppy1=450+1000;
let ppy2=417+1000;
let ppy3=450+1000;
let ppy4=480+1000;
let pp2y1=450+1000;
let pp2y2=465+1000;
let pp2y3=530+1000;
let pp2y4=500+1000;
let cd2y1=600+1000;
let cd2y2=750+1000;
let cd2y3=900+1000;
let cd2y4=750+1000;
let cd3y1=600+1000;
let cd3y2=630+1000;
let cd3y3=700+1000;
let cd3y4=650+1000;
let cd4y1=600+1000;
let cd4y2=650+1000;
let cd4y3=800+1000;
let cd4y4=700+1000;


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
background(0);
fill('purple')
triangle(500,100,100,900,900,900)
randomSeed(100)
fill('#784F41')
cabeça=  quad(450,cy1,550,cy2,550,cy3,450,cy4)
  fill('#986C6A')
pescoço=quad(450,py1,550,py2,525,py3,475,py4);
  fill('#F3B391')
bico =triangle(475,by1,525,by2,500,by3);
  fill('#784F41')
torsod=quad(525,ty1,500,ty2,500,ty3,600,ty4);
torsoe=quad(475,ty1,500,ty2,500,ty3,400,ty4);
trase= triangle(433,tsy1,350,tsy2,500,tsy3);
trasd=triangle(567,tsy1,500,tsy2,650,tsy3);
  fill('#986C6A')
caudae=triangle(350,cdy1,500,cdy2,500,cdy3);
caudad=triangle(650,cdy1,500,cdy2,500,cdy3);
  fill('#784F41')
ossoe=triangle(457,oy1,437,oy2,150,oy3);
ossod=triangle(543,oy1,561,oy2,850,oy3);
  fill('#B399A2')
penage=quad(10,pgey1,150,pgey2,400,pgey3,50,pgey4);
penagd= quad(600,pgdy1,850,pgdy2,990,pgdy3,950,pgdy4);
  fill('#986C6A')
assae= triangle(150,aey1,437,aey2,400,aey3);
assad=triangle(850,ady1,600,ady2,561,ady3);
fill('#B399A2')
pename=quad(150,pmy1,60,pmy2,140,pmy3,400,pmy4);
penamd= quad(850,pmy1,940,pmy2,860,pmy3,600,pmy4);
penam2e=quad(160,pm2y1,110,pm2y2,160,pm2y3,400,pm2y4);
penam2d=quad(840,pm2y1,890,pm2y2,840,pm2y3,600,pm2y4);
penape=quad(400,ppy1,200,ppy2,175,ppy3,220,ppy4);
penapd=quad(600,ppy1,800,ppy2,825,ppy3,780,ppy4);
penap2e=quad(400,pp2y1,310, pp2y2,260,pp2y3,370,pp2y4);
penap2d=quad(600,pp2y1,690,pp2y2,740,pp2y3,630, pp2y4);
cauda2=quad(500,cd2y1,475,cd2y2,500,cd2y3,525,cd2y4);
cauda3e=quad(350,cd3y1,290,cd3y2,230,cd3y3,320,cd3y4);
cauda3d=quad(650,cd3y1,710,cd3y2,770,cd3y3,680,cd3y4);
cauda4e=quad(500,cd4y1,400,cd4y2,320,cd4y3,450,cd4y4 );
cauda4d=quad(500,cd4y1,600,cd4y2,680,cd4y3,550,cd4y4);
  
 cy1=cy1-10+5;
 cy2=cy2-10+5;
 cy3=cy3-10+5;
 cy4=cy4-10+5;
 py1=py1-10+5;
 py2=py2-10+5;
 py3=py3-10+5;
 py4=py4-10+5;
 by1=by1-10+5;
 by2=by2-10+5;
 by3=by3-10+5;
 ty1=ty1-10+5;
 ty2=ty2-10+5;
 ty3=ty3-10+5;
 ty4=ty4-10+5;
 tsy1=tsy1-10+5;
 tsy2= tsy2-10+5;
 tsy3=tsy3-10+5;
 cdy1=cdy1-10+5;
 cdy2=cdy2-10+5;
cdy3=cdy3-10+5;
 oy1=oy1-10+5;
 oy2=oy2-10+5;
 oy3=oy3-10+5;
 pgey1=pgey1-10+5;
 pgey2=pgey2-10+5;
 pgey3=pgey3-10+5;
 pgey4= pgey4-10+5;
 pgdy1=pgdy1-10+5;
 pgdy2= pgdy2-10+5;
  pgdy3=pgdy3-10+5;
pgdy4=pgdy4-10+5;
 aey1=aey1-10+5;
 aey2=aey2-10+5;
 aey3=aey3-10+5;
 ady1=ady1-10+5;
 ady2=ady2-10+5;
 ady3=ady3-10+5;
 pmy1=pmy1-10+5;
 pmy2=pmy2-10+5;
 pmy3=pmy3-10+5;
 pmy4= pmy4-10+5;
 pm2y1=pm2y1-10+5;
 pm2y2= pm2y2-10+5;
 pm2y3=pm2y3-10+5;
 pm2y4=pm2y4-10+5;
 ppy1=ppy1-10+5;
 ppy2=ppy2-10+5;
 ppy3=ppy3-10+5;
 ppy4=ppy4-10+5;
 pp2y1=pp2y1-10+5;
 pp2y2= pp2y2-10+5;
 pp2y3= pp2y3-10+5;
 pp2y4= pp2y4-10+5;
 cd2y1=cd2y1-10+5;
 cd2y2=cd2y2-10+5;
 cd2y3=cd2y3-10+5;
 cd2y4=cd2y4-10+5;
 cd3y1=cd3y1-10+5;
 cd3y2=cd3y2-10+5;
 cd3y3=cd3y3-10+5;
 cd3y4=cd3y4-10+5;
 cd4y1=cd4y1-10+5;
 cd4y2=cd4y2-10+5;
 cd4y3=cd4y3-10+5;
 cd4y4=cd4y4-10+5;

if(cy1<=150){
   cy1=150;
 cy2=150;
 cy3=200;
 cy4=200;
 py1=200;
 py2=200;
 py3=250;
 py4=250;
 by1=200;
 by2=200;
 by3=245;
 ty1=250;
 ty2=250;
 ty3=600;
 ty4=450;
 tsy1=500;
 tsy2=600;
 tsy3=600;
 cdy1=600;
 cdy2=600;
 cdy3=750;
 oy1=300;
 oy2=350;
 oy3=100;
 pgey1=50;
 pgey2=100;
 pgey3=450;
 pgey4=150;
 pgdy1=450;
 pgdy2=100;
 pgdy3=50;
 pgdy4=150;
 aey1=100;
 aey2=350;
 aey3=450;
 ady1=100;
 ady2=450;
 ady3=350;
 pmy1=235;
 pmy2=250;
 pmy3=350;
 pmy4=450;
 pm2y1=357;
 pm2y2=380;
 pm2y3=410;
 pm2y4=450;
 ppy1=450;
 ppy2=417;
 ppy3=450;
 ppy4=480;
 pp2y1=450;
 pp2y2=465;
 pp2y3=530;
 pp2y4=500
 cd2y1=600;
 cd2y2=750;
 cd2y3=900;
 cd2y4=750;
 cd3y1=600;
 cd3y2=630;
cd3y3=700;
 cd3y4=650;
 cd4y1=600;
 cd4y2=650;
 cd4y3=800;
 cd4y4=700;
 
}
}
function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
 }