鍵盤發電機
=======

有聽過腳踏車發電，沒聽過鍵盤也能發電吧？還不pull下來玩玩 XD

安裝
---

1. npm install
2. node app.js

開始玩
---

預設port是500

[http://your-domain-name:500](http://your-domain-name:500)

起源
---

與 @stevechiou 及 @vansteki 於百度黑客松所開發出來的一支小遊戲，其寓意大過於其用途，旨在於提醒世人電力仍須好好珍惜，莫忘了電力得來不易。

玩法簡述
---

偵測使用者的鍵盤事件，藉由連續點擊方向鍵左右鍵來使電力提升，同時 nodejs socket 蒐集來自各方的"電力"，並將目前的電力值傳給各個使用者以得知目前電力，直到電力值滿檔時秀出彩蛋。XDDDD