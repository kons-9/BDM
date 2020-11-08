//5V
#define VDD 5
#define PI 3.1415926535897932384626433832795
#define AVE_COUNT 100
 
void setup()
{
  // シリアルモニターの初期化をする
  Serial.begin(9600);
}
void loop()
{
  long x_data=0, y_data=0, z_data=0;
  
  // 各データをAVE_COUNT回読込んで平均化する
  for (int i=0 ; i < AVE_COUNT ; i++) {
    x_data = x_data + analogRead(3) ;  // Ｘ軸を読込む
    y_data = y_data + analogRead(4) ;  // Ｙ軸を読込む
    z_data = z_data + analogRead(5) ;  // Ｚ軸を読込む
  }
  x_data = x_data / AVE_COUNT;
  y_data = y_data / AVE_COUNT;
  z_data = z_data / AVE_COUNT;
  
  //加速度0で0になるように調整
  int x = x-VDD*100;
  x = abs(dx);
  int y = y-VDD*100;
  double z = z-VDD*100;

  //z軸との角度のみ必要
  double r = x * sqrt(1+y/x*y/x);
  double theta =abs(atan(r/z)/2/PI*360);

  //表示
  Serial.print("r: ");Serial.print(r);
  Serial.print(" ");
  Serial.print("theta: ");Serial.println(theta);
  
  delay(100);
}
