import{_ as t,c as e,o as r,d as a}from"./app.1d324d3b.js";const l="/assets/tx-rx.23883e40.webp",m=JSON.parse('{"title":"Как выбрать аппаратуру радиоуправления?","description":"","frontmatter":{},"headers":[{"level":2,"title":"Резюме","slug":"резюме","link":"#резюме","children":[]},{"level":2,"title":"Протоколы передачи данных","slug":"протоколы-передачи-данных","link":"#протоколы-передачи-данных","children":[]},{"level":2,"title":"Передатчик и приемник","slug":"передатчик-и-приемник","link":"#передатчик-и-приемник","children":[]},{"level":2,"title":"Выбор аппаратуры","slug":"выбор-аппаратуры","link":"#выбор-аппаратуры","children":[]},{"level":2,"title":"Рекомендуемые аппаратуры","slug":"рекомендуемые-аппаратуры","link":"#рекомендуемые-аппаратуры","children":[]},{"level":2,"title":"Необходимые аксессуары","slug":"необходимые-аксессуары","link":"#необходимые-аксессуары","children":[]}],"relativePath":"intro/tx.md"}'),o={name:"intro/tx.md"},p=a('<h1 id="как-выбрать-аппаратуру-радиоуправления" tabindex="-1">Как выбрать аппаратуру радиоуправления? <a class="header-anchor" href="#как-выбрать-аппаратуру-радиоуправления" aria-hidden="true">#</a></h1><blockquote><p>Авторы: <a href="https://github.com/EIIIE" target="_blank" rel="noreferrer">Андрей Щ.</a>, <a href="https://github.com/ikherty" target="_blank" rel="noreferrer">Валентина</a></p></blockquote><h2 id="резюме" tabindex="-1">Резюме <a class="header-anchor" href="#резюме" aria-hidden="true">#</a></h2><p>Аппаратура Радиоуправления (она же Аппаратура РУ, transmitter, пульт, аппа, джойстик) - устройство, преобразующее положения стиков/джойстиков/тумблеров в команды для коптера. Положение стиков отправляются на передатчик, преобразующий сигналы в команды определенного протокола передачи данных. Команды передаются коптеру &quot;по воздуху&quot; на определенной частоте (обычно 900 МГЦ или 2.4 ГГЦ). На борту коптера команды принимает радиоприемник (receiver, rx) и отправляет их на полетный контроллер для исполнения.</p><p><img src="'+l+'" alt=""></p><h2 id="протоколы-передачи-данных" tabindex="-1">Протоколы передачи данных <a class="header-anchor" href="#протоколы-передачи-данных" aria-hidden="true">#</a></h2><p>Немаловажный момент в выборе радиолинка - протокол, по которому команды передаются на дрон.</p><p>На конец 2022 года наиболее популярными радио системами являются:</p><p><strong>TBS CROSSFIRE</strong> - дальнобойная система, работающая на частоте 900 МГц, позволяющая ставить рекорды в сотни километров при соблюдении определенного ряда условий (локация, тип ЛА, настройки передатчика, расположение антенн и многое другое). Плюсы и минусы:</p><ul><li>На первый взгляд user friendly программное обеспечение для настройки и обновления прошивки, очень подробная документация, отзывчивая поддержка. Однако, за последний год было немало проблем с &quot;окирпичиванием&quot; встроенного модуля tbs tango. Для исправления ошибки приходилось обращаться в чаты или поддержку, так как инструкции по устранению подобной проблемы в документации отсутствовали.</li><li>В теории при идеальных условиях управление с помощью этой системы будет еще некоторое время оставаться после обрыва видеосвязи, поскольку частота ниже и длина волны больше, чем у стандартных радиопротоколов на 2,4 ГГц и самой распространенной видеосвязи на частоте 5,8 ГГц. Но это не гарантирует, что вы никогда не потеряете связь с аппаратурой до проблем с видео.</li><li>Система является закрытой, достаточно сложно убедить производителя что-либо исправить или самому доработать.</li><li>Не подходит для гонок на профессиональном уровне из-за ощутимых (для топ пилотов) задержек передачи команд, так как работает на частоте 900 МГЦ.</li><li>Дорого в сравнении с некоторыми аналогами, поскольку особо нет конкурентов в том же сегменте.</li><li>Корректно работает только на частоте отправки пакетов в 50 Гц, при выборе 150 Гц нередко теряет связь вблизи</li><li>Подойдет любителям ставить рекорды на дальность и летать в сложных условиях.</li></ul><p><strong>EXPRESS LRS (сокращенно ELRS)</strong> - в сравнении с tbs crossfire новая система, создаваемая самим сообществом. Есть версия на 900 МГц и 2,4 ГГц. Рекомендуется версия на 2.4 ГГЦ.</p><ul><li>Коды и схемы в открытом доступе, что мотивировало производителей железа выпускать приемники, передатчики, полетные контроллеры со встроенным приемником, и появилась высокая конкуренция. Как результат - лучший вариант по соотношению цена/качество, самое актуальное железо по минимальной цене.</li><li>Дальность передачи команд легко превышает дальность работы видеопотока (умельцы летают десятки километров, на данный момент рекорд 50 км, посмотреть таблицу с тестами можно здесь: <a href="https://www.expresslrs.org/2.0/info/long-range" target="_blank" rel="noreferrer">https://www.expresslrs.org/2.0/info/long-range</a>)</li><li>Минимальные задержки передачи данных, поскольку можно выбрать частоту отправки пакетов вплоть до 500 Гц -&gt; отлично подходит для гонок (но учтите, что дальность при этом уменьшается)</li><li>Среди доступных на рынке приемников есть линейка самых легких и компактных (см. happymodel ep2)</li><li>Программное обеспечение постепенно улучшается, упрощается для пользователя. Документация также обширна и подробна. Для избежания проблем с прошивками рекомендуется брать наиболее популярное железо с наименьшим количеством &quot;косяков&quot; за время роста проекта (например, happymodel)</li><li>Новое железо от производителей появляется каждый месяц и разработчики не всегда успевают выпускать софт для них или исправлять ошибки. Поэтому надо быть готовым к тому, что с некоторыми платами придется подождать прошивок или исправлений. Если вы нашли проблему, можете сообщить о ней или поискать по ключевым словам в <a href="https://github.com/ExpressLRS/ExpressLRS" target="_blank" rel="noreferrer">репозитории ExpressLRS</a> заведенные заявки (issues) и обязательно получите решение в ближайшее время. Также есть чат, где без проблем помогут - <a href="https://t.me/expresslrs_rus" target="_blank" rel="noreferrer">@expresslrs_rus</a></li></ul><p>Конкуренты ELRS, но с закрытыми прошивками:</p><p><strong>TBS TRACER</strong> - если кратко: &quot;натянули CROSSFIRE на гонщиков&quot;. Работает на 2.4 ГГЦ, быстрее чем CROSSFIRE, так же прост в использовании. Не такой быстрый как ELRS, не такой дальнобойный как CROSSFIRE, первое время были проблемы с дальностью. Cо временем вышли новые прошивки с исправлением, но все еще имеет место быть.</p><p><strong>IMMERSION RC GHOST</strong> - соперник ELRS по минимизации задержек передачи команд. Наиболее распространен в штатах, вероятно, ввиду доступности. В основном используется топ гонщиками.</p><p><strong>Устаревшее и что не стоит брать с 2020 года для дронов: frsky, flysky, dsmx(spektrum)...</strong></p><p>Таким образом, как правило новичкам рекомендуется начинать с ELRS - дешевый и доступный вход. Но если не важна задержка и планируется в основном Long Range - можно посмотреть в сторону tbs crossfire.</p><p>Подробно про протоколы - <a href="https://oscarliang.com/rc-protocols/" target="_blank" rel="noreferrer">https://oscarliang.com/rc-protocols/</a> (английский язык)</p><h2 id="передатчик-и-приемник" tabindex="-1">Передатчик и приемник <a class="header-anchor" href="#передатчик-и-приемник" aria-hidden="true">#</a></h2><p>Аппаратура и коптер общаются между собой при помощи передатчика и приемника. Передатчик в аппаратуре может быть как встроенным (распаянным на плате), так и внешним (вставляющимся в слот расширения). Встроенный модуль, как правило, удобнее ввиду компактности, в некоторых случаях потребляет меньше питания, чем внешний, но максимальная мощность может быть ограничена 250мВт (чего в целом достаточно даже для 50 км, если глянуть таблицу с тестами на сайте ELRS, но в некоторых случаях может быть мало).</p><p align="center"><img src="http://www.multirotorguide.com/wp-content/uploads/2021/06/TBS-Mambo-Tracer-module-and-PCB-antenna-picture-by-LIVYU-768x520.jpg" height="300" alt="аппаратура без кожуха"><img src="https://www.fpvknowitall.com/wp-content/uploads/2021/12/happy-odel-2.4ghz-es24tx-es24tx-Express-fpv-know-it-all-joshua-bardwell.webp" height="400" alt="модуль ELRS"></p><p>В свою очередь, приемник - это небольшая плата с антеннами, устанавливающаяся на сам дрон и подключающаяся к его полетному контроллеру.</p><p align="center"><img src="https://www.fpvknowitall.com/wp-content/uploads/2020/06/xsr-receiver-fpv-know-it-all-joshua-bardwell.jpg" height="200" title="FrSky R-XSR приемник"><img src="https://www.fpvknowitall.com/wp-content/uploads/2021/12/happymodel-2.4-ghz-ep2-fpv-know-it-all-joshua-bardwell-300x258.webp" height="200" alt="Приемник большого радиуса Happymodel express SLRS ELRS 2.4GHz"><img src="https://www.fpvknowitall.com/wp-content/uploads/2021/04/immersion-rc-ghost-atto-reciever-fpv-know-it-all-joshua-bardwell.jpg" height="200" title="Приемник Ghost Atto"></p><p><strong>Не важны различия в производителях передатчика и приемника, пока они оба работают на одном протоколе. Но если речь идет про ELRS, лучше изучить рекомендации и тесты железа разных производителей.</strong></p><h2 id="выбор-аппаратуры" tabindex="-1">Выбор аппаратуры <a class="header-anchor" href="#выбор-аппаратуры" aria-hidden="true">#</a></h2><p>Обновляемая статья на английском языке про аппаратуры достойные внимания - <a href="https://oscarliang.com/radio-transmitter/" target="_blank" rel="noreferrer">https://oscarliang.com/radio-transmitter/</a></p><p>Краткий перечень на английском языке без &quot;воды&quot; - <a href="https://www.fpvknowitall.com/fpv-shopping-list-controller-and-receiver/" target="_blank" rel="noreferrer">https://www.fpvknowitall.com/fpv-shopping-list-controller-and-receiver/</a></p><p>Если в статьях выше нет аппаратуры, которая вас интересует, то либо она слишком новая, либо не стоит вашего внимания.</p><h2 id="рекомендуемые-аппаратуры" tabindex="-1">Рекомендуемые аппаратуры <a class="header-anchor" href="#рекомендуемые-аппаратуры" aria-hidden="true">#</a></h2><p>Настоятельно рекомендуется рассматривать аппаратуры, работающие на ПО OpenTX (потомком которого является EdgeTX). Это как операционная система компьютера. С ним ты будешь уверен, что спокойно подключишь к симулятору и будешь продолжать получать обновления с новыми фишками.</p><p><strong>RADIOMASTER TX16S</strong> - Если у тебя большие руки, нужно много свитчей (переключателей, тумблеров, потов/крутилок), хочется (зачем-то) большой экран</p><p>Цены обычно от 200$, есть версии со встроенным ELRS (внимательно читайте описание, не путайте с мультимодулем (4in1, cc2500), который не включает в себя ELRS и Crossfire). Можно поставить внешний передатчик по вкусу (30-250$). Существует в различных модификациях - цветные корпусы, алюминиевые стики, с тачскрином.</p><p align="center"><img src="https://www.fpvknowitall.com/wp-content/uploads/2020/06/tx16s-fpv-know-it-all-joshua-bardwell.jpg" height="400" alt="аппаратура RADIOMASTER TX16S"></p><p><strong>RADIOMASTER TX12 mk2</strong> - Компактная версия &quot;кирпичика&quot;, достаточное для управления коптерами количество свитчей, черно-белый экран (это не недостаток, он нужен только для отображения меню настроек и моделей)</p><p>Цены обычно от 80$, есть версии со встроенным ELRS (внимательно читайте описание, можно поставить внешний передатчик по вкусу (30-250$)). Отдельно можно приобрести цветные корпусы, алюминиевые стики. Универсальный вариант для начала, когда не понятно, что хочется. Легко будет продать в любой момент на барахолке, если по какой-либо причине &quot;не зайдет&quot;.</p><p align="center"><img src="https://cdn.shopify.com/s/files/1/0609/8324/7079/products/1000X1000-2_1800x1800.jpg?v=1659343246" height="400" alt="аппаратура RADIOMASTER TX12"></p><p><strong>TBS TANGO 2</strong> - Компактный минимум, если цель путешествовать налегке. Не путать с первой версией 😃</p><p>Есть обычная версия за 160$ и pro за 200$. В России цены от 20 тыс. руб., продавцы объсняют такую разницу сложностями поставок.</p><p align="center"><img src="https://www.team-blacksheep.com/img/gallery/A7300896.JPG" height="400" alt="аппаратура TBS Tango 2"></p><p>Встроенный передатчик TBS CROSSFIRE. При особой любви и необходимости можно установить внешний передатчик. Также есть вариант встроить ELRS модуль с небольшой мощностью для полетов неподалеку, как <a href="https://www.youtube.com/watch?v=2cn96u_nlnw" target="_blank" rel="noreferrer">в этом видео</a>. Крайне маленький экран, но для полетов в режиме FPV он и не нужен. Кнопки вместо тумблеров - дело на любителя, но не всегда получается моментально &quot;задизармить&quot; коптер (то есть выключить моторы). Бывают проблемы со стиками: поскольку используется &quot;супер технология&quot; с одним датчиком на 2 оси, калибровку надо производить строго по инструкции производителя. Сами стики &quot;разведены&quot; на материнской плате, поэтому нет возможности легко заменить их на другие, как в случае с аппаратурами Radiomaster. Иногда бывают проблемы с глюками экрана, &quot;окирпичиванием&quot; модуля при прошивке, требованием калибровки при запуске. Но, несмотря на это, все еще пользуется популярностью.</p><p><strong>Jumper T-pro, Jumper T-Lite, Radiomaster Zorro</strong> - когда хочется аналог TBS Tango со встроенным ELRS</p><p>Цены 50-100$, некий компромисс, когда хочется компактности, встроенный модуль ELRS. У всех претендентов есть свои плюсы и минусы, рекомендуется глянуть обзоры перед покупкой. У <a href="https://github.com/ikherty" target="_blank" rel="noreferrer">Валентины</a> аппаратура Zorro. Главный недостаток этой аппаратуры - аккумуляторы 18350 (нестандартный труднодоступный вариант Li-Ion аккумуляторов). Встроенная зарядка в аппаратуре не балансировала ячейки при зарядке как следует, и, как итог, аккумулятор испортился и требует постоянного контроля за нагревом. Приходится использовать внешний 2S аккумулятор. По габаритам аппаратура как Radiomaster TX12. Eсли бы они вышли одновременно, то стоило бы приобретать ТХ12, поскольку там адекватные 18650 ячейки.</p><p><strong>TBS MAMBO</strong> - Как TBS TANGO 2, но привычнее и ещё дешевле, подойдет для фанатов TBS Tracer</p><p>140$, в России часто от 18 тыс. руб.</p><p align="center"><img src="https://www.team-blacksheep.com/img/gallery/A7301739.JPG" height="400" alt="аппаратура TBS Mambo"></p><p>Встроенный передатчик TBS Tracer. У аппаратуры большое количество свитчей, полноценный черно-белый экран, есть слот под внешний передатчик. Из недостатков: ощущается дешевле ранее упомянутых аппаратур, стики как у танго 2. Формфактор кирпичика на любителя.</p><h2 id="необходимые-аксессуары" tabindex="-1">Необходимые аксессуары <a class="header-anchor" href="#необходимые-аксессуары" aria-hidden="true">#</a></h2><ul><li>Аккумулятор - если в аппаратуре нет встроенной батареи, то необходимо обзавестись подходящей по размеру в аппаратуру. Как правило используются сборки 2S или две ячейки Li-Ion 18650 в переходнике под 2S.</li></ul><p align="center"><img src="https://www.fpvknowitall.com/wp-content/uploads/2020/11/rdq-series-7.4v-2s-5000mah-tx16s-tx16s-compatible-lipo-battery-xt60-fpv-know-it-all-joshua-bardwell.jpg" height="200" alt="аккумуляторная батарея совместимая с Radiomaster TX16s"></p><ul><li>Ремешок для шеи - держать аппаратуру в руках на весу в течении пары часов может быть ещё тем испытанием. Рекомендуется, чтобы у ремешка был Fastex (пластиковый карабин посередине) для случаев, когда необходимо положить аппаратуру, не снимая сам ремешок через голову, на которой наверняка FPV очки.</li></ul><p align="center"><img src="https://www.fpvknowitall.com/wp-content/uploads/2020/06/best-fpv-neck-strap-fpv-know-it-all-joshua-bardwell.jpg" height="200" alt="ремешок для шеи"></p>',51),s=[p];function i(n,h,c,g,d,u){return r(),e("div",null,s)}const f=t(o,[["render",i]]);export{m as __pageData,f as default};
